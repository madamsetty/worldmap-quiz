(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Bl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const lt={},Br=[],Hn=()=>{},jp=()=>!1,Va=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Hl=t=>t.startsWith("onUpdate:"),wt=Object.assign,kl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Kp=Object.prototype.hasOwnProperty,Qe=(t,e)=>Kp.call(t,e),Ne=Array.isArray,Hr=t=>za(t)==="[object Map]",md=t=>za(t)==="[object Set]",ke=t=>typeof t=="function",Et=t=>typeof t=="string",Ni=t=>typeof t=="symbol",dt=t=>t!==null&&typeof t=="object",_d=t=>(dt(t)||ke(t))&&ke(t.then)&&ke(t.catch),gd=Object.prototype.toString,za=t=>gd.call(t),Zp=t=>za(t).slice(8,-1),vd=t=>za(t)==="[object Object]",Gl=t=>Et(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ds=Bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jp=/-(\w)/g,Li=Wa(t=>t.replace(Jp,(e,n)=>n?n.toUpperCase():"")),Qp=/\B([A-Z])/g,cr=Wa(t=>t.replace(Qp,"-$1").toLowerCase()),Ed=Wa(t=>t.charAt(0).toUpperCase()+t.slice(1)),uo=Wa(t=>t?`on${Ed(t)}`:""),Ti=(t,e)=>!Object.is(t,e),fo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},xd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},em=t=>{const e=parseFloat(t);return isNaN(e)?t:e},tm=t=>{const e=Et(t)?Number(t):NaN;return isNaN(e)?t:e};let Cc;const Xa=()=>Cc||(Cc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vl(t){if(Ne(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Et(i)?sm(i):Vl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Et(t)||dt(t))return t}const nm=/;(?![^(]*\))/g,im=/:([^]+)/,rm=/\/\*[^]*?\*\//g;function sm(t){const e={};return t.replace(rm,"").split(nm).forEach(n=>{if(n){const i=n.split(im);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function zl(t){let e="";if(Et(t))e=t;else if(Ne(t))for(let n=0;n<t.length;n++){const i=zl(t[n]);i&&(e+=i+" ")}else if(dt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const am="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",om=Bl(am);function Sd(t){return!!t||t===""}const Md=t=>!!(t&&t.__v_isRef===!0),Dr=t=>Et(t)?t:t==null?"":Ne(t)||dt(t)&&(t.toString===gd||!ke(t.toString))?Md(t)?Dr(t.value):JSON.stringify(t,yd,2):String(t),yd=(t,e)=>Md(e)?yd(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[ho(i,s)+" =>"]=r,n),{})}:md(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ho(n))}:Ni(e)?ho(e):dt(e)&&!Ne(e)&&!vd(e)?String(e):e,ho=(t,e="")=>{var n;return Ni(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Qt;class Td{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qt,!e&&Qt&&(this.index=(Qt.scopes||(Qt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Qt;try{return Qt=this,e()}finally{Qt=n}}}on(){++this._on===1&&(this.prevScope=Qt,Qt=this)}off(){this._on>0&&--this._on===0&&(Qt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function lm(t){return new Td(t)}function cm(){return Qt}let ot;const po=new WeakSet;class bd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qt&&Qt.active&&Qt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,po.has(this)&&(po.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wc(this),Cd(this);const e=ot,n=Cn;ot=this,Cn=!0;try{return this.fn()}finally{wd(this),ot=e,Cn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Yl(e);this.deps=this.depsTail=void 0,wc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?po.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sl(this)&&this.run()}get dirty(){return sl(this)}}let Ad=0,hs,ps;function Rd(t,e=!1){if(t.flags|=8,e){t.next=ps,ps=t;return}t.next=hs,hs=t}function Wl(){Ad++}function Xl(){if(--Ad>0)return;if(ps){let e=ps;for(ps=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;hs;){let e=hs;for(hs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Cd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Yl(i),um(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function sl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ld(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ss)||(t.globalVersion=Ss,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!sl(t))))return;t.flags|=2;const e=t.dep,n=ot,i=Cn;ot=t,Cn=!0;try{Cd(t);const r=t.fn(t._value);(e.version===0||Ti(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{ot=n,Cn=i,wd(t),t.flags&=-3}}function Yl(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Yl(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function um(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Cn=!0;const Pd=[];function si(){Pd.push(Cn),Cn=!1}function ai(){const t=Pd.pop();Cn=t===void 0?!0:t}function wc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ot;ot=void 0;try{e()}finally{ot=n}}}let Ss=0;class fm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $l{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ot||!Cn||ot===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ot)n=this.activeLink=new fm(ot,this),ot.deps?(n.prevDep=ot.depsTail,ot.depsTail.nextDep=n,ot.depsTail=n):ot.deps=ot.depsTail=n,Id(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ot.depsTail,n.nextDep=void 0,ot.depsTail.nextDep=n,ot.depsTail=n,ot.deps===n&&(ot.deps=i)}return n}trigger(e){this.version++,Ss++,this.notify(e)}notify(e){Wl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xl()}}}function Id(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Id(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const al=new WeakMap,nr=Symbol(""),ol=Symbol(""),Ms=Symbol("");function Bt(t,e,n){if(Cn&&ot){let i=al.get(t);i||al.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new $l),r.map=i,r.key=n),r.track()}}function ei(t,e,n,i,r,s){const a=al.get(t);if(!a){Ss++;return}const o=l=>{l&&l.trigger()};if(Wl(),e==="clear")a.forEach(o);else{const l=Ne(t),c=l&&Gl(n);if(l&&n==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===Ms||!Ni(d)&&d>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(Ms)),e){case"add":l?c&&o(a.get("length")):(o(a.get(nr)),Hr(t)&&o(a.get(ol)));break;case"delete":l||(o(a.get(nr)),Hr(t)&&o(a.get(ol)));break;case"set":Hr(t)&&o(a.get(nr));break}}Xl()}function ur(t){const e=Je(t);return e===t?e:(Bt(e,"iterate",Ms),wn(t)?e:e.map(qt))}function ql(t){return Bt(t=Je(t),"iterate",Ms),t}const dm={__proto__:null,[Symbol.iterator](){return mo(this,Symbol.iterator,qt)},concat(...t){return ur(this).concat(...t.map(e=>Ne(e)?ur(e):e))},entries(){return mo(this,"entries",t=>(t[1]=qt(t[1]),t))},every(t,e){return zn(this,"every",t,e,void 0,arguments)},filter(t,e){return zn(this,"filter",t,e,n=>n.map(qt),arguments)},find(t,e){return zn(this,"find",t,e,qt,arguments)},findIndex(t,e){return zn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return zn(this,"findLast",t,e,qt,arguments)},findLastIndex(t,e){return zn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return zn(this,"forEach",t,e,void 0,arguments)},includes(...t){return _o(this,"includes",t)},indexOf(...t){return _o(this,"indexOf",t)},join(t){return ur(this).join(t)},lastIndexOf(...t){return _o(this,"lastIndexOf",t)},map(t,e){return zn(this,"map",t,e,void 0,arguments)},pop(){return ts(this,"pop")},push(...t){return ts(this,"push",t)},reduce(t,...e){return Lc(this,"reduce",t,e)},reduceRight(t,...e){return Lc(this,"reduceRight",t,e)},shift(){return ts(this,"shift")},some(t,e){return zn(this,"some",t,e,void 0,arguments)},splice(...t){return ts(this,"splice",t)},toReversed(){return ur(this).toReversed()},toSorted(t){return ur(this).toSorted(t)},toSpliced(...t){return ur(this).toSpliced(...t)},unshift(...t){return ts(this,"unshift",t)},values(){return mo(this,"values",qt)}};function mo(t,e,n){const i=ql(t),r=i[e]();return i!==t&&!wn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const hm=Array.prototype;function zn(t,e,n,i,r,s){const a=ql(t),o=a!==t&&!wn(t),l=a[e];if(l!==hm[e]){const f=l.apply(t,s);return o?qt(f):f}let c=n;a!==t&&(o?c=function(f,d){return n.call(this,qt(f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Lc(t,e,n,i){const r=ql(t);let s=n;return r!==t&&(wn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,qt(o),l,t)}),r[e](s,...i)}function _o(t,e,n){const i=Je(t);Bt(i,"iterate",Ms);const r=i[e](...n);return(r===-1||r===!1)&&Jl(n[0])?(n[0]=Je(n[0]),i[e](...n)):r}function ts(t,e,n=[]){si(),Wl();const i=Je(t)[e].apply(t,n);return Xl(),ai(),i}const pm=Bl("__proto__,__v_isRef,__isVue"),Dd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ni));function mm(t){Ni(t)||(t=String(t));const e=Je(this);return Bt(e,"has",t),e.hasOwnProperty(t)}class Nd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?bm:Bd:s?Fd:Od).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ne(e);if(!r){let l;if(a&&(l=dm[n]))return l;if(n==="hasOwnProperty")return mm}const o=Reflect.get(e,n,It(e)?e:i);return(Ni(n)?Dd.has(n):pm(n))||(r||Bt(e,"get",n),s)?o:It(o)?a&&Gl(n)?o:o.value:dt(o)?r?Hd(o):Kl(o):o}}class Ud extends Nd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=ar(s);if(!wn(i)&&!ar(i)&&(s=Je(s),i=Je(i)),!Ne(e)&&It(s)&&!It(i))return l?!1:(s.value=i,!0)}const a=Ne(e)&&Gl(n)?Number(n)<e.length:Qe(e,n),o=Reflect.set(e,n,i,It(e)?e:r);return e===Je(r)&&(a?Ti(i,s)&&ei(e,"set",n,i):ei(e,"add",n,i)),o}deleteProperty(e,n){const i=Qe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ei(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ni(n)||!Dd.has(n))&&Bt(e,"has",n),i}ownKeys(e){return Bt(e,"iterate",Ne(e)?"length":nr),Reflect.ownKeys(e)}}class _m extends Nd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gm=new Ud,vm=new _m,Em=new Ud(!0);const ll=t=>t,Ws=t=>Reflect.getPrototypeOf(t);function xm(t,e,n){return function(...i){const r=this.__v_raw,s=Je(r),a=Hr(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?ll:e?cl:qt;return!e&&Bt(s,"iterate",l?ol:nr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Xs(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Sm(t,e){const n={get(r){const s=this.__v_raw,a=Je(s),o=Je(r);t||(Ti(r,o)&&Bt(a,"get",r),Bt(a,"get",o));const{has:l}=Ws(a),c=e?ll:t?cl:qt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Bt(Je(r),"iterate",nr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=Je(s),o=Je(r);return t||(Ti(r,o)&&Bt(a,"has",r),Bt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Je(o),c=e?ll:t?cl:qt;return!t&&Bt(l,"iterate",nr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return wt(n,t?{add:Xs("add"),set:Xs("set"),delete:Xs("delete"),clear:Xs("clear")}:{add(r){!e&&!wn(r)&&!ar(r)&&(r=Je(r));const s=Je(this);return Ws(s).has.call(s,r)||(s.add(r),ei(s,"add",r,r)),this},set(r,s){!e&&!wn(s)&&!ar(s)&&(s=Je(s));const a=Je(this),{has:o,get:l}=Ws(a);let c=o.call(a,r);c||(r=Je(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Ti(s,u)&&ei(a,"set",r,s):ei(a,"add",r,s),this},delete(r){const s=Je(this),{has:a,get:o}=Ws(s);let l=a.call(s,r);l||(r=Je(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&ei(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,a=r.clear();return s&&ei(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=xm(r,t,e)}),n}function jl(t,e){const n=Sm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Qe(n,r)&&r in i?n:i,r,s)}const Mm={get:jl(!1,!1)},ym={get:jl(!1,!0)},Tm={get:jl(!0,!1)};const Od=new WeakMap,Fd=new WeakMap,Bd=new WeakMap,bm=new WeakMap;function Am(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rm(t){return t.__v_skip||!Object.isExtensible(t)?0:Am(Zp(t))}function Kl(t){return ar(t)?t:Zl(t,!1,gm,Mm,Od)}function Cm(t){return Zl(t,!1,Em,ym,Fd)}function Hd(t){return Zl(t,!0,vm,Tm,Bd)}function Zl(t,e,n,i,r){if(!dt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Rm(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function ms(t){return ar(t)?ms(t.__v_raw):!!(t&&t.__v_isReactive)}function ar(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function Jl(t){return t?!!t.__v_raw:!1}function Je(t){const e=t&&t.__v_raw;return e?Je(e):t}function wm(t){return!Qe(t,"__v_skip")&&Object.isExtensible(t)&&xd(t,"__v_skip",!0),t}const qt=t=>dt(t)?Kl(t):t,cl=t=>dt(t)?Hd(t):t;function It(t){return t?t.__v_isRef===!0:!1}function Ft(t){return Gd(t,!1)}function kd(t){return Gd(t,!0)}function Gd(t,e){return It(t)?t:new Lm(t,e)}class Lm{constructor(e,n){this.dep=new $l,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Je(e),this._value=n?e:qt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||wn(e)||ar(e);e=i?e:Je(e),Ti(e,n)&&(this._rawValue=e,this._value=i?e:qt(e),this.dep.trigger())}}function Pm(t){return It(t)?t.value:t}const Im={get:(t,e,n)=>e==="__v_raw"?t:Pm(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return It(r)&&!It(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Vd(t){return ms(t)?t:new Proxy(t,Im)}class Dm{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new $l(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ss-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ot!==this)return Rd(this,!0),!0}get value(){const e=this.dep.track();return Ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Nm(t,e,n=!1){let i,r;return ke(t)?i=t:(i=t.get,r=t.set),new Dm(i,r,n)}const Ys={},Aa=new WeakMap;let Ki;function Um(t,e=!1,n=Ki){if(n){let i=Aa.get(n);i||Aa.set(n,i=[]),i.push(t)}}function Om(t,e,n=lt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=M=>r?M:wn(M)||r===!1||r===0?xi(M,1):xi(M);let u,f,d,_,x=!1,v=!1;if(It(t)?(f=()=>t.value,x=wn(t)):ms(t)?(f=()=>c(t),x=!0):Ne(t)?(v=!0,x=t.some(M=>ms(M)||wn(M)),f=()=>t.map(M=>{if(It(M))return M.value;if(ms(M))return c(M);if(ke(M))return l?l(M,2):M()})):ke(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){si();try{d()}finally{ai()}}const M=Ki;Ki=u;try{return l?l(t,3,[_]):t(_)}finally{Ki=M}}:f=Hn,e&&r){const M=f,L=r===!0?1/0:r;f=()=>xi(M(),L)}const m=cm(),p=()=>{u.stop(),m&&m.active&&kl(m.effects,u)};if(s&&e){const M=e;e=(...L)=>{M(...L),p()}}let A=v?new Array(t.length).fill(Ys):Ys;const E=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const L=u.run();if(r||x||(v?L.some((b,R)=>Ti(b,A[R])):Ti(L,A))){d&&d();const b=Ki;Ki=u;try{const R=[L,A===Ys?void 0:v&&A[0]===Ys?[]:A,_];A=L,l?l(e,3,R):e(...R)}finally{Ki=b}}}else u.run()};return o&&o(E),u=new bd(f),u.scheduler=a?()=>a(E,!1):E,_=M=>Um(M,!1,u),d=u.onStop=()=>{const M=Aa.get(u);if(M){if(l)l(M,4);else for(const L of M)L();Aa.delete(u)}},e?i?E(!0):A=u.run():a?a(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function xi(t,e=1/0,n){if(e<=0||!dt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,It(t))xi(t.value,e,n);else if(Ne(t))for(let i=0;i<t.length;i++)xi(t[i],e,n);else if(md(t)||Hr(t))t.forEach(i=>{xi(i,e,n)});else if(vd(t)){for(const i in t)xi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&xi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ns(t,e,n,i){try{return i?t(...i):t()}catch(r){Ya(r,e,n)}}function Pn(t,e,n,i){if(ke(t)){const r=Ns(t,e,n,i);return r&&_d(r)&&r.catch(s=>{Ya(s,e,n)}),r}if(Ne(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Pn(t[s],e,n,i));return r}}function Ya(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||lt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){si(),Ns(s,null,10,[t,l,c]),ai();return}}Fm(t,n,r,i,a)}function Fm(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const jt=[];let Nn=-1;const kr=[];let gi=null,Pr=0;const zd=Promise.resolve();let Ra=null;function Bm(t){const e=Ra||zd;return t?e.then(this?t.bind(this):t):e}function Hm(t){let e=Nn+1,n=jt.length;for(;e<n;){const i=e+n>>>1,r=jt[i],s=ys(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Ql(t){if(!(t.flags&1)){const e=ys(t),n=jt[jt.length-1];!n||!(t.flags&2)&&e>=ys(n)?jt.push(t):jt.splice(Hm(e),0,t),t.flags|=1,Wd()}}function Wd(){Ra||(Ra=zd.then(Yd))}function km(t){Ne(t)?kr.push(...t):gi&&t.id===-1?gi.splice(Pr+1,0,t):t.flags&1||(kr.push(t),t.flags|=1),Wd()}function Pc(t,e,n=Nn+1){for(;n<jt.length;n++){const i=jt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;jt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Xd(t){if(kr.length){const e=[...new Set(kr)].sort((n,i)=>ys(n)-ys(i));if(kr.length=0,gi){gi.push(...e);return}for(gi=e,Pr=0;Pr<gi.length;Pr++){const n=gi[Pr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gi=null,Pr=0}}const ys=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Yd(t){try{for(Nn=0;Nn<jt.length;Nn++){const e=jt[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ns(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<jt.length;Nn++){const e=jt[Nn];e&&(e.flags&=-2)}Nn=-1,jt.length=0,Xd(),Ra=null,(jt.length||kr.length)&&Yd()}}let bn=null,$d=null;function Ca(t){const e=bn;return bn=t,$d=t&&t.type.__scopeId||null,e}function qd(t,e=bn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Gc(-1);const s=Ca(e);let a;try{a=t(...r)}finally{Ca(s),i._d&&Gc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ki(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(si(),Pn(l,n,8,[t.el,o,t,e]),ai())}}const Gm=Symbol("_vte"),jd=t=>t.__isTeleport,vi=Symbol("_leaveCb"),$s=Symbol("_enterCb");function Vm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ja(()=>{t.isMounted=!0}),rh(()=>{t.isUnmounting=!0}),t}const fn=[Function,Array],Kd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fn,onEnter:fn,onAfterEnter:fn,onEnterCancelled:fn,onBeforeLeave:fn,onLeave:fn,onAfterLeave:fn,onLeaveCancelled:fn,onBeforeAppear:fn,onAppear:fn,onAfterAppear:fn,onAppearCancelled:fn},Zd=t=>{const e=t.subTree;return e.component?Zd(e.component):e},zm={name:"BaseTransition",props:Kd,setup(t,{slots:e}){const n=Wr(),i=Vm();return()=>{const r=e.default&&eh(e.default(),!0);if(!r||!r.length)return;const s=Jd(r),a=Je(t),{mode:o}=a;if(i.isLeaving)return go(s);const l=Ic(s);if(!l)return go(s);let c=ul(l,a,i,n,f=>c=f);l.type!==Kt&&Ts(l,c);let u=n.subTree&&Ic(n.subTree);if(u&&u.type!==Kt&&!Qi(l,u)&&Zd(n).type!==Kt){let f=ul(u,a,i,n);if(Ts(u,f),o==="out-in"&&l.type!==Kt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},go(s);o==="in-out"&&l.type!==Kt?f.delayLeave=(d,_,x)=>{const v=Qd(i,u);v[String(u.key)]=u,d[vi]=()=>{_(),d[vi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Jd(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Kt){e=n;break}}return e}const Wm=zm;function Qd(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ul(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:_,onAfterLeave:x,onLeaveCancelled:v,onBeforeAppear:m,onAppear:p,onAfterAppear:A,onAppearCancelled:E}=e,M=String(t.key),L=Qd(n,t),b=(S,C)=>{S&&Pn(S,i,9,C)},R=(S,C)=>{const X=C[1];b(S,C),Ne(S)?S.every(O=>O.length<=1)&&X():S.length<=1&&X()},k={mode:a,persisted:o,beforeEnter(S){let C=l;if(!n.isMounted)if(s)C=m||l;else return;S[vi]&&S[vi](!0);const X=L[M];X&&Qi(t,X)&&X.el[vi]&&X.el[vi](),b(C,[S])},enter(S){let C=c,X=u,O=f;if(!n.isMounted)if(s)C=p||c,X=A||u,O=E||f;else return;let ie=!1;const B=S[$s]=$=>{ie||(ie=!0,$?b(O,[S]):b(X,[S]),k.delayedLeave&&k.delayedLeave(),S[$s]=void 0)};C?R(C,[S,B]):B()},leave(S,C){const X=String(t.key);if(S[$s]&&S[$s](!0),n.isUnmounting)return C();b(d,[S]);let O=!1;const ie=S[vi]=B=>{O||(O=!0,C(),B?b(v,[S]):b(x,[S]),S[vi]=void 0,L[X]===t&&delete L[X])};L[X]=t,_?R(_,[S,ie]):ie()},clone(S){const C=ul(S,e,n,i,r);return r&&r(C),C}};return k}function go(t){if($a(t))return t=Pi(t),t.children=null,t}function Ic(t){if(!$a(t))return jd(t.type)&&t.children?Jd(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ke(n.default))return n.default()}}function Ts(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ts(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function eh(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===hn?(a.patchFlag&128&&r++,i=i.concat(eh(a.children,e,o))):(e||a.type!==Kt)&&i.push(o!=null?Pi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function ec(t,e){return ke(t)?wt({name:t.name},e,{setup:t}):t}function th(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function wa(t,e,n,i,r=!1){if(Ne(t)){t.forEach((x,v)=>wa(x,e&&(Ne(e)?e[v]:e),n,i,r));return}if(_s(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&wa(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?sc(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===lt?o.refs={}:o.refs,f=o.setupState,d=Je(f),_=f===lt?()=>!1:x=>Qe(d,x);if(c!=null&&c!==l&&(Et(c)?(u[c]=null,_(c)&&(f[c]=null)):It(c)&&(c.value=null)),ke(l))Ns(l,o,12,[a,u]);else{const x=Et(l),v=It(l);if(x||v){const m=()=>{if(t.f){const p=x?_(l)?f[l]:u[l]:l.value;r?Ne(p)&&kl(p,s):Ne(p)?p.includes(s)||p.push(s):x?(u[l]=[s],_(l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else x?(u[l]=a,_(l)&&(f[l]=a)):v&&(l.value=a,t.k&&(u[t.k]=a))};a?(m.id=-1,on(m,n)):m()}}}Xa().requestIdleCallback;Xa().cancelIdleCallback;const _s=t=>!!t.type.__asyncLoader,$a=t=>t.type.__isKeepAlive;function Xm(t,e){nh(t,"a",e)}function Ym(t,e){nh(t,"da",e)}function nh(t,e,n=Ht){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(qa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)$a(r.parent.vnode)&&$m(i,e,n,r),r=r.parent}}function $m(t,e,n,i){const r=qa(e,t,i,!0);tc(()=>{kl(i[e],r)},n)}function qa(t,e,n=Ht,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{si();const o=Os(n),l=Pn(e,n,t,a);return o(),ai(),l});return i?r.unshift(s):r.push(s),s}}const li=t=>(e,n=Ht)=>{(!As||t==="sp")&&qa(t,(...i)=>e(...i),n)},ih=li("bm"),ja=li("m"),qm=li("bu"),jm=li("u"),rh=li("bum"),tc=li("um"),Km=li("sp"),Zm=li("rtg"),Jm=li("rtc");function Qm(t,e=Ht){qa("ec",t,e)}const e_=Symbol.for("v-ndc"),fl=t=>t?bh(t)?sc(t):fl(t.parent):null,gs=wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>fl(t.parent),$root:t=>fl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ah(t),$forceUpdate:t=>t.f||(t.f=()=>{Ql(t.update)}),$nextTick:t=>t.n||(t.n=Bm.bind(t.proxy)),$watch:t=>M_.bind(t)}),vo=(t,e)=>t!==lt&&!t.__isScriptSetup&&Qe(t,e),t_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(vo(i,e))return a[e]=1,i[e];if(r!==lt&&Qe(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&Qe(c,e))return a[e]=3,s[e];if(n!==lt&&Qe(n,e))return a[e]=4,n[e];dl&&(a[e]=0)}}const u=gs[e];let f,d;if(u)return e==="$attrs"&&Bt(t.attrs,"get",""),u(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(n!==lt&&Qe(n,e))return a[e]=4,n[e];if(d=l.config.globalProperties,Qe(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return vo(r,e)?(r[e]=n,!0):i!==lt&&Qe(i,e)?(i[e]=n,!0):Qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!n[a]||t!==lt&&Qe(t,a)||vo(e,a)||(o=s[0])&&Qe(o,a)||Qe(i,a)||Qe(gs,a)||Qe(r.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Dc(t){return Ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let dl=!0;function n_(t){const e=ah(t),n=t.proxy,i=t.ctx;dl=!1,e.beforeCreate&&Nc(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:_,updated:x,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:E,unmounted:M,render:L,renderTracked:b,renderTriggered:R,errorCaptured:k,serverPrefetch:S,expose:C,inheritAttrs:X,components:O,directives:ie,filters:B}=e;if(c&&i_(c,i,null),a)for(const te in a){const J=a[te];ke(J)&&(i[te]=J.bind(n))}if(r){const te=r.call(n,n);dt(te)&&(t.data=Kl(te))}if(dl=!0,s)for(const te in s){const J=s[te],ae=ke(J)?J.bind(n,n):ke(J.get)?J.get.bind(n,n):Hn,oe=!ke(J)&&ke(J.set)?J.set.bind(n):Hn,ue=At({get:ae,set:oe});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>ue.value,set:fe=>ue.value=fe})}if(o)for(const te in o)sh(o[te],i,n,te);if(l){const te=ke(l)?l.call(n):l;Reflect.ownKeys(te).forEach(J=>{c_(J,te[J])})}u&&Nc(u,t,"c");function Y(te,J){Ne(J)?J.forEach(ae=>te(ae.bind(n))):J&&te(J.bind(n))}if(Y(ih,f),Y(ja,d),Y(qm,_),Y(jm,x),Y(Xm,v),Y(Ym,m),Y(Qm,k),Y(Jm,b),Y(Zm,R),Y(rh,A),Y(tc,M),Y(Km,S),Ne(C))if(C.length){const te=t.exposed||(t.exposed={});C.forEach(J=>{Object.defineProperty(te,J,{get:()=>n[J],set:ae=>n[J]=ae})})}else t.exposed||(t.exposed={});L&&t.render===Hn&&(t.render=L),X!=null&&(t.inheritAttrs=X),O&&(t.components=O),ie&&(t.directives=ie),S&&th(t)}function i_(t,e,n=Hn){Ne(t)&&(t=hl(t));for(const i in t){const r=t[i];let s;dt(r)?"default"in r?s=vs(r.from||i,r.default,!0):s=vs(r.from||i):s=vs(r),It(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Nc(t,e,n){Pn(Ne(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function sh(t,e,n,i){let r=i.includes(".")?Eh(n,i):()=>n[i];if(Et(t)){const s=e[t];ke(s)&&bi(r,s)}else if(ke(t))bi(r,t.bind(n));else if(dt(t))if(Ne(t))t.forEach(s=>sh(s,e,n,i));else{const s=ke(t.handler)?t.handler.bind(n):e[t.handler];ke(s)&&bi(r,s,t)}}function ah(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>La(l,c,a,!0)),La(l,e,a)),dt(e)&&s.set(e,l),l}function La(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&La(t,s,n,!0),r&&r.forEach(a=>La(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=r_[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const r_={data:Uc,props:Oc,emits:Oc,methods:fs,computed:fs,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:fs,directives:fs,watch:a_,provide:Uc,inject:s_};function Uc(t,e){return e?t?function(){return wt(ke(t)?t.call(this,this):t,ke(e)?e.call(this,this):e)}:e:t}function s_(t,e){return fs(hl(t),hl(e))}function hl(t){if(Ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function fs(t,e){return t?wt(Object.create(null),t,e):e}function Oc(t,e){return t?Ne(t)&&Ne(e)?[...new Set([...t,...e])]:wt(Object.create(null),Dc(t),Dc(e??{})):e}function a_(t,e){if(!t)return e;if(!e)return t;const n=wt(Object.create(null),t);for(const i in e)n[i]=Wt(t[i],e[i]);return n}function oh(){return{app:null,config:{isNativeTag:jp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let o_=0;function l_(t,e){return function(i,r=null){ke(i)||(i=wt({},i)),r!=null&&!dt(r)&&(r=null);const s=oh(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:o_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:z_,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ke(u.install)?(a.add(u),u.install(c,...f)):ke(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const _=c._ceVNode||kt(i,r);return _.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(_,u,d),l=!0,c._container=u,u.__vue_app__=c,sc(_.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Pn(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Gr;Gr=c;try{return u()}finally{Gr=f}}};return c}}let Gr=null;function c_(t,e){if(Ht){let n=Ht.provides;const i=Ht.parent&&Ht.parent.provides;i===n&&(n=Ht.provides=Object.create(i)),n[t]=e}}function vs(t,e,n=!1){const i=Ht||bn;if(i||Gr){let r=Gr?Gr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ke(e)?e.call(i&&i.proxy):e}}const lh={},ch=()=>Object.create(lh),uh=t=>Object.getPrototypeOf(t)===lh;function u_(t,e,n,i=!1){const r={},s=ch();t.propsDefaults=Object.create(null),fh(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Cm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function f_(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=Je(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Ka(t.emitsOptions,d))continue;const _=e[d];if(l)if(Qe(s,d))_!==s[d]&&(s[d]=_,c=!0);else{const x=Li(d);r[x]=pl(l,o,x,_,t,!1)}else _!==s[d]&&(s[d]=_,c=!0)}}}else{fh(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Qe(e,f)&&((u=cr(f))===f||!Qe(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=pl(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],c=!0)}c&&ei(t.attrs,"set","")}function fh(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(ds(l))continue;const c=e[l];let u;r&&Qe(r,u=Li(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:Ka(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Je(n),c=o||lt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=pl(r,l,f,c[f],t,!Qe(c,f))}}return a}function pl(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=Qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ke(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Os(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===cr(n))&&(i=!0))}return i}const d_=new WeakMap;function dh(t,e,n=!1){const i=n?d_:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!ke(t)){const u=f=>{l=!0;const[d,_]=dh(f,e,!0);wt(a,d),_&&o.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return dt(t)&&i.set(t,Br),Br;if(Ne(s))for(let u=0;u<s.length;u++){const f=Li(s[u]);Fc(f)&&(a[f]=lt)}else if(s)for(const u in s){const f=Li(u);if(Fc(f)){const d=s[u],_=a[f]=Ne(d)||ke(d)?{type:d}:wt({},d),x=_.type;let v=!1,m=!0;if(Ne(x))for(let p=0;p<x.length;++p){const A=x[p],E=ke(A)&&A.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=ke(x)&&x.name==="Boolean";_[0]=v,_[1]=m,(v||Qe(_,"default"))&&o.push(f)}}const c=[a,o];return dt(t)&&i.set(t,c),c}function Fc(t){return t[0]!=="$"&&!ds(t)}const nc=t=>t[0]==="_"||t==="$stable",ic=t=>Ne(t)?t.map(Un):[Un(t)],h_=(t,e,n)=>{if(e._n)return e;const i=qd((...r)=>ic(e(...r)),n);return i._c=!1,i},hh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(nc(r))continue;const s=t[r];if(ke(s))e[r]=h_(r,s,i);else if(s!=null){const a=ic(s);e[r]=()=>a}}},ph=(t,e)=>{const n=ic(e);t.slots.default=()=>n},mh=(t,e,n)=>{for(const i in e)(n||!nc(i))&&(t[i]=e[i])},p_=(t,e,n)=>{const i=t.slots=ch();if(t.vnode.shapeFlag&32){const r=e._;r?(mh(i,e,n),n&&xd(i,"_",r,!0)):hh(e,i)}else e&&ph(t,e)},m_=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=lt;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:mh(r,e,n):(s=!e.$stable,hh(e,r)),a=e}else e&&(ph(t,e),a={default:1});if(s)for(const o in r)!nc(o)&&a[o]==null&&delete r[o]},on=w_;function __(t){return g_(t)}function g_(t,e){const n=Xa();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:_=Hn,insertStaticContent:x}=t,v=(y,U,P,V=null,z=null,ne=null,re=void 0,T=null,h=!!U.dynamicChildren)=>{if(y===U)return;y&&!Qi(y,U)&&(V=Me(y),fe(y,z,ne,!0),y=null),U.patchFlag===-2&&(h=!1,U.dynamicChildren=null);const{type:g,ref:I,shapeFlag:N}=U;switch(g){case Us:m(y,U,P,V);break;case Kt:p(y,U,P,V);break;case xo:y==null&&A(U,P,V,re);break;case hn:O(y,U,P,V,z,ne,re,T,h);break;default:N&1?L(y,U,P,V,z,ne,re,T,h):N&6?ie(y,U,P,V,z,ne,re,T,h):(N&64||N&128)&&g.process(y,U,P,V,z,ne,re,T,h,ye)}I!=null&&z&&wa(I,y&&y.ref,ne,U||y,!U)},m=(y,U,P,V)=>{if(y==null)i(U.el=o(U.children),P,V);else{const z=U.el=y.el;U.children!==y.children&&c(z,U.children)}},p=(y,U,P,V)=>{y==null?i(U.el=l(U.children||""),P,V):U.el=y.el},A=(y,U,P,V)=>{[y.el,y.anchor]=x(y.children,U,P,V,y.el,y.anchor)},E=({el:y,anchor:U},P,V)=>{let z;for(;y&&y!==U;)z=d(y),i(y,P,V),y=z;i(U,P,V)},M=({el:y,anchor:U})=>{let P;for(;y&&y!==U;)P=d(y),r(y),y=P;r(U)},L=(y,U,P,V,z,ne,re,T,h)=>{U.type==="svg"?re="svg":U.type==="math"&&(re="mathml"),y==null?b(U,P,V,z,ne,re,T,h):S(y,U,z,ne,re,T,h)},b=(y,U,P,V,z,ne,re,T)=>{let h,g;const{props:I,shapeFlag:N,transition:G,dirs:q}=y;if(h=y.el=a(y.type,ne,I&&I.is,I),N&8?u(h,y.children):N&16&&k(y.children,h,null,V,z,Eo(y,ne),re,T),q&&ki(y,null,V,"created"),R(h,y,y.scopeId,re,V),I){for(const H in I)H!=="value"&&!ds(H)&&s(h,H,null,I[H],ne,V);"value"in I&&s(h,"value",null,I.value,ne),(g=I.onVnodeBeforeMount)&&Dn(g,V,y)}q&&ki(y,null,V,"beforeMount");const D=v_(z,G);D&&G.beforeEnter(h),i(h,U,P),((g=I&&I.onVnodeMounted)||D||q)&&on(()=>{g&&Dn(g,V,y),D&&G.enter(h),q&&ki(y,null,V,"mounted")},z)},R=(y,U,P,V,z)=>{if(P&&_(y,P),V)for(let ne=0;ne<V.length;ne++)_(y,V[ne]);if(z){let ne=z.subTree;if(U===ne||Sh(ne.type)&&(ne.ssContent===U||ne.ssFallback===U)){const re=z.vnode;R(y,re,re.scopeId,re.slotScopeIds,z.parent)}}},k=(y,U,P,V,z,ne,re,T,h=0)=>{for(let g=h;g<y.length;g++){const I=y[g]=T?Ei(y[g]):Un(y[g]);v(null,I,U,P,V,z,ne,re,T)}},S=(y,U,P,V,z,ne,re)=>{const T=U.el=y.el;let{patchFlag:h,dynamicChildren:g,dirs:I}=U;h|=y.patchFlag&16;const N=y.props||lt,G=U.props||lt;let q;if(P&&Gi(P,!1),(q=G.onVnodeBeforeUpdate)&&Dn(q,P,U,y),I&&ki(U,y,P,"beforeUpdate"),P&&Gi(P,!0),(N.innerHTML&&G.innerHTML==null||N.textContent&&G.textContent==null)&&u(T,""),g?C(y.dynamicChildren,g,T,P,V,Eo(U,z),ne):re||J(y,U,T,null,P,V,Eo(U,z),ne,!1),h>0){if(h&16)X(T,N,G,P,z);else if(h&2&&N.class!==G.class&&s(T,"class",null,G.class,z),h&4&&s(T,"style",N.style,G.style,z),h&8){const D=U.dynamicProps;for(let H=0;H<D.length;H++){const le=D[H],me=N[le],se=G[le];(se!==me||le==="value")&&s(T,le,me,se,z,P)}}h&1&&y.children!==U.children&&u(T,U.children)}else!re&&g==null&&X(T,N,G,P,z);((q=G.onVnodeUpdated)||I)&&on(()=>{q&&Dn(q,P,U,y),I&&ki(U,y,P,"updated")},V)},C=(y,U,P,V,z,ne,re)=>{for(let T=0;T<U.length;T++){const h=y[T],g=U[T],I=h.el&&(h.type===hn||!Qi(h,g)||h.shapeFlag&198)?f(h.el):P;v(h,g,I,null,V,z,ne,re,!0)}},X=(y,U,P,V,z)=>{if(U!==P){if(U!==lt)for(const ne in U)!ds(ne)&&!(ne in P)&&s(y,ne,U[ne],null,z,V);for(const ne in P){if(ds(ne))continue;const re=P[ne],T=U[ne];re!==T&&ne!=="value"&&s(y,ne,T,re,z,V)}"value"in P&&s(y,"value",U.value,P.value,z)}},O=(y,U,P,V,z,ne,re,T,h)=>{const g=U.el=y?y.el:o(""),I=U.anchor=y?y.anchor:o("");let{patchFlag:N,dynamicChildren:G,slotScopeIds:q}=U;q&&(T=T?T.concat(q):q),y==null?(i(g,P,V),i(I,P,V),k(U.children||[],P,I,z,ne,re,T,h)):N>0&&N&64&&G&&y.dynamicChildren?(C(y.dynamicChildren,G,P,z,ne,re,T),(U.key!=null||z&&U===z.subTree)&&_h(y,U,!0)):J(y,U,P,I,z,ne,re,T,h)},ie=(y,U,P,V,z,ne,re,T,h)=>{U.slotScopeIds=T,y==null?U.shapeFlag&512?z.ctx.activate(U,P,V,re,h):B(U,P,V,z,ne,re,h):$(y,U,h)},B=(y,U,P,V,z,ne,re)=>{const T=y.component=F_(y,V,z);if($a(y)&&(T.ctx.renderer=ye),B_(T,!1,re),T.asyncDep){if(z&&z.registerDep(T,Y,re),!y.el){const h=T.subTree=kt(Kt);p(null,h,U,P)}}else Y(T,y,U,P,z,ne,re)},$=(y,U,P)=>{const V=U.component=y.component;if(R_(y,U,P))if(V.asyncDep&&!V.asyncResolved){te(V,U,P);return}else V.next=U,V.update();else U.el=y.el,V.vnode=U},Y=(y,U,P,V,z,ne,re)=>{const T=()=>{if(y.isMounted){let{next:N,bu:G,u:q,parent:D,vnode:H}=y;{const Te=gh(y);if(Te){N&&(N.el=H.el,te(y,N,re)),Te.asyncDep.then(()=>{y.isUnmounted||T()});return}}let le=N,me;Gi(y,!1),N?(N.el=H.el,te(y,N,re)):N=H,G&&fo(G),(me=N.props&&N.props.onVnodeBeforeUpdate)&&Dn(me,D,N,H),Gi(y,!0);const se=Hc(y),Be=y.subTree;y.subTree=se,v(Be,se,f(Be.el),Me(Be),y,z,ne),N.el=se.el,le===null&&C_(y,se.el),q&&on(q,z),(me=N.props&&N.props.onVnodeUpdated)&&on(()=>Dn(me,D,N,H),z)}else{let N;const{el:G,props:q}=U,{bm:D,m:H,parent:le,root:me,type:se}=y,Be=_s(U);Gi(y,!1),D&&fo(D),!Be&&(N=q&&q.onVnodeBeforeMount)&&Dn(N,le,U),Gi(y,!0);{me.ce&&me.ce._injectChildStyle(se);const Te=y.subTree=Hc(y);v(null,Te,P,V,y,z,ne),U.el=Te.el}if(H&&on(H,z),!Be&&(N=q&&q.onVnodeMounted)){const Te=U;on(()=>Dn(N,le,Te),z)}(U.shapeFlag&256||le&&_s(le.vnode)&&le.vnode.shapeFlag&256)&&y.a&&on(y.a,z),y.isMounted=!0,U=P=V=null}};y.scope.on();const h=y.effect=new bd(T);y.scope.off();const g=y.update=h.run.bind(h),I=y.job=h.runIfDirty.bind(h);I.i=y,I.id=y.uid,h.scheduler=()=>Ql(I),Gi(y,!0),g()},te=(y,U,P)=>{U.component=y;const V=y.vnode.props;y.vnode=U,y.next=null,f_(y,U.props,V,P),m_(y,U.children,P),si(),Pc(y),ai()},J=(y,U,P,V,z,ne,re,T,h=!1)=>{const g=y&&y.children,I=y?y.shapeFlag:0,N=U.children,{patchFlag:G,shapeFlag:q}=U;if(G>0){if(G&128){oe(g,N,P,V,z,ne,re,T,h);return}else if(G&256){ae(g,N,P,V,z,ne,re,T,h);return}}q&8?(I&16&&Se(g,z,ne),N!==g&&u(P,N)):I&16?q&16?oe(g,N,P,V,z,ne,re,T,h):Se(g,z,ne,!0):(I&8&&u(P,""),q&16&&k(N,P,V,z,ne,re,T,h))},ae=(y,U,P,V,z,ne,re,T,h)=>{y=y||Br,U=U||Br;const g=y.length,I=U.length,N=Math.min(g,I);let G;for(G=0;G<N;G++){const q=U[G]=h?Ei(U[G]):Un(U[G]);v(y[G],q,P,null,z,ne,re,T,h)}g>I?Se(y,z,ne,!0,!1,N):k(U,P,V,z,ne,re,T,h,N)},oe=(y,U,P,V,z,ne,re,T,h)=>{let g=0;const I=U.length;let N=y.length-1,G=I-1;for(;g<=N&&g<=G;){const q=y[g],D=U[g]=h?Ei(U[g]):Un(U[g]);if(Qi(q,D))v(q,D,P,null,z,ne,re,T,h);else break;g++}for(;g<=N&&g<=G;){const q=y[N],D=U[G]=h?Ei(U[G]):Un(U[G]);if(Qi(q,D))v(q,D,P,null,z,ne,re,T,h);else break;N--,G--}if(g>N){if(g<=G){const q=G+1,D=q<I?U[q].el:V;for(;g<=G;)v(null,U[g]=h?Ei(U[g]):Un(U[g]),P,D,z,ne,re,T,h),g++}}else if(g>G)for(;g<=N;)fe(y[g],z,ne,!0),g++;else{const q=g,D=g,H=new Map;for(g=D;g<=G;g++){const _e=U[g]=h?Ei(U[g]):Un(U[g]);_e.key!=null&&H.set(_e.key,g)}let le,me=0;const se=G-D+1;let Be=!1,Te=0;const Ce=new Array(se);for(g=0;g<se;g++)Ce[g]=0;for(g=q;g<=N;g++){const _e=y[g];if(me>=se){fe(_e,z,ne,!0);continue}let we;if(_e.key!=null)we=H.get(_e.key);else for(le=D;le<=G;le++)if(Ce[le-D]===0&&Qi(_e,U[le])){we=le;break}we===void 0?fe(_e,z,ne,!0):(Ce[we-D]=g+1,we>=Te?Te=we:Be=!0,v(_e,U[we],P,null,z,ne,re,T,h),me++)}const be=Be?E_(Ce):Br;for(le=be.length-1,g=se-1;g>=0;g--){const _e=D+g,we=U[_e],Ke=_e+1<I?U[_e+1].el:V;Ce[g]===0?v(null,we,P,Ke,z,ne,re,T,h):Be&&(le<0||g!==be[le]?ue(we,P,Ke,2):le--)}}},ue=(y,U,P,V,z=null)=>{const{el:ne,type:re,transition:T,children:h,shapeFlag:g}=y;if(g&6){ue(y.component.subTree,U,P,V);return}if(g&128){y.suspense.move(U,P,V);return}if(g&64){re.move(y,U,P,ye);return}if(re===hn){i(ne,U,P);for(let N=0;N<h.length;N++)ue(h[N],U,P,V);i(y.anchor,U,P);return}if(re===xo){E(y,U,P);return}if(V!==2&&g&1&&T)if(V===0)T.beforeEnter(ne),i(ne,U,P),on(()=>T.enter(ne),z);else{const{leave:N,delayLeave:G,afterLeave:q}=T,D=()=>{y.ctx.isUnmounted?r(ne):i(ne,U,P)},H=()=>{N(ne,()=>{D(),q&&q()})};G?G(ne,D,H):H()}else i(ne,U,P)},fe=(y,U,P,V=!1,z=!1)=>{const{type:ne,props:re,ref:T,children:h,dynamicChildren:g,shapeFlag:I,patchFlag:N,dirs:G,cacheIndex:q}=y;if(N===-2&&(z=!1),T!=null&&(si(),wa(T,null,P,y,!0),ai()),q!=null&&(U.renderCache[q]=void 0),I&256){U.ctx.deactivate(y);return}const D=I&1&&G,H=!_s(y);let le;if(H&&(le=re&&re.onVnodeBeforeUnmount)&&Dn(le,U,y),I&6)pe(y.component,P,V);else{if(I&128){y.suspense.unmount(P,V);return}D&&ki(y,null,U,"beforeUnmount"),I&64?y.type.remove(y,U,P,ye,V):g&&!g.hasOnce&&(ne!==hn||N>0&&N&64)?Se(g,U,P,!1,!0):(ne===hn&&N&384||!z&&I&16)&&Se(h,U,P),V&&ee(y)}(H&&(le=re&&re.onVnodeUnmounted)||D)&&on(()=>{le&&Dn(le,U,y),D&&ki(y,null,U,"unmounted")},P)},ee=y=>{const{type:U,el:P,anchor:V,transition:z}=y;if(U===hn){ce(P,V);return}if(U===xo){M(y);return}const ne=()=>{r(P),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(y.shapeFlag&1&&z&&!z.persisted){const{leave:re,delayLeave:T}=z,h=()=>re(P,ne);T?T(y.el,ne,h):h()}else ne()},ce=(y,U)=>{let P;for(;y!==U;)P=d(y),r(y),y=P;r(U)},pe=(y,U,P)=>{const{bum:V,scope:z,job:ne,subTree:re,um:T,m:h,a:g,parent:I,slots:{__:N}}=y;Bc(h),Bc(g),V&&fo(V),I&&Ne(N)&&N.forEach(G=>{I.renderCache[G]=void 0}),z.stop(),ne&&(ne.flags|=8,fe(re,y,U,P)),T&&on(T,U),on(()=>{y.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},Se=(y,U,P,V=!1,z=!1,ne=0)=>{for(let re=ne;re<y.length;re++)fe(y[re],U,P,V,z)},Me=y=>{if(y.shapeFlag&6)return Me(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const U=d(y.anchor||y.el),P=U&&U[Gm];return P?d(P):U};let Re=!1;const Le=(y,U,P)=>{y==null?U._vnode&&fe(U._vnode,null,null,!0):v(U._vnode||null,y,U,null,null,null,P),U._vnode=y,Re||(Re=!0,Pc(),Xd(),Re=!1)},ye={p:v,um:fe,m:ue,r:ee,mt:B,mc:k,pc:J,pbc:C,n:Me,o:t};return{render:Le,hydrate:void 0,createApp:l_(Le)}}function Eo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Gi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function v_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function _h(t,e,n=!1){const i=t.children,r=e.children;if(Ne(i)&&Ne(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Ei(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&_h(a,o)),o.type===Us&&(o.el=a.el),o.type===Kt&&!o.el&&(o.el=a.el)}}function E_(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function gh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gh(e)}function Bc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const x_=Symbol.for("v-scx"),S_=()=>vs(x_);function bi(t,e,n){return vh(t,e,n)}function vh(t,e,n=lt){const{immediate:i,deep:r,flush:s,once:a}=n,o=wt({},n),l=e&&i||!e&&s!=="post";let c;if(As){if(s==="sync"){const _=S_();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Hn,_.resume=Hn,_.pause=Hn,_}}const u=Ht;o.call=(_,x,v)=>Pn(_,u,x,v);let f=!1;s==="post"?o.scheduler=_=>{on(_,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(_,x)=>{x?_():Ql(_)}),o.augmentJob=_=>{e&&(_.flags|=4),f&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const d=Om(t,e,o);return As&&(c?c.push(d):l&&d()),d}function M_(t,e,n){const i=this.proxy,r=Et(t)?t.includes(".")?Eh(i,t):()=>i[t]:t.bind(i,i);let s;ke(e)?s=e:(s=e.handler,n=e);const a=Os(this),o=vh(r,s.bind(i),n);return a(),o}function Eh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const y_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Li(e)}Modifiers`]||t[`${cr(e)}Modifiers`];function T_(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||lt;let r=n;const s=e.startsWith("update:"),a=s&&y_(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>Et(u)?u.trim():u)),a.number&&(r=n.map(em)));let o,l=i[o=uo(e)]||i[o=uo(Li(e))];!l&&s&&(l=i[o=uo(cr(e))]),l&&Pn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Pn(c,t,6,r)}}function xh(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!ke(t)){const l=c=>{const u=xh(c,e,!0);u&&(o=!0,wt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(dt(t)&&i.set(t,null),null):(Ne(s)?s.forEach(l=>a[l]=null):wt(a,s),dt(t)&&i.set(t,a),a)}function Ka(t,e){return!t||!Va(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(t,e[0].toLowerCase()+e.slice(1))||Qe(t,cr(e))||Qe(t,e))}function Hc(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:_,ctx:x,inheritAttrs:v}=t,m=Ca(t);let p,A;try{if(n.shapeFlag&4){const M=r||i,L=M;p=Un(c.call(L,M,u,f,_,d,x)),A=o}else{const M=e;p=Un(M.length>1?M(f,{attrs:o,slots:a,emit:l}):M(f,null)),A=e.props?o:b_(o)}}catch(M){Es.length=0,Ya(M,t,1),p=kt(Kt)}let E=p;if(A&&v!==!1){const M=Object.keys(A),{shapeFlag:L}=E;M.length&&L&7&&(s&&M.some(Hl)&&(A=A_(A,s)),E=Pi(E,A,!1,!0))}return n.dirs&&(E=Pi(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Ts(E,n.transition),p=E,Ca(m),p}const b_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Va(n))&&((e||(e={}))[n]=t[n]);return e},A_=(t,e)=>{const n={};for(const i in t)(!Hl(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function R_(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?kc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!Ka(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?kc(i,a,c):!0:!!a;return!1}function kc(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ka(n,s))return!0}return!1}function C_({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Sh=t=>t.__isSuspense;function w_(t,e){e&&e.pendingBranch?Ne(t)?e.effects.push(...t):e.effects.push(t):km(t)}const hn=Symbol.for("v-fgt"),Us=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),xo=Symbol.for("v-stc"),Es=[];let cn=null;function Si(t=!1){Es.push(cn=t?null:[])}function L_(){Es.pop(),cn=Es[Es.length-1]||null}let bs=1;function Gc(t,e=!1){bs+=t,t<0&&cn&&e&&(cn.hasOnce=!0)}function Mh(t){return t.dynamicChildren=bs>0?cn||Br:null,L_(),bs>0&&cn&&cn.push(t),t}function Nr(t,e,n,i,r,s){return Mh(ln(t,e,n,i,r,s,!0))}function yh(t,e,n,i,r){return Mh(kt(t,e,n,i,r,!0))}function Pa(t){return t?t.__v_isVNode===!0:!1}function Qi(t,e){return t.type===e.type&&t.key===e.key}const Th=({key:t})=>t??null,Ma=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Et(t)||It(t)||ke(t)?{i:bn,r:t,k:e,f:!!n}:t:null);function ln(t,e=null,n=null,i=0,r=null,s=t===hn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Th(e),ref:e&&Ma(e),scopeId:$d,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:bn};return o?(rc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Et(n)?8:16),bs>0&&!a&&cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&cn.push(l),l}const kt=P_;function P_(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===e_)&&(t=Kt),Pa(t)){const o=Pi(t,e,!0);return n&&rc(o,n),bs>0&&!s&&cn&&(o.shapeFlag&6?cn[cn.indexOf(t)]=o:cn.push(o)),o.patchFlag=-2,o}if(V_(t)&&(t=t.__vccOpts),e){e=I_(e);let{class:o,style:l}=e;o&&!Et(o)&&(e.class=zl(o)),dt(l)&&(Jl(l)&&!Ne(l)&&(l=wt({},l)),e.style=Vl(l))}const a=Et(t)?1:Sh(t)?128:jd(t)?64:dt(t)?4:ke(t)?2:0;return ln(t,e,n,i,r,a,s,!0)}function I_(t){return t?Jl(t)||uh(t)?wt({},t):t:null}function Pi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?N_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Th(c),ref:e&&e.ref?n&&s?Ne(s)?s.concat(Ma(e)):[s,Ma(e)]:Ma(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==hn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pi(t.ssContent),ssFallback:t.ssFallback&&Pi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ts(u,l.clone(u)),u}function D_(t=" ",e=0){return kt(Us,null,t,e)}function Vc(t="",e=!1){return e?(Si(),yh(Kt,null,t)):kt(Kt,null,t)}function Un(t){return t==null||typeof t=="boolean"?kt(Kt):Ne(t)?kt(hn,null,t.slice()):Pa(t)?Ei(t):kt(Us,null,String(t))}function Ei(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pi(t)}function rc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ne(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),rc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!uh(e)?e._ctx=bn:r===3&&bn&&(bn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:bn},n=32):(e=String(e),i&64?(n=16,e=[D_(e)]):n=8);t.children=e,t.shapeFlag|=n}function N_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=zl([e.class,i.class]));else if(r==="style")e.style=Vl([e.style,i.style]);else if(Va(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ne(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Dn(t,e,n,i=null){Pn(t,e,7,[n,i])}const U_=oh();let O_=0;function F_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||U_,s={uid:O_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Td(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dh(i,r),emitsOptions:xh(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=T_.bind(null,s),t.ce&&t.ce(s),s}let Ht=null;const Wr=()=>Ht||bn;let Ia,ml;{const t=Xa(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Ia=e("__VUE_INSTANCE_SETTERS__",n=>Ht=n),ml=e("__VUE_SSR_SETTERS__",n=>As=n)}const Os=t=>{const e=Ht;return Ia(t),t.scope.on(),()=>{t.scope.off(),Ia(e)}},zc=()=>{Ht&&Ht.scope.off(),Ia(null)};function bh(t){return t.vnode.shapeFlag&4}let As=!1;function B_(t,e=!1,n=!1){e&&ml(e);const{props:i,children:r}=t.vnode,s=bh(t);u_(t,i,s,e),p_(t,r,n||e);const a=s?H_(t,e):void 0;return e&&ml(!1),a}function H_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,t_);const{setup:i}=n;if(i){si();const r=t.setupContext=i.length>1?G_(t):null,s=Os(t),a=Ns(i,t,0,[t.props,r]),o=_d(a);if(ai(),s(),(o||t.sp)&&!_s(t)&&th(t),o){if(a.then(zc,zc),e)return a.then(l=>{Wc(t,l)}).catch(l=>{Ya(l,t,0)});t.asyncDep=a}else Wc(t,a)}else Ah(t)}function Wc(t,e,n){ke(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:dt(e)&&(t.setupState=Vd(e)),Ah(t)}function Ah(t,e,n){const i=t.type;t.render||(t.render=i.render||Hn);{const r=Os(t);si();try{n_(t)}finally{ai(),r()}}}const k_={get(t,e){return Bt(t,"get",""),t[e]}};function G_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,k_),slots:t.slots,emit:t.emit,expose:e}}function sc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Vd(wm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gs)return gs[n](t)},has(e,n){return n in e||n in gs}})):t.proxy}function V_(t){return ke(t)&&"__vccOpts"in t}const At=(t,e)=>Nm(t,e,As);function ac(t,e,n){const i=arguments.length;return i===2?dt(e)&&!Ne(e)?Pa(e)?kt(t,null,[e]):kt(t,e):kt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Pa(n)&&(n=[n]),kt(t,e,n))}const z_="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _l;const Xc=typeof window<"u"&&window.trustedTypes;if(Xc)try{_l=Xc.createPolicy("vue",{createHTML:t=>t})}catch{}const Rh=_l?t=>_l.createHTML(t):t=>t,W_="http://www.w3.org/2000/svg",X_="http://www.w3.org/1998/Math/MathML",Qn=typeof document<"u"?document:null,Yc=Qn&&Qn.createElement("template"),Y_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Qn.createElementNS(W_,t):e==="mathml"?Qn.createElementNS(X_,t):n?Qn.createElement(t,{is:n}):Qn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Qn.createTextNode(t),createComment:t=>Qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Yc.innerHTML=Rh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=Yc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ui="transition",ns="animation",Rs=Symbol("_vtc"),Ch={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$_=wt({},Kd,Ch),q_=t=>(t.displayName="Transition",t.props=$_,t),j_=q_((t,{slots:e})=>ac(Wm,K_(t),e)),Vi=(t,e=[])=>{Ne(t)?t.forEach(n=>n(...e)):t&&t(...e)},$c=t=>t?Ne(t)?t.some(e=>e.length>1):t.length>1:!1;function K_(t){const e={};for(const O in t)O in Ch||(e[O]=t[O]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,x=Z_(r),v=x&&x[0],m=x&&x[1],{onBeforeEnter:p,onEnter:A,onEnterCancelled:E,onLeave:M,onLeaveCancelled:L,onBeforeAppear:b=p,onAppear:R=A,onAppearCancelled:k=E}=e,S=(O,ie,B,$)=>{O._enterCancelled=$,zi(O,ie?u:o),zi(O,ie?c:a),B&&B()},C=(O,ie)=>{O._isLeaving=!1,zi(O,f),zi(O,_),zi(O,d),ie&&ie()},X=O=>(ie,B)=>{const $=O?R:A,Y=()=>S(ie,O,B);Vi($,[ie,Y]),qc(()=>{zi(ie,O?l:s),Wn(ie,O?u:o),$c($)||jc(ie,i,v,Y)})};return wt(e,{onBeforeEnter(O){Vi(p,[O]),Wn(O,s),Wn(O,a)},onBeforeAppear(O){Vi(b,[O]),Wn(O,l),Wn(O,c)},onEnter:X(!1),onAppear:X(!0),onLeave(O,ie){O._isLeaving=!0;const B=()=>C(O,ie);Wn(O,f),O._enterCancelled?(Wn(O,d),Jc()):(Jc(),Wn(O,d)),qc(()=>{O._isLeaving&&(zi(O,f),Wn(O,_),$c(M)||jc(O,i,m,B))}),Vi(M,[O,B])},onEnterCancelled(O){S(O,!1,void 0,!0),Vi(E,[O])},onAppearCancelled(O){S(O,!0,void 0,!0),Vi(k,[O])},onLeaveCancelled(O){C(O),Vi(L,[O])}})}function Z_(t){if(t==null)return null;if(dt(t))return[So(t.enter),So(t.leave)];{const e=So(t);return[e,e]}}function So(t){return tm(t)}function Wn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Rs]||(t[Rs]=new Set)).add(e)}function zi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Rs];n&&(n.delete(e),n.size||(t[Rs]=void 0))}function qc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let J_=0;function jc(t,e,n,i){const r=t._endId=++J_,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=Q_(t,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=_=>{_.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),t.addEventListener(c,d)}function Q_(t,e){const n=window.getComputedStyle(t),i=x=>(n[x]||"").split(", "),r=i(`${ui}Delay`),s=i(`${ui}Duration`),a=Kc(r,s),o=i(`${ns}Delay`),l=i(`${ns}Duration`),c=Kc(o,l);let u=null,f=0,d=0;e===ui?a>0&&(u=ui,f=a,d=s.length):e===ns?c>0&&(u=ns,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?ui:ns:null,d=u?u===ui?s.length:l.length:0);const _=u===ui&&/\b(transform|all)(,|$)/.test(i(`${ui}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:_}}function Kc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Zc(n)+Zc(t[i])))}function Zc(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Jc(){return document.body.offsetHeight}function eg(t,e,n){const i=t[Rs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Qc=Symbol("_vod"),tg=Symbol("_vsh"),ng=Symbol(""),ig=/(^|;)\s*display\s*:/;function rg(t,e,n){const i=t.style,r=Et(n);let s=!1;if(n&&!r){if(e)if(Et(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&ya(i,o,"")}else for(const a in e)n[a]==null&&ya(i,a,"");for(const a in n)a==="display"&&(s=!0),ya(i,a,n[a])}else if(r){if(e!==n){const a=i[ng];a&&(n+=";"+a),i.cssText=n,s=ig.test(n)}}else e&&t.removeAttribute("style");Qc in t&&(t[Qc]=s?i.display:"",t[tg]&&(i.display="none"))}const eu=/\s*!important$/;function ya(t,e,n){if(Ne(n))n.forEach(i=>ya(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=sg(t,e);eu.test(n)?t.setProperty(cr(i),n.replace(eu,""),"important"):t[i]=n}}const tu=["Webkit","Moz","ms"],Mo={};function sg(t,e){const n=Mo[e];if(n)return n;let i=Li(e);if(i!=="filter"&&i in t)return Mo[e]=i;i=Ed(i);for(let r=0;r<tu.length;r++){const s=tu[r]+i;if(s in t)return Mo[e]=s}return e}const nu="http://www.w3.org/1999/xlink";function iu(t,e,n,i,r,s=om(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(nu,e.slice(6,e.length)):t.setAttributeNS(nu,e,n):n==null||s&&!Sd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Ni(n)?String(n):n)}function ru(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Rh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Sd(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function ag(t,e,n,i){t.addEventListener(e,n,i)}function og(t,e,n,i){t.removeEventListener(e,n,i)}const su=Symbol("_vei");function lg(t,e,n,i,r=null){const s=t[su]||(t[su]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=cg(e);if(i){const c=s[e]=dg(i,r);ag(t,o,c,l)}else a&&(og(t,o,a,l),s[e]=void 0)}}const au=/(?:Once|Passive|Capture)$/;function cg(t){let e;if(au.test(t)){e={};let i;for(;i=t.match(au);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cr(t.slice(2)),e]}let yo=0;const ug=Promise.resolve(),fg=()=>yo||(ug.then(()=>yo=0),yo=Date.now());function dg(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Pn(hg(i,n.value),e,5,[i])};return n.value=t,n.attached=fg(),n}function hg(t,e){if(Ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const ou=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,pg=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?eg(t,i,a):e==="style"?rg(t,n,i):Va(e)?Hl(e)||lg(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mg(t,e,i,a))?(ru(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&iu(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Et(i))?ru(t,Li(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),iu(t,e,i,a))};function mg(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&ou(e)&&ke(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ou(e)&&Et(n)?!1:e in t}const _g=wt({patchProp:pg},Y_);let lu;function gg(){return lu||(lu=__(_g))}const vg=(...t)=>{const e=gg().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=xg(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,Eg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Eg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function xg(t){return Et(t)?document.querySelector(t):t}/*!
  * shared v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const Da=typeof window<"u",Ui=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Sg=(t,e,n)=>Mg({l:t,k:e,s:n}),Mg=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),gt=t=>typeof t=="number"&&isFinite(t),yg=t=>Lh(t)==="[object Date]",Ii=t=>Lh(t)==="[object RegExp]",Za=t=>Fe(t)&&Object.keys(t).length===0,Dt=Object.assign,Tg=Object.create,nt=(t=null)=>Tg(t);let cu;const ti=()=>cu||(cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:nt());function uu(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const bg=Object.prototype.hasOwnProperty;function An(t,e){return bg.call(t,e)}const ft=Array.isArray,ct=t=>typeof t=="function",Ee=t=>typeof t=="string",qe=t=>typeof t=="boolean",Ze=t=>t!==null&&typeof t=="object",Ag=t=>Ze(t)&&ct(t.then)&&ct(t.catch),wh=Object.prototype.toString,Lh=t=>wh.call(t),Fe=t=>{if(!Ze(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},Rg=t=>t==null?"":ft(t)||Fe(t)&&t.toString===wh?JSON.stringify(t,null,2):String(t);function Cg(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}function Ja(t){let e=t;return()=>++e}function wg(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const qs=t=>!Ze(t)||ft(t);function Ta(t,e){if(qs(t)||qs(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(Ze(i[s])&&!Ze(r[s])&&(r[s]=Array.isArray(i[s])?[]:nt()),qs(r[s])||qs(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Lg(t,e,n){return{line:t,column:e,offset:n}}function Na(t,e,n){return{start:t,end:e}}const Pg=/\{([0-9a-zA-Z]+)\}/g;function Ph(t,...e){return e.length===1&&Ig(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(Pg,(n,i)=>e.hasOwnProperty(i)?e[i]:"")}const Ih=Object.assign,fu=t=>typeof t=="string",Ig=t=>t!==null&&typeof t=="object";function Dh(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const oc={USE_MODULO_SYNTAX:1,__EXTEND_POINT__:2},Dg={[oc.USE_MODULO_SYNTAX]:"Use modulo before '{{0}}'."};function Ng(t,e,...n){const i=Ph(Dg[t],...n||[]),r={message:String(i),code:t};return e&&(r.location=e),r}const Ie={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},Ug={[Ie.EXPECTED_TOKEN]:"Expected token: '{0}'",[Ie.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Ie.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Ie.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Ie.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Ie.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Ie.EMPTY_PLACEHOLDER]:"Empty placeholder",[Ie.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Ie.INVALID_LINKED_FORMAT]:"Invalid linked format",[Ie.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Ie.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Ie.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Ie.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Ie.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Zr(t,e,n={}){const{domain:i,messages:r,args:s}=n,a=Ph((r||Ug)[t]||"",...s||[]),o=new SyntaxError(String(a));return o.code=t,e&&(o.location=e),o.domain=i,o}function Og(t){throw t}const Xn=" ",Fg="\r",Yt=`
`,Bg="\u2028",Hg="\u2029";function kg(t){const e=t;let n=0,i=1,r=1,s=0;const a=R=>e[R]===Fg&&e[R+1]===Yt,o=R=>e[R]===Yt,l=R=>e[R]===Hg,c=R=>e[R]===Bg,u=R=>a(R)||o(R)||l(R)||c(R),f=()=>n,d=()=>i,_=()=>r,x=()=>s,v=R=>a(R)||l(R)||c(R)?Yt:e[R],m=()=>v(n),p=()=>v(n+s);function A(){return s=0,u(n)&&(i++,r=0),a(n)&&n++,n++,r++,e[n]}function E(){return a(n+s)&&s++,s++,e[n+s]}function M(){n=0,i=1,r=1,s=0}function L(R=0){s=R}function b(){const R=n+s;for(;R!==n;)A();s=0}return{index:f,line:d,column:_,peekOffset:x,charAt:v,currentChar:m,currentPeek:p,next:A,peek:E,reset:M,resetPeek:L,skipToPeek:b}}const fi=void 0,Gg=".",du="'",Vg="tokenizer";function zg(t,e={}){const n=e.location!==!1,i=kg(t),r=()=>i.index(),s=()=>Lg(i.line(),i.column(),i.index()),a=s(),o=r(),l={currentType:14,offset:o,startLoc:a,endLoc:a,lastType:14,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(h,g,I,...N){const G=c();if(g.column+=I,g.offset+=I,u){const q=n?Na(G.startLoc,g):null,D=Zr(h,q,{domain:Vg,args:N});u(D)}}function d(h,g,I){h.endLoc=s(),h.currentType=g;const N={type:g};return n&&(N.loc=Na(h.startLoc,h.endLoc)),I!=null&&(N.value=I),N}const _=h=>d(h,14);function x(h,g){return h.currentChar()===g?(h.next(),g):(f(Ie.EXPECTED_TOKEN,s(),0,g),"")}function v(h){let g="";for(;h.currentPeek()===Xn||h.currentPeek()===Yt;)g+=h.currentPeek(),h.peek();return g}function m(h){const g=v(h);return h.skipToPeek(),g}function p(h){if(h===fi)return!1;const g=h.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g===95}function A(h){if(h===fi)return!1;const g=h.charCodeAt(0);return g>=48&&g<=57}function E(h,g){const{currentType:I}=g;if(I!==2)return!1;v(h);const N=p(h.currentPeek());return h.resetPeek(),N}function M(h,g){const{currentType:I}=g;if(I!==2)return!1;v(h);const N=h.currentPeek()==="-"?h.peek():h.currentPeek(),G=A(N);return h.resetPeek(),G}function L(h,g){const{currentType:I}=g;if(I!==2)return!1;v(h);const N=h.currentPeek()===du;return h.resetPeek(),N}function b(h,g){const{currentType:I}=g;if(I!==8)return!1;v(h);const N=h.currentPeek()===".";return h.resetPeek(),N}function R(h,g){const{currentType:I}=g;if(I!==9)return!1;v(h);const N=p(h.currentPeek());return h.resetPeek(),N}function k(h,g){const{currentType:I}=g;if(!(I===8||I===12))return!1;v(h);const N=h.currentPeek()===":";return h.resetPeek(),N}function S(h,g){const{currentType:I}=g;if(I!==10)return!1;const N=()=>{const q=h.currentPeek();return q==="{"?p(h.peek()):q==="@"||q==="%"||q==="|"||q===":"||q==="."||q===Xn||!q?!1:q===Yt?(h.peek(),N()):O(h,!1)},G=N();return h.resetPeek(),G}function C(h){v(h);const g=h.currentPeek()==="|";return h.resetPeek(),g}function X(h){const g=v(h),I=h.currentPeek()==="%"&&h.peek()==="{";return h.resetPeek(),{isModulo:I,hasSpace:g.length>0}}function O(h,g=!0){const I=(G=!1,q="",D=!1)=>{const H=h.currentPeek();return H==="{"?q==="%"?!1:G:H==="@"||!H?q==="%"?!0:G:H==="%"?(h.peek(),I(G,"%",!0)):H==="|"?q==="%"||D?!0:!(q===Xn||q===Yt):H===Xn?(h.peek(),I(!0,Xn,D)):H===Yt?(h.peek(),I(!0,Yt,D)):!0},N=I();return g&&h.resetPeek(),N}function ie(h,g){const I=h.currentChar();return I===fi?fi:g(I)?(h.next(),I):null}function B(h){const g=h.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g>=48&&g<=57||g===95||g===36}function $(h){return ie(h,B)}function Y(h){const g=h.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g>=48&&g<=57||g===95||g===36||g===45}function te(h){return ie(h,Y)}function J(h){const g=h.charCodeAt(0);return g>=48&&g<=57}function ae(h){return ie(h,J)}function oe(h){const g=h.charCodeAt(0);return g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102}function ue(h){return ie(h,oe)}function fe(h){let g="",I="";for(;g=ae(h);)I+=g;return I}function ee(h){m(h);const g=h.currentChar();return g!=="%"&&f(Ie.EXPECTED_TOKEN,s(),0,g),h.next(),"%"}function ce(h){let g="";for(;;){const I=h.currentChar();if(I==="{"||I==="}"||I==="@"||I==="|"||!I)break;if(I==="%")if(O(h))g+=I,h.next();else break;else if(I===Xn||I===Yt)if(O(h))g+=I,h.next();else{if(C(h))break;g+=I,h.next()}else g+=I,h.next()}return g}function pe(h){m(h);let g="",I="";for(;g=te(h);)I+=g;return h.currentChar()===fi&&f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),I}function Se(h){m(h);let g="";return h.currentChar()==="-"?(h.next(),g+=`-${fe(h)}`):g+=fe(h),h.currentChar()===fi&&f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),g}function Me(h){return h!==du&&h!==Yt}function Re(h){m(h),x(h,"'");let g="",I="";for(;g=ie(h,Me);)g==="\\"?I+=Le(h):I+=g;const N=h.currentChar();return N===Yt||N===fi?(f(Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),N===Yt&&(h.next(),x(h,"'")),I):(x(h,"'"),I)}function Le(h){const g=h.currentChar();switch(g){case"\\":case"'":return h.next(),`\\${g}`;case"u":return ye(h,g,4);case"U":return ye(h,g,6);default:return f(Ie.UNKNOWN_ESCAPE_SEQUENCE,s(),0,g),""}}function ye(h,g,I){x(h,g);let N="";for(let G=0;G<I;G++){const q=ue(h);if(!q){f(Ie.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${g}${N}${h.currentChar()}`);break}N+=q}return`\\${g}${N}`}function Ve(h){return h!=="{"&&h!=="}"&&h!==Xn&&h!==Yt}function y(h){m(h);let g="",I="";for(;g=ie(h,Ve);)I+=g;return I}function U(h){let g="",I="";for(;g=$(h);)I+=g;return I}function P(h){const g=I=>{const N=h.currentChar();return N==="{"||N==="%"||N==="@"||N==="|"||N==="("||N===")"||!N||N===Xn?I:(I+=N,h.next(),g(I))};return g("")}function V(h){m(h);const g=x(h,"|");return m(h),g}function z(h,g){let I=null;switch(h.currentChar()){case"{":return g.braceNest>=1&&f(Ie.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),h.next(),I=d(g,2,"{"),m(h),g.braceNest++,I;case"}":return g.braceNest>0&&g.currentType===2&&f(Ie.EMPTY_PLACEHOLDER,s(),0),h.next(),I=d(g,3,"}"),g.braceNest--,g.braceNest>0&&m(h),g.inLinked&&g.braceNest===0&&(g.inLinked=!1),I;case"@":return g.braceNest>0&&f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),I=ne(h,g)||_(g),g.braceNest=0,I;default:{let G=!0,q=!0,D=!0;if(C(h))return g.braceNest>0&&f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),I=d(g,1,V(h)),g.braceNest=0,g.inLinked=!1,I;if(g.braceNest>0&&(g.currentType===5||g.currentType===6||g.currentType===7))return f(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),g.braceNest=0,re(h,g);if(G=E(h,g))return I=d(g,5,pe(h)),m(h),I;if(q=M(h,g))return I=d(g,6,Se(h)),m(h),I;if(D=L(h,g))return I=d(g,7,Re(h)),m(h),I;if(!G&&!q&&!D)return I=d(g,13,y(h)),f(Ie.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,I.value),m(h),I;break}}return I}function ne(h,g){const{currentType:I}=g;let N=null;const G=h.currentChar();switch((I===8||I===9||I===12||I===10)&&(G===Yt||G===Xn)&&f(Ie.INVALID_LINKED_FORMAT,s(),0),G){case"@":return h.next(),N=d(g,8,"@"),g.inLinked=!0,N;case".":return m(h),h.next(),d(g,9,".");case":":return m(h),h.next(),d(g,10,":");default:return C(h)?(N=d(g,1,V(h)),g.braceNest=0,g.inLinked=!1,N):b(h,g)||k(h,g)?(m(h),ne(h,g)):R(h,g)?(m(h),d(g,12,U(h))):S(h,g)?(m(h),G==="{"?z(h,g)||N:d(g,11,P(h))):(I===8&&f(Ie.INVALID_LINKED_FORMAT,s(),0),g.braceNest=0,g.inLinked=!1,re(h,g))}}function re(h,g){let I={type:14};if(g.braceNest>0)return z(h,g)||_(g);if(g.inLinked)return ne(h,g)||_(g);switch(h.currentChar()){case"{":return z(h,g)||_(g);case"}":return f(Ie.UNBALANCED_CLOSING_BRACE,s(),0),h.next(),d(g,3,"}");case"@":return ne(h,g)||_(g);default:{if(C(h))return I=d(g,1,V(h)),g.braceNest=0,g.inLinked=!1,I;const{isModulo:G,hasSpace:q}=X(h);if(G)return q?d(g,0,ce(h)):d(g,4,ee(h));if(O(h))return d(g,0,ce(h));break}}return I}function T(){const{currentType:h,offset:g,startLoc:I,endLoc:N}=l;return l.lastType=h,l.lastOffset=g,l.lastStartLoc=I,l.lastEndLoc=N,l.offset=r(),l.startLoc=s(),i.currentChar()===fi?d(l,14):re(i,l)}return{nextToken:T,currentOffset:r,currentPosition:s,context:c}}const Wg="parser",Xg=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function Yg(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function $g(t={}){const e=t.location!==!1,{onError:n,onWarn:i}=t;function r(E,M,L,b,...R){const k=E.currentPosition();if(k.offset+=b,k.column+=b,n){const S=e?Na(L,k):null,C=Zr(M,S,{domain:Wg,args:R});n(C)}}function s(E,M,L,b,...R){const k=E.currentPosition();if(k.offset+=b,k.column+=b,i){const S=e?Na(L,k):null;i(Ng(M,S,R))}}function a(E,M,L){const b={type:E};return e&&(b.start=M,b.end=M,b.loc={start:L,end:L}),b}function o(E,M,L,b){e&&(E.end=M,E.loc&&(E.loc.end=L))}function l(E,M){const L=E.context(),b=a(3,L.offset,L.startLoc);return b.value=M,o(b,E.currentOffset(),E.currentPosition()),b}function c(E,M){const L=E.context(),{lastOffset:b,lastStartLoc:R}=L,k=a(5,b,R);return k.index=parseInt(M,10),E.nextToken(),o(k,E.currentOffset(),E.currentPosition()),k}function u(E,M,L){const b=E.context(),{lastOffset:R,lastStartLoc:k}=b,S=a(4,R,k);return S.key=M,L===!0&&(S.modulo=!0),E.nextToken(),o(S,E.currentOffset(),E.currentPosition()),S}function f(E,M){const L=E.context(),{lastOffset:b,lastStartLoc:R}=L,k=a(9,b,R);return k.value=M.replace(Xg,Yg),E.nextToken(),o(k,E.currentOffset(),E.currentPosition()),k}function d(E){const M=E.nextToken(),L=E.context(),{lastOffset:b,lastStartLoc:R}=L,k=a(8,b,R);return M.type!==12?(r(E,Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER,L.lastStartLoc,0),k.value="",o(k,b,R),{nextConsumeToken:M,node:k}):(M.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,vn(M)),k.value=M.value||"",o(k,E.currentOffset(),E.currentPosition()),{node:k})}function _(E,M){const L=E.context(),b=a(7,L.offset,L.startLoc);return b.value=M,o(b,E.currentOffset(),E.currentPosition()),b}function x(E){const M=E.context(),L=a(6,M.offset,M.startLoc);let b=E.nextToken();if(b.type===9){const R=d(E);L.modifier=R.node,b=R.nextConsumeToken||E.nextToken()}switch(b.type!==10&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,vn(b)),b=E.nextToken(),b.type===2&&(b=E.nextToken()),b.type){case 11:b.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,vn(b)),L.key=_(E,b.value||"");break;case 5:b.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,vn(b)),L.key=u(E,b.value||"");break;case 6:b.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,vn(b)),L.key=c(E,b.value||"");break;case 7:b.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,vn(b)),L.key=f(E,b.value||"");break;default:{r(E,Ie.UNEXPECTED_EMPTY_LINKED_KEY,M.lastStartLoc,0);const R=E.context(),k=a(7,R.offset,R.startLoc);return k.value="",o(k,R.offset,R.startLoc),L.key=k,o(L,R.offset,R.startLoc),{nextConsumeToken:b,node:L}}}return o(L,E.currentOffset(),E.currentPosition()),{node:L}}function v(E){const M=E.context(),L=M.currentType===1?E.currentOffset():M.offset,b=M.currentType===1?M.endLoc:M.startLoc,R=a(2,L,b);R.items=[];let k=null,S=null;do{const O=k||E.nextToken();switch(k=null,O.type){case 0:O.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,vn(O)),R.items.push(l(E,O.value||""));break;case 6:O.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,vn(O)),R.items.push(c(E,O.value||""));break;case 4:S=!0;break;case 5:O.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,vn(O)),R.items.push(u(E,O.value||"",!!S)),S&&(s(E,oc.USE_MODULO_SYNTAX,M.lastStartLoc,0,vn(O)),S=null);break;case 7:O.value==null&&r(E,Ie.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,vn(O)),R.items.push(f(E,O.value||""));break;case 8:{const ie=x(E);R.items.push(ie.node),k=ie.nextConsumeToken||null;break}}}while(M.currentType!==14&&M.currentType!==1);const C=M.currentType===1?M.lastOffset:E.currentOffset(),X=M.currentType===1?M.lastEndLoc:E.currentPosition();return o(R,C,X),R}function m(E,M,L,b){const R=E.context();let k=b.items.length===0;const S=a(1,M,L);S.cases=[],S.cases.push(b);do{const C=v(E);k||(k=C.items.length===0),S.cases.push(C)}while(R.currentType!==14);return k&&r(E,Ie.MUST_HAVE_MESSAGES_IN_PLURAL,L,0),o(S,E.currentOffset(),E.currentPosition()),S}function p(E){const M=E.context(),{offset:L,startLoc:b}=M,R=v(E);return M.currentType===14?R:m(E,L,b,R)}function A(E){const M=zg(E,Ih({},t)),L=M.context(),b=a(0,L.offset,L.startLoc);return e&&b.loc&&(b.loc.source=E),b.body=p(M),t.onCacheKey&&(b.cacheKey=t.onCacheKey(E)),L.currentType!==14&&r(M,Ie.UNEXPECTED_LEXICAL_ANALYSIS,L.lastStartLoc,0,E[L.offset]||""),o(b,M.currentOffset(),M.currentPosition()),b}return{parse:A}}function vn(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function qg(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function hu(t,e){for(let n=0;n<t.length;n++)lc(t[n],e)}function lc(t,e){switch(t.type){case 1:hu(t.cases,e),e.helper("plural");break;case 2:hu(t.items,e);break;case 6:{lc(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function jg(t,e={}){const n=qg(t);n.helper("normalize"),t.body&&lc(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function Kg(t){const e=t.body;return e.type===2?pu(e):e.cases.forEach(n=>pu(n)),t}function pu(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=Dh(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}const Zg="minifier";function Ir(t){switch(t.t=t.type,t.type){case 0:{const e=t;Ir(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)Ir(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)Ir(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;Ir(e.key),e.k=e.key,delete e.key,e.modifier&&(Ir(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}default:throw Zr(Ie.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:Zg,args:[t.type]})}delete t.type}const Jg="parser";function Qg(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,a={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(a.source=t.loc.source);const o=()=>a;function l(v,m){a.code+=v}function c(v,m=!0){const p=m?i:"";l(r?p+"  ".repeat(v):p)}function u(v=!0){const m=++a.indentLevel;v&&c(m)}function f(v=!0){const m=--a.indentLevel;v&&c(m)}function d(){c(a.indentLevel)}return{context:o,push:l,indent:u,deindent:f,newline:d,helper:v=>`_${v}`,needIndent:()=>a.needIndent}}function ev(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),Xr(t,e.key),e.modifier?(t.push(", "),Xr(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function tv(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(Xr(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function nv(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(Xr(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function iv(t,e){e.body?Xr(t,e.body):t.push("null")}function Xr(t,e){const{helper:n}=t;switch(e.type){case 0:iv(t,e);break;case 1:nv(t,e);break;case 2:tv(t,e);break;case 6:ev(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw Zr(Ie.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:Jg,args:[e.type]})}}const rv=(t,e={})=>{const n=fu(e.mode)?e.mode:"normal",i=fu(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",a=t.helpers||[],o=Qg(t,{filename:i,breakLineCode:r,needIndent:s});o.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),o.indent(s),a.length>0&&(o.push(`const { ${Dh(a.map(u=>`${u}: _${u}`),", ")} } = ctx`),o.newline()),o.push("return "),Xr(o,t),o.deindent(s),o.push("}"),delete t.helpers;const{code:l,map:c}=o.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function sv(t,e={}){const n=Ih({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,o=$g(n).parse(t);return i?(s&&Kg(o),r&&Ir(o),{ast:o,code:""}):(jg(o,n),rv(o,n))}/*!
  * core-base v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function av(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ti().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(ti().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ti().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function kn(t){return Ze(t)&&cc(t)===0&&(An(t,"b")||An(t,"body"))}const Nh=["b","body"];function ov(t){return Oi(t,Nh)}const Uh=["c","cases"];function lv(t){return Oi(t,Uh,[])}const Oh=["s","static"];function cv(t){return Oi(t,Oh)}const Fh=["i","items"];function uv(t){return Oi(t,Fh,[])}const Bh=["t","type"];function cc(t){return Oi(t,Bh)}const Hh=["v","value"];function js(t,e){const n=Oi(t,Hh);if(n!=null)return n;throw Cs(e)}const kh=["m","modifier"];function fv(t){return Oi(t,kh)}const Gh=["k","key"];function dv(t){const e=Oi(t,Gh);if(e)return e;throw Cs(6)}function Oi(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(An(t,r)&&t[r]!=null)return t[r]}return n}const Vh=[...Nh,...Uh,...Oh,...Fh,...Gh,...kh,...Hh,...Bh];function Cs(t){return new Error(`unhandled node type: ${t}`)}const Fi=[];Fi[0]={w:[0],i:[3,0],"[":[4],o:[7]};Fi[1]={w:[1],".":[2],"[":[4],o:[7]};Fi[2]={w:[2],i:[3,0],0:[3,0]};Fi[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};Fi[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};Fi[5]={"'":[4,0],o:8,l:[5,0]};Fi[6]={'"':[4,0],o:8,l:[6,0]};const hv=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function pv(t){return hv.test(t)}function mv(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function _v(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function gv(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:pv(e)?mv(e):"*"+e}function vv(t){const e=[];let n=-1,i=0,r=0,s,a,o,l,c,u,f;const d=[];d[0]=()=>{a===void 0?a=o:a+=o},d[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},d[2]=()=>{d[0](),r++},d[3]=()=>{if(r>0)r--,i=4,d[0]();else{if(r=0,a===void 0||(a=gv(a),a===!1))return!1;d[1]()}};function _(){const x=t[n+1];if(i===5&&x==="'"||i===6&&x==='"')return n++,o="\\"+x,d[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&_())){if(l=_v(s),f=Fi[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=d[c[1]],u&&(o=s,u()===!1))))return;if(i===7)return e}}const mu=new Map;function Ev(t,e){return Ze(t)?t[e]:null}function xv(t,e){if(!Ze(t))return null;let n=mu.get(e);if(n||(n=vv(e),n&&mu.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const a=n[s];if(Vh.includes(a)&&kn(r))return null;const o=r[a];if(o===void 0||ct(r))return null;r=o,s++}return r}const Sv=t=>t,Mv=t=>"",yv="text",Tv=t=>t.length===0?"":Cg(t),bv=Rg;function _u(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function Av(t){const e=gt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(gt(t.named.count)||gt(t.named.n))?gt(t.named.count)?t.named.count:gt(t.named.n)?t.named.n:e:e}function Rv(t,e){e.count||(e.count=t),e.n||(e.n=t)}function Cv(t={}){const e=t.locale,n=Av(t),i=Ze(t.pluralRules)&&Ee(e)&&ct(t.pluralRules[e])?t.pluralRules[e]:_u,r=Ze(t.pluralRules)&&Ee(e)&&ct(t.pluralRules[e])?_u:void 0,s=p=>p[i(n,p.length,r)],a=t.list||[],o=p=>a[p],l=t.named||nt();gt(t.pluralIndex)&&Rv(n,l);const c=p=>l[p];function u(p){const A=ct(t.messages)?t.messages(p):Ze(t.messages)?t.messages[p]:!1;return A||(t.parent?t.parent.message(p):Mv)}const f=p=>t.modifiers?t.modifiers[p]:Sv,d=Fe(t.processor)&&ct(t.processor.normalize)?t.processor.normalize:Tv,_=Fe(t.processor)&&ct(t.processor.interpolate)?t.processor.interpolate:bv,x=Fe(t.processor)&&Ee(t.processor.type)?t.processor.type:yv,m={list:o,named:c,plural:s,linked:(p,...A)=>{const[E,M]=A;let L="text",b="";A.length===1?Ze(E)?(b=E.modifier||b,L=E.type||L):Ee(E)&&(b=E||b):A.length===2&&(Ee(E)&&(b=E||b),Ee(M)&&(L=M||L));const R=u(p)(m),k=L==="vnode"&&ft(R)&&b?R[0]:R;return b?f(b)(k,L):k},message:u,type:x,interpolate:_,normalize:d,values:Dt(nt(),a,l)};return m}let ws=null;function wv(t){ws=t}function Lv(t,e,n){ws&&ws.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const Pv=Iv("function:translate");function Iv(t){return e=>ws&&ws.emit(t,e)}const Dv=oc.__EXTEND_POINT__,Wi=Ja(Dv),Nv={FALLBACK_TO_TRANSLATE:Wi(),CANNOT_FORMAT_NUMBER:Wi(),FALLBACK_TO_NUMBER_FORMAT:Wi(),CANNOT_FORMAT_DATE:Wi(),FALLBACK_TO_DATE_FORMAT:Wi(),EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:Wi(),__EXTEND_POINT__:Wi()},zh=Ie.__EXTEND_POINT__,Xi=Ja(zh),Rn={INVALID_ARGUMENT:zh,INVALID_DATE_ARGUMENT:Xi(),INVALID_ISO_DATE_ARGUMENT:Xi(),NOT_SUPPORT_NON_STRING_MESSAGE:Xi(),NOT_SUPPORT_LOCALE_PROMISE_VALUE:Xi(),NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:Xi(),NOT_SUPPORT_LOCALE_TYPE:Xi(),__EXTEND_POINT__:Xi()};function Fn(t){return Zr(t,null,void 0)}function uc(t,e){return e.locale!=null?gu(e.locale):gu(t.locale)}let To;function gu(t){if(Ee(t))return t;if(ct(t)){if(t.resolvedOnce&&To!=null)return To;if(t.constructor.name==="Function"){const e=t();if(Ag(e))throw Fn(Rn.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return To=e}else throw Fn(Rn.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw Fn(Rn.NOT_SUPPORT_LOCALE_TYPE)}function Uv(t,e,n){return[...new Set([n,...ft(e)?e:Ze(e)?Object.keys(e):Ee(e)?[e]:[n]])]}function Wh(t,e,n){const i=Ee(n)?n:Yr,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let a=[n];for(;ft(a);)a=vu(s,a,e);const o=ft(e)||!Fe(e)?e:e.default?e.default:null;a=Ee(o)?[o]:o,ft(a)&&vu(s,a,!1),r.__localeChainCache.set(i,s)}return s}function vu(t,e,n){let i=!0;for(let r=0;r<e.length&&qe(i);r++){const s=e[r];Ee(s)&&(i=Ov(t,e[r],n))}return i}function Ov(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=Fv(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function Fv(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(ft(n)||Fe(n))&&n[r]&&(i=n[r])}return i}const Bv="9.14.4",Qa=-1,Yr="en-US",Eu="",xu=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Hv(){return{upper:(t,e)=>e==="text"&&Ee(t)?t.toUpperCase():e==="vnode"&&Ze(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Ee(t)?t.toLowerCase():e==="vnode"&&Ze(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Ee(t)?xu(t):e==="vnode"&&Ze(t)&&"__v_isVNode"in t?xu(t.children):t}}let Xh;function Su(t){Xh=t}let Yh;function kv(t){Yh=t}let $h;function Gv(t){$h=t}let qh=null;const Vv=t=>{qh=t},zv=()=>qh;let jh=null;const Mu=t=>{jh=t},Wv=()=>jh;let yu=0;function Xv(t={}){const e=ct(t.onWarn)?t.onWarn:wg,n=Ee(t.version)?t.version:Bv,i=Ee(t.locale)||ct(t.locale)?t.locale:Yr,r=ct(i)?Yr:i,s=ft(t.fallbackLocale)||Fe(t.fallbackLocale)||Ee(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,a=Fe(t.messages)?t.messages:bo(r),o=Fe(t.datetimeFormats)?t.datetimeFormats:bo(r),l=Fe(t.numberFormats)?t.numberFormats:bo(r),c=Dt(nt(),t.modifiers,Hv()),u=t.pluralRules||nt(),f=ct(t.missing)?t.missing:null,d=qe(t.missingWarn)||Ii(t.missingWarn)?t.missingWarn:!0,_=qe(t.fallbackWarn)||Ii(t.fallbackWarn)?t.fallbackWarn:!0,x=!!t.fallbackFormat,v=!!t.unresolving,m=ct(t.postTranslation)?t.postTranslation:null,p=Fe(t.processor)?t.processor:null,A=qe(t.warnHtmlMessage)?t.warnHtmlMessage:!0,E=!!t.escapeParameter,M=ct(t.messageCompiler)?t.messageCompiler:Xh,L=ct(t.messageResolver)?t.messageResolver:Yh||Ev,b=ct(t.localeFallbacker)?t.localeFallbacker:$h||Uv,R=Ze(t.fallbackContext)?t.fallbackContext:void 0,k=t,S=Ze(k.__datetimeFormatters)?k.__datetimeFormatters:new Map,C=Ze(k.__numberFormatters)?k.__numberFormatters:new Map,X=Ze(k.__meta)?k.__meta:{};yu++;const O={version:n,cid:yu,locale:i,fallbackLocale:s,messages:a,modifiers:c,pluralRules:u,missing:f,missingWarn:d,fallbackWarn:_,fallbackFormat:x,unresolving:v,postTranslation:m,processor:p,warnHtmlMessage:A,escapeParameter:E,messageCompiler:M,messageResolver:L,localeFallbacker:b,fallbackContext:R,onWarn:e,__meta:X};return O.datetimeFormats=o,O.numberFormats=l,O.__datetimeFormatters=S,O.__numberFormatters=C,__INTLIFY_PROD_DEVTOOLS__&&Lv(O,n,X),O}const bo=t=>({[t]:nt()});function fc(t,e,n,i,r){const{missing:s,onWarn:a}=t;if(s!==null){const o=s(t,n,e,r);return Ee(o)?o:e}else return e}function is(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function Yv(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function $v(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(Yv(t,e[i]))return!0;return!1}function Ao(t){return n=>qv(n,t)}function qv(t,e){const n=ov(e);if(n==null)throw Cs(0);if(cc(n)===1){const s=lv(n);return t.plural(s.reduce((a,o)=>[...a,Tu(t,o)],[]))}else return Tu(t,n)}function Tu(t,e){const n=cv(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=uv(e).reduce((r,s)=>[...r,gl(t,s)],[]);return t.normalize(i)}}function gl(t,e){const n=cc(e);switch(n){case 3:return js(e,n);case 9:return js(e,n);case 4:{const i=e;if(An(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(An(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw Cs(n)}case 5:{const i=e;if(An(i,"i")&&gt(i.i))return t.interpolate(t.list(i.i));if(An(i,"index")&&gt(i.index))return t.interpolate(t.list(i.index));throw Cs(n)}case 6:{const i=e,r=fv(i),s=dv(i);return t.linked(gl(t,s),r?gl(t,r):void 0,t.type)}case 7:return js(e,n);case 8:return js(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const Kh=t=>t;let Ur=nt();function Zh(t,e={}){let n=!1;const i=e.onError||Og;return e.onError=r=>{n=!0,i(r)},{...sv(t,e),detectError:n}}const jv=(t,e)=>{if(!Ee(t))throw Fn(Rn.NOT_SUPPORT_NON_STRING_MESSAGE);{qe(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||Kh)(t),r=Ur[i];if(r)return r;const{code:s,detectError:a}=Zh(t,e),o=new Function(`return ${s}`)();return a?o:Ur[i]=o}};function Kv(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&Ee(t)){qe(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||Kh)(t),r=Ur[i];if(r)return r;const{ast:s,detectError:a}=Zh(t,{...e,location:!1,jit:!0}),o=Ao(s);return a?o:Ur[i]=o}else{const n=t.cacheKey;if(n){const i=Ur[n];return i||(Ur[n]=Ao(t))}else return Ao(t)}}const bu=()=>"",pn=t=>ct(t);function Au(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:a,messages:o}=t,[l,c]=vl(...e),u=qe(c.missingWarn)?c.missingWarn:t.missingWarn,f=qe(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,d=qe(c.escapeParameter)?c.escapeParameter:t.escapeParameter,_=!!c.resolvedMessage,x=Ee(c.default)||qe(c.default)?qe(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:"",v=n||x!=="",m=uc(t,c);d&&Zv(c);let[p,A,E]=_?[l,m,o[m]||nt()]:Jh(t,l,m,a,f,u),M=p,L=l;if(!_&&!(Ee(M)||kn(M)||pn(M))&&v&&(M=x,L=M),!_&&(!(Ee(M)||kn(M)||pn(M))||!Ee(A)))return r?Qa:l;let b=!1;const R=()=>{b=!0},k=pn(M)?M:Qh(t,l,A,M,L,R);if(b)return M;const S=e0(t,A,E,c),C=Cv(S),X=Jv(t,k,C),O=i?i(X,l):X;if(__INTLIFY_PROD_DEVTOOLS__){const ie={timestamp:Date.now(),key:Ee(l)?l:pn(M)?M.key:"",locale:A||(pn(M)?M.locale:""),format:Ee(M)?M:pn(M)?M.source:"",message:O};ie.meta=Dt({},t.__meta,zv()||{}),Pv(ie)}return O}function Zv(t){ft(t.list)?t.list=t.list.map(e=>Ee(e)?uu(e):e):Ze(t.named)&&Object.keys(t.named).forEach(e=>{Ee(t.named[e])&&(t.named[e]=uu(t.named[e]))})}function Jh(t,e,n,i,r,s){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=nt(),d,_=null;const x="translate";for(let v=0;v<u.length&&(d=u[v],f=a[d]||nt(),(_=l(f,e))===null&&(_=f[e]),!(Ee(_)||kn(_)||pn(_)));v++)if(!$v(d,u)){const m=fc(t,e,d,s,x);m!==e&&(_=m)}return[_,d,f]}function Qh(t,e,n,i,r,s){const{messageCompiler:a,warnHtmlMessage:o}=t;if(pn(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(a==null){const c=()=>i;return c.locale=n,c.key=e,c}const l=a(i,Qv(t,n,r,i,o,s));return l.locale=n,l.key=e,l.source=i,l}function Jv(t,e,n){return e(n)}function vl(...t){const[e,n,i]=t,r=nt();if(!Ee(e)&&!gt(e)&&!pn(e)&&!kn(e))throw Fn(Rn.INVALID_ARGUMENT);const s=gt(e)?String(e):(pn(e),e);return gt(n)?r.plural=n:Ee(n)?r.default=n:Fe(n)&&!Za(n)?r.named=n:ft(n)&&(r.list=n),gt(i)?r.plural=i:Ee(i)?r.default=i:Fe(i)&&Dt(r,i),[s,r]}function Qv(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:a=>{throw s&&s(a),a},onCacheKey:a=>Sg(e,n,a)}}function e0(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,d={locale:e,modifiers:r,pluralRules:s,messages:_=>{let x=a(n,_);if(x==null&&u){const[,,v]=Jh(u,_,e,o,l,c);x=a(v,_)}if(Ee(x)||kn(x)){let v=!1;const p=Qh(t,_,e,x,_,()=>{v=!0});return v?bu:p}else return pn(x)?x:bu}};return t.processor&&(d.processor=t.processor),i.list&&(d.list=i.list),i.named&&(d.named=i.named),gt(i.plural)&&(d.pluralIndex=i.plural),d}function Ru(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__datetimeFormatters:o}=t,[l,c,u,f]=El(...e),d=qe(u.missingWarn)?u.missingWarn:t.missingWarn;qe(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const _=!!u.part,x=uc(t,u),v=a(t,r,x);if(!Ee(l)||l==="")return new Intl.DateTimeFormat(x,f).format(c);let m={},p,A=null;const E="datetime format";for(let b=0;b<v.length&&(p=v[b],m=n[p]||{},A=m[l],!Fe(A));b++)fc(t,l,p,d,E);if(!Fe(A)||!Ee(p))return i?Qa:l;let M=`${p}__${l}`;Za(f)||(M=`${M}__${JSON.stringify(f)}`);let L=o.get(M);return L||(L=new Intl.DateTimeFormat(p,Dt({},A,f)),o.set(M,L)),_?L.formatToParts(c):L.format(c)}const ep=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function El(...t){const[e,n,i,r]=t,s=nt();let a=nt(),o;if(Ee(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw Fn(Rn.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw Fn(Rn.INVALID_ISO_DATE_ARGUMENT)}}else if(yg(e)){if(isNaN(e.getTime()))throw Fn(Rn.INVALID_DATE_ARGUMENT);o=e}else if(gt(e))o=e;else throw Fn(Rn.INVALID_ARGUMENT);return Ee(n)?s.key=n:Fe(n)&&Object.keys(n).forEach(l=>{ep.includes(l)?a[l]=n[l]:s[l]=n[l]}),Ee(i)?s.locale=i:Fe(i)&&(a=i),Fe(r)&&(a=r),[s.key||"",o,s,a]}function Cu(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function wu(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__numberFormatters:o}=t,[l,c,u,f]=xl(...e),d=qe(u.missingWarn)?u.missingWarn:t.missingWarn;qe(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const _=!!u.part,x=uc(t,u),v=a(t,r,x);if(!Ee(l)||l==="")return new Intl.NumberFormat(x,f).format(c);let m={},p,A=null;const E="number format";for(let b=0;b<v.length&&(p=v[b],m=n[p]||{},A=m[l],!Fe(A));b++)fc(t,l,p,d,E);if(!Fe(A)||!Ee(p))return i?Qa:l;let M=`${p}__${l}`;Za(f)||(M=`${M}__${JSON.stringify(f)}`);let L=o.get(M);return L||(L=new Intl.NumberFormat(p,Dt({},A,f)),o.set(M,L)),_?L.formatToParts(c):L.format(c)}const tp=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function xl(...t){const[e,n,i,r]=t,s=nt();let a=nt();if(!gt(e))throw Fn(Rn.INVALID_ARGUMENT);const o=e;return Ee(n)?s.key=n:Fe(n)&&Object.keys(n).forEach(l=>{tp.includes(l)?a[l]=n[l]:s[l]=n[l]}),Ee(i)?s.locale=i:Fe(i)&&(a=i),Fe(r)&&(a=r),[s.key||"",o,s,a]}function Lu(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}av();/*!
  * vue-i18n v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const t0="9.14.4";function n0(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(ti().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(ti().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(ti().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(ti().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(ti().__INTLIFY_PROD_DEVTOOLS__=!1)}const i0=Nv.__EXTEND_POINT__,Yn=Ja(i0);Yn(),Yn(),Yn(),Yn(),Yn(),Yn(),Yn(),Yn(),Yn();const np=Rn.__EXTEND_POINT__,Jt=Ja(np),xt={UNEXPECTED_RETURN_TYPE:np,INVALID_ARGUMENT:Jt(),MUST_BE_CALL_SETUP_TOP:Jt(),NOT_INSTALLED:Jt(),NOT_AVAILABLE_IN_LEGACY_MODE:Jt(),REQUIRED_VALUE:Jt(),INVALID_VALUE:Jt(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:Jt(),NOT_INSTALLED_WITH_PROVIDE:Jt(),UNEXPECTED_ERROR:Jt(),NOT_COMPATIBLE_LEGACY_VUE_I18N:Jt(),BRIDGE_SUPPORT_VUE_2_ONLY:Jt(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:Jt(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:Jt(),__EXTEND_POINT__:Jt()};function Rt(t,...e){return Zr(t,null,void 0)}const Sl=Ui("__translateVNode"),Ml=Ui("__datetimeParts"),yl=Ui("__numberParts"),ip=Ui("__setPluralRules"),rp=Ui("__injectWithOption"),Tl=Ui("__dispose");function Ls(t){if(!Ze(t)||kn(t))return t;for(const e in t)if(An(t,e))if(!e.includes("."))Ze(t[e])&&Ls(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let a=0;a<i;a++){if(n[a]==="__proto__")throw new Error(`unsafe key: ${n[a]}`);if(n[a]in r||(r[n[a]]=nt()),!Ze(r[n[a]])){s=!0;break}r=r[n[a]]}if(s||(kn(r)?Vh.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!kn(r)){const a=r[n[i]];Ze(a)&&Ls(a)}}return t}function eo(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,a=Fe(n)?n:ft(i)?nt():{[t]:nt()};if(ft(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||nt(),Ta(c,a[l])):Ta(c,a)}else Ee(o)&&Ta(JSON.parse(o),a)}),r==null&&s)for(const o in a)An(a,o)&&Ls(a[o]);return a}function sp(t){return t.type}function ap(t,e,n){let i=Ze(e.messages)?e.messages:nt();"__i18nGlobal"in n&&(i=eo(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(Ze(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(a=>{t.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(Ze(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(a=>{t.mergeNumberFormat(a,e.numberFormats[a])})}}}function Pu(t){return kt(Us,null,t,0)}const Iu="__INTLIFY_META__",Du=()=>[],r0=()=>!1;let Nu=0;function Uu(t){return(e,n,i,r)=>t(n,i,Wr()||void 0,r)}const s0=()=>{const t=Wr();let e=null;return t&&(e=sp(t)[Iu])?{[Iu]:e}:null};function dc(t={},e){const{__root:n,__injectWithOption:i}=t,r=n===void 0,s=t.flatJson,a=Da?Ft:kd,o=!!t.translateExistCompatible;let l=qe(t.inheritLocale)?t.inheritLocale:!0;const c=a(n&&l?n.locale.value:Ee(t.locale)?t.locale:Yr),u=a(n&&l?n.fallbackLocale.value:Ee(t.fallbackLocale)||ft(t.fallbackLocale)||Fe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:c.value),f=a(eo(c.value,t)),d=a(Fe(t.datetimeFormats)?t.datetimeFormats:{[c.value]:{}}),_=a(Fe(t.numberFormats)?t.numberFormats:{[c.value]:{}});let x=n?n.missingWarn:qe(t.missingWarn)||Ii(t.missingWarn)?t.missingWarn:!0,v=n?n.fallbackWarn:qe(t.fallbackWarn)||Ii(t.fallbackWarn)?t.fallbackWarn:!0,m=n?n.fallbackRoot:qe(t.fallbackRoot)?t.fallbackRoot:!0,p=!!t.fallbackFormat,A=ct(t.missing)?t.missing:null,E=ct(t.missing)?Uu(t.missing):null,M=ct(t.postTranslation)?t.postTranslation:null,L=n?n.warnHtmlMessage:qe(t.warnHtmlMessage)?t.warnHtmlMessage:!0,b=!!t.escapeParameter;const R=n?n.modifiers:Fe(t.modifiers)?t.modifiers:{};let k=t.pluralRules||n&&n.pluralRules,S;S=(()=>{r&&Mu(null);const D={version:t0,locale:c.value,fallbackLocale:u.value,messages:f.value,modifiers:R,pluralRules:k,missing:E===null?void 0:E,missingWarn:x,fallbackWarn:v,fallbackFormat:p,unresolving:!0,postTranslation:M===null?void 0:M,warnHtmlMessage:L,escapeParameter:b,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};D.datetimeFormats=d.value,D.numberFormats=_.value,D.__datetimeFormatters=Fe(S)?S.__datetimeFormatters:void 0,D.__numberFormatters=Fe(S)?S.__numberFormatters:void 0;const H=Xv(D);return r&&Mu(H),H})(),is(S,c.value,u.value);function X(){return[c.value,u.value,f.value,d.value,_.value]}const O=At({get:()=>c.value,set:D=>{c.value=D,S.locale=c.value}}),ie=At({get:()=>u.value,set:D=>{u.value=D,S.fallbackLocale=u.value,is(S,c.value,D)}}),B=At(()=>f.value),$=At(()=>d.value),Y=At(()=>_.value);function te(){return ct(M)?M:null}function J(D){M=D,S.postTranslation=D}function ae(){return A}function oe(D){D!==null&&(E=Uu(D)),A=D,S.missing=E}const ue=(D,H,le,me,se,Be)=>{X();let Te;try{__INTLIFY_PROD_DEVTOOLS__,r||(S.fallbackContext=n?Wv():void 0),Te=D(S)}finally{__INTLIFY_PROD_DEVTOOLS__,r||(S.fallbackContext=void 0)}if(le!=="translate exists"&&gt(Te)&&Te===Qa||le==="translate exists"&&!Te){const[Ce,be]=H();return n&&m?me(n):se(Ce)}else{if(Be(Te))return Te;throw Rt(xt.UNEXPECTED_RETURN_TYPE)}};function fe(...D){return ue(H=>Reflect.apply(Au,null,[H,...D]),()=>vl(...D),"translate",H=>Reflect.apply(H.t,H,[...D]),H=>H,H=>Ee(H))}function ee(...D){const[H,le,me]=D;if(me&&!Ze(me))throw Rt(xt.INVALID_ARGUMENT);return fe(H,le,Dt({resolvedMessage:!0},me||{}))}function ce(...D){return ue(H=>Reflect.apply(Ru,null,[H,...D]),()=>El(...D),"datetime format",H=>Reflect.apply(H.d,H,[...D]),()=>Eu,H=>Ee(H))}function pe(...D){return ue(H=>Reflect.apply(wu,null,[H,...D]),()=>xl(...D),"number format",H=>Reflect.apply(H.n,H,[...D]),()=>Eu,H=>Ee(H))}function Se(D){return D.map(H=>Ee(H)||gt(H)||qe(H)?Pu(String(H)):H)}const Re={normalize:Se,interpolate:D=>D,type:"vnode"};function Le(...D){return ue(H=>{let le;const me=H;try{me.processor=Re,le=Reflect.apply(Au,null,[me,...D])}finally{me.processor=null}return le},()=>vl(...D),"translate",H=>H[Sl](...D),H=>[Pu(H)],H=>ft(H))}function ye(...D){return ue(H=>Reflect.apply(wu,null,[H,...D]),()=>xl(...D),"number format",H=>H[yl](...D),Du,H=>Ee(H)||ft(H))}function Ve(...D){return ue(H=>Reflect.apply(Ru,null,[H,...D]),()=>El(...D),"datetime format",H=>H[Ml](...D),Du,H=>Ee(H)||ft(H))}function y(D){k=D,S.pluralRules=k}function U(D,H){return ue(()=>{if(!D)return!1;const le=Ee(H)?H:c.value,me=z(le),se=S.messageResolver(me,D);return o?se!=null:kn(se)||pn(se)||Ee(se)},()=>[D],"translate exists",le=>Reflect.apply(le.te,le,[D,H]),r0,le=>qe(le))}function P(D){let H=null;const le=Wh(S,u.value,c.value);for(let me=0;me<le.length;me++){const se=f.value[le[me]]||{},Be=S.messageResolver(se,D);if(Be!=null){H=Be;break}}return H}function V(D){const H=P(D);return H??(n?n.tm(D)||{}:{})}function z(D){return f.value[D]||{}}function ne(D,H){if(s){const le={[D]:H};for(const me in le)An(le,me)&&Ls(le[me]);H=le[D]}f.value[D]=H,S.messages=f.value}function re(D,H){f.value[D]=f.value[D]||{};const le={[D]:H};if(s)for(const me in le)An(le,me)&&Ls(le[me]);H=le[D],Ta(H,f.value[D]),S.messages=f.value}function T(D){return d.value[D]||{}}function h(D,H){d.value[D]=H,S.datetimeFormats=d.value,Cu(S,D,H)}function g(D,H){d.value[D]=Dt(d.value[D]||{},H),S.datetimeFormats=d.value,Cu(S,D,H)}function I(D){return _.value[D]||{}}function N(D,H){_.value[D]=H,S.numberFormats=_.value,Lu(S,D,H)}function G(D,H){_.value[D]=Dt(_.value[D]||{},H),S.numberFormats=_.value,Lu(S,D,H)}Nu++,n&&Da&&(bi(n.locale,D=>{l&&(c.value=D,S.locale=D,is(S,c.value,u.value))}),bi(n.fallbackLocale,D=>{l&&(u.value=D,S.fallbackLocale=D,is(S,c.value,u.value))}));const q={id:Nu,locale:O,fallbackLocale:ie,get inheritLocale(){return l},set inheritLocale(D){l=D,D&&n&&(c.value=n.locale.value,u.value=n.fallbackLocale.value,is(S,c.value,u.value))},get availableLocales(){return Object.keys(f.value).sort()},messages:B,get modifiers(){return R},get pluralRules(){return k||{}},get isGlobal(){return r},get missingWarn(){return x},set missingWarn(D){x=D,S.missingWarn=x},get fallbackWarn(){return v},set fallbackWarn(D){v=D,S.fallbackWarn=v},get fallbackRoot(){return m},set fallbackRoot(D){m=D},get fallbackFormat(){return p},set fallbackFormat(D){p=D,S.fallbackFormat=p},get warnHtmlMessage(){return L},set warnHtmlMessage(D){L=D,S.warnHtmlMessage=D},get escapeParameter(){return b},set escapeParameter(D){b=D,S.escapeParameter=D},t:fe,getLocaleMessage:z,setLocaleMessage:ne,mergeLocaleMessage:re,getPostTranslationHandler:te,setPostTranslationHandler:J,getMissingHandler:ae,setMissingHandler:oe,[ip]:y};return q.datetimeFormats=$,q.numberFormats=Y,q.rt=ee,q.te=U,q.tm=V,q.d=ce,q.n=pe,q.getDateTimeFormat=T,q.setDateTimeFormat=h,q.mergeDateTimeFormat=g,q.getNumberFormat=I,q.setNumberFormat=N,q.mergeNumberFormat=G,q[rp]=i,q[Sl]=Le,q[Ml]=Ve,q[yl]=ye,q}function a0(t){const e=Ee(t.locale)?t.locale:Yr,n=Ee(t.fallbackLocale)||ft(t.fallbackLocale)||Fe(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=ct(t.missing)?t.missing:void 0,r=qe(t.silentTranslationWarn)||Ii(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=qe(t.silentFallbackWarn)||Ii(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,a=qe(t.fallbackRoot)?t.fallbackRoot:!0,o=!!t.formatFallbackMessages,l=Fe(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=ct(t.postTranslation)?t.postTranslation:void 0,f=Ee(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,d=!!t.escapeParameterHtml,_=qe(t.sync)?t.sync:!0;let x=t.messages;if(Fe(t.sharedMessages)){const b=t.sharedMessages;x=Object.keys(b).reduce((k,S)=>{const C=k[S]||(k[S]={});return Dt(C,b[S]),k},x||{})}const{__i18n:v,__root:m,__injectWithOption:p}=t,A=t.datetimeFormats,E=t.numberFormats,M=t.flatJson,L=t.translateExistCompatible;return{locale:e,fallbackLocale:n,messages:x,flatJson:M,datetimeFormats:A,numberFormats:E,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:d,messageResolver:t.messageResolver,inheritLocale:_,translateExistCompatible:L,__i18n:v,__root:m,__injectWithOption:p}}function bl(t={},e){{const n=dc(a0(t)),{__extender:i}=t,r={id:n.id,get locale(){return n.locale.value},set locale(s){n.locale.value=s},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(s){n.fallbackLocale.value=s},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(s){},get missing(){return n.getMissingHandler()},set missing(s){n.setMissingHandler(s)},get silentTranslationWarn(){return qe(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(s){n.missingWarn=qe(s)?!s:s},get silentFallbackWarn(){return qe(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(s){n.fallbackWarn=qe(s)?!s:s},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(s){n.fallbackFormat=s},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(s){n.setPostTranslationHandler(s)},get sync(){return n.inheritLocale},set sync(s){n.inheritLocale=s},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){n.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(s){n.escapeParameter=s},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(s){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...s){const[a,o,l]=s,c={};let u=null,f=null;if(!Ee(a))throw Rt(xt.INVALID_ARGUMENT);const d=a;return Ee(o)?c.locale=o:ft(o)?u=o:Fe(o)&&(f=o),ft(l)?u=l:Fe(l)&&(f=l),Reflect.apply(n.t,n,[d,u||f||{},c])},rt(...s){return Reflect.apply(n.rt,n,[...s])},tc(...s){const[a,o,l]=s,c={plural:1};let u=null,f=null;if(!Ee(a))throw Rt(xt.INVALID_ARGUMENT);const d=a;return Ee(o)?c.locale=o:gt(o)?c.plural=o:ft(o)?u=o:Fe(o)&&(f=o),Ee(l)?c.locale=l:ft(l)?u=l:Fe(l)&&(f=l),Reflect.apply(n.t,n,[d,u||f||{},c])},te(s,a){return n.te(s,a)},tm(s){return n.tm(s)},getLocaleMessage(s){return n.getLocaleMessage(s)},setLocaleMessage(s,a){n.setLocaleMessage(s,a)},mergeLocaleMessage(s,a){n.mergeLocaleMessage(s,a)},d(...s){return Reflect.apply(n.d,n,[...s])},getDateTimeFormat(s){return n.getDateTimeFormat(s)},setDateTimeFormat(s,a){n.setDateTimeFormat(s,a)},mergeDateTimeFormat(s,a){n.mergeDateTimeFormat(s,a)},n(...s){return Reflect.apply(n.n,n,[...s])},getNumberFormat(s){return n.getNumberFormat(s)},setNumberFormat(s,a){n.setNumberFormat(s,a)},mergeNumberFormat(s,a){n.mergeNumberFormat(s,a)},getChoiceIndex(s,a){return-1}};return r.__extender=i,r}}const hc={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function o0({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===hn?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},nt())}function op(t){return hn}const l0=ec({name:"i18n-t",props:Dt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>gt(t)||!isNaN(t)}},hc),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||Fs({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f!=="_"),a=nt();t.locale&&(a.locale=t.locale),t.plural!==void 0&&(a.plural=Ee(t.plural)?+t.plural:t.plural);const o=o0(e,s),l=r[Sl](t.keypath,o,a),c=Dt(nt(),i),u=Ee(t.tag)||Ze(t.tag)?t.tag:op();return ac(u,c,l)}}}),Ou=l0;function c0(t){return ft(t)&&!Ee(t[0])}function lp(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const a={part:!0};let o=nt();t.locale&&(a.locale=t.locale),Ee(t.format)?a.key=t.format:Ze(t.format)&&(Ee(t.format.key)&&(a.key=t.format.key),o=Object.keys(t.format).reduce((d,_)=>n.includes(_)?Dt(nt(),d,{[_]:t.format[_]}):d,nt()));const l=i(t.value,a,o);let c=[a.key];ft(l)?c=l.map((d,_)=>{const x=r[d.type],v=x?x({[d.type]:d.value,index:_,parts:l}):[d.value];return c0(v)&&(v[0].key=`${d.type}-${_}`),v}):Ee(l)&&(c=[l]);const u=Dt(nt(),s),f=Ee(t.tag)||Ze(t.tag)?t.tag:op();return ac(f,u,c)}}const u0=ec({name:"i18n-n",props:Dt({value:{type:Number,required:!0},format:{type:[String,Object]}},hc),setup(t,e){const n=t.i18n||Fs({useScope:t.scope,__useComponent:!0});return lp(t,e,tp,(...i)=>n[yl](...i))}}),Fu=u0,f0=ec({name:"i18n-d",props:Dt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},hc),setup(t,e){const n=t.i18n||Fs({useScope:t.scope,__useComponent:!0});return lp(t,e,ep,(...i)=>n[Ml](...i))}}),Bu=f0;function d0(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function h0(t){const e=a=>{const{instance:o,modifiers:l,value:c}=a;if(!o||!o.$)throw Rt(xt.UNEXPECTED_ERROR);const u=d0(t,o.$),f=Hu(c);return[Reflect.apply(u.t,u,[...ku(f)]),u]};return{created:(a,o)=>{const[l,c]=e(o);Da&&t.global===c&&(a.__i18nWatcher=bi(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{Da&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=Hu(o);a.textContent=Reflect.apply(l.t,l,[...ku(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function Hu(t){if(Ee(t))return{path:t};if(Fe(t)){if(!("path"in t))throw Rt(xt.REQUIRED_VALUE,"path");return t}else throw Rt(xt.INVALID_VALUE)}function ku(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,a={},o=i||{};return Ee(n)&&(a.locale=n),gt(r)&&(a.plural=r),gt(s)&&(a.plural=s),[e,o,a]}function p0(t,e,...n){const i=Fe(n[0])?n[0]:{},r=!!i.useI18nComponentName;(qe(i.globalInstall)?i.globalInstall:!0)&&([r?"i18n":Ou.name,"I18nT"].forEach(a=>t.component(a,Ou)),[Fu.name,"I18nN"].forEach(a=>t.component(a,Fu)),[Bu.name,"I18nD"].forEach(a=>t.component(a,Bu))),t.directive("t",h0(e))}function m0(t,e,n){return{beforeCreate(){const i=Wr();if(!i)throw Rt(xt.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=Gu(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=bl(s);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Gu(t,r);else{this.$i18n=bl({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&ap(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,a)=>this.$i18n.te(s,a),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=Wr();if(!i)throw Rt(xt.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function Gu(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[ip](e.pluralizationRules||t.pluralizationRules);const n=eo(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const _0=Ui("global-vue-i18n");function g0(t={},e){const n=__VUE_I18N_LEGACY_API__&&qe(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,i=qe(t.globalInjection)?t.globalInjection:!0,r=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,s=new Map,[a,o]=v0(t,n),l=Ui("");function c(d){return s.get(d)||null}function u(d,_){s.set(d,_)}function f(d){s.delete(d)}{const d={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return r},async install(_,...x){if(_.__VUE_I18N_SYMBOL__=l,_.provide(_.__VUE_I18N_SYMBOL__,d),Fe(x[0])){const p=x[0];d.__composerExtend=p.__composerExtend,d.__vueI18nExtend=p.__vueI18nExtend}let v=null;!n&&i&&(v=R0(_,d.global)),__VUE_I18N_FULL_INSTALL__&&p0(_,d,...x),__VUE_I18N_LEGACY_API__&&n&&_.mixin(m0(o,o.__composer,d));const m=_.unmount;_.unmount=()=>{v&&v(),d.dispose(),m()}},get global(){return o},dispose(){a.stop()},__instances:s,__getInstance:c,__setInstance:u,__deleteInstance:f};return d}}function Fs(t={}){const e=Wr();if(e==null)throw Rt(xt.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Rt(xt.NOT_INSTALLED);const n=E0(e),i=S0(n),r=sp(e),s=x0(t,r);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw Rt(xt.NOT_AVAILABLE_IN_LEGACY_MODE);return b0(e,s,i,t)}if(s==="global")return ap(i,t,r),i;if(s==="parent"){let l=M0(n,e,t.__useComponent);return l==null&&(l=i),l}const a=n;let o=a.__getInstance(e);if(o==null){const l=Dt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),o=dc(l),a.__composerExtend&&(o[Tl]=a.__composerExtend(o)),T0(a,e,o),a.__setInstance(e,o)}return o}function v0(t,e,n){const i=lm();{const r=__VUE_I18N_LEGACY_API__&&e?i.run(()=>bl(t)):i.run(()=>dc(t));if(r==null)throw Rt(xt.UNEXPECTED_ERROR);return[i,r]}}function E0(t){{const e=vs(t.isCE?_0:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Rt(t.isCE?xt.NOT_INSTALLED_WITH_PROVIDE:xt.UNEXPECTED_ERROR);return e}}function x0(t,e){return Za(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function S0(t){return t.mode==="composition"?t.global:t.global.__composer}function M0(t,e,n=!1){let i=null;const r=e.root;let s=y0(e,n);for(;s!=null;){const a=t;if(t.mode==="composition")i=a.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(s);o!=null&&(i=o.__composer,n&&i&&!i[rp]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function y0(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function T0(t,e,n){ja(()=>{},e),tc(()=>{const i=n;t.__deleteInstance(e);const r=i[Tl];r&&(r(),delete i[Tl])},e)}function b0(t,e,n,i={}){const r=e==="local",s=kd(null);if(r&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw Rt(xt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const a=qe(i.inheritLocale)?i.inheritLocale:!Ee(i.locale),o=Ft(!r||a?n.locale.value:Ee(i.locale)?i.locale:Yr),l=Ft(!r||a?n.fallbackLocale.value:Ee(i.fallbackLocale)||ft(i.fallbackLocale)||Fe(i.fallbackLocale)||i.fallbackLocale===!1?i.fallbackLocale:o.value),c=Ft(eo(o.value,i)),u=Ft(Fe(i.datetimeFormats)?i.datetimeFormats:{[o.value]:{}}),f=Ft(Fe(i.numberFormats)?i.numberFormats:{[o.value]:{}}),d=r?n.missingWarn:qe(i.missingWarn)||Ii(i.missingWarn)?i.missingWarn:!0,_=r?n.fallbackWarn:qe(i.fallbackWarn)||Ii(i.fallbackWarn)?i.fallbackWarn:!0,x=r?n.fallbackRoot:qe(i.fallbackRoot)?i.fallbackRoot:!0,v=!!i.fallbackFormat,m=ct(i.missing)?i.missing:null,p=ct(i.postTranslation)?i.postTranslation:null,A=r?n.warnHtmlMessage:qe(i.warnHtmlMessage)?i.warnHtmlMessage:!0,E=!!i.escapeParameter,M=r?n.modifiers:Fe(i.modifiers)?i.modifiers:{},L=i.pluralRules||r&&n.pluralRules;function b(){return[o.value,l.value,c.value,u.value,f.value]}const R=At({get:()=>s.value?s.value.locale.value:o.value,set:P=>{s.value&&(s.value.locale.value=P),o.value=P}}),k=At({get:()=>s.value?s.value.fallbackLocale.value:l.value,set:P=>{s.value&&(s.value.fallbackLocale.value=P),l.value=P}}),S=At(()=>s.value?s.value.messages.value:c.value),C=At(()=>u.value),X=At(()=>f.value);function O(){return s.value?s.value.getPostTranslationHandler():p}function ie(P){s.value&&s.value.setPostTranslationHandler(P)}function B(){return s.value?s.value.getMissingHandler():m}function $(P){s.value&&s.value.setMissingHandler(P)}function Y(P){return b(),P()}function te(...P){return s.value?Y(()=>Reflect.apply(s.value.t,null,[...P])):Y(()=>"")}function J(...P){return s.value?Reflect.apply(s.value.rt,null,[...P]):""}function ae(...P){return s.value?Y(()=>Reflect.apply(s.value.d,null,[...P])):Y(()=>"")}function oe(...P){return s.value?Y(()=>Reflect.apply(s.value.n,null,[...P])):Y(()=>"")}function ue(P){return s.value?s.value.tm(P):{}}function fe(P,V){return s.value?s.value.te(P,V):!1}function ee(P){return s.value?s.value.getLocaleMessage(P):{}}function ce(P,V){s.value&&(s.value.setLocaleMessage(P,V),c.value[P]=V)}function pe(P,V){s.value&&s.value.mergeLocaleMessage(P,V)}function Se(P){return s.value?s.value.getDateTimeFormat(P):{}}function Me(P,V){s.value&&(s.value.setDateTimeFormat(P,V),u.value[P]=V)}function Re(P,V){s.value&&s.value.mergeDateTimeFormat(P,V)}function Le(P){return s.value?s.value.getNumberFormat(P):{}}function ye(P,V){s.value&&(s.value.setNumberFormat(P,V),f.value[P]=V)}function Ve(P,V){s.value&&s.value.mergeNumberFormat(P,V)}const y={get id(){return s.value?s.value.id:-1},locale:R,fallbackLocale:k,messages:S,datetimeFormats:C,numberFormats:X,get inheritLocale(){return s.value?s.value.inheritLocale:a},set inheritLocale(P){s.value&&(s.value.inheritLocale=P)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(c.value)},get modifiers(){return s.value?s.value.modifiers:M},get pluralRules(){return s.value?s.value.pluralRules:L},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:d},set missingWarn(P){s.value&&(s.value.missingWarn=P)},get fallbackWarn(){return s.value?s.value.fallbackWarn:_},set fallbackWarn(P){s.value&&(s.value.missingWarn=P)},get fallbackRoot(){return s.value?s.value.fallbackRoot:x},set fallbackRoot(P){s.value&&(s.value.fallbackRoot=P)},get fallbackFormat(){return s.value?s.value.fallbackFormat:v},set fallbackFormat(P){s.value&&(s.value.fallbackFormat=P)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:A},set warnHtmlMessage(P){s.value&&(s.value.warnHtmlMessage=P)},get escapeParameter(){return s.value?s.value.escapeParameter:E},set escapeParameter(P){s.value&&(s.value.escapeParameter=P)},t:te,getPostTranslationHandler:O,setPostTranslationHandler:ie,getMissingHandler:B,setMissingHandler:$,rt:J,d:ae,n:oe,tm:ue,te:fe,getLocaleMessage:ee,setLocaleMessage:ce,mergeLocaleMessage:pe,getDateTimeFormat:Se,setDateTimeFormat:Me,mergeDateTimeFormat:Re,getNumberFormat:Le,setNumberFormat:ye,mergeNumberFormat:Ve};function U(P){P.locale.value=o.value,P.fallbackLocale.value=l.value,Object.keys(c.value).forEach(V=>{P.mergeLocaleMessage(V,c.value[V])}),Object.keys(u.value).forEach(V=>{P.mergeDateTimeFormat(V,u.value[V])}),Object.keys(f.value).forEach(V=>{P.mergeNumberFormat(V,f.value[V])}),P.escapeParameter=E,P.fallbackFormat=v,P.fallbackRoot=x,P.fallbackWarn=_,P.missingWarn=d,P.warnHtmlMessage=A}return ih(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw Rt(xt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const P=s.value=t.proxy.$i18n.__composer;e==="global"?(o.value=P.locale.value,l.value=P.fallbackLocale.value,c.value=P.messages.value,u.value=P.datetimeFormats.value,f.value=P.numberFormats.value):r&&U(P)}),y}const A0=["locale","fallbackLocale","availableLocales"],Vu=["t","rt","d","n","tm","te"];function R0(t,e){const n=Object.create(null);return A0.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw Rt(xt.UNEXPECTED_ERROR);const a=It(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,a)}),t.config.globalProperties.$i18n=n,Vu.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw Rt(xt.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,Vu.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}n0();__INTLIFY_JIT_COMPILATION__?Su(Kv):Su(jv);kv(xv);Gv(Wh);if(__INTLIFY_PROD_DEVTOOLS__){const t=ti();t.__INTLIFY__=!0,wv(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const C0="modulepreload",w0=function(t){return"/worldmap-quiz/"+t},zu={},Wu=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=w0(l),l in zu)return;zu[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":C0,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((d,_)=>{f.addEventListener("load",d),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},L0=(t,e,n)=>{const i=t[e];return i?typeof i=="function"?i():Promise.resolve(i):new Promise((r,s)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(s.bind(null,new Error("Unknown variable dynamic import: "+e+(e.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pc="160",P0=0,Xu=1,I0=2,cp=1,D0=2,Jn=3,Di=0,tn=1,ni=2,Ai=0,Vr=1,Yu=2,$u=3,qu=4,N0=5,er=100,U0=101,O0=102,ju=103,Ku=104,F0=200,B0=201,H0=202,k0=203,Al=204,Rl=205,G0=206,V0=207,z0=208,W0=209,X0=210,Y0=211,$0=212,q0=213,j0=214,K0=0,Z0=1,J0=2,Ua=3,Q0=4,eE=5,tE=6,nE=7,up=0,iE=1,rE=2,Ri=0,sE=1,aE=2,oE=3,lE=4,cE=5,uE=6,fp=300,$r=301,qr=302,Cl=303,wl=304,to=306,Ll=1e3,yn=1001,Pl=1002,$t=1003,Zu=1004,Ro=1005,mn=1006,fE=1007,Ps=1008,Ci=1009,dE=1010,hE=1011,mc=1012,dp=1013,Mi=1014,yi=1015,Is=1016,hp=1017,pp=1018,ir=1020,pE=1021,Tn=1023,mE=1024,_E=1025,rr=1026,jr=1027,gE=1028,mp=1029,vE=1030,_p=1031,gp=1033,Co=33776,wo=33777,Lo=33778,Po=33779,Ju=35840,Qu=35841,ef=35842,tf=35843,vp=36196,nf=37492,rf=37496,sf=37808,af=37809,of=37810,lf=37811,cf=37812,uf=37813,ff=37814,df=37815,hf=37816,pf=37817,mf=37818,_f=37819,gf=37820,vf=37821,Io=36492,Ef=36494,xf=36495,EE=36283,Sf=36284,Mf=36285,yf=36286,Ep=3e3,sr=3001,xE=3200,SE=3201,ME=0,yE=1,gn="",Lt="srgb",oi="srgb-linear",_c="display-p3",no="display-p3-linear",Oa="linear",ut="srgb",Fa="rec709",Ba="p3",fr=7680,Tf=519,TE=512,bE=513,AE=514,xp=515,RE=516,CE=517,wE=518,LE=519,Il=35044,bf="300 es",Dl=1035,ri=2e3,Ha=2001;class Jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Do=Math.PI/180,Nl=180/Math.PI;function wi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function PE(t,e){return(t%e+e)%e}function No(t,e,n){return(1-n)*t+n*e}function Af(t){return(t&t-1)===0&&t!==0}function Ul(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ii(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function it(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,a,o,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],_=i[5],x=i[8],v=r[0],m=r[3],p=r[6],A=r[1],E=r[4],M=r[7],L=r[2],b=r[5],R=r[8];return s[0]=a*v+o*A+l*L,s[3]=a*m+o*E+l*b,s[6]=a*p+o*M+l*R,s[1]=c*v+u*A+f*L,s[4]=c*m+u*E+f*b,s[7]=c*p+u*M+f*R,s[2]=d*v+_*A+x*L,s[5]=d*m+_*E+x*b,s[8]=d*p+_*M+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,_=c*s-a*l,x=n*f+i*d+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=_*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Uo.makeScale(e,n)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,n){return this.premultiply(Uo.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uo=new $e;function Sp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ds(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function IE(){const t=Ds("canvas");return t.style.display="block",t}const Rf={};function xs(t){t in Rf||(Rf[t]=!0,console.warn(t))}const Cf=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wf=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ks={[oi]:{transfer:Oa,primaries:Fa,toReference:t=>t,fromReference:t=>t},[Lt]:{transfer:ut,primaries:Fa,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[no]:{transfer:Oa,primaries:Ba,toReference:t=>t.applyMatrix3(wf),fromReference:t=>t.applyMatrix3(Cf)},[_c]:{transfer:ut,primaries:Ba,toReference:t=>t.convertSRGBToLinear().applyMatrix3(wf),fromReference:t=>t.applyMatrix3(Cf).convertLinearToSRGB()}},DE=new Set([oi,no]),tt={enabled:!0,_workingColorSpace:oi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!DE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ks[e].toReference,r=Ks[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ks[t].primaries},getTransfer:function(t){return t===gn?Oa:Ks[t].transfer}};function zr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Oo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let dr;class Mp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dr===void 0&&(dr=Ds("canvas")),dr.width=e.width,dr.height=e.height;const i=dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=dr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ds("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zr(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zr(n[i]/255)*255):n[i]=zr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NE=0;class yp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Fo(r[a].image)):s.push(Fo(r[a]))}else s=Fo(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Fo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Mp.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UE=0;class Zt extends Jr{constructor(e=Zt.DEFAULT_IMAGE,n=Zt.DEFAULT_MAPPING,i=yn,r=yn,s=mn,a=Ps,o=Tn,l=Ci,c=Zt.DEFAULT_ANISOTROPY,u=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UE++}),this.uuid=wi(),this.name="",this.source=new yp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===sr?Lt:gn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?sr:Ep}set encoding(e){xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sr?Lt:gn}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=fp;Zt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],_=l[5],x=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+_+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,M=(_+1)/2,L=(p+1)/2,b=(u+d)/4,R=(f+v)/4,k=(x+m)/4;return E>M&&E>L?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=b/i,s=R/i):M>L?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=k/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=R/s,r=k/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-x)*(m-x)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-x)/A,this.y=(f-v)/A,this.z=(d-u)/A,this.w=Math.acos((c+_+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class OE extends Jr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(xs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===sr?Lt:gn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new yp(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends OE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Tp extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class FE extends Zt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[a+0],_=s[a+1],x=s[a+2],v=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=d,e[n+1]=_,e[n+2]=x,e[n+3]=v;return}if(f!==v||l!==d||c!==_||u!==x){let m=1-o;const p=l*d+c*_+u*x+f*v,A=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const L=Math.sqrt(E),b=Math.atan2(L,p*A);m=Math.sin(m*b)/L,o=Math.sin(o*b)/L}const M=o*A;if(l=l*m+d*M,c=c*m+_*M,u=u*m+x*M,f=f*m+v*M,m===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],_=s[a+2],x=s[a+3];return e[n]=o*x+u*f+l*_-c*d,e[n+1]=l*x+u*d+c*f-o*_,e[n+2]=c*x+u*_+o*d-l*f,e[n+3]=u*x-o*f-l*d-c*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),_=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*_*x,this._y=c*_*f-d*u*x,this._z=c*u*x+d*_*f,this._w=c*u*f-d*_*x;break;case"YXZ":this._x=d*u*f+c*_*x,this._y=c*_*f-d*u*x,this._z=c*u*x-d*_*f,this._w=c*u*f+d*_*x;break;case"ZXY":this._x=d*u*f-c*_*x,this._y=c*_*f+d*u*x,this._z=c*u*x+d*_*f,this._w=c*u*f-d*_*x;break;case"ZYX":this._x=d*u*f-c*_*x,this._y=c*_*f+d*u*x,this._z=c*u*x-d*_*f,this._w=c*u*f+d*_*x;break;case"YZX":this._x=d*u*f+c*_*x,this._y=c*_*f+d*u*x,this._z=c*u*x-d*_*f,this._w=c*u*f-d*_*x;break;case"XZY":this._x=d*u*f-c*_*x,this._y=c*_*f-d*u*x,this._z=c*u*x+d*_*f,this._w=c*u*f+d*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(u-l)*_,this._y=(s-c)*_,this._z=(a-r)*_}else if(i>o&&i>f){const _=2*Math.sqrt(1+i-o-f);this._w=(u-l)/_,this._x=.25*_,this._y=(r+a)/_,this._z=(s+c)/_}else if(o>f){const _=2*Math.sqrt(1+o-i-f);this._w=(s-c)/_,this._x=(r+a)/_,this._y=.25*_,this._z=(l+u)/_}else{const _=2*Math.sqrt(1+f-i-o);this._w=(a-r)/_,this._x=(s+c)/_,this._y=(l+u)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const _=1-n;return this._w=_*a+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bo.copy(this).projectOnVector(e),this.sub(Bo)}reflect(e){return this.sub(Bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bo=new j,Lf=new Bs;class Hs{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(En.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(En.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=En.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(s,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Js.subVectors(this.max,rs),hr.subVectors(e.a,rs),pr.subVectors(e.b,rs),mr.subVectors(e.c,rs),di.subVectors(pr,hr),hi.subVectors(mr,pr),Yi.subVectors(hr,mr);let n=[0,-di.z,di.y,0,-hi.z,hi.y,0,-Yi.z,Yi.y,di.z,0,-di.x,hi.z,0,-hi.x,Yi.z,0,-Yi.x,-di.y,di.x,0,-hi.y,hi.x,0,-Yi.y,Yi.x,0];return!Ho(n,hr,pr,mr,Js)||(n=[1,0,0,0,1,0,0,0,1],!Ho(n,hr,pr,mr,Js))?!1:(Qs.crossVectors(di,hi),n=[Qs.x,Qs.y,Qs.z],Ho(n,hr,pr,mr,Js))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new j,new j,new j,new j,new j,new j,new j,new j],En=new j,Zs=new Hs,hr=new j,pr=new j,mr=new j,di=new j,hi=new j,Yi=new j,rs=new j,Js=new j,Qs=new j,$i=new j;function Ho(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){$i.fromArray(t,s);const o=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=n.dot($i),u=i.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const BE=new Hs,ss=new j,ko=new j;class gc{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):BE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const n=ss.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ss,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(ko)),this.expandByPoint(ss.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new j,Go=new j,ea=new j,pi=new j,Vo=new j,ta=new j,zo=new j;class bp{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,n),qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Go.copy(e).add(n).multiplyScalar(.5),ea.copy(n).sub(e).normalize(),pi.copy(this.origin).sub(Go);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ea),o=pi.dot(this.direction),l=-pi.dot(ea),c=pi.lengthSq(),u=Math.abs(1-a*a);let f,d,_,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){const v=1/u;f*=v,d*=v,_=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),_=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),_=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),_=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Go).addScaledVector(ea,d),_}intersectSphere(e,n){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,n,i,r,s){Vo.subVectors(n,e),ta.subVectors(i,e),zo.crossVectors(Vo,ta);let a=this.direction.dot(zo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;pi.subVectors(this.origin,e);const l=o*this.direction.dot(ta.crossVectors(pi,ta));if(l<0)return null;const c=o*this.direction.dot(Vo.cross(pi));if(c<0||l+c>a)return null;const u=-o*pi.dot(zo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,s,a,o,l,c,u,f,d,_,x,v,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,_,x,v,m)}set(e,n,i,r,s,a,o,l,c,u,f,d,_,x,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=_,p[7]=x,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),a=1/_r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,_=a*f,x=o*u,v=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=_+x*c,n[5]=d-v*c,n[9]=-o*l,n[2]=v-d*c,n[6]=x+_*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,_=l*f,x=c*u,v=c*f;n[0]=d+v*o,n[4]=x*o-_,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=_*o-x,n[6]=v+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,_=l*f,x=c*u,v=c*f;n[0]=d-v*o,n[4]=-a*f,n[8]=x+_*o,n[1]=_+x*o,n[5]=a*u,n[9]=v-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,_=a*f,x=o*u,v=o*f;n[0]=l*u,n[4]=x*c-_,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=_*c-x,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,_=a*c,x=o*l,v=o*c;n[0]=l*u,n[4]=v-d*f,n[8]=x*f+_,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=_*f+x,n[10]=d-v*f}else if(e.order==="XZY"){const d=a*l,_=a*c,x=o*l,v=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=a*u,n[9]=_*f-x,n[2]=x*f-_,n[6]=o*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HE,e,kE)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),mi.crossVectors(i,sn),mi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),mi.crossVectors(i,sn)),mi.normalize(),na.crossVectors(sn,mi),r[0]=mi.x,r[4]=na.x,r[8]=sn.x,r[1]=mi.y,r[5]=na.y,r[9]=sn.y,r[2]=mi.z,r[6]=na.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],_=i[13],x=i[2],v=i[6],m=i[10],p=i[14],A=i[3],E=i[7],M=i[11],L=i[15],b=r[0],R=r[4],k=r[8],S=r[12],C=r[1],X=r[5],O=r[9],ie=r[13],B=r[2],$=r[6],Y=r[10],te=r[14],J=r[3],ae=r[7],oe=r[11],ue=r[15];return s[0]=a*b+o*C+l*B+c*J,s[4]=a*R+o*X+l*$+c*ae,s[8]=a*k+o*O+l*Y+c*oe,s[12]=a*S+o*ie+l*te+c*ue,s[1]=u*b+f*C+d*B+_*J,s[5]=u*R+f*X+d*$+_*ae,s[9]=u*k+f*O+d*Y+_*oe,s[13]=u*S+f*ie+d*te+_*ue,s[2]=x*b+v*C+m*B+p*J,s[6]=x*R+v*X+m*$+p*ae,s[10]=x*k+v*O+m*Y+p*oe,s[14]=x*S+v*ie+m*te+p*ue,s[3]=A*b+E*C+M*B+L*J,s[7]=A*R+E*X+M*$+L*ae,s[11]=A*k+E*O+M*Y+L*oe,s[15]=A*S+E*ie+M*te+L*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],_=e[14],x=e[3],v=e[7],m=e[11],p=e[15];return x*(+s*l*f-r*c*f-s*o*d+i*c*d+r*o*_-i*l*_)+v*(+n*l*_-n*c*d+s*a*d-r*a*_+r*c*u-s*l*u)+m*(+n*c*f-n*o*_-s*a*f+i*a*_+s*o*u-i*c*u)+p*(-r*o*u-n*l*f+n*o*d+r*a*f-i*a*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],_=e[11],x=e[12],v=e[13],m=e[14],p=e[15],A=f*m*c-v*d*c+v*l*_-o*m*_-f*l*p+o*d*p,E=x*d*c-u*m*c-x*l*_+a*m*_+u*l*p-a*d*p,M=u*v*c-x*f*c+x*o*_-a*v*_-u*o*p+a*f*p,L=x*f*l-u*v*l-x*o*d+a*v*d+u*o*m-a*f*m,b=n*A+i*E+r*M+s*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=A*R,e[1]=(v*d*s-f*m*s-v*r*_+i*m*_+f*r*p-i*d*p)*R,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*p+i*l*p)*R,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*_-i*l*_)*R,e[4]=E*R,e[5]=(u*m*s-x*d*s+x*r*_-n*m*_-u*r*p+n*d*p)*R,e[6]=(x*l*s-a*m*s-x*r*c+n*m*c+a*r*p-n*l*p)*R,e[7]=(a*d*s-u*l*s+u*r*c-n*d*c-a*r*_+n*l*_)*R,e[8]=M*R,e[9]=(x*f*s-u*v*s-x*i*_+n*v*_+u*i*p-n*f*p)*R,e[10]=(a*v*s-x*o*s+x*i*c-n*v*c-a*i*p+n*o*p)*R,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*_-n*o*_)*R,e[12]=L*R,e[13]=(u*v*r-x*f*r+x*i*d-n*v*d-u*i*m+n*f*m)*R,e[14]=(x*o*r-a*v*r-x*i*l+n*v*l+a*i*m-n*o*m)*R,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*d+n*o*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,_=s*u,x=s*f,v=a*u,m=a*f,p=o*f,A=l*c,E=l*u,M=l*f,L=i.x,b=i.y,R=i.z;return r[0]=(1-(v+p))*L,r[1]=(_+M)*L,r[2]=(x-E)*L,r[3]=0,r[4]=(_-M)*b,r[5]=(1-(d+p))*b,r[6]=(m+A)*b,r[7]=0,r[8]=(x+E)*R,r[9]=(m-A)*R,r[10]=(1-(d+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=_r.set(r[0],r[1],r[2]).length();const a=_r.set(r[4],r[5],r[6]).length(),o=_r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const c=1/s,u=1/a,f=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,n.setFromRotationMatrix(xn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ri){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let _,x;if(o===ri)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Ha)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ri){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(a-s),d=(n+e)*c,_=(i+r)*u;let x,v;if(o===ri)x=(a+s)*f,v=-2*f;else if(o===Ha)x=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _r=new j,xn=new Ct,HE=new j(0,0,0),kE=new j(1,1,1),mi=new j,na=new j,sn=new j,Pf=new Ct,If=new Bs;class io{constructor(e=0,n=0,i=0,r=io.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,_),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,_),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,_));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return If.setFromEuler(this),this.setFromQuaternion(If,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}io.DEFAULT_ORDER="XYZ";class vc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GE=0;const Df=new j,gr=new Bs,jn=new Ct,ia=new j,as=new j,VE=new j,zE=new Bs,Nf=new j(1,0,0),Uf=new j(0,1,0),Of=new j(0,0,1),WE={type:"added"},XE={type:"removed"};class nn extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new j,n=new io,i=new Bs,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new $e}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gr.setFromAxisAngle(e,n),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,n){return gr.setFromAxisAngle(e,n),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Nf,e)}rotateY(e){return this.rotateOnAxis(Uf,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,n){return Df.copy(e).applyQuaternion(this.quaternion),this.position.add(Df.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nf,e)}translateY(e){return this.translateOnAxis(Uf,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ia.copy(e):ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(as,ia,this.up):jn.lookAt(ia,as,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(jn),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(WE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(XE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,VE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,zE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),_=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),_.length>0&&(i.animations=_),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new j(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new j,Kn=new j,Wo=new j,Zn=new j,vr=new j,Er=new j,Ff=new j,Xo=new j,Yo=new j,$o=new j;let ra=!1;class _n{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Sn.subVectors(e,n),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Sn.subVectors(r,n),Kn.subVectors(i,n),Wo.subVectors(e,n);const a=Sn.dot(Sn),o=Sn.dot(Kn),l=Sn.dot(Wo),c=Kn.dot(Kn),u=Kn.dot(Wo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,_=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-_-x,x,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,n,i,r,s,a,o,l){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static isFrontFacing(e,n,i,r){return Sn.subVectors(i,n),Kn.subVectors(e,n),Sn.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Sn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _n.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return ra===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ra=!0),_n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;vr.subVectors(r,i),Er.subVectors(s,i),Xo.subVectors(e,i);const l=vr.dot(Xo),c=Er.dot(Xo);if(l<=0&&c<=0)return n.copy(i);Yo.subVectors(e,r);const u=vr.dot(Yo),f=Er.dot(Yo);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(vr,a);$o.subVectors(e,s);const _=vr.dot($o),x=Er.dot($o);if(x>=0&&_<=x)return n.copy(s);const v=_*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),n.copy(i).addScaledVector(Er,o);const m=u*x-_*f;if(m<=0&&f-u>=0&&_-x>=0)return Ff.subVectors(s,r),o=(f-u)/(f-u+(_-x)),n.copy(r).addScaledVector(Ff,o);const p=1/(m+v+d);return a=v*p,o=d*p,n.copy(i).addScaledVector(vr,a).addScaledVector(Er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},sa={h:0,s:0,l:0};function qo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=PE(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=qo(a,s,e+1/3),this.g=qo(a,s,e),this.b=qo(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=Lt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Lt){const i=Ap[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return tt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(en(Ot.r*255,0,255))*65536+Math.round(en(Ot.g*255,0,255))*256+Math.round(en(Ot.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Lt){tt.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Lt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+n,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_i),e.getHSL(sa);const i=No(_i.h,sa.h,n),r=No(_i.s,sa.s,n),s=No(_i.l,sa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new et;et.NAMES=Ap;let YE=0;class ks extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Vr,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==Di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Al&&(i.blendSrc=this.blendSrc),this.blendDst!==Rl&&(i.blendDst=this.blendDst),this.blendEquation!==er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ka extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new j,aa=new je;class Ln{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)aa.fromBufferAttribute(this,n),aa.applyMatrix3(e),this.setXY(n,aa.x,aa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ii(n,this.array)),n}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ii(n,this.array)),n}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ii(n,this.array)),n}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ii(n,this.array)),n}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Il&&(e.usage=this.usage),e}}class Rp extends Ln{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Cp extends Ln{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gn extends Ln{constructor(e,n,i){super(new Float32Array(e),n,i)}}let $E=0;const dn=new Ct,jo=new nn,xr=new j,an=new Hs,os=new Hs,bt=new j;class ci extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?Cp:Rp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,n,i){return dn.makeTranslation(e,n,i),this.applyMatrix4(dn),this}scale(e,n,i){return dn.makeScale(e,n,i),this.applyMatrix4(dn),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];an.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];os.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(an.min,os.min),an.expandByPoint(bt),bt.addVectors(an.max,os.max),an.expandByPoint(bt)):(an.expandByPoint(os.min),an.expandByPoint(os.max))}an.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bt.fromBufferAttribute(o,c),l&&(xr.fromBufferAttribute(e,c),bt.add(xr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<o;C++)c[C]=new j,u[C]=new j;const f=new j,d=new j,_=new j,x=new je,v=new je,m=new je,p=new j,A=new j;function E(C,X,O){f.fromArray(r,C*3),d.fromArray(r,X*3),_.fromArray(r,O*3),x.fromArray(a,C*2),v.fromArray(a,X*2),m.fromArray(a,O*2),d.sub(f),_.sub(f),v.sub(x),m.sub(x);const ie=1/(v.x*m.y-m.x*v.y);isFinite(ie)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(_,-v.y).multiplyScalar(ie),A.copy(_).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(ie),c[C].add(p),c[X].add(p),c[O].add(p),u[C].add(A),u[X].add(A),u[O].add(A))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let C=0,X=M.length;C<X;++C){const O=M[C],ie=O.start,B=O.count;for(let $=ie,Y=ie+B;$<Y;$+=3)E(i[$+0],i[$+1],i[$+2])}const L=new j,b=new j,R=new j,k=new j;function S(C){R.fromArray(s,C*3),k.copy(R);const X=c[C];L.copy(X),L.sub(R.multiplyScalar(R.dot(X))).normalize(),b.crossVectors(k,X);const ie=b.dot(u[C])<0?-1:1;l[C*4]=L.x,l[C*4+1]=L.y,l[C*4+2]=L.z,l[C*4+3]=ie}for(let C=0,X=M.length;C<X;++C){const O=M[C],ie=O.start,B=O.count;for(let $=ie,Y=ie+B;$<Y;$+=3)S(i[$+0]),S(i[$+1]),S(i[$+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ln(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,_=i.count;d<_;d++)i.setXYZ(d,0,0,0);const r=new j,s=new j,a=new j,o=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let d=0,_=e.count;d<_;d+=3){const x=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,_=n.count;d<_;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let _=0,x=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?_=l[v]*o.data.stride+o.offset:_=l[v]*u;for(let p=0;p<u;p++)d[x++]=c[_++]}return new Ln(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ci,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],_=e(d,i);l.push(_)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const _=c[f];u.push(_.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,_=f.length;d<_;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bf=new Ct,qi=new bp,oa=new gc,Hf=new j,Sr=new j,Mr=new j,yr=new j,Ko=new j,la=new j,ca=new je,ua=new je,fa=new je,kf=new j,Gf=new j,Vf=new j,da=new j,ha=new j;class Bn extends nn{constructor(e=new ci,n=new ka){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){la.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Ko.fromBufferAttribute(f,e),a?la.addScaledVector(Ko,u):la.addScaledVector(Ko.sub(n),u))}n.add(la)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(s),qi.copy(e.ray).recast(e.near),!(oa.containsPoint(qi.origin)===!1&&(qi.intersectSphere(oa,Hf)===null||qi.origin.distanceToSquared(Hf)>(e.far-e.near)**2))&&(Bf.copy(s).invert(),qi.copy(e.ray).applyMatrix4(Bf),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,_=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const m=d[x],p=a[m.materialIndex],A=Math.max(m.start,_.start),E=Math.min(o.count,Math.min(m.start+m.count,_.start+_.count));for(let M=A,L=E;M<L;M+=3){const b=o.getX(M),R=o.getX(M+1),k=o.getX(M+2);r=pa(this,p,e,i,c,u,f,b,R,k),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),v=Math.min(o.count,_.start+_.count);for(let m=x,p=v;m<p;m+=3){const A=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);r=pa(this,a,e,i,c,u,f,A,E,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=d.length;x<v;x++){const m=d[x],p=a[m.materialIndex],A=Math.max(m.start,_.start),E=Math.min(l.count,Math.min(m.start+m.count,_.start+_.count));for(let M=A,L=E;M<L;M+=3){const b=M,R=M+1,k=M+2;r=pa(this,p,e,i,c,u,f,b,R,k),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),v=Math.min(l.count,_.start+_.count);for(let m=x,p=v;m<p;m+=3){const A=m,E=m+1,M=m+2;r=pa(this,a,e,i,c,u,f,A,E,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function qE(t,e,n,i,r,s,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Di,o),l===null)return null;ha.copy(o),ha.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ha);return c<n.near||c>n.far?null:{distance:c,point:ha.clone(),object:t}}function pa(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Sr),t.getVertexPosition(l,Mr),t.getVertexPosition(c,yr);const u=qE(t,e,n,i,Sr,Mr,yr,da);if(u){r&&(ca.fromBufferAttribute(r,o),ua.fromBufferAttribute(r,l),fa.fromBufferAttribute(r,c),u.uv=_n.getInterpolation(da,Sr,Mr,yr,ca,ua,fa,new je)),s&&(ca.fromBufferAttribute(s,o),ua.fromBufferAttribute(s,l),fa.fromBufferAttribute(s,c),u.uv1=_n.getInterpolation(da,Sr,Mr,yr,ca,ua,fa,new je),u.uv2=u.uv1),a&&(kf.fromBufferAttribute(a,o),Gf.fromBufferAttribute(a,l),Vf.fromBufferAttribute(a,c),u.normal=_n.getInterpolation(da,Sr,Mr,yr,kf,Gf,Vf,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new j,materialIndex:0};_n.getNormal(Sr,Mr,yr,f.normal),u.face=f}return u}class Gs extends ci{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,_=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gn(c,3)),this.setAttribute("normal",new Gn(u,3)),this.setAttribute("uv",new Gn(f,2));function x(v,m,p,A,E,M,L,b,R,k,S){const C=M/R,X=L/k,O=M/2,ie=L/2,B=b/2,$=R+1,Y=k+1;let te=0,J=0;const ae=new j;for(let oe=0;oe<Y;oe++){const ue=oe*X-ie;for(let fe=0;fe<$;fe++){const ee=fe*C-O;ae[v]=ee*A,ae[m]=ue*E,ae[p]=B,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[p]=b>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(fe/R),f.push(1-oe/k),te+=1}}for(let oe=0;oe<k;oe++)for(let ue=0;ue<R;ue++){const fe=d+ue+$*oe,ee=d+ue+$*(oe+1),ce=d+(ue+1)+$*(oe+1),pe=d+(ue+1)+$*oe;l.push(fe,ee,pe),l.push(ee,ce,pe),J+=6}o.addGroup(_,J,S),_+=J,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Kr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Kr(t[n]);for(const r in i)e[r]=i[r]}return e}function jE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wp(t){return t.getRenderTarget()===null?t.outputColorSpace:tt.workingColorSpace}const KE={clone:Kr,merge:Xt};var ZE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZE,this.fragmentShader=JE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=jE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Lp extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=ri}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mn extends Lp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Do*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Tr=-90,br=1;class QE extends nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Tr,br,e,n);r.layers=this.layers,this.add(r);const s=new Mn(Tr,br,e,n);s.layers=this.layers,this.add(s);const a=new Mn(Tr,br,e,n);a.layers=this.layers,this.add(a);const o=new Mn(Tr,br,e,n);o.layers=this.layers,this.add(o);const l=new Mn(Tr,br,e,n);l.layers=this.layers,this.add(l);const c=new Mn(Tr,br,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,_),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Pp extends Zt{constructor(e,n,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:$r,super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ex extends or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(xs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===sr?Lt:gn),this.texture=new Pp(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Gs(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ai});s.uniforms.tEquirect.value=n;const a=new Bn(r,s),o=n.minFilter;return n.minFilter===Ps&&(n.minFilter=mn),new QE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Zo=new j,tx=new j,nx=new $e;class Zi{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zo.subVectors(i,n).cross(tx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||nx.getNormalMatrix(e),r=this.coplanarPoint(Zo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new gc,ma=new j;class Ip{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,s=new Zi,a=new Zi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ri){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],_=r[8],x=r[9],v=r[10],m=r[11],p=r[12],A=r[13],E=r[14],M=r[15];if(i[0].setComponents(l-s,d-c,m-_,M-p).normalize(),i[1].setComponents(l+s,d+c,m+_,M+p).normalize(),i[2].setComponents(l+a,d+u,m+x,M+A).normalize(),i[3].setComponents(l-a,d-u,m-x,M-A).normalize(),i[4].setComponents(l-o,d-f,m-v,M-E).normalize(),n===ri)i[5].setComponents(l+o,d+f,m+v,M+E).normalize();else if(n===Ha)i[5].setComponents(o,f,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ma.x=r.normal.x>0?e.max.x:e.min.x,ma.y=r.normal.y>0?e.max.y:e.min.y,ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dp(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ix(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,_=f.byteLength,x=t.createBuffer();t.bindBuffer(u,x),t.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)v=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=t.SHORT;else if(f instanceof Uint32Array)v=t.UNSIGNED_INT;else if(f instanceof Int32Array)v=t.INT;else if(f instanceof Int8Array)v=t.BYTE;else if(f instanceof Uint8Array)v=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:_}}function s(c,u,f){const d=u.array,_=u._updateRange,x=u.updateRanges;if(t.bindBuffer(f,c),_.count===-1&&x.length===0&&t.bufferSubData(f,0,d),x.length!==0){for(let v=0,m=x.length;v<m;v++){const p=x[v];n?t.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):t.bufferSubData(f,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}_.count!==-1&&(n?t.bufferSubData(f,_.offset*d.BYTES_PER_ELEMENT,d,_.offset,_.count):t.bufferSubData(f,_.offset*d.BYTES_PER_ELEMENT,d.subarray(_.offset,_.offset+_.count)),_.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class ro extends ci{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,_=[],x=[],v=[],m=[];for(let p=0;p<u;p++){const A=p*d-a;for(let E=0;E<c;E++){const M=E*f-s;x.push(M,-A,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const E=A+c*p,M=A+c*(p+1),L=A+1+c*(p+1),b=A+1+c*p;_.push(E,M,b),_.push(M,L,b)}this.setIndex(_),this.setAttribute("position",new Gn(x,3)),this.setAttribute("normal",new Gn(v,3)),this.setAttribute("uv",new Gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.widthSegments,e.heightSegments)}}var rx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sx=`#ifdef USE_ALPHAHASH
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
#endif`,ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ux=`#ifdef USE_AOMAP
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
#endif`,fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dx=`#ifdef USE_BATCHING
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
#endif`,hx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_x=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gx=`#ifdef USE_IRIDESCENCE
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
#endif`,vx=`#ifdef USE_BUMPMAP
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rx=`#define PI 3.141592653589793
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
} // validated`,Cx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wx=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ux=`
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
}`,Ox=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xx=`#ifdef USE_GRADIENTMAP
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
}`,Yx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kx=`uniform bool receiveShadow;
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
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nS=`PhysicalMaterial material;
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
#endif`,iS=`struct PhysicalMaterial {
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
}`,rS=`
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
#endif`,sS=`#if defined( RE_IndirectDiffuse )
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
#endif`,aS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pS=`#if defined( USE_POINTS_UV )
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
#endif`,mS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_S=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vS=`#ifdef USE_MORPHNORMALS
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
#endif`,ES=`#ifdef USE_MORPHTARGETS
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
#endif`,xS=`#ifdef USE_MORPHTARGETS
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
#endif`,SS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,MS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AS=`#ifdef USE_NORMALMAP
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
#endif`,RS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,US=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,VS=`float getShadowMask() {
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
}`,zS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WS=`#ifdef USE_SKINNING
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
#endif`,XS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YS=`#ifdef USE_SKINNING
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
#endif`,$S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZS=`#ifdef USE_TRANSMISSION
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
#endif`,JS=`#ifdef USE_TRANSMISSION
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
#endif`,QS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
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
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`#include <common>
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
}`,uM=`#if DEPTH_PACKING == 3200
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
}`,fM=`#define DISTANCE
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
}`,dM=`#define DISTANCE
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mM=`uniform float scale;
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
}`,_M=`uniform vec3 diffuse;
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
}`,gM=`#include <common>
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
}`,vM=`uniform vec3 diffuse;
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
}`,EM=`#define LAMBERT
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
}`,xM=`#define LAMBERT
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
}`,SM=`#define MATCAP
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
}`,MM=`#define MATCAP
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
}`,yM=`#define NORMAL
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
}`,TM=`#define NORMAL
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
}`,bM=`#define PHONG
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
}`,AM=`#define PHONG
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
}`,RM=`#define STANDARD
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
}`,CM=`#define STANDARD
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
}`,wM=`#define TOON
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
}`,LM=`#define TOON
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
}`,PM=`uniform float size;
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
}`,IM=`uniform vec3 diffuse;
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
}`,DM=`#include <common>
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
}`,NM=`uniform vec3 color;
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
}`,UM=`uniform float rotation;
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
}`,OM=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:rx,alphahash_pars_fragment:sx,alphamap_fragment:ax,alphamap_pars_fragment:ox,alphatest_fragment:lx,alphatest_pars_fragment:cx,aomap_fragment:ux,aomap_pars_fragment:fx,batching_pars_vertex:dx,batching_vertex:hx,begin_vertex:px,beginnormal_vertex:mx,bsdfs:_x,iridescence_fragment:gx,bumpmap_pars_fragment:vx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:xx,clipping_planes_pars_vertex:Sx,clipping_planes_vertex:Mx,color_fragment:yx,color_pars_fragment:Tx,color_pars_vertex:bx,color_vertex:Ax,common:Rx,cube_uv_reflection_fragment:Cx,defaultnormal_vertex:wx,displacementmap_pars_vertex:Lx,displacementmap_vertex:Px,emissivemap_fragment:Ix,emissivemap_pars_fragment:Dx,colorspace_fragment:Nx,colorspace_pars_fragment:Ux,envmap_fragment:Ox,envmap_common_pars_fragment:Fx,envmap_pars_fragment:Bx,envmap_pars_vertex:Hx,envmap_physical_pars_fragment:Zx,envmap_vertex:kx,fog_vertex:Gx,fog_pars_vertex:Vx,fog_fragment:zx,fog_pars_fragment:Wx,gradientmap_pars_fragment:Xx,lightmap_fragment:Yx,lightmap_pars_fragment:$x,lights_lambert_fragment:qx,lights_lambert_pars_fragment:jx,lights_pars_begin:Kx,lights_toon_fragment:Jx,lights_toon_pars_fragment:Qx,lights_phong_fragment:eS,lights_phong_pars_fragment:tS,lights_physical_fragment:nS,lights_physical_pars_fragment:iS,lights_fragment_begin:rS,lights_fragment_maps:sS,lights_fragment_end:aS,logdepthbuf_fragment:oS,logdepthbuf_pars_fragment:lS,logdepthbuf_pars_vertex:cS,logdepthbuf_vertex:uS,map_fragment:fS,map_pars_fragment:dS,map_particle_fragment:hS,map_particle_pars_fragment:pS,metalnessmap_fragment:mS,metalnessmap_pars_fragment:_S,morphcolor_vertex:gS,morphnormal_vertex:vS,morphtarget_pars_vertex:ES,morphtarget_vertex:xS,normal_fragment_begin:SS,normal_fragment_maps:MS,normal_pars_fragment:yS,normal_pars_vertex:TS,normal_vertex:bS,normalmap_pars_fragment:AS,clearcoat_normal_fragment_begin:RS,clearcoat_normal_fragment_maps:CS,clearcoat_pars_fragment:wS,iridescence_pars_fragment:LS,opaque_fragment:PS,packing:IS,premultiplied_alpha_fragment:DS,project_vertex:NS,dithering_fragment:US,dithering_pars_fragment:OS,roughnessmap_fragment:FS,roughnessmap_pars_fragment:BS,shadowmap_pars_fragment:HS,shadowmap_pars_vertex:kS,shadowmap_vertex:GS,shadowmask_pars_fragment:VS,skinbase_vertex:zS,skinning_pars_vertex:WS,skinning_vertex:XS,skinnormal_vertex:YS,specularmap_fragment:$S,specularmap_pars_fragment:qS,tonemapping_fragment:jS,tonemapping_pars_fragment:KS,transmission_fragment:ZS,transmission_pars_fragment:JS,uv_pars_fragment:QS,uv_pars_vertex:eM,uv_vertex:tM,worldpos_vertex:nM,background_vert:iM,background_frag:rM,backgroundCube_vert:sM,backgroundCube_frag:aM,cube_vert:oM,cube_frag:lM,depth_vert:cM,depth_frag:uM,distanceRGBA_vert:fM,distanceRGBA_frag:dM,equirect_vert:hM,equirect_frag:pM,linedashed_vert:mM,linedashed_frag:_M,meshbasic_vert:gM,meshbasic_frag:vM,meshlambert_vert:EM,meshlambert_frag:xM,meshmatcap_vert:SM,meshmatcap_frag:MM,meshnormal_vert:yM,meshnormal_frag:TM,meshphong_vert:bM,meshphong_frag:AM,meshphysical_vert:RM,meshphysical_frag:CM,meshtoon_vert:wM,meshtoon_frag:LM,points_vert:PM,points_frag:IM,shadow_vert:DM,shadow_frag:NM,sprite_vert:UM,sprite_frag:OM},he={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},On={basic:{uniforms:Xt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Xt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Xt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Xt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Xt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new et(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Xt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Xt([he.points,he.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Xt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Xt([he.common,he.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Xt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Xt([he.sprite,he.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Xt([he.common,he.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Xt([he.lights,he.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};On.physical={uniforms:Xt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const _a={r:0,b:0,g:0};function FM(t,e,n,i,r,s,a){const o=new et(0);let l=s===!0?0:1,c,u,f=null,d=0,_=null;function x(m,p){let A=!1,E=p.isScene===!0?p.background:null;E&&E.isTexture&&(E=(p.backgroundBlurriness>0?n:e).get(E)),E===null?v(o,l):E&&E.isColor&&(v(E,1),A=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||A)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),E&&(E.isCubeTexture||E.mapping===to)?(u===void 0&&(u=new Bn(new Gs(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:Kr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=tt.getTransfer(E.colorSpace)!==ut,(f!==E||d!==E.version||_!==t.toneMapping)&&(u.material.needsUpdate=!0,f=E,d=E.version,_=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Bn(new ro(2,2),new lr({name:"BackgroundMaterial",uniforms:Kr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=tt.getTransfer(E.colorSpace)!==ut,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||_!==t.toneMapping)&&(c.material.needsUpdate=!0,f=E,d=E.version,_=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(_a,wp(t)),i.buffers.color.setClear(_a.r,_a.g,_a.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:x}}function BM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(B,$,Y,te,J){let ae=!1;if(a){const oe=v(te,Y,$);c!==oe&&(c=oe,_(c.object)),ae=p(B,te,Y,J),ae&&A(B,te,Y,J)}else{const oe=$.wireframe===!0;(c.geometry!==te.id||c.program!==Y.id||c.wireframe!==oe)&&(c.geometry=te.id,c.program=Y.id,c.wireframe=oe,ae=!0)}J!==null&&n.update(J,t.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,k(B,$,Y,te),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(J).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function _(B){return i.isWebGL2?t.bindVertexArray(B):s.bindVertexArrayOES(B)}function x(B){return i.isWebGL2?t.deleteVertexArray(B):s.deleteVertexArrayOES(B)}function v(B,$,Y){const te=Y.wireframe===!0;let J=o[B.id];J===void 0&&(J={},o[B.id]=J);let ae=J[$.id];ae===void 0&&(ae={},J[$.id]=ae);let oe=ae[te];return oe===void 0&&(oe=m(d()),ae[te]=oe),oe}function m(B){const $=[],Y=[],te=[];for(let J=0;J<r;J++)$[J]=0,Y[J]=0,te[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Y,attributeDivisors:te,object:B,attributes:{},index:null}}function p(B,$,Y,te){const J=c.attributes,ae=$.attributes;let oe=0;const ue=Y.getAttributes();for(const fe in ue)if(ue[fe].location>=0){const ce=J[fe];let pe=ae[fe];if(pe===void 0&&(fe==="instanceMatrix"&&B.instanceMatrix&&(pe=B.instanceMatrix),fe==="instanceColor"&&B.instanceColor&&(pe=B.instanceColor)),ce===void 0||ce.attribute!==pe||pe&&ce.data!==pe.data)return!0;oe++}return c.attributesNum!==oe||c.index!==te}function A(B,$,Y,te){const J={},ae=$.attributes;let oe=0;const ue=Y.getAttributes();for(const fe in ue)if(ue[fe].location>=0){let ce=ae[fe];ce===void 0&&(fe==="instanceMatrix"&&B.instanceMatrix&&(ce=B.instanceMatrix),fe==="instanceColor"&&B.instanceColor&&(ce=B.instanceColor));const pe={};pe.attribute=ce,ce&&ce.data&&(pe.data=ce.data),J[fe]=pe,oe++}c.attributes=J,c.attributesNum=oe,c.index=te}function E(){const B=c.newAttributes;for(let $=0,Y=B.length;$<Y;$++)B[$]=0}function M(B){L(B,0)}function L(B,$){const Y=c.newAttributes,te=c.enabledAttributes,J=c.attributeDivisors;Y[B]=1,te[B]===0&&(t.enableVertexAttribArray(B),te[B]=1),J[B]!==$&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,$),J[B]=$)}function b(){const B=c.newAttributes,$=c.enabledAttributes;for(let Y=0,te=$.length;Y<te;Y++)$[Y]!==B[Y]&&(t.disableVertexAttribArray(Y),$[Y]=0)}function R(B,$,Y,te,J,ae,oe){oe===!0?t.vertexAttribIPointer(B,$,Y,J,ae):t.vertexAttribPointer(B,$,Y,te,J,ae)}function k(B,$,Y,te){if(i.isWebGL2===!1&&(B.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const J=te.attributes,ae=Y.getAttributes(),oe=$.defaultAttributeValues;for(const ue in ae){const fe=ae[ue];if(fe.location>=0){let ee=J[ue];if(ee===void 0&&(ue==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),ue==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor)),ee!==void 0){const ce=ee.normalized,pe=ee.itemSize,Se=n.get(ee);if(Se===void 0)continue;const Me=Se.buffer,Re=Se.type,Le=Se.bytesPerElement,ye=i.isWebGL2===!0&&(Re===t.INT||Re===t.UNSIGNED_INT||ee.gpuType===dp);if(ee.isInterleavedBufferAttribute){const Ve=ee.data,y=Ve.stride,U=ee.offset;if(Ve.isInstancedInterleavedBuffer){for(let P=0;P<fe.locationSize;P++)L(fe.location+P,Ve.meshPerAttribute);B.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let P=0;P<fe.locationSize;P++)M(fe.location+P);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let P=0;P<fe.locationSize;P++)R(fe.location+P,pe/fe.locationSize,Re,ce,y*Le,(U+pe/fe.locationSize*P)*Le,ye)}else{if(ee.isInstancedBufferAttribute){for(let Ve=0;Ve<fe.locationSize;Ve++)L(fe.location+Ve,ee.meshPerAttribute);B.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ve=0;Ve<fe.locationSize;Ve++)M(fe.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Ve=0;Ve<fe.locationSize;Ve++)R(fe.location+Ve,pe/fe.locationSize,Re,ce,pe*Le,pe/fe.locationSize*Ve*Le,ye)}}else if(oe!==void 0){const ce=oe[ue];if(ce!==void 0)switch(ce.length){case 2:t.vertexAttrib2fv(fe.location,ce);break;case 3:t.vertexAttrib3fv(fe.location,ce);break;case 4:t.vertexAttrib4fv(fe.location,ce);break;default:t.vertexAttrib1fv(fe.location,ce)}}}}b()}function S(){O();for(const B in o){const $=o[B];for(const Y in $){const te=$[Y];for(const J in te)x(te[J].object),delete te[J];delete $[Y]}delete o[B]}}function C(B){if(o[B.id]===void 0)return;const $=o[B.id];for(const Y in $){const te=$[Y];for(const J in te)x(te[J].object),delete te[J];delete $[Y]}delete o[B.id]}function X(B){for(const $ in o){const Y=o[$];if(Y[B.id]===void 0)continue;const te=Y[B.id];for(const J in te)x(te[J].object),delete te[J];delete Y[B.id]}}function O(){ie(),u=!0,c!==l&&(c=l,_(c.object))}function ie(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:ie,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:X,initAttributes:E,enableAttribute:M,disableUnusedAttributes:b}}function HM(t,e,n,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,d){if(d===0)return;let _,x;if(r)_=t,x="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[x](s,u,f,d),n.update(f,s,d)}function c(u,f,d){if(d===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<d;x++)this.render(u[x],f[x]);else{_.multiDrawArraysWEBGL(s,u,0,f,0,d);let x=0;for(let v=0;v<d;v++)x+=f[v];n.update(x,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function kM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),A=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,M=a||e.has("OES_texture_float"),L=E&&M,b=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:A,vertexTextures:E,floatFragmentTextures:M,floatVertexTextures:L,maxSamples:b}}function GM(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Zi,o=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const _=f.length!==0||d||i!==0||r;return r=d,i=f.length,_},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,_){const x=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,E=A*4;let M=p.clippingState||null;l.value=M,M=u(x,d,E,_);for(let L=0;L!==E;++L)M[L]=n[L];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,_,x){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const p=_+v*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=_;E!==v;++E,M+=4)a.copy(f[E]).applyMatrix4(A,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function VM(t){let e=new WeakMap;function n(a,o){return o===Cl?a.mapping=$r:o===wl&&(a.mapping=qr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cl||o===wl)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ex(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Np extends Lp{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Or=4,zf=[.125,.215,.35,.446,.526,.582],tr=20,Jo=new Np,Wf=new et;let Qo=null,el=0,tl=0;const Ji=(1+Math.sqrt(5))/2,Ar=1/Ji,Xf=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Ji,Ar),new j(0,Ji,-Ar),new j(Ar,0,Ji),new j(-Ar,0,Ji),new j(Ji,Ar,0),new j(-Ji,Ar,0)];class Yf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$r||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Is,format:Tn,colorSpace:oi,depthBuffer:!1},r=$f(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$f(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zM(s)),this._blurMaterial=WM(s,e,n)}return r}_compileMaterial(e){const n=new Bn(this._lodPlanes[0],e);this._renderer.compile(n,Jo)}_sceneToCubeUV(e,n,i,r){const o=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Wf),u.toneMapping=Ri,u.autoClear=!1;const _=new ka({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),x=new Bn(new Gs,_);let v=!1;const m=e.background;m?m.isColor&&(_.color.copy(m),e.background=null,v=!0):(_.color.copy(Wf),v=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):A===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;ga(r,A*E,p>2?E:0,E,E),u.setRenderTarget(r),v&&u.render(x,o),u.render(e,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$r||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Bn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ga(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Jo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xf[(r-1)%Xf.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Bn(this._lodPlanes[r],c),d=c.uniforms,_=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*tr-1),v=s/x,m=isFinite(s)?1+Math.floor(u*v):tr;m>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);const p=[];let A=0;for(let R=0;R<tr;++R){const k=R/v,S=Math.exp(-k*k/2);p.push(S),R===0?A+=S:R<m&&(A+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=x,d.mipInt.value=E-i;const M=this._sizeLods[r],L=3*M*(r>E-Or?r-E+Or:0),b=4*(this._cubeSize-M);ga(n,L,b,3*M,2*M),l.setRenderTarget(n),l.render(f,Jo)}}function zM(t){const e=[],n=[],i=[];let r=t;const s=t-Or+1+zf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Or?l=zf[a-t+Or-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],_=6,x=6,v=3,m=2,p=1,A=new Float32Array(v*x*_),E=new Float32Array(m*x*_),M=new Float32Array(p*x*_);for(let b=0;b<_;b++){const R=b%3*2/3-1,k=b>2?0:-1,S=[R,k,0,R+2/3,k,0,R+2/3,k+1,0,R,k,0,R+2/3,k+1,0,R,k+1,0];A.set(S,v*x*b),E.set(d,m*x*b);const C=[b,b,b,b,b,b];M.set(C,p*x*b)}const L=new ci;L.setAttribute("position",new Ln(A,v)),L.setAttribute("uv",new Ln(E,m)),L.setAttribute("faceIndex",new Ln(M,p)),e.push(L),r>Or&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function $f(t,e,n){const i=new or(t,e,n);return i.texture.mapping=to,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ga(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function WM(t,e,n){const i=new Float32Array(tr),r=new j(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function qf(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function jf(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function XM(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cl||l===wl,u=l===$r||l===qr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new Yf(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new Yf(t));const d=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function YM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $M(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete r[d.id];const _=s.get(d);_&&(e.remove(_),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const _=f.morphAttributes;for(const x in _){const v=_[x];for(let m=0,p=v.length;m<p;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const d=[],_=f.index,x=f.attributes.position;let v=0;if(_!==null){const A=_.array;v=_.version;for(let E=0,M=A.length;E<M;E+=3){const L=A[E+0],b=A[E+1],R=A[E+2];d.push(L,b,b,R,R,L)}}else if(x!==void 0){const A=x.array;v=x.version;for(let E=0,M=A.length/3-1;E<M;E+=3){const L=E+0,b=E+1,R=E+2;d.push(L,b,b,R,R,L)}}else return;const m=new(Sp(d)?Cp:Rp)(d,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const _=f.index;_!==null&&d.version<_.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function qM(t,e,n,i){const r=i.isWebGL2;let s;function a(_){s=_}let o,l;function c(_){o=_.type,l=_.bytesPerElement}function u(_,x){t.drawElements(s,x,o,_*l),n.update(x,s,1)}function f(_,x,v){if(v===0)return;let m,p;if(r)m=t,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,x,o,_*l,v),n.update(x,s,v)}function d(_,x,v){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(_[p]/l,x[p]);else{m.multiDrawElementsWEBGL(s,x,0,o,_,0,v);let p=0;for(let A=0;A<v;A++)p+=x[A];n.update(p,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=d}function jM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function KM(t,e){return t[0]-e[0]}function ZM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function JM(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Pt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=x!==void 0?x.length:0;let m=s.get(u);if(m===void 0||m.count!==v){let $=function(){ie.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var _=$;m!==void 0&&m.texture.dispose();const E=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],k=u.morphAttributes.color||[];let S=0;E===!0&&(S=1),M===!0&&(S=2),L===!0&&(S=3);let C=u.attributes.position.count*S,X=1;C>e.maxTextureSize&&(X=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const O=new Float32Array(C*X*4*v),ie=new Tp(O,C,X,v);ie.type=yi,ie.needsUpdate=!0;const B=S*4;for(let Y=0;Y<v;Y++){const te=b[Y],J=R[Y],ae=k[Y],oe=C*X*4*Y;for(let ue=0;ue<te.count;ue++){const fe=ue*B;E===!0&&(a.fromBufferAttribute(te,ue),O[oe+fe+0]=a.x,O[oe+fe+1]=a.y,O[oe+fe+2]=a.z,O[oe+fe+3]=0),M===!0&&(a.fromBufferAttribute(J,ue),O[oe+fe+4]=a.x,O[oe+fe+5]=a.y,O[oe+fe+6]=a.z,O[oe+fe+7]=0),L===!0&&(a.fromBufferAttribute(ae,ue),O[oe+fe+8]=a.x,O[oe+fe+9]=a.y,O[oe+fe+10]=a.z,O[oe+fe+11]=ae.itemSize===4?a.w:1)}}m={count:v,texture:ie,size:new je(C,X)},s.set(u,m),u.addEventListener("dispose",$)}let p=0;for(let E=0;E<d.length;E++)p+=d[E];const A=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",A),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const x=d===void 0?0:d.length;let v=i[u.id];if(v===void 0||v.length!==x){v=[];for(let M=0;M<x;M++)v[M]=[M,0];i[u.id]=v}for(let M=0;M<x;M++){const L=v[M];L[0]=M,L[1]=d[M]}v.sort(ZM);for(let M=0;M<8;M++)M<x&&v[M][1]?(o[M][0]=v[M][0],o[M][1]=v[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(KM);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let A=0;for(let M=0;M<8;M++){const L=o[M],b=L[0],R=L[1];b!==Number.MAX_SAFE_INTEGER&&R?(m&&u.getAttribute("morphTarget"+M)!==m[b]&&u.setAttribute("morphTarget"+M,m[b]),p&&u.getAttribute("morphNormal"+M)!==p[b]&&u.setAttribute("morphNormal"+M,p[b]),r[M]=R,A+=R):(m&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),p&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const E=u.morphTargetsRelative?1:1-A;f.getUniforms().setValue(t,"morphTargetBaseInfluence",E),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function QM(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Up extends Zt{constructor(e,n,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:rr,u!==rr&&u!==jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===rr&&(i=Mi),i===void 0&&u===jr&&(i=ir),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Op=new Zt,Fp=new Up(1,1);Fp.compareFunction=xp;const Bp=new Tp,Hp=new FE,kp=new Pp,Kf=[],Zf=[],Jf=new Float32Array(16),Qf=new Float32Array(9),ed=new Float32Array(4);function Qr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Kf[r];if(s===void 0&&(s=new Float32Array(r),Kf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function St(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Mt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function so(t,e){let n=Zf[e];n===void 0&&(n=new Int32Array(e),Zf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ey(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ty(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2fv(this.addr,e),Mt(n,e)}}function ny(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(St(n,e))return;t.uniform3fv(this.addr,e),Mt(n,e)}}function iy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4fv(this.addr,e),Mt(n,e)}}function ry(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;ed.set(i),t.uniformMatrix2fv(this.addr,!1,ed),Mt(n,i)}}function sy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;Qf.set(i),t.uniformMatrix3fv(this.addr,!1,Qf),Mt(n,i)}}function ay(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(St(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Mt(n,e)}else{if(St(n,i))return;Jf.set(i),t.uniformMatrix4fv(this.addr,!1,Jf),Mt(n,i)}}function oy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ly(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2iv(this.addr,e),Mt(n,e)}}function cy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3iv(this.addr,e),Mt(n,e)}}function uy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4iv(this.addr,e),Mt(n,e)}}function fy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function dy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(St(n,e))return;t.uniform2uiv(this.addr,e),Mt(n,e)}}function hy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(St(n,e))return;t.uniform3uiv(this.addr,e),Mt(n,e)}}function py(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(St(n,e))return;t.uniform4uiv(this.addr,e),Mt(n,e)}}function my(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Fp:Op;n.setTexture2D(e||s,r)}function _y(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Hp,r)}function gy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||kp,r)}function vy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Bp,r)}function Ey(t){switch(t){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return ry;case 35675:return sy;case 35676:return ay;case 5124:case 35670:return oy;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return uy;case 5125:return fy;case 36294:return dy;case 36295:return hy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return _y;case 35680:case 36300:case 36308:case 36293:return gy;case 36289:case 36303:case 36311:case 36292:return vy}}function xy(t,e){t.uniform1fv(this.addr,e)}function Sy(t,e){const n=Qr(e,this.size,2);t.uniform2fv(this.addr,n)}function My(t,e){const n=Qr(e,this.size,3);t.uniform3fv(this.addr,n)}function yy(t,e){const n=Qr(e,this.size,4);t.uniform4fv(this.addr,n)}function Ty(t,e){const n=Qr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function by(t,e){const n=Qr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ay(t,e){const n=Qr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Ry(t,e){t.uniform1iv(this.addr,e)}function Cy(t,e){t.uniform2iv(this.addr,e)}function wy(t,e){t.uniform3iv(this.addr,e)}function Ly(t,e){t.uniform4iv(this.addr,e)}function Py(t,e){t.uniform1uiv(this.addr,e)}function Iy(t,e){t.uniform2uiv(this.addr,e)}function Dy(t,e){t.uniform3uiv(this.addr,e)}function Ny(t,e){t.uniform4uiv(this.addr,e)}function Uy(t,e,n){const i=this.cache,r=e.length,s=so(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Op,s[a])}function Oy(t,e,n){const i=this.cache,r=e.length,s=so(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Hp,s[a])}function Fy(t,e,n){const i=this.cache,r=e.length,s=so(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||kp,s[a])}function By(t,e,n){const i=this.cache,r=e.length,s=so(n,r);St(i,s)||(t.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Bp,s[a])}function Hy(t){switch(t){case 5126:return xy;case 35664:return Sy;case 35665:return My;case 35666:return yy;case 35674:return Ty;case 35675:return by;case 35676:return Ay;case 5124:case 35670:return Ry;case 35667:case 35671:return Cy;case 35668:case 35672:return wy;case 35669:case 35673:return Ly;case 5125:return Py;case 36294:return Iy;case 36295:return Dy;case 36296:return Ny;case 35678:case 36198:case 36298:case 36306:case 35682:return Uy;case 35679:case 36299:case 36307:return Oy;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return By}}class ky{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ey(n.type)}}class Gy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Hy(n.type)}}class Vy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function td(t,e){t.seq.push(e),t.map[e.id]=e}function zy(t,e,n){const i=t.name,r=i.length;for(nl.lastIndex=0;;){const s=nl.exec(i),a=nl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){td(n,c===void 0?new ky(o,t,e):new Gy(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Vy(o),td(n,f)),n=f}}}class ba{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);zy(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function nd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Wy=37297;let Xy=0;function Yy(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function $y(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===Ba&&n===Fa?i="LinearDisplayP3ToLinearSRGB":e===Fa&&n===Ba&&(i="LinearSRGBToLinearDisplayP3"),t){case oi:case no:return[i,"LinearTransferOETF"];case Lt:case _c:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function id(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Yy(t.getShaderSource(e),a)}else return r}function qy(t,e){const n=$y(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function jy(t,e){let n;switch(e){case sE:n="Linear";break;case aE:n="Reinhard";break;case oE:n="OptimizedCineon";break;case lE:n="ACESFilmic";break;case uE:n="AgX";break;case cE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Ky(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Fr).join(`
`)}function Zy(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Fr).join(`
`)}function Jy(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Qy(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Fr(t){return t!==""}function rd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ol(t){return t.replace(eT,nT)}const tT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nT(t,e){let n=ze[e];if(n===void 0){const i=tT.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ol(n)}const iT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(t){return t.replace(iT,rT)}function rT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function od(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function sT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===cp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===D0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function aT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $r:case qr:e="ENVMAP_TYPE_CUBE";break;case to:e="ENVMAP_TYPE_CUBE_UV";break}return e}function oT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function lT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case up:e="ENVMAP_BLENDING_MULTIPLY";break;case iE:e="ENVMAP_BLENDING_MIX";break;case rE:e="ENVMAP_BLENDING_ADD";break}return e}function cT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function uT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=sT(n),c=aT(n),u=oT(n),f=lT(n),d=cT(n),_=n.isWebGL2?"":Ky(n),x=Zy(n),v=Jy(s),m=r.createProgram();let p,A,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Fr).join(`
`),p.length>0&&(p+=`
`),A=[_,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Fr).join(`
`),A.length>0&&(A+=`
`)):(p=[od(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),A=[_,od(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?ze.tonemapping_pars_fragment:"",n.toneMapping!==Ri?jy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,qy("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fr).join(`
`)),a=Ol(a),a=rd(a,n),a=sd(a,n),o=Ol(o),o=rd(o,n),o=sd(o,n),a=ad(a),o=ad(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,A=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const M=E+p+a,L=E+A+o,b=nd(r,r.VERTEX_SHADER,M),R=nd(r,r.FRAGMENT_SHADER,L);r.attachShader(m,b),r.attachShader(m,R),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function k(O){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(m).trim(),B=r.getShaderInfoLog(b).trim(),$=r.getShaderInfoLog(R).trim();let Y=!0,te=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,b,R);else{const J=id(r,b,"vertex"),ae=id(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+J+`
`+ae)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(B===""||$==="")&&(te=!1);te&&(O.diagnostics={runnable:Y,programLog:ie,vertexShader:{log:B,prefix:p},fragmentShader:{log:$,prefix:A}})}r.deleteShader(b),r.deleteShader(R),S=new ba(r,m),C=Qy(r,m)}let S;this.getUniforms=function(){return S===void 0&&k(this),S};let C;this.getAttributes=function(){return C===void 0&&k(this),C};let X=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=r.getProgramParameter(m,Wy)),X},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Xy++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=R,this}let fT=0;class dT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new hT(e),n.set(e,i)),i}}class hT{constructor(e){this.id=fT++,this.code=e,this.usedTimes=0}}function pT(t,e,n,i,r,s,a){const o=new vc,l=new dT,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,C,X,O,ie){const B=O.fog,$=ie.geometry,Y=S.isMeshStandardMaterial?O.environment:null,te=(S.isMeshStandardMaterial?n:e).get(S.envMap||Y),J=te&&te.mapping===to?te.image.height:null,ae=x[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const oe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ue=oe!==void 0?oe.length:0;let fe=0;$.morphAttributes.position!==void 0&&(fe=1),$.morphAttributes.normal!==void 0&&(fe=2),$.morphAttributes.color!==void 0&&(fe=3);let ee,ce,pe,Se;if(ae){const Gt=On[ae];ee=Gt.vertexShader,ce=Gt.fragmentShader}else ee=S.vertexShader,ce=S.fragmentShader,l.update(S),pe=l.getVertexShaderID(S),Se=l.getFragmentShaderID(S);const Me=t.getRenderTarget(),Re=ie.isInstancedMesh===!0,Le=ie.isBatchedMesh===!0,ye=!!S.map,Ve=!!S.matcap,y=!!te,U=!!S.aoMap,P=!!S.lightMap,V=!!S.bumpMap,z=!!S.normalMap,ne=!!S.displacementMap,re=!!S.emissiveMap,T=!!S.metalnessMap,h=!!S.roughnessMap,g=S.anisotropy>0,I=S.clearcoat>0,N=S.iridescence>0,G=S.sheen>0,q=S.transmission>0,D=g&&!!S.anisotropyMap,H=I&&!!S.clearcoatMap,le=I&&!!S.clearcoatNormalMap,me=I&&!!S.clearcoatRoughnessMap,se=N&&!!S.iridescenceMap,Be=N&&!!S.iridescenceThicknessMap,Te=G&&!!S.sheenColorMap,Ce=G&&!!S.sheenRoughnessMap,be=!!S.specularMap,_e=!!S.specularColorMap,we=!!S.specularIntensityMap,Ke=q&&!!S.transmissionMap,pt=q&&!!S.thicknessMap,Xe=!!S.gradientMap,de=!!S.alphaMap,F=S.alphaTest>0,ge=!!S.alphaHash,ve=!!S.extensions,Ue=!!$.attributes.uv1,Pe=!!$.attributes.uv2,rt=!!$.attributes.uv3;let st=Ri;return S.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(st=t.toneMapping),{isWebGL2:u,shaderID:ae,shaderType:S.type,shaderName:S.name,vertexShader:ee,fragmentShader:ce,defines:S.defines,customVertexShaderID:pe,customFragmentShaderID:Se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Le,instancing:Re,instancingColor:Re&&ie.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?t.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:oi,map:ye,matcap:Ve,envMap:y,envMapMode:y&&te.mapping,envMapCubeUVHeight:J,aoMap:U,lightMap:P,bumpMap:V,normalMap:z,displacementMap:d&&ne,emissiveMap:re,normalMapObjectSpace:z&&S.normalMapType===yE,normalMapTangentSpace:z&&S.normalMapType===ME,metalnessMap:T,roughnessMap:h,anisotropy:g,anisotropyMap:D,clearcoat:I,clearcoatMap:H,clearcoatNormalMap:le,clearcoatRoughnessMap:me,iridescence:N,iridescenceMap:se,iridescenceThicknessMap:Be,sheen:G,sheenColorMap:Te,sheenRoughnessMap:Ce,specularMap:be,specularColorMap:_e,specularIntensityMap:we,transmission:q,transmissionMap:Ke,thicknessMap:pt,gradientMap:Xe,opaque:S.transparent===!1&&S.blending===Vr,alphaMap:de,alphaTest:F,alphaHash:ge,combine:S.combine,mapUv:ye&&v(S.map.channel),aoMapUv:U&&v(S.aoMap.channel),lightMapUv:P&&v(S.lightMap.channel),bumpMapUv:V&&v(S.bumpMap.channel),normalMapUv:z&&v(S.normalMap.channel),displacementMapUv:ne&&v(S.displacementMap.channel),emissiveMapUv:re&&v(S.emissiveMap.channel),metalnessMapUv:T&&v(S.metalnessMap.channel),roughnessMapUv:h&&v(S.roughnessMap.channel),anisotropyMapUv:D&&v(S.anisotropyMap.channel),clearcoatMapUv:H&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(S.sheenRoughnessMap.channel),specularMapUv:be&&v(S.specularMap.channel),specularColorMapUv:_e&&v(S.specularColorMap.channel),specularIntensityMapUv:we&&v(S.specularIntensityMap.channel),transmissionMapUv:Ke&&v(S.transmissionMap.channel),thicknessMapUv:pt&&v(S.thicknessMap.channel),alphaMapUv:de&&v(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(z||g),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUv1s:Ue,vertexUv2s:Pe,vertexUv3s:rt,pointsUvs:ie.isPoints===!0&&!!$.attributes.uv&&(ye||de),fog:!!B,useFog:S.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:fe,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&X.length>0,shadowMapType:t.shadowMap.type,toneMapping:st,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ye&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ni,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ve&&S.extensions.derivatives===!0,extensionFragDepth:ve&&S.extensions.fragDepth===!0,extensionDrawBuffers:ve&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const X in S.defines)C.push(X),C.push(S.defines[X]);return S.isRawShaderMaterial===!1&&(A(C,S),E(C,S),C.push(t.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function A(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function E(S,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function M(S){const C=x[S.type];let X;if(C){const O=On[C];X=KE.clone(O.uniforms)}else X=S.uniforms;return X}function L(S,C){let X;for(let O=0,ie=c.length;O<ie;O++){const B=c[O];if(B.cacheKey===C){X=B,++X.usedTimes;break}}return X===void 0&&(X=new uT(t,C,S,s),c.push(X)),X}function b(S){if(--S.usedTimes===0){const C=c.indexOf(S);c[C]=c[c.length-1],c.pop(),S.destroy()}}function R(S){l.remove(S)}function k(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:L,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:k}}function mT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function _T(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ld(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,_,x,v,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:_,groupOrder:x,renderOrder:f.renderOrder,z:v,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=_,p.groupOrder=x,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function o(f,d,_,x,v,m){const p=a(f,d,_,x,v,m);_.transmission>0?i.push(p):_.transparent===!0?r.push(p):n.push(p)}function l(f,d,_,x,v,m){const p=a(f,d,_,x,v,m);_.transmission>0?i.unshift(p):_.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||_T),i.length>1&&i.sort(d||ld),r.length>1&&r.sort(d||ld)}function u(){for(let f=e,d=t.length;f<d;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function gT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new cd,t.set(i,[a])):r>=s.length?(a=new cd,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function vT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new et};break;case"SpotLight":n={position:new j,direction:new j,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function ET(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xT=0;function ST(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function MT(t,e){const n=new vT,i=ET(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new j);const s=new j,a=new Ct,o=new Ct;function l(u,f){let d=0,_=0,x=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let v=0,m=0,p=0,A=0,E=0,M=0,L=0,b=0,R=0,k=0,S=0;u.sort(ST);const C=f===!0?Math.PI:1;for(let O=0,ie=u.length;O<ie;O++){const B=u[O],$=B.color,Y=B.intensity,te=B.distance,J=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=$.r*Y*C,_+=$.g*Y*C,x+=$.b*Y*C;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(B.sh.coefficients[ae],Y);S++}else if(B.isDirectionalLight){const ae=n.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity*C),B.castShadow){const oe=B.shadow,ue=i.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,r.directionalShadow[v]=ue,r.directionalShadowMap[v]=J,r.directionalShadowMatrix[v]=B.shadow.matrix,M++}r.directional[v]=ae,v++}else if(B.isSpotLight){const ae=n.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy($).multiplyScalar(Y*C),ae.distance=te,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,r.spot[p]=ae;const oe=B.shadow;if(B.map&&(r.spotLightMap[R]=B.map,R++,oe.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[p]=oe.matrix,B.castShadow){const ue=i.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,r.spotShadow[p]=ue,r.spotShadowMap[p]=J,b++}p++}else if(B.isRectAreaLight){const ae=n.get(B);ae.color.copy($).multiplyScalar(Y),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),r.rectArea[A]=ae,A++}else if(B.isPointLight){const ae=n.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity*C),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){const oe=B.shadow,ue=i.get(B);ue.shadowBias=oe.bias,ue.shadowNormalBias=oe.normalBias,ue.shadowRadius=oe.radius,ue.shadowMapSize=oe.mapSize,ue.shadowCameraNear=oe.camera.near,ue.shadowCameraFar=oe.camera.far,r.pointShadow[m]=ue,r.pointShadowMap[m]=J,r.pointShadowMatrix[m]=B.shadow.matrix,L++}r.point[m]=ae,m++}else if(B.isHemisphereLight){const ae=n.get(B);ae.skyColor.copy(B.color).multiplyScalar(Y*C),ae.groundColor.copy(B.groundColor).multiplyScalar(Y*C),r.hemi[E]=ae,E++}}A>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=_,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==v||X.pointLength!==m||X.spotLength!==p||X.rectAreaLength!==A||X.hemiLength!==E||X.numDirectionalShadows!==M||X.numPointShadows!==L||X.numSpotShadows!==b||X.numSpotMaps!==R||X.numLightProbes!==S)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=A,r.point.length=m,r.hemi.length=E,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+R-k,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=S,X.directionalLength=v,X.pointLength=m,X.spotLength=p,X.rectAreaLength=A,X.hemiLength=E,X.numDirectionalShadows=M,X.numPointShadows=L,X.numSpotShadows=b,X.numSpotMaps=R,X.numLightProbes=S,r.version=xT++)}function c(u,f){let d=0,_=0,x=0,v=0,m=0;const p=f.matrixWorldInverse;for(let A=0,E=u.length;A<E;A++){const M=u[A];if(M.isDirectionalLight){const L=r.directional[d];L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),d++}else if(M.isSpotLight){const L=r.spot[x];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(p),L.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(p),x++}else if(M.isRectAreaLight){const L=r.rectArea[v];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(p),o.identity(),a.copy(M.matrixWorld),a.premultiply(p),o.extractRotation(a),L.halfWidth.set(M.width*.5,0,0),L.halfHeight.set(0,M.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const L=r.point[_];L.position.setFromMatrixPosition(M.matrixWorld),L.position.applyMatrix4(p),_++}else if(M.isHemisphereLight){const L=r.hemi[m];L.direction.setFromMatrixPosition(M.matrixWorld),L.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function ud(t,e){const n=new MT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function yT(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new ud(t,e),n.set(s,[l])):a>=o.length?(l=new ud(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class TT extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bT extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const AT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RT=`uniform sampler2D shadow_pass;
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
}`;function CT(t,e,n){let i=new Ip;const r=new je,s=new je,a=new Pt,o=new TT({depthPacking:SE}),l=new bT,c={},u=n.maxTextureSize,f={[Di]:tn,[tn]:Di,[ni]:ni},d=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:AT,fragmentShader:RT}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const x=new ci;x.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bn(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cp;let p=this.type;this.render=function(b,R,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=t.getRenderTarget(),C=t.getActiveCubeFace(),X=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Ai),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const ie=p!==Jn&&this.type===Jn,B=p===Jn&&this.type!==Jn;for(let $=0,Y=b.length;$<Y;$++){const te=b[$],J=te.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const ae=J.getFrameExtents();if(r.multiply(ae),s.copy(J.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,J.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,J.mapSize.y=s.y)),J.map===null||ie===!0||B===!0){const ue=this.type!==Jn?{minFilter:$t,magFilter:$t}:{};J.map!==null&&J.map.dispose(),J.map=new or(r.x,r.y,ue),J.map.texture.name=te.name+".shadowMap",J.camera.updateProjectionMatrix()}t.setRenderTarget(J.map),t.clear();const oe=J.getViewportCount();for(let ue=0;ue<oe;ue++){const fe=J.getViewport(ue);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),O.viewport(a),J.updateMatrices(te,ue),i=J.getFrustum(),M(R,k,J.camera,te,this.type)}J.isPointLightShadow!==!0&&this.type===Jn&&A(J,k),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(S,C,X)};function A(b,R){const k=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,_.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new or(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(R,null,k,d,v,null),_.uniforms.shadow_pass.value=b.mapPass.texture,_.uniforms.resolution.value=b.mapSize,_.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(R,null,k,_,v,null)}function E(b,R,k,S){let C=null;const X=k.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(X!==void 0)C=X;else if(C=k.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=C.uuid,ie=R.uuid;let B=c[O];B===void 0&&(B={},c[O]=B);let $=B[ie];$===void 0&&($=C.clone(),B[ie]=$,R.addEventListener("dispose",L)),C=$}if(C.visible=R.visible,C.wireframe=R.wireframe,S===Jn?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:f[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const O=t.properties.get(C);O.light=k}return C}function M(b,R,k,S,C){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Jn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld);const ie=e.update(b),B=b.material;if(Array.isArray(B)){const $=ie.groups;for(let Y=0,te=$.length;Y<te;Y++){const J=$[Y],ae=B[J.materialIndex];if(ae&&ae.visible){const oe=E(b,ae,S,C);b.onBeforeShadow(t,b,R,k,ie,oe,J),t.renderBufferDirect(k,null,ie,oe,b,J),b.onAfterShadow(t,b,R,k,ie,oe,J)}}}else if(B.visible){const $=E(b,B,S,C);b.onBeforeShadow(t,b,R,k,ie,$,null),t.renderBufferDirect(k,null,ie,$,b,null),b.onAfterShadow(t,b,R,k,ie,$,null)}}const O=b.children;for(let ie=0,B=O.length;ie<B;ie++)M(O[ie],R,k,S,C)}function L(b){b.target.removeEventListener("dispose",L);for(const k in c){const S=c[k],C=b.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function wT(t,e,n){const i=n.isWebGL2;function r(){let F=!1;const ge=new Pt;let ve=null;const Ue=new Pt(0,0,0,0);return{setMask:function(Pe){ve!==Pe&&!F&&(t.colorMask(Pe,Pe,Pe,Pe),ve=Pe)},setLocked:function(Pe){F=Pe},setClear:function(Pe,rt,st,yt,Gt){Gt===!0&&(Pe*=yt,rt*=yt,st*=yt),ge.set(Pe,rt,st,yt),Ue.equals(ge)===!1&&(t.clearColor(Pe,rt,st,yt),Ue.copy(ge))},reset:function(){F=!1,ve=null,Ue.set(-1,0,0,0)}}}function s(){let F=!1,ge=null,ve=null,Ue=null;return{setTest:function(Pe){Pe?Le(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(Pe){ge!==Pe&&!F&&(t.depthMask(Pe),ge=Pe)},setFunc:function(Pe){if(ve!==Pe){switch(Pe){case K0:t.depthFunc(t.NEVER);break;case Z0:t.depthFunc(t.ALWAYS);break;case J0:t.depthFunc(t.LESS);break;case Ua:t.depthFunc(t.LEQUAL);break;case Q0:t.depthFunc(t.EQUAL);break;case eE:t.depthFunc(t.GEQUAL);break;case tE:t.depthFunc(t.GREATER);break;case nE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=Pe}},setLocked:function(Pe){F=Pe},setClear:function(Pe){Ue!==Pe&&(t.clearDepth(Pe),Ue=Pe)},reset:function(){F=!1,ge=null,ve=null,Ue=null}}}function a(){let F=!1,ge=null,ve=null,Ue=null,Pe=null,rt=null,st=null,yt=null,Gt=null;return{setTest:function(at){F||(at?Le(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(at){ge!==at&&!F&&(t.stencilMask(at),ge=at)},setFunc:function(at,Vt,In){(ve!==at||Ue!==Vt||Pe!==In)&&(t.stencilFunc(at,Vt,In),ve=at,Ue=Vt,Pe=In)},setOp:function(at,Vt,In){(rt!==at||st!==Vt||yt!==In)&&(t.stencilOp(at,Vt,In),rt=at,st=Vt,yt=In)},setLocked:function(at){F=at},setClear:function(at){Gt!==at&&(t.clearStencil(at),Gt=at)},reset:function(){F=!1,ge=null,ve=null,Ue=null,Pe=null,rt=null,st=null,yt=null,Gt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},_={},x=new WeakMap,v=[],m=null,p=!1,A=null,E=null,M=null,L=null,b=null,R=null,k=null,S=new et(0,0,0),C=0,X=!1,O=null,ie=null,B=null,$=null,Y=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ae=0;const oe=t.getParameter(t.VERSION);oe.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(oe)[1]),J=ae>=1):oe.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),J=ae>=2);let ue=null,fe={};const ee=t.getParameter(t.SCISSOR_BOX),ce=t.getParameter(t.VIEWPORT),pe=new Pt().fromArray(ee),Se=new Pt().fromArray(ce);function Me(F,ge,ve,Ue){const Pe=new Uint8Array(4),rt=t.createTexture();t.bindTexture(F,rt),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<ve;st++)i&&(F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY)?t.texImage3D(ge,0,t.RGBA,1,1,Ue,0,t.RGBA,t.UNSIGNED_BYTE,Pe):t.texImage2D(ge+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Pe);return rt}const Re={};Re[t.TEXTURE_2D]=Me(t.TEXTURE_2D,t.TEXTURE_2D,1),Re[t.TEXTURE_CUBE_MAP]=Me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Re[t.TEXTURE_2D_ARRAY]=Me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Re[t.TEXTURE_3D]=Me(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(t.DEPTH_TEST),l.setFunc(Ua),re(!1),T(Xu),Le(t.CULL_FACE),z(Ai);function Le(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function ye(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function Ve(F,ge){return _[F]!==ge?(t.bindFramebuffer(F,ge),_[F]=ge,i&&(F===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=ge),F===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=ge)),!0):!1}function y(F,ge){let ve=v,Ue=!1;if(F)if(ve=x.get(ge),ve===void 0&&(ve=[],x.set(ge,ve)),F.isWebGLMultipleRenderTargets){const Pe=F.texture;if(ve.length!==Pe.length||ve[0]!==t.COLOR_ATTACHMENT0){for(let rt=0,st=Pe.length;rt<st;rt++)ve[rt]=t.COLOR_ATTACHMENT0+rt;ve.length=Pe.length,Ue=!0}}else ve[0]!==t.COLOR_ATTACHMENT0&&(ve[0]=t.COLOR_ATTACHMENT0,Ue=!0);else ve[0]!==t.BACK&&(ve[0]=t.BACK,Ue=!0);Ue&&(n.isWebGL2?t.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function U(F){return m!==F?(t.useProgram(F),m=F,!0):!1}const P={[er]:t.FUNC_ADD,[U0]:t.FUNC_SUBTRACT,[O0]:t.FUNC_REVERSE_SUBTRACT};if(i)P[ju]=t.MIN,P[Ku]=t.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(P[ju]=F.MIN_EXT,P[Ku]=F.MAX_EXT)}const V={[F0]:t.ZERO,[B0]:t.ONE,[H0]:t.SRC_COLOR,[Al]:t.SRC_ALPHA,[X0]:t.SRC_ALPHA_SATURATE,[z0]:t.DST_COLOR,[G0]:t.DST_ALPHA,[k0]:t.ONE_MINUS_SRC_COLOR,[Rl]:t.ONE_MINUS_SRC_ALPHA,[W0]:t.ONE_MINUS_DST_COLOR,[V0]:t.ONE_MINUS_DST_ALPHA,[Y0]:t.CONSTANT_COLOR,[$0]:t.ONE_MINUS_CONSTANT_COLOR,[q0]:t.CONSTANT_ALPHA,[j0]:t.ONE_MINUS_CONSTANT_ALPHA};function z(F,ge,ve,Ue,Pe,rt,st,yt,Gt,at){if(F===Ai){p===!0&&(ye(t.BLEND),p=!1);return}if(p===!1&&(Le(t.BLEND),p=!0),F!==N0){if(F!==A||at!==X){if((E!==er||b!==er)&&(t.blendEquation(t.FUNC_ADD),E=er,b=er),at)switch(F){case Vr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yu:t.blendFunc(t.ONE,t.ONE);break;case $u:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Vr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case $u:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case qu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}M=null,L=null,R=null,k=null,S.set(0,0,0),C=0,A=F,X=at}return}Pe=Pe||ge,rt=rt||ve,st=st||Ue,(ge!==E||Pe!==b)&&(t.blendEquationSeparate(P[ge],P[Pe]),E=ge,b=Pe),(ve!==M||Ue!==L||rt!==R||st!==k)&&(t.blendFuncSeparate(V[ve],V[Ue],V[rt],V[st]),M=ve,L=Ue,R=rt,k=st),(yt.equals(S)===!1||Gt!==C)&&(t.blendColor(yt.r,yt.g,yt.b,Gt),S.copy(yt),C=Gt),A=F,X=!1}function ne(F,ge){F.side===ni?ye(t.CULL_FACE):Le(t.CULL_FACE);let ve=F.side===tn;ge&&(ve=!ve),re(ve),F.blending===Vr&&F.transparent===!1?z(Ai):z(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const Ue=F.stencilWrite;c.setTest(Ue),Ue&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),g(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Le(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function re(F){O!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),O=F)}function T(F){F!==P0?(Le(t.CULL_FACE),F!==ie&&(F===Xu?t.cullFace(t.BACK):F===I0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),ie=F}function h(F){F!==B&&(J&&t.lineWidth(F),B=F)}function g(F,ge,ve){F?(Le(t.POLYGON_OFFSET_FILL),($!==ge||Y!==ve)&&(t.polygonOffset(ge,ve),$=ge,Y=ve)):ye(t.POLYGON_OFFSET_FILL)}function I(F){F?Le(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function N(F){F===void 0&&(F=t.TEXTURE0+te-1),ue!==F&&(t.activeTexture(F),ue=F)}function G(F,ge,ve){ve===void 0&&(ue===null?ve=t.TEXTURE0+te-1:ve=ue);let Ue=fe[ve];Ue===void 0&&(Ue={type:void 0,texture:void 0},fe[ve]=Ue),(Ue.type!==F||Ue.texture!==ge)&&(ue!==ve&&(t.activeTexture(ve),ue=ve),t.bindTexture(F,ge||Re[F]),Ue.type=F,Ue.texture=ge)}function q(){const F=fe[ue];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function D(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(F){pe.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),pe.copy(F))}function Ke(F){Se.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Se.copy(F))}function pt(F,ge){let ve=f.get(ge);ve===void 0&&(ve=new WeakMap,f.set(ge,ve));let Ue=ve.get(F);Ue===void 0&&(Ue=t.getUniformBlockIndex(ge,F.name),ve.set(F,Ue))}function Xe(F,ge){const Ue=f.get(ge).get(F);u.get(ge)!==Ue&&(t.uniformBlockBinding(ge,Ue,F.__bindingPointIndex),u.set(ge,Ue))}function de(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},ue=null,fe={},_={},x=new WeakMap,v=[],m=null,p=!1,A=null,E=null,M=null,L=null,b=null,R=null,k=null,S=new et(0,0,0),C=0,X=!1,O=null,ie=null,B=null,$=null,Y=null,pe.set(0,0,t.canvas.width,t.canvas.height),Se.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Le,disable:ye,bindFramebuffer:Ve,drawBuffers:y,useProgram:U,setBlending:z,setMaterial:ne,setFlipSided:re,setCullFace:T,setLineWidth:h,setPolygonOffset:g,setScissorTest:I,activeTexture:N,bindTexture:G,unbindTexture:q,compressedTexImage2D:D,compressedTexImage3D:H,texImage2D:be,texImage3D:_e,updateUBOMapping:pt,uniformBlockBinding:Xe,texStorage2D:Te,texStorage3D:Ce,texSubImage2D:le,texSubImage3D:me,compressedTexSubImage2D:se,compressedTexSubImage3D:Be,scissor:we,viewport:Ke,reset:de}}function LT(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const d=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,h){return _?new OffscreenCanvas(T,h):Ds("canvas")}function v(T,h,g,I){let N=1;if((T.width>I||T.height>I)&&(N=I/Math.max(T.width,T.height)),N<1||h===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const G=h?Ul:Math.floor,q=G(N*T.width),D=G(N*T.height);f===void 0&&(f=x(q,D));const H=g?x(q,D):f;return H.width=q,H.height=D,H.getContext("2d").drawImage(T,0,0,q,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+q+"x"+D+")."),H}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Af(T.width)&&Af(T.height)}function p(T){return o?!1:T.wrapS!==yn||T.wrapT!==yn||T.minFilter!==$t&&T.minFilter!==mn}function A(T,h){return T.generateMipmaps&&h&&T.minFilter!==$t&&T.minFilter!==mn}function E(T){t.generateMipmap(T)}function M(T,h,g,I,N=!1){if(o===!1)return h;if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let G=h;if(h===t.RED&&(g===t.FLOAT&&(G=t.R32F),g===t.HALF_FLOAT&&(G=t.R16F),g===t.UNSIGNED_BYTE&&(G=t.R8)),h===t.RED_INTEGER&&(g===t.UNSIGNED_BYTE&&(G=t.R8UI),g===t.UNSIGNED_SHORT&&(G=t.R16UI),g===t.UNSIGNED_INT&&(G=t.R32UI),g===t.BYTE&&(G=t.R8I),g===t.SHORT&&(G=t.R16I),g===t.INT&&(G=t.R32I)),h===t.RG&&(g===t.FLOAT&&(G=t.RG32F),g===t.HALF_FLOAT&&(G=t.RG16F),g===t.UNSIGNED_BYTE&&(G=t.RG8)),h===t.RGBA){const q=N?Oa:tt.getTransfer(I);g===t.FLOAT&&(G=t.RGBA32F),g===t.HALF_FLOAT&&(G=t.RGBA16F),g===t.UNSIGNED_BYTE&&(G=q===ut?t.SRGB8_ALPHA8:t.RGBA8),g===t.UNSIGNED_SHORT_4_4_4_4&&(G=t.RGBA4),g===t.UNSIGNED_SHORT_5_5_5_1&&(G=t.RGB5_A1)}return(G===t.R16F||G===t.R32F||G===t.RG16F||G===t.RG32F||G===t.RGBA16F||G===t.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function L(T,h,g){return A(T,g)===!0||T.isFramebufferTexture&&T.minFilter!==$t&&T.minFilter!==mn?Math.log2(Math.max(h.width,h.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?h.mipmaps.length:1}function b(T){return T===$t||T===Zu||T===Ro?t.NEAREST:t.LINEAR}function R(T){const h=T.target;h.removeEventListener("dispose",R),S(h),h.isVideoTexture&&u.delete(h)}function k(T){const h=T.target;h.removeEventListener("dispose",k),X(h)}function S(T){const h=i.get(T);if(h.__webglInit===void 0)return;const g=T.source,I=d.get(g);if(I){const N=I[h.__cacheKey];N.usedTimes--,N.usedTimes===0&&C(T),Object.keys(I).length===0&&d.delete(g)}i.remove(T)}function C(T){const h=i.get(T);t.deleteTexture(h.__webglTexture);const g=T.source,I=d.get(g);delete I[h.__cacheKey],a.memory.textures--}function X(T){const h=T.texture,g=i.get(T),I=i.get(h);if(I.__webglTexture!==void 0&&(t.deleteTexture(I.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(g.__webglFramebuffer[N]))for(let G=0;G<g.__webglFramebuffer[N].length;G++)t.deleteFramebuffer(g.__webglFramebuffer[N][G]);else t.deleteFramebuffer(g.__webglFramebuffer[N]);g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer[N])}else{if(Array.isArray(g.__webglFramebuffer))for(let N=0;N<g.__webglFramebuffer.length;N++)t.deleteFramebuffer(g.__webglFramebuffer[N]);else t.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&t.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&t.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let N=0;N<g.__webglColorRenderbuffer.length;N++)g.__webglColorRenderbuffer[N]&&t.deleteRenderbuffer(g.__webglColorRenderbuffer[N]);g.__webglDepthRenderbuffer&&t.deleteRenderbuffer(g.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let N=0,G=h.length;N<G;N++){const q=i.get(h[N]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(h[N])}i.remove(h),i.remove(T)}let O=0;function ie(){O=0}function B(){const T=O;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),O+=1,T}function $(T){const h=[];return h.push(T.wrapS),h.push(T.wrapT),h.push(T.wrapR||0),h.push(T.magFilter),h.push(T.minFilter),h.push(T.anisotropy),h.push(T.internalFormat),h.push(T.format),h.push(T.type),h.push(T.generateMipmaps),h.push(T.premultiplyAlpha),h.push(T.flipY),h.push(T.unpackAlignment),h.push(T.colorSpace),h.join()}function Y(T,h){const g=i.get(T);if(T.isVideoTexture&&ne(T),T.isRenderTargetTexture===!1&&T.version>0&&g.__version!==T.version){const I=T.image;if(I===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(g,T,h);return}}n.bindTexture(t.TEXTURE_2D,g.__webglTexture,t.TEXTURE0+h)}function te(T,h){const g=i.get(T);if(T.version>0&&g.__version!==T.version){pe(g,T,h);return}n.bindTexture(t.TEXTURE_2D_ARRAY,g.__webglTexture,t.TEXTURE0+h)}function J(T,h){const g=i.get(T);if(T.version>0&&g.__version!==T.version){pe(g,T,h);return}n.bindTexture(t.TEXTURE_3D,g.__webglTexture,t.TEXTURE0+h)}function ae(T,h){const g=i.get(T);if(T.version>0&&g.__version!==T.version){Se(g,T,h);return}n.bindTexture(t.TEXTURE_CUBE_MAP,g.__webglTexture,t.TEXTURE0+h)}const oe={[Ll]:t.REPEAT,[yn]:t.CLAMP_TO_EDGE,[Pl]:t.MIRRORED_REPEAT},ue={[$t]:t.NEAREST,[Zu]:t.NEAREST_MIPMAP_NEAREST,[Ro]:t.NEAREST_MIPMAP_LINEAR,[mn]:t.LINEAR,[fE]:t.LINEAR_MIPMAP_NEAREST,[Ps]:t.LINEAR_MIPMAP_LINEAR},fe={[TE]:t.NEVER,[LE]:t.ALWAYS,[bE]:t.LESS,[xp]:t.LEQUAL,[AE]:t.EQUAL,[wE]:t.GEQUAL,[RE]:t.GREATER,[CE]:t.NOTEQUAL};function ee(T,h,g){if(g?(t.texParameteri(T,t.TEXTURE_WRAP_S,oe[h.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,oe[h.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,oe[h.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ue[h.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ue[h.minFilter])):(t.texParameteri(T,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(T,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(h.wrapS!==yn||h.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(T,t.TEXTURE_MAG_FILTER,b(h.magFilter)),t.texParameteri(T,t.TEXTURE_MIN_FILTER,b(h.minFilter)),h.minFilter!==$t&&h.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),h.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,fe[h.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");if(h.magFilter===$t||h.minFilter!==Ro&&h.minFilter!==Ps||h.type===yi&&e.has("OES_texture_float_linear")===!1||o===!1&&h.type===Is&&e.has("OES_texture_half_float_linear")===!1)return;(h.anisotropy>1||i.get(h).__currentAnisotropy)&&(t.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(h.anisotropy,r.getMaxAnisotropy())),i.get(h).__currentAnisotropy=h.anisotropy)}}function ce(T,h){let g=!1;T.__webglInit===void 0&&(T.__webglInit=!0,h.addEventListener("dispose",R));const I=h.source;let N=d.get(I);N===void 0&&(N={},d.set(I,N));const G=$(h);if(G!==T.__cacheKey){N[G]===void 0&&(N[G]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,g=!0),N[G].usedTimes++;const q=N[T.__cacheKey];q!==void 0&&(N[T.__cacheKey].usedTimes--,q.usedTimes===0&&C(h)),T.__cacheKey=G,T.__webglTexture=N[G].texture}return g}function pe(T,h,g){let I=t.TEXTURE_2D;(h.isDataArrayTexture||h.isCompressedArrayTexture)&&(I=t.TEXTURE_2D_ARRAY),h.isData3DTexture&&(I=t.TEXTURE_3D);const N=ce(T,h),G=h.source;n.bindTexture(I,T.__webglTexture,t.TEXTURE0+g);const q=i.get(G);if(G.version!==q.__version||N===!0){n.activeTexture(t.TEXTURE0+g);const D=tt.getPrimaries(tt.workingColorSpace),H=h.colorSpace===gn?null:tt.getPrimaries(h.colorSpace),le=h.colorSpace===gn||D===H?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,h.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,h.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const me=p(h)&&m(h.image)===!1;let se=v(h.image,me,!1,r.maxTextureSize);se=re(h,se);const Be=m(se)||o,Te=s.convert(h.format,h.colorSpace);let Ce=s.convert(h.type),be=M(h.internalFormat,Te,Ce,h.colorSpace,h.isVideoTexture);ee(I,h,Be);let _e;const we=h.mipmaps,Ke=o&&h.isVideoTexture!==!0&&be!==vp,pt=q.__version===void 0||N===!0,Xe=L(h,se,Be);if(h.isDepthTexture)be=t.DEPTH_COMPONENT,o?h.type===yi?be=t.DEPTH_COMPONENT32F:h.type===Mi?be=t.DEPTH_COMPONENT24:h.type===ir?be=t.DEPTH24_STENCIL8:be=t.DEPTH_COMPONENT16:h.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),h.format===rr&&be===t.DEPTH_COMPONENT&&h.type!==mc&&h.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),h.type=Mi,Ce=s.convert(h.type)),h.format===jr&&be===t.DEPTH_COMPONENT&&(be=t.DEPTH_STENCIL,h.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),h.type=ir,Ce=s.convert(h.type))),pt&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,be,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,be,se.width,se.height,0,Te,Ce,null));else if(h.isDataTexture)if(we.length>0&&Be){Ke&&pt&&n.texStorage2D(t.TEXTURE_2D,Xe,be,we[0].width,we[0].height);for(let de=0,F=we.length;de<F;de++)_e=we[de],Ke?n.texSubImage2D(t.TEXTURE_2D,de,0,0,_e.width,_e.height,Te,Ce,_e.data):n.texImage2D(t.TEXTURE_2D,de,be,_e.width,_e.height,0,Te,Ce,_e.data);h.generateMipmaps=!1}else Ke?(pt&&n.texStorage2D(t.TEXTURE_2D,Xe,be,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Te,Ce,se.data)):n.texImage2D(t.TEXTURE_2D,0,be,se.width,se.height,0,Te,Ce,se.data);else if(h.isCompressedTexture)if(h.isCompressedArrayTexture){Ke&&pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,be,we[0].width,we[0].height,se.depth);for(let de=0,F=we.length;de<F;de++)_e=we[de],h.format!==Tn?Te!==null?Ke?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,se.depth,Te,_e.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,be,_e.width,_e.height,se.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,_e.width,_e.height,se.depth,Te,Ce,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,be,_e.width,_e.height,se.depth,0,Te,Ce,_e.data)}else{Ke&&pt&&n.texStorage2D(t.TEXTURE_2D,Xe,be,we[0].width,we[0].height);for(let de=0,F=we.length;de<F;de++)_e=we[de],h.format!==Tn?Te!==null?Ke?n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,_e.width,_e.height,Te,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,de,be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?n.texSubImage2D(t.TEXTURE_2D,de,0,0,_e.width,_e.height,Te,Ce,_e.data):n.texImage2D(t.TEXTURE_2D,de,be,_e.width,_e.height,0,Te,Ce,_e.data)}else if(h.isDataArrayTexture)Ke?(pt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Xe,be,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Te,Ce,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,Te,Ce,se.data);else if(h.isData3DTexture)Ke?(pt&&n.texStorage3D(t.TEXTURE_3D,Xe,be,se.width,se.height,se.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Te,Ce,se.data)):n.texImage3D(t.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,Te,Ce,se.data);else if(h.isFramebufferTexture){if(pt)if(Ke)n.texStorage2D(t.TEXTURE_2D,Xe,be,se.width,se.height);else{let de=se.width,F=se.height;for(let ge=0;ge<Xe;ge++)n.texImage2D(t.TEXTURE_2D,ge,be,de,F,0,Te,Ce,null),de>>=1,F>>=1}}else if(we.length>0&&Be){Ke&&pt&&n.texStorage2D(t.TEXTURE_2D,Xe,be,we[0].width,we[0].height);for(let de=0,F=we.length;de<F;de++)_e=we[de],Ke?n.texSubImage2D(t.TEXTURE_2D,de,0,0,Te,Ce,_e):n.texImage2D(t.TEXTURE_2D,de,be,Te,Ce,_e);h.generateMipmaps=!1}else Ke?(pt&&n.texStorage2D(t.TEXTURE_2D,Xe,be,se.width,se.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Ce,se)):n.texImage2D(t.TEXTURE_2D,0,be,Te,Ce,se);A(h,Be)&&E(I),q.__version=G.version,h.onUpdate&&h.onUpdate(h)}T.__version=h.version}function Se(T,h,g){if(h.image.length!==6)return;const I=ce(T,h),N=h.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+g);const G=i.get(N);if(N.version!==G.__version||I===!0){n.activeTexture(t.TEXTURE0+g);const q=tt.getPrimaries(tt.workingColorSpace),D=h.colorSpace===gn?null:tt.getPrimaries(h.colorSpace),H=h.colorSpace===gn||q===D?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,h.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,h.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);const le=h.isCompressedTexture||h.image[0].isCompressedTexture,me=h.image[0]&&h.image[0].isDataTexture,se=[];for(let de=0;de<6;de++)!le&&!me?se[de]=v(h.image[de],!1,!0,r.maxCubemapSize):se[de]=me?h.image[de].image:h.image[de],se[de]=re(h,se[de]);const Be=se[0],Te=m(Be)||o,Ce=s.convert(h.format,h.colorSpace),be=s.convert(h.type),_e=M(h.internalFormat,Ce,be,h.colorSpace),we=o&&h.isVideoTexture!==!0,Ke=G.__version===void 0||I===!0;let pt=L(h,Be,Te);ee(t.TEXTURE_CUBE_MAP,h,Te);let Xe;if(le){we&&Ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,_e,Be.width,Be.height);for(let de=0;de<6;de++){Xe=se[de].mipmaps;for(let F=0;F<Xe.length;F++){const ge=Xe[F];h.format!==Tn?Ce!==null?we?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F,0,0,ge.width,ge.height,Ce,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F,_e,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F,0,0,ge.width,ge.height,Ce,be,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F,_e,ge.width,ge.height,0,Ce,be,ge.data)}}}else{Xe=h.mipmaps,we&&Ke&&(Xe.length>0&&pt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,pt,_e,se[0].width,se[0].height));for(let de=0;de<6;de++)if(me){we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,se[de].width,se[de].height,Ce,be,se[de].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,_e,se[de].width,se[de].height,0,Ce,be,se[de].data);for(let F=0;F<Xe.length;F++){const ve=Xe[F].image[de].image;we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F+1,0,0,ve.width,ve.height,Ce,be,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F+1,_e,ve.width,ve.height,0,Ce,be,ve.data)}}else{we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ce,be,se[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,_e,Ce,be,se[de]);for(let F=0;F<Xe.length;F++){const ge=Xe[F];we?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F+1,0,0,Ce,be,ge.image[de]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+de,F+1,_e,Ce,be,ge.image[de])}}}A(h,Te)&&E(t.TEXTURE_CUBE_MAP),G.__version=N.version,h.onUpdate&&h.onUpdate(h)}T.__version=h.version}function Me(T,h,g,I,N,G){const q=s.convert(g.format,g.colorSpace),D=s.convert(g.type),H=M(g.internalFormat,q,D,g.colorSpace);if(!i.get(h).__hasExternalTextures){const me=Math.max(1,h.width>>G),se=Math.max(1,h.height>>G);N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?n.texImage3D(N,G,H,me,se,h.depth,0,q,D,null):n.texImage2D(N,G,H,me,se,0,q,D,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),z(h)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,I,N,i.get(g).__webglTexture,0,V(h)):(N===t.TEXTURE_2D||N>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,I,N,i.get(g).__webglTexture,G),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(T,h,g){if(t.bindRenderbuffer(t.RENDERBUFFER,T),h.depthBuffer&&!h.stencilBuffer){let I=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(g||z(h)){const N=h.depthTexture;N&&N.isDepthTexture&&(N.type===yi?I=t.DEPTH_COMPONENT32F:N.type===Mi&&(I=t.DEPTH_COMPONENT24));const G=V(h);z(h)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,G,I,h.width,h.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,G,I,h.width,h.height)}else t.renderbufferStorage(t.RENDERBUFFER,I,h.width,h.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,T)}else if(h.depthBuffer&&h.stencilBuffer){const I=V(h);g&&z(h)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,I,t.DEPTH24_STENCIL8,h.width,h.height):z(h)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I,t.DEPTH24_STENCIL8,h.width,h.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,h.width,h.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,T)}else{const I=h.isWebGLMultipleRenderTargets===!0?h.texture:[h.texture];for(let N=0;N<I.length;N++){const G=I[N],q=s.convert(G.format,G.colorSpace),D=s.convert(G.type),H=M(G.internalFormat,q,D,G.colorSpace),le=V(h);g&&z(h)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,H,h.width,h.height):z(h)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,H,h.width,h.height):t.renderbufferStorage(t.RENDERBUFFER,H,h.width,h.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Le(T,h){if(h&&h.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(h.depthTexture&&h.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(h.depthTexture).__webglTexture||h.depthTexture.image.width!==h.width||h.depthTexture.image.height!==h.height)&&(h.depthTexture.image.width=h.width,h.depthTexture.image.height=h.height,h.depthTexture.needsUpdate=!0),Y(h.depthTexture,0);const I=i.get(h.depthTexture).__webglTexture,N=V(h);if(h.depthTexture.format===rr)z(h)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,I,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,I,0);else if(h.depthTexture.format===jr)z(h)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,I,0,N):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,I,0);else throw new Error("Unknown depthTexture format")}function ye(T){const h=i.get(T),g=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!h.__autoAllocateDepthBuffer){if(g)throw new Error("target.depthTexture not supported in Cube render targets");Le(h.__webglFramebuffer,T)}else if(g){h.__webglDepthbuffer=[];for(let I=0;I<6;I++)n.bindFramebuffer(t.FRAMEBUFFER,h.__webglFramebuffer[I]),h.__webglDepthbuffer[I]=t.createRenderbuffer(),Re(h.__webglDepthbuffer[I],T,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,h.__webglFramebuffer),h.__webglDepthbuffer=t.createRenderbuffer(),Re(h.__webglDepthbuffer,T,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(T,h,g){const I=i.get(T);h!==void 0&&Me(I.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),g!==void 0&&ye(T)}function y(T){const h=T.texture,g=i.get(T),I=i.get(h);T.addEventListener("dispose",k),T.isWebGLMultipleRenderTargets!==!0&&(I.__webglTexture===void 0&&(I.__webglTexture=t.createTexture()),I.__version=h.version,a.memory.textures++);const N=T.isWebGLCubeRenderTarget===!0,G=T.isWebGLMultipleRenderTargets===!0,q=m(T)||o;if(N){g.__webglFramebuffer=[];for(let D=0;D<6;D++)if(o&&h.mipmaps&&h.mipmaps.length>0){g.__webglFramebuffer[D]=[];for(let H=0;H<h.mipmaps.length;H++)g.__webglFramebuffer[D][H]=t.createFramebuffer()}else g.__webglFramebuffer[D]=t.createFramebuffer()}else{if(o&&h.mipmaps&&h.mipmaps.length>0){g.__webglFramebuffer=[];for(let D=0;D<h.mipmaps.length;D++)g.__webglFramebuffer[D]=t.createFramebuffer()}else g.__webglFramebuffer=t.createFramebuffer();if(G)if(r.drawBuffers){const D=T.texture;for(let H=0,le=D.length;H<le;H++){const me=i.get(D[H]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&z(T)===!1){const D=G?h:[h];g.__webglMultisampledFramebuffer=t.createFramebuffer(),g.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,g.__webglMultisampledFramebuffer);for(let H=0;H<D.length;H++){const le=D[H];g.__webglColorRenderbuffer[H]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,g.__webglColorRenderbuffer[H]);const me=s.convert(le.format,le.colorSpace),se=s.convert(le.type),Be=M(le.internalFormat,me,se,le.colorSpace,T.isXRRenderTarget===!0),Te=V(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,Be,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+H,t.RENDERBUFFER,g.__webglColorRenderbuffer[H])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(g.__webglDepthRenderbuffer=t.createRenderbuffer(),Re(g.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(N){n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture),ee(t.TEXTURE_CUBE_MAP,h,q);for(let D=0;D<6;D++)if(o&&h.mipmaps&&h.mipmaps.length>0)for(let H=0;H<h.mipmaps.length;H++)Me(g.__webglFramebuffer[D][H],T,h,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+D,H);else Me(g.__webglFramebuffer[D],T,h,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);A(h,q)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(G){const D=T.texture;for(let H=0,le=D.length;H<le;H++){const me=D[H],se=i.get(me);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),ee(t.TEXTURE_2D,me,q),Me(g.__webglFramebuffer,T,me,t.COLOR_ATTACHMENT0+H,t.TEXTURE_2D,0),A(me,q)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let D=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?D=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(D,I.__webglTexture),ee(D,h,q),o&&h.mipmaps&&h.mipmaps.length>0)for(let H=0;H<h.mipmaps.length;H++)Me(g.__webglFramebuffer[H],T,h,t.COLOR_ATTACHMENT0,D,H);else Me(g.__webglFramebuffer,T,h,t.COLOR_ATTACHMENT0,D,0);A(h,q)&&E(D),n.unbindTexture()}T.depthBuffer&&ye(T)}function U(T){const h=m(T)||o,g=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let I=0,N=g.length;I<N;I++){const G=g[I];if(A(G,h)){const q=T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,D=i.get(G).__webglTexture;n.bindTexture(q,D),E(q),n.unbindTexture()}}}function P(T){if(o&&T.samples>0&&z(T)===!1){const h=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],g=T.width,I=T.height;let N=t.COLOR_BUFFER_BIT;const G=[],q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,D=i.get(T),H=T.isWebGLMultipleRenderTargets===!0;if(H)for(let le=0;le<h.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let le=0;le<h.length;le++){G.push(t.COLOR_ATTACHMENT0+le),T.depthBuffer&&G.push(q);const me=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(me===!1&&(T.depthBuffer&&(N|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&(N|=t.STENCIL_BUFFER_BIT)),H&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,D.__webglColorRenderbuffer[le]),me===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[q]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[q])),H){const se=i.get(h[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,g,I,0,0,g,I,N,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,G)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),H)for(let le=0;le<h.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,D.__webglColorRenderbuffer[le]);const me=i.get(h[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,D.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}}function V(T){return Math.min(r.maxSamples,T.samples)}function z(T){const h=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&h.__useRenderToTexture!==!1}function ne(T){const h=a.render.frame;u.get(T)!==h&&(u.set(T,h),T.update())}function re(T,h){const g=T.colorSpace,I=T.format,N=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Dl||g!==oi&&g!==gn&&(tt.getTransfer(g)===ut?o===!1?e.has("EXT_sRGB")===!0&&I===Tn?(T.format=Dl,T.minFilter=mn,T.generateMipmaps=!1):h=Mp.sRGBToLinear(h):(I!==Tn||N!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",g)),h}this.allocateTextureUnit=B,this.resetTextureUnits=ie,this.setTexture2D=Y,this.setTexture2DArray=te,this.setTexture3D=J,this.setTextureCube=ae,this.rebindTextures=Ve,this.setupRenderTarget=y,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=z}function PT(t,e,n){const i=n.isWebGL2;function r(s,a=gn){let o;const l=tt.getTransfer(a);if(s===Ci)return t.UNSIGNED_BYTE;if(s===hp)return t.UNSIGNED_SHORT_4_4_4_4;if(s===pp)return t.UNSIGNED_SHORT_5_5_5_1;if(s===dE)return t.BYTE;if(s===hE)return t.SHORT;if(s===mc)return t.UNSIGNED_SHORT;if(s===dp)return t.INT;if(s===Mi)return t.UNSIGNED_INT;if(s===yi)return t.FLOAT;if(s===Is)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===pE)return t.ALPHA;if(s===Tn)return t.RGBA;if(s===mE)return t.LUMINANCE;if(s===_E)return t.LUMINANCE_ALPHA;if(s===rr)return t.DEPTH_COMPONENT;if(s===jr)return t.DEPTH_STENCIL;if(s===Dl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===gE)return t.RED;if(s===mp)return t.RED_INTEGER;if(s===vE)return t.RG;if(s===_p)return t.RG_INTEGER;if(s===gp)return t.RGBA_INTEGER;if(s===Co||s===wo||s===Lo||s===Po)if(l===ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Po)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===wo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Lo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Po)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ju||s===Qu||s===ef||s===tf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ju)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ef)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vp)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===nf||s===rf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===nf)return l===ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===rf)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sf||s===af||s===of||s===lf||s===cf||s===uf||s===ff||s===df||s===hf||s===pf||s===mf||s===_f||s===gf||s===vf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===sf)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===af)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===of)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lf)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cf)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===uf)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ff)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===df)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hf)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pf)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mf)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_f)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gf)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vf)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Io||s===Ef||s===xf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Io)return l===ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ef)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===xf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===EE||s===Sf||s===Mf||s===yf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Io)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Sf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ir?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class IT extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class va extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DT={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),_=.02,x=.005;c.inputState.pinching&&d>_+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=_-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(DT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new va;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class NT extends Jr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,_=null,x=null;const v=n.getContextAttributes();let m=null,p=null;const A=[],E=[],M=new je;let L=null;const b=new Mn;b.layers.enable(1),b.viewport=new Pt;const R=new Mn;R.layers.enable(2),R.viewport=new Pt;const k=[b,R],S=new IT;S.layers.enable(1),S.layers.enable(2);let C=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=A[ee];return ce===void 0&&(ce=new il,A[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=A[ee];return ce===void 0&&(ce=new il,A[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=A[ee];return ce===void 0&&(ce=new il,A[ee]=ce),ce.getHandSpace()};function O(ee){const ce=E.indexOf(ee.inputSource);if(ce===-1)return;const pe=A[ce];pe!==void 0&&(pe.update(ee.inputSource,ee.frame,c||a),pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ie(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",B);for(let ee=0;ee<A.length;ee++){const ce=E[ee];ce!==null&&(E[ee]=null,A[ee].disconnect(ce))}C=null,X=null,e.setRenderTarget(m),_=null,d=null,f=null,r=null,p=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),p=new or(_.framebufferWidth,_.framebufferHeight,{format:Tn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ce=null,pe=null,Se=null;v.depth&&(Se=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=v.stencil?jr:rr,pe=v.stencil?ir:Mi);const Me={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Me),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new or(d.textureWidth,d.textureHeight,{format:Tn,type:Ci,depthTexture:new Up(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Re=e.properties.get(p);Re.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(ee){for(let ce=0;ce<ee.removed.length;ce++){const pe=ee.removed[ce],Se=E.indexOf(pe);Se>=0&&(E[Se]=null,A[Se].disconnect(pe))}for(let ce=0;ce<ee.added.length;ce++){const pe=ee.added[ce];let Se=E.indexOf(pe);if(Se===-1){for(let Re=0;Re<A.length;Re++)if(Re>=E.length){E.push(pe),Se=Re;break}else if(E[Re]===null){E[Re]=pe,Se=Re;break}if(Se===-1)break}const Me=A[Se];Me&&Me.connect(pe)}}const $=new j,Y=new j;function te(ee,ce,pe){$.setFromMatrixPosition(ce.matrixWorld),Y.setFromMatrixPosition(pe.matrixWorld);const Se=$.distanceTo(Y),Me=ce.projectionMatrix.elements,Re=pe.projectionMatrix.elements,Le=Me[14]/(Me[10]-1),ye=Me[14]/(Me[10]+1),Ve=(Me[9]+1)/Me[5],y=(Me[9]-1)/Me[5],U=(Me[8]-1)/Me[0],P=(Re[8]+1)/Re[0],V=Le*U,z=Le*P,ne=Se/(-U+P),re=ne*-U;ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(re),ee.translateZ(ne),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const T=Le+ne,h=ye+ne,g=V-re,I=z+(Se-re),N=Ve*ye/h*T,G=y*ye/h*T;ee.projectionMatrix.makePerspective(g,I,N,G,T,h),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}function J(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;S.near=R.near=b.near=ee.near,S.far=R.far=b.far=ee.far,(C!==S.near||X!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,X=S.far);const ce=ee.parent,pe=S.cameras;J(S,ce);for(let Se=0;Se<pe.length;Se++)J(pe[Se],ce);pe.length===2?te(S,b,R):S.projectionMatrix.copy(b.projectionMatrix),ae(ee,S,ce)};function ae(ee,ce,pe){pe===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Nl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ee)};let oe=null;function ue(ee,ce){if(u=ce.getViewerPose(c||a),x=ce,u!==null){const pe=u.views;_!==null&&(e.setRenderTargetFramebuffer(p,_.framebuffer),e.setRenderTarget(p));let Se=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,Se=!0);for(let Me=0;Me<pe.length;Me++){const Re=pe[Me];let Le=null;if(_!==null)Le=_.getViewport(Re);else{const Ve=f.getViewSubImage(d,Re);Le=Ve.viewport,Me===0&&(e.setRenderTargetTextures(p,Ve.colorTexture,d.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(p))}let ye=k[Me];ye===void 0&&(ye=new Mn,ye.layers.enable(Me),ye.viewport=new Pt,k[Me]=ye),ye.matrix.fromArray(Re.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Re.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Le.x,Le.y,Le.width,Le.height),Me===0&&(S.matrix.copy(ye.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Se===!0&&S.cameras.push(ye)}}for(let pe=0;pe<A.length;pe++){const Se=E[pe],Me=A[pe];Se!==null&&Me!==void 0&&Me.update(Se,ce,c||a)}oe&&oe(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),x=null}const fe=new Dp;fe.setAnimationLoop(ue),this.setAnimationLoop=function(ee){oe=ee},this.dispose=function(){}}}function UT(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wp(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,E,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&_(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p).envMap;if(A&&(m.envMap.value=A,m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const E=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*E,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function _(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function OT(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,E){const M=E.program;i.uniformBlockBinding(A,M)}function c(A,E){let M=r[A.id];M===void 0&&(x(A),M=u(A),r[A.id]=M,A.addEventListener("dispose",m));const L=E.program;i.updateUBOMapping(A,L);const b=e.render.frame;s[A.id]!==b&&(d(A),s[A.id]=b)}function u(A){const E=f();A.__bindingPointIndex=E;const M=t.createBuffer(),L=A.__size,b=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,L,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,M),M}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const E=r[A.id],M=A.uniforms,L=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let b=0,R=M.length;b<R;b++){const k=Array.isArray(M[b])?M[b]:[M[b]];for(let S=0,C=k.length;S<C;S++){const X=k[S];if(_(X,b,S,L)===!0){const O=X.__offset,ie=Array.isArray(X.value)?X.value:[X.value];let B=0;for(let $=0;$<ie.length;$++){const Y=ie[$],te=v(Y);typeof Y=="number"||typeof Y=="boolean"?(X.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,O+B,X.__data)):Y.isMatrix3?(X.__data[0]=Y.elements[0],X.__data[1]=Y.elements[1],X.__data[2]=Y.elements[2],X.__data[3]=0,X.__data[4]=Y.elements[3],X.__data[5]=Y.elements[4],X.__data[6]=Y.elements[5],X.__data[7]=0,X.__data[8]=Y.elements[6],X.__data[9]=Y.elements[7],X.__data[10]=Y.elements[8],X.__data[11]=0):(Y.toArray(X.__data,B),B+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,O,X.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(A,E,M,L){const b=A.value,R=E+"_"+M;if(L[R]===void 0)return typeof b=="number"||typeof b=="boolean"?L[R]=b:L[R]=b.clone(),!0;{const k=L[R];if(typeof b=="number"||typeof b=="boolean"){if(k!==b)return L[R]=b,!0}else if(k.equals(b)===!1)return k.copy(b),!0}return!1}function x(A){const E=A.uniforms;let M=0;const L=16;for(let R=0,k=E.length;R<k;R++){const S=Array.isArray(E[R])?E[R]:[E[R]];for(let C=0,X=S.length;C<X;C++){const O=S[C],ie=Array.isArray(O.value)?O.value:[O.value];for(let B=0,$=ie.length;B<$;B++){const Y=ie[B],te=v(Y),J=M%L;J!==0&&L-J<te.boundary&&(M+=L-J),O.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=te.storage}}}const b=M%L;return b>0&&(M+=L-b),A.__size=M,A.__cache={},this}function v(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function p(){for(const A in r)t.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Gp{constructor(e={}){const{canvas:n=IE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const _=new Uint32Array(4),x=new Int32Array(4);let v=null,m=null;const p=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;const E=this;let M=!1,L=0,b=0,R=null,k=-1,S=null;const C=new Pt,X=new Pt;let O=null;const ie=new et(0);let B=0,$=n.width,Y=n.height,te=1,J=null,ae=null;const oe=new Pt(0,0,$,Y),ue=new Pt(0,0,$,Y);let fe=!1;const ee=new Ip;let ce=!1,pe=!1,Se=null;const Me=new Ct,Re=new je,Le=new j,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return R===null?te:1}let y=i;function U(w,W){for(let Z=0;Z<w.length;Z++){const Q=w[Z],K=n.getContext(Q,W);if(K!==null)return K}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pc}`),n.addEventListener("webglcontextlost",de,!1),n.addEventListener("webglcontextrestored",F,!1),n.addEventListener("webglcontextcreationerror",ge,!1),y===null){const W=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&W.shift(),y=U(W,w),y===null)throw U(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),y.getShaderPrecisionFormat===void 0&&(y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let P,V,z,ne,re,T,h,g,I,N,G,q,D,H,le,me,se,Be,Te,Ce,be,_e,we,Ke;function pt(){P=new YM(y),V=new kM(y,P,e),P.init(V),_e=new PT(y,P,V),z=new wT(y,P,V),ne=new jM(y),re=new mT,T=new LT(y,P,z,re,V,_e,ne),h=new VM(E),g=new XM(E),I=new ix(y,V),we=new BM(y,P,I,V),N=new $M(y,I,ne,we),G=new QM(y,N,I,ne),Te=new JM(y,V,T),me=new GM(re),q=new pT(E,h,g,P,V,we,me),D=new UT(E,re),H=new gT,le=new yT(P,V),Be=new FM(E,h,g,z,G,d,l),se=new CT(E,G,V),Ke=new OT(y,ne,V,z),Ce=new HM(y,P,ne,V),be=new qM(y,P,ne,V),ne.programs=q.programs,E.capabilities=V,E.extensions=P,E.properties=re,E.renderLists=H,E.shadowMap=se,E.state=z,E.info=ne}pt();const Xe=new NT(E,y);this.xr=Xe,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const w=P.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=P.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize($,Y,!1))},this.getSize=function(w){return w.set($,Y)},this.setSize=function(w,W,Z=!0){if(Xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,Y=W,n.width=Math.floor(w*te),n.height=Math.floor(W*te),Z===!0&&(n.style.width=w+"px",n.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set($*te,Y*te).floor()},this.setDrawingBufferSize=function(w,W,Z){$=w,Y=W,te=Z,n.width=Math.floor(w*Z),n.height=Math.floor(W*Z),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,W,Z,Q){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,W,Z,Q),z.viewport(C.copy(oe).multiplyScalar(te).floor())},this.getScissor=function(w){return w.copy(ue)},this.setScissor=function(w,W,Z,Q){w.isVector4?ue.set(w.x,w.y,w.z,w.w):ue.set(w,W,Z,Q),z.scissor(X.copy(ue).multiplyScalar(te).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){z.setScissorTest(fe=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(w=!0,W=!0,Z=!0){let Q=0;if(w){let K=!1;if(R!==null){const xe=R.texture.format;K=xe===gp||xe===_p||xe===mp}if(K){const xe=R.texture.type,Ae=xe===Ci||xe===Mi||xe===mc||xe===ir||xe===hp||xe===pp,De=Be.getClearColor(),Oe=Be.getClearAlpha(),We=De.r,He=De.g,Ge=De.b;Ae?(_[0]=We,_[1]=He,_[2]=Ge,_[3]=Oe,y.clearBufferuiv(y.COLOR,0,_)):(x[0]=We,x[1]=He,x[2]=Ge,x[3]=Oe,y.clearBufferiv(y.COLOR,0,x))}else Q|=y.COLOR_BUFFER_BIT}W&&(Q|=y.DEPTH_BUFFER_BIT),Z&&(Q|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",de,!1),n.removeEventListener("webglcontextrestored",F,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),H.dispose(),le.dispose(),re.dispose(),h.dispose(),g.dispose(),G.dispose(),we.dispose(),Ke.dispose(),q.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",Gt),Xe.removeEventListener("sessionend",at),Se&&(Se.dispose(),Se=null),Vt.stop()};function de(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=ne.autoReset,W=se.enabled,Z=se.autoUpdate,Q=se.needsUpdate,K=se.type;pt(),ne.autoReset=w,se.enabled=W,se.autoUpdate=Z,se.needsUpdate=Q,se.type=K}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ve(w){const W=w.target;W.removeEventListener("dispose",ve),Ue(W)}function Ue(w){Pe(w),re.remove(w)}function Pe(w){const W=re.get(w).programs;W!==void 0&&(W.forEach(function(Z){q.releaseProgram(Z)}),w.isShaderMaterial&&q.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,Z,Q,K,xe){W===null&&(W=ye);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,De=Xp(w,W,Z,Q,K);z.setMaterial(Q,Ae);let Oe=Z.index,We=1;if(Q.wireframe===!0){if(Oe=N.getWireframeAttribute(Z),Oe===void 0)return;We=2}const He=Z.drawRange,Ge=Z.attributes.position;let _t=He.start*We,rn=(He.start+He.count)*We;xe!==null&&(_t=Math.max(_t,xe.start*We),rn=Math.min(rn,(xe.start+xe.count)*We)),Oe!==null?(_t=Math.max(_t,0),rn=Math.min(rn,Oe.count)):Ge!=null&&(_t=Math.max(_t,0),rn=Math.min(rn,Ge.count));const Tt=rn-_t;if(Tt<0||Tt===1/0)return;we.setup(K,Q,De,Z,Oe);let Vn,ht=Ce;if(Oe!==null&&(Vn=I.get(Oe),ht=be,ht.setIndex(Vn)),K.isMesh)Q.wireframe===!0?(z.setLineWidth(Q.wireframeLinewidth*Ve()),ht.setMode(y.LINES)):ht.setMode(y.TRIANGLES);else if(K.isLine){let Ye=Q.linewidth;Ye===void 0&&(Ye=1),z.setLineWidth(Ye*Ve()),K.isLineSegments?ht.setMode(y.LINES):K.isLineLoop?ht.setMode(y.LINE_LOOP):ht.setMode(y.LINE_STRIP)}else K.isPoints?ht.setMode(y.POINTS):K.isSprite&&ht.setMode(y.TRIANGLES);if(K.isBatchedMesh)ht.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)ht.renderInstances(_t,Tt,K.count);else if(Z.isInstancedBufferGeometry){const Ye=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,ao=Math.min(Z.instanceCount,Ye);ht.renderInstances(_t,Tt,ao)}else ht.render(_t,Tt)};function rt(w,W,Z){w.transparent===!0&&w.side===ni&&w.forceSinglePass===!1?(w.side=tn,w.needsUpdate=!0,zs(w,W,Z),w.side=Di,w.needsUpdate=!0,zs(w,W,Z),w.side=ni):zs(w,W,Z)}this.compile=function(w,W,Z=null){Z===null&&(Z=w),m=le.get(Z),m.init(),A.push(m),Z.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),w!==Z&&w.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights(E._useLegacyLights);const Q=new Set;return w.traverse(function(K){const xe=K.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){const De=xe[Ae];rt(De,Z,K),Q.add(De)}else rt(xe,Z,K),Q.add(xe)}),A.pop(),m=null,Q},this.compileAsync=function(w,W,Z=null){const Q=this.compile(w,W,Z);return new Promise(K=>{function xe(){if(Q.forEach(function(Ae){re.get(Ae).currentProgram.isReady()&&Q.delete(Ae)}),Q.size===0){K(w);return}setTimeout(xe,10)}P.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let st=null;function yt(w){st&&st(w)}function Gt(){Vt.stop()}function at(){Vt.start()}const Vt=new Dp;Vt.setAnimationLoop(yt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(w){st=w,Xe.setAnimationLoop(w),w===null?Vt.stop():Vt.start()},Xe.addEventListener("sessionstart",Gt),Xe.addEventListener("sessionend",at),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(W),W=Xe.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,W,R),m=le.get(w,A.length),m.init(),A.push(m),Me.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ee.setFromProjectionMatrix(Me),pe=this.localClippingEnabled,ce=me.init(this.clippingPlanes,pe),v=H.get(w,p.length),v.init(),p.push(v),In(w,W,0,E.sortObjects),v.finish(),E.sortObjects===!0&&v.sort(J,ae),this.info.render.frame++,ce===!0&&me.beginShadows();const Z=m.state.shadowsArray;if(se.render(Z,w,W),ce===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),Be.render(v,w),m.setupLights(E._useLegacyLights),W.isArrayCamera){const Q=W.cameras;for(let K=0,xe=Q.length;K<xe;K++){const Ae=Q[K];Mc(v,w,Ae,Ae.viewport)}}else Mc(v,w,W);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(E,w,W),we.resetDefaultState(),k=-1,S=null,A.pop(),A.length>0?m=A[A.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function In(w,W,Z,Q){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ee.intersectsSprite(w)){Q&&Le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Me);const Ae=G.update(w),De=w.material;De.visible&&v.push(w,Ae,De,Z,Le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ee.intersectsObject(w))){const Ae=G.update(w),De=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Le.copy(w.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Le.copy(Ae.boundingSphere.center)),Le.applyMatrix4(w.matrixWorld).applyMatrix4(Me)),Array.isArray(De)){const Oe=Ae.groups;for(let We=0,He=Oe.length;We<He;We++){const Ge=Oe[We],_t=De[Ge.materialIndex];_t&&_t.visible&&v.push(w,Ae,_t,Z,Le.z,Ge)}}else De.visible&&v.push(w,Ae,De,Z,Le.z,null)}}const xe=w.children;for(let Ae=0,De=xe.length;Ae<De;Ae++)In(xe[Ae],W,Z,Q)}function Mc(w,W,Z,Q){const K=w.opaque,xe=w.transmissive,Ae=w.transparent;m.setupLightsView(Z),ce===!0&&me.setGlobalState(E.clippingPlanes,Z),xe.length>0&&Wp(K,xe,W,Z),Q&&z.viewport(C.copy(Q)),K.length>0&&Vs(K,W,Z),xe.length>0&&Vs(xe,W,Z),Ae.length>0&&Vs(Ae,W,Z),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Wp(w,W,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const xe=V.isWebGL2;Se===null&&(Se=new or(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?Is:Ci,minFilter:Ps,samples:xe?4:0})),E.getDrawingBufferSize(Re),xe?Se.setSize(Re.x,Re.y):Se.setSize(Ul(Re.x),Ul(Re.y));const Ae=E.getRenderTarget();E.setRenderTarget(Se),E.getClearColor(ie),B=E.getClearAlpha(),B<1&&E.setClearColor(16777215,.5),E.clear();const De=E.toneMapping;E.toneMapping=Ri,Vs(w,Z,Q),T.updateMultisampleRenderTarget(Se),T.updateRenderTargetMipmap(Se);let Oe=!1;for(let We=0,He=W.length;We<He;We++){const Ge=W[We],_t=Ge.object,rn=Ge.geometry,Tt=Ge.material,Vn=Ge.group;if(Tt.side===ni&&_t.layers.test(Q.layers)){const ht=Tt.side;Tt.side=tn,Tt.needsUpdate=!0,yc(_t,Z,Q,rn,Tt,Vn),Tt.side=ht,Tt.needsUpdate=!0,Oe=!0}}Oe===!0&&(T.updateMultisampleRenderTarget(Se),T.updateRenderTargetMipmap(Se)),E.setRenderTarget(Ae),E.setClearColor(ie,B),E.toneMapping=De}function Vs(w,W,Z){const Q=W.isScene===!0?W.overrideMaterial:null;for(let K=0,xe=w.length;K<xe;K++){const Ae=w[K],De=Ae.object,Oe=Ae.geometry,We=Q===null?Ae.material:Q,He=Ae.group;De.layers.test(Z.layers)&&yc(De,W,Z,Oe,We,He)}}function yc(w,W,Z,Q,K,xe){w.onBeforeRender(E,W,Z,Q,K,xe),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(E,W,Z,Q,w,xe),K.transparent===!0&&K.side===ni&&K.forceSinglePass===!1?(K.side=tn,K.needsUpdate=!0,E.renderBufferDirect(Z,W,Q,K,w,xe),K.side=Di,K.needsUpdate=!0,E.renderBufferDirect(Z,W,Q,K,w,xe),K.side=ni):E.renderBufferDirect(Z,W,Q,K,w,xe),w.onAfterRender(E,W,Z,Q,K,xe)}function zs(w,W,Z){W.isScene!==!0&&(W=ye);const Q=re.get(w),K=m.state.lights,xe=m.state.shadowsArray,Ae=K.state.version,De=q.getParameters(w,K.state,xe,W,Z),Oe=q.getProgramCacheKey(De);let We=Q.programs;Q.environment=w.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(w.isMeshStandardMaterial?g:h).get(w.envMap||Q.environment),We===void 0&&(w.addEventListener("dispose",ve),We=new Map,Q.programs=We);let He=We.get(Oe);if(He!==void 0){if(Q.currentProgram===He&&Q.lightsStateVersion===Ae)return bc(w,De),He}else De.uniforms=q.getUniforms(w),w.onBuild(Z,De,E),w.onBeforeCompile(De,E),He=q.acquireProgram(De,Oe),We.set(Oe,He),Q.uniforms=De.uniforms;const Ge=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ge.clippingPlanes=me.uniform),bc(w,De),Q.needsLights=$p(w),Q.lightsStateVersion=Ae,Q.needsLights&&(Ge.ambientLightColor.value=K.state.ambient,Ge.lightProbe.value=K.state.probe,Ge.directionalLights.value=K.state.directional,Ge.directionalLightShadows.value=K.state.directionalShadow,Ge.spotLights.value=K.state.spot,Ge.spotLightShadows.value=K.state.spotShadow,Ge.rectAreaLights.value=K.state.rectArea,Ge.ltc_1.value=K.state.rectAreaLTC1,Ge.ltc_2.value=K.state.rectAreaLTC2,Ge.pointLights.value=K.state.point,Ge.pointLightShadows.value=K.state.pointShadow,Ge.hemisphereLights.value=K.state.hemi,Ge.directionalShadowMap.value=K.state.directionalShadowMap,Ge.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ge.spotShadowMap.value=K.state.spotShadowMap,Ge.spotLightMatrix.value=K.state.spotLightMatrix,Ge.spotLightMap.value=K.state.spotLightMap,Ge.pointShadowMap.value=K.state.pointShadowMap,Ge.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=He,Q.uniformsList=null,He}function Tc(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=ba.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function bc(w,W){const Z=re.get(w);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function Xp(w,W,Z,Q,K){W.isScene!==!0&&(W=ye),T.resetTextureUnits();const xe=W.fog,Ae=Q.isMeshStandardMaterial?W.environment:null,De=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:oi,Oe=(Q.isMeshStandardMaterial?g:h).get(Q.envMap||Ae),We=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,He=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ge=!!Z.morphAttributes.position,_t=!!Z.morphAttributes.normal,rn=!!Z.morphAttributes.color;let Tt=Ri;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Tt=E.toneMapping);const Vn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ht=Vn!==void 0?Vn.length:0,Ye=re.get(Q),ao=m.state.lights;if(ce===!0&&(pe===!0||w!==S)){const un=w===S&&Q.id===k;me.setState(Q,w,un)}let mt=!1;Q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ao.state.version||Ye.outputColorSpace!==De||K.isBatchedMesh&&Ye.batching===!1||!K.isBatchedMesh&&Ye.batching===!0||K.isInstancedMesh&&Ye.instancing===!1||!K.isInstancedMesh&&Ye.instancing===!0||K.isSkinnedMesh&&Ye.skinning===!1||!K.isSkinnedMesh&&Ye.skinning===!0||K.isInstancedMesh&&Ye.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ye.instancingColor===!1&&K.instanceColor!==null||Ye.envMap!==Oe||Q.fog===!0&&Ye.fog!==xe||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==me.numPlanes||Ye.numIntersection!==me.numIntersection)||Ye.vertexAlphas!==We||Ye.vertexTangents!==He||Ye.morphTargets!==Ge||Ye.morphNormals!==_t||Ye.morphColors!==rn||Ye.toneMapping!==Tt||V.isWebGL2===!0&&Ye.morphTargetsCount!==ht)&&(mt=!0):(mt=!0,Ye.__version=Q.version);let Bi=Ye.currentProgram;mt===!0&&(Bi=zs(Q,W,K));let Ac=!1,es=!1,oo=!1;const Nt=Bi.getUniforms(),Hi=Ye.uniforms;if(z.useProgram(Bi.program)&&(Ac=!0,es=!0,oo=!0),Q.id!==k&&(k=Q.id,es=!0),Ac||S!==w){Nt.setValue(y,"projectionMatrix",w.projectionMatrix),Nt.setValue(y,"viewMatrix",w.matrixWorldInverse);const un=Nt.map.cameraPosition;un!==void 0&&un.setValue(y,Le.setFromMatrixPosition(w.matrixWorld)),V.logarithmicDepthBuffer&&Nt.setValue(y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Nt.setValue(y,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,es=!0,oo=!0)}if(K.isSkinnedMesh){Nt.setOptional(y,K,"bindMatrix"),Nt.setOptional(y,K,"bindMatrixInverse");const un=K.skeleton;un&&(V.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Nt.setValue(y,"boneTexture",un.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Nt.setOptional(y,K,"batchingTexture"),Nt.setValue(y,"batchingTexture",K._matricesTexture,T));const lo=Z.morphAttributes;if((lo.position!==void 0||lo.normal!==void 0||lo.color!==void 0&&V.isWebGL2===!0)&&Te.update(K,Z,Bi),(es||Ye.receiveShadow!==K.receiveShadow)&&(Ye.receiveShadow=K.receiveShadow,Nt.setValue(y,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Hi.envMap.value=Oe,Hi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),es&&(Nt.setValue(y,"toneMappingExposure",E.toneMappingExposure),Ye.needsLights&&Yp(Hi,oo),xe&&Q.fog===!0&&D.refreshFogUniforms(Hi,xe),D.refreshMaterialUniforms(Hi,Q,te,Y,Se),ba.upload(y,Tc(Ye),Hi,T)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ba.upload(y,Tc(Ye),Hi,T),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Nt.setValue(y,"center",K.center),Nt.setValue(y,"modelViewMatrix",K.modelViewMatrix),Nt.setValue(y,"normalMatrix",K.normalMatrix),Nt.setValue(y,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const un=Q.uniformsGroups;for(let co=0,qp=un.length;co<qp;co++)if(V.isWebGL2){const Rc=un[co];Ke.update(Rc,Bi),Ke.bind(Rc,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function Yp(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function $p(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,W,Z){re.get(w.texture).__webglTexture=W,re.get(w.depthTexture).__webglTexture=Z;const Q=re.get(w);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,W){const Z=re.get(w);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,Z=0){R=w,L=W,b=Z;let Q=!0,K=null,xe=!1,Ae=!1;if(w){const Oe=re.get(w);Oe.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(y.FRAMEBUFFER,null),Q=!1):Oe.__webglFramebuffer===void 0?T.setupRenderTarget(w):Oe.__hasExternalTextures&&T.rebindTextures(w,re.get(w.texture).__webglTexture,re.get(w.depthTexture).__webglTexture);const We=w.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);const He=re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(He[W])?K=He[W][Z]:K=He[W],xe=!0):V.isWebGL2&&w.samples>0&&T.useMultisampledRTT(w)===!1?K=re.get(w).__webglMultisampledFramebuffer:Array.isArray(He)?K=He[Z]:K=He,C.copy(w.viewport),X.copy(w.scissor),O=w.scissorTest}else C.copy(oe).multiplyScalar(te).floor(),X.copy(ue).multiplyScalar(te).floor(),O=fe;if(z.bindFramebuffer(y.FRAMEBUFFER,K)&&V.drawBuffers&&Q&&z.drawBuffers(w,K),z.viewport(C),z.scissor(X),z.setScissorTest(O),xe){const Oe=re.get(w.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,Z)}else if(Ae){const Oe=re.get(w.texture),We=W||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Oe.__webglTexture,Z||0,We)}k=-1},this.readRenderTargetPixels=function(w,W,Z,Q,K,xe,Ae){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){z.bindFramebuffer(y.FRAMEBUFFER,De);try{const Oe=w.texture,We=Oe.format,He=Oe.type;if(We!==Tn&&_e.convert(We)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=He===Is&&(P.has("EXT_color_buffer_half_float")||V.isWebGL2&&P.has("EXT_color_buffer_float"));if(He!==Ci&&_e.convert(He)!==y.getParameter(y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(He===yi&&(V.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-Q&&Z>=0&&Z<=w.height-K&&y.readPixels(W,Z,Q,K,_e.convert(We),_e.convert(He),xe)}finally{const Oe=R!==null?re.get(R).__webglFramebuffer:null;z.bindFramebuffer(y.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(w,W,Z=0){const Q=Math.pow(2,-Z),K=Math.floor(W.image.width*Q),xe=Math.floor(W.image.height*Q);T.setTexture2D(W,0),y.copyTexSubImage2D(y.TEXTURE_2D,Z,0,0,w.x,w.y,K,xe),z.unbindTexture()},this.copyTextureToTexture=function(w,W,Z,Q=0){const K=W.image.width,xe=W.image.height,Ae=_e.convert(Z.format),De=_e.convert(Z.type);T.setTexture2D(Z,0),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,Z.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,Q,w.x,w.y,K,xe,Ae,De,W.image.data):W.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,Q,w.x,w.y,W.mipmaps[0].width,W.mipmaps[0].height,Ae,W.mipmaps[0].data):y.texSubImage2D(y.TEXTURE_2D,Q,w.x,w.y,Ae,De,W.image),Q===0&&Z.generateMipmaps&&y.generateMipmap(y.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(w,W,Z,Q,K=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=w.max.x-w.min.x+1,Ae=w.max.y-w.min.y+1,De=w.max.z-w.min.z+1,Oe=_e.convert(Q.format),We=_e.convert(Q.type);let He;if(Q.isData3DTexture)T.setTexture3D(Q,0),He=y.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)T.setTexture2DArray(Q,0),He=y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,Q.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ge=y.getParameter(y.UNPACK_ROW_LENGTH),_t=y.getParameter(y.UNPACK_IMAGE_HEIGHT),rn=y.getParameter(y.UNPACK_SKIP_PIXELS),Tt=y.getParameter(y.UNPACK_SKIP_ROWS),Vn=y.getParameter(y.UNPACK_SKIP_IMAGES),ht=Z.isCompressedTexture?Z.mipmaps[K]:Z.image;y.pixelStorei(y.UNPACK_ROW_LENGTH,ht.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,ht.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,w.min.x),y.pixelStorei(y.UNPACK_SKIP_ROWS,w.min.y),y.pixelStorei(y.UNPACK_SKIP_IMAGES,w.min.z),Z.isDataTexture||Z.isData3DTexture?y.texSubImage3D(He,K,W.x,W.y,W.z,xe,Ae,De,Oe,We,ht.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),y.compressedTexSubImage3D(He,K,W.x,W.y,W.z,xe,Ae,De,Oe,ht.data)):y.texSubImage3D(He,K,W.x,W.y,W.z,xe,Ae,De,Oe,We,ht),y.pixelStorei(y.UNPACK_ROW_LENGTH,Ge),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,_t),y.pixelStorei(y.UNPACK_SKIP_PIXELS,rn),y.pixelStorei(y.UNPACK_SKIP_ROWS,Tt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Vn),K===0&&Q.generateMipmaps&&y.generateMipmap(He),z.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),z.unbindTexture()},this.resetState=function(){L=0,b=0,R=null,z.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===_c?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===no?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?sr:Ep}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sr?Lt:oi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class FT extends Gp{}FT.prototype.isWebGL1Renderer=!0;class BT extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class HT{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Il,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new j;class Ga{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}setX(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ii(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ii(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ii(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ii(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=it(n,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Ln(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ga(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vp extends ks{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Rr;const ls=new j,Cr=new j,wr=new j,Lr=new je,cs=new je,zp=new Ct,Ea=new j,us=new j,xa=new j,fd=new je,rl=new je,dd=new je;class kT extends nn{constructor(e=new Vp){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new ci;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new HT(n,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new Ga(i,3,0,!1)),Rr.setAttribute("uv",new Ga(i,2,3,!1))}this.geometry=Rr,this.material=e,this.center=new je(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),zp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-wr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Sa(Ea.set(-.5,-.5,0),wr,a,Cr,r,s),Sa(us.set(.5,-.5,0),wr,a,Cr,r,s),Sa(xa.set(.5,.5,0),wr,a,Cr,r,s),fd.set(0,0),rl.set(1,0),dd.set(1,1);let o=e.ray.intersectTriangle(Ea,us,xa,!1,ls);if(o===null&&(Sa(us.set(-.5,.5,0),wr,a,Cr,r,s),rl.set(0,1),o=e.ray.intersectTriangle(Ea,xa,us,!1,ls),o===null))return;const l=e.ray.origin.distanceTo(ls);l<e.near||l>e.far||n.push({distance:l,point:ls.clone(),uv:_n.getInterpolation(ls,Ea,us,xa,fd,rl,dd,new je),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sa(t,e,n,i,r,s){Lr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(cs.x=s*Lr.x-r*Lr.y,cs.y=r*Lr.x+s*Lr.y):cs.copy(Lr),t.copy(e),t.x+=cs.x,t.y+=cs.y,t.applyMatrix4(zp)}class GT extends Zt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xc extends ci{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],l=[],c=new j,u=new je;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=n;f++,d+=3){const _=i+f/n*r;c.x=e*Math.cos(_),c.y=e*Math.sin(_),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Gn(a,3)),this.setAttribute("normal",new Gn(o,3)),this.setAttribute("uv",new Gn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}const hd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class VT{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const _=c[f],x=c[f+1];if(_.global&&(_.lastIndex=0),_.test(u))return x}return null}}}const zT=new VT;class Sc{constructor(e){this.manager=e!==void 0?e:zT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Sc.DEFAULT_MATERIAL_NAME="__DEFAULT";class WT extends Sc{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=hd.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=Ds("img");function l(){u(),hd.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class XT extends Sc{constructor(e){super(e)}load(e,n,i,r){const s=new Zt,a=new WT(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class YT{constructor(e,n,i=0,r=1/0){this.ray=new bp(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new vc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return Fl(e,this,i,n),i.sort(pd),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Fl(e[r],this,i,n);return i.sort(pd),i}}function pd(t,e){return t.distance-e.distance}function Fl(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,a=r.length;s<a;s++)Fl(r[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);const $T=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},qT={__name:"WorldMap",emits:["city-selected"],setup(t,{emit:e}){const n=e,i=Ft(),r=Ft([]),{locale:s}=Fs();let a,o,l,c,u=[];ja(()=>{d(),f(s.value)}),bi(s,v=>{f(v)});async function f(v){try{const m=await L0(Object.assign({"../assets/de-projects.json":()=>Wu(()=>import("./de-projects-q6RnUaUY.js"),[]),"../assets/en-projects.json":()=>Wu(()=>import("./en-projects-C2MrO49h.js"),[])}),`../assets/${v}-projects.json`,3);r.value=Object.entries(m.default).map(([p,A])=>({name:p,...A})),_()}catch(m){console.error(`Failed to load ${v}-projects.json`,m),r.value=[]}}function d(){const v=i.value.clientWidth,m=window.innerHeight*.8;a=new BT,o=new Np(v/-2,v/2,m/2,m/-2,.1,1e3),o.position.z=500,l=new Gp({antialias:!0}),l.setSize(v,m),l.setClearColor(16777215,1),i.value.appendChild(l.domElement),new XT().load("/worldmap-quiz/world-map.jpg",E=>{const b=new ro(1250,700),R=new ka({map:E,transparent:!0});c=new Bn(b,R),a.add(c),l.render(a,o)}),x()}function _(){var p;u.forEach(({mesh:A,tooltip:E})=>{a.remove(A),a.remove(E)}),u=[];const v=1250,m=700;for(const A of r.value){if(!A.title)continue;const E=(A.lon+180)/360,M=(90-A.lat)/180,L=(E-.5)*v,b=(.5-M)*m,R=new xc(8,32),S={education:3049182,health:2667619,environment:15844367}[(p=A.program)==null?void 0:p.toLowerCase()]||14432031,C=new ka({color:S}),X=new Bn(R,C);X.position.set(L,b,1),a.add(X);const O=document.createElement("canvas");O.width=300,O.height=80;const ie=O.getContext("2d");ie.fillStyle="rgba(0, 0, 0, 0.95)",ie.fillRect(0,0,O.width,O.height),ie.fillStyle="white",ie.font="50px Arial",ie.fillText(A.name,15,50);const B=new GT(O),$=new Vp({map:B}),Y=new kT($);Y.scale.set(80,20,1),Y.position.set(L,b+20,1.1),Y.visible=!1,a.add(Y),X.userData.tooltip=Y,u.push({mesh:X,tooltip:Y,name:A.name,coords:{lat:A.lat,lon:A.lon}})}l.render(a,o)}function x(){const v=new YT,m=new je;l.domElement.addEventListener("mousemove",p=>{const A=l.domElement.getBoundingClientRect();m.x=(p.clientX-A.left)/A.width*2-1,m.y=-((p.clientY-A.top)/A.height)*2+1,v.setFromCamera(m,o);const E=v.intersectObjects(u.map(M=>M.mesh));for(const M of u)M.tooltip.visible=!1;if(E.length>0){const M=E[0].object,L=u.find(b=>b.mesh===M);L&&(L.tooltip.visible=!0)}l.render(a,o)}),l.domElement.addEventListener("click",p=>{const A=l.domElement.getBoundingClientRect(),E=(p.clientX-A.left)/A.width*2-1,M=-((p.clientY-A.top)/A.height)*2+1,L=new je(E,M);v.setFromCamera(L,o);const b=v.intersectObjects([c,...u.map(R=>R.mesh)]);if(b.length>0){const R=b[0].object,k=u.find(S=>S.mesh===R);if(k){const S=r.value.find(C=>C.name===k.name);n("city-selected",{city:S.name,title:S.title,program:S.program,description:S.description,videoUrl:S.video,imageUrl:S.image})}}})}return(v,m)=>(Si(),Nr("div",{ref_key:"container",ref:i,class:"map-container"},null,512))}},jT=$T(qT,[["__scopeId","data-v-b1d1c024"]]),KT={key:0,class:"modal"},ZT={class:"modal-header"},JT={class:"title"},QT={class:"program"},eb={class:"description"},tb={class:"media"},nb=["src"],ib={key:1,controls:"",autoplay:"",muted:"",playsinline:"",width:"100%",height:"260"},rb=["src"],sb=["src"],ab={__name:"QuizModal",props:["city","title","program","description","videoUrl","imageUrl","visible"],setup(t){const e=t,n="/worldmap-quiz/",i=At(()=>e.city),r=At(()=>e.title),s=At(()=>e.program),a=At(()=>e.description),o=Ft(""),l=At(()=>e.videoUrl&&/(youtube\.com|youtu\.be)/.test(e.videoUrl));bi(()=>e.visible,f=>{var d;if(f&&l.value){const _=((d=e.videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/))==null?void 0:d[1])??"";o.value=`https://www.youtube.com/embed/${_}?autoplay=1&mute=1`}else o.value=""});const c=At(()=>!e.videoUrl||l.value?"":e.videoUrl.startsWith("http")?e.videoUrl:n+"img/"+e.videoUrl),u=At(()=>e.imageUrl?e.imageUrl.startsWith("http")?e.imageUrl:n+"img/"+e.imageUrl:"");return(f,d)=>(Si(),yh(j_,{name:"fade-slide"},{default:qd(()=>[t.visible?(Si(),Nr("div",KT,[ln("div",ZT,[ln("h2",null,Dr(i.value),1),ln("button",{class:"close-button",onClick:d[0]||(d[0]=_=>f.$emit("close"))},"×")]),ln("h1",JT,Dr(r.value),1),ln("h3",QT,Dr(s.value),1),ln("p",eb,Dr(a.value),1),ln("div",tb,[o.value?(Si(),Nr("iframe",{key:0,src:o.value,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:"",class:"youtube-iframe"},null,8,nb)):c.value?(Si(),Nr("video",ib,[ln("source",{src:c.value,type:"video/mp4"},null,8,rb)])):u.value?(Si(),Nr("img",{key:2,src:u.value,alt:"City Image",width:"100%",height:"260"},null,8,sb)):Vc("",!0)])])):Vc("",!0)]),_:1}))}},ob={class:"menu"},lb={__name:"App",setup(t){const e=Ft(null),n=Ft(""),i=Ft(""),r=Ft(""),s=Ft(""),a=Ft(""),{locale:o}=Fs(),l=Ft(o.value);function c(){o.value=o.value==="en"?"de":"en",l.value=o.value}function u({city:f,title:d,program:_,description:x,videoUrl:v,imageUrl:m}){e.value=f,n.value=d,i.value=_,r.value=x,s.value=v,a.value=m}return(f,d)=>(Si(),Nr("div",null,[ln("header",ob,[d[1]||(d[1]=ln("h1",null,"World Map Quiz",-1)),ln("button",{onClick:c},Dr(l.value.toUpperCase()),1)]),kt(jT,{onCitySelected:u}),kt(ab,{city:e.value,title:n.value,program:i.value,description:r.value,videoUrl:s.value,imageUrl:a.value,visible:!!e.value,onClose:d[0]||(d[0]=_=>e.value=null)},null,8,["city","title","program","description","videoUrl","imageUrl","visible"])]))}},cb={en:{question:"What country is this city in?"},de:{question:"In welchem Land liegt diese Stadt?"}},ub=g0({legacy:!1,locale:"en",messages:cb});vg(lb).use(ub).mount("#app");
