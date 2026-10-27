(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},t={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},n=`attached`,r=1e3,i=1001,a=1002,o=1003,s=1004,c=1005,l=1006,u=1007,d=1008,f=1009,p=1010,m=1011,h=1012,g=1013,_=1014,v=1015,y=1016,b=1017,x=1018,S=1020,C=35902,w=35899,T=1021,E=1022,D=1023,O=1026,k=1027,A=1028,ee=1029,te=1030,j=1031,ne=1033,re=33776,M=33777,ie=33778,ae=33779,oe=35840,se=35841,ce=35842,le=35843,ue=36196,de=37492,fe=37496,pe=37488,me=37489,he=37490,ge=37491,_e=37808,ve=37809,ye=37810,be=37811,xe=37812,Se=37813,Ce=37814,we=37815,Te=37816,Ee=37817,De=37818,Oe=37819,ke=37820,Ae=37821,je=36492,Me=36494,N=36495,Ne=36283,Pe=36284,Fe=36285,P=36286,Ie=2300,F=2301,I=2302,Le=2303,Re=2400,ze=2401,Be=2402,Ve=2500,He=3200,Ue=`srgb`,We=`srgb-linear`,Ge=`linear`,Ke=`srgb`,qe=7680,Je=35044,Ye=2e3;function Xe(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ze(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function $e(){let e=Qe(`canvas`);return e.style.display=`block`,e}var et={},tt=null;function nt(...e){let t=`THREE.`+e.shift();tt?tt(`log`,t,...e):console.log(t,...e)}function rt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=rt(e);let t=`THREE.`+e.shift();if(tt)tt(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=rt(e);let t=`THREE.`+e.shift();if(tt)tt(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function it(...e){let t=e.join(` `);t in et||(et[t]=!0,L(...e))}function at(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var ot={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},st=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ct=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),lt=1234567,ut=Math.PI/180,dt=180/Math.PI;function ft(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ct[e&255]+ct[e>>8&255]+ct[e>>16&255]+ct[e>>24&255]+`-`+ct[t&255]+ct[t>>8&255]+`-`+ct[t>>16&15|64]+ct[t>>24&255]+`-`+ct[n&63|128]+ct[n>>8&255]+`-`+ct[n>>16&255]+ct[n>>24&255]+ct[r&255]+ct[r>>8&255]+ct[r>>16&255]+ct[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function pt(e,t){return(e%t+t)%t}function mt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function ht(e,t,n){return e===t?0:(n-e)/(t-e)}function gt(e,t,n){return(1-n)*e+n*t}function _t(e,t,n,r){return gt(e,t,1-Math.exp(-n*r))}function vt(e,t=1){return t-Math.abs(pt(e,t*2)-t)}function yt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function bt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function xt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function St(e,t){return e+Math.random()*(t-e)}function Ct(e){return e*(.5-Math.random())}function wt(e){e!==void 0&&(lt=e);let t=lt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tt(e){return e*ut}function Et(e){return e*dt}function Dt(e){return(e&e-1)==0&&e!==0}function Ot(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function kt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function At(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:L(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function jt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function Mt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var Nt={DEG2RAD:ut,RAD2DEG:dt,generateUUID:ft,clamp:z,euclideanModulo:pt,mapLinear:mt,inverseLerp:ht,lerp:gt,damp:_t,pingpong:vt,smoothstep:yt,smootherstep:bt,randInt:xt,randFloat:St,randFloatSpread:Ct,seededRandom:wt,degToRad:Tt,radToDeg:Et,isPowerOfTwo:Dt,ceilPowerOfTwo:Ot,floorPowerOfTwo:kt,setQuaternionFromProperEuler:At,normalize:Mt,denormalize:jt},B=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(It.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(It.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ft.copy(this).projectOnVector(e),this.sub(Ft)}reflect(e){return this.sub(Ft.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ft=new V,It=new Pt,H=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lt.makeScale(e,t)),this}rotate(e){return this.premultiply(Lt.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lt=new H,Rt=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zt=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bt(){let e={enabled:!0,workingColorSpace:We,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Vt(e.r),e.g=Vt(e.g),e.b=Vt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Ht(e.r),e.g=Ht(e.g),e.b=Ht(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ge:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return it(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return it(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[We]:{primaries:t,whitePoint:r,transfer:Ge,toXYZ:Rt,fromXYZ:zt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:Rt,fromXYZ:zt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),e}var U=Bt();function Vt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Ht(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Ut,Wt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ut===void 0&&(Ut=Qe(`canvas`)),Ut.width=e.width,Ut.height=e.height;let t=Ut.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Ut}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Vt(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Vt(t[e]/255)*255):t[e]=Vt(t[e]);return{data:t,width:e.width,height:e.height}}else return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Gt=0,Kt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,`id`,{value:Gt++}),this.uuid=ft(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(qt(r[t].image)):e.push(qt(r[t]))}else e=qt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function qt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Wt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var Jt=0,Yt=new V,Xt=class e extends st{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=i,a=i,o=l,s=d,c=D,u=f,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,`id`,{value:Jt++}),this.uuid=ft(),this.name=``,this.source=new Kt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=u,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yt).x}get height(){return this.source.getSize(Yt).y}get depth(){return this.source.getSize(Yt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case r:e.x-=Math.floor(e.x);break;case i:e.x=e.x<0?0:1;break;case a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case r:e.y-=Math.floor(e.y);break;case i:e.y=e.y<0?0:1;break;case a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null,Xt.DEFAULT_MAPPING=300,Xt.DEFAULT_ANISOTROPY=1;var Zt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qt=class extends st{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:l,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t),this.textures=[];let r=new Xt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:l,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Kt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:`dispose`})}},$t=class extends Qt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},en=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},tn=class extends Xt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=o,this.minFilter=o,this.wrapR=i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},W=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/nn.setFromMatrixColumn(e,0).length(),i=1/nn.setFromMatrixColumn(e,1).length(),a=1/nn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(an,e,on)}lookAt(e,t,n){let r=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),sn.crossVectors(n,ln),sn.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),sn.crossVectors(n,ln)),sn.normalize(),cn.crossVectors(ln,sn),r[0]=sn.x,r[4]=cn.x,r[8]=ln.x,r[1]=sn.y,r[5]=cn.y,r[9]=ln.y,r[2]=sn.z,r[6]=cn.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],j=r[3],ne=r[7],re=r[11],M=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*A+c*ne,i[8]=a*C+o*D+s*ee+c*re,i[12]=a*w+o*O+s*te+c*M,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*A+f*ne,i[9]=l*C+u*D+d*ee+f*re,i[13]=l*w+u*O+d*te+f*M,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*A+g*ne,i[10]=p*C+m*D+h*ee+g*re,i[14]=p*w+m*O+h*te+g*M,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*A+b*ne,i[11]=_*C+v*D+y*ee+b*re,i[15]=_*w+v*O+y*te+b*M,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=nn.set(r[0],r[1],r[2]).length(),o=nn.set(r[4],r[5],r[6]).length(),s=nn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),rn.copy(this);let c=1/a,l=1/o,u=1/s;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=l,rn.elements[5]*=l,rn.elements[6]*=l,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,t.setFromRotationMatrix(rn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ye,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},nn=new V,rn=new W,an=new V(0,0,0),on=new V(1,1,1),sn=new V,cn=new V,ln=new V,un=new W,dn=new Pt,fn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return un.makeRotationFromQuaternion(e),this.setFromRotationMatrix(un,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dn.setFromEuler(this),this.setFromQuaternion(dn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fn.DEFAULT_ORDER=`XYZ`;var pn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},mn=0,hn=new V,gn=new Pt,_n=new W,vn=new V,yn=new V,bn=new V,xn=new Pt,Sn=new V(1,0,0),Cn=new V(0,1,0),wn=new V(0,0,1),Tn={type:`added`},En={type:`removed`},Dn={type:`childadded`,child:null},On={type:`childremoved`,child:null},kn=class e extends st{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,`id`,{value:mn++}),this.uuid=ft(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new fn,r=new Pt,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new W},normalMatrix:{value:new H}}),this.matrix=new W,this.matrixWorld=new W,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.multiply(gn),this}rotateOnWorldAxis(e,t){return gn.setFromAxisAngle(e,t),this.quaternion.premultiply(gn),this}rotateX(e){return this.rotateOnAxis(Sn,e)}rotateY(e){return this.rotateOnAxis(Cn,e)}rotateZ(e){return this.rotateOnAxis(wn,e)}translateOnAxis(e,t){return hn.copy(e).applyQuaternion(this.quaternion),this.position.add(hn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sn,e)}translateY(e){return this.translateOnAxis(Cn,e)}translateZ(e){return this.translateOnAxis(wn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vn.copy(e):vn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),yn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(yn,vn,this.up):_n.lookAt(vn,yn,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),gn.setFromRotationMatrix(_n),this.quaternion.premultiply(gn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(En),On.child=e,this.dispatchEvent(On),On.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tn),Dn.child=e,this.dispatchEvent(Dn),Dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,e,bn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yn,xn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};kn.DEFAULT_UP=new V(0,1,0),kn.DEFAULT_MATRIX_AUTO_UPDATE=!0,kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=class extends kn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},jn={type:`move`},Mn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Nn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Fn={h:0,s:0,l:0};function In(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,U.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=U.workingColorSpace){return this.r=e,this.g=t,this.b=n,U.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=U.workingColorSpace){if(e=pt(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=In(i,r,e+1/3),this.g=In(i,r,e),this.b=In(i,r,e-1/3)}return U.colorSpaceToWorking(this,r),this}setStyle(e,t=Ue){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){let n=Nn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vt(e.r),this.g=Vt(e.g),this.b=Vt(e.b),this}copyLinearToSRGB(e){return this.r=Ht(e.r),this.g=Ht(e.g),this.b=Ht(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return U.workingToColorSpace(Ln.copy(this),e),Math.round(z(Ln.r*255,0,255))*65536+Math.round(z(Ln.g*255,0,255))*256+Math.round(z(Ln.b*255,0,255))}getHexString(e=Ue){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=U.workingColorSpace){U.workingToColorSpace(Ln.copy(this),t);let n=Ln.r,r=Ln.g,i=Ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=U.workingColorSpace){return U.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Ue){U.workingToColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,r=Ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Pn),this.setHSL(Pn.h+e,Pn.s+t,Pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pn),e.getHSL(Fn);let n=gt(Pn.h,Fn.h,t),r=gt(Pn.s,Fn.s,t),i=gt(Pn.l,Fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new G;G.NAMES=Nn;var Rn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new G(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zn=class extends kn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Bn=new V,Vn=new V,Hn=new V,Un=new V,Wn=new V,Gn=new V,Kn=new V,qn=new V,Jn=new V,Yn=new V,Xn=new Zt,Zn=new Zt,Qn=new Zt,$n=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Bn.subVectors(e,t),r.cross(Bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Bn.subVectors(r,t),Vn.subVectors(n,t),Hn.subVectors(e,t);let a=Bn.dot(Bn),o=Bn.dot(Vn),s=Bn.dot(Hn),c=Vn.dot(Vn),l=Vn.dot(Hn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Un)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Un.x),s.addScaledVector(a,Un.y),s.addScaledVector(o,Un.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Xn.setScalar(0),Zn.setScalar(0),Qn.setScalar(0),Xn.fromBufferAttribute(e,t),Zn.fromBufferAttribute(e,n),Qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xn,i.x),a.addScaledVector(Zn,i.y),a.addScaledVector(Qn,i.z),a}static isFrontFacing(e,t,n,r){return Bn.subVectors(n,t),Vn.subVectors(e,t),Bn.cross(Vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),Bn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Wn.subVectors(r,n),Gn.subVectors(i,n),qn.subVectors(e,n);let s=Wn.dot(qn),c=Gn.dot(qn);if(s<=0&&c<=0)return t.copy(n);Jn.subVectors(e,r);let l=Wn.dot(Jn),u=Gn.dot(Jn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Wn,a);Yn.subVectors(e,i);let f=Wn.dot(Yn),p=Gn.dot(Yn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Gn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Kn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Kn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Wn,a).addScaledVector(Gn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},er=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,nr):nr.fromBufferAttribute(r,t),nr.applyMatrix4(e.matrixWorld),this.expandByPoint(nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),dr.subVectors(this.max,ur),ir.subVectors(e.a,ur),ar.subVectors(e.b,ur),or.subVectors(e.c,ur),sr.subVectors(ar,ir),cr.subVectors(or,ar),lr.subVectors(ir,or);let t=[0,-sr.z,sr.y,0,-cr.z,cr.y,0,-lr.z,lr.y,sr.z,0,-sr.x,cr.z,0,-cr.x,lr.z,0,-lr.x,-sr.y,sr.x,0,-cr.y,cr.x,0,-lr.y,lr.x,0];return!mr(t,ir,ar,or,dr)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ir,ar,or,dr))?!1:(fr.crossVectors(sr,cr),t=[fr.x,fr.y,fr.z],mr(t,ir,ar,or,dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},tr=[new V,new V,new V,new V,new V,new V,new V,new V],nr=new V,rr=new er,ir=new V,ar=new V,or=new V,sr=new V,cr=new V,lr=new V,ur=new V,dr=new V,fr=new V,pr=new V;function mr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){pr.fromArray(e,a);let o=i.x*Math.abs(pr.x)+i.y*Math.abs(pr.y)+i.z*Math.abs(pr.z),s=t.dot(pr),c=n.dot(pr),l=r.dot(pr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var hr=new V,gr=new B,_r=0,vr=class extends st{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,`id`,{value:_r++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Je,this.updateRanges=[],this.gpuType=v,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix3(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyMatrix4(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.applyNormalMatrix(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hr.fromBufferAttribute(this,t),hr.transformDirection(e),this.setXYZ(t,hr.x,hr.y,hr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),i=Mt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},yr=class extends vr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},br=class extends vr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},xr=class extends vr{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sr=new er,Cr=new V,wr=new V,Tr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Sr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);let t=Cr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Cr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(wr)),this.expandByPoint(Cr.copy(e.center).sub(wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Er=0,Dr=new W,Or=new kn,kr=new V,Ar=new er,jr=new er,Mr=new V,Nr=class e extends st{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,`id`,{value:Er++}),this.uuid=ft(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xe(e)?br:yr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dr.makeRotationFromQuaternion(e),this.applyMatrix4(Dr),this}rotateX(e){return Dr.makeRotationX(e),this.applyMatrix4(Dr),this}rotateY(e){return Dr.makeRotationY(e),this.applyMatrix4(Dr),this}rotateZ(e){return Dr.makeRotationZ(e),this.applyMatrix4(Dr),this}translate(e,t,n){return Dr.makeTranslation(e,t,n),this.applyMatrix4(Dr),this}scale(e,t,n){return Dr.makeScale(e,t,n),this.applyMatrix4(Dr),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kr).negate(),this.translate(kr.x,kr.y,kr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new xr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ar.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(this.boundingBox.min,Ar.min),this.boundingBox.expandByPoint(Mr),Mr.addVectors(this.boundingBox.max,Ar.max),this.boundingBox.expandByPoint(Mr)):(this.boundingBox.expandByPoint(Ar.min),this.boundingBox.expandByPoint(Ar.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Ar.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jr.setFromBufferAttribute(n),this.morphTargetsRelative?(Mr.addVectors(Ar.min,jr.min),Ar.expandByPoint(Mr),Mr.addVectors(Ar.max,jr.max),Ar.expandByPoint(Mr)):(Ar.expandByPoint(jr.min),Ar.expandByPoint(jr.max))}Ar.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mr.fromBufferAttribute(a,t),o&&(kr.fromBufferAttribute(e,t),Mr.add(kr)),r=Math.max(r,n.distanceToSquared(Mr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new vr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new vr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mr.fromBufferAttribute(e,t),Mr.normalize(),e.setXYZ(t,Mr.x,Mr.y,Mr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new vr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Je,this.updateRanges=[],this.version=0,this.uuid=ft()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ft()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Fr=new V,Ir=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyMatrix4(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.applyNormalMatrix(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fr.fromBufferAttribute(this,t),Fr.transformDirection(e),this.setXYZ(t,Fr.x,Fr.y,Fr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),i=Mt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){nt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new vr(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){nt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Lr=0,Rr=class extends st{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,`id`,{value:Lr++}),this.uuid=ft(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qe,this.stencilZFail=qe,this.stencilZPass=qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},zr=class extends Rr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,Vr=new V,Hr=new V,Ur=new V,Wr=new B,Gr=new B,Kr=new W,qr=new V,Jr=new V,Yr=new V,Xr=new B,Zr=new B,Qr=new B,$r=class extends kn{constructor(e=new zr){if(super(),this.isSprite=!0,this.type=`Sprite`,Br===void 0){Br=new Nr;let e=new Pr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute(`position`,new Ir(e,3,0,!1)),Br.setAttribute(`uv`,new Ir(e,2,3,!1))}this.geometry=Br,this.material=e,this.center=new B(.5,.5),this.count=1}raycast(e,t){e.camera===null&&R(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Hr.setFromMatrixScale(this.matrixWorld),Kr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Ur.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ei(qr.set(-.5,-.5,0),Ur,a,Hr,r,i),ei(Jr.set(.5,-.5,0),Ur,a,Hr,r,i),ei(Yr.set(.5,.5,0),Ur,a,Hr,r,i),Xr.set(0,0),Zr.set(1,0),Qr.set(1,1);let o=e.ray.intersectTriangle(qr,Jr,Yr,!1,Vr);if(o===null&&(ei(Jr.set(-.5,.5,0),Ur,a,Hr,r,i),Zr.set(0,1),o=e.ray.intersectTriangle(qr,Yr,Jr,!1,Vr),o===null))return;let s=e.ray.origin.distanceTo(Vr);s<e.near||s>e.far||t.push({distance:s,point:Vr.clone(),uv:$n.getInterpolation(Vr,qr,Jr,Yr,Xr,Zr,Qr,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ei(e,t,n,r,i,a){Wr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Gr.copy(Wr):(Gr.x=a*Wr.x-i*Wr.y,Gr.y=i*Wr.x+a*Wr.y),e.copy(t),e.x+=Gr.x,e.y+=Gr.y,e.applyMatrix4(Kr)}var ti=new V,ni=new V,ri=new V,ii=new V,ai=new V,oi=new V,si=new V,ci=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ni.copy(e).add(t).multiplyScalar(.5),ri.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(ni);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ri),o=ii.dot(this.direction),s=-ii.dot(ri),c=ii.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ni).addScaledVector(ri,d),f}intersectSphere(e,t){ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),r=ti.dot(ti)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,r,i){ai.subVectors(t,e),oi.subVectors(n,e),si.crossVectors(ai,oi);let a=this.direction.dot(si),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ii.subVectors(this.origin,e);let s=o*this.direction.dot(oi.crossVectors(ii,oi));if(s<0)return null;let c=o*this.direction.dot(ai.cross(ii));if(c<0||s+c>a)return null;let l=-o*ii.dot(si);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},K=class extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},li=new W,ui=new ci,di=new Tr,fi=new V,pi=new V,mi=new V,hi=new V,gi=new V,_i=new V,vi=new V,yi=new V,q=class extends kn{constructor(e=new Nr,t=new K){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){_i.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(gi.fromBufferAttribute(s,e),a?_i.addScaledVector(gi,r):_i.addScaledVector(gi.sub(t),r))}t.add(_i)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),di.copy(n.boundingSphere),di.applyMatrix4(i),ui.copy(e.ray).recast(e.near),!(di.containsPoint(ui.origin)===!1&&(ui.intersectSphere(di,fi)===null||ui.origin.distanceToSquared(fi)>(e.far-e.near)**2))&&(li.copy(i).invert(),ui.copy(e.ray).applyMatrix4(li),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ui)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=xi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=xi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=xi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=xi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function bi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;yi.copy(s),yi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(yi);return l<n.near||l>n.far?null:{distance:l,point:yi.clone(),object:e}}function xi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,pi),e.getVertexPosition(c,mi),e.getVertexPosition(l,hi);let u=bi(e,t,n,r,pi,mi,hi,vi);if(u){let e=new V;$n.getBarycoord(vi,pi,mi,hi,e),i&&(u.uv=$n.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=$n.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=$n.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};$n.getNormal(pi,mi,hi,t.normal),u.face=t,u.barycoord=e}return u}var Si=new Zt,Ci=new Zt,wi=new Zt,Ti=new Zt,Ei=new W,Di=new V,Oi=new Tr,ki=new W,Ai=new ci,ji=class extends q{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=n,this.bindMatrix=new W,this.bindMatrixInverse=new W,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new er),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Di),this.boundingBox.expandByPoint(Di)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Tr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Di),this.boundingSphere.expandByPoint(Di)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(r),e.ray.intersectsSphere(Oi)!==!1&&(ki.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(ki),!(this.boundingBox!==null&&Ai.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Zt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():L(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Ci.fromBufferAttribute(r.attributes.skinIndex,e),wi.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Si.copy(t),t.set(0,0,0,0)):(Si.set(...t,1),t.set(0,0,0)),Si.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=wi.getComponent(e);if(r!==0){let i=Ci.getComponent(e);Ei.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Ti.copy(Si).applyMatrix4(Ei),r)}}return t.isVector4&&(t.w=Si.w),t.applyMatrix4(this.bindMatrixInverse)}},Mi=class extends kn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Ni=class extends Xt{constructor(e=null,t=1,n=1,r,i,a,s,c,l=o,u=o,d,f){super(null,a,s,c,l,u,r,i,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pi=new W,Fi=new W,Ii=class e{constructor(e=[],t=[]){this.uuid=ft(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){L(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new W)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new W;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Fi;Pi.multiplyMatrices(i,t[r]),Pi.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ni(t,e,e,D,v);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(L(`Skeleton: No bone found with UUID:`,r),i=new Mi),this.bones.push(i),this.boneInverses.push(new W().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Li=class extends vr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ri=new W,zi=new W,Bi=[],Vi=new er,Hi=new W,Ui=new q,Wi=new Tr,Gi=class extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Li(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Hi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),Vi.copy(e.boundingBox).applyMatrix4(Ri),this.boundingBox.union(Vi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),Wi.copy(e.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(Wi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ui.geometry=this.geometry,Ui.material=this.material,Ui.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wi.copy(this.boundingSphere),Wi.applyMatrix4(n),e.ray.intersectsSphere(Wi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ri),zi.multiplyMatrices(n,Ri),Ui.matrixWorld=zi,Ui.raycast(e,Bi);for(let e=0,n=Bi.length;e<n;e++){let n=Bi[e];n.instanceId=i,n.object=this,t.push(n)}Bi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Li(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ni(new Float32Array(r*this.count),r,this.count,A,v));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ki=new V,qi=new V,Ji=new H,Yi=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ki.subVectors(n,t).cross(qi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Ki),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ji.getNormalMatrix(e),r=this.coplanarPoint(Ki).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new Tr,Zi=new B(.5,.5),Qi=new V,$i=class{constructor(e=new Yi,t=new Yi,n=new Yi,r=new Yi,i=new Yi,a=new Yi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ye,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476+Zi.distanceTo(e.center),Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Qi.x=r.normal.x>0?e.max.x:e.min.x,Qi.y=r.normal.y>0?e.max.y:e.min.y,Qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ea=class extends Rr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new G(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ta=new V,na=new V,ra=new W,ia=new ci,aa=new Tr,oa=new V,sa=new V,ca=class extends kn{constructor(e=new Nr,t=new ea){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)ta.fromBufferAttribute(t,e-1),na.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=ta.distanceTo(na);e.setAttribute(`lineDistance`,new xr(n,1))}else L(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),aa.radius+=i,e.ray.intersectsSphere(aa)===!1)return;ra.copy(r).invert(),ia.copy(e.ray).applyMatrix4(ra);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=la(this,e,ia,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=la(this,e,ia,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=la(this,e,ia,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=la(this,e,ia,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function la(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(ta.fromBufferAttribute(s,i),na.fromBufferAttribute(s,a),n.distanceSqToSegment(ta,na,oa,sa)>r)return;oa.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(oa);if(!(c<t.near||c>t.far))return{distance:c,point:sa.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var ua=new V,da=new V,fa=class extends ca{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ua.fromBufferAttribute(t,e),da.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ua.distanceTo(da);e.setAttribute(`lineDistance`,new xr(n,1))}else L(`LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},pa=class extends ca{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type=`LineLoop`}},ma=class extends Rr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ha=new W,ga=new ci,_a=new Tr,va=new V,ya=class extends kn{constructor(e=new Nr,t=new ma){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),_a.radius+=i,e.ray.intersectsSphere(_a)===!1)return;ha.copy(r).invert(),ga.copy(e.ray).applyMatrix4(ha);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);va.fromBufferAttribute(l,n),ba(va,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)va.fromBufferAttribute(l,a),ba(va,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ba(e,t,n,r,i,a,o){let s=ga.distanceSqToPoint(e);if(s<n){let n=new V;ga.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var xa=class extends Xt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sa=class extends Xt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ca=class extends Xt{constructor(e,t,n=_,r,i,a,s=o,c=o,l,u=O,d=1){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,i,a,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},wa=class extends Ca{constructor(e,t=_,n=301,r,i,a=o,s=o,c,l=O){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,i,a,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ta=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ea=class e extends Nr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new xr(c,3)),this.setAttribute(`normal`,new xr(l,3)),this.setAttribute(`uv`,new xr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Da=class e extends Nr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new xr(a,3)),this.setAttribute(`normal`,new xr(o,3)),this.setAttribute(`uv`,new xr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Oa=class e extends Nr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new xr(u,3)),this.setAttribute(`normal`,new xr(d,3)),this.setAttribute(`uv`,new xr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ka=class e extends Oa{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Aa=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){L(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new B:new V);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new V,r=[],i=[],a=[],o=new V,s=new W;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new V)}i[0]=new V,a[0]=new V;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(z(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(z(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}};function ja(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Ma=new V,Na=new V,Pa=new ja,Fa=new ja,Ia=new ja,La=class extends Aa{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new V){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Na.subVectors(r[0],r[1]).add(r[0]),c=Na);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Ma.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Ma),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Pa.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Fa.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ia.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Pa.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Fa.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ia.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Pa.calc(s),Fa.calc(s),Ia.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},Ra=class e extends Nr{constructor(e=[new B(0,-.5),new B(.5,0),new B(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=z(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new V,d=new B,f=new V,p=new V,m=new V,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new xr(a,3)),this.setAttribute(`uv`,new xr(o,2)),this.setAttribute(`normal`,new xr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},za=class e extends Nr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ba=class e extends Nr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new xr(s,3)),this.setAttribute(`normal`,new xr(c,3)),this.setAttribute(`uv`,new xr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Va=class e extends Nr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new xr(p,3)),this.setAttribute(`normal`,new xr(m,3)),this.setAttribute(`uv`,new xr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ha(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Wa(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(Wa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Ua(e){let t={};for(let n=0;n<e.length;n++){let r=Ha(e[n]);for(let e in r)t[e]=r[e]}return t}function Wa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ga(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ka(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:U.workingColorSpace}var qa={clone:Ha,merge:Ua},Ja=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ya=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xa=class extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ja,this.fragmentShader=Ya,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ha(e.uniforms),this.uniformsGroups=Ga(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Za=class extends Xa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Qa=class extends Rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$a=class extends Qa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new B(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,`reflectivity`,{get:function(){return z(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new G(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new G(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new G(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},eo=class extends Rr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new G(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},to=class extends Rr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},no=class extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=He,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ro=class extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function io(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function ao(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r}function oo(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i}function so(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0)if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push(...o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)}var co=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},lo=class extends co{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Re,endingEnd:Re}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ze:i=e,o=2*t-n;break;case Be:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ze:a=e,s=2*n-t;break;case Be:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},uo=class extends co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},fo=class extends co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},po=class extends co{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},mo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=io(t,this.TimeBufferType),this.values=io(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:io(e.times,Array),values:io(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new po(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ie:t=this.InterpolantFactoryMethodDiscrete;break;case F:t=this.InterpolantFactoryMethodLinear;break;case I:t=this.InterpolantFactoryMethodSmooth;break;case Le:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ie;case this.InterpolantFactoryMethodLinear:return F;case this.InterpolantFactoryMethodSmooth:return I;case this.InterpolantFactoryMethodBezier:return Le}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ze(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===I,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};mo.prototype.ValueTypeName=``,mo.prototype.TimeBufferType=Float32Array,mo.prototype.ValueBufferType=Float32Array,mo.prototype.DefaultInterpolation=F;var ho=class extends mo{constructor(e,t,n){super(e,t,n)}};ho.prototype.ValueTypeName=`bool`,ho.prototype.ValueBufferType=Array,ho.prototype.DefaultInterpolation=Ie,ho.prototype.InterpolantFactoryMethodLinear=void 0,ho.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends mo{constructor(e,t,n,r){super(e,t,n,r)}};go.prototype.ValueTypeName=`color`;var _o=class extends mo{constructor(e,t,n,r){super(e,t,n,r)}};_o.prototype.ValueTypeName=`number`;var vo=class extends co{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Pt.slerpFlat(i,0,a,c-o,a,c,s);return i}},yo=class extends mo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new vo(this.times,this.values,this.getValueSize(),e)}};yo.prototype.ValueTypeName=`quaternion`,yo.prototype.InterpolantFactoryMethodSmooth=void 0;var bo=class extends mo{constructor(e,t,n){super(e,t,n)}};bo.prototype.ValueTypeName=`string`,bo.prototype.ValueBufferType=Array,bo.prototype.DefaultInterpolation=Ie,bo.prototype.InterpolantFactoryMethodLinear=void 0,bo.prototype.InterpolantFactoryMethodSmooth=void 0;var xo=class extends mo{constructor(e,t,n,r){super(e,t,n,r)}};xo.prototype.ValueTypeName=`vector`;var So=class{constructor(e=``,t=-1,n=[],r=Ve){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=ft(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(wo(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i.userData=JSON.parse(e.userData||`{}`),i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let e=0,r=n.length;e!==r;++e)t.push(mo.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=ao(o);o=oo(o,1,c),s=oo(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new _o(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}static parseAnimation(e,t){if(L(`AnimationClip: parseAnimation() is deprecated and will be removed with r185`),!e)return R(`AnimationClip: No animation in JSONLoader data.`),null;let n=function(e,t,n,r,i){if(n.length!==0){let a=[],o=[];so(n,a,o,r),a.length!==0&&i.push(new e(t,a,o))}},r=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(!(!i||i.length===0))if(i[0].morphTargets){let e={},t;for(t=0;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let n in e){let e=[],a=[];for(let r=0;r!==i[t].morphTargets.length;++r){let r=i[t];e.push(r.time),a.push(+(r.morphTarget===n))}r.push(new _o(`.morphTargetInfluence[`+n+`]`,e,a))}s=e.length*a}else{let a=`.bones[`+t[e].name+`]`;n(xo,a+`.position`,i,`pos`,r),n(yo,a+`.quaternion`,i,`rot`,r),n(xo,a+`.scale`,i,`scl`,r)}}return r.length===0?null:new this(i,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Co(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return _o;case`vector`:case`vector2`:case`vector3`:case`vector4`:return xo;case`color`:return go;case`quaternion`:return yo;case`bool`:case`boolean`:return ho;case`string`:return bo}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function wo(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=Co(e.type);if(e.times===void 0){let t=[],n=[];so(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}var To={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Eo(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Eo(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Eo(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Do=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Oo=class{constructor(e){this.manager=e===void 0?Do:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Oo.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var ko={},Ao=class extends Error{constructor(e,t){super(e),this.response=t}},jo=class extends Oo{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=To.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(ko[e]!==void 0){ko[e].push({onLoad:t,onProgress:n,onError:r});return}ko[e]=[],ko[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&L(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=ko[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}else throw new Ao(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{To.add(`file:${e}`,t);let n=ko[e];delete ko[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=ko[e];if(n===void 0)throw this.manager.itemError(e),t;delete ko[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Mo=new WeakMap,No=class extends Oo{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=To.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Mo.get(a);e===void 0&&(e=[],Mo.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Qe(`img`);function s(){l(),t&&t(this);let n=Mo.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Mo.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),To.remove(`image:${e}`);let n=Mo.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Mo.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),To.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},Po=class extends Oo{constructor(e){super(e)}load(e,t,n,r){let i=new Xt,a=new No(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Fo=class extends kn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Io=class extends Fo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Lo=new W,Ro=new V,zo=new V,Bo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=f,this.map=null,this.mapPass=null,this.matrix=new W,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $i,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ro.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ro),zo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zo),t.updateMatrixWorld(),Lo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vo=new V,Ho=new Pt,Uo=new V,Wo=class extends kn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new W,this.projectionMatrix=new W,this.projectionMatrixInverse=new W,this.coordinateSystem=Ye,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vo,Ho,Uo),Uo.x===1&&Uo.y===1&&Uo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Ho,Uo.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Vo,Ho,Uo),Uo.x===1&&Uo.y===1&&Uo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vo,Ho,Uo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Go=new V,Ko=new B,qo=new B,Jo=class extends Wo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=dt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ut*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dt*2*Math.atan(Math.tan(ut*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Go.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Go.x,Go.y).multiplyScalar(-e/Go.z),Go.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Go.x,Go.y).multiplyScalar(-e/Go.z)}getViewSize(e,t){return this.getViewBounds(e,Ko,qo),t.subVectors(qo,Ko)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ut*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Yo=class extends Bo{constructor(){super(new Jo(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=dt*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Xo=class extends Fo{constructor(e,t,n=0,r=Math.PI/3,i=0,a=2){super(e,t),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.map=null,this.shadow=new Yo}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Zo=class extends Bo{constructor(){super(new Jo(90,1,.5,500)),this.isPointLightShadow=!0}},Qo=class extends Fo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Zo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$o=class extends Wo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},es=class extends Bo{constructor(){super(new $o(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ts=class extends Fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new es}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ns=class extends Fo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},rs=class{static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.slice(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},is=new WeakMap,as=class extends Oo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>`u`&&L(`ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&L(`ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=To.get(`image-bitmap:${e}`);if(a!==void 0){if(i.manager.itemStart(e),a.then){a.then(n=>{is.has(a)===!0?(r&&r(is.get(a)),i.manager.itemError(e),i.manager.itemEnd(e)):(t&&t(n),i.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,o.signal=typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let s=fetch(e,o).then(function(e){return e.blob()}).then(function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))}).then(function(n){To.add(`image-bitmap:${e}`,n),t&&t(n),i.manager.itemEnd(e)}).catch(function(t){r&&r(t),is.set(s,t),To.remove(`image-bitmap:${e}`),i.manager.itemError(e),i.manager.itemEnd(e)});To.add(`image-bitmap:${e}`,s),i.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},os=-90,ss=1,cs=class extends kn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jo(os,ss,e,t);r.layers=this.layers,this.add(r);let i=new Jo(os,ss,e,t);i.layers=this.layers,this.add(i);let a=new Jo(os,ss,e,t);a.layers=this.layers,this.add(a);let o=new Jo(os,ss,e,t);o.layers=this.layers,this.add(o);let s=new Jo(os,ss,e,t);s.layers=this.layers,this.add(s);let c=new Jo(os,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ls=class extends Jo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},us=`\\[\\]\\.:\\/`,ds=RegExp(`[`+us+`]`,`g`),fs=`[^`+us+`]`,ps=`[^`+us.replace(`\\.`,``)+`]`,ms=`((?:WC+[\\/:])*)`.replace(`WC`,fs),hs=`(WCOD+)?`.replace(`WCOD`,ps),gs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,fs),_s=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,fs),vs=RegExp(`^`+ms+hs+gs+_s+`$`),ys=[`material`,`materials`,`bones`,`map`],bs=class{constructor(e,t,n){let r=n||xs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ds,``)}static parseTrackName(e){let t=vs.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);ys.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xs.Composite=bs,xs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},xs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},xs.prototype.GetterByBindingType=[xs.prototype._getValue_direct,xs.prototype._getValue_array,xs.prototype._getValue_arrayElement,xs.prototype._getValue_toArray],xs.prototype.SetterByBindingTypeAndVersioning=[[xs.prototype._setValue_direct,xs.prototype._setValue_direct_setNeedsUpdate,xs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xs.prototype._setValue_array,xs.prototype._setValue_array_setNeedsUpdate,xs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xs.prototype._setValue_arrayElement,xs.prototype._setValue_arrayElement_setNeedsUpdate,xs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xs.prototype._setValue_fromArray,xs.prototype._setValue_fromArray_setNeedsUpdate,xs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ss=new W,Cs=class{constructor(e,t,n=0,r=1/0){this.ray=new ci(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new pn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):R(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ss.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ss),this}intersectObject(e,t=!0,n=[]){return Ts(e,this,n,t),n.sort(ws),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ts(e[r],this,n,t);return n.sort(ws),n}};function ws(e,t){return e.distance-t.distance}function Ts(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Ts(r[e],t,n,!0)}}var Es=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=z(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(z(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Ds=class extends st{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){L(`Controls: connect() now requires an element.`);return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Os(e,t,n,r){let i=ks(r);switch(n){case T:return e*t;case A:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case j:return e*t*2/i.components*i.byteLength;case E:return e*t*3/i.components*i.byteLength;case D:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case re:case M:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case se:case le:return Math.max(e,16)*Math.max(t,8)/4;case oe:case ce:return Math.max(e,8)*Math.max(t,8)/2;case ue:case de:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fe:case he:case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ye:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case De:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Oe:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case ke:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ae:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case je:case Me:case N:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ne:case Pe:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Fe:case P:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function ks(e){switch(e){case f:case p:return{byteLength:1,components:1};case h:case m:case y:return{byteLength:2,components:1};case b:case x:return{byteLength:2,components:4};case _:case g:case v:return{byteLength:4,components:1};case C:case w:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`184`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`184`);function As(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function js(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
	#include <morphinstance_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshlambert_vert:`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshnormal_vert:`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
	#include <morphinstance_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,points_vert:`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`},Y={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},Ms={basic:{uniforms:Ua([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:Ua([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:Ua([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:Ua([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:Ua([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new G(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:Ua([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:Ua([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:Ua([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:Ua([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:Ua([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:Ua([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:Ua([Y.common,Y.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:Ua([Y.lights,Y.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};Ms.physical={uniforms:Ua([Ms.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var Ns={r:0,b:0,g:0},Ps=new W,Fs=new H;Fs.set(-1,0,0,0,1,0,0,0,1);function Is(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new q(new Ea(1,1,1),new Xa({name:`BackgroundCubeMaterial`,uniforms:Ha(Ms.backgroundCube.uniforms),vertexShader:Ms.backgroundCube.vertexShader,fragmentShader:Ms.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ps.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Fs),l.material.toneMapped=U.getTransfer(i.colorSpace)!==Ke,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new za(2,2),new Xa({name:`BackgroundMaterial`,uniforms:Ha(Ms.background.uniforms),vertexShader:Ms.background.vertexShader,fragmentShader:Ms.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,`map`,{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=U.getTransfer(i.colorSpace)!==Ke,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ns,Ka(e)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ls(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Rs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function zs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Bs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Yi,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Vs=4,Hs=[.125,.215,.35,.446,.526,.582],Us=20,Ws=256,Gs=new $o,Ks=new G,qs=null,Js=0,Ys=0,Xs=!1,Zs=new V,Qs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Zs}=i;qs=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qs,Js,Ys),this._renderer.xr.enabled=Xs,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qs=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Ys=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:l,minFilter:l,generateMipmaps:!1,type:y,format:D,colorSpace:We,depthBuffer:!1},r=ec(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$s(r)),this._blurMaterial=rc(r,e,t),this._ggxMaterial=nc(r,e,t)}return r}_compileMaterial(e){let t=new q(new Nr,e);this._renderer.compile(t,Gs)}_sceneToCubeUV(e,t,n,r,i){let a=new Jo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Ks),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new q(new Ea,new K({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Ks),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;tc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ic());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;tc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Gs)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-Vs?n-d+Vs:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,tc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Gs),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,tc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Gs)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&R(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Us-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Us;m>Us&&L(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);let h=[],g=0;for(let e=0;e<Us;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];tc(t,3*v*(r>_-Vs?r-_+Vs:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Gs)}};function $s(e){let t=[],n=[],r=[],i=e,a=e-Vs+1+Hs.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-Vs?s=Hs[o-e+Vs-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Nr;h.setAttribute(`position`,new vr(f,3)),h.setAttribute(`uv`,new vr(p,2)),h.setAttribute(`faceIndex`,new vr(m,1)),r.push(new q(h,null)),i>Vs&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function ec(e,t,n){let r=new $t(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function tc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function nc(e,t,n){return new Xa({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function rc(e,t,n){let r=new Float32Array(Us),i=new V(0,1,0);return new Xa({name:`SphericalGaussianBlur`,defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ic(){return new Xa({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function ac(){return new Xa({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}var sc=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new xa(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ea(5,5,5),i=new Xa({name:`CubemapFromEquirect`,uniforms:Ha(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=l),new cs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function cc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new sc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Qs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Qs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function lc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&it(`WebGLRenderer: `+e+` extension not supported.`),t}}}function uc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?br:yr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function dc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function fc(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function pc(e,t,n){let r=new WeakMap,i=new Zt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new en(h,p,m,u);g.type=v,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function y(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function mc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var hc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function gc(e,t,n,r,i){let a=new $t(t,n,{type:e,depthBuffer:r,stencilBuffer:i,depthTexture:r?new Ca(t,n):void 0}),o=new $t(t,n,{type:y,depthBuffer:!1,stencilBuffer:!1}),s=new Nr;s.setAttribute(`position`,new xr([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new xr([0,2,0,0,2,0],2));let c=new Za({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new q(s,c),u=new $o(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,g=[],_=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<g.length;n++){let r=g[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){g=e,_=g.length>0&&g[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<g.length;e++){let r=g[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&g.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return _===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return _},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<g.length;i++){let a=g[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},U.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=hc[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var _c=new Xt,vc=new Ca(1,1),yc=new en,bc=new tn,xc=new xa,Sc=[],Cc=[],wc=new Float32Array(16),Tc=new Float32Array(9),Ec=new Float32Array(4);function Dc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Sc[i];if(a===void 0&&(a=new Float32Array(i),Sc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Oc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function kc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ac(e,t){let n=Cc[t];n===void 0&&(n=new Int32Array(t),Cc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function jc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oc(n,t))return;e.uniform2fv(this.addr,t),kc(n,t)}}function Nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Oc(n,t))return;e.uniform3fv(this.addr,t),kc(n,t)}}function Pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oc(n,t))return;e.uniform4fv(this.addr,t),kc(n,t)}}function Fc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Oc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),kc(n,t)}else{if(Oc(n,r))return;Ec.set(r),e.uniformMatrix2fv(this.addr,!1,Ec),kc(n,r)}}function Ic(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Oc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),kc(n,t)}else{if(Oc(n,r))return;Tc.set(r),e.uniformMatrix3fv(this.addr,!1,Tc),kc(n,r)}}function Lc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Oc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),kc(n,t)}else{if(Oc(n,r))return;wc.set(r),e.uniformMatrix4fv(this.addr,!1,wc),kc(n,r)}}function Rc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oc(n,t))return;e.uniform2iv(this.addr,t),kc(n,t)}}function Bc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Oc(n,t))return;e.uniform3iv(this.addr,t),kc(n,t)}}function Vc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oc(n,t))return;e.uniform4iv(this.addr,t),kc(n,t)}}function Hc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oc(n,t))return;e.uniform2uiv(this.addr,t),kc(n,t)}}function Wc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Oc(n,t))return;e.uniform3uiv(this.addr,t),kc(n,t)}}function Gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oc(n,t))return;e.uniform4uiv(this.addr,t),kc(n,t)}}function Kc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(vc.compareFunction=n.isReversedDepthBuffer()?518:515,a=vc):a=_c,n.setTexture2D(t||a,i)}function qc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||bc,i)}function Jc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||xc,i)}function Yc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||yc,i)}function Xc(e){switch(e){case 5126:return jc;case 35664:return Mc;case 35665:return Nc;case 35666:return Pc;case 35674:return Fc;case 35675:return Ic;case 35676:return Lc;case 5124:case 35670:return Rc;case 35667:case 35671:return zc;case 35668:case 35672:return Bc;case 35669:case 35673:return Vc;case 5125:return Hc;case 36294:return Uc;case 36295:return Wc;case 36296:return Gc;case 35678:case 36198:case 36298:case 36306:case 35682:return Kc;case 35679:case 36299:case 36307:return qc;case 35680:case 36300:case 36308:case 36293:return Jc;case 36289:case 36303:case 36311:case 36292:return Yc}}function Zc(e,t){e.uniform1fv(this.addr,t)}function Qc(e,t){let n=Dc(t,this.size,2);e.uniform2fv(this.addr,n)}function $c(e,t){let n=Dc(t,this.size,3);e.uniform3fv(this.addr,n)}function el(e,t){let n=Dc(t,this.size,4);e.uniform4fv(this.addr,n)}function tl(e,t){let n=Dc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function nl(e,t){let n=Dc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function rl(e,t){let n=Dc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function il(e,t){e.uniform1iv(this.addr,t)}function al(e,t){e.uniform2iv(this.addr,t)}function ol(e,t){e.uniform3iv(this.addr,t)}function sl(e,t){e.uniform4iv(this.addr,t)}function cl(e,t){e.uniform1uiv(this.addr,t)}function ll(e,t){e.uniform2uiv(this.addr,t)}function ul(e,t){e.uniform3uiv(this.addr,t)}function dl(e,t){e.uniform4uiv(this.addr,t)}function fl(e,t,n){let r=this.cache,i=t.length,a=Ac(n,i);Oc(r,a)||(e.uniform1iv(this.addr,a),kc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?vc:_c;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function pl(e,t,n){let r=this.cache,i=t.length,a=Ac(n,i);Oc(r,a)||(e.uniform1iv(this.addr,a),kc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||bc,a[e])}function ml(e,t,n){let r=this.cache,i=t.length,a=Ac(n,i);Oc(r,a)||(e.uniform1iv(this.addr,a),kc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||xc,a[e])}function hl(e,t,n){let r=this.cache,i=t.length,a=Ac(n,i);Oc(r,a)||(e.uniform1iv(this.addr,a),kc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||yc,a[e])}function gl(e){switch(e){case 5126:return Zc;case 35664:return Qc;case 35665:return $c;case 35666:return el;case 35674:return tl;case 35675:return nl;case 35676:return rl;case 5124:case 35670:return il;case 35667:case 35671:return al;case 35668:case 35672:return ol;case 35669:case 35673:return sl;case 5125:return cl;case 36294:return ll;case 36295:return ul;case 36296:return dl;case 35678:case 36198:case 36298:case 36306:case 35682:return fl;case 35679:case 36299:case 36307:return pl;case 35680:case 36300:case 36308:case 36293:return ml;case 36289:case 36303:case 36311:case 36292:return hl}}var _l=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xc(t.type)}},vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gl(t.type)}},yl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},bl=/(\w+)(\])?(\[|\.)?/g;function xl(e,t){e.seq.push(t),e.map[t.id]=t}function Sl(e,t,n){let r=e.name,i=r.length;for(bl.lastIndex=0;;){let a=bl.exec(r),o=bl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){xl(n,l===void 0?new _l(s,e,t):new vl(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new yl(s),xl(n,e)),n=e}}}var Cl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Sl(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function wl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Tl=37297,El=0;function Dl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ol=new H;function kl(e){U._getMatrix(Ol,U.workingColorSpace,e);let t=`mat3( ${Ol.elements.map(e=>e.toFixed(4))} )`;switch(U.getTransfer(e)){case Ge:return[t,`LinearTransferOETF`];case Ke:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Al(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Dl(e.getShaderSource(t),r)}else return i}function jl(e,t){let n=kl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Ml={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Nl(e,t){let n=Ml[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Pl=new V;function Fl(){return U.getLuminanceCoefficients(Pl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Pl.x.toFixed(4)}, ${Pl.y.toFixed(4)}, ${Pl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Il(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(zl).join(`
`)}function Ll(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Rl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function zl(e){return e!==``}function Bl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ul(e){return e.replace(Hl,Gl)}var Wl=new Map;function Gl(e,t){let n=J[t];if(n===void 0){let e=Wl.get(t);if(e!==void 0)n=J[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Ul(n)}var Kl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(e){return e.replace(Kl,Jl)}function Jl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Yl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Xl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Zl(e){return Xl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ql={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function $l(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Ql[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var eu={302:`ENVMAP_MODE_REFRACTION`};function tu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:eu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var nu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function ru(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:nu[e.combine]||`ENVMAP_BLENDING_NONE`}function iu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function au(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Zl(n),l=$l(n),u=tu(n),d=ru(n),f=iu(n),p=Il(n),m=Ll(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(zl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(zl).join(`
`),_.length>0&&(_+=`
`)):(g=[Yl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(zl).join(`
`),_=[Yl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:Nl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,jl(`linearToOutputTexel`,n.outputColorSpace),Fl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(zl).join(`
`)),o=Ul(o),o=Bl(o,n),o=Vl(o,n),s=Ul(s),s=Bl(s,n),s=Vl(s,n),o=ql(o),s=ql(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=wl(i,i.VERTEX_SHADER,y),S=wl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Al(i,x,`vertex`),n=Al(i,S,`fragment`);R(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Cl(i,h),T=Rl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Tl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=El++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var ou=0,su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new cu(e),t.set(e,n)),n}},cu=class{constructor(e){this.id=ou++,this.code=e,this.usedTimes=0}};function lu(e){return e===1030||e===37490||e===36285}function uu(e,t,n,r,i,a){let o=new pn,s=new su,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Ms[C];D=e.vertexShader,O=e.fragmentShader}else D=i.vertexShader,O=i.fragmentShader,s.update(i),k=s.getVertexShaderID(i),A=s.getFragmentShaderID(i);let ee=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),j=h.isInstancedMesh===!0,ne=h.isBatchedMesh===!0,re=!!i.map,M=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,de=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=pe&&!!i.anisotropyMap,be=me&&!!i.clearcoatMap,xe=me&&!!i.clearcoatNormalMap,Se=me&&!!i.clearcoatRoughnessMap,Ce=ge&&!!i.iridescenceMap,we=ge&&!!i.iridescenceThicknessMap,Te=_e&&!!i.sheenColorMap,Ee=_e&&!!i.sheenRoughnessMap,De=!!i.specularMap,Oe=!!i.specularColorMap,ke=!!i.specularIntensityMap,Ae=ve&&!!i.transmissionMap,je=ve&&!!i.thicknessMap,Me=!!i.gradientMap,N=!!i.alphaMap,Ne=i.alphaTest>0,Pe=!!i.alphaHash,Fe=!!i.extensions,P=0;i.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(P=e.toneMapping);let Ie={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ne,batchingColor:ne&&h._colorsTexture!==null,instancing:j,instancingColor:j&&h.instanceColor!==null,instancingMorph:j&&h.morphTexture!==null,outputColorSpace:ee===null?e.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:U.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:M,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&lu(i.normalMap.format),metalnessMap:de,roughnessMap:fe,anisotropy:pe,anisotropyMap:ye,clearcoat:me,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,dispersion:he,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:we,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:Oe,specularIntensityMap:ke,transmission:ve,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:N,alphaTest:Ne,alphaHash:Pe,combine:i.combine,mapUv:re&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:de&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:ye&&m(i.anisotropyMap.channel),clearcoatMapUv:be&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:Oe&&m(i.specularColorMap.channel),specularIntensityMapUv:ke&&m(i.specularIntensityMap.channel),transmissionMapUv:Ae&&m(i.transmissionMap.channel),thicknessMapUv:je&&m(i.thicknessMap.channel),alphaMapUv:N&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(re||N),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:h.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:P,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&U.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&U.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Fe&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Fe&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Ms[t];n=qa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new au(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function du(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function fu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function pu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function mu(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||fu),r.length>1&&r.sort(t||pu),i.length>1&&i.sort(t||pu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function hu(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new mu,e.set(t,[i])):n>=r.length?(i=new mu,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function gu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new V,color:new G};break;case`SpotLight`:n={position:new V,direction:new V,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function _u(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var vu=0;function yu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function bu(e){let t=new gu,n=_u(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new W,o=new W;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(yu);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=vu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function xu(e){let t=new bu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Su(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new xu(e),t.set(n,[a])):r>=i.length?(a=new xu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Cu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Tu=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Eu=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Du=new W,Ou=new V,ku=new V;function Au(e,t,n){let r=new $i,i=new B,a=new B,s=new Zt,c=new no,u=new ro,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:Cu,fragmentShader:wu}),h=m.clone();h.defines.HORIZONTAL_PASS=1;let g=new Nr;g.setAttribute(`position`,new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new q(g,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,c){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let h=S!==this.type;h&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){L(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;i.copy(p.mapSize);let g=p.getFrameExtents();i.multiply(g),a.copy(p.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(a.x=Math.floor(f/g.x),i.x=a.x*g.x,p.mapSize.x=a.x),i.y>f&&(a.y=Math.floor(f/g.y),i.y=a.y*g.y,p.mapSize.y=a.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||h===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new $t(i.x,i.y,{format:te,type:y,minFilter:l,magFilter:l,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Ca(i.x,i.y,v),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=O,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o}else d.isPointLight?(p.map=new sc(i.x),p.map.depthTexture=new wa(i.x,_)):(p.map=new $t(i.x,i.y),p.map.depthTexture=new Ca(i.x,i.y,_)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=O,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=l,p.map.depthTexture.magFilter=l):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);s.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),m.viewport(s)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Ou.setFromMatrixPosition(d.matrixWorld),e.position.copy(Ou),ku.copy(e.position),ku.add(Tu[t]),e.up.copy(Eu[t]),e.lookAt(ku),e.updateMatrixWorld(),n.makeTranslation(-Ou.x,-Ou.y,-Ou.z),Du.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Du,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);r=p.getFrustum(),T(n,c,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,c),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let a=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,h.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,h.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new $t(i.x,i.y,{format:te,type:y})),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,m,b,null),h.uniforms.shadow_pass.value=n.mapPass.texture,h.uniforms.resolution.value=n.mapSize,h.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,h,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,E)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)T(c[e],i,a,o,s)}function E(e){e.target.removeEventListener(`dispose`,E);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ju(e,t){function n(){let t=!1,n=new Zt,r=null,i=new Zt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ot[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),j=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),j=ne>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new Zt().fromArray(ae),ce=new Zt().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),de(e.CULL_FACE),ve(0);function de(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(de(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==k&&(j&&e.lineWidth(t),k=t)}function Ce(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+te-1),M!==t&&(e.activeTexture(t),M=t)}function Ee(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+te-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function De(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function N(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function P(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(t){return d[t]===void 0?e.getParameter(t):d[t]}function F(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Le(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:Fe,texImage3D:P,pixelStorei:F,getParameter:Ie,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Ne,texStorage3D:Pe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:N,scissor:I,viewport:Le,reset:Be}}function Mu(e,t,n,f,p,m,h){let g=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new B,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Qe(`canvas`)}function T(e,t,n){let r=1,i=Ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Ge:U.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function ee(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function te(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function j(e){let t=e.target;t.removeEventListener(`dispose`,j),re(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),ie(t)}function re(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&M(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function M(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function ie(t){let n=f.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),f.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let r=t.textures;for(let t=0,n=r.length;t<n;t++){let n=f.get(r[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(r[t])}f.remove(t)}let ae=0;function oe(){ae=0}function se(){return ae}function ce(e){ae=e}function le(){let e=ae;return e>=p.maxTextures&&L(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ae+=1,e}function ue(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function de(t,r){let i=f.get(t);if(t.isVideoTexture&&Fe(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&i.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(i,t,r);return}}else t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,i.__webglTexture,e.TEXTURE0+r)}function fe(t,r){let i=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version){Se(i,t,r);return}else t.isExternalTexture&&(i.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,i.__webglTexture,e.TEXTURE0+r)}function pe(t,r){let i=f.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&i.__version!==t.version){Se(i,t,r);return}n.bindTexture(e.TEXTURE_3D,i.__webglTexture,e.TEXTURE0+r)}function me(t,r){let i=f.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&i.__version!==t.version){Ce(i,t,r);return}n.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture,e.TEXTURE0+r)}let he={[r]:e.REPEAT,[i]:e.CLAMP_TO_EDGE,[a]:e.MIRRORED_REPEAT},ge={[o]:e.NEAREST,[s]:e.NEAREST_MIPMAP_NEAREST,[c]:e.NEAREST_MIPMAP_LINEAR,[l]:e.LINEAR,[u]:e.LINEAR_MIPMAP_NEAREST,[d]:e.LINEAR_MIPMAP_LINEAR},_e={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ve(n,r){if(r.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(r.magFilter===1006||r.magFilter===1007||r.magFilter===1005||r.magFilter===1008||r.minFilter===1006||r.minFilter===1007||r.minFilter===1005||r.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,he[r.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,he[r.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,he[r.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ge[r.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ge[r.minFilter]),r.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,_e[r.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(r.magFilter===1003||r.minFilter!==1005&&r.minFilter!==1008||r.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(r.anisotropy>1||f.get(r).__currentAnisotropy){let i=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,i.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(r.anisotropy,p.getMaxAnisotropy())),f.get(r).__currentAnisotropy=r.anisotropy}}}function ye(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,j));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=ue(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&M(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function be(e,t,n){return Math.floor(Math.floor(e/n)/t)}function xe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=be(n.start,r.width,4),c=be(t.start,r.width,4);n.start<=i+1&&a===c&&be(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Se(t,r,i){let a=e.TEXTURE_2D;(r.isDataArrayTexture||r.isCompressedArrayTexture)&&(a=e.TEXTURE_2D_ARRAY),r.isData3DTexture&&(a=e.TEXTURE_3D);let o=ye(t,r),s=r.source;n.bindTexture(a,t.__webglTexture,e.TEXTURE0+i);let c=f.get(s);if(s.version!==c.__version||o===!0){if(n.activeTexture(e.TEXTURE0+i),!(typeof ImageBitmap<`u`&&r.image instanceof ImageBitmap)){let t=U.getPrimaries(U.workingColorSpace),i=r.colorSpace===``?null:U.getPrimaries(r.colorSpace),a=r.colorSpace===``||t===i?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,a)}n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment);let t=T(r.image,!1,p.maxTextureSize);t=P(r,t);let l=m.convert(r.format,r.colorSpace),u=m.convert(r.type),d=A(r.internalFormat,l,u,r.normalized,r.colorSpace,r.isVideoTexture);ve(a,r);let f,h=r.mipmaps,g=r.isVideoTexture!==!0,_=c.__version===void 0||o===!0,v=s.dataReady,y=te(r,t);if(r.isDepthTexture)d=ee(r.format===k,r.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,d,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,null));else if(r.isDataTexture)if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data);r.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height),v&&xe(r,t,l,u)):n.texImage2D(e.TEXTURE_2D,0,d,t.width,t.height,0,l,u,t.data);else if(r.isCompressedTexture)if(r.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(f=h[i],r.format!==1023)if(l!==null)if(g){if(v)if(r.layerUpdates.size>0){let t=Os(f.width,f.height,r.format,r.type);for(let a of r.layerUpdates){let r=f.data.subarray(a*t/f.data.BYTES_PER_ELEMENT,(a+1)*t/f.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,f.width,f.height,1,l,r)}r.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,f.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,f.data,0,0);else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,f.width,f.height,t.depth,l,u,f.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,d,f.width,f.height,t.depth,0,l,u,f.data)}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,d,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)f=h[t],r.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,u,f.data):n.texImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,l,u,f.data):l===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,l,f.data):n.compressedTexImage2D(e.TEXTURE_2D,t,d,f.width,f.height,0,f.data)}else if(r.isDataArrayTexture)if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,d,t.width,t.height,t.depth),v)if(r.layerUpdates.size>0){let i=Os(t.width,t.height,r.format,r.type);for(let a of r.layerUpdates){let r=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,l,u,r)}r.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,d,t.width,t.height,t.depth,0,l,u,t.data);else if(r.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,d,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,l,u,t.data)):n.texImage3D(e.TEXTURE_3D,0,d,t.width,t.height,t.depth,0,l,u,t.data);else if(r.isFramebufferTexture){if(_)if(g)n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height);else{let r=t.width,i=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,d,r,i,0,l,u,null),r>>=1,i>>=1}}else if(r.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(r),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}let i=e.RGBA,a=e.RGBA,o=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,i,a,o,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ie(h[0]);n.texStorage2D(e.TEXTURE_2D,y,d,t.width,t.height)}for(let t=0,r=h.length;t<r;t++)f=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,l,u,f):n.texImage2D(e.TEXTURE_2D,t,d,l,u,f);r.generateMipmaps=!1}else if(g){if(_){let r=Ie(t);n.texStorage2D(e.TEXTURE_2D,y,d,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,l,u,t)}else n.texImage2D(e.TEXTURE_2D,0,d,l,u,t);E(r)&&D(a),c.__version=s.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function Ce(t,r,i){if(r.image.length!==6)return;let a=ye(t,r),o=r.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+i);let s=f.get(o);if(o.version!==s.__version||a===!0){n.activeTexture(e.TEXTURE0+i);let t=U.getPrimaries(U.workingColorSpace),c=r.colorSpace===``?null:U.getPrimaries(r.colorSpace),l=r.colorSpace===``||t===c?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,r.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,r.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,l);let u=r.isCompressedTexture||r.image[0].isCompressedTexture,d=r.image[0]&&r.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!u&&!d?f[e]=T(r.image[e],!0,p.maxCubemapSize):f[e]=d?r.image[e].image:r.image[e],f[e]=P(r,f[e]);let h=f[0],g=m.convert(r.format,r.colorSpace),_=m.convert(r.type),v=A(r.internalFormat,g,_,r.normalized,r.colorSpace),y=r.isVideoTexture!==!0,b=s.__version===void 0||a===!0,x=o.dataReady,S=te(r,h);ve(e.TEXTURE_CUBE_MAP,r);let C;if(u){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let i=0;i<C.length;i++){let a=C[i];r.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,_,a.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,g,_,a.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,0,0,a.width,a.height,g,a.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,i,v,a.width,a.height,0,a.data)}}}else{if(C=r.mipmaps,y&&b){C.length>0&&S++;let t=Ie(f[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(d){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(r)&&D(e.TEXTURE_CUBE_MAP),s.__version=o.version,r.onUpdate&&r.onUpdate(r)}t.__version=r.version}function we(t,r,i,a,o,s){let c=m.convert(i.format,i.colorSpace),l=m.convert(i.type),u=A(i.internalFormat,c,l,i.normalized,i.colorSpace),d=f.get(r),p=f.get(i);if(p.__renderTarget=r,!d.__hasExternalTextures){let t=Math.max(1,r.width>>s),i=Math.max(1,r.height>>s);o===e.TEXTURE_3D||o===e.TEXTURE_2D_ARRAY?n.texImage3D(o,s,u,t,i,r.depth,0,c,l,null):n.texImage2D(o,s,u,t,i,0,c,l,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Pe(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,a,o,p.__webglTexture,0,Ne(r)):(o===e.TEXTURE_2D||o>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&o<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,a,o,p.__webglTexture,s),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=ee(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Pe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=A(a.internalFormat,o,s,a.normalized,a.colorSpace);Pe(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ne(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ne(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ee(t,r,i){let a=r.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(r.depthTexture&&r.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let o=f.get(r.depthTexture);if(o.__renderTarget=r,(!o.__webglTexture||r.depthTexture.image.width!==r.width||r.depthTexture.image.height!==r.height)&&(r.depthTexture.image.width=r.width,r.depthTexture.image.height=r.height,r.depthTexture.needsUpdate=!0),a){if(o.__webglInit===void 0&&(o.__webglInit=!0,r.depthTexture.addEventListener(`dispose`,j)),o.__webglTexture===void 0){o.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,o.__webglTexture),ve(e.TEXTURE_CUBE_MAP,r.depthTexture);let t=m.convert(r.depthTexture.format),i=m.convert(r.depthTexture.type),a;r.depthTexture.format===1026?a=e.DEPTH_COMPONENT24:r.depthTexture.format===1027&&(a=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,a,r.width,r.height,0,t,i,null)}}else de(r.depthTexture,0);let s=o.__webglTexture,c=Ne(r),l=a?e.TEXTURE_CUBE_MAP_POSITIVE_X+i:e.TEXTURE_2D,u=r.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(r.depthTexture.format===1026)Pe(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else if(r.depthTexture.format===1027)Pe(r)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else throw Error(`Unknown depthTexture format`)}function De(t){let r=f.get(t),i=t.isWebGLCubeRenderTarget===!0;if(r.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(r.__depthDisposeCallback&&r.__depthDisposeCallback(),e){let t=()=>{delete r.__boundDepthTexture,delete r.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),r.__depthDisposeCallback=t}r.__boundDepthTexture=e}if(t.depthTexture&&!r.__autoAllocateDepthBuffer)if(i)for(let e=0;e<6;e++)Ee(r.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Ee(r.__webglFramebuffer[0],t,0):Ee(r.__webglFramebuffer,t,0)}else if(i){r.__webglDepthbuffer=[];for(let i=0;i<6;i++)if(n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[i]),r.__webglDepthbuffer[i]===void 0)r.__webglDepthbuffer[i]=e.createRenderbuffer(),Te(r.__webglDepthbuffer[i],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=r.__webglDepthbuffer[i];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let i=t.texture.mipmaps;if(i&&i.length>0?n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,r.__webglFramebuffer),r.__webglDepthbuffer===void 0)r.__webglDepthbuffer=e.createRenderbuffer(),Te(r.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=r.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,i)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Oe(t,n,r){let i=f.get(t);n!==void 0&&we(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&De(t)}function ke(t){let r=t.texture,i=f.get(t),a=f.get(r);t.addEventListener(`dispose`,ne);let o=t.textures,s=t.isWebGLCubeRenderTarget===!0,c=o.length>1;if(c||(a.__webglTexture===void 0&&(a.__webglTexture=e.createTexture()),a.__version=r.version,h.memory.textures++),s){i.__webglFramebuffer=[];for(let t=0;t<6;t++)if(r.mipmaps&&r.mipmaps.length>0){i.__webglFramebuffer[t]=[];for(let n=0;n<r.mipmaps.length;n++)i.__webglFramebuffer[t][n]=e.createFramebuffer()}else i.__webglFramebuffer[t]=e.createFramebuffer()}else{if(r.mipmaps&&r.mipmaps.length>0){i.__webglFramebuffer=[];for(let t=0;t<r.mipmaps.length;t++)i.__webglFramebuffer[t]=e.createFramebuffer()}else i.__webglFramebuffer=e.createFramebuffer();if(c)for(let t=0,n=o.length;t<n;t++){let n=f.get(o[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&Pe(t)===!1){i.__webglMultisampledFramebuffer=e.createFramebuffer(),i.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,i.__webglMultisampledFramebuffer);for(let n=0;n<o.length;n++){let r=o[n];i.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,i.__webglColorRenderbuffer[n]);let a=m.convert(r.format,r.colorSpace),s=m.convert(r.type),c=A(r.internalFormat,a,s,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),l=Ne(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,i.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(i.__webglDepthRenderbuffer=e.createRenderbuffer(),Te(i.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(s){n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture),ve(e.TEXTURE_CUBE_MAP,r);for(let n=0;n<6;n++)if(r.mipmaps&&r.mipmaps.length>0)for(let a=0;a<r.mipmaps.length;a++)we(i.__webglFramebuffer[n][a],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,a);else we(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(r)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(c){for(let r=0,a=o.length;r<a;r++){let a=o[r],s=f.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,s.__webglTexture),ve(c,a),we(i.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+r,c,0),E(a)&&D(c)}n.unbindTexture()}else{let o=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(o=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(o,a.__webglTexture),ve(o,r),r.mipmaps&&r.mipmaps.length>0)for(let n=0;n<r.mipmaps.length;n++)we(i.__webglFramebuffer[n],t,r,e.COLOR_ATTACHMENT0,o,n);else we(i.__webglFramebuffer,t,r,e.COLOR_ATTACHMENT0,o,0);E(r)&&D(o),n.unbindTexture()}t.depthBuffer&&De(t)}function Ae(e){let t=e.textures;for(let r=0,i=t.length;r<i;r++){let i=t[r];if(E(i)){let t=O(e),r=f.get(i).__webglTexture;n.bindTexture(t,r),D(t),n.unbindTexture()}}}let je=[],Me=[];function N(t){if(t.samples>0){if(Pe(t)===!1){let r=t.textures,i=t.width,a=t.height,o=e.COLOR_BUFFER_BIT,s=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,c=f.get(t),l=r.length>1;if(l)for(let t=0;t<r.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,c.__webglMultisampledFramebuffer);let u=t.texture.mipmaps;u&&u.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglFramebuffer);for(let n=0;n<r.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(o|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(o|=e.STENCIL_BUFFER_BIT)),l){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,c.__webglColorRenderbuffer[n]);let t=f.get(r[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,i,a,0,0,i,a,o,e.NEAREST),_===!0&&(je.length=0,Me.length=0,je.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(je.push(s),Me.push(s),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Me)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,je))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),l)for(let t=0;t<r.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,c.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,c.__webglColorRenderbuffer[t]);let i=f.get(r[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,c.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,i,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,c.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ne(e){return Math.min(p.maxSamples,e.samples)}function Pe(e){let n=f.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Fe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function P(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(U.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=le,this.resetTextureUnits=oe,this.getTextureUnits=se,this.setTextureUnits=ce,this.setTexture2D=de,this.setTexture2DArray=fe,this.setTexture3D=pe,this.setTextureCube=me,this.rebindTextures=Oe,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Nu(e,t){function n(n,r=``){let i,a=U.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Pu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Xa({vertexShader:Pu,fragmentShader:Fu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new za(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lu=class extends st{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,p=null,m=null,h=typeof XRWebGLBinding<`u`,g=new Iu,v={},y=t.getContextAttributes(),b=null,x=null,C=[],w=[],T=new B,E=null,A=new Jo;A.viewport=new Zt;let ee=new Jo;ee.viewport=new Zt;let te=[A,ee],j=new ls,ne=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new Mn,C[e]=t),t.getHandSpace()};function M(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,M),r.removeEventListener(`selectstart`,M),r.removeEventListener(`selectend`,M),r.removeEventListener(`squeeze`,M),r.removeEventListener(`squeezestart`,M),r.removeEventListener(`squeezeend`,M),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ne=null,re=null,g.reset();for(let e in v)delete v[e];e.setRenderTarget(b),p=null,d=null,u=null,r=null,x=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?p:d},this.getBinding=function(){return u===null&&h&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(b=e.getRenderTarget(),r.addEventListener(`select`,M),r.addEventListener(`selectstart`,M),r.addEventListener(`selectend`,M),r.addEventListener(`squeeze`,M),r.addEventListener(`squeezestart`,M),r.addEventListener(`squeezeend`,M),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),y.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),h&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?k:O,a=y.stencil?S:_);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new $t(d.textureWidth,d.textureHeight,{format:D,type:f,depthTexture:new Ca(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new $t(p.framebufferWidth,p.framebufferHeight,{format:D,type:f,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let oe=new V,se=new V;function ce(e,t,n){oe.setFromMatrixPosition(t.matrixWorld),se.setFromMatrixPosition(n.matrixWorld);let r=oe.distanceTo(se),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function le(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),j.near=ee.near=A.near=t,j.far=ee.far=A.far=n,(ne!==j.near||re!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),ne=j.near,re=j.far),j.layers.mask=e.layers.mask|6,A.layers.mask=j.layers.mask&-5,ee.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;le(j,i);for(let e=0;e<a.length;e++)le(a[e],i);a.length===2?ce(j,A,ee):j.projectionMatrix.copy(A.projectionMatrix),ue(e,j,i)};function ue(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=dt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(d===null&&p===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function(e){return v[e]};let de=null;function fe(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(x,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(x))}let o=te[n];o===void 0&&(o=new Jo,o.layers.enable(n),o.viewport=new Zt,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&h){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&g.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&h){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Ta,v[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}de&&de(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let pe=new As;pe.setAnimationLoop(fe),this.setAnimationLoop=function(e){de=e},this.dispose=function(){}}},Ru=new W,zu=new H;zu.set(-1,0,0,0,1,0,0,0,1);function Bu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ka(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ru.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(zu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Vu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):ArrayBuffer.isView(o)?i.__data.set(new o.constructor(o.buffer,o.byteOffset,i.__data.length)):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Hu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Uu=null;function Wu(){return Uu===null&&(Uu=new Ni(Hu,16,16,te,y),Uu.name=`DFG_LUT`,Uu.minFilter=l,Uu.magFilter=l,Uu.wrapS=i,Uu.wrapT=i,Uu.generateMipmaps=!1,Uu.needsUpdate=!0),Uu}var Gu=class{constructor(e={}){let{canvas:t=$e(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1,outputBufferType:m=f}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=n.getContextAttributes().alpha}else g=a;let v=m,C=new Set([ne,j,ee]),w=new Set([f,_,h,S,b,x]),T=new Uint32Array(4),E=new Int32Array(4),D=new V,O=null,k=null,A=[],te=[],re=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,ie=!1,ae=null;this._outputColorSpace=Ue;let oe=0,se=0,ce=null,le=-1,ue=null,de=new Zt,fe=new Zt,pe=null,me=new G(0),he=0,ge=t.width,_e=t.height,ve=1,ye=null,be=null,xe=new Zt(0,0,ge,_e),Se=new Zt(0,0,ge,_e),Ce=!1,we=new $i,Te=!1,Ee=!1,De=new W,Oe=new V,ke=new Zt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Me(){return ce===null?ve:1}let N=n;function Ne(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r184`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),N===null){let t=`webgl2`;if(N=Ne(t,e),N===null)throw Ne(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw R(`WebGLRenderer: `+e.message),e}let Pe,Fe,P,Ie,F,I,Le,Re,ze,Be,Ve,He,We,Ge,Ke,qe,Je,Xe,Ze,Qe,et,tt,rt;function it(){Pe=new lc(N),Pe.init(),et=new Nu(N,Pe),Fe=new zs(N,Pe,e,et),P=new ju(N,Pe),Fe.reversedDepthBuffer&&p&&P.buffers.depth.setReversed(!0),Ie=new fc(N),F=new du,I=new Mu(N,Pe,P,F,Fe,et,Ie),Le=new cc(M),Re=new js(N),tt=new Ls(N,Re),ze=new uc(N,Re,Ie,tt),Be=new mc(N,ze,Re,tt,Ie),Xe=new pc(N,Fe,I),Ke=new Bs(F),Ve=new uu(M,Le,Pe,Fe,tt,Ke),He=new Bu(M,F),We=new hu,Ge=new Su(Pe),Je=new Is(M,Le,P,Be,g,s),qe=new Au(M,Be,Fe),rt=new Vu(N,Ie,Fe,P),Ze=new Rs(N,Pe,Ie),Qe=new dc(N,Pe,Ie),Ie.programs=Ve.programs,M.capabilities=Fe,M.extensions=Pe,M.properties=F,M.renderLists=We,M.shadowMap=qe,M.state=P,M.info=Ie}it(),v!==1009&&(re=new gc(v,t.width,t.height,r,i));let ot=new Lu(M,N);this.xr=ot,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Pe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(e){e!==void 0&&(ve=e,this.setSize(ge,_e,!1))},this.getSize=function(e){return e.set(ge,_e)},this.setSize=function(e,n,r=!0){if(ot.isPresenting){L(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ge=e,_e=n,t.width=Math.floor(e*ve),t.height=Math.floor(n*ve),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),re!==null&&re.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ge*ve,_e*ve).floor()},this.setDrawingBufferSize=function(e,n,r){ge=e,_e=n,ve=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(v===1009){R(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}re.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(de)},this.getViewport=function(e){return e.copy(xe)},this.setViewport=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),P.viewport(de.copy(xe).multiplyScalar(ve).round())},this.getScissor=function(e){return e.copy(Se)},this.setScissor=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),P.scissor(fe.copy(Se).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(e){P.setScissorTest(Ce=e)},this.setOpaqueSort=function(e){ye=e},this.setTransparentSort=function(e){be=e},this.getClearColor=function(e){return e.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(ce!==null){let t=ce.texture.format;e=C.has(t)}if(e){let e=ce.texture.type,t=w.has(e),n=Je.getClearColor(),r=Je.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ae=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Je.dispose(),We.dispose(),Ge.dispose(),F.dispose(),Le.dispose(),Be.dispose(),tt.dispose(),rt.dispose(),Ve.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,ht),ot.removeEventListener(`sessionend`,gt),_t.stop()};function st(e){e.preventDefault(),nt(`WebGLRenderer: Context Lost.`),ie=!0}function ct(){nt(`WebGLRenderer: Context Restored.`),ie=!1;let e=Ie.autoReset,t=qe.enabled,n=qe.autoUpdate,r=qe.needsUpdate,i=qe.type;it(),Ie.autoReset=e,qe.enabled=t,qe.autoUpdate=n,qe.needsUpdate=r,qe.type=i}function lt(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){ft(e),F.remove(e)}function ft(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Ve.releaseProgram(e)}),e.isShaderMaterial&&Ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Ae);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=Dt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=Re.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Me()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Me()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh)if(Pe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function z(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,n),e.side=0,e.needsUpdate=!0,Ct(e,t,n),e.side=2):Ct(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),k=Ge.get(n),k.init(t),te.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];z(a,n,e),r.add(a)}else z(t,n,e),r.add(t)}),k=te.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){F.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Pe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let pt=null;function mt(e){pt&&pt(e)}function ht(){_t.stop()}function gt(){_t.start()}let _t=new As;_t.setAnimationLoop(mt),typeof self<`u`&&_t.setContext(self),this.setAnimationLoop=function(e){pt=e,ot.setAnimationLoop(e),e===null?_t.stop():_t.start()},ot.addEventListener(`sessionstart`,ht),ot.addEventListener(`sessionend`,gt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ie===!0)return;ae!==null&&ae.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=re!==null&&(ce===null||n)&&re.begin(M,ce);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(re===null||re.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(M,e,t,ce),k=Ge.get(e,te.length),k.init(t),k.state.textureUnits=I.getTextureUnits(),te.push(k),De.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),we.setFromProjectionMatrix(De,Ye,t.reversedDepth),Ee=this.localClippingEnabled,Te=Ke.init(this.clippingPlanes,Ee),O=We.get(e,A.length),O.init(),A.push(O),ot.enabled===!0&&ot.isPresenting===!0){let e=M.xr.getDepthSensingMesh();e!==null&&vt(e,t,-1/0,M.sortObjects)}vt(e,t,0,M.sortObjects),O.finish(),M.sortObjects===!0&&O.sort(ye,be),je=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,je&&Je.addToRenderList(O,e),this.info.render.frame++,Te===!0&&Ke.beginShadows();let i=k.state.shadowsArray;if(qe.render(i,e,t),Te===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&re.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];bt(n,r,e,a)}je&&Je.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];yt(O,e,n,n.viewport)}}else r.length>0&&bt(n,r,e,t),je&&Je.render(e),yt(O,e,t)}ce!==null&&se===0&&(I.updateMultisampleRenderTarget(ce),I.updateRenderTargetMipmap(ce)),r&&re.end(M),e.isScene===!0&&e.onAfterRender(M,e,t),tt.resetDefaultState(),le=-1,ue=null,te.pop(),te.length>0?(k=te[te.length-1],I.setTextureUnits(k.state.textureUnits),Te===!0&&Ke.setGlobalState(M.clippingPlanes,k.state.camera)):k=null,A.pop(),O=A.length>0?A[A.length-1]:null,ae!==null&&ae.renderEnd()};function vt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)k.pushLightProbeGrid(e);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||we.intersectsSprite(e)){r&&ke.setFromMatrixPosition(e.matrixWorld).applyMatrix4(De);let t=Be.update(e),i=e.material;i.visible&&O.push(e,t,i,n,ke.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||we.intersectsObject(e))){let t=Be.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ke.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere.center)),ke.applyMatrix4(e.matrixWorld).applyMatrix4(De)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&O.push(e,t,s,n,ke.z,o)}}else i.visible&&O.push(e,t,i,n,ke.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)vt(i[e],t,n,r)}function yt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),Te===!0&&Ke.setGlobalState(M.clippingPlanes,n),r&&P.viewport(de.copy(r)),i.length>0&&xt(i,t,n),a.length>0&&xt(a,t,n),o.length>0&&xt(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function bt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Pe.has(`EXT_color_buffer_half_float`)||Pe.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new $t(1,1,{generateMipmaps:!0,type:e?y:f,minFilter:d,samples:Math.max(4,Fe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:U.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||de;a.setSize(o.z*M.transmissionResolutionScale,o.w*M.transmissionResolutionScale);let s=M.getRenderTarget(),c=M.getActiveCubeFace(),l=M.getActiveMipmapLevel();M.setRenderTarget(a),M.getClearColor(me),he=M.getClearAlpha(),he<1&&M.setClearColor(16777215,.5),M.clear(),je&&Je.render(n);let u=M.toneMapping;M.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),Te===!0&&Ke.setGlobalState(M.clippingPlanes,r),xt(e,n,r),I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a),Pe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,St(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a))}M.setRenderTarget(s,c,l),M.setClearColor(me,he),p!==void 0&&(r.viewport=p),M.toneMapping=u}function xt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&St(o,t,n,s,l,c)}}function St(e,t,n,r,i,a){e.onBeforeRender(M,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(M,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,M.renderBufferDirect(n,t,r,i,e,a),i.side=2):M.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(M,t,n,r,i,a)}function Ct(e,t,n){t.isScene!==!0&&(t=Ae);let r=F.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=Ve.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=Ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Tt(e,s),d}else s.uniforms=Ve.getUniforms(e),ae!==null&&e.isNodeMaterial&&ae.build(e,n,s),e.onBeforeCompile(s,M),d=Ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ke.uniform),Tt(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=k.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function wt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Cl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Tt(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Et(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=Ae),I.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=ce===null?M.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:U.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(h=M.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=k.state.lights;if(Te===!0&&(Ee===!0||e!==ue)){let t=e===ue&&r.id===le;Ke.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ke.numPlanes||v.numIntersection!==Ke.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=k.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Ct(r,t,i),ae&&r.isNodeMaterial&&ae.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(P.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==le&&(le=r.id,C=!0),v.needsLights){let e=Et(k.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ue!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(N,`projectionMatrix`,e.projectionMatrix),T.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(N,Oe.setFromMatrixPosition(e.matrixWorld)),Fe.logarithmicDepthBuffer&&T.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),ue!==e&&(ue=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,I),y.state.spotShadowMap.length>0&&T.setValue(N,`spotShadowMap`,y.state.spotShadowMap,I),y.state.pointShadowMap.length>0&&T.setValue(N,`pointShadowMap`,y.state.pointShadowMap,I)),i.isSkinnedMesh){T.setOptional(N,i,`bindMatrix`),T.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(N,`boneTexture`,e.boneTexture,I))}i.isBatchedMesh&&(T.setOptional(N,i,`batchingTexture`),T.setValue(N,`batchingTexture`,i._matricesTexture,I),T.setOptional(N,i,`batchingIdTexture`),T.setValue(N,`batchingIdTexture`,i._indirectTexture,I),T.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(N,`batchingColorTexture`,i._colorsTexture,I));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Xe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=Wu()),C){if(T.setValue(N,`toneMappingExposure`,M.toneMappingExposure),v.needsLights&&Ot(E,w),a&&r.fog===!0&&He.refreshFogUniforms(E,a),He.refreshMaterialUniforms(E,r,ve,_e,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Cl.upload(N,wt(v),E,I)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Cl.upload(N,wt(v),E,I),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(N,`center`,i.center),T.setValue(N,`modelViewMatrix`,i.modelViewMatrix),T.setValue(N,`normalMatrix`,i.normalMatrix),T.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,x),rt.bind(n,x)}}return x}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let At=N.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){ce=e,oe=t,se=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest,P.viewport(de),P.scissor(fe),P.setScissorTest(pe),le=-1;return}else if(o.__webglFramebuffer===void 0)I.setupRenderTarget(e);else if(o.__hasExternalTextures)I.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);I.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&I.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,de.copy(e.viewport),fe.copy(e.scissor),pe=e.scissorTest}else de.copy(xe).multiplyScalar(ve).floor(),fe.copy(Se).multiplyScalar(ve).floor(),pe=Ce;if(n!==0&&(r=At),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(de),P.scissor(fe),P.setScissorTest(pe),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}le=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),!Fe.textureFormatReadable(c)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Fe.textureTypeReadable(l)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=ce===null?null:F.get(ce).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s),!Fe.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Fe.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,et.convert(l),et.convert(u),0);let f=ce===null?null:F.get(ce).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,f);let p=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await at(N,p,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,d),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.deleteBuffer(d),N.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;I.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()};let jt=N.createFramebuffer(),Mt=N.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(I.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(I.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(I.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,jt),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,Mt);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&I.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?I.setTextureCube(e,0):e.isData3DTexture?I.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?I.setTexture2DArray(e,0):I.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){oe=0,se=0,ce=null,P.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ye}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=U._getDrawingBufferColorSpace(e),t.unpackColorSpace=U._getUnpackColorSpace()}},Ku={zhang:{kind:`strike`,power:6,minRange:1,maxRange:1,cooldown:0},shi:{kind:`strike`,power:4,minRange:2,maxRange:3,cooldown:0},ruyao:{kind:`heal`,power:8,minRange:0,maxRange:2,cooldown:3},zhuyu:{kind:`item`,power:12,minRange:0,maxRange:1,cooldown:0},zhua:{kind:`strike`,power:5,minRange:1,maxRange:1,cooldown:0},yao:{kind:`strike`,power:4,minRange:1,maxRange:1,cooldown:0},panmu:{kind:`strike`,power:2,minRange:1,maxRange:2,cooldown:3,inflicts:`yun`,turns:1},sheyao:{kind:`strike`,power:4,minRange:1,maxRange:1,cooldown:0,inflicts:`zhong`,turns:2},pu:{kind:`strike`,power:9,minRange:1,maxRange:1,cooldown:0},ti:{kind:`cry`,power:0,minRange:0,maxRange:3,cooldown:3,inflicts:`huo`,turns:2}};function qu(e,t){return{id:`hero`,kind:`hero`,side:`player`,hp:24+4*(e-1),atk:Math.floor((e-1)/2),move:2,skills:t}}function Ju(e,t){let n=2*(t-1),r=Math.floor((t-1)/3);return e===`xingxing`?{id:`xingxing`,kind:e,side:`player`,hp:16+n,atk:r,move:3,skills:[`zhua`]}:{id:`xuangui`,kind:e,side:`player`,hp:22+n,atk:r,move:1,skills:[`yao`,`panmu`]}}var Yu={training:{enemies:[{id:`guaishe-1`,kind:`guaishe`,side:`enemy`,hp:10,atk:0,move:2,skills:[`sheyao`],x:4,y:1},{id:`guaishe-2`,kind:`guaishe`,side:`enemy`,hp:10,atk:0,move:2,skills:[`sheyao`],x:5,y:3}],spawns:[[1,1],[0,2],[1,3]]},boss:{enemies:[{id:`jiuweihu`,kind:`jiuweihu`,side:`enemy`,hp:80,atk:0,move:2,skills:[`pu`,`ti`],x:4,y:1,boss:!0}],spawns:[[1,1],[0,0],[1,2]]}};function Xu(e,t,n){return{turn:1,phase:`player`,units:[...t.map((t,n)=>({...t,x:e.spawns[n][0],y:e.spawns[n][1]})),...e.enemies.map(e=>({...e}))].map(e=>({...e,skills:e.skills.slice(),maxHp:e.hp,cooldowns:{},status:{},slowed:!1,out:!1,moved:!1,acted:!1})),protect:n.protect.slice(),zhuyu:n.zhuyu,rng:n.seed>>>0}}function Zu(e,t){let n=e.units.find(e=>e.id===t);if(!n)throw Error(`No unit ${t}`);return n}function Qu(e,t,n){return e.units.find(e=>!e.out&&e.x===t&&e.y===n)}var $u=(e,t)=>Math.abs(e.x-t.x)+Math.abs(e.y-t.y),ed=(e,t)=>e>=0&&t>=0&&e<6&&t<4;function td(e){return e.moved?0:e.slowed?Math.max(1,e.move-1):e.move}function nd(e,t){let n=Zu(e,t),r=new Map([[`${n.x},${n.y}`,[[n.x,n.y]]]]),i=[[[n.x,n.y]]];for(let t=0;t<td(n);t++){let t=[];for(let n of i){let[i,a]=n[n.length-1];for(let[o,s]of[[1,0],[-1,0],[0,1],[0,-1]]){let c=i+o,l=a+s,u=`${c},${l}`;if(!ed(c,l)||r.has(u)||Qu(e,c,l))continue;let d=[...n,[c,l]];r.set(u,d),t.push(d)}}i=t}return r}function rd(e,t,n){let r=Zu(e,t),i=Ku[n];if(!i||!r.skills.includes(n)||r.acted||(r.cooldowns[n]??0)>0||i.kind===`item`&&e.zhuyu<=0)return[];let a=e.units.filter(e=>!e.out);return i.kind===`strike`?a.filter(e=>e.side!==r.side&&$u(e,r)>=i.minRange&&$u(e,r)<=i.maxRange).map(e=>[e.x,e.y]):i.kind===`item`?a.filter(e=>e.side===r.side&&$u(e,r)<=i.maxRange&&e.hp<e.maxHp).map(e=>[e.x,e.y]):a.filter(e=>(i.kind===`cry`?e.side!==r.side:e.side===r.side&&e.hp<e.maxHp)&&$u(e,r)<=i.maxRange).length?[[r.x,r.y]]:[]}function id(e){return e.units.filter(e=>e.side===`player`&&!e.out&&!e.acted)}function ad(e){let t=e.rng=e.rng+1831565813>>>0;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function od(e){return{...e,protect:e.protect.slice(),units:e.units.map(e=>({...e,skills:e.skills.slice(),cooldowns:{...e.cooldowns},status:{...e.status}}))}}function sd(e,t,n){e.hp=Math.max(0,e.hp-t),n.push({type:`damage`,unit:e.id,amount:t,hp:e.hp}),e.hp===0&&(e.out=!0,n.push({type:`out`,unit:e.id}))}function cd(e,t,n,r,i){if(!t.out){if(t.side===`player`&&e.protect.includes(n)){i.push({type:`blocked`,unit:t.id,status:n});return}t.status[n]=Math.max(t.status[n]??0,r),i.push({type:`status`,unit:t.id,status:n})}}function ld(e,t,n,r,i,a){let o=Ku[n];if(a.push({type:`skill`,unit:t.id,skill:n,x:r,y:i}),o.kind===`strike`){let n=Qu(e,r,i);n&&(sd(n,o.power+t.atk,a),o.inflicts&&cd(e,n,o.inflicts,o.turns??1,a))}else if(o.kind===`cry`)for(let n of e.units)!n.out&&n.side!==t.side&&$u(n,t)<=o.maxRange&&cd(e,n,o.inflicts,o.turns??1,a);else if(o.kind===`heal`){for(let n of e.units)if(!n.out&&n.side===t.side&&$u(n,t)<=o.maxRange&&n.hp<n.maxHp){let e=Math.min(o.power,n.maxHp-n.hp);n.hp+=e,a.push({type:`heal`,unit:n.id,amount:e,hp:n.hp})}}else{let t=Qu(e,r,i);if(t){--e.zhuyu;let n=Math.min(o.power,t.maxHp-t.hp);t.hp+=n,a.push({type:`heal`,unit:t.id,amount:n,hp:t.hp})}}o.cooldown&&(t.cooldowns[n]=o.cooldown),t.moved=!0,t.acted=!0}function ud(e,t){let n=e.units.find(e=>e.id===`hero`);if(e.units.every(e=>e.side!==`enemy`||e.out))e.phase=`won`;else if(n&&n.out||e.units.every(e=>e.side!==`player`||e.out))e.phase=`lost`;else return!1;return t.push({type:`phase`,phase:e.phase,turn:e.turn}),!0}function dd(e,t,n){e.phase=t,n.push({type:`phase`,phase:t,turn:e.turn});for(let r of e.units)if(!(r.side!==t||r.out)){r.moved=!1,r.acted=!1;for(let e of Object.keys(r.cooldowns))r.cooldowns[e]=Math.max(0,r.cooldowns[e]-1);if(r.slowed=(r.status.zhong??0)>0,r.slowed&&--r.status.zhong,(r.status.yun??0)>0)--r.status.yun,r.moved=r.acted=!0,n.push({type:`skip`,unit:r.id,status:`yun`});else if((r.status.huo??0)>0){--r.status.huo,n.push({type:`skip`,unit:r.id,status:`huo`});let t=[...nd(e,r.id).values()].filter(e=>e.length<=2),i=t[Math.floor(ad(e)*t.length)],[a,o]=i[i.length-1];i.length>1&&n.push({type:`move`,unit:r.id,path:i}),r.x=a,r.y=o,r.moved=r.acted=!0;let s=r.skills.find(e=>Ku[e].kind===`strike`&&Ku[e].minRange===1&&!Ku[e].cooldown),c=e.units.filter(e=>!e.out&&e!==r&&$u(e,r)===1);if(s&&c.length){let t=c[Math.floor(ad(e)*c.length)];if(n.push({type:`skill`,unit:r.id,skill:s,x:t.x,y:t.y}),sd(t,Ku[s].power+r.atk,n),ud(e,n))return}}}}function fd(e,t){if(dd(e,`enemy`,t),e.phase===`enemy`){for(let n of e.units){if(n.side!==`enemy`||n.out||n.acted)continue;let r=()=>e.units.filter(e=>e.side===`player`&&!e.out),i=n.skills.find(e=>Ku[e].kind===`cry`);if(i&&rd(e,n.id,i).length){if(ld(e,n,i,n.x,n.y,t),ud(e,t))return;continue}let a=n.skills.find(e=>Ku[e].kind===`strike`),o=Ku[a].maxRange,s=(e,t)=>$u(e,t)*100+e.hp,c=null;for(let t of nd(e,n.id).values()){let[e,n]=t[t.length-1],i=r().filter(t=>$u(t,{x:e,y:n})<=o).sort((e,t)=>e.hp-t.hp)[0]??null,a=i?i.hp+t.length:1e3+Math.min(...r().map(t=>s(t,{x:e,y:n})))+t.length;(!c||a<c.score)&&(c={path:t,target:i,score:a})}if(c){if(c.path.length>1){t.push({type:`move`,unit:n.id,path:c.path});let[e,r]=c.path[c.path.length-1];n.x=e,n.y=r}if(c.target&&(ld(e,n,a,c.target.x,c.target.y,t),ud(e,t)))return}n.moved=n.acted=!0}e.turn+=1,dd(e,`player`,t),e.phase===`player`&&(id(e).length||fd(e,t))}}function pd(e,t){if(e.phase!==`player`)throw Error(`Not the player's turn (${e.phase})`);let n=od(e),r=[],i=Zu(n,t.unit);if(i.side!==`player`||i.out||i.acted)throw Error(`${i.id} cannot act`);if(t.type===`move`){let e=nd(n,i.id).get(`${t.x},${t.y}`);if(!e)throw Error(`${i.id} cannot reach ${t.x},${t.y}`);return e.length>1&&r.push({type:`move`,unit:i.id,path:e}),i.x=t.x,i.y=t.y,i.moved=!0,{state:n,events:r}}if(t.type===`skill`){if(!rd(n,i.id,t.skill).some(([e,n])=>e===t.x&&n===t.y))throw Error(`${i.id} cannot use ${t.skill} on ${t.x},${t.y}`);if(ld(n,i,t.skill,t.x,t.y,r),ud(n,r))return{state:n,events:r}}else i.moved=i.acted=!0;return id(n).length||fd(n,r),{state:n,events:r}}function md(e,t,n,r,i){let a=Zu(e,t),o=Ku[n],s=e.units.find(e=>!e.out&&e.x===r&&e.y===i);if(o.kind===`strike`&&s){let e=o.power+a.atk;return e*10+(s.hp<=e?50:0)+(o.inflicts===`yun`&&s.boss?60:0)}if(o.kind===`heal`){let t=e.units.filter(e=>e.side===`player`&&!e.out&&e.hp<e.maxHp*.6).length;return t?40+t*30:-1}return o.kind===`item`&&s&&s.hp<s.maxHp*.4?120:-1}function hd(e,t){let n=Zu(e,t),r={actions:[{type:`wait`,unit:t}],value:-1e9};for(let i of nd(e,t).values()){let[a,o]=i[i.length-1],s=i.length>1?pd(e,{type:`move`,unit:t,x:a,y:o}).state:e,c=s.units.filter(e=>e.side===`enemy`&&!e.out),l=Math.min(...c.map(e=>Math.abs(e.x-a)+Math.abs(e.y-o))),u=i.length>1?[{type:`move`,unit:t,x:a,y:o}]:[];-l>r.value&&(r={actions:[...u,{type:`wait`,unit:t}],value:-l});for(let e of n.skills)for(let[n,i]of rd(s,t,e)){let a=md(s,t,e,n,i);a>r.value&&(r={actions:[...u,{type:`skill`,unit:t,skill:e,x:n,y:i}],value:a})}}return r.actions}var gd={lushu:{creature:`lushu`,name:`鹿蜀`,source:`《南山经》{杻|niǔ}阳之山`,clauses:[{text:`其状如马`,part:`shape`,options:[`马`,`牛`,`羊`],gloss:`状：样子。“其状如马”：它的样子像马。`},{text:`而白首`,part:`head`,options:[`白首`,`黑首`,`赤首`],gloss:`首：头。“白首”：白色的头。`},{text:`其文如虎`,part:`body`,options:[`如虎`,`如豹`,`如鱼`],gloss:`文：花纹，后来写作“纹”。“其文如虎”：身上的花纹像老虎。`},{text:`而赤尾`,part:`tail`,options:[`赤尾`,`白尾`,`黑尾`],gloss:`赤：红色。“赤尾”：红色的尾巴。`}]}},_d={boyi:{name:`伯益`,figure:`boyi`},herbalist:{name:`采药人`,figure:`herbalist`},painter:{name:`画工`,figure:`painter`},villager:{name:`山民`,figure:`villager`},fisher:{name:`老渔夫`,figure:`fisher`},elder:{name:`哥哥`,figure:`elder`},younger:{name:`弟弟`,figure:`younger`},shanshen:{name:`鹊山山神`,figure:`shanshen`}},vd=[{kind:`say`,lines:[{who:`boyi`,text:`孩子，你来得正好。大禹要治理洪水，得先弄清天下的山和水。`},{who:`boyi`,text:`我们一路走，看到什么山、什么草木、什么鸟兽，都刻在竹简上。这些记录合起来，就是《山海经》。`},{who:`boyi`,text:`全书一共十八篇。我们先走南方第一列山——鹊山，从西海边的招摇之山，一直走到东海边。`},{who:`boyi`,text:`每到一座山，先读原文。读懂了，才知道去哪儿、带什么、怎么对付山里的东西。`},{who:`hero`,text:`我记住了：先读原文！`}]},{kind:`note`,text:`传说《山海经》是大禹和伯益写的（西汉刘歆《上山海经表》这么说）。今天的学者一般认为，它是战国到汉代的许多人陆续写成的。`}],yd=[{id:`lost-herbalist`,mountain:0,title:`雾里迷路的采药人`,giver:`herbalist`,about:[`zhuyu`,`migu`],xp:20,steps:[{kind:`say`,lines:[{who:`herbalist`,text:`雾太大了，我在山里转了一整天，找不到下山的路，肚子也饿得咕咕叫。`},{who:`boyi`,text:`原文里写着招摇之山的草木。你读一读，哪样能帮他？`}]},{kind:`quiz`,excerpt:`有草焉，其状如{韭|jiǔ}而青{华|huā}，其名曰祝余，食之不饥。`,question:`他饿了。哪种草“食之不饥”？`,options:[`祝余`,`迷{穀|gǔ}`,`桂`],gloss:`食之不饥：吃了它就不饿。`},{kind:`quiz`,excerpt:`有木焉，其状如{榖|gǔ}而黑理，其{华|huā}四照，其名曰迷{穀|gǔ}，佩之不迷。`,question:`他迷路了。哪种树“佩之不迷”？`,options:[`迷{穀|gǔ}`,`桂`,`祝余`],gloss:`佩：带在身上。佩之不迷：带着它就不会迷路。`},{kind:`say`,lines:[{who:`boyi`,text:`原文把它们的样子写得清清楚楚。照着原文去山里认，别认错了。`}]},{kind:`goal`,goal:{type:`find`,thing:`zhuyu`},tracker:`找祝余：“其状如{韭|jiǔ}而青{华|huā}”——像韭菜，开青色的花`,then:`now`},{kind:`goal`,goal:{type:`find`,thing:`migu`},tracker:`找迷{穀|gǔ}：“黑理”“其{华|huā}四照”——树皮有黑纹，花会放光`,then:`giver`},{kind:`say`,lines:[{who:`herbalist`,text:`带着迷穀，我认得路了！你采的祝余我们分着吃，迷穀枝你留着。`}]},{kind:`gain`,trinket:`migu`,items:{zhuyu:2}}]},{id:`shadow-walker`,mountain:0,title:`一会儿趴着、一会儿站着的影子`,giver:`herbalist`,about:[`xingxing`],xp:20,requires:[`lost-herbalist`],steps:[{kind:`say`,lines:[{who:`herbalist`,text:`刚才东边山坡上有个影子，一会儿趴着走，一会儿又像人一样站起来跑。`}]},{kind:`quiz`,excerpt:`有兽焉，其状如{禺|yù}而白耳，伏行人走，其名曰{狌狌|xīng xīng}，食之善走。`,question:`原文怎么说{狌狌|xīng xīng}走路的样子？`,options:[`伏行人走`,`振翅而飞`,`入水而游`],gloss:`伏行：趴着走。人走：像人一样站着走。`},{kind:`goal`,goal:{type:`meet`,creature:`xingxing`},tracker:`到东边山坡找那个“伏行人走”的影子`,then:`now`},{kind:`meet`,creature:`xingxing`},{kind:`say`,lines:[{who:`boyi`,text:`{狌狌|xīng xīng}跑得快，它想跟着我们走。遇上山里的怪东西，它会第一个冲上去。`},{who:`boyi`,text:`原文说“食之善走”，那是古人的记载。我们不吃它，交个朋友。`}]},{kind:`gain`,companion:`xingxing`}]},{id:`white-apes`,mountain:1,title:`白猿和亮晶晶的石头`,giver:`villager`,about:[`baiyuan`,`shuiyu`],xp:30,steps:[{kind:`say`,lines:[{who:`villager`,text:`这座山的白猿最爱亮晶晶的石头，玩够了就扔进溪里。你认得出那是什么石头吗？`}]},{kind:`quiz`,excerpt:`又东三百里，曰堂庭之山，多{棪|yǎn}木，多白猿，多水玉，多黄金。`,question:`原文说堂庭之山多什么亮晶晶的石头？`,options:[`水玉`,`青{雘|huò}`,`赤金`],gloss:`郭璞注：“水玉，今水晶也。”水玉就是水晶。`},{kind:`say`,lines:[{who:`villager`,text:`白猿就在东北边的{棪|yǎn}木林里。你去看看，它们手里拿的是不是水玉。`}]},{kind:`goal`,goal:{type:`meet`,creature:`baiyuan`},tracker:`到东北边的{棪|yǎn}木林里看看白猿`,then:`now`},{kind:`say`,lines:[{who:`boyi`,text:`它手里那块透亮的石头，就是水玉。白猿玩够了就扔进溪里。`},{who:`boyi`,text:`到溪边的石头堆旁边“搜一搜”，捡几块回去给山民看。`}]},{kind:`goal`,goal:{type:`search`,ore:`shuiyu`},tracker:`到溪边的石头堆旁搜一搜水玉，再回去找山民`,then:`giver`},{kind:`say`,lines:[{who:`villager`,text:`对，就是水玉！你多捡几块带上吧，以后用得着。`}]},{kind:`note`,text:`水玉就是今天说的水晶，是一种透明的石英。郭璞生活在晋代，那时候人们已经把它叫作“水晶”了。`},{kind:`gain`,items:{shuiyu:2}}]},{id:`training`,mountain:2,title:`不可以上：在山脚练功`,giver:`boyi`,about:[`baiyu`],xp:10,steps:[{kind:`quiz`,excerpt:`……多怪蛇，多怪木，不可以上。`,question:`原文说{猨|yuán}翼之山能不能爬上去？`,options:[`不可以上`,`可以爬上去`,`原文没说`],gloss:`不可以上：不能爬上去。`},{kind:`say`,lines:[{who:`boyi`,text:`我们不上山，绕着山脚走。可原文说这里“多怪蛇”，山脚的草里就有。`},{who:`boyi`,text:`正好练练手：竹杖打身边的，投石打远处的。碰到蛇就开打，把它打退就行，不用伤它。`}]},{kind:`goal`,goal:{type:`defeat`,creature:`guaishe`,n:1},tracker:`在山脚找怪蛇练一练（碰到它就开打）`,then:`now`},{kind:`say`,lines:[{who:`boyi`,text:`打得好！山脚还有蛇，想多练就再去找它们，不想打就绕开走。`}]}]},{id:`white-jade`,mountain:2,title:`溪滩上的白玉`,giver:`boyi`,about:[`baiyu`],xp:20,requires:[`training`],steps:[{kind:`quiz`,excerpt:`……其中多怪兽，水多怪鱼，多白玉……`,question:`原文说{猨|yuán}翼之山多什么玉？`,options:[`白玉`,`水玉`,`青{雘|huò}`],gloss:`白玉：白色的玉。`},{kind:`say`,lines:[{who:`boyi`,text:`山上我们上不去。可是山上的玉会被雨水、溪水冲下来，落在溪滩上。`},{who:`boyi`,text:`到南边溪滩的石头堆旁边，“搜一搜”。`}]},{kind:`goal`,goal:{type:`search`,ore:`baiyu`},tracker:`到南边溪滩的石头堆旁边搜一搜白玉`,then:`now`},{kind:`note`,text:`今天新疆和田的玉龙喀什河里，人们还在河滩上捡白玉。被河水从山上冲下来、磨得圆圆的玉，叫“籽料”。`},{kind:`gain`,items:{baiyu:1}}]},{id:`song-in-hills`,mountain:3,title:`山里的歌声`,giver:`villager`,about:[`lushu`],xp:20,steps:[{kind:`say`,lines:[{who:`villager`,text:`山那边常有人唱歌，可走近一看，只有一匹花马。`}]},{kind:`goal`,goal:{type:`meet`,creature:`lushu`},tracker:`翻过山口，到山那边（北面）找唱歌的“花马”`,then:`now`},{kind:`say`,lines:[{who:`boyi`,text:`就是它在唱！读一读{杻|niǔ}阳之山的原文，一句一句对一对，把它造出来看看。`}]},{kind:`build`,creature:`lushu`},{kind:`say`,lines:[{who:`boyi`,text:`“其音如谣”——它的叫声像人唱歌。记住这个调子，伙伴累了，你也唱给大家听。`}]},{kind:`gain`,skill:`ruyao`}]},{id:`deaf-fisher`,mountain:3,title:`耳背的老渔夫`,giver:`fisher`,about:[`xuangui`],xp:20,steps:[{kind:`say`,lines:[{who:`fisher`,text:`我年纪大了，耳朵越来越背。水里那种黑龟叫起来，我都听不见了。`}]},{kind:`quiz`,excerpt:`其中多玄龟，其状如龟而鸟首{虺|huǐ}尾，其名曰旋龟，其音如判木，佩之不聋，可以为底。`,question:`原文说带着旋龟有什么好处？`,options:[`佩之不聋`,`食之不饥`,`佩之不迷`],gloss:`聋：耳朵听不见。佩之不聋：带着它，耳朵就不会聋。`},{kind:`quiz`,excerpt:`……其名曰旋龟，其音如判木……`,question:`旋龟的叫声像什么？`,options:[`判木`,`婴儿`,`唱歌`],gloss:`判木：劈开木头。它的叫声像劈木头一样，“啪”的一声。`},{kind:`say`,lines:[{who:`fisher`,text:`那种龟就在这条水里。顺着水走，准能看见它。`}]},{kind:`quiz`,excerpt:`怪水出焉，而东流注于宪翼之水。`,question:`原文说怪水往哪边流？`,options:[`往东流`,`往西流`,`往南流`],gloss:`东流：向东流。注于：流进。怪水向东流进宪翼水。`},{kind:`goal`,goal:{type:`meet`,creature:`xuangui`},tracker:`顺着怪水往东找旋龟（“东流注于宪翼之水”）`,then:`now`},{kind:`meet`,creature:`xuangui`},{kind:`say`,lines:[{who:`fisher`,text:`这片龟甲是它背上自己脱落的，送给你。古人说带着它耳朵不聋。`},{who:`boyi`,text:`旋龟也想跟我们走。它叫一声像劈木头，能把敌人震住。`}]},{kind:`gain`,trinket:`guijia`,companion:`xuangui`}]},{id:`two-metals`,mountain:3,title:`南坡和北坡`,giver:`boyi`,about:[`chijin`,`baijin`],xp:20,steps:[{kind:`say`,lines:[{who:`boyi`,text:`这座山南北两面出的东西不一样。原文用两个字来说山的两面：“阳”和“阴”。`}]},{kind:`quiz`,excerpt:`又东三百七十里，曰{杻|niǔ}阳之山，其阳多赤金，其阴多白金。`,question:`“其阳”是山的哪一面？`,options:[`南面`,`北面`,`山顶`],gloss:`山的南面向着太阳，叫“阳”；北面背着太阳，叫“阴”。`},{kind:`goal`,goal:{type:`search`,ore:`chijin`},tracker:`在山的南面（阳）找个石头堆搜一搜`,then:`now`},{kind:`goal`,goal:{type:`search`,ore:`baijin`},tracker:`翻过山口，到山的北面（阴）再搜一搜`,then:`giver`},{kind:`say`,lines:[{who:`boyi`,text:`南坡搜到赤金，北坡搜到白金，和原文说的一样。`}]},{kind:`note`,text:`古人把各种金属都叫“金”：赤金一般认为是铜，白金是银。今天说的“白金”是铂，和古书里的不是一回事。`},{kind:`gain`,items:{chijin:1,baijin:1}}]},{id:`winter-fish`,mountain:4,title:`冬天找不到的鱼`,giver:`villager`,about:[`lu`],xp:30,steps:[{kind:`say`,lines:[{who:`villager`,text:`夏天常见一种长翅膀的怪鱼，一到冬天就一条也找不到了。我把水里都找遍了。`}]},{kind:`quiz`,excerpt:`有鱼焉，其状如牛，陵居，蛇尾有翼……`,question:`原文说{鯥|lù}住在哪里？`,options:[`山坡上（陵居）`,`水里`,`树上`],gloss:`陵：山坡、小山。陵居：住在山坡上。它是鱼，却不住在水里。`},{kind:`say`,lines:[{who:`boyi`,text:`难怪在水里找不到。去山坡上看看，照着原文认：像牛，有鳞，长着翅膀和蛇尾。`}]},{kind:`goal`,goal:{type:`find`,thing:`lu`},tracker:`找{鯥|lù}：“其状如牛，陵居，蛇尾有翼”——像牛，住在山坡上，长着蛇尾和翅膀`,then:`giver`},{kind:`say`,lines:[{who:`villager`,text:`它在山坡上睡着了？怪不得冬天找不到！`}]},{kind:`quiz`,excerpt:`……其名曰{鯥|lù}，冬死而夏生，食之无肿疾。`,question:`原文说{鯥|lù}冬天怎么了？`,options:[`冬死而夏生`,`冬天飞到南方`,`冬天变成了鸟`],gloss:`冬死而夏生：冬天像死了一样，夏天又活过来。郭璞说，它其实是在冬眠。`},{kind:`note`,text:`今天我们知道，很多动物会冬眠：天冷的时候躲起来，几乎不动也不吃东西，等天暖了再醒过来。`},{kind:`say`,lines:[{who:`villager`,text:`这是它夏天落下的一根羽毛。古人说它能治肿，被蛇咬了带上它试试。`}]},{kind:`gain`,trinket:`luyu`}]},{id:`jealous-brothers`,mountain:5,title:`互相嫉妒的兄弟`,giver:`elder`,about:[`lei`],xp:30,steps:[{kind:`say`,lines:[{who:`elder`,text:`弟弟什么都想要我的！`},{who:`younger`,text:`哥哥总说他比我强！`},{who:`boyi`,text:`{亶爰|chán yuán}之山不能上，我们在山脚水边看看。原文说这里有一种兽。`}]},{kind:`quiz`,excerpt:`有兽焉，其状如狸而有{髦|máo}，其名曰类……食者不妒。`,question:`原文说“类”长什么样？`,options:[`如狸而有{髦|máo}`,`如马而白首`,`如狐而九尾`],gloss:`狸：野猫。髦：长长的鬃毛。`},{kind:`say`,lines:[{who:`boyi`,text:`湖边常有野猫来喝水。哪一只是“类”？照着原文认一认，找到了回来告诉兄弟俩。`}]},{kind:`goal`,goal:{type:`find`,thing:`lei`},tracker:`找类：“其状如狸而有{髦|máo}”——像野猫，脖子上有长鬃毛`,then:`giver`},{kind:`say`,lines:[{who:`younger`,text:`长鬃毛的野猫？我先看见的！`},{who:`elder`,text:`明明是我先……算了，我们一起去看。`},{who:`boyi`,text:`原文说“食者不妒”，那是古人的说法。我们只看不吃。你们俩不吵了，就够了。`}]}]},{id:`night-watch`,mountain:6,title:`基山守夜`,giver:`boyi`,about:[`boyi`,`changfu`],xp:40,steps:[{kind:`say`,lines:[{who:`boyi`,text:`基山北坡多怪木，夜里风一吹，怪声四起。今晚在这里过夜，谁也别怕。`}]},{kind:`quiz`,excerpt:`有兽焉，其状如羊，九尾四耳，其目在背，其名曰{猼訑|bó yí}，佩之不畏。`,question:`原文说带着什么就不害怕？`,options:[`{猼訑|bó yí}`,`{𪁺|chǎng}{𩿧|fú}`,`鹿蜀`],gloss:`畏：害怕。佩之不畏：带着它就不害怕。`},{kind:`say`,lines:[{who:`boyi`,text:`原文说基山“其阴多怪木”。{猼訑|bó yí}就在北面的怪木林里，翻过山口去找它。`}]},{kind:`goal`,goal:{type:`meet`,creature:`boyi`},tracker:`翻过山口，到北面（阴）的怪木林里找{猼訑|bó yí}（像羊，九条尾巴）`,then:`now`},{kind:`say`,lines:[{who:`boyi`,text:`{猼訑|bó yí}在树上蹭掉了一撮毛，你收着。`}]},{kind:`gain`,trinket:`boyimao`},{kind:`quiz`,excerpt:`有鸟焉，其状如鸡而三首六目、六足三翼，其名曰{𪁺|chǎng}{𩿧|fú}，食之无卧。`,question:`{𪁺|chǎng}{𩿧|fú}有几个头？`,options:[`三首`,`一首`,`九首`],gloss:`三首六目、六足三翼：三个头、六只眼睛、六只脚、三只翅膀。`},{kind:`say`,lines:[{who:`boyi`,text:`南坡的草地上有几只像鸡的鸟。哪一只是{𪁺|chǎng}{𩿧|fú}？数一数头和脚，认出来了回来告诉我。`}]},{kind:`goal`,goal:{type:`find`,thing:`changfu`},tracker:`找{𪁺|chǎng}{𩿧|fú}：“其状如鸡而三首六目、六足三翼”——像鸡，三个头、六只脚、三只翅膀`,then:`giver`},{kind:`say`,lines:[{who:`boyi`,text:`{𪁺|chǎng}{𩿧|fú}三个头轮流醒着，今晚它替我们守夜。`},{who:`boyi`,text:`原文说“食之无卧”，吃了就不想睡觉。那是古人的记载，我们不吃它，请它帮忙。`}]}]},{id:`qingqiu-colors`,mountain:7,title:`画工要的颜料`,giver:`painter`,about:[`qinghuo`],xp:30,steps:[{kind:`say`,lines:[{who:`painter`,text:`我要把一路上的山和兽画成图，可是青色的颜料用完了。`},{who:`boyi`,text:`原文说青丘之山“其阴多青{雘|huò}”。青雘是一种青色的石头，磨成粉就是颜料。`}]},{kind:`quiz`,excerpt:`又东三百里，曰青丘之山，其阳多玉，其阴多青{雘|huò}。`,question:`山的“阴”是哪一面？`,options:[`北面`,`南面`,`山顶`],gloss:`山的北面背着太阳，叫“阴”；南面向着太阳，叫“阳”。`},{kind:`goal`,goal:{type:`search`,ore:`qinghuo`},tracker:`翻过山口，到山的北面（阴）石头堆旁搜青{雘|huò}`,then:`now`},{kind:`goal`,goal:{type:`search`,ore:`yu`},tracker:`再到山的南面（阳）搜一块玉，然后回去找画工`,then:`giver`},{kind:`say`,lines:[{who:`painter`,text:`青{雘|huò}有了，青山绿水都画得出来了！玉你留着，以后用得上。`}]},{kind:`note`,text:`为什么南坡叫“阳”？我们住在北半球，中午的太阳总在南边的天上，山的南坡晒得到太阳，北坡常在阴影里。河正好反过来：河的北岸叫“阳”。洛阳就在洛水的北边。`},{kind:`gain`,items:{yu:1}}]},{id:`crying-forest`,mountain:7,title:`夜里的婴儿哭声`,giver:`villager`,about:[`jiuweihu`,`guanguan`,`chiru`],xp:60,steps:[{kind:`say`,lines:[{who:`villager`,text:`一到晚上，北边的林子里就有婴儿在哭。进去找的人都迷迷糊糊的，好几个人走丢了。`}]},{kind:`quiz`,excerpt:`有兽焉，其状如狐而九尾，其音如婴儿，能食人……`,question:`原文里，谁的叫声“如婴儿”？`,options:[`九尾狐`,`灌灌`,`赤{鱬|rú}`],gloss:`其音如婴儿：它的叫声像婴儿哭。`},{kind:`say`,lines:[{who:`boyi`,text:`那哭声会让人迷惑。再读一读：青丘之山有什么能防迷惑？`}]},{kind:`quiz`,excerpt:`有鸟焉，其状如{鸠|jiū}，其音若呵，名曰灌灌，佩之不惑。`,question:`带着什么就不会被迷惑？`,options:[`灌灌`,`九尾狐`,`赤{鱬|rú}`],gloss:`惑：迷惑、糊涂。佩之不惑：带着它就不会被迷惑。`},{kind:`say`,lines:[{who:`boyi`,text:`灌灌长得像斑鸠，常落在北边林子边上的树上。去找它。`}]},{kind:`goal`,goal:{type:`meet`,creature:`guanguan`},tracker:`翻过山口，到北边林子边上找灌灌（像斑鸠的鸟）`,then:`now`},{kind:`say`,lines:[{who:`boyi`,text:`灌灌掉了一根羽毛，收好。`}]},{kind:`gain`,trinket:`guanyu`},{kind:`say`,lines:[{who:`boyi`,text:`原文还说，英水从这座山流出来，往南流，水里有赤{鱬|rú}。去东边的溪边看看。`}]},{kind:`goal`,goal:{type:`meet`,creature:`chiru`},tracker:`到东边的英水边看看赤{鱬|rú}`,then:`now`},{kind:`quiz`,excerpt:`其中多赤{鱬|rú}，其状如鱼而人面，其音如鸳鸯，食之不{疥|jiè}。`,question:`溪里的赤{鱬|rú}长着什么样的脸？`,options:[`人面`,`鸟首`,`龙首`],gloss:`人面：人的脸。赤鱬是长着人脸的红鱼。`},{kind:`say`,lines:[{who:`boyi`,text:`赤{鱬|rú}在石头上蹭下一片鳞，也收着吧。`}]},{kind:`gain`,trinket:`chirulin`},{kind:`note`,text:`原文只说九尾狐“其音如婴儿”。哭声让人迷惑，是游戏里加的设计，原文没有写。`},{kind:`goal`,goal:{type:`defeat`,creature:`jiuweihu`,n:1},tracker:`进北边的林子找到哭声（出发前想想该带什么）`,then:`now`},{kind:`say`,lines:[{who:`boyi`,text:`九尾狐低下头，不哭了，慢慢退回了林子深处。它服了。`},{who:`boyi`,text:`原文说它“能食人”，那是古人的记载。我们不杀它，让它回山里去。`}]},{kind:`meet`,creature:`jiuweihu`},{kind:`say`,lines:[{who:`boyi`,text:`它在林边留下一缕毛。古人说带着它不中蛊毒。`}]},{kind:`gain`,trinket:`humao`},{kind:`note`,text:`同一只兽，不同时代看法不一样：到了汉代，人们把九尾狐当作吉祥的瑞兽，常常和西王母一起刻在画像石上。`}]},{id:`mountain-god`,mountain:8,title:`祭鹊山之神`,giver:`boyi`,about:[`queshanshen`],xp:50,steps:[{kind:`say`,lines:[{who:`boyi`,text:`到东海边了。鹊山这一列山的山神，都是鸟的身子、龙的头。`},{who:`boyi`,text:`祭山神要用一块{璋|zhāng}、一块璧，都是玉做的。这座山哪里有玉？`}]},{kind:`quiz`,excerpt:`{汸|fāng}水出焉，而南流注于{淯|yù}，其中多白玉。`,question:`原文说哪里多白玉？`,options:[`{汸|fāng}水里`,`山顶上`,`东海里`],gloss:`其中：水里。汸水向南流进淯水，水里有很多白玉。`},{kind:`goal`,goal:{type:`search`,ore:`baiyu`},tracker:`到{汸|fāng}水边的石头堆旁搜一搜白玉，再回海边找伯益`,then:`giver`},{kind:`note`,text:`璧是圆形的玉片，中间有个圆孔。{璋|zhāng}是长条形的玉片，样子像半个“圭”（上头尖、下头方的玉板）。古人用它们祭祀天地山川。`},{kind:`say`,lines:[{who:`boyi`,text:`玉有了。按原文的礼数摆好祭品，告诉山神：我们走完了。`}]},{kind:`ritual`},{kind:`say`,lines:[{who:`shanshen`,text:`你们从招摇走到{箕|jī}尾，一座山一座山地读，一步一步地走。`},{who:`shanshen`,text:`《南山经》的第一部分，交给你们。`}]},{kind:`gain`,scroll:`nanshan-1`}]},{id:`tenth-mountain`,mountain:8,title:`第十座山在哪`,giver:`boyi`,about:[],xp:40,hidden:!0,steps:[{kind:`say`,lines:[{who:`boyi`,text:`还有一道难题。原文总结说“凡十山，二千九百五十里”。我们数一数走过的路。`}]},{kind:`quiz`,excerpt:`凡鹊山之首，自招摇之山，以至{箕|jī}尾之山，凡十山，二千九百五十里。`,question:`从招摇到{箕|jī}尾，原文一共列了几座山？`,options:[`九座`,`十座`,`八座`],gloss:`招摇、堂庭、猨翼、杻阳、柢山、亶爰、基山、青丘、箕尾，一共九座。`},{kind:`quiz`,excerpt:`300 + 380 + 370 + 300 + 400 + 300 + 300 + 350`,question:`把八段路程加起来，是多少里？`,options:[`二千七百里`,`二千九百五十里`,`三千里`],gloss:`加起来是 2700 里，比原文说的少了 250 里。`},{kind:`note`,text:`少掉的一座山和 250 里到哪里去了？可能是古书在传抄的时候漏掉了一段。比较不同的版本，找出这样的出入，就叫“校勘”。`}]}],bd={training:`先用投石在远处打蛇，等它靠近了再用竹杖。`,boss:`那哭声让大家迷惑了。带上“佩之不惑”的东西再进去试试。`},xd=`进林子之前想一想：那哭声会让人迷惑。`,Sd={zhang:{name:`竹杖`,hint:`打身边一格`},shi:{name:`投石`,hint:`打两三格远`},ruyao:{name:`如谣`,hint:`唱歌，身边的人回体力`},zhuyu:{name:`吃祝余`,hint:`回 12 点体力`},zhua:{name:`扑抓`,hint:`打身边一格`},yao:{name:`咬`,hint:`打身边一格`},panmu:{name:`判木`,hint:`大叫一声，震住敌人一回合`},sheyao:{name:`咬`,hint:``},pu:{name:`扑咬`,hint:``},ti:{name:`婴儿啼`,hint:``}},Cd={xingxing:`{狌狌|xīng xīng}`,xuangui:`旋龟`,guaishe:`怪蛇`,jiuweihu:`九尾狐`,guanguan:`灌灌`,chiru:`赤{鱬|rú}`,baiyuan:`白猿`,lushu:`鹿蜀`,boyi:`{猼訑|bó yí}`},wd={huo:`迷惑`,zhong:`肿`,yun:`震住`},Td={migu:{name:`迷{穀|gǔ}枝`,guards:`防迷路`,source:`招摇之山迷{穀|gǔ}“佩之不迷”`,quote:`佩之不迷`},guijia:{name:`旋龟甲`,guards:`防耳聋`,source:`{杻|niǔ}阳之山旋龟“佩之不聋”`,quote:`佩之不聋`},luyu:{name:`{鯥|lù}羽`,guards:`防肿`,source:`{柢|dǐ}山{鯥|lù}“食之无肿疾”`,quote:`食之无肿疾`,blocks:`zhong`},boyimao:{name:`{猼訑|bó yí}毛`,guards:`防害怕`,source:`基山{猼訑|bó yí}“佩之不畏”`,quote:`佩之不畏`},guanyu:{name:`灌灌羽`,guards:`防迷惑`,source:`青丘之山灌灌“佩之不惑”`,quote:`佩之不惑`,blocks:`huo`},chirulin:{name:`赤{鱬|rú}鳞`,guards:`防疥疮`,source:`青丘之山赤{鱬|rú}“食之不{疥|jiè}”`,quote:`食之不{疥|jiè}`},humao:{name:`狐毛`,guards:`防蛊毒`,source:`青丘之山九尾狐“食者不{蛊|gǔ}”`,quote:`食者不{蛊|gǔ}`}},Ed={zhuyu:{name:`祝余`,hint:`“食之不饥”。战斗里吃一份，回 12 点体力。`},shuiyu:{name:`水玉`,hint:`就是水晶。以后可以换东西。`},baiyu:{name:`白玉`,hint:`{猨|yuán}翼之山溪滩上搜到的白玉。`},yu:{name:`玉`,hint:`青丘之山南坡（阳）搜到的玉。`},qinghuo:{name:`青{雘|huò}`,hint:`青色的矿石，磨成粉就是颜料。`},chijin:{name:`赤金`,hint:`{杻|niǔ}阳之山南坡（阳）搜到的赤金，一般认为就是铜。`},baijin:{name:`白金`,hint:`{杻|niǔ}阳之山北坡（阴）搜到的白金，就是银。`}},Dd={ruyao:{name:`如谣`,source:`{杻|niǔ}阳之山鹿蜀“其音如谣”`,hint:`学鹿蜀唱歌：身边两格内的自己人回 8 点体力。三回合用一次。`}},Od={xingxing:{name:`{狌狌|xīng xīng}`,hint:`“伏行人走”，跑得快：一回合走三格。`},xuangui:{name:`旋龟`,hint:`“其音如判木”：叫一声，把敌人震住一回合。走得慢，一回合一格。`}},kd={"nanshan-1":{name:`《南山经》第一部分`}},Ad={excerpt:`其神状皆鸟身而龙首。其祠之礼：毛用一{璋|zhāng}玉{瘗|yì}，{糈|xǔ}用{稌|tú}米，一璧，稻米、白{菅|jiān}为席。`,plain:`这些山的山神，样子都是鸟的身子、龙的头。祭祀的礼仪是：带毛的牲畜和一块璋玉一起埋进土里；祭神的米用稌米（糯稻米）；还要一块璧和稻米；用白菅草做席子。`,note:`“毛”指带毛的牲畜，游戏里不演这一项。`,offerings:[{id:`zhang`,name:`{璋|zhāng}玉`,listed:!0},{id:`tumi`,name:`{稌|tú}米`,listed:!0},{id:`bi`,name:`璧`,listed:!0},{id:`daomi`,name:`稻米`,listed:!0},{id:`jian`,name:`白{菅|jiān}席`,listed:!0},{id:`shuiyu`,name:`水玉`,listed:!1},{id:`huangjin`,name:`黄金`,listed:!1},{id:`gui`,name:`桂枝`,listed:!1}]},jd=[0,40,100,180,280,420,600,800,1e3],Md=[1,.6,.35,.2,.1],Nd={first:10,retry:5},Pd={first:10,retry:4},Fd={title:`南山经·鹊山`,mountains:[{id:`zhaoyao`,name:`招摇之山`,distanceLi:0,distanceText:``,approach:`南山经之首曰鹊山。其首曰招摇之山，临于西海之上。`,original:`南山经之首曰鹊山。其首曰招摇之山，临于西海之上，多桂，多金玉。有草焉，其状如{韭|jiǔ}而青{华|huā}，其名曰祝余，食之不饥。有木焉，其状如{榖|gǔ}而黑理，其{华|huā}四照，其名曰迷{穀|gǔ}，佩之不迷。有兽焉，其状如{禺|yù}而白耳，伏行人走，其名曰{狌狌|xīng xīng}，食之善走。丽{𪊨|jǐ}之水出焉，而西流注于海，其中多育沛，佩之无{瘕|jiǎ}疾。`,plain:`南山经的第一列山叫鹊山。鹊山的第一座山叫招摇山，它坐落在西海边上。山上有很多桂树，还有很多金属和玉石。山里有一种草，样子像韭菜，开青色的花，名叫祝余，吃了它就不会饿。有一种树，样子像构树，有黑色的纹理，它的花光彩照耀四方，名叫迷穀，把它带在身上就不会迷路。有一种野兽，样子像禺（一种猴子），长着白耳朵，能趴着走，也能像人一样直立行走，名叫狌狌，吃了它就能跑得快。丽𪊨（jǐ）水从这里发源，向西流进大海，水里有很多叫育沛的东西，把它带在身上就不会得瘕病（肚子里生虫的病）。`,climbable:!0,finds:[`gui`,`zhuyu`,`migu`,`xingxing`]},{id:`tangting`,name:`堂庭之山`,distanceLi:300,distanceText:`三百里`,approach:`又东三百里，曰堂庭之山。`,original:`又东三百里，曰堂庭之山，多{棪|yǎn}木，多白猿，多水玉，多黄金。`,plain:`再往东走三百里，是堂庭山。山上有很多棪木，有很多白色的猿，有很多水玉，还有很多黄金。`,climbable:!0,finds:[`yanmu`,`baiyuan`,`shuiyu`]},{id:`yuanyi`,name:`{猨|yuán}翼之山`,distanceLi:380,distanceText:`三百八十里`,approach:`又东三百八十里，曰{猨|yuán}翼之山。`,original:`又东三百八十里，曰{猨|yuán}翼之山，其中多怪兽，水多怪鱼，多白玉，多腹{虫|huǐ}，多怪蛇，多怪木，不可以上。`,plain:`再往东走三百八十里，是猨翼山。山里有很多奇怪的野兽，水里有很多奇怪的鱼。这里有很多白玉，有很多腹虫（一种毒蛇），有很多奇怪的蛇，还有很多奇怪的树。这座山不能爬上去。`,climbable:!1,finds:[`baiyu`]},{id:`niuyang`,name:`{杻|niǔ}阳之山`,distanceLi:370,distanceText:`三百七十里`,approach:`又东三百七十里，曰{杻|niǔ}阳之山。`,original:`又东三百七十里，曰{杻|niǔ}阳之山，其阳多赤金，其阴多白金。有兽焉，其状如马而白首，其文如虎而赤尾，其音如谣，其名曰鹿蜀，佩之宜子孙。怪水出焉，而东流注于宪翼之水。其中多玄龟，其状如龟而鸟首{虺|huǐ}尾，其名曰旋龟，其音如判木，佩之不聋，可以为底。`,plain:`再往东走三百七十里，是杻阳山。山的南坡有很多赤金（铜），山的北坡有很多白金（银）。山里有一种野兽，样子像马，头是白的，身上的花纹像老虎，尾巴是红的，叫声像人在唱歌，名叫鹿蜀。把它带在身上，能让子孙兴旺。怪水从这里发源，向东流进宪翼水。水里有很多黑色的龟，样子像乌龟，却长着鸟的头、蛇的尾巴，名叫旋龟。它的叫声像劈木头的声音。把它带在身上，耳朵就不会聋，还能用来治脚底的老茧。`,climbable:!0,finds:[`chijin`,`baijin`,`lushu`,`xuangui`]},{id:`di`,name:`{柢|dǐ}山`,distanceLi:300,distanceText:`三百里`,approach:`又东三百里，{柢|dǐ}山。`,original:`又东三百里，{柢|dǐ}山，多水，无草木。有鱼焉，其状如牛，陵居，蛇尾有翼，其羽在{魼|xié}下，其音如留牛，其名曰{鯥|lù}，冬死而夏生，食之无肿疾。`,plain:`再往东走三百里，是柢山。山上水很多，不长草木。这里有一种鱼，样子像牛，住在山坡上，长着蛇的尾巴和翅膀，翅膀长在两肋下面，叫声像留牛，名叫鯥。它冬天死去，夏天又活过来。吃了它就不会生肿病。`,climbable:!0,finds:[`lu`]},{id:`chanyuan`,name:`{亶爰|chán yuán}之山`,distanceLi:400,distanceText:`四百里`,approach:`又东四百里，曰{亶爰|chán yuán}之山。`,original:`又东四百里，曰{亶爰|chán yuán}之山，多水，无草木，不可以上。有兽焉，其状如狸而有{髦|máo}，其名曰类，自为{牝牡|pìn mǔ}，食者不妒。`,plain:`再往东走四百里，是亶爰山。山上水很多，不长草木，不能爬上去。山里有一种野兽，样子像野猫，长着长长的鬃毛，名叫类。它自己既是雌的又是雄的。吃了它的人就不会嫉妒别人。`,climbable:!1,finds:[`lei`]},{id:`ji`,name:`基山`,distanceLi:300,distanceText:`三百里`,approach:`又东三百里，曰基山。`,original:`又东三百里，曰基山，其阳多玉，其阴多怪木。有兽焉，其状如羊，九尾四耳，其目在背，其名曰{猼訑|bó yí}，佩之不畏。有鸟焉，其状如鸡而三首六目、六足三翼，其名曰{𪁺|chǎng}{𩿧|fú}，食之无卧。`,plain:`再往东走三百里，是基山。山的南坡有很多玉，北坡有很多奇怪的树。山里有一种野兽，样子像羊，有九条尾巴、四只耳朵，眼睛长在背上，名叫猼訑。把它带在身上，就不会害怕。还有一种鸟，样子像鸡，却有三个头、六只眼睛、六只脚、三只翅膀，名叫𪁺𩿧（chǎng fú）。吃了它就不想睡觉。`,climbable:!0,finds:[`boyi`,`changfu`]},{id:`qingqiu`,name:`青丘之山`,distanceLi:300,distanceText:`三百里`,approach:`又东三百里，曰青丘之山。`,original:`又东三百里，曰青丘之山，其阳多玉，其阴多青{雘|huò}。有兽焉，其状如狐而九尾，其音如婴儿，能食人；食者不{蛊|gǔ}。有鸟焉，其状如{鸠|jiū}，其音若呵，名曰灌灌，佩之不惑。英水出焉，南流注于即翼之泽。其中多赤{鱬|rú}，其状如鱼而人面，其音如鸳鸯，食之不{疥|jiè}。`,plain:`再往东走三百里，是青丘山。山的南坡有很多玉，北坡有很多青雘（一种可以做颜料的青色矿物）。山里有一种野兽，样子像狐狸，有九条尾巴，叫声像婴儿，能吃人。吃了它的人就不会中蛊毒。还有一种鸟，样子像鸠鸟，叫声像人在吆喝，名叫灌灌。把它带在身上，就不会被迷惑。英水从这里发源，向南流进即翼泽。水里有很多赤鱬，样子像鱼，却长着人的脸，叫声像鸳鸯。吃了它就不会长疥疮。`,climbable:!0,finds:[`jiuweihu`,`guanguan`,`chiru`,`qinghuo`]},{id:`jiwei`,name:`{箕|jī}尾之山`,distanceLi:350,distanceText:`三百五十里`,approach:`又东三百五十里，曰{箕|jī}尾之山。`,original:`又东三百五十里，曰{箕|jī}尾之山，其尾{踆|cún}于东海，多沙石。{汸|fāng}水出焉，而南流注于{淯|yù}，其中多白玉。`,plain:`再往东走三百五十里，是箕尾山。山的尾巴像蹲着一样，伏在东海边上。这里有很多沙子和石头。汸水从这里发源，向南流进淯水，水里有很多白玉。`,climbable:!0,finds:[`baiyu`]}],codex:{gui:{id:`gui`,name:`桂`,kind:`plant`,original:`多桂。`,plain:`山上有很多桂树。`,note:`晋代郭璞给《山海经》作注，说这种桂树冬夏常青，它生长的地方没有别的杂树。`},zhuyu:{id:`zhuyu`,name:`祝余`,kind:`plant`,original:`有草焉，其状如{韭|jiǔ}而青{华|huā}，其名曰祝余，食之不饥。`,plain:`有一种草，样子像韭菜，开青色的花，名叫祝余，吃了它就不会饿。`,note:`“吃了不饿”是古人的记载，祝余是传说中的草。在野外，不认识的植物千万不要随便吃。`},migu:{id:`migu`,name:`迷{穀|gǔ}`,kind:`plant`,original:`有木焉，其状如{榖|gǔ}而黑理，其{华|huā}四照，其名曰迷{穀|gǔ}，佩之不迷。`,plain:`有一种树，样子像构树，有黑色的纹理，它的花光彩照耀四方，名叫迷穀，把它带在身上就不会迷路。`,note:`“榖”就是构树，郭璞说构树的皮可以用来造纸。带着迷穀就不迷路，是古人的传说。`},xingxing:{id:`xingxing`,name:`{狌狌|xīng xīng}`,kind:`beast`,original:`有兽焉，其状如{禺|yù}而白耳，伏行人走，其名曰{狌狌|xīng xīng}，食之善走。`,plain:`有一种野兽，样子像禺（一种猴子），长着白耳朵，能趴着走，也能像人一样直立行走，名叫狌狌，吃了它就能跑得快。`,note:`“吃了能跑得快”是古人的记载，并没有根据。有人认为狌狌就是后来说的猩猩，猩猩是需要保护的珍稀动物。`,model:`xingxing`},yanmu:{id:`yanmu`,name:`{棪|yǎn}木`,kind:`plant`,original:`多{棪|yǎn}木。`,plain:`山上有很多棪木。`,note:`郭璞注说，棪木的果实像柰（一种像苹果的水果），颜色是红的。`},baiyuan:{id:`baiyuan`,name:`白猿`,kind:`beast`,original:`多白猿。`,plain:`有很多白色的猿。`,note:`郭璞注说，猿像猕猴但更大，手臂和腿都很长，动作灵活，叫声听起来很悲伤。`},shuiyu:{id:`shuiyu`,name:`水玉`,kind:`mineral`,original:`多水玉。`,plain:`有很多水玉。`,note:`郭璞注：“水玉，今水晶也。”水玉就是我们今天说的水晶。`},baiyu:{id:`baiyu`,name:`白玉`,kind:`mineral`,original:`多白玉。`,plain:`有很多白玉。`,note:`猨翼山和箕尾山都出产白玉。中国人很早就用玉来做礼器和饰品。`},chijin:{id:`chijin`,name:`赤金`,kind:`mineral`,original:`其阳多赤金。`,plain:`山的南坡有很多赤金。`,note:`古人把各种金属都叫“金”，赤金一般认为就是铜。古人把山的南面叫“阳”。`},baijin:{id:`baijin`,name:`白金`,kind:`mineral`,original:`其阴多白金。`,plain:`山的北坡有很多白金。`,note:`郭璞注说这里的白金就是银。他还解释：“山南为阳，山北为阴。”`},lushu:{id:`lushu`,name:`鹿蜀`,kind:`beast`,original:`有兽焉，其状如马而白首，其文如虎而赤尾，其音如谣，其名曰鹿蜀，佩之宜子孙。`,plain:`有一种野兽，样子像马，头是白的，身上的花纹像老虎，尾巴是红的，叫声像人在唱歌，名叫鹿蜀。把它带在身上，能让子孙兴旺。`,note:`“带在身上能让子孙兴旺”是古人的说法。郭璞注说，“谣”就是像人唱歌的声音。`,model:`lushu`},xuangui:{id:`xuangui`,name:`旋龟`,kind:`beast`,original:`其中多玄龟，其状如龟而鸟首{虺|huǐ}尾，其名曰旋龟，其音如判木，佩之不聋，可以为底。`,plain:`水里有很多黑色的龟，样子像乌龟，却长着鸟的头、蛇的尾巴，名叫旋龟。它的叫声像劈木头的声音。把它带在身上，耳朵就不会聋，还能用来治脚底的老茧。`,note:`原文先说水里多“玄龟”（黑色的龟），又说它名叫“旋龟”，两个词读音一样。“带着不会聋”是古人的说法。`,model:`xuangui`},lu:{id:`lu`,name:`{鯥|lù}`,kind:`fish`,original:`有鱼焉，其状如牛，陵居，蛇尾有翼，其羽在{魼|xié}下，其音如留牛，其名曰{鯥|lù}，冬死而夏生，食之无肿疾。`,plain:`有一种鱼，样子像牛，住在山坡上，长着蛇的尾巴和翅膀，翅膀长在两肋下面，叫声像留牛，名叫鯥。它冬天死去，夏天又活过来。吃了它就不会生肿病。`,note:`“吃了不生肿病”是古人的记载。郭璞解释说，它其实是冬眠，看上去像死了一样。`},lei:{id:`lei`,name:`类`,kind:`beast`,original:`有兽焉，其状如狸而有{髦|máo}，其名曰类，自为{牝牡|pìn mǔ}，食者不妒。`,plain:`有一种野兽，样子像野猫，长着长长的鬃毛，名叫类。它自己既是雌的又是雄的。吃了它的人就不会嫉妒别人。`,note:`“吃了就不嫉妒”是古人的记载，不能当真。郭璞注说，《庄子》里也提到过这种自己就能分雌雄的“类”。`},boyi:{id:`boyi`,name:`{猼訑|bó yí}`,kind:`beast`,original:`有兽焉，其状如羊，九尾四耳，其目在背，其名曰{猼訑|bó yí}，佩之不畏。`,plain:`有一种野兽，样子像羊，有九条尾巴、四只耳朵，眼睛长在背上，名叫猼訑。把它带在身上，就不会害怕。`,note:`“带着它就不害怕”是古人的说法。郭璞注说，它的名字读起来像“博施”两个字。`},changfu:{id:`changfu`,name:`{𪁺|chǎng}{𩿧|fú}`,kind:`bird`,original:`有鸟焉，其状如鸡而三首六目、六足三翼，其名曰{𪁺|chǎng}{𩿧|fú}，食之无卧。`,plain:`有一种鸟，样子像鸡，却有三个头、六只眼睛、六只脚、三只翅膀，名叫𪁺𩿧（chǎng fú）。吃了它就不想睡觉。`,note:`“吃了不想睡觉”是古人的记载，野生鸟类不能捕来吃。它的名字是两个很少见的字，郭璞注说读作“敞孚”。`},jiuweihu:{id:`jiuweihu`,name:`九尾狐`,kind:`beast`,original:`有兽焉，其状如狐而九尾，其音如婴儿，能食人；食者不{蛊|gǔ}。`,plain:`有一种野兽，样子像狐狸，有九条尾巴，叫声像婴儿，能吃人。吃了它的人就不会中蛊毒。`,note:`“能吃人”“吃了不中蛊毒”都是古人的记载。原文没有给它起专门的名字，“九尾狐”是郭璞注里的叫法。`,model:`jiuweihu`},guanguan:{id:`guanguan`,name:`灌灌`,kind:`bird`,original:`有鸟焉，其状如{鸠|jiū}，其音若呵，名曰灌灌，佩之不惑。`,plain:`有一种鸟，样子像鸠鸟，叫声像人在吆喝，名叫灌灌。把它带在身上，就不会被迷惑。`,note:`郭璞注说，它的叫声像人们互相呼喊的声音。“带着它就不会被迷惑”是古人的说法。`},chiru:{id:`chiru`,name:`赤{鱬|rú}`,kind:`fish`,original:`其中多赤{鱬|rú}，其状如鱼而人面，其音如鸳鸯，食之不{疥|jiè}。`,plain:`水里有很多赤鱬，样子像鱼，却长着人的脸，叫声像鸳鸯。吃了它就不会长疥疮。`,note:`“吃了不长疥疮”是古人的记载，并没有根据。鸳鸯是一种羽毛很漂亮的水鸟。`},qinghuo:{id:`qinghuo`,name:`青{雘|huò}`,kind:`mineral`,original:`其阴多青{雘|huò}。`,plain:`山的北坡有很多青雘。`,note:`雘是一种可以做颜料的矿物。郭璞注说它是“黝属”，“黝”就是青黑色。`},queshanshen:{id:`queshanshen`,name:`鹊山山神`,kind:`spirit`,original:`其神状皆鸟身而龙首。`,plain:`这些山的山神，样子都是鸟的身子、龙的头。`,note:`古人认为每座山都有山神，要按规定的礼仪祭祀。鹊山这一列山的山神都长着鸟的身体和龙的头。`}},summary:{original:`凡鹊山之首，自招摇之山，以至{箕|jī}尾之山，凡十山，二千九百五十里。其神状皆鸟身而龙首。其祠之礼：毛用一{璋|zhāng}玉{瘗|yì}，{糈|xǔ}用{稌|tú}米，一璧，稻米、白{菅|jiān}为席。`,plain:`鹊山这一列山，从招摇山起，到箕尾山止，一共十座山，共二千九百五十里。这些山的山神，样子都是鸟的身子、龙的头。祭祀山神的礼仪是：选用带毛的牲畜，和一块璋玉一起埋进土里；祭神的米用稌米（糯稻米）；还要用一块璧和稻米；用白菅草做席子。`,note:`原文说“凡十山”，可是前面只列出了九座山；把八段路程加起来（300+380+370+300+400+300+300+350），是2700里，不是2950里。少掉的一座山和250里到哪里去了？这就是古书“校勘”要研究的问题，你可以试着找别的版本比一比。`},draftSource:`维基文库录文初稿，待按宋本校定`},Id={zhuyu:{figure:`zhuyu`,height:.8,look:`一株草：叶子又长又扁，像韭菜；开着青色的小花。`,codex:`zhuyu`},jiucao:{figure:`jiucao`,height:.8,look:`一株草：叶子又长又扁，像韭菜；开着白色的小花。`,plain:`这是普通的韭菜。韭菜开白花，原文说祝余开的是“青{华|huā}”，青色的花。`},migu:{figure:`migu`,height:2.4,look:`一棵树：样子像构树，树皮上一道道黑色的纹理，花一朵一朵地放着光。`,codex:`migu`},gui:{figure:`gui`,height:2.4,look:`一棵树：叶子油亮，开着细碎的黄花；树皮光溜溜的，没有黑纹，花也不放光。`,codex:`gui`,plain:`这是桂树。原文说迷{穀|gǔ}“黑理”“其{华|huā}四照”：树皮有黑纹，花会放光。`},yanmu:{figure:`yanmu`,height:2.3,look:`一棵树：叶子绿油油的，枝上挂满了红红的果子，像一个个小苹果。`,codex:`yanmu`},lu:{figure:`lu`,height:1,look:`山坡上睡着一个东西：身子像牛，浑身鱼鳞，肋下有翅膀，拖着蛇一样的尾巴。`,codex:`lu`},niu:{figure:`niu`,height:1,look:`山坡上卧着一头牛：一身短毛，没有鳞，没有翅膀，甩着普通的牛尾巴。`,plain:`这是一头普通的牛。原文说{鯥|lù}“蛇尾有翼”：长着翅膀、拖着蛇尾，而且它是一条鱼。`},lei:{figure:`lei`,height:.9,look:`水边坐着一只野猫：脖子和肩上披着长长的鬃毛，像一头小狮子。`,codex:`lei`},li:{figure:`li`,height:.8,look:`水边坐着一只野猫：身上有黑色的斑点，脖子上的毛短短的，没有鬃毛。`,plain:`这是普通的野猫，古人叫它“狸”。原文说类“如狸而有{髦|máo}”：像野猫，可是长着长鬃毛。`},changfu:{figure:`changfu`,height:.95,look:`一只像鸡的鸟：一个身子，三个头、六只眼睛，三只翅膀，六只脚。`,codex:`changfu`},ji:{figure:`ji`,height:.7,look:`一只鸡：一个头、两只翅膀、两只脚，正低着头在地上啄食。`,plain:`这是一只普通的鸡。原文说{𪁺|chǎng}{𩿧|fú}“三首六目、六足三翼”：三个头、六只眼睛、六只脚、三只翅膀。`}},Ld={zhuyu:`再读读原文：“其状如{韭|jiǔ}而青{华|huā}”——像韭菜，开青色的花。`,migu:`再读读原文：“其状如{榖|gǔ}而黑理，其{华|huā}四照”——树皮有黑纹，花会放光。`,lu:`再读读原文：“其状如牛，陵居，蛇尾有翼”——像牛，住在山坡上，长着蛇尾和翅膀。`,lei:`再读读原文：“其状如狸而有{髦|máo}”——像野猫，脖子上有长鬃毛。`,changfu:`再读读原文：“其状如鸡而三首六目、六足三翼”——像鸡，却有三个头、六只眼睛、六只脚、三只翅膀。`},Rd={baiyu:{item:`baiyu`,codex:`baiyu`},yu:{item:`yu`},qinghuo:{item:`qinghuo`,codex:`qinghuo`},shuiyu:{item:`shuiyu`,codex:`shuiyu`},chijin:{item:`chijin`,codex:`chijin`},baijin:{item:`baijin`,codex:`baijin`}},zd={boyi:`boyi-beast`};function Bd(e){return zd[e]??e}var Vd={zhaoyao:{mountain:`zhaoyao`,rows:[`SSSs^^gg^^^^^AAAAA^^^^TTTTTT^^`,`SSSs^g^^^^^^AAAAAAA^^^TTTTTTT^`,`SSSs^^^g^^H^^AAAAA^^^gTT..TTTT`,`SSSs^^^^^^^^^^AAA^^^^^TT.M.TTT`,`SSSs^g^^^^^^^^^^^^^g^^....TTT^`,`SSSs^^^^K^^^^^^^^^^^^^^^^TT^^^`,`SSSs^^^^^^^^^^^g^^^^^^^^X^^^^^`,`SSSs.....,....^^~^^...........`,`SSS~~~~~~=~~~~~~~.............`,`SSSs.....,....................`,`SSSs.....,....................`,`SSSs.....,......3.............`,`SSSs..B..,,,,,,,,,,,,,,,,,,,,E`,`SSSs..@..,.....1.......4.....E`,`SSSs......5.........r.........`,`SSSs.............2............`,`SSSs...r.............r........`,`SSSs...........N..............`],marks:{"@":{kind:`spawn`},E:{kind:`exit`,dir:`east`},N:{kind:`exit`,dir:`south`},B:{kind:`npc`,npc:`boyi`},H:{kind:`npc`,npc:`herbalist`},1:{kind:`thing`,id:`zhuyu-1`,thing:`zhuyu`},2:{kind:`thing`,id:`zhuyu-2`,thing:`zhuyu`},3:{kind:`thing`,id:`jiucao-1`,thing:`jiucao`},4:{kind:`thing`,id:`jiucao-2`,thing:`jiucao`},5:{kind:`thing`,id:`jiucao-3`,thing:`jiucao`},M:{kind:`thing`,id:`migu-1`,thing:`migu`},K:{kind:`thing`,id:`gui-1`,thing:`gui`},X:{kind:`creature`,id:`xingxing`,creature:`xingxing`,zone:[20,5,29,11]}},ridge:[0,1],ore:{any:`yu`}},yuanyi:{mountain:`yuanyi`,rows:[`^^N^^^www^^^^AAAA^^^^www^^^^^^`,`^^^www^^^^^AAAAAAAA^^^^www^^^^`,`^^ww^^^^^AAAAAAAAAAAA^^^^ww^^^`,`..w^^^^^AAAAAAAAAAAAAA^^^^w...`,`.....^^AAAAAAAAAAAAAAAA^^.....`,`....w^^AAAAAAAAAAAAAAAA^^w....`,`..,,,^^AAAAAAAAAAAAAAAA^^,,,..`,`..,.w^^^AAAAAAAAAAAAAA^^^w.,..`,`..,...^^^AAAAAAAAAAAA^^^...,..`,`.@,..w..^^^AAAAAAAA^^^..w..,.E`,`.B,.....^^^^^^^^^^^^^^.....,.E`,`..,......^^^^^^^^^^^^......,..`,`..,,,,,,,,,,,,,,,,,,,,,,,,,,..`,`...w.......w........w.....w...`,`..sss1ssss......sss2sss....sss`,`~~~~~~~~=~~~~~~~~~~~~~~~~~~~~~`,`..sss.......3......sss......ss`,`...w......w.........w.....w...`],marks:{"@":{kind:`spawn`},E:{kind:`exit`,dir:`east`},N:{kind:`exit`,dir:`north`},B:{kind:`npc`,npc:`boyi`},1:{kind:`outcrop`,id:`baiyu-1`},2:{kind:`outcrop`,id:`baiyu-2`},3:{kind:`outcrop`,id:`baiyu-3`},W:{kind:`creature`,id:`guaishe-w`,creature:`guaishe`,zone:[2,3,6,11],foe:`training`},Y:{kind:`creature`,id:`guaishe-e`,creature:`guaishe`,zone:[23,3,28,11],foe:`training`},Z:{kind:`creature`,id:`guaishe-s`,creature:`guaishe`,zone:[6,11,24,13],foe:`training`}},ridge:[3,11],ore:{any:`baiyu`},peaks:`rugged`},qingqiu:{mountain:`qingqiu`,rows:[`TTTTTTTTT^^^^^^^^^TTTTTTTTTTTT`,`TTTT....^^^^^^^^^^^^TT......TT`,`TT....4.....,,,.....T...F...TT`,`T......5.....,.......T......TT`,`T..r.........,.......G......TT`,`T.......6....,..........r....T`,`...^^^^^^^^^^,^^^^^^^^^^^^^...`,`..^^^AAAAAA^^,^^AAAAAAAA^^^^..`,`..^^AAAAAAA^^,^^^AAAAAAA~^^^..`,`...^^^^^^^^^^,^^^^^^^^^^~^^...`,`.........1...,..........~.....`,`..B..........,..P.......~.....`,`@,,,,,,,,,,,,,,,,,,,,,,,=,,,,E`,`......V.........2.......~...r.`,`...r..........3.........~.....`,`........................C.....`,`.....r.................mmmmmmm`,`.....N.......mmmmmmmmmmmmmmmmm`],marks:{"@":{kind:`spawn`},E:{kind:`exit`,dir:`east`},N:{kind:`exit`,dir:`south`},B:{kind:`npc`,npc:`boyi`},V:{kind:`npc`,npc:`villager`},P:{kind:`npc`,npc:`painter`},1:{kind:`outcrop`,id:`yang-1`},2:{kind:`outcrop`,id:`yang-2`},3:{kind:`outcrop`,id:`yang-3`},4:{kind:`outcrop`,id:`yin-1`},5:{kind:`outcrop`,id:`yin-2`},6:{kind:`outcrop`,id:`yin-3`},F:{kind:`creature`,id:`jiuweihu`,creature:`jiuweihu`,zone:[22,1,27,3],foe:`boss`},G:{kind:`creature`,id:`guanguan`,creature:`guanguan`},C:{kind:`creature`,id:`chiru`,creature:`chiru`,zone:[24,13,24,15],ground:`~`}},ridge:[6,9],ore:{yang:`yu`,yin:`qinghuo`},yinyang:!0},tangting:{mountain:`tangting`,rows:[`^^^^AAAAA^^^^^^^^^~^^^yyyyyyy^`,`^^^AAAAAAA^^^^^^^^~^^yyy...yyy`,`^^^^AAAAA^^^^^^^^^~^^yy.....yy`,`^^^^^^^^^^^^^^^^^^~^^y.......y`,`...^^^^^^^^^^^^^^^~^^^y.....yy`,`.....^^^^^^^^^^^^1~^^^^yy..yy^`,`..........,.......~..........^`,`..........,.......~..K........`,`..........,......~~...........`,`.....V....,.....~~............`,`@,,,,,,,,,,,,,,,=,,,,,,,,,,,,E`,`.B.............~~............E`,`..............~~2.............`,`.............~~...............`,`.......r....3~................`,`.............~.........r......`,`......r......~................`,`.....N.......~................`],marks:{"@":{kind:`spawn`},E:{kind:`exit`,dir:`east`},N:{kind:`exit`,dir:`south`},B:{kind:`npc`,npc:`boyi`},V:{kind:`npc`,npc:`villager`},K:{kind:`thing`,id:`yanmu-1`,thing:`yanmu`},1:{kind:`outcrop`,id:`shuiyu-1`},2:{kind:`outcrop`,id:`shuiyu-2`},3:{kind:`outcrop`,id:`shuiyu-3`},P:{kind:`creature`,id:`baiyuan-1`,creature:`baiyuan`,zone:[22,1,25,4]},Q:{kind:`creature`,id:`baiyuan-2`,creature:`baiyuan`,zone:[25,2,28,5]}},ridge:[0,2],ore:{any:`shuiyu`}},niuyang:{mountain:`niuyang`,rows:[`TTTTT^^^^^......^^^^^^^^^TTTTT`,`TTT.......4.................TT`,`T.........,..........r.......T`,`T...5.....,...................`,`..........,.........6.........`,`...r......,...................`,`..^^^^^^^^,^^^^^^^^^^^^^^^^...`,`.^^^AAAAA^,^^AAAAAAAAAAAA^^^..`,`.^^AAAAAA^,^^^AAAAAAAAAAA^^^..`,`..^^^^^^^^,^^^^^^^^^^^^^^^^^..`,`..........,.~........1........`,`..B.......,.~...2.............`,`@,,,,,,,,,,,=,,,,,,,,,,,,,,,,E`,`......V.....~.......F.........`,`............~~~~~~~~~X~~~~~~~~`,`........3.....................`,`...r..........r.......r.......`,`.....N........................`],marks:{"@":{kind:`spawn`},E:{kind:`exit`,dir:`east`},N:{kind:`exit`,dir:`south`},B:{kind:`npc`,npc:`boyi`},V:{kind:`npc`,npc:`villager`},F:{kind:`npc`,npc:`fisher`},1:{kind:`outcrop`,id:`yang-1`},2:{kind:`outcrop`,id:`yang-2`},3:{kind:`outcrop`,id:`yang-3`},4:{kind:`outcrop`,id:`yin-1`},5:{kind:`outcrop`,id:`yin-2`},6:{kind:`outcrop`,id:`yin-3`},L:{kind:`creature`,id:`lushu`,creature:`lushu`,zone:[14,1,26,4]},X:{kind:`creature`,id:`xuangui`,creature:`xuangui`,zone:[15,14,27,14],ground:`~`}},ridge:[6,9],ore:{yang:`chijin`,yin:`baijin`},yinyang:!0},di:{mountain:`di`,rows:[`sss^^^sssss~~sssssss^^^^ssssss`,`ss^^^^^ssss~~sssss^^^^^^^sssss`,`s^^r^^^^sss~~ssss^^^^K^^^^ssss`,`s^^^H^^ssss~~sss^^^^^^^r^^ssss`,`ss^^^^sssss~~ssss^^^^^^^^sssss`,`ssssssssss~~~~sssss^^^^^ssssss`,`sssssssss~~~~~~sssssssssssssss`,`ssssssss~~~~~~~~ssssssssssssss`,`sssssssss~~~~~~sssssssssssssss`,`sssssss~~~ssssssssssssssssssss`,`ssssss~~ssssssssssssssssssssss`,`@,,,,,=,,,,,,,,,,,,,,,,,,,,,,E`,`ssBss~~ssssVsssssssssssssssssE`,`ssss~~ssssssssssss^^^^^sssssss`,`sss~~sssssssssss^^^^^^^^ssssss`,`ss~~~~ssssssssss^^^J^^^^ssssss`,`s~~~~~~ssssssssss^^^^^^^ssssss`,`s~~~~~~~sXssssssssssssssssssss`],marks:{"@":{kind:`spawn`},E:{kind:`exit`,dir:`east`},X:{kind:`exit`,dir:`south`},B:{kind:`npc`,npc:`boyi`},V:{kind:`npc`,npc:`villager`},K:{kind:`thing`,id:`lu-1`,thing:`lu`},H:{kind:`thing`,id:`niu-1`,thing:`niu`},J:{kind:`thing`,id:`niu-2`,thing:`niu`}},ridge:[0,4],bare:!0},chanyuan:{mountain:`chanyuan`,rows:[`sss^^^^^AAAAAAAAAAAA^^^^^sssss`,`ss^^^^^AAAAAAAAAAAAAA^^^^^ssss`,`ss^^^^AAAAAAAAAAAAAAAA^^^^ssss`,`s^^^^AAAAAAAAAAAAAAAAAA^^^^sss`,`s^^^^AAAAAAAAAAAAAAAAAA^^^^sss`,`ss^^^^AAAAAAAAAAAAAAAA^^^^ssss`,`sss^^^^AAAAAAAAAAAAAA^^^^sssss`,`ssss^^^^^AAAAAAAAAA^^^^^ssssss`,`sssss^^^^^s~s^^^s~s^^^ssssssss`,`ssssss^^^ss~sssss~ss^^ssssssss`,`@,,,,,,,,,,=,,,,,=,,,,,,,,,,,E`,`sBsssssssss~sssss~ssssssJssssE`,`ssssOsYsss~~~~~~~~~sssssssssss`,`sssssssss~~~~~~~~~~~ssssssssss`,`ssssssssH~~~~~~~~~~~~sssssssss`,`sssssssss~~~~~~~~~~~ssssssssss`,`ssssssssss~~~~~~~~~sssssssssss`,`sssNssssssssssKsssssssssssssss`],marks:{"@":{kind:`spawn`},E:{kind:`exit`,dir:`east`},N:{kind:`exit`,dir:`south`},B:{kind:`npc`,npc:`boyi`},O:{kind:`npc`,npc:`elder`},Y:{kind:`npc`,npc:`younger`},K:{kind:`thing`,id:`lei-1`,thing:`lei`},H:{kind:`thing`,id:`li-1`,thing:`li`},J:{kind:`thing`,id:`li-2`,thing:`li`}},ridge:[0,7],peaks:`rugged`,bare:!0},ji:{mountain:`ji`,rows:[`wwwwwwwwwwwwwwwwwwwwwwwwwwwwww`,`wwwww....wwwwww....wwwwww..www`,`www........ww........ww.....ww`,`ww...w...........w...........w`,`w..........w...,......w......w`,`ww...w.........,.........w..ww`,`...............,..............`,`..^^^^^^^^^^^^^,^^^^^^^^^^^^..`,`.^^^AAAAAAAAA^^,^^AAAAAAAAA^^.`,`..^^^^^^^^^^^^^,^^^^^^^^^^^^..`,`...............,..............`,`..B......1.....,.....K.....2..`,`@,,,,,,,,,,,,,,,,,,,,,,,,,,,,E`,`.......H.........J...........E`,`...r..........................`,`..........r.........r.........`,`......................r.......`,`....N.........................`],marks:{"@":{kind:`spawn`},E:{kind:`exit`,dir:`east`},N:{kind:`exit`,dir:`south`},B:{kind:`npc`,npc:`boyi`},1:{kind:`outcrop`,id:`yang-1`},2:{kind:`outcrop`,id:`yang-2`},K:{kind:`thing`,id:`changfu-1`,thing:`changfu`},H:{kind:`thing`,id:`ji-1`,thing:`ji`},J:{kind:`thing`,id:`ji-2`,thing:`ji`},Q:{kind:`creature`,id:`boyi-beast`,creature:`boyi`,zone:[6,2,20,5]}},ridge:[7,9],ore:{any:`yu`},yinyang:!0},jiwei:{mountain:`jiwei`,rows:[`^^^AAAAAAA^^^^^^^^^^rrssSSSSSS`,`^^AAAAAAAAA^^^^^^^^^rrsSSSSSSS`,`^^^AAAAAAAAAAA^^^^AAAArrsSSSSS`,`^^^^AAAAAAAAAAAAAAAAAAArrrSSSS`,`^^^^^AAAAAA^^^^AAAAAA^^^rsSSSS`,`s^^^^^^^^^^~^^^^^^^^^^^^ssSSSS`,`ss^^^^^^^^^~^^^^^^^^^^sssSSSSS`,`ssssssrsss1~sssssssrsssssSSSSS`,`sssssssssss~ssssssssssssssSSSS`,`sssssssssss~ssssssssssBssSSSSS`,`@,,,,,,,,,,=,,,,,,,,,,,,ssSSSS`,`sssssssssss~ssssssssssssssSSSS`,`ssrsssrssss~~sssssssssssssSSSS`,`ssssssssssss~2sssssrsssssssssS`,`ssssssssssss~sssssssssssssssss`,`ssssrssssss3~sssrssssssssssssE`,`ssssssssssss~ssssssssssssssssE`,`sssXssssssss~sssssssssssssssss`],marks:{"@":{kind:`spawn`},E:{kind:`exit`,dir:`east`},X:{kind:`exit`,dir:`south`},B:{kind:`npc`,npc:`boyi`},1:{kind:`outcrop`,id:`baiyu-1`},2:{kind:`outcrop`,id:`baiyu-2`},3:{kind:`outcrop`,id:`baiyu-3`}},ridge:[0,4],ore:{any:`baiyu`},bare:!0}},Hd={east:`往东`,south:`往南`,west:`往西`,north:`往北`},Ud=class{update;render;frameId=0;lastTime=0;running=!1;constructor(e,t){this.update=e,this.render=t}start(){this.running||(this.running=!0,this.lastTime=performance.now(),this.frameId=requestAnimationFrame(this.tick))}stop(){this.running=!1,cancelAnimationFrame(this.frameId)}tick=e=>{if(!this.running)return;let t=Math.min((e-this.lastTime)/1e3,.05);this.lastTime=e,this.update(t,e/1e3),this.render(),this.frameId=requestAnimationFrame(this.tick)}};function Wd(e){let t=new Gu({canvas:e,antialias:!0,alpha:!1,powerPreference:`high-performance`});return t.outputColorSpace=Ue,t.toneMapping=4,t.toneMappingExposure=1.05,t.shadowMap.enabled=!0,t.shadowMap.type=1,t}function Gd(e,t,n=2){let r=e.domElement,i=Math.max(1,Math.floor(r.clientWidth)),a=Math.max(1,Math.floor(r.clientHeight)),o=Math.min(window.devicePixelRatio||1,n),s=Math.floor(i*o),c=Math.floor(a*o),l=r.width!==s||r.height!==c;return l&&(e.setPixelRatio(o),e.setSize(i,a,!1),t.aspect=i/a,t.updateProjectionMatrix()),l}function Kd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Nr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=qd(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=qd(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function qd(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new vr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Jd(e,t){if(t===0)return console.warn(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.`),e;if(t===2||t===1){let n=e.getIndex();if(n===null){let t=[],r=e.getAttribute(`position`);if(r!==void 0){for(let e=0;e<r.count;e++)t.push(e);e.setIndex(t),n=e.getIndex()}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.`),e}let r=n.count-2,i=[];if(t===2)for(let e=1;e<=r;e++)i.push(n.getX(0)),i.push(n.getX(e)),i.push(n.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(i.push(n.getX(e)),i.push(n.getX(e+1)),i.push(n.getX(e+2))):(i.push(n.getX(e+2)),i.push(n.getX(e+1)),i.push(n.getX(e)));i.length/3!==r&&console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.`);let a=e.clone();return a.setIndex(i),a.clearGroups(),a}else return console.error(`THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:`,t),e}function Yd(e){let t=new Map,n=new Map,r=e.clone();return Xd(e,r,function(e,r){t.set(r,e),n.set(e,r)}),r.traverse(function(e){if(!e.isSkinnedMesh)return;let r=e,i=t.get(e),a=i.skeleton.bones;r.skeleton=i.skeleton.clone(),r.bindMatrix.copy(i.bindMatrix),r.skeleton.bones=a.map(function(e){return n.get(e)}),r.bind(r.skeleton,r.bindMatrix)}),r}function Xd(e,t,n){n(e,t);for(let r=0;r<e.children.length;r++)Xd(e.children[r],t.children[r],n)}var Zd=class extends Oo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new rf(e)}),this.register(function(e){return new af(e)}),this.register(function(e){return new mf(e)}),this.register(function(e){return new hf(e)}),this.register(function(e){return new gf(e)}),this.register(function(e){return new sf(e)}),this.register(function(e){return new cf(e)}),this.register(function(e){return new lf(e)}),this.register(function(e){return new uf(e)}),this.register(function(e){return new nf(e)}),this.register(function(e){return new df(e)}),this.register(function(e){return new of(e)}),this.register(function(e){return new pf(e)}),this.register(function(e){return new ff(e)}),this.register(function(e){return new ef(e)}),this.register(function(e){return new _f(e,X.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new _f(e,X.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new vf(e)})}load(e,t,n,r){let i=this,a;if(this.resourcePath!==``)a=this.resourcePath;else if(this.path!==``){let t=rs.extractUrlBase(e);a=rs.resolveURL(t,this.path)}else a=rs.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),i.manager.itemError(e),i.manager.itemEnd(e)},s=new jo(this.manager);s.setPath(this.path),s.setResponseType(`arraybuffer`),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(n){try{i.parse(n,a,function(n){t(n),i.manager.itemEnd(e)},o)}catch(e){o(e)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let i,a={},o={},s=new TextDecoder;if(typeof e==`string`)i=JSON.parse(e);else if(e instanceof ArrayBuffer)if(s.decode(new Uint8Array(e,0,4))===yf){try{a[X.KHR_BINARY_GLTF]=new Sf(e)}catch(e){r&&r(e);return}i=JSON.parse(a[X.KHR_BINARY_GLTF].content)}else i=JSON.parse(s.decode(e));else i=e;if(i.asset===void 0||i.asset.version[0]<2){r&&r(Error(`THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.`));return}let c=new Jf(i,{path:t||this.resourcePath||``,crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error(`THREE.GLTFLoader: Invalid plugin found: missing name`),o[t.name]=t,a[t.name]=!0}if(i.extensionsUsed)for(let e=0;e<i.extensionsUsed.length;++e){let t=i.extensionsUsed[e],n=i.extensionsRequired||[];switch(t){case X.KHR_MATERIALS_UNLIT:a[t]=new tf;break;case X.KHR_DRACO_MESH_COMPRESSION:a[t]=new Cf(i,this.dracoLoader);break;case X.KHR_TEXTURE_TRANSFORM:a[t]=new wf;break;case X.KHR_MESH_QUANTIZATION:a[t]=new Tf;break;default:n.indexOf(t)>=0&&o[t]===void 0&&console.warn(`THREE.GLTFLoader: Unknown extension "`+t+`".`)}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){let n=this;return new Promise(function(r,i){n.parse(e,t,r,i)})}};function Qd(){let e={};return{get:function(t){return e[t]},add:function(t,n){e[t]=n},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function $d(e,t,n){let r=e.json.materials[t];return r.extensions&&r.extensions[n]?r.extensions[n]:null}var X={KHR_BINARY_GLTF:`KHR_binary_glTF`,KHR_DRACO_MESH_COMPRESSION:`KHR_draco_mesh_compression`,KHR_LIGHTS_PUNCTUAL:`KHR_lights_punctual`,KHR_MATERIALS_CLEARCOAT:`KHR_materials_clearcoat`,KHR_MATERIALS_DISPERSION:`KHR_materials_dispersion`,KHR_MATERIALS_IOR:`KHR_materials_ior`,KHR_MATERIALS_SHEEN:`KHR_materials_sheen`,KHR_MATERIALS_SPECULAR:`KHR_materials_specular`,KHR_MATERIALS_TRANSMISSION:`KHR_materials_transmission`,KHR_MATERIALS_IRIDESCENCE:`KHR_materials_iridescence`,KHR_MATERIALS_ANISOTROPY:`KHR_materials_anisotropy`,KHR_MATERIALS_UNLIT:`KHR_materials_unlit`,KHR_MATERIALS_VOLUME:`KHR_materials_volume`,KHR_TEXTURE_BASISU:`KHR_texture_basisu`,KHR_TEXTURE_TRANSFORM:`KHR_texture_transform`,KHR_MESH_QUANTIZATION:`KHR_mesh_quantization`,KHR_MATERIALS_EMISSIVE_STRENGTH:`KHR_materials_emissive_strength`,EXT_MATERIALS_BUMP:`EXT_materials_bump`,EXT_TEXTURE_WEBP:`EXT_texture_webp`,EXT_TEXTURE_AVIF:`EXT_texture_avif`,EXT_MESHOPT_COMPRESSION:`EXT_meshopt_compression`,KHR_MESHOPT_COMPRESSION:`KHR_meshopt_compression`,EXT_MESH_GPU_INSTANCING:`EXT_mesh_gpu_instancing`},ef=class{constructor(e){this.parser=e,this.name=X.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n=`light:`+e,r=t.cache.get(n);if(r)return r;let i=t.json,a=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e],o,s=new G(16777215);a.color!==void 0&&s.setRGB(a.color[0],a.color[1],a.color[2],We);let c=a.range===void 0?0:a.range;switch(a.type){case`directional`:o=new ts(s),o.target.position.set(0,0,-1),o.add(o.target);break;case`point`:o=new Qo(s),o.distance=c;break;case`spot`:o=new Xo(s),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle===void 0?0:a.spot.innerConeAngle,a.spot.outerConeAngle=a.spot.outerConeAngle===void 0?Math.PI/4:a.spot.outerConeAngle,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw Error(`THREE.GLTFLoader: Unexpected light type: `+a.type)}return o.position.set(0,0,0),Bf(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||`light_`+e),r=Promise.resolve(o),t.cache.add(n,r),r}getDependency(e,t){if(e===`light`)return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],i=(r.extensions&&r.extensions[this.name]||{}).light;return i===void 0?null:this._loadLight(i).then(function(e){return n._getNodeRef(t.cache,i,e)})}},tf=class{constructor(){this.name=X.KHR_MATERIALS_UNLIT}getMaterialType(){return K}extendParams(e,t,n){let r=[];e.color=new G(1,1,1),e.opacity=1;let i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){let t=i.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],We),e.opacity=t[3]}i.baseColorTexture!==void 0&&r.push(n.assignTexture(e,`map`,i.baseColorTexture,Ue))}return Promise.all(r)}},nf=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=$d(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},rf=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return $d(this.parser,e,this.name)===null?null:$a}extendMaterialParams(e,t){let n=$d(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatMap`,n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`clearcoatRoughnessMap`,n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,`clearcoatNormalMap`,n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new B(e,e)}return Promise.all(r)}},af=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_DISPERSION}getMaterialType(e){return $d(this.parser,e,this.name)===null?null:$a}extendMaterialParams(e,t){let n=$d(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion===void 0?0:n.dispersion),Promise.resolve()}},of=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return $d(this.parser,e,this.name)===null?null:$a}extendMaterialParams(e,t){let n=$d(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceMap`,n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`iridescenceThicknessMap`,n.iridescenceThicknessTexture)),Promise.all(r)}},sf=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_SHEEN}getMaterialType(e){return $d(this.parser,e,this.name)===null?null:$a}extendMaterialParams(e,t){let n=$d(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];if(t.sheenColor=new G(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],We)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenColorMap`,n.sheenColorTexture,Ue)),n.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,`sheenRoughnessMap`,n.sheenRoughnessTexture)),Promise.all(r)}},cf=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return $d(this.parser,e,this.name)===null?null:$a}extendMaterialParams(e,t){let n=$d(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,`transmissionMap`,n.transmissionTexture)),Promise.all(r)}},lf=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_VOLUME}getMaterialType(e){return $d(this.parser,e,this.name)===null?null:$a}extendMaterialParams(e,t){let n=$d(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.thickness=n.thicknessFactor===void 0?0:n.thicknessFactor,n.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,`thicknessMap`,n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let i=n.attenuationColor||[1,1,1];return t.attenuationColor=new G().setRGB(i[0],i[1],i[2],We),Promise.all(r)}},uf=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_IOR}getMaterialType(e){return $d(this.parser,e,this.name)===null?null:$a}extendMaterialParams(e,t){let n=$d(this.parser,e,this.name);return n===null?Promise.resolve():(t.ior=n.ior===void 0?1.5:n.ior,t.ior===0&&(t.ior=1e3),Promise.resolve())}},df=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_SPECULAR}getMaterialType(e){return $d(this.parser,e,this.name)===null?null:$a}extendMaterialParams(e,t){let n=$d(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];t.specularIntensity=n.specularFactor===void 0?1:n.specularFactor,n.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularIntensityMap`,n.specularTexture));let i=n.specularColorFactor||[1,1,1];return t.specularColor=new G().setRGB(i[0],i[1],i[2],We),n.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,`specularColorMap`,n.specularColorTexture,Ue)),Promise.all(r)}},ff=class{constructor(e){this.parser=e,this.name=X.EXT_MATERIALS_BUMP}getMaterialType(e){return $d(this.parser,e,this.name)===null?null:$a}extendMaterialParams(e,t){let n=$d(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return t.bumpScale=n.bumpFactor===void 0?1:n.bumpFactor,n.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,`bumpMap`,n.bumpTexture)),Promise.all(r)}},pf=class{constructor(e){this.parser=e,this.name=X.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return $d(this.parser,e,this.name)===null?null:$a}extendMaterialParams(e,t){let n=$d(this.parser,e,this.name);if(n===null)return Promise.resolve();let r=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,`anisotropyMap`,n.anisotropyTexture)),Promise.all(r)}},mf=class{constructor(e){this.parser=e,this.name=X.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let i=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures`);return null}return t.loadTextureImage(e,i.source,a)}},hf=class{constructor(e){this.parser=e,this.name=X.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},gf=class{constructor(e){this.parser=e,this.name=X.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,r=n.json,i=r.textures[e];if(!i.extensions||!i.extensions[t])return null;let a=i.extensions[t],o=r.images[a.source],s=n.textureLoader;if(o.uri){let e=n.options.manager.getHandler(o.uri);e!==null&&(s=e)}return n.loadTextureImage(e,a.source,s)}},_f=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let e=n.extensions[this.name],r=this.parser.getDependency(`buffer`,e.buffer),i=this.parser.options.meshoptDecoder;if(!i||!i.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw Error(`THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files`);return null}return r.then(function(t){let n=e.byteOffset||0,r=e.byteLength||0,a=e.count,o=e.byteStride,s=new Uint8Array(t,n,r);return i.decodeGltfBufferAsync?i.decodeGltfBufferAsync(a,o,s,e.mode,e.filter).then(function(e){return e.buffer}):i.ready.then(function(){let t=new ArrayBuffer(a*o);return i.decodeGltfBuffer(new Uint8Array(t),a,o,s,e.mode,e.filter),t})})}else return null}},vf=class{constructor(e){this.name=X.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let r=t.meshes[n.mesh];for(let e of r.primitives)if(e.mode!==kf.TRIANGLES&&e.mode!==kf.TRIANGLE_STRIP&&e.mode!==kf.TRIANGLE_FAN&&e.mode!==void 0)return null;let i=n.extensions[this.name].attributes,a=[],o={};for(let e in i)a.push(this.parser.getDependency(`accessor`,i[e]).then(t=>(o[e]=t,o[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),n=t.isGroup?t.children:[t],r=e[0].count,i=[];for(let e of n){let t=new W,n=new V,a=new Pt,s=new V(1,1,1),c=new Gi(e.geometry,e.material,r);for(let e=0;e<r;e++)o.TRANSLATION&&n.fromBufferAttribute(o.TRANSLATION,e),o.ROTATION&&a.fromBufferAttribute(o.ROTATION,e),o.SCALE&&s.fromBufferAttribute(o.SCALE,e),c.setMatrixAt(e,t.compose(n,a,s));for(let t in o)if(t===`_COLOR_0`){let e=o[t];c.instanceColor=new Li(e.array,e.itemSize,e.normalized)}else t!==`TRANSLATION`&&t!==`ROTATION`&&t!==`SCALE`&&e.geometry.setAttribute(t,o[t]);kn.prototype.copy.call(c,e),this.parser.assignFinalMaterial(c),i.push(c)}return t.isGroup?(t.clear(),t.add(...i),t):i[0]}))}},yf=`glTF`,bf=12,xf={JSON:1313821514,BIN:5130562},Sf=class{constructor(e){this.name=X.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,bf),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yf)throw Error(`THREE.GLTFLoader: Unsupported glTF-Binary header.`);if(this.header.version<2)throw Error(`THREE.GLTFLoader: Legacy binary file detected.`);let r=this.header.length-bf,i=new DataView(e,bf),a=0;for(;a<r;){let t=i.getUint32(a,!0);a+=4;let r=i.getUint32(a,!0);if(a+=4,r===xf.JSON){let r=new Uint8Array(e,bf+a,t);this.content=n.decode(r)}else if(r===xf.BIN){let n=bf+a;this.body=e.slice(n,n+t)}a+=t}if(this.content===null)throw Error(`THREE.GLTFLoader: JSON content not found.`)}},Cf=class{constructor(e,t){if(!t)throw Error(`THREE.GLTFLoader: No DRACOLoader instance provided.`);this.name=X.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,r=this.dracoLoader,i=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},s={},c={};for(let e in a){let t=Pf[e]||e.toLowerCase();o[t]=a[e]}for(let t in e.attributes){let r=Pf[t]||t.toLowerCase();if(a[t]!==void 0){let i=n.accessors[e.attributes[t]];c[r]=Af[i.componentType].name,s[r]=i.normalized===!0}}return t.getDependency(`bufferView`,i).then(function(e){return new Promise(function(t,n){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let n=e.attributes[t],r=s[t];r!==void 0&&(n.normalized=r)}t(e)},o,c,We,n)})})}},wf=class{constructor(){this.name=X.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0?e:(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0,e)}},Tf=class{constructor(){this.name=X.KHR_MESH_QUANTIZATION}},Ef=class extends co{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r*3+r;for(let e=0;e!==r;e++)t[e]=n[i+e];return t}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=o*2,c=o*3,l=r-t,u=(n-t)/l,d=u*u,f=d*u,p=e*c,m=p-c,h=-2*f+3*d,g=f-d,_=1-h,v=g-d+u;for(let e=0;e!==o;e++){let t=a[m+e+o],n=a[m+e+s]*l,r=a[p+e+o],c=a[p+e]*l;i[e]=_*t+v*n+h*r+g*c}return i}},Df=new Pt,Of=class extends Ef{interpolate_(e,t,n,r){let i=super.interpolate_(e,t,n,r);return Df.fromArray(i).normalize().toArray(i),i}},kf={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Af={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jf={9728:o,9729:l,9984:s,9985:u,9986:c,9987:d},Mf={33071:i,33648:a,10497:r},Nf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pf={POSITION:`position`,NORMAL:`normal`,TANGENT:`tangent`,TEXCOORD_0:`uv`,TEXCOORD_1:`uv1`,TEXCOORD_2:`uv2`,TEXCOORD_3:`uv3`,COLOR_0:`color`,WEIGHTS_0:`skinWeight`,JOINTS_0:`skinIndex`},Ff={scale:`scale`,translation:`position`,rotation:`quaternion`,weights:`morphTargetInfluences`},If={CUBICSPLINE:void 0,LINEAR:F,STEP:Ie},Lf={OPAQUE:`OPAQUE`,MASK:`MASK`,BLEND:`BLEND`};function Rf(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Qa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:0})),e.DefaultMaterial}function zf(e,t,n){for(let r in n.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=n.extensions[r])}function Bf(e,t){t.extras!==void 0&&(typeof t.extras==`object`?Object.assign(e.userData,t.extras):console.warn(`THREE.GLTFLoader: Ignoring primitive type .extras, `+t.extras))}function Vf(e,t,n){let r=!1,i=!1,a=!1;for(let e=0,n=t.length;e<n;e++){let n=t[e];if(n.POSITION!==void 0&&(r=!0),n.NORMAL!==void 0&&(i=!0),n.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);let o=[],s=[],c=[];for(let l=0,u=t.length;l<u;l++){let u=t[l];if(r){let t=u.POSITION===void 0?e.attributes.position:n.getDependency(`accessor`,u.POSITION);o.push(t)}if(i){let t=u.NORMAL===void 0?e.attributes.normal:n.getDependency(`accessor`,u.NORMAL);s.push(t)}if(a){let t=u.COLOR_0===void 0?e.attributes.color:n.getDependency(`accessor`,u.COLOR_0);c.push(t)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(c)]).then(function(t){let n=t[0],o=t[1],s=t[2];return r&&(e.morphAttributes.position=n),i&&(e.morphAttributes.normal=o),a&&(e.morphAttributes.color=s),e.morphTargetsRelative=!0,e})}function Hf(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let n=0,r=t.weights.length;n<r;n++)e.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){let n=t.extras.targetNames;if(e.morphTargetInfluences.length===n.length){e.morphTargetDictionary={};for(let t=0,r=n.length;t<r;t++)e.morphTargetDictionary[n[t]]=t}else console.warn(`THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.`)}}function Uf(e){let t,n=e.extensions&&e.extensions[X.KHR_DRACO_MESH_COMPRESSION];if(t=n?`draco:`+n.bufferView+`:`+n.indices+`:`+Wf(n.attributes):e.indices+`:`+Wf(e.attributes)+`:`+e.mode,e.targets!==void 0)for(let n=0,r=e.targets.length;n<r;n++)t+=`:`+Wf(e.targets[n]);return t}function Wf(e){let t=``,n=Object.keys(e).sort();for(let r=0,i=n.length;r<i;r++)t+=n[r]+`:`+e[n[r]]+`;`;return t}function Gf(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error(`THREE.GLTFLoader: Unsupported normalized accessor component type.`)}}function Kf(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?`image/jpeg`:e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?`image/webp`:e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?`image/ktx2`:`image/png`}var qf=new W,Jf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qd,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,i=!1,a=-1;if(typeof navigator<`u`&&navigator.userAgent!==void 0){let e=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(e)===!0;let t=e.match(/Version\/(\d+)/);r=n&&t?parseInt(t[1],10):-1,i=e.indexOf(`Firefox`)>-1,a=i?e.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>`u`||n&&r<17||i&&a<98?this.textureLoader=new Po(this.options.manager):this.textureLoader=new as(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jo(this.options.manager),this.fileLoader.setResponseType(`arraybuffer`),this.options.crossOrigin===`use-credentials`&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,r=this.json,i=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([n.getDependencies(`scene`),n.getDependencies(`animation`),n.getDependencies(`camera`)])}).then(function(t){let a={scene:t[0][r.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:r.asset,parser:n,userData:{}};return zf(i,a,r),Bf(a,r),Promise.all(n._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let r=t[n].joints;for(let t=0,n=r.length;t<n;t++)e[r[t]].isBone=!0}for(let t=0,r=e.length;t<r;t++){let r=e[t];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let r=n.clone(),i=(e,t)=>{let n=this.associations.get(e);n!=null&&this.associations.set(t,n);for(let[n,r]of e.children.entries())i(r,t.children[n])};return i(n,r),r.name+=`_instance_`+ e.uses[t]++,r}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let r=e(t[n]);if(r)return r}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let r=0;r<t.length;r++){let i=e(t[r]);i&&n.push(i)}return n}getDependency(e,t){let n=e+`:`+t,r=this.cache.get(n);if(!r){switch(e){case`scene`:r=this.loadScene(t);break;case`node`:r=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case`mesh`:r=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case`accessor`:r=this.loadAccessor(t);break;case`bufferView`:r=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case`buffer`:r=this.loadBuffer(t);break;case`material`:r=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case`texture`:r=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case`skin`:r=this.loadSkin(t);break;case`animation`:r=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case`camera`:r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw Error(`Unknown type: `+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,r=this.json[e+(e===`mesh`?`es`:`s`)]||[];t=Promise.all(r.map(function(t,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!==`arraybuffer`)throw Error(`THREE.GLTFLoader: `+t.type+` buffer type is not supported.`);if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[X.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,i){n.load(rs.resolveURL(t.uri,r.path),e,void 0,function(){i(Error(`THREE.GLTFLoader: Failed to load buffer "`+t.uri+`".`))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency(`buffer`,t.buffer).then(function(e){let n=t.byteLength||0,r=t.byteOffset||0;return e.slice(r,r+n)})}loadAccessor(e){let t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let e=Nf[r.type],t=Af[r.componentType],n=r.normalized===!0,i=new t(r.count*e);return Promise.resolve(new vr(i,e,n))}let i=[];return r.bufferView===void 0?i.push(null):i.push(this.getDependency(`bufferView`,r.bufferView)),r.sparse!==void 0&&(i.push(this.getDependency(`bufferView`,r.sparse.indices.bufferView)),i.push(this.getDependency(`bufferView`,r.sparse.values.bufferView))),Promise.all(i).then(function(e){let i=e[0],a=Nf[r.type],o=Af[r.componentType],s=o.BYTES_PER_ELEMENT,c=s*a,l=r.byteOffset||0,u=r.bufferView===void 0?void 0:n.bufferViews[r.bufferView].byteStride,d=r.normalized===!0,f,p;if(u&&u!==c){let e=Math.floor(l/u),n=`InterleavedBuffer:`+r.bufferView+`:`+r.componentType+`:`+e+`:`+r.count,c=t.cache.get(n);c||(f=new o(i,e*u,r.count*u/s),c=new Pr(f,u/s),t.cache.add(n,c)),p=new Ir(c,a,l%u/s,d)}else f=i===null?new o(r.count*a):new o(i,l,r.count*a),p=new vr(f,a,d);if(r.sparse!==void 0){let t=Nf.SCALAR,n=Af[r.sparse.indices.componentType],s=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,l=new n(e[1],s,r.sparse.count*t),u=new o(e[2],c,r.sparse.count*a);i!==null&&(p=new vr(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(p.setX(t,u[e*a]),a>=2&&p.setY(t,u[e*a+1]),a>=3&&p.setZ(t,u[e*a+2]),a>=4&&p.setW(t,u[e*a+3]),a>=5)throw Error(`THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.`)}p.normalized=d}return p})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,i=t.images[r],a=this.textureLoader;if(i.uri){let e=n.manager.getHandler(i.uri);e!==null&&(a=e)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let r=this,i=this.json,a=i.textures[e],o=i.images[t],s=(o.uri||o.bufferView)+`:`+a.sampler;if(this.textureCache[s])return this.textureCache[s];let c=this.loadImageSource(t,n).then(function(t){t.flipY=!1,t.name=a.name||o.name||``,t.name===``&&typeof o.uri==`string`&&o.uri.startsWith(`data:image/`)===!1&&(t.name=o.uri);let n=(i.samplers||{})[a.sampler]||{};return t.magFilter=jf[n.magFilter]||1006,t.minFilter=jf[n.minFilter]||1008,t.wrapS=Mf[n.wrapS]||1e3,t.wrapT=Mf[n.wrapT]||1e3,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==1003&&t.minFilter!==1006,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[s]=c,c}loadImageSource(e,t){let n=this,r=this.json,i=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(e=>e.clone());let a=r.images[e],o=self.URL||self.webkitURL,s=a.uri||``,c=!1;if(a.bufferView!==void 0)s=n.getDependency(`bufferView`,a.bufferView).then(function(e){c=!0;let t=new Blob([e],{type:a.mimeType});return s=o.createObjectURL(t),s});else if(a.uri===void 0)throw Error(`THREE.GLTFLoader: Image `+e+` is missing URI and bufferView`);let l=Promise.resolve(s).then(function(e){return new Promise(function(n,r){let a=n;t.isImageBitmapLoader===!0&&(a=function(e){let t=new Xt(e);t.needsUpdate=!0,n(t)}),t.load(rs.resolveURL(e,i.path),a,void 0,r)})}).then(function(e){return c===!0&&o.revokeObjectURL(s),Bf(e,a),e.userData.mimeType=a.mimeType||Kf(a.uri),e}).catch(function(e){throw console.error(`THREE.GLTFLoader: Couldn't load texture`,s),e});return this.sourceCache[e]=l,l}assignTexture(e,t,n,r){let i=this;return this.getDependency(`texture`,n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),i.extensions[X.KHR_TEXTURE_TRANSFORM]){let e=n.extensions===void 0?void 0:n.extensions[X.KHR_TEXTURE_TRANSFORM];if(e){let t=i.associations.get(a);a=i.extensions[X.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),i.associations.set(a,t)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,r=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let e=`PointsMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new ma,Rr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,t.sizeAttenuation=!1,this.cache.add(e,t)),n=t}else if(e.isLine){let e=`LineBasicMaterial:`+n.uuid,t=this.cache.get(e);t||(t=new ea,Rr.prototype.copy.call(t,n),t.color.copy(n.color),t.map=n.map,this.cache.add(e,t)),n=t}if(r||i||a){let e=`ClonedMaterial:`+n.uuid+`:`;r&&(e+=`derivative-tangents:`),i&&(e+=`vertex-colors:`),a&&(e+=`flat-shading:`);let t=this.cache.get(e);t||(t=n.clone(),i&&(t.vertexColors=!0),a&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(n))),n=t}e.material=n}getMaterialType(){return Qa}loadMaterial(e){let t=this,n=this.json,r=this.extensions,i=n.materials[e],a,o={},s=i.extensions||{},c=[];if(s[X.KHR_MATERIALS_UNLIT]){let e=r[X.KHR_MATERIALS_UNLIT];a=e.getMaterialType(),c.push(e.extendParams(o,i,t))}else{let n=i.pbrMetallicRoughness||{};if(o.color=new G(1,1,1),o.opacity=1,Array.isArray(n.baseColorFactor)){let e=n.baseColorFactor;o.color.setRGB(e[0],e[1],e[2],We),o.opacity=e[3]}n.baseColorTexture!==void 0&&c.push(t.assignTexture(o,`map`,n.baseColorTexture,Ue)),o.metalness=n.metallicFactor===void 0?1:n.metallicFactor,o.roughness=n.roughnessFactor===void 0?1:n.roughnessFactor,n.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,`metalnessMap`,n.metallicRoughnessTexture)),c.push(t.assignTexture(o,`roughnessMap`,n.metallicRoughnessTexture))),a=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,o)})))}i.doubleSided===!0&&(o.side=2);let l=i.alphaMode||Lf.OPAQUE;if(l===Lf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===Lf.MASK&&(o.alphaTest=i.alphaCutoff===void 0?.5:i.alphaCutoff)),i.normalTexture!==void 0&&a!==K&&(c.push(t.assignTexture(o,`normalMap`,i.normalTexture)),o.normalScale=new B(1,1),i.normalTexture.scale!==void 0)){let e=i.normalTexture.scale;o.normalScale.set(e,e)}if(i.occlusionTexture!==void 0&&a!==K&&(c.push(t.assignTexture(o,`aoMap`,i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&a!==K){let e=i.emissiveFactor;o.emissive=new G().setRGB(e[0],e[1],e[2],We)}return i.emissiveTexture!==void 0&&a!==K&&c.push(t.assignTexture(o,`emissiveMap`,i.emissiveTexture,Ue)),Promise.all(c).then(function(){let n=new a(o);return i.name&&(n.name=i.name),Bf(n,i),t.associations.set(n,{materials:e}),i.extensions&&zf(r,n,i),n})}createUniqueName(e){let t=xs.sanitizeNodeName(e||``);return t in this.nodeNamesUsed?t+`_`+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,r=this.primitiveCache;function i(e){return n[X.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(n){return Xf(n,e,t)})}let a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n],s=Uf(o),c=r[s];if(c)a.push(c.promise);else{let e;e=o.extensions&&o.extensions[X.KHR_DRACO_MESH_COMPRESSION]?i(o):Xf(new Nr,o,t),r[s]={primitive:o,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,r=this.extensions,i=n.meshes[e],a=i.primitives,o=[];for(let e=0,t=a.length;e<t;e++){let t=a[e].material===void 0?Rf(this.cache):this.getDependency(`material`,a[e].material);o.push(t)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(n){let o=n.slice(0,n.length-1),s=n[n.length-1],c=[];for(let n=0,l=s.length;n<l;n++){let l=s[n],u=a[n],d,f=o[n];if(u.mode===kf.TRIANGLES||u.mode===kf.TRIANGLE_STRIP||u.mode===kf.TRIANGLE_FAN||u.mode===void 0)d=i.isSkinnedMesh===!0?new ji(l,f):new q(l,f),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),u.mode===kf.TRIANGLE_STRIP?d.geometry=Jd(d.geometry,1):u.mode===kf.TRIANGLE_FAN&&(d.geometry=Jd(d.geometry,2));else if(u.mode===kf.LINES)d=new fa(l,f);else if(u.mode===kf.LINE_STRIP)d=new ca(l,f);else if(u.mode===kf.LINE_LOOP)d=new pa(l,f);else if(u.mode===kf.POINTS)d=new ya(l,f);else throw Error(`THREE.GLTFLoader: Primitive mode unsupported: `+u.mode);Object.keys(d.geometry.morphAttributes).length>0&&Hf(d,i),d.name=t.createUniqueName(i.name||`mesh_`+e),Bf(d,i),u.extensions&&zf(r,d,u),t.assignFinalMaterial(d),c.push(d)}for(let n=0,r=c.length;n<r;n++)t.associations.set(c[n],{meshes:e,primitives:n});if(c.length===1)return i.extensions&&zf(r,c[0],i),c[0];let l=new An;i.extensions&&zf(r,l,i),t.associations.set(l,{meshes:e});for(let e=0,t=c.length;e<t;e++)l.add(c[e]);return l})}loadCamera(e){let t,n=this.json.cameras[e],r=n[n.type];if(!r){console.warn(`THREE.GLTFLoader: Missing camera parameters.`);return}return n.type===`perspective`?t=new Jo(Nt.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type===`orthographic`&&(t=new $o(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Bf(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let e=0,r=t.joints.length;e<r;e++)n.push(this._loadNodeShallow(t.joints[e]));return t.inverseBindMatrices===void 0?n.push(null):n.push(this.getDependency(`accessor`,t.inverseBindMatrices)),Promise.all(n).then(function(e){let n=e.pop(),r=e,i=[],a=[];for(let e=0,o=r.length;e<o;e++){let o=r[e];if(o){i.push(o);let t=new W;n!==null&&t.fromArray(n.array,e*16),a.push(t)}else console.warn(`THREE.GLTFLoader: Joint "%s" could not be found.`,t.joints[e])}return new Ii(i,a)})}loadAnimation(e){let t=this.json,n=this,r=t.animations[e],i=r.name?r.name:`animation_`+e,a=[],o=[],s=[],c=[],l=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],n=r.samplers[t.sampler],i=t.target,u=i.node,d=r.parameters===void 0?n.input:r.parameters[n.input],f=r.parameters===void 0?n.output:r.parameters[n.output];i.node!==void 0&&(a.push(this.getDependency(`node`,u)),o.push(this.getDependency(`accessor`,d)),s.push(this.getDependency(`accessor`,f)),c.push(n),l.push(i))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(s),Promise.all(c),Promise.all(l)]).then(function(e){let t=e[0],a=e[1],o=e[2],s=e[3],c=e[4],l=[];for(let e=0,r=t.length;e<r;e++){let r=t[e],i=a[e],u=o[e],d=s[e],f=c[e];if(r===void 0)continue;r.updateMatrix&&r.updateMatrix();let p=n._createAnimationTracks(r,i,u,d,f);if(p)for(let e=0;e<p.length;e++)l.push(p[e])}let u=new So(i,void 0,l);return Bf(u,r),u})}createNodeMesh(e){let t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency(`mesh`,r.mesh).then(function(e){let t=n._getNodeRef(n.meshCache,r.mesh,e);return r.weights!==void 0&&t.traverse(function(e){if(e.isMesh)for(let t=0,n=r.weights.length;t<n;t++)e.morphTargetInfluences[t]=r.weights[t]}),t})}loadNode(e){let t=this.json,n=this,r=t.nodes[e],i=n._loadNodeShallow(e),a=[],o=r.children||[];for(let e=0,t=o.length;e<t;e++)a.push(n.getDependency(`node`,o[e]));let s=r.skin===void 0?Promise.resolve(null):n.getDependency(`skin`,r.skin);return Promise.all([i,Promise.all(a),s]).then(function(e){let t=e[0],n=e[1],r=e[2];r!==null&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(r,qf)});for(let e=0,r=n.length;e<r;e++)t.add(n[e]);if(t.userData.pivot!==void 0&&n.length>0){let e=t.userData.pivot,r=n[0];t.pivot=new V().fromArray(e),t.position.x-=e[0],t.position.y-=e[1],t.position.z-=e[2],r.position.set(0,0,0),delete t.userData.pivot}return t})}_loadNodeShallow(e){let t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let i=t.nodes[e],a=i.name?r.createUniqueName(i.name):``,o=[],s=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return s&&o.push(s),i.camera!==void 0&&o.push(r.getDependency(`camera`,i.camera).then(function(e){return r._getNodeRef(r.cameraCache,i.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if(o=i.isBone===!0?new Mi:t.length>1?new An:t.length===1?t[0]:new kn,o!==t[0])for(let e=0,n=t.length;e<n;e++)o.add(t[e]);if(i.name&&(o.userData.name=i.name,o.name=a),Bf(o,i),i.extensions&&zf(n,o,i),i.matrix!==void 0){let e=new W;e.fromArray(i.matrix),o.applyMatrix4(e)}else i.translation!==void 0&&o.position.fromArray(i.translation),i.rotation!==void 0&&o.quaternion.fromArray(i.rotation),i.scale!==void 0&&o.scale.fromArray(i.scale);if(!r.associations.has(o))r.associations.set(o,{});else if(i.mesh!==void 0&&r.meshCache.refs[i.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],r=this,i=new An;n.name&&(i.name=r.createUniqueName(n.name)),Bf(i,n),n.extensions&&zf(t,i,n);let a=n.nodes||[],o=[];for(let e=0,t=a.length;e<t;e++)o.push(r.getDependency(`node`,a[e]));return Promise.all(o).then(function(e){for(let t=0,n=e.length;t<n;t++){let n=e[t];n.parent===null?i.add(n):i.add(Yd(n))}return r.associations=(e=>{let t=new Map;for(let[e,n]of r.associations)(e instanceof Rr||e instanceof Xt)&&t.set(e,n);return e.traverse(e=>{let n=r.associations.get(e);n!=null&&t.set(e,n)}),t})(i),i})}_createAnimationTracks(e,t,n,r,i){let a=[],o=e.name?e.name:e.uuid,s=[];function c(e){e.morphTargetInfluences&&s.push(e.name?e.name:e.uuid)}Ff[i.path]===Ff.weights?(c(e),e.isGroup&&e.children.forEach(c)):s.push(o);let l;switch(Ff[i.path]){case Ff.weights:l=_o;break;case Ff.rotation:l=yo;break;case Ff.translation:case Ff.scale:l=xo;break;default:switch(n.itemSize){case 1:l=_o;break;default:l=xo;break}break}let u=r.interpolation===void 0?F:If[r.interpolation],d=this._getArrayFromAccessor(n);for(let e=0,n=s.length;e<n;e++){let n=new l(s[e]+`.`+Ff[i.path],t.array,d,u);r.interpolation===`CUBICSPLINE`&&this._createCubicSplineTrackInterpolant(n),a.push(n)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=Gf(t.constructor),n=new Float32Array(t.length);for(let r=0,i=t.length;r<i;r++)n[r]=t[r]*e;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof yo?Of:Ef)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Yf(e,t,n){let r=t.attributes,i=new er;if(r.POSITION!==void 0){let e=n.json.accessors[r.POSITION],t=e.min,a=e.max;if(t!==void 0&&a!==void 0){if(i.set(new V(t[0],t[1],t[2]),new V(a[0],a[1],a[2])),e.normalized){let t=Gf(Af[e.componentType]);i.min.multiplyScalar(t),i.max.multiplyScalar(t)}}else{console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`);return}}else return;let a=t.targets;if(a!==void 0){let e=new V,t=new V;for(let r=0,i=a.length;r<i;r++){let i=a[r];if(i.POSITION!==void 0){let r=n.json.accessors[i.POSITION],a=r.min,o=r.max;if(a!==void 0&&o!==void 0){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(o[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(o[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(o[2]))),r.normalized){let e=Gf(Af[r.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn(`THREE.GLTFLoader: Missing min/max properties for accessor POSITION.`)}}i.expandByVector(e)}e.boundingBox=i;let o=new Tr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function Xf(e,t,n){let r=t.attributes,i=[];function a(t,r){return n.getDependency(`accessor`,t).then(function(t){e.setAttribute(r,t)})}for(let t in r){let n=Pf[t]||t.toLowerCase();n in e.attributes||i.push(a(r[t],n))}if(t.indices!==void 0&&!e.index){let r=n.getDependency(`accessor`,t.indices).then(function(t){e.setIndex(t)});i.push(r)}return U.workingColorSpace!==`srgb-linear`&&`COLOR_0`in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${U.workingColorSpace}" not supported.`),Bf(e,t),Yf(e,t,n),Promise.all(i).then(function(){return t.targets===void 0?e:Vf(e,t.targets,n)})}var Zf={paper:new G(`#efe6d2`),ink:new G(`#24211d`),mist:new G(`#8d897f`),jade:new G(`#3a7465`),azurite:new G(`#2e5d78`)},Qf=`
float inkHash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float inkNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(inkHash(i), inkHash(i + vec2(1.0, 0.0)), u.x), mix(inkHash(i + vec2(0.0, 1.0)), inkHash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float inkFbm(vec2 p) { float v = 0.0, a = 0.5; for (int k = 0; k < 4; k++) { v += a * inkNoise(p); p *= 2.03; a *= 0.5; } return v; }
`;function $f(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ep(e=512,t=11){let n=document.createElement(`canvas`);n.width=n.height=e;let r=n.getContext(`2d`);r.fillStyle=`#f4ecdc`,r.fillRect(0,0,e,e);let i=$f(t);for(let t=0;t<40;t++){let t=i()*e,n=i()*e,a=20+i()*90,o=r.createRadialGradient(t,n,0,t,n,a);o.addColorStop(0,`rgba(120, 100, 70, ${.025+i()*.03})`),o.addColorStop(1,`rgba(120, 100, 70, 0)`),r.fillStyle=o,r.fillRect(t-a,n-a,a*2,a*2)}for(let t=0;t<2600;t++){let t=i()*e,n=i()*e,a=i()*Math.PI,o=2+i()*14;r.strokeStyle=`rgba(90, 75, 55, ${.03+i()*.07})`,r.lineWidth=i()<.85?.6:1.2,r.beginPath(),r.moveTo(t,n),r.quadraticCurveTo(t+Math.cos(a)*o*.5+(i()-.5)*3,n+Math.sin(a)*o*.5,t+Math.cos(a)*o,n+Math.sin(a)*o),r.stroke()}for(let t=0;t<500;t++){let t=i()*e,n=i()*e,a=i()*Math.PI,o=3+i()*10;r.strokeStyle=`rgba(255, 252, 240, ${.25+i()*.3})`,r.lineWidth=.6,r.beginPath(),r.moveTo(t,n),r.lineTo(t+Math.cos(a)*o,n+Math.sin(a)*o),r.stroke()}return n}var tp=null;function np(){return tp||(tp=new Sa(ep()),tp.colorSpace=Ue,tp.wrapS=tp.wrapT=r),tp}function rp(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=$f(5);for(let e=0;e<18;e++){let e=128/2+(n()-.5)*30,r=128/2+(n()-.5)*20,i=30+n()*30,a=t.createRadialGradient(e,r,0,e,r,i);a.addColorStop(0,`rgba(36, 33, 29, 0.10)`),a.addColorStop(1,`rgba(36, 33, 29, 0)`),t.fillStyle=a,t.fillRect(0,0,128,128)}let r=new Sa(e);return r.colorSpace=Ue,r}var ip=new Map;function ap(e){let t=e.toFixed(5),n=ip.get(t);if(n)return n;let r=new Xa({uniforms:qa.merge([Y.fog,{uColor:{value:Zf.ink.clone()},uThickness:{value:e}}]),vertexShader:`
      #include <common>
      #include <fog_pars_vertex>
      uniform float uThickness;
      ${Qf}
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * normal);
        // brush pressure: the line swells and thins along the contour
        float pressure = 0.55 + 0.9 * inkNoise(position.xy * 5.0 + position.zx * 3.0);
        mvPosition.xyz += n * uThickness * pressure * max(1.0, -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      #include <common>
      #include <fog_pars_fragment>
      uniform vec3 uColor;
      void main() {
        gl_FragColor = vec4(uColor, 1.0);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,side:1,fog:!0});return ip.set(t,r),r}function op(e,t){let n=[];e.traverse(e=>{let t=e;t.isMesh&&!t.isInstancedMesh&&!t.userData.noOutline&&!t.userData.isOutline&&n.push(t)});let r=ap(t);for(let e of n){let t=new q(e.geometry,r);t.userData.isOutline=!0,t.raycast=()=>{},t.renderOrder=-1,e.add(t)}}function sp(e,t,n,r=3.2){return new Xa({uniforms:qa.merge([Y.fog,{uPaper:{value:Zf.paper.clone()},uInk:{value:Zf.ink.clone()},uTint:{value:e.clone()},uTintAmount:{value:t},uStrength:{value:n},uLight:{value:new V(-.5,.8,.45).normalize()},uTop:{value:r},uOpacity:{value:1}}]),vertexShader:`
      #include <common>
      #include <fog_pars_vertex>
      varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        vec4 mvPosition = viewMatrix * world;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      #include <common>
      #include <fog_pars_fragment>
      uniform vec3 uPaper, uInk, uTint, uLight;
      uniform float uTintAmount, uStrength, uTop, uOpacity;
      varying vec3 vWorld;
      ${Qf}
      void main() {
        vec3 n = normalize(cross(dFdx(vWorld), dFdy(vWorld)));
        float lit = clamp(dot(n, uLight), 0.0, 1.0);
        float h = clamp(vWorld.y / uTop, 0.0, 1.0);
        // 皴法：dry-brush streaks running down the slopes
        float brush = inkFbm(vec2(vWorld.x * 1.6 + vWorld.z * 1.1, vWorld.y * 5.5));
        float ink = 0.05 + 0.85 * h + 0.55 * (1.0 - lit) + (brush - 0.5) * 0.8;
        ink = smoothstep(0.12, 0.95, ink);      // 浓淡分明: dense ink at peaks and shaded faces
        ink *= smoothstep(0.0, 0.45, vWorld.y); // wash out into the paper at the foot
        vec3 pigment = mix(uInk, uTint, uTintAmount * (1.0 - 0.5 * h));
        vec3 col = mix(uPaper, pigment, ink * uStrength);
        gl_FragColor = vec4(col, uOpacity);
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`,fog:!0})}function cp(e,t,n,r){let i=r?1.35:.72,a=[];for(let e=0;e<=7;e++){let r=e/7;a.push(new B(Math.max(.02,t*(1-r)**i),r*n))}let o=new Ra(a,10),s=o.attributes.position,c=[0,1,2].map(()=>({k:2+Math.floor(e()*4),phase:e()*Math.PI*2,amp:.08+e()*.1,tilt:e()*3})),l=(e()-.5)*.25;for(let e=0;e<s.count;e++){let t=s.getX(e),r=s.getY(e),i=s.getZ(e),a=Math.atan2(i,t),o=r/n,u=0;for(let e of c)u+=e.amp*Math.sin(e.k*a+e.phase+o*e.tilt);let d=1+u*Math.sin(Math.PI*Math.min(1,o*1.2+.1));s.setXYZ(e,t*d+l*o*o*n,r,i*d)}return o.computeVertexNormals(),o}var lp=null;function up(){return lp||(lp=new Ni(new Uint8Array([120,120,120,255,190,190,190,255,255,255,255,255]),3,1),lp.minFilter=lp.magFilter=o,lp.needsUpdate=!0),lp}function dp(e,t){let n=np();e.traverse(e=>{let r=e;if(!r.isMesh||r.userData.isOutline)return;let i=r.material,a=new eo({map:i.map??null,color:i.color?i.color.clone():new G(`#ffffff`),vertexColors:i.vertexColors,gradientMap:up()});i.dispose(),a.onBeforeCompile=e=>{Object.assign(e.uniforms,t?.uniforms??{},{uPaperTex:{value:n},uInkColor:{value:Zf.ink}}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vObj;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vObj = transformed;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>\nvarying vec3 vObj;\nuniform sampler2D uPaperTex;\nuniform vec3 uInkColor;\n${t?.fragmentDecl??``}`).replace(`#include <map_fragment>`,`#include <map_fragment>
          ${t?.fragmentAfterMap??``}
          // a little less saturation, like mineral pigment on paper
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114))), 0.12);`).replace(`#include <tonemapping_fragment>`,`{
            float facing = abs(dot(normalize(normal), normalize(vViewPosition)));
            float rim = pow(1.0 - clamp(facing, 0.0, 1.0), 2.5);
            gl_FragColor.rgb = mix(gl_FragColor.rgb, uInkColor, rim * 0.5);
            float grain = texture2D(uPaperTex, gl_FragCoord.xy / 420.0).r;
            gl_FragColor.rgb *= mix(0.82, 1.05, grain);
          }
          #include <tonemapping_fragment>`)},a.customProgramCacheKey=()=>`ink-creature-${t?.cacheKey??`plain`}`,r.material=a})}var fp={count:9,root:[0,.185,-.135],back:[0,0,-1],up:[0,1,0],side:[1,0,0],length:.46,radius:.043,fanDegrees:170,orange:14243871,cream:16773340};function pp(e){if(e<=.6)return .4+.6*Math.sin(Math.PI/2*(e/.6));let t=(e-.6)/.4;return Math.sqrt(Math.max(0,1-t*t))}function mp(e,t,n,r,i){let a=e.computeFrenetFrames(48,!1),o=[],s=[],c=[],l=new V,u=new G;for(let c=0;c<=48;c++){let d=c/48;e.getPointAt(d,l);let f=a.normals[c],p=a.binormals[c],m=Nt.smoothstep(d,.78,.86);u.copy(n).lerp(r,m);for(let e=0;e<14;e++){let n=e/14*Math.PI*2,r=1+.06*Math.sin(5*n+9*d+i)*Math.sin(Math.PI*d),a=t*pp(d)*r;o.push(l.x+a*(Math.cos(n)*f.x+Math.sin(n)*p.x),l.y+a*(Math.cos(n)*f.y+Math.sin(n)*p.y),l.z+a*(Math.cos(n)*f.z+Math.sin(n)*p.z)),s.push(u.r,u.g,u.b)}}for(let e=0;e<48;e++)for(let t=0;t<14;t++){let n=e*14+t,r=e*14+(t+1)%14,i=(e+1)*14+t,a=(e+1)*14+(t+1)%14;c.push(n,i,r,r,i,a)}let d=new Nr;return d.setAttribute(`position`,new xr(o,3)),d.setAttribute(`color`,new xr(s,3)),d.setIndex(c),d.computeVertexNormals(),d}function hp(e={}){let t={...fp,...e},n=new V(...t.back).normalize(),r=new V(...t.up).normalize(),i=new V(...t.side).normalize(),a=new G(t.orange),o=new G(t.cream),s=new Qa({vertexColors:!0,roughness:.9,metalness:0}),c=new An;c.name=`nine-tails`,c.position.set(...t.root);let l=[],u=Nt.degToRad(t.fanDegrees/2);for(let e=0;e<t.count;e++){let d=t.count===1?0:-u+2*u*e/(t.count-1),f=r.clone().multiplyScalar(Math.cos(d)).addScaledVector(i,Math.sin(d)),p=.55+(e%2?.14:-.1),m=f.clone().multiplyScalar(.85).addScaledVector(n,p).normalize(),h=t.length*(1-.08*Math.abs(Math.sin(d))),g=f.clone().multiplyScalar(.012),_=g.clone().addScaledVector(n,.09).addScaledVector(r,.05),v=_.clone().addScaledVector(m,h*.38),y=new q(mp(new La([g,_,v,v.clone().addScaledVector(m,h*.36).addScaledVector(f,.03)],!1,`centripetal`),t.radius,a,o,e*1.7),s);y.name=`tail-${e+1}`;let b=new An;b.add(y),b.userData.swayAxis=new V().crossVectors(m,n).normalize(),b.userData.swayAxis.lengthSq()<1e-6&&b.userData.swayAxis.copy(i),b.userData.phase=e*.7,c.add(b),l.push(b)}function d(e,t=1){for(let n of l){let r=t*.07*Math.sin(e*1.6+n.userData.phase);n.quaternion.setFromAxisAngle(n.userData.swayAxis,r)}}return{group:c,tails:l,update:d}}function gp(e){let t=e.width/2,n=e=>e.toFixed(3);return{uniforms:{uShape:{value:1},uHead:{value:1},uBody:{value:1},uTail:{value:1},uRevealInk:{value:new G(`#2b2722`)},uRevealPaper:{value:new G(`#e9dfc8`)}},fragmentDecl:`uniform float uShape, uHead, uBody, uTail;
uniform vec3 uRevealInk, uRevealPaper;`,fragmentAfterMap:`{
      float head = (1.0 - smoothstep(${n(e.headX-t)}, ${n(e.headX+t)}, vObj.x))
                 * smoothstep(${n(e.headY-t)}, ${n(e.headY+t)}, vObj.y);
      float tail = smoothstep(${n(e.tailX-t)}, ${n(e.tailX+t)}, vObj.x);
      float body = clamp(1.0 - head - tail, 0.0, 1.0);
      float shown = clamp(head * uHead + tail * uTail + body * uBody, 0.0, 1.0);
      vec3 blank = mix(uRevealInk, uRevealPaper, uShape);
      diffuseColor.rgb = mix(blank, diffuseColor.rgb, shown);
    }`,cacheKey:`reveal-${e.headX}-${e.headY}-${e.tailX}`}}var _p={lushu:{url:new URL(``+new URL(`lushu-B5tBPqcj.glb`,import.meta.url).href,``+import.meta.url).href,yaw:.5,reveal:{headX:-.33,headY:.53,tailX:.31,width:.05}},xuangui:{url:new URL(``+new URL(`xuangui-BRyjihXR.glb`,import.meta.url).href,``+import.meta.url).href,yaw:.5},xingxing:{url:new URL(``+new URL(`xingxing-uuActXAZ.glb`,import.meta.url).href,``+import.meta.url).href,yaw:.35},jiuweihu:{url:new URL(``+new URL(`jiuweihu-notail-BVM4IyXt.glb`,import.meta.url).href,``+import.meta.url).href,yaw:-1,nineTails:!0}},vp=new Zd,yp=new Map;function bp(e){return e in _p}function xp(e){let t=yp.get(e);if(t)return t;let n=_p[e];if(!n)return Promise.reject(Error(`No model for ${e}`));let r=vp.loadAsync(n.url).then(t=>{let r=t.scene,i=new An;i.name=`creature-${e}`;let a=new An;a.rotation.y=n.yaw,a.add(r),i.add(a);let o=null;n.nineTails&&(o=hp(),r.add(o.group));let s=n.reveal?gp(n.reveal):void 0;dp(r,s),op(r,.0035);let c=new q(new za(1.3,1),new K({map:rp(),transparent:!0,depthWrite:!1}));return c.rotation.x=-Math.PI/2,c.position.y=.004,c.userData.noOutline=!0,i.add(c),{id:e,root:i,reveal:s?.uniforms,update(e){o?.update(e,1)}}});return yp.set(e,r),r}var Sp={gameTitle:`行走山海经`,gameSubtitle:`读一句原文，走一程山路，造一只异兽`,start:`开始旅程`,continueSave:`继续旅程`,newGame:`重新开始`,newGameConfirm:`重新开始要从第一座山走起，现在的进度会被换掉。`,newGameYes:`从头开始`,newGameNo:`还是接着走`,saveNewer:`这个存档是更新的版本存的，这里打不开。刷新一下就能接着玩。`,saveReload:`刷新一下`,saveStartHere:`在这里从头开始`,saveBroken:`存档坏了，读不出来，只能从头开始。`,saveFailed:`进度没存上：可能开着无痕浏览，或者手机存储满了。关掉页面以后要从头走。`,next:`下一句`,dialogueBack:`上一句`,credits:`原文：维基文库 · 旁白和兽鸣：ElevenLabs · 立体异兽：Tripo AI · 纸片人物：Codex`,soundOn:`声音：开（点一下静音）`,soundOff:`声音：关（点一下打开）`,dialogueDone:`好`,heroLabel:`我`,gotIt:`知道了`,ok:`好`,rotatePhone:`请把手机横过来`,chapter:`南山经·鹊山`,progress:`第 {n} / {total} 山`,codex:`图鉴`,close:`关闭`,continueJourney:`继续上路`,showPlain:`看白话`,hidePlain:`收起白话`,listenOriginal:`听原文`,listenPlain:`听白话`,listenCry:`听叫声`,draftSource:`原文为初稿，待校定`,whichWay:`读一读：往哪个方向走？`,howFar:`读一读：要走多远？`,directions:{east:`东`,south:`南`,west:`西`,north:`北`},hintDirection:`再读一遍：“又东”是什么意思？“东”就是太阳升起的方向。`,hintDistance:`再读一遍原文里的数字：“{text}”。`,walking:`出发！`,arrived:`到了：{name}`,notClimbable:`原文说这座山“不可以上”，我们绕山而过。`,arriveKicker:`第 {n} 座山`,originalLabel:`原文`,plainLabel:`白话`,findsLabel:`在这里发现`,newEntry:`收入图鉴`,stampText:`收入图鉴`,buildKicker:`按文造兽`,buildIntro:`跟着原文，一句一句把它造出来。`,buildQuestion:`“{clause}”——选哪一个？`,buildWrong:`再看看原文：“{clause}”。`,buildDone:`{name}造好了！`,meetKicker:`遇见异兽`,meetButton:`收入图鉴`,codexTitle:`鹊山图鉴`,codexCount:`已收 {n} / {total}`,codexLocked:`？`,codexEmpty:`还没有发现。继续往东走吧！`,ancientRecord:`古人记载`,endingKicker:`到达东海`,endingTitle:`鹊山一系走完了！`,endingStats:`你走了 {li} 里，收了 {n} 条图鉴。`,restart:`再走一遍`,heroSelectKicker:`伯益门下`,heroSelectTitle:`你是哪一位弟子？`,heroSelectNote:`跟着伯益走遍山海，把看到的都记下来`,heroBoy:`男孩`,heroGirl:`女孩`,quests:`任务`,bag:`行囊`,levelShort:`{n} 级`,xpGain:`经验 +{n}`,levelUp:`升到 {n} 级！`,questNew:`新任务：{title}`,questDone:`完成：{title}`,noteKicker:`小知识`,quizKicker:`读原文`,quizWrong:`再读一遍原文，找一找。`,quizRight:`读对了！`,gainKicker:`获得`,gainTrinket:`饰品：{name}（{guards}）`,gainItem:`{name} × {n}`,gainCompanion:`伙伴：{name}`,gainSkill:`本事：{name}`,gainScroll:`收下：{name}`,equipKicker:`出发之前`,equipTitle:`挑两样带在身上`,equipCount:`已选 {n} / {max}`,equipGo:`出发`,ritualKicker:`祭山神`,ritualTitle:`照原文摆好祭品`,ritualHint:`点选原文里写到的祭品。`,ritualCheck:`摆好了`,ritualWrong:`还有 {n} 样不对。再读一读原文。`,ritualRight:`祭品摆对了！`,questLogTitle:`任务`,questMain:`主线：集齐《山海经》十八篇（已收 {n} 部分）`,questNoneYet:`还没有完成的任务。走到山里就会遇到。`,questDoneMark:`已完成`,bagTitle:`行囊`,bagLevel:`{level} 级 · 经验 {have} / {need}`,bagLevelMax:`{level} 级`,bagTrinkets:`饰品（最多佩 {max} 样，点一下佩上或取下）`,bagItems:`物品`,bagCompanions:`伙伴`,bagSkills:`本事`,bagScrolls:`收下的篇章`,bagEmpty:`还没有`,bagBasicSkills:`竹杖：打身边一格。投石：打两三格远。`,equipped:`佩着`,battleKicker:`小格战棋`,battleYou:`你`,battleTurn:`第 {n} 回合`,battleYourTurn:`我方`,battleEnemyTurn:`敌方`,battleWait:`待命`,battleWatching:`……`,battleCooldown:`还要 {n} 回合`,battleZhuyuLeft:`还剩 {n} 份`,battleHintMove:`点青色的格子走过去，或者直接选一招。`,battleHintMoveOrSwitch:`点青色的格子走过去，或者直接选一招。点别的伙伴可以换人。`,battleHintSkill:`选一招，再点红色的格子。`,battleHintTarget:`点红色的格子出招。`,battleStatus:`{status}！`,battleBlocked:`{item}护住了！`,battleDazed:`被震住了`,battleConfused:`迷迷糊糊……`,battleSubdued:`镇服！`,battleTired:`累倒了`,battleWon:`打赢了`,battleLost:`累倒了`,trainingWon:`怪蛇被打退，钻回草丛里去了。`,trainingAgain:`再练一场（经验 +{n}）`,trainingSkip:`先绕过去`,battleRetry:`再来一次`,battleAuto:`自动`,battleAutoOff:`取消自动`,battleAutoIn:`{n} 秒后自动`,battleAutoPlaying:`自动出招中……`,battleReequip:`换饰品再来`,tenthChallenge:`挑战难题：第十座山在哪？`,codexKind_beast:`兽`,codexKind_bird:`鸟`,codexKind_fish:`鱼`,codexKind_plant:`草木`,codexKind_mineral:`金石`,codexKind_spirit:`神`,enterMountain:`进山`,walkOriginal:`原文`,walkSearch:`搜一搜`,compassNorth:`北`,compassSouth:`南`,compassNorthYin:`北 · 阴`,compassSouthYang:`南 · 阳`,walkTutorial:`点地面就能走过去；点人可以说话。头上有“！”的人有事找你。`,walkReturn:`做到了！回去找{name}。`,walkAllDone:`这座山的事都办完了。读读原文：下一座山在哪个方向？`,walkAllDoneEnd:`鹊山一系走完了！往东走，到海边去。`,walkWrongWayEnd:`原文说{箕|jī}尾之山“其尾{踆|cún}于东海”：山的尾巴伸进了东海。往东走，到海边去。`,walkNothing:`路上小心。`,walkFind:`{name}有事找你（头上有“！”）。`,walkSideYin:`到了山的北面——古人叫它“阴”。`,walkSideYang:`到了山的南面——古人叫它“阳”。`,walkWrongWay:`原文说“{approach}”。往{dir}走不对，再读读原文。`,walkNotYet:`这座山还有事没办完：{list}。`,walkSeaEdge:`前面是西海，过不去了。`,lookKicker:`看一看`,lookPick:`就是它！`,lookNotIt:`不是它`,lookWrong:`认错了。`,lookNoted:`记下了`,searchKicker:`搜一搜`,searchFound:`搜到了：{name}`,searchWhere:`这里是山的{side}。`,searchRidge:`这里是山脊上，石头被风吹得光光的，什么也没搜到。往南或往北走走再搜。`,sideYin:`北面（阴）`,sideYang:`南面（阳）`,searchNotThis:`原文说你要找的东西不在这一面。`,battleLostWalk:`大家累倒了。伯益把你们背回了山脚的营地，歇一歇就好。`,creatureUnknown:`？`};function Z(e,t={}){return Sp[e].replace(/\{(\w+)\}/g,(e,n)=>String(t[n]??`{${n}}`))}function Cp(e){return Sp.directions[e]}var wp=``+new URL(`baiyuan-C-y1-_7H.png`,import.meta.url).href,Tp=``+new URL(`boyi-beast-body-VbsXBq0V.png`,import.meta.url).href,Ep=``+new URL(`boyi-beast-tail-PwbW2KgC.png`,import.meta.url).href,Dp=``+new URL(`boyi-Cl3GcDzT.png`,import.meta.url).href,Op=``+new URL(`changfu-CoYarao3.png`,import.meta.url).href,kp=``+new URL(`chiru-DP1Y4c0o.png`,import.meta.url).href,Ap=``+new URL(`elder-CRGVRDc_.png`,import.meta.url).href,jp=``+new URL(`fisher-BbwLjsNv.png`,import.meta.url).href,Mp=``+new URL(`guaishe-CH1R8115.png`,import.meta.url).href,Np=``+new URL(`guanguan-CxhPPC4H.png`,import.meta.url).href,Pp=``+new URL(`gui-BCJ6mWDy.png`,import.meta.url).href,Fp=``+new URL(`herbalist-C_DeaF-8.png`,import.meta.url).href,Ip=``+new URL(`hero-boy-8fCUQyZz.png`,import.meta.url).href,Lp=``+new URL(`hero-girl-_mRIfIP1.png`,import.meta.url).href,Rp=``+new URL(`ji-DWMPvnU5.png`,import.meta.url).href,zp=``+new URL(`jiucao-VzqNCsv8.png`,import.meta.url).href,Bp=``+new URL(`jiuweihu-body-aunfQELx.png`,import.meta.url).href,Vp=``+new URL(`jiuweihu-tail-DzEikvl6.png`,import.meta.url).href,Hp=``+new URL(`lei-BzCmQYjH.png`,import.meta.url).href,Up=``+new URL(`li-BO_dlOXF.png`,import.meta.url).href,Wp=``+new URL(`lu-BpAOeAiR.png`,import.meta.url).href,Gp=``+new URL(`lushu-BHwAwQG_.png`,import.meta.url).href,Kp=``+new URL(`migu-B6C7HByO.png`,import.meta.url).href,qp=``+new URL(`niu-zlKxngbC.png`,import.meta.url).href,Jp=``+new URL(`painter-Cd8we77F.png`,import.meta.url).href,Yp=``+new URL(`shanshen-DGyioC7g.png`,import.meta.url).href,Xp=``+new URL(`villager-BMs6DMjl.png`,import.meta.url).href,Zp=``+new URL(`xingxing-D-0nA0jD.png`,import.meta.url).href,Qp=``+new URL(`xuangui-Ca7_Y6Ru.png`,import.meta.url).href,$p=``+new URL(`yanmu-hg1SjV8S.png`,import.meta.url).href,em=``+new URL(`younger-DF8-Zmz9.png`,import.meta.url).href,tm=``+new URL(`zhuyu-Dk4NfYpr.png`,import.meta.url).href,nm=Object.assign({"../../assets/paper/baiyuan.png":wp,"../../assets/paper/boyi-beast-body.png":Tp,"../../assets/paper/boyi-beast-tail.png":Ep,"../../assets/paper/boyi.png":Dp,"../../assets/paper/changfu.png":Op,"../../assets/paper/chiru.png":kp,"../../assets/paper/elder.png":Ap,"../../assets/paper/fisher.png":jp,"../../assets/paper/guaishe.png":Mp,"../../assets/paper/guanguan.png":Np,"../../assets/paper/gui.png":Pp,"../../assets/paper/herbalist.png":Fp,"../../assets/paper/hero-boy.png":Ip,"../../assets/paper/hero-girl.png":Lp,"../../assets/paper/ji.png":Rp,"../../assets/paper/jiucao.png":zp,"../../assets/paper/jiuweihu-body.png":Bp,"../../assets/paper/jiuweihu-tail.png":Vp,"../../assets/paper/lei.png":Hp,"../../assets/paper/li.png":Up,"../../assets/paper/lu.png":Wp,"../../assets/paper/lushu.png":Gp,"../../assets/paper/migu.png":Kp,"../../assets/paper/niu.png":qp,"../../assets/paper/painter.png":Jp,"../../assets/paper/shanshen.png":Yp,"../../assets/paper/villager.png":Xp,"../../assets/paper/xingxing.png":Zp,"../../assets/paper/xuangui.png":Qp,"../../assets/paper/yanmu.png":$p,"../../assets/paper/younger.png":em,"../../assets/paper/zhuyu.png":tm});function rm(e){return nm[`../../assets/paper/${e}.png`]}function im(e){return!!rm(sm[e]?.body??e)}var am=new Map;function om(e){let t=am.get(e);if(!t){let n=rm(e);t=n?new Promise(e=>{let t=new Image;t.onload=()=>e(t),t.onerror=()=>e(null),t.src=n}):Promise.resolve(null),am.set(e,t)}return t}var sm={jiuweihu:{body:`jiuweihu-body`,tail:`jiuweihu-tail`,pivot:{x:.124,y:.455},base:{x:.48,y:.955},angles:[-128,-109,-90,-71,-52,-33,-14,5,24],length:.8,slim:.72},"boyi-beast":{body:`boyi-beast-body`,tail:`boyi-beast-tail`,pivot:{x:.06,y:.47},base:{x:.47,y:.94},angles:[-155,-138,-121,-104,-87,-70,-53,-36,-19],length:.4,slim:.8}};async function cm(e){let[t,n]=await Promise.all([om(e.body),om(e.tail)]);if(!t||!n)return null;let r=t.height*e.length/n.height,i=n.width*r*e.slim,a=n.height*r,o=t.width*e.pivot.x,s=t.height*e.pivot.y,c=e.base,l=0,u=0,d=t.width,f=t.height;for(let t of e.angles){let e=t*Math.PI/180,n=Math.cos(e),r=Math.sin(e);for(let[e,t]of[[-i*c.x,-a*c.y],[i*(1-c.x),-a*c.y],[-i*c.x,a*(1-c.y)],[i*(1-c.x),a*(1-c.y)]]){let i=o+e*n-t*r,a=s+e*r+t*n;l=Math.min(l,i),d=Math.max(d,i),u=Math.min(u,a),f=Math.max(f,a)}}let p=-l+4,m=-u+4,h=document.createElement(`canvas`);h.width=Math.ceil(d-l+8),h.height=Math.ceil(Math.max(f,t.height)-u+4);let g=h.getContext(`2d`);g.shadowColor=`rgba(43, 39, 34, 0.55)`,g.shadowBlur=4;for(let t of e.angles)g.save(),g.translate(p+o,m+s),g.rotate(t*Math.PI/180),g.drawImage(n,-i*c.x,-a*c.y,i,a),g.restore();return g.shadowColor=`transparent`,g.drawImage(t,p,m),lm(h)}function lm(e){let{width:t,height:n}=e,r=e.getContext(`2d`).getImageData(0,0,t,n).data,i=n-1;scan:for(;i>0;i--)for(let e=0;e<t;e++)if(r[(i*t+e)*4+3]>40)break scan;if(i>=n-2)return e;let a=document.createElement(`canvas`);return a.width=t,a.height=i+2,a.getContext(`2d`).drawImage(e,0,0),a}function um(e){let t=document.createElement(`canvas`);t.width=t.height=256;let n=t.getContext(`2d`);return n.fillStyle=`#2b2722`,n.beginPath(),n.ellipse(128,150,70,100,0,0,Math.PI*2),n.fill(),n.fillStyle=`#f8f2e4`,n.font=`72px serif`,n.textAlign=`center`,n.fillText(e.slice(0,1),128,175),t}var dm=new Map;function fm(e){let t=dm.get(e);return t||(t=(async()=>{if(sm[e])return await cm(sm[e])??um(e);let t=await om(e);if(!t)return um(e);let n=document.createElement(`canvas`);return n.width=t.width,n.height=t.height,n.getContext(`2d`).drawImage(t,0,0),n})(),dm.set(e,t)),t}async function pm(e){return(sm[e]?void 0:rm(e))||(await fm(e)).toDataURL(`image/png`)}function mm(e){return Promise.all(e.map(fm))}var hm=`xingzou-shanhaijing-save`,gm=`${hm}-prev`,_m=`${hm}-kept`;function vm(e){return{version:3,gender:e,xp:0,mountain:0,trinkets:[],equipped:[],items:{},companions:[],skills:[],questsDone:[],questActive:null,questStep:{},questMark:{},goalMet:[],goalCount:{},scrolls:[],training:0,discovered:[],built:[],met:[]}}function ym(e){let t=1;for(;t<jd.length&&e>=jd[t];)t+=1;return t}function bm(e){let t=ym(e),n=jd[t-1],r=jd[t];return{level:t,have:e-n,need:r===void 0?0:r-n}}function xm(e){return e.equipped.map(e=>Td[e]?.blocks).filter(e=>!!e)}function Sm(e){if(e.kind===`goal`){let t=e.goal;return`goal:${t.type}:${t.type===`find`?t.thing:t.type===`search`?t.ore:t.creature}`}let t=JSON.stringify(e),n=0;for(let e=0;e<t.length;e++)n=Math.imul(n,31)+t.charCodeAt(e)|0;return`${e.kind}:${(n>>>0).toString(36)}`}function Cm(e){e.questMark={};for(let[t,n]of Object.entries(e.questStep)){let r=yd.find(e=>e.id===t)?.steps[n];r&&(e.questMark[t]=Sm(r))}try{let t=localStorage.getItem(hm);return t&&Tm(t).status===`ok`&&localStorage.setItem(gm,t),localStorage.setItem(hm,JSON.stringify(e)),!0}catch{return!1}}function wm(){let e=null,t=null;try{e=localStorage.getItem(hm),t=localStorage.getItem(gm)}catch{return{status:`none`}}if(!e)return{status:`none`};let n=Tm(e);if(n.status!==`broken`||!t)return n;let r=Tm(t);return r.status===`ok`?{...r,repaired:[...r.repaired,`the save was unreadable: went back to the one before`]}:n}function Tm(e){let t;try{t=JSON.parse(e)}catch{return{status:`broken`}}if(!t||typeof t!=`object`)return{status:`broken`};if(typeof t.version==`number`&&t.version>3)return{status:`newer`};if(t.version!==1&&t.version!==2&&t.version!==3||t.gender!==`boy`&&t.gender!==`girl`)return{status:`broken`};let n=vm(t.gender),r={...n};for(let[e,i]of Object.entries(n)){let n=t[e];n!==void 0&&(Array.isArray(i)?Array.isArray(n):i===null?n===null||typeof n==`string`:typeof n==typeof i)&&(r[e]=n)}return r.version=3,{status:`ok`,player:r,repaired:Em(r,yd)}}function Em(e,t){let n=[],r=(t,r)=>{delete e.questStep[t],n.push(`${t}: ${r}`)};for(let[i,a]of Object.entries(e.questStep)){let o=t.find(e=>e.id===i);if(!o){r(i,`no such quest any more`);continue}if(e.questsDone.includes(i)){r(i,`already done`);continue}let s=e.questMark[i],c=Number.isInteger(a)?o.steps[a]:void 0;if(s&&!(c&&Sm(c)===s)){let t=o.steps.map((e,t)=>Sm(e)===s?t:-1).filter(e=>e>=0);if(t.length){let r=t.reduce((e,t)=>Math.abs(t-a)<Math.abs(e-a)?t:e);e.questStep[i]=r,n.push(`${i}: step ${a} -> ${r}`);continue}}c||r(i,`step ${a} is out of range`)}let i=n=>{let r=t.find(e=>e.id===n),i=e.questStep[n];return!!r&&i!==void 0&&r.steps[i]?.kind===`goal`},a=e.goalMet.filter(i);a.length!==e.goalMet.length&&n.push(`goalMet: dropped quests not waiting on a goal`),e.goalMet=a;for(let t of Object.keys(e.goalCount))i(t)||(delete e.goalCount[t],n.push(`goalCount: dropped ${t}`));for(let t of Object.keys(e.questMark))e.questStep[t]===void 0&&delete e.questMark[t];e.questActive&&e.questStep[e.questActive]===void 0&&(e.questActive=null);let o=e.equipped.filter(t=>e.trinkets.includes(t));return o.length!==e.equipped.length&&n.push(`equipped: dropped trinkets not owned`),e.equipped=o,n}function Dm(){try{let e=localStorage.getItem(hm);e&&localStorage.setItem(_m,e),localStorage.removeItem(hm),localStorage.removeItem(gm)}catch{}}function Om(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var km=`36, 33, 29`;function Am(e,t){let n=document.createElement(`canvas`);n.width=256,n.height=384;let r=n.getContext(`2d`),i=Om(t),a={x:256/2,y:376};r.lineCap=`round`,r.lineJoin=`round`;let o=e===`twisted`?46:14,s={x:a.x+(i()-.5)*o,y:e===`pine`?60:120},c=(e,n,i,a,o,s)=>{for(let c=0;c<14;c++){let l=c/14,u=(c+1)/14,d=Math.sin(l*Math.PI*2+t)*s,f=Math.sin(u*Math.PI*2+t)*s;r.strokeStyle=`rgba(${km}, ${.85-l*.25})`,r.lineWidth=o*(1-l*.7),r.beginPath(),r.moveTo(e+(i-e)*l+d,n+(a-n)*l),r.lineTo(e+(i-e)*u+f,n+(a-n)*u),r.stroke()}};c(a.x,a.y,s.x,s.y,e===`twisted`?20:16,e===`twisted`?18:4);let l=e===`twisted`?6:e===`pine`?5:4,u=[s];for(let t=0;t<l;t++){let n=.3+i()*.6,r=a.x+(s.x-a.x)*n,o=a.y+(s.y-a.y)*n,l=r+(t%2?1:-1)*(40+i()*60),d=o-20-i()*(e===`twisted`?90:50);c(r,o,l,d,e===`twisted`?9:6,e===`twisted`?10:3),u.push({x:l,y:d})}let d=(e,t,n,a,o,s)=>{let c=r.createRadialGradient(e,t,0,e,t,Math.max(n,a));c.addColorStop(0,`rgba(${o}, ${s})`),c.addColorStop(.7,`rgba(${o}, ${s*.8})`),c.addColorStop(1,`rgba(${o}, 0)`),r.fillStyle=c,r.beginPath(),r.ellipse(e,t,n,a,(i()-.5)*.6,0,Math.PI*2),r.fill()},f=`58, 116, 101`,p=`40, 70, 60`;if(e===`pine`)for(let e of u)for(let t=0;t<3;t++)d(e.x+(i()-.5)*30,e.y+(i()-.5)*10,44+i()*16,14+i()*6,t?f:p,.75);else if(e===`wood`)for(let e=0;e<16;e++){let e=u[Math.floor(i()*u.length)];d(e.x+(i()-.5)*70,e.y+(i()-.5)*60,34+i()*26,28+i()*20,i()<.4?p:f,.55+i()*.3)}else for(let e=0;e<6;e++){let e=u[Math.floor(i()*u.length)];d(e.x+(i()-.5)*30,e.y+(i()-.5)*20,16+i()*12,10+i()*8,i()<.5?`120, 110, 60`:p,.6)}for(let e=0;e<60;e++){let e=u[Math.floor(i()*u.length)];r.fillStyle=`rgba(${km}, ${.15+i()*.3})`,r.beginPath(),r.arc(e.x+(i()-.5)*90,e.y+(i()-.5)*70,1+i()*2.5,0,Math.PI*2),r.fill()}return n}function jm(e){let t=document.createElement(`canvas`);t.width=128,t.height=160;let n=t.getContext(`2d`),r=Om(e);n.lineCap=`round`;for(let e=0;e<9;e++){let e=30+r()*68,t=(r()-.5)*30,i=20+r()*50;n.strokeStyle=`rgba(${r()<.5?`58, 116, 101`:km}, ${.55+r()*.35})`,n.lineWidth=2+r()*2,n.beginPath(),n.moveTo(e,156),n.quadraticCurveTo(e+t*.3,(160+i)/2,e+t,i),n.stroke(),r()<.5&&(n.fillStyle=`rgba(169, 128, 47, 0.7)`,n.beginPath(),n.ellipse(e+t,i,3,9,t/60,0,Math.PI*2),n.fill())}return t}function Mm(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#9fb7b0`,t.fillRect(0,0,256,256),t.strokeStyle=`rgba(46, 93, 120, 0.45)`,t.lineWidth=2;for(let e=-1;e<=256/(32/2);e++)for(let n=-1;n<=256/32;n++){let r=n*32+(e%2?32/2:0),i=32/2*e;t.beginPath(),t.arc(r,i,32/2,Math.PI*.05,Math.PI*.95),t.stroke()}return e}function Nm(){let e=document.createElement(`canvas`);e.width=96,e.height=160;let t=e.getContext(`2d`);return t.fillStyle=`rgba(36, 33, 29, 0.9)`,t.fillRect(96/2-5,50,10,106),t.fillStyle=`#c9a76a`,t.strokeStyle=`rgba(36, 33, 29, 0.95)`,t.lineWidth=4,t.beginPath(),t.moveTo(10,14),t.lineTo(74,14),t.lineTo(90,36),t.lineTo(74,58),t.lineTo(10,58),t.closePath(),t.fill(),t.stroke(),e}function Pm(){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,`rgba(255, 246, 210, 1)`),n.addColorStop(.25,`rgba(240, 200, 110, 0.8)`),n.addColorStop(1,`rgba(240, 200, 110, 0)`),t.fillStyle=n,t.fillRect(0,0,64,64),t.strokeStyle=`rgba(255, 250, 230, 0.95)`,t.lineWidth=2,t.beginPath(),t.moveTo(64/2,6),t.lineTo(64/2,58),t.moveTo(6,64/2),t.lineTo(58,64/2),t.stroke(),e}function Fm(e){let t=document.createElement(`canvas`);t.width=192,t.height=144;let n=t.getContext(`2d`),r=Om(e),i=[];for(let e=0;e<9;e++){let t=Math.PI+e/8*Math.PI,n=70+r()*18,a=92+r()*30;i.push([192/2+Math.cos(t)*n,136+Math.sin(t)*a*(.6+r()*.35)])}n.beginPath(),n.moveTo(i[0][0],138);for(let[e,t]of i)n.lineTo(e,t);n.lineTo(i[8][0],138),n.closePath();let a=n.createLinearGradient(0,10,0,144);a.addColorStop(0,`#cfc8b6`),a.addColorStop(1,`#8f897a`),n.fillStyle=a,n.fill(),n.lineWidth=5,n.strokeStyle=`rgba(${km}, 0.9)`,n.stroke(),n.lineCap=`round`;for(let e=0;e<14;e++){let e=40+r()*112,t=40+r()*84;n.strokeStyle=`rgba(${km}, ${.25+r()*.35})`,n.lineWidth=1.5+r()*2,n.beginPath(),n.moveTo(e,t),n.quadraticCurveTo(e+(r()-.5)*12,t+8,e+(r()-.5)*16,t+14+r()*10),n.stroke()}for(let e=0;e<2;e++)n.fillStyle=`rgba(${km}, 0.55)`,n.beginPath(),n.ellipse(60+r()*72,50+r()*40,6+r()*6,4+r()*5,r(),0,Math.PI*2),n.fill();return t}function Im(e){let t=document.createElement(`canvas`);t.width=96,t.height=64;let n=t.getContext(`2d`),r=Om(e);n.lineCap=`round`;for(let e=0;e<7;e++){let e=28+r()*40,t=(r()-.5)*34,i=10+r()*30;n.strokeStyle=`rgba(${r()<.6?`58, 116, 101`:`70, 90, 60`}, ${.55+r()*.35})`,n.lineWidth=1.6+r()*1.6,n.beginPath(),n.moveTo(e,62),n.quadraticCurveTo(e+t*.2,(64+i)/2,e+t,i),n.stroke()}return r()<.35&&(n.fillStyle=r()<.5?`rgba(192, 57, 43, 0.8)`:`rgba(169, 128, 47, 0.85)`,n.beginPath(),n.arc(30+r()*36,14+r()*14,3.5,0,Math.PI*2),n.fill()),t}function Lm(){let e=document.createElement(`canvas`);e.width=96,e.height=128;let t=e.getContext(`2d`);return t.fillStyle=`rgba(192, 57, 43, 0.9)`,t.strokeStyle=`rgba(248, 242, 228, 0.95)`,t.lineWidth=6,t.lineJoin=`round`,t.beginPath(),t.moveTo(96/2,8),t.lineTo(86,58),t.lineTo(62,52),t.lineTo(60,118),t.lineTo(96/2-12,118),t.lineTo(96/2-14,52),t.lineTo(10,58),t.closePath(),t.stroke(),t.fill(),e}function Rm(){let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`);t.strokeStyle=`rgba(36, 33, 29, 0.75)`,t.lineCap=`round`;for(let e=0;e<3;e++)t.lineWidth=7-e*2,t.beginPath(),t.arc(128/2,128/2,46-e*3,.3+e,.3+e+Math.PI*1.6),t.stroke();return e}var zm={hero:1.3,xingxing:1.1,xuangui:.78,guaishe:.95,jiuweihu:1.55},Bm={move:new G(`#3f6f62`),target:new G(`#c0392b`),active:new G(`#a9802f`)},Vm=()=>0,Hm=.004,Um=.05,Wm=4,Gm=.09,Km=10,qm=.4,Jm=9.8,Ym=30,Xm=.9;function Zm(e,t){return new V(e-5/2,0,t-3/2)}var Qm=class{scene=new zn;camera=new Jo(30,1,.1,60);board=new An;tiles=[];grid;border;pieces=new Map;tweens=[];raycaster=new Cs;scenery=new An;sceneryKind=null;pitch=.92;lift=Vm;host=null;fitFov=30;flight=null;elapsed=0;reducedMotion=!1;constructor(){this.scene.background=Zf.paper.clone();let e=new Sa(ep(512,41));e.colorSpace=Ue,e.wrapS=e.wrapT=r,e.repeat.set(4,3);let t=new q(new za(16,12),new K({map:e,color:`#efe6d2`}));t.rotation.x=-Math.PI/2,t.position.y=-.01,this.scene.add(t);for(let e=0;e<4;e++)for(let t=0;t<6;t++){let n=new q(new za(.94,.94,3,3).rotateX(-Math.PI/2),new K({color:Bm.move,transparent:!0,opacity:0,depthWrite:!1}));n.position.copy(Zm(t,e)),n.userData.cell=[t,e],n.userData.flat=n.geometry.attributes.position.array.slice(),this.tiles.push(n),this.board.add(n)}this.grid=new fa(new Nr,new ea({color:Zf.ink,transparent:!0,opacity:.55})),this.border=new q(new Nr,new K({color:Zf.ink,transparent:!0,opacity:.6,side:2})),this.board.add(this.grid,this.border),this.drape(),this.scene.add(this.scenery,this.board),this.frame()}ground(e,t){return new V(e,this.lift(e,t),t)}spot(e){let t=Zm(e[0],e[1]);return this.ground(t.x,t.z)}cellPoint(e,t){return this.board.updateWorldMatrix(!0,!1),this.board.localToWorld(this.spot([e,t]))}drape(){let e=this.host?Um:Hm;for(let t of this.tiles){let n=t.geometry.attributes.position,r=t.userData.flat,i=t.position.x,a=t.position.z;for(let t=0;t<n.count;t++)n.setY(t,this.lift(i+r[t*3],a+r[t*3+2])+e-.002);n.needsUpdate=!0,t.geometry.computeBoundingSphere(),t.geometry.computeBoundingBox()}let t=[],n=(n,r,i,a,o)=>{for(let s=0;s<o;s++){let c=s/o,l=(s+1)/o,u=n+(i-n)*c,d=r+(a-r)*c,f=n+(i-n)*l,p=r+(a-r)*l;t.push(u,this.lift(u,d)+e,d,f,this.lift(f,p)+e,p)}};for(let e=0;e<=6;e++)n(-3+e,-2,-3+e,2,4*Wm);for(let e=0;e<=4;e++)n(-3,-2+e,3,-2+e,6*Wm);this.grid.geometry.dispose(),this.grid.geometry=new Nr().setAttribute(`position`,new xr(t,3));let r=Gm,i=[],a=[],o=(t,n,o,s,c,l,u)=>{let d=i.length/3;for(let f=0;f<=u;f++){let p=t+(o-t)*f/u,m=n+(s-n)*f/u;i.push(p,this.lift(p,m)+e,m,p+c*r,this.lift(p+c*r,m+l*r)+e,m+l*r),f&&a.push(d+2*f-2,d+2*f-1,d+2*f,d+2*f-1,d+2*f+1,d+2*f)}};o(-3-r,-2,3+r,-2,0,-1,6*Wm),o(-3-r,2,3+r,2,0,1,6*Wm),o(-3,-2,-3,2,-1,0,4*Wm),o(3,-2,3,2,1,0,4*Wm),this.border.geometry.dispose(),this.border.geometry=new Nr().setAttribute(`position`,new xr(i,3)).setIndex(a);for(let e of this.pieces.values())e.root.position.y=this.lift(e.root.position.x,e.root.position.z)}mountOn(e,t,n,r){this.host=e,this.lift=n,this.board.position.copy(t).setY(0),e.add(this.board),this.drape(),this.frame(r)}async unmount(e){if(this.host){if(e){let t=$m(e);await new Promise(e=>this.fly(()=>t,e))}this.host.remove(this.board),this.host=null,this.lift=Vm,this.board.position.set(0,0,0),this.scene.add(this.board),this.drape(),this.frame()}}get mounted(){return this.host!==null}get flying(){return this.flight!==null}frame(e=null){let t=()=>this.shot();e?(this.flight={from:$m(e),to:t,t:0,done:()=>{}},this.applyPose(this.flight.from)):(this.flight=null,this.applyPose(t()))}shot(){let e=0;for(let t of this.tiles)e+=this.lift(t.position.x,t.position.z);let t=this.board.position.clone().add(new V(0,e/this.tiles.length,qm)),n=new Jo(this.fitFov,this.camera.aspect,.1,60);return n.position.copy(t).add(new V(0,Math.sin(this.pitch)*Km,Math.cos(this.pitch)*Km)),n.lookAt(t),$m(n)}fly(e,t){if(this.reducedMotion){this.applyPose(e()),t();return}this.flight={from:$m(this.camera),to:e,t:0,done:t}}applyPose(e){this.camera.position.copy(e.position),this.camera.quaternion.copy(e.quaternion),this.camera.fov=e.fov,this.camera.updateProjectionMatrix()}setScenery(e){if(e===this.sceneryKind)return;this.sceneryKind=e;for(let e of[...this.scenery.children]){this.scenery.remove(e);let t=e;t.material.map?.dispose(),t.material.dispose(),t.geometry.dispose()}if(!e)return;let t=-4/2-.7;[[-3.9,t,2.4],[-2.3,t-.4,2.8],[-.7,t-.2,2.2],[1,t-.5,2.9],[2.6,t,2.3],[4,t-.3,2.6],[-6/2-.9,.2,2],[3.9,-.4,2.1]].forEach(([t,n,r],i)=>{let a=Am(e===`twisted`?`twisted`:i%3==1?`pine`:`wood`,90+i),o=new Sa(a);o.colorSpace=Ue;let s=new za(r*a.width/a.height,r);s.translate(0,r/2,0);let c=new q(s,new K({map:o,alphaTest:.35,side:2}));c.rotation.x=-this.pitch*.55,c.position.set(t,0,n),this.scenery.add(c)})}addPiece(e,t,n,r,i){this.removePiece(e);let a=zm[t]??1.1,o=a*n.width/n.height,s=new Sa(n);s.colorSpace=Ue,s.anisotropy=4;let c=new za(o,a);c.translate(0,a/2,0);let l=new q(c,new K({map:s,alphaTest:.35,side:2,transparent:!0}));l.scale.x=i,l.rotation.x=-this.pitch*.55;let u=new q(new Da(.5,32),new K({color:Zf.ink,transparent:!0,opacity:.16,depthWrite:!1}));u.rotation.x=-Math.PI/2,u.scale.set(Math.min(.9,o*.55),.32,1),u.position.y=.04;let d=new An;d.add(u,l),d.position.copy(this.spot(r)),this.board.add(d),this.pieces.set(e,{root:d,card:l,shadow:u,height:a,phase:Math.random()*6,out:!1})}removePiece(e){let t=this.pieces.get(e);t&&(this.board.remove(t.root),t.card.material.map?.dispose(),t.card.material.dispose(),t.card.geometry.dispose(),this.pieces.delete(e))}clearPieces(){for(let e of[...this.pieces.keys()])this.removePiece(e);this.mark([])}mark(e){for(let e of this.tiles)e.material.opacity=0;for(let{cell:t,mark:n}of e){let e=this.tiles[t[1]*6+t[0]];e&&(e.material.color.copy(Bm[n]),e.material.opacity=n===`active`?.4:.3)}}pick(e,t,n){let r=n.getBoundingClientRect(),i=new B((e-r.left)/r.width*2-1,-((t-r.top)/r.height)*2+1);this.raycaster.setFromCamera(i,this.camera),this.board.updateWorldMatrix(!0,!0);let a=this.raycaster.intersectObjects(this.tiles,!1)[0];return a?a.object.userData.cell:null}anchor(e){let t=this.pieces.get(e);return t?(this.board.updateWorldMatrix(!0,!1),this.board.localToWorld(t.root.position.clone().add(new V(0,t.height*.92,0)))):null}tween(e,t){return this.reducedMotion||e<=0?(t(1),Promise.resolve()):new Promise(n=>this.tweens.push({t:0,duration:e,step:t,resolve:n}))}async walk(e,t){let n=this.pieces.get(e);if(n)for(let e=1;e<t.length;e++){let r=this.spot(t[e-1]),i=this.spot(t[e]);await this.tween(.2,e=>{n.root.position.lerpVectors(r,i,e),n.root.position.y+=Math.sin(e*Math.PI)*.12})}}async lunge(e,t){let n=this.pieces.get(e);if(!n)return;let r=n.root.position.clone(),i=this.spot(t).sub(r).setY(0),a=Math.min(.45,i.length()*.4);i.normalize().multiplyScalar(a),await this.tween(.28,e=>{let t=e<.4?e/.4:1-(e-.4)/.6;n.root.position.copy(r).addScaledVector(i,t)})}async throwStone(e,t){let n=new q(new Va(.09,12,8),new K({color:Zf.ink})),r=this.spot(e).add(new V(0,.7,0)),i=this.spot(t).add(new V(0,.6,0));this.board.add(n),await this.tween(.42,e=>{n.position.lerpVectors(r,i,e),n.position.y+=Math.sin(e*Math.PI)*.9}),this.board.remove(n),n.geometry.dispose()}async ripple(e,t,n){let r=this.pieces.get(e);if(!r)return;let i=new q(new Ba(.9,1,48),new K({color:t,transparent:!0,opacity:.6,side:2,depthWrite:!1,depthTest:!1}));i.rotation.x=-Math.PI/2,i.renderOrder=3,i.position.copy(r.root.position).setY(r.root.position.y+.06),this.board.add(i),await this.tween(.6,e=>{i.scale.setScalar(.2+e*n),i.material.opacity=.6*(1-e)}),this.board.remove(i),i.geometry.dispose(),i.material.dispose()}async hit(e){let t=this.pieces.get(e);if(!t)return;let n=t.root.position.clone();await this.tween(.3,e=>{t.root.position.x=n.x+Math.sin(e*Math.PI*6)*.06*(1-e),t.card.material.color.setRGB(1,1-.55*(1-e),1-.55*(1-e))}),t.root.position.copy(n),t.card.material.color.setRGB(1,1,1)}async knockOut(e){let t=this.pieces.get(e);if(!t)return;t.out=!0;let n=t.card.rotation.x;await this.tween(.6,e=>{t.card.rotation.x=n-e*.9,t.card.material.opacity=1-e*.6})}update(e,t){this.elapsed=t;for(let t=this.tweens.length-1;t>=0;t--){let n=this.tweens[t];n.t=Math.min(1,n.t+e/n.duration);let r=n.t<.5?2*n.t*n.t:1-(-2*n.t+2)**2/2;n.step(r),n.t>=1&&(this.tweens.splice(t,1),n.resolve())}if(this.flight){let t=this.flight;t.t=this.reducedMotion?1:Math.min(1,t.t+e/Xm);let n=t.t<.5?4*t.t*t.t*t.t:1-(-2*t.t+2)**3/2,r=t.to();this.applyPose({position:t.from.position.clone().lerp(r.position,n),quaternion:t.from.quaternion.clone().slerp(r.quaternion,n),fov:t.from.fov+(r.fov-t.from.fov)*n}),t.t>=1&&(this.flight=null,t.done())}if(!this.reducedMotion)for(let e of this.pieces.values())e.out||(e.card.rotation.z=Math.sin(this.elapsed*1.6+e.phase)*.03)}resize(e,t){this.camera.aspect=e/t;let n=2*Math.atan(Jm/2/this.camera.aspect/Km);this.fitFov=Math.max(Ym,n*180/Math.PI),this.flight||this.applyPose(this.shot())}};function $m(e){return e.updateMatrixWorld(),{position:e.position.clone(),quaternion:e.quaternion.clone(),fov:e.fov}}var eh=new G(`#b8392b`),th=new G(`#bdb4a2`),nh=100,rh=.42;function ih(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ah(){let e=document.createElement(`canvas`);e.width=256,e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#cdd3c9`,t.fillRect(0,0,256,256);let n=ih(29);for(let e=0;e*16<272;e++){let r=e*16,i=e%2*(32/2);for(let e=-1;e*32<288;e++){let a=e*32+i,o=2+ +(n()<.6);for(let e=0;e<o;e++){let i=32/2-1-e*5;t.strokeStyle=`rgba(36, 33, 29, ${.32+n()*.2-e*.06})`,t.lineWidth=2.2-e*.6+n()*.5;for(let e of[0,256,-256])for(let o of[0,256,-256])t.beginPath(),t.arc(a+e,r+o,i,Math.PI*(1.04+n()*.04),Math.PI*(1.96-n()*.04)),t.stroke()}}}let i=new Sa(e);return i.colorSpace=Ue,i.wrapS=i.wrapT=r,i.repeat.set(1.8,6),i}function oh(){let e=document.createElement(`canvas`);e.width=256,e.height=128;let t=e.getContext(`2d`),n=t.createImageData(256,128);for(let e=0;e<128;e++){let t=e/128,r=.84+.05*Math.sin(t*Math.PI*2*2+.6)+.025*Math.sin(t*Math.PI*2*5+2.1);for(let t=0;t<256;t++){let i=t/256,a=1-Math.min(1,Math.max(0,(i-r)/.07+.5)),o=(e*256+t)*4;n.data[o]=n.data[o+1]=n.data[o+2]=Math.round(a*255),n.data[o+3]=255}}t.putImageData(n,0,0);let i=new Sa(e);return i.wrapT=r,i.repeat.set(1,4),i}function sh(e,t,n){let i=1024,a=document.createElement(`canvas`);a.width=i,a.height=256;let o=a.getContext(`2d`),s=ih(e),c=Array(129).fill(0);c[0]=c[128]=.55;for(let e=128;e>1;e/=2){let t=e/128*n;for(let n=e/2;n<128;n+=e)c[n]=(c[n-e/2]+c[n+e/2])/2+(s()-.5)*t}let l=e=>256*(1-Math.min(.95,Math.max(.15,c[e])));o.beginPath(),o.moveTo(0,256);for(let e=0;e<=128;e++)o.lineTo(e/128*i,l(e));o.lineTo(i,256),o.closePath();let u=o.createLinearGradient(0,256*.1,0,256);u.addColorStop(0,`rgba(${t}, 0.95)`),u.addColorStop(.45,`rgba(${t}, 0.45)`),u.addColorStop(1,`rgba(${t}, 0)`),o.fillStyle=u,o.fill(),o.strokeStyle=`rgba(${t}, 1)`,o.lineWidth=2.5,o.beginPath();for(let e=0;e<=128;e++)e===0?o.moveTo(0,l(0)):o.lineTo(e/128*i,l(e));o.stroke();let d=new Sa(a);return d.colorSpace=Ue,d.wrapS=r,d}var ch=class{scene=new zn;camera=new Jo(38,1,.1,120);mountains=[];stops=[];legs=[];mistMaterial=sp(Zf.mist,.65,.74);greenMaterial=sp(Zf.jade,.8,1);dots;legDotRange=[];legDotT=[];traveller=new An;travellerBody=new An;travellerYaw=rh;travellerCard=null;travellerFacing=1;ring;cameraTarget=new V;walk=null;current=0;reducedMotion=!1;constructor(e){this.scene.background=Zf.paper.clone(),this.scene.fog=new Rn(Zf.paper.clone(),15,32),this.scene.add(new Io(`#fffaf0`,`#8a8272`,2));let t=new ts(`#fff3dc`,1.4);t.position.set(-6,10,8),this.scene.add(t);let n=e.reduce((e,t)=>e+t.distanceLi,0)/nh,r=np().clone();r.repeat.set(14,6),r.needsUpdate=!0;let i=new q(new za(n+60,40),new K({map:r}));i.rotation.x=-Math.PI/2,i.position.x=n/2,this.scene.add(i);let a=new K({map:ah(),alphaMap:oh(),transparent:!0,depthWrite:!1});for(let[e,t]of[[-7.5,0],[n+7.5,Math.PI]]){let n=new q(new za(11,40),a);n.rotation.set(-Math.PI/2,0,t),n.position.set(e,.01,0),this.scene.add(n)}for(let e of[{z:-4.6,h:2.6,seed:41,rgb:`58, 62, 60`,rough:.9,opacity:.42},{z:-6.6,h:2.2,seed:53,rgb:`74, 86, 92`,rough:.75,opacity:.3},{z:-8.6,h:1.8,seed:67,rgb:`96, 110, 118`,rough:.6,opacity:.2}]){let t=n+60,r=sh(e.seed,e.rgb,e.rough);r.repeat.set(t/(10+e.h*2),1),r.offset.x=e.seed%7/7;let i=new q(new za(t,e.h),new K({map:r,transparent:!0,depthWrite:!1,opacity:e.opacity}));i.position.set(n/2,e.h/2-.25,e.z),i.renderOrder=-2,this.scene.add(i)}let o=new K({map:rp(),transparent:!0,depthWrite:!1}),s=new K({color:Zf.ink}),c=0;e.forEach((e,t)=>{c+=e.distanceLi/nh;let n=ih(101+t*17),r=-.6+n()*1.2,{peaks:i,trees:a,height:l}=this.buildMountain(n,!e.climbable),u=new q(i,this.mistMaterial);u.position.set(c,0,r),u.userData.height=l,op(u,.0022),this.scene.add(u),this.mountains.push(u);let d=new q(a,s);d.position.copy(u.position),this.scene.add(d);let f=new q(new za(4.2,3),o);f.rotation.x=-Math.PI/2,f.position.set(c,.015,r+.2),this.scene.add(f),this.stops.push(new V(c,0,r+2))});let l=[];for(let t=0;t+1<this.stops.length;t++){let n=this.stops[t],r=this.stops[t+1],i=n.clone().lerp(r,.5);i.z+=!e[t+1].climbable||!e[t].climbable?1.6:.5;let a=new La([n,i,r]);this.legs.push(a);let o=Math.max(4,Math.round(a.getLength()/.45)),s=l.length;for(let e=1;e<o;e++)l.push({leg:t,t:e/o,p:a.getPointAt(e/o)});this.legDotRange.push([s,l.length])}let u=new Da(.075,10).rotateX(-Math.PI/2);this.dots=new Gi(u,new K({color:`#ffffff`}),l.length);let d=new W;l.forEach((e,t)=>{d.makeRotationY(t*.7).setPosition(e.p.x,.02,e.p.z),this.dots.setMatrixAt(t,d),this.dots.setColorAt(t,th),this.legDotT[t]=e.t}),this.scene.add(this.dots),this.buildTraveller(),this.ring=new q(new Ba(.42,.5,40),new K({color:eh,transparent:!0,opacity:.85})),this.ring.rotation.x=-Math.PI/2,this.scene.add(this.ring),this.setCurrent(0,!0)}get count(){return this.stops.length}labelAnchor(e){return this.mountains[e].position.clone().setY(this.mountains[e].userData.height+.25)}setCurrent(e,t=!1){this.current=e,this.mountains.forEach((t,n)=>t.material=n<=e?this.greenMaterial:this.mistMaterial),this.legDotRange.forEach(([t,n],r)=>{for(let i=t;i<n;i++)this.dots.setColorAt(i,r<e?eh:th)}),this.dots.instanceColor&&(this.dots.instanceColor.needsUpdate=!0),this.traveller.position.copy(this.stops[e]),this.ring.position.copy(this.stops[e]).setY(.03),this.aimCamera(this.stops[e],t)}walkToNext(){let e=this.current;return e+1>=this.stops.length?Promise.resolve():this.reducedMotion?(this.setCurrent(e+1),Promise.resolve()):(this.ring.visible=!1,new Promise(t=>{let n=Math.min(3.2,1.2+this.legs[e].getLength()*.35);this.walk={leg:e,t:0,duration:n,resolve:t}}))}update(e,t){if(this.walk){let t=this.walk;t.t=Math.min(1,t.t+e/t.duration);let n=t.t<.5?2*t.t*t.t:1-(-2*t.t+2)**2/2,r=this.legs[t.leg].getPointAt(n);this.traveller.position.copy(r),this.traveller.position.y=Math.abs(Math.sin(t.t*Math.PI*10))*.08;let i=this.legs[t.leg].getTangentAt(n);this.turnTraveller(Math.atan2(i.x,i.z),e),this.travellerBody.rotation.z=Math.sin(t.t*Math.PI*10)*.07;let[a,o]=this.legDotRange[t.leg];for(let e=a;e<o;e++)this.legDotT[e]<=n&&this.dots.setColorAt(e,eh);this.dots.instanceColor&&(this.dots.instanceColor.needsUpdate=!0),this.aimCamera(r,!1,e),t.t>=1&&(this.walk=null,this.ring.visible=!0,this.setCurrent(t.leg+1),t.resolve())}else this.aimCamera(this.stops[this.current],!1,e),this.turnTraveller(rh,e),this.travellerBody.rotation.z*=Math.exp(-e*8);this.reducedMotion||this.ring.scale.setScalar(1+Math.sin(t*3)*.06)}turnTraveller(e,t){let n=e-this.travellerYaw;n=Math.atan2(Math.sin(n),Math.cos(n)),this.travellerYaw+=n*(1-Math.exp(-t*8)),this.traveller.rotation.y=this.travellerYaw;let r=this.travellerCard;if(r){r.rotation.y=-this.travellerYaw;let n=Math.sin(e)>=-.05?1:-1;this.travellerFacing+=(n-this.travellerFacing)*(1-Math.exp(-t*10)),r.scale.x=Math.abs(this.travellerFacing)<.05?.05*n:this.travellerFacing,r.rotation.z=this.travellerBody.rotation.z}}setHeroFigure(e){this.travellerCard&&(this.traveller.remove(this.travellerCard),this.travellerCard.material.map?.dispose(),this.travellerCard.material.dispose(),this.travellerCard.geometry.dispose());let t=new Sa(e);t.colorSpace=Ue;let n=.62,r=new za(n*e.width/e.height,n);r.translate(0,n/2,0);let i=new q(r,new K({map:t,alphaTest:.35,side:2}));i.rotation.order=`YXZ`,i.rotation.x=-.35,this.travellerCard=i,this.travellerBody.visible=!1,this.traveller.add(i),this.turnTraveller(this.travellerYaw,1)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}aimCamera(e,t,n=0){let r=new V(e.x+2.6,0,e.z-1.2);t?this.cameraTarget.copy(r):this.cameraTarget.lerp(r,1-Math.exp(-n*3));let i=this.cameraTarget;this.camera.position.set(i.x-.8,7.2,i.z+8.6),this.camera.lookAt(i.x,.6,i.z)}buildMountain(e,t){let n=[],r=3+Math.floor(e()*3)+(t?2:0),i=0,a=new W;for(let o=0;o<r;o++){let r=(t?1.8:1.3)+e()*(t?1.6:1.1)-o*.12,s=cp(e,(t?.6:.8)+e()*.6,r,t),c=e()*Math.PI*2,l=o===0?0:.5+e()*.7;a.makeRotationY(e()*Math.PI).setPosition(Math.cos(c)*l,0,Math.sin(c)*l*.6),s.applyMatrix4(a),n.push(s),i=Math.max(i,r)}let o=[];for(let t=0;t<5;t++){let t=new ka(.12+e()*.05,.4+e()*.25,5),n=e()*Math.PI*2;t.translate(Math.cos(n)*1.5,.22,Math.sin(n)*1+.4),o.push(t)}return{peaks:Kd(n),trees:Kd(o),height:i}}buildTraveller(){let e=new q(new Ra([[0,0],[.17,0],[.165,.035],[.125,.15],[.098,.27],[.088,.35],[.055,.395],[0,.405]].map(([e,t])=>new B(e,t)),16),new eo({color:eh})),t=new q(new Oa(.101,.106,.03,16),new eo({color:Zf.ink}));t.position.y=.25;let n=new q(new Va(.066,16,12),new eo({color:`#f1dfc2`}));n.position.y=.455;let r=new q(new ka(.19,.085,24),new eo({color:`#c8a46a`}));r.position.y=.535;let i=new q(new Oa(.008,.011,.58,6),new eo({color:`#6b4a2b`}));i.position.set(.155,.27,.05),i.rotation.z=-.1;let a=new q(new Va(.075,12,10),new eo({color:`#3d4f66`}));a.scale.set(1,.85,.7),a.position.set(0,.31,-.105),this.travellerBody.add(e,t,n,r,i,a),this.traveller.add(this.travellerBody),op(this.traveller,.004),this.traveller.scale.setScalar(1.6),this.traveller.rotation.y=rh,this.scene.add(this.traveller)}},lh={type:`change`},uh={type:`start`},dh={type:`end`},fh=new ci,ph=new Yi,mh=Math.cos(70*Nt.DEG2RAD),hh=new V,gh=2*Math.PI,_h={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vh=1e-6,yh=class extends Ds{constructor(n,r=null){super(n,r),this.state=_h.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:e.ROTATE,MIDDLE:e.DOLLY,RIGHT:e.PAN},this.touches={ONE:t.ROTATE,TWO:t.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new Pt,this._lastTargetPosition=new V,this._quat=new Pt().setFromUnitVectors(n.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Es,this._sphericalDelta=new Es,this._scale=1,this._panOffset=new V,this._rotateStart=new B,this._rotateEnd=new B,this._rotateDelta=new B,this._panStart=new B,this._panEnd=new B,this._panDelta=new B,this._dollyStart=new B,this._dollyEnd=new B,this._dollyDelta=new B,this._dollyDirection=new V,this._mouse=new B,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xh.bind(this),this._onPointerDown=bh.bind(this),this._onPointerUp=Sh.bind(this),this._onContextMenu=kh.bind(this),this._onMouseWheel=Th.bind(this),this._onKeyDown=Eh.bind(this),this._onTouchStart=Dh.bind(this),this._onTouchMove=Oh.bind(this),this._onMouseDown=Ch.bind(this),this._onMouseMove=wh.bind(this),this._interceptControlDown=Ah.bind(this),this._interceptControlUp=jh.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=``}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lh),this.update(),this.state=_h.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;hh.copy(t).sub(this.target),hh.applyQuaternion(this._quat),this._spherical.setFromVector3(hh),this.autoRotate&&this.state===_h.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=gh:n>Math.PI&&(n-=gh),r<-Math.PI?r+=gh:r>Math.PI&&(r-=gh),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(hh.setFromSpherical(this._spherical),hh.applyQuaternion(this._quatInverse),t.copy(this.target).add(hh),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=hh.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new V(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new V(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=hh.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(fh.origin.copy(this.object.position),fh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fh.direction))<mh?this.object.lookAt(this.target):(ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),fh.intersectPlane(ph,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vh||this._lastTargetPosition.distanceToSquared(this.target)>vh?(this.dispatchEvent(lh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?gh/60/60*this.autoRotateSpeed:gh/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hh.setFromMatrixColumn(t,0),hh.multiplyScalar(-e),this._panOffset.add(hh)}_panUp(e,t){this.screenSpacePanning===!0?hh.setFromMatrixColumn(t,1):(hh.setFromMatrixColumn(t,0),hh.crossVectors(this.object.up,hh)),hh.multiplyScalar(e),this._panOffset.add(hh)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;hh.copy(r).sub(this.target);let i=hh.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gh*this._rotateDelta.x/t.clientHeight),this._rotateUp(gh*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gh*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gh*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gh*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gh*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gh*this._rotateDelta.x/t.clientHeight),this._rotateUp(gh*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new B,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function bh(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function xh(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function Sh(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(dh),this.state=_h.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Ch(t){let n;switch(t.button){case 0:n=this.mouseButtons.LEFT;break;case 1:n=this.mouseButtons.MIDDLE;break;case 2:n=this.mouseButtons.RIGHT;break;default:n=-1}switch(n){case e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=_h.DOLLY;break;case e.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=_h.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=_h.ROTATE}break;case e.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=_h.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=_h.PAN}break;default:this.state=_h.NONE}this.state!==_h.NONE&&this.dispatchEvent(uh)}function wh(e){switch(this.state){case _h.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case _h.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case _h.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Th(e){this.enabled===!1||this.enableZoom===!1||this.state!==_h.NONE||(e.preventDefault(),this.dispatchEvent(uh),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(dh))}function Eh(e){this.enabled!==!1&&this._handleKeyDown(e)}function Dh(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case t.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=_h.TOUCH_ROTATE;break;case t.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=_h.TOUCH_PAN;break;default:this.state=_h.NONE}break;case 2:switch(this.touches.TWO){case t.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=_h.TOUCH_DOLLY_PAN;break;case t.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=_h.TOUCH_DOLLY_ROTATE;break;default:this.state=_h.NONE}break;default:this.state=_h.NONE}this.state!==_h.NONE&&this.dispatchEvent(uh)}function Oh(e){switch(this._trackPointer(e),this.state){case _h.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case _h.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case _h.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case _h.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=_h.NONE}}function kh(e){this.enabled!==!1&&e.preventDefault()}function Ah(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function jh(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var Mh=class{scene=new zn;camera=new Jo(30,1,.05,40);controls;holder=new An;creature=null;freeLeft=0;freeRight=1;width=1;height=1;lastInteraction=-10;elapsed=0;reducedMotion=!1;constructor(e){this.scene.background=new G(`#efe6d2`),this.scene.add(new Io(`#fffaf0`,`#9b927f`,2.4));let t=new ts(`#fff4de`,2.2);t.position.set(2,3,3),this.scene.add(t);let n=new ts(`#cfe0ff`,.9);n.position.set(-3,2,-3),this.scene.add(n);let r=new q(new Oa(.75,.8,.06,48),new K({color:`#e6dbc3`}));r.position.y=-.03,this.scene.add(r);let i=new q(new Ba(.76,.8,64),new K({color:`#2b2722`,side:2}));i.rotation.x=-Math.PI/2,i.position.y=.002,this.scene.add(i),this.scene.add(this.holder),this.camera.position.set(0,.75,3.1),this.controls=new yh(this.camera,e),this.controls.target.set(0,.38,0),this.controls.enablePan=!1,this.controls.enableDamping=!0,this.controls.minDistance=1.8,this.controls.maxDistance=4.2,this.controls.minPolarAngle=.5,this.controls.maxPolarAngle=1.45,this.controls.enabled=!1,this.controls.addEventListener(`start`,()=>this.lastInteraction=this.elapsed)}setActive(e){this.controls.enabled=e}show(e){if(this.holder.clear(),this.creature=e,e){this.holder.add(e.root),this.holder.rotation.y=0;let t=new er().setFromObject(e.root).getSize(new V);this.controls.target.set(0,t.y*.48,0);let n=Math.max(t.x,t.y*1.3,t.z);this.camera.position.set(0,t.y*.75+.2,1.4+n*1.9),this.controls.update()}}setFreeRange(e,t){this.freeLeft=e,this.freeRight=t,this.applyViewOffset()}resize(e,t){let n=this.freeRight>=this.width&&this.freeLeft===0;this.width=e,this.height=t,n&&(this.freeRight=e),this.camera.aspect=e/t,this.applyViewOffset()}update(e,t){this.elapsed=t,!this.reducedMotion&&t-this.lastInteraction>4&&(this.holder.rotation.y+=e*.35),this.controls.update(),this.creature?.update(this.reducedMotion?0:t)}applyViewOffset(){let e=Math.max(1,this.freeRight-this.freeLeft),t=this.width/2-(this.freeLeft+this.freeRight)/2;this.camera.zoom=Math.min(1,e/this.width/.5),Math.abs(t)>.5?this.camera.setViewOffset(this.width,this.height,t,0,this.width,this.height):this.camera.clearViewOffset(),this.camera.updateProjectionMatrix()}},Nh=new Set([`.`,`,`,`s`,`^`,`A`,`T`,`g`,`w`,`r`,`~`,`=`,`S`,`m`,`y`]),Ph=new Set([`A`,`T`,`g`,`w`,`r`,`~`,`S`,`m`,`y`]),Fh=new Set([`~`,`S`,`m`]),Ih={".":.12,",":.08,s:.02,"^":1,A:3.4,T:.35,g:.9,w:.3,r:.25,"~":-.42,"=":-.06,S:-.6,m:-.3,y:.7},Lh=-.14;function Rh(e){return Fh.has(e)}function zh(e){let t=e.rows.length,n=e.rows[0].length,r=[],i=[],a=null;if(e.rows.forEach((t,o)=>{if(t.length!==n)throw Error(`${e.mountain}: row ${o} has ${t.length} tiles, expected ${n}`);for(let s=0;s<n;s++){let n=t[s];if(Nh.has(n)){r.push(n);continue}let c=e.marks[n];if(!c)throw Error(`${e.mountain}: unknown tile "${n}" at ${s},${o}`);r.push(`.`),c.kind===`spawn`&&(a=[s,o]),i.push({key:n,mark:c,c:s,r:o})}}),!a)throw Error(`${e.mountain}: no spawn`);for(let e of i){let i=e.mark.kind===`creature`?e.mark.ground:void 0;r[e.r*n+e.c]=i??Bh(r,n,t,e.c,e.r)}for(let[t,a]of Object.entries(e.marks)){if(a.kind!==`creature`||i.some(e=>e.key===t))continue;if(!a.zone)throw Error(`${e.mountain}: creature ${a.id} has neither a tile nor a zone`);let o=Vh(r,n,a.zone);if(!o)throw Error(`${e.mountain}: zone of ${a.id} has no walkable tile`);i.push({key:t,mark:a,c:o[0],r:o[1]})}return{def:e,w:n,h:t,ground:r,height:Hh(r,n,t),placed:i,spawn:a}}function Bh(e,t,n,r,i){let a=new Map;for(let[o,s]of[[1,0],[-1,0],[0,1],[0,-1]]){let c=r+o,l=i+s;if(c<0||l<0||c>=t||l>=n)continue;let u=e[l*t+c];Ph.has(u)||a.set(u,(a.get(u)??0)+1)}let o=`.`,s=0;for(let[e,t]of a)t>s&&([o,s]=[e,t]);return o}function Vh(e,t,n){let[r,i,a,o]=n,s=Math.round((r+a)/2),c=Math.round((i+o)/2),l=null,u=1/0;for(let n=i;n<=o;n++)for(let i=r;i<=a;i++){if(Ph.has(e[n*t+i]))continue;let r=Math.abs(i-s)+Math.abs(n-c);r<u&&([l,u]=[[i,n],r])}return l}function Hh(e,t,n){let r=new Float32Array(t*n);for(let i=0;i<t*n;i++){let n=i%t,a=Math.floor(i/t),o=e[i]===`A`?Math.sin(n*1.7+a*.9)*.6+Math.cos(n*.6-a*1.3)*.5:0;r[i]=Ih[e[i]]+o}for(let i=0;i<2;i++){let i=new Float32Array(t*n);for(let a=0;a<n;a++)for(let o=0;o<t;o++){let s=0,c=0;for(let e=-1;e<=1;e++)for(let i=-1;i<=1;i++){let l=Math.min(t-1,Math.max(0,o+i)),u=Math.min(n-1,Math.max(0,a+e)),d=i===0&&e===0?2:1;s+=r[u*t+l]*d,c+=d}let l=e[a*t+o];i[a*t+o]=l===`A`?r[a*t+o]*.7+s/c*.3:Fh.has(l)?Math.min(s/c,Ih[l]*.6):s/c}r=i}return r}function Uh(e,t,n){return t>=0&&n>=0&&t<e.w&&n<e.h}function Wh(e,t,n){return e.ground[n*e.w+t]}function Gh(e,t,n){return Uh(e,t,n)&&!Ph.has(Wh(e,t,n))}function Kh(e,t,n){return{x:t-e.w/2+.5,z:n-e.h/2+.5}}function qh(e,t,n){return[Math.floor(t+e.w/2),Math.floor(n+e.h/2)]}function Jh(e,t,n){let r=Math.min(e.w-1,Math.max(0,t+e.w/2-.5)),i=Math.min(e.h-1,Math.max(0,n+e.h/2-.5)),a=Math.floor(r),o=Math.floor(i),s=Math.min(e.w-1,a+1),c=Math.min(e.h-1,o+1),l=r-a,u=i-o,d=e.height,f=e.w,p=d[o*f+a]*(1-l)+d[o*f+s]*l,m=d[c*f+a]*(1-l)+d[c*f+s]*l;return p*(1-u)+m*u}function Yh(e,t){let[n,r]=e.def.ridge;return t<n?`yin`:t>r?`yang`:`ridge`}function Xh(e,t,n,r=()=>!1){let i=(t,n)=>Gh(e,t,n)&&!r(t,n);if(!i(n[0],n[1]))return null;let a=(t,n)=>n*e.w+t,o=a(t[0],t[1]),s=a(n[0],n[1]),c=new Map([[o,0]]),l=new Map,u=new Set([o]),d=t=>{let r=Math.abs(t%e.w-n[0]),i=Math.abs(Math.floor(t/e.w)-n[1]);return Math.max(r,i)+.41*Math.min(r,i)},f=new Map([[o,d(o)]]);for(;u.size;){let t=-1,n=1/0;for(let e of u){let r=f.get(e)??1/0;r<n&&([t,n]=[e,r])}if(t===s){let t=[];for(let n=s;n!==o;n=l.get(n))t.unshift([n%e.w,Math.floor(n/e.w)]);return t}u.delete(t);let r=t%e.w,p=Math.floor(t/e.w);for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++){if(!n&&!e)continue;let o=r+n,s=p+e;if(!i(o,s)||n&&e&&(!i(r+n,p)||!i(r,p+e)))continue;let m=a(o,s),h=(c.get(t)??0)+(n&&e?1.41:1);h>=(c.get(m)??1/0)||(l.set(m,t),c.set(m,h),f.set(m,h+d(m)),u.add(m))}}return null}function Zh(e,t,n,r,i){if(Math.max(Math.abs(t[0]-n),Math.abs(t[1]-r))<=1&&!(t[0]===n&&t[1]===r))return{tile:t,path:[]};let a=null;for(let o=-1;o<=1;o++)for(let s=-1;s<=1;s++){if(!s&&!o)continue;let c=[n+s,r+o],l=Xh(e,t,c,i);l&&(!a||l.length<a.path.length)&&(a={tile:c,path:l})}return a}var Qh=new Set([`T`,`g`,`w`,`r`,`y`]);function $h(e,t,n,r){let i=new Set(e.placed.filter(e=>e.mark.kind!==`spawn`&&!(e.mark.kind===`creature`&&e.mark.zone)).map(t=>t.r*e.w+t.c)),a=null,o=1/0;for(let s=0;s+r<=e.h;s++)for(let c=0;c+n<=e.w;c++){let l=0,u=1/0,d=-1/0,f=!0;for(let t=s;t<s+r&&f;t++)for(let r=c;r<c+n;r++){let n=Wh(e,r,t);if(Rh(n)||n===`=`||n===`A`||i.has(t*e.w+r)){f=!1;break}Qh.has(n)&&(l+=2.5);let a=e.height[t*e.w+r];u=Math.min(u,a),d=Math.max(d,a)}if(!(!f||d-u>1.2)){l+=(d-u)*2.5;for(let t=s+r;t<Math.min(e.h,s+r+5);t++){let i=t-(s+r)+.5;for(let r=c;r<c+n;r++)l+=Math.max(0,e.height[t*e.w+r]-d-1.6*i)*3}(c===0||s===0||c+n===e.w||s+r===e.h)&&(l+=1),l+=1.5*Math.hypot(c+(n-1)/2-t[0],s+(r-1)/2-t[1]),l<o&&([a,o]=[{c0:c,r0:s},l])}}return a}function eg(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function tg(e,t){let n=e;for(let e=0;e<t;e++){if(n.length<3)return n;let e=[n[0]];for(let t=0;t<n.length-1;t++){let r=n[t],i=n[t+1];e.push({x:r.x*.75+i.x*.25,y:r.y*.75+i.y*.25},{x:r.x*.25+i.x*.75,y:r.y*.25+i.y*.75})}e.push(n[n.length-1]),n=e}return n}function ng(e,t,n){let r=([e,n])=>({x:(e+.5)*t,y:(n+.5)*t}),i=e.placed.filter(e=>e.mark.kind===`npc`||e.mark.kind===`exit`).map(e=>[e.c,e.r]).sort((t,n)=>Math.hypot(t[0]-e.spawn[0],t[1]-e.spawn[1])-Math.hypot(n[0]-e.spawn[0],n[1]-e.spawn[1])),a=[e.spawn],o=[];for(let s of i){let i=a.reduce((e,t)=>Math.hypot(t[0]-s[0],t[1]-s[1])<Math.hypot(e[0]-s[0],e[1]-s[1])?t:e);if(i[0]===s[0]&&i[1]===s[1])continue;let c=Xh(e,i,s);if(!c?.length)continue;a.push(...c);let l=[i,...c].map(r).map((e,r,i)=>r===0||r===i.length-1?e:{x:e.x+(n()-.5)*t*.35,y:e.y+(n()-.5)*t*.35});o.push(tg(l,3))}return o}function rg(e,t=17){let n=document.createElement(`canvas`);n.width=e.w*40,n.height=e.h*40;let r=n.getContext(`2d`),i=eg(t),a=(t,n)=>Uh(e,t,n)?Wh(e,t,n):null,o=(e,t)=>{let n=a(e,t);return n===`.`||n===`,`||n===`s`};for(let t=0;t<e.h;t++)for(let n=0;n<e.w;n++){if(!o(n,t)||i()>.22)continue;let e=(n+i())*40,a=(t+i())*40,s=40*(.6+i()*.9),c=(i()-.5)*.5;for(let t=0;t<5;t++){let n=(t-2)*1.6;r.strokeStyle=`rgba(52, 48, 40, ${.05+i()*.05})`,r.lineWidth=.8+i()*.9,r.beginPath();for(let o=0;o<=10;o++){let l=o/10,u=e+l*s,d=a+n+l*s*c+Math.sin(l*3+t)*1.2;i()<.25||o===0?r.moveTo(u,d):r.lineTo(u,d)}r.stroke()}}let s=document.createElement(`canvas`);s.width=n.width,s.height=n.height;let c=s.getContext(`2d`);c.lineCap=c.lineJoin=`round`;let l=ng(e,40,i);c.strokeStyle=`#f2ead6`;for(let e of l)for(let t=1;t<e.length;t++)c.lineWidth=40*(.32+.1*Math.sin(t*.37)+.05*Math.sin(t*1.3)),c.beginPath(),c.moveTo(e[t-1].x,e[t-1].y),c.lineTo(e[t].x,e[t].y),c.stroke();c.globalCompositeOperation=`destination-out`;for(let t=0;t<e.h;t++)for(let n=0;n<e.w;n++)(Rh(Wh(e,n,t))||!Gh(e,n,t))&&c.fillRect(n*40,t*40,40,40);r.globalAlpha=.42,r.drawImage(s,0,0),r.globalAlpha=1;for(let t of l)for(let n of[-1,1]){r.beginPath();let a=!1;for(let o=1;o<t.length;o++){let s=t[o-1],c=t[o],l=c.x-s.x,u=c.y-s.y,d=Math.hypot(l,u)||1,f=-u/d*n*40*.22,p=l/d*n*40*.22,m=Math.floor(c.x/40),h=Math.floor(c.y/40),g=Gh(e,m,h)&&!Rh(Wh(e,m,h))&&i()>.3;g&&a?r.lineTo(c.x+f,c.y+p):g&&r.moveTo(c.x+f,c.y+p),a=g}r.strokeStyle=`rgba(58, 52, 42, 0.22)`,r.lineWidth=1.1,r.stroke()}let u=!!e.def.bare,d=(e,t,n,a)=>{for(let o=0;o<n;o++){let n=i()*Math.PI*2,o=Math.sqrt(i())*a,s=e+Math.cos(n)*o,c=t+Math.sin(n)*o*.5;r.fillStyle=i()<.6?`rgba(52, 70, 50, ${.38+i()*.22})`:`rgba(40, 38, 32, ${.32+i()*.2})`,r.beginPath(),r.ellipse(s,c,2.2+i()*1.4,.9+i()*.5,(i()-.5)*.4,0,Math.PI*2),r.fill()}};for(let t=0;t<e.h;t++)for(let n=0;n<e.w;n++){if(!o(n,t))continue;let e=[[1,0],[-1,0],[0,1],[0,-1]].map(([e,r])=>a(n+e,t+r)),r=e.includes(`r`),s=!u&&e.some(e=>e===`T`||e===`w`||e===`g`||e===`y`),c=!u&&e.includes(`^`),l=r?.8:s?.35:c?.12:0;i()>l||d((n+.2+i()*.6)*40,(t+.2+i()*.6)*40,3+Math.floor(i()*3),40*.28)}for(let t of e.placed)t.mark.kind===`outcrop`&&d((t.c+.5)*40,(t.r+.8)*40,5,40*.4);r.globalCompositeOperation=`destination-in`;let f=[[0,0,48,0],[n.width,0,n.width-48,0],[0,0,0,48],[0,n.height,0,n.height-48]];for(let[e,t,i,a]of f){let o=r.createLinearGradient(e,t,i,a);o.addColorStop(0,`rgba(0,0,0,0)`),o.addColorStop(1,`rgba(0,0,0,1)`),r.fillStyle=o;let s=e===i?[0,Math.min(t,a),n.width,48]:[Math.min(e,i),0,48,n.height];r.save(),r.beginPath(),r.rect(s[0],s[1],s[2],s[3]),r.clip(),r.fillRect(s[0],s[1],s[2],s[3]),r.restore()}return r.globalCompositeOperation=`source-over`,n}var ig={hero:1.45,boyi:1.6,villager:1.5,herbalist:1.5,painter:1.5,fisher:1.5,elder:1.3,younger:1.1,xingxing:1.15,xuangui:.8,guaishe:.85,jiuweihu:1.65,guanguan:.72,chiru:.72,baiyuan:1.2,lushu:1.55,"boyi-beast":1.15},ag={xingxing:1.7,guaishe:1.1,jiuweihu:.9,chiru:.8,baiyuan:1.5,lushu:1.2,xuangui:.5,boyi:.8},og=3.4,sg=.88,cg={value:0},lg=[[/^grass/,.14],[/^reed/,.12],[/^twisted/,.035],[/^(wood|gui|yanmu)/,.03],[/^pine/,.022]];function ug(e,t){e.onBeforeCompile=e=>{e.uniforms.uWind=cg,e.uniforms.uSway={value:t},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uWind;
uniform float uSway;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
      #ifdef USE_INSTANCING
        float phase = instanceMatrix[3].x * 0.7 + instanceMatrix[3].z * 1.3;
      #else
        float phase = 0.0;
      #endif
      float gust = 0.6 + 0.4 * sin(uWind * 0.35 + phase * 0.1);
      transformed.x += uSway * gust * transformed.y * transformed.y * (sin(uWind * 1.7 + phase) + 0.4 * sin(uWind * 3.1 + phase * 1.7));`)},e.customProgramCacheKey=()=>`ink-sway`}var dg=15,fg=36,pg=.85,mg=1.3,hg={".":[`#b7c0b0`,`#d6d3a6`],",":[`#d3cfbd`,`#ece0bd`],s:[`#ddd6bf`,`#efe4c2`],"^":[`#98a59c`,`#c2bf8c`],A:[`#80857e`,`#a39b84`],T:[`#7f9286`,`#9fad86`],g:[`#93a296`,`#b8b98c`],w:[`#9a9c8f`,`#b4ad8a`],r:[`#a7a69b`,`#bdb6a3`],"~":[`#8fa39d`,`#9fb0a3`],"=":[`#c4c2ae`,`#dcd2b0`],S:[`#8fa39d`,`#9fb0a3`],m:[`#94a291`,`#a7ae8f`],y:[`#8f9e8c`,`#adb486`]};function gg(e,t,n){return Jh(e,t,n)+Math.sin(t*3.1+n*1.7)*Math.cos(n*2.3-t)*.04}var _g=class{scene=new zn;camera=new Jo(fg,1,.1,80);reducedMotion=!1;onArrive=null;onContact=null;onExit=null;grid=null;world=new An;sprites=new Map;hero=null;followers=[];trail=[];terrain=null;peakMaterial=null;water=null;glints=[];raycaster=new Cs;look=new V;pending=null;exitArmed=!0;safeUntil=0;touched=new Set;respawns=[];elapsed=0;guideTarget=null;guideAt=0;guideDir=null;arrow;ring;ringAt=-10;fight=null;width=1;height=1;constructor(){this.scene.background=Zf.paper.clone(),this.scene.fog=new Rn(Zf.paper.clone(),19,40),this.scene.add(new ns(`#ffffff`,2));let e=new ts(`#fff4dc`,1.6);e.position.set(-3,9,7),this.scene.add(e,this.world);let t=(e,t)=>{let n=new Sa(e);n.colorSpace=Ue;let r=new q(new za(...t),new K({map:n,transparent:!0,depthWrite:!1,fog:!1}));return r.geometry.rotateX(-Math.PI/2),r.visible=!1,r.renderOrder=2,this.scene.add(r),r};this.arrow=t(Lm(),[.6,.8]),this.ring=t(Rm(),[.9,.9])}setGuide(e){e!==this.guideTarget&&(this.guideTarget=e,this.guideAt=0,this.guideDir=null)}nearest(e){let t=this.hero;if(!t)return null;let n=null,r=1/0;for(let i of e){let e=this.sprites.get(i);if(!e?.visible)continue;let a=Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z);a<r&&([n,r]=[i,a])}return n}get loaded(){return this.grid?.def??null}async load(e,t,n){this.unload();let r=zh(e);this.grid=r,this.buildTerrain(r),this.buildPeaks(r),this.buildSurroundings(r),this.buildProps(r);let i=[];for(let e of r.placed)if(e.mark.kind===`npc`)i.push(this.addSprite(e.mark.npc,`npc`,e.mark.npc,e,ig[e.mark.npc]??1.3));else if(e.mark.kind===`thing`)i.push(this.addSprite(e.mark.id,`thing`,Id[e.mark.thing].figure,e,Id[e.mark.thing].height));else if(e.mark.kind===`creature`){let t=Bd(e.mark.creature);i.push(this.addSprite(e.mark.id,`creature`,t,e,ig[t]??1))}else e.mark.kind===`outcrop`?this.addOutcrop(e):e.mark.kind===`exit`&&this.addSign(e);i.push(this.setHero(t),this.setCompanions(n)),await Promise.all(i),this.toSpawn()}unload(){for(let e of[...this.world.children])this.world.remove(e),e.traverse(e=>{let t=e;t.geometry?.dispose();let n=t.material;for(let e of Array.isArray(n)?n:n?[n]:[]){let t=e.map;t&&t!==np()&&t.dispose(),e.dispose()}});this.sprites.clear(),this.followers.length=0,this.glints.length=0,this.trail.length=0,this.touched.clear(),this.respawns.length=0,this.hero=null,this.fight=null,this.guideTarget=null,this.peakMaterial=null,this.terrain=null,this.water=null,this.grid=null,this.pending=null}colourAt(e,t,n){let[r,i]=hg[Wh(e,t,n)],[a,o]=e.def.ridge,s=Math.min(1,Math.max(0,(n-a+.5)/(o-a+1)));return new G(r).lerp(new G(i),s)}buildTerrain(e){let t=new za(e.w,e.h,e.w*3,e.h*3);t.rotateX(-Math.PI/2);let n=t.attributes.position,i=new Float32Array(n.count*3),a=new G(`#3b3833`),o=new Map,s=(t,n)=>{let r=Math.min(e.w-1,Math.max(0,t)),i=Math.min(e.h-1,Math.max(0,n)),a=i*e.w+r,s=o.get(a);return s||o.set(a,s=this.colourAt(e,r,i)),s},c=new G;for(let t=0;t<n.count;t++){let r=n.getX(t),o=n.getZ(t),l=gg(e,r,o);n.setY(t,l);let u=r+e.w/2-.5,d=o+e.h/2-.5,f=Math.floor(u),p=Math.floor(d),m=u-f,h=d-p;c.copy(s(f,p)).multiplyScalar((1-m)*(1-h)).add(s(f+1,p).clone().multiplyScalar(m*(1-h))).add(s(f,p+1).clone().multiplyScalar((1-m)*h)).add(s(f+1,p+1).clone().multiplyScalar(m*h)),c.lerp(a,Math.min(.5,Math.max(0,(l-1.8)/3.4))),i.set([c.r,c.g,c.b],t*3)}t.computeVertexNormals();let l=t.attributes.normal;for(let e=0;e<n.count;e++){let t=Math.min(1,Math.max(0,(.93-l.getY(e))*2.2));c.setRGB(i[e*3],i[e*3+1],i[e*3+2]).lerp(a,t*.42),i.set([c.r,c.g,c.b],e*3)}let u=new G(`#e8dfca`);for(let t=0;t<n.count;t++){let r=n.getX(t),a=n.getZ(t),[o,s]=qh(e,Math.min(e.w/2-.01,r),Math.min(e.h/2-.01,a));if(Rh(Wh(e,o,s)))continue;let l=Math.min(r+e.w/2,e.w/2-r,a+e.h/2,e.h/2-a);l>=1.2||(c.setRGB(i[t*3],i[t*3+1],i[t*3+2]).lerp(u,1-l/1.2),i.set([c.r,c.g,c.b],t*3))}t.setAttribute(`color`,new vr(i,3));let d=np().clone();d.repeat.set(e.w/6,e.h/6),d.needsUpdate=!0;let f=new q(t,new to({vertexColors:!0,map:d}));this.terrain=f,this.world.add(f);let p=new Sa(rg(e));p.colorSpace=Ue,p.anisotropy=4;let m=new q(t,new K({map:p,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}));m.renderOrder=-1,this.world.add(m);let h=new Sa(Mm());h.colorSpace=Ue,h.wrapS=h.wrapT=r,h.repeat.set(e.w/3,e.h/3);let g=new q(new za(e.w,e.h),new K({map:h,transparent:!0,opacity:.88,depthWrite:!1}));g.rotation.x=-Math.PI/2,g.position.y=Lh,this.water=g,this.world.add(g)}buildPeaks(e){let t=e.def.peaks===`rugged`,n=new Int16Array(e.w*e.h);for(let t=0;t<e.h;t++)for(let r=0;r<e.w;r++)Wh(e,r,t)===`A`&&(n[t*e.w+r]=99);for(let t=1;t<12;t++)for(let r=0;r<e.h;r++)for(let i=0;i<e.w;i++){let a=r*e.w+i;if(n[a]===99)for(let[o,s]of[[1,0],[-1,0],[0,1],[0,-1]]){let c=i+o,l=r+s,u=Uh(e,c,l)?n[l*e.w+c]:0;(u===t-1||t===1&&u===0)&&(n[a]=t)}}let r=7,i=()=>(r=r*16807%2147483647,r/2147483647),a=[],o=new W;for(let r=0;r<e.h;r++)for(let s=0;s<e.w;s++){let c=n[r*e.w+s];if(!c||(s*7+r*5)%(t?2:3)!=0)continue;let l=t?2.6+Math.min(c,6)*1.05+i()*1.4:1.6+Math.min(c,4)*.55+i()*.7,u=cp(i,t?.8+i()*.5:1.3+i()*.6,l,t),{x:d,z:f}=Kh(e,s,r);o.makeRotationY(i()*Math.PI).setPosition(d+(i()-.5)*.6,Jh(e,d,f)-.3,f+(i()-.5)*.6),u.applyMatrix4(o),a.push(u)}if(!a.length)return;let s=sp(Zf.jade,.7,t?.9:.72,t?7.5:5.5);s.transparent=!0,this.peakMaterial=s,this.world.add(new q(Kd(a),s))}buildSurroundings(e){let t=np().clone();t.wrapS=t.wrapT=r,t.repeat.set(8,8),t.needsUpdate=!0;let n=new K({map:t,color:`#e8dfca`}),i=this.water.material,a=Wh(e,0,Math.floor(e.h/2))===`S`,o=Wh(e,e.w-1,Math.floor(e.h/2))===`S`,s=[{x:0,z:-e.h/2-60/2,w:e.w+120,h:60,sea:!1,y:.02},{x:0,z:e.h/2+60/2,w:e.w+120,h:60,sea:!1,y:.02},{x:-e.w/2-60/2,z:0,w:60,h:e.h,sea:a,y:a?Lh:.02},{x:e.w/2+60/2,z:0,w:60,h:e.h,sea:o,y:o?Lh:.02}];for(let e of s){let t=new q(new za(e.w,e.h),e.sea?i:n);t.rotation.x=-Math.PI/2,t.position.set(e.x,e.y,e.z),this.world.add(t)}}buildProps(e){let t=new Map,n=(e,n,r,i,a)=>{let o=t.get(e);o||t.set(e,o={canvas:n(),spots:[]}),o.spots.push({x:r,z:i,h:a})},r=1,i=()=>Math.sin(r++*12.9898)*43758.5453%1;for(let t=0;t<e.h;t++)for(let r=0;r<e.w;r++){let a=Wh(e,r,t),{x:o,z:s}=Kh(e,r,t),c=()=>i()*.3;a===`T`?(n(`wood-${(r+t)%2}`,()=>Am(`wood`,11+(r+t)%2),o+c(),s+c(),2.3+i()*.5),(r*7+t*3)%3==0&&n(`pine`,()=>Am(`pine`,23),o-.3+c(),s+.3,2.6)):a===`w`?n(`twisted`,()=>Am(`twisted`,31+(r+t)%3),o+c(),s+c(),1.9+i()*.4):a===`g`?n(`gui`,()=>im(`gui`)?fm(`gui`):Am(`wood`,41),o+c(),s+c(),2.1+i()*.3):a===`y`?n(`yanmu`,()=>im(`yanmu`)?fm(`yanmu`):Am(`wood`,43),o+c(),s+c(),2+i()*.3):a===`m`&&(r+t)%2==0?n(`reed`,()=>jm(51+r%3),o+c(),s+c(),.8):a===`r`?n(`rock-${(r+t)%3}`,()=>Fm(61+(r+t)%3),o+c(),s+c(),.75+Math.abs(i())*.25):(a===`.`||a===`^`)&&!e.def.bare&&(r*5+t*3)%4==0&&n(`grass-${(r+2*t)%3}`,()=>Im(71+(r+2*t)%3),o+c()*1.5,s+c()*1.5,.32)}for(let[n,r]of t)Promise.resolve(r.canvas).then(t=>{if(!this.grid||this.grid!==e)return;let i=new Sa(t);i.colorSpace=Ue;let a=t.width/t.height,o=new za(1,1);o.translate(0,.5,0);let s=new K({map:i,alphaTest:.35,side:2}),c=lg.find(([e])=>e.test(n));c&&ug(s,c[1]);let l=new Gi(o,s,r.spots.length),u=new W,d=new Pt().setFromEuler(new fn(-sg*.25,0,0));r.spots.sort((e,t)=>e.z-t.z).forEach((t,n)=>{let r=Jh(e,t.x,t.z)-.08;u.compose(new V(t.x,r,t.z),d,new V(t.h*a,t.h,1)),l.setMatrixAt(n,u)}),l.name=`props-${n}`,l.userData.spots=r.spots,this.world.add(l),this.fight&&this.clearProps(l)})}addOutcrop(e){let t=this.grid,{x:n,z:r}=Kh(t,e.c,e.r),i=Jh(t,n,r),a=new An;for(let[i,o,s,c]of[[-.22,-.05,.55,81],[.24,-.1,.45,82],[.02,.18,.38,83]]){let l=Fm(c+e.c),u=new Sa(l);u.colorSpace=Ue;let d=new za(s*l.width/l.height,s);d.translate(0,s/2,0);let f=new q(d,new K({map:u,alphaTest:.3,side:2}));f.rotation.x=-sg*.3,f.position.set(n+i,Jh(t,n+i,r+o)-.05,r+o),a.add(f)}let o=new $r(new zr({map:new Sa(Pm()),transparent:!0,depthWrite:!1,fog:!1}));o.position.set(n+.05,i+.8,r),o.scale.setScalar(.42),o.userData.phase=e.c*.7+e.r,this.glints.push(o),a.add(o),this.world.add(a);let s=this.bareSprite(e.mark.id,`outcrop`,e,.6);s.root=a,this.sprites.set(s.id,s)}addSign(e){let t=this.grid,n=e.mark.dir,r=`exit-${n}`;if(this.sprites.has(r))return;let i=Nm(),a=new Sa(i);a.colorSpace=Ue;let o=1.1,s=new za(o*i.width/i.height,o);s.translate(0,o/2,0);let c=new q(s,new K({map:a,alphaTest:.3,side:2}));c.rotation.x=-sg*.35,n===`west`&&(c.scale.x=-1);let{x:l,z:u}=Kh(t,e.c,e.r),d={east:[-1,0],west:[1,0],south:[0,-1],north:[0,1]}[n],f=l+d[0]*.7+(d[1]?.7:0),p=u+d[1]*.7+(d[0]?-.7:0),m=new An;m.add(c),m.position.set(f,Jh(t,f,p),p),this.world.add(m);let h=this.bareSprite(r,`exit`,e,o);h.root=m,h.card=c,h.pos.copy(m.position),this.sprites.set(r,h)}bareSprite(e,t,n,r){let i=this.grid,{x:a,z:o}=Kh(i,n.c,n.r);return{id:e,kind:t,root:new An,card:new q(new za(.01,.01),new K),height:r,facing:1,pos:new V(a,Jh(i,a,o),o),path:[],speed:0,phase:0,visible:!0,tile:[n.c,n.r],mark:n.mark,wanderAt:0,crouch:0,bob:0}}async makeCard(e,t){let n=await fm(e),r=new Sa(n);r.colorSpace=Ue,r.anisotropy=4;let i=t*n.width/n.height,a=new za(i,t);a.translate(0,t/2,0);let o=new q(a,new K({map:r,alphaTest:.35,side:2,transparent:!0}));o.rotation.x=-sg*.35;let s=new q(new za(1,1),new K({map:rp(),transparent:!0,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.scale.set(Math.min(1.6,i*1.1),Math.min(.9,i*.6),1),s.position.y=.03;let c=new An;return c.add(s,o),{root:c,card:o}}async addSprite(e,t,n,r,i){let a=this.grid,{root:o,card:s}=await this.makeCard(n,i);if(this.grid!==a)return;let c=this.bareSprite(e,t,r,i);c.root=o,c.card=s,c.phase=(r.c*1.7+r.r)%6,c.speed=t===`creature`?ag[r.mark.creature]??1:0,c.wanderAt=1+c.phase,c.facing=Kh(a,r.c,r.r).x>0?-1:1,s.scale.x=c.facing,t===`creature`&&Rh(Wh(a,r.c,r.r))&&(c.pos.y=Lh-.12),o.position.copy(c.pos),this.world.add(o),this.sprites.set(e,c)}async setHero(e){let t=this.hero?.pos.clone();this.hero&&this.world.remove(this.hero.root);let{root:n,card:r}=await this.makeCard(e,ig.hero),i={id:`hero`,kind:`hero`,root:n,card:r,height:ig.hero,facing:1,pos:t??new V,path:[],speed:og,phase:0,visible:!0,tile:[0,0],wanderAt:0,crouch:0,bob:0};this.hero=i,n.position.copy(i.pos),this.world.add(n)}async setCompanions(e){for(let e of this.followers)this.world.remove(e.root);this.followers.length=0;for(let t of e){let{root:e,card:n}=await this.makeCard(t,ig[t]??1),r=this.hero?.pos.clone()??new V;this.followers.push({id:`companion-${t}`,kind:`companion`,root:e,card:n,height:ig[t]??1,facing:1,pos:r,path:[],speed:0,phase:this.followers.length*2.1,visible:!0,tile:[0,0],wanderAt:0,crouch:0,bob:0}),e.position.copy(r),this.world.add(e)}}toSpawn(){let e=this.grid;if(!e||!this.hero)return;let{x:t,z:n}=Kh(e,e.spawn[0],e.spawn[1]);this.hero.pos.set(t,Jh(e,t,n),n),this.hero.path=[],this.hero.facing=1,this.pending=null,this.trail.length=0;for(let e of this.followers)e.pos.copy(this.hero.pos).add(new V(-.8,0,.3));this.look.copy(this.hero.pos),this.updateCamera(0),this.exitArmed=!0,this.safe(3)}safe(e){this.safeUntil=this.elapsed+e}stop(){this.hero&&(this.hero.path=[]),this.pending=null}setVisible(e,t){let n=this.sprites.get(e);!n||n.visible===t||(n.visible=t,n.root.visible=t)}isVisible(e){return this.sprites.get(e)?.visible??!1}retire(e,t){this.setVisible(e,!1),t!==null&&this.respawns.push({id:e,at:this.elapsed+t})}beginFight(e,t,n,r){let i=this.grid,a=[e.c0-1,e.r0-1,e.c0+t,e.r0+n+1],o=!1;for(let r=e.r0+n;r<Math.min(i.h,e.r0+n+8);r++)for(let n=Math.max(0,e.c0-3);n<Math.min(i.w,e.c0+t+3);n++)o||=Wh(i,n,r)===`A`;this.fight={area:a,props:new Map,fade:o};for(let e of this.world.children)e instanceof Gi&&e.userData.spots&&this.clearProps(e);for(let e of this.sprites.values()){let[t,n]=e.kind===`creature`?qh(i,e.pos.x,e.pos.z):e.tile;(e.id===r||t>=a[0]&&t<=a[2]&&n>=a[1]&&n<=a[3])&&(e.root.visible=!1)}for(let e of[this.hero,...this.followers])e&&(e.root.visible=!1);this.stop();let s=Kh(i,e.c0,e.r0),c=new V(s.x+(t-1)/2,0,s.z+(n-1)/2);return{host:this.world,origin:c,lift:(e,t)=>gg(i,c.x+e,c.z+t)}}endFight(){let e=this.fight;if(e){for(let[t,n]of e.props)t.instanceMatrix.array.set(n),t.instanceMatrix.needsUpdate=!0;this.fight=null;for(let e of this.sprites.values())e.root.visible=e.visible;for(let e of[this.hero,...this.followers])e&&(e.root.visible=!0)}}clearProps(e){let t=this.fight,n=this.grid,[r,i,a,o]=t.area,s=new W().makeScale(0,0,0),c=null;e.userData.spots.forEach((t,l)=>{let[u,d]=qh(n,t.x,t.z);u<r||u>a||d<i||d>o||(c??=e.instanceMatrix.array.slice(),e.setMatrixAt(l,s))}),c&&(t.props.set(e,c),e.instanceMatrix.needsUpdate=!0)}heroTile(){return this.grid&&this.hero?qh(this.grid,this.hero.pos.x,this.hero.pos.z):null}nearOutcrop(){if(!this.hero)return null;let e=null,t=1.6;for(let n of this.sprites.values()){if(n.kind!==`outcrop`)continue;let r=Math.hypot(n.pos.x-this.hero.pos.x,n.pos.z-this.hero.pos.z);r<t&&([e,t]=[n.id,r])}return e}tap(e,t,n){let r=this.grid;if(!r||!this.hero||!this.terrain)return null;let i=n.getBoundingClientRect(),a=new B((e-i.left)/i.width*2-1,-((t-i.top)/i.height)*2+1);this.raycaster.setFromCamera(a,this.camera);let o=[];for(let e of this.sprites.values())e.visible&&(e.kind===`npc`||e.kind===`thing`||e.kind===`creature`||e.kind===`exit`)&&o.push(e.card);let s=this.raycaster.intersectObjects(o,!1)[0];if(s){let e=[...this.sprites.values()].find(e=>e.card===s.object);if(e?.kind===`exit`)return this.goToTile(e.tile[0],e.tile[1]),{kind:`ground`};if(e)return this.goToEntity(e.id),{kind:`entity`,id:e.id}}let c=this.raycaster.intersectObject(this.terrain,!1)[0];if(!c)return null;let[l,u]=qh(r,c.point.x,c.point.z),d=r.placed.find(e=>e.mark.kind===`exit`&&Math.max(Math.abs(e.c-l),Math.abs(e.r-u))<=1);if(d)return this.goToTile(d.c,d.r),{kind:`ground`};let f=[...this.sprites.values()].find(e=>e.kind===`outcrop`&&e.tile[0]===l&&e.tile[1]===u);return f?(this.goToEntity(f.id),{kind:`entity`,id:f.id}):(this.goToTile(l,u)&&this.dropRing(),{kind:`ground`})}dropRing(){let e=this.grid,t=this.hero;if(!e||!t||!t.path.length)return;let[n,r]=t.path[t.path.length-1],{x:i,z:a}=Kh(e,n,r);this.ring.position.set(i,Jh(e,i,a)+.05,a),this.ringAt=this.elapsed}blocked=(e,t)=>{for(let n of this.sprites.values())if((n.kind===`npc`||n.kind===`thing`||n.kind===`outcrop`)&&n.tile[0]===e&&n.tile[1]===t)return!0;return!1};goToTile(e,t){let n=this.grid,r=this.hero;if(!n||!r)return!1;this.pending=null;let i=[e,t];if(!Uh(n,e,t)||!Gh(n,e,t)||this.blocked(e,t)){let r=null,a=1/0;for(let i=-2;i<=2;i++)for(let o=-2;o<=2;o++){let s=e+o,c=t+i;if(!Gh(n,s,c)||this.blocked(s,c))continue;let l=o*o+i*i;l<a&&([r,a]=[[s,c],l])}if(!r)return!1;i=r}let a=Xh(n,qh(n,r.pos.x,r.pos.z),i,this.blocked);return a?(r.path=a,!0):!1}goToEntity(e){let t=this.grid,n=this.hero,r=this.sprites.get(e);if(!t||!n||!r)return!1;let i=qh(t,n.pos.x,n.pos.z),[a,o]=r.kind===`creature`?qh(t,r.pos.x,r.pos.z):r.tile,s=Zh(t,i,a,o,this.blocked);return s?(n.path=s.path,this.pending=e,!0):!1}update(e,t,n){this.elapsed=t,this.reducedMotion||(cg.value=t);let r=this.grid,i=this.hero;if(!r||!i)return;n&&this.stepHero(r,i,e),this.updateFollowers(r,e);for(let n of this.sprites.values())n.kind===`creature`&&n.visible&&!this.fight&&this.wander(r,n,e),(n.kind===`npc`||n.kind===`creature`||n.kind===`thing`)&&(n.root.position.copy(n.pos),this.reducedMotion||(n.card.rotation.z=Math.sin(t*1.5+n.phase)*(n.kind===`thing`?.02:.035)));for(let e=this.respawns.length-1;e>=0;e--){if(t<this.respawns[e].at||this.fight)continue;let n=this.sprites.get(this.respawns[e].id);if(this.respawns.splice(e,1),!n?.mark||n.mark.kind!==`creature`)continue;let a=n.mark.zone??[n.tile[0],n.tile[1],n.tile[0],n.tile[1]],o=qh(r,i.pos.x,i.pos.z),s=Math.abs(o[0]-a[0])>Math.abs(o[0]-a[2])?[a[0],a[1]]:[a[2],a[3]];for(let e=a[1];e<=a[3];e++)for(let t=a[0];t<=a[2];t++)if(Gh(r,t,e)&&Math.abs(t-s[0])+Math.abs(e-s[1])<3){let{x:i,z:a}=Kh(r,t,e);n.pos.set(i,Jh(r,i,a),a)}n.path=[],this.setVisible(n.id,!0)}for(let e of this.glints){let n=this.reducedMotion?.8:.55+.45*Math.sin(t*2.4+e.userData.phase);e.scale.setScalar(.3+.18*n),e.material.opacity=.5+.5*n}if(this.water?.material.map&&!this.reducedMotion&&this.water.material.map.offset.set(t*.02,t*.012),n&&this.checkContacts(i),this.updateGuide(r,i,n),this.peakMaterial){let t=this.fight?this.fight.fade:r.def.yinyang&&qh(r,i.pos.x,i.pos.z)[1]<r.def.ridge[0]+1,n=this.peakMaterial.uniforms.uOpacity;n.value+=((t?.32:1)-n.value)*(this.reducedMotion?1:1-Math.exp(-e*4)),this.peakMaterial.depthWrite=n.value>.95}let a=t-this.ringAt;this.ring.visible=a<.9&&n,this.ring.visible&&(this.ring.scale.setScalar(this.reducedMotion?1:.6+a*.6),this.ring.material.opacity=1-a/.9),this.updateCamera(e)}stepHero(e,t,n){let r=t.path.length>0;if(r){let[r,i]=t.path[0],a=Kh(e,r,i),o=a.x-t.pos.x,s=a.z-t.pos.z,c=Math.hypot(o,s),l=t.speed*n;Math.abs(o)>.05&&this.face(t,o>0?1:-1),c<=l?(t.pos.x=a.x,t.pos.z=a.z,t.path.shift(),this.arrivedAt(e,r,i)):(t.pos.x+=o/c*l,t.pos.z+=s/c*l),t.pos.y=Jh(e,t.pos.x,t.pos.z),t.bob+=n*11;let u=this.trail[this.trail.length-1];(!u||u.distanceTo(t.pos)>.2)&&(this.trail.push(t.pos.clone()),this.trail.length>40&&this.trail.shift())}else if(this.pending){let e=this.sprites.get(this.pending);if(e&&e.visible)if(Math.hypot(e.pos.x-t.pos.x,e.pos.z-t.pos.z)<1.6||e.kind!==`creature`){this.face(t,e.pos.x>=t.pos.x?1:-1);let n=this.pending;this.pending=null,this.onArrive?.(n)}else this.goToEntity(e.id);else this.pending=null}this.pose(t,r)}arrivedAt(e,t,n){let r=e.placed.find(e=>e.mark.kind===`exit`&&e.c===t&&e.r===n);if(!r){this.exitArmed=!0;return}this.exitArmed&&(this.exitArmed=!1,this.hero.path=[],this.pending=null,this.onExit?.(r.mark.dir))}stepBack(){let e=this.grid,t=this.hero;if(!e||!t)return;let[n,r]=qh(e,t.pos.x,t.pos.z),i=n>=e.w-1?[[-1,0]]:n<=0?[[1,0]]:r>=e.h-1?[[0,-1]]:[[0,1]];for(let[a,o]of[...i,[-1,0],[1,0],[0,-1],[0,1]])if(Gh(e,n+a,r+o)&&!this.blocked(n+a,r+o)){t.path=[[n+a,r+o]];return}}face(e,t){e.facing=t}pose(e,t){let n=this.reducedMotion?1:.3;e.card.scale.x+=(e.facing-e.card.scale.x)*n,Math.abs(e.card.scale.x)<.04&&(e.card.scale.x=.04*e.facing);let r=t&&!this.reducedMotion?Math.abs(Math.sin(e.bob))*.1:0;e.root.position.set(e.pos.x,e.pos.y+r,e.pos.z),e.card.rotation.z=t&&!this.reducedMotion?Math.sin(e.bob)*.06:0}updateFollowers(e,t){let n=this.hero;this.followers.forEach((r,i)=>{let a=this.trail.length-1-(i+1)*4,o=a>=0?this.trail[a]:null,s=!1;if(o){let n=r.pos.distanceTo(o);if(n>.05){s=!0;let i=Math.min(1,t*og*1.05/n);Math.abs(o.x-r.pos.x)>.04&&this.face(r,o.x>r.pos.x?1:-1),r.pos.lerp(o,i),r.pos.y=Jh(e,r.pos.x,r.pos.z)}}else r.pos.distanceTo(n.pos)>2.5&&r.pos.copy(n.pos).add(new V(-.8*(i+1),0,.3));r.bob+=s?t*12:0,this.pose(r,s),r.id===`companion-xingxing`&&(r.card.scale.y=s&&Math.sin(r.bob*.25)>.3?.78:1)})}wander(e,t,n){let r=t.mark;if(!r.zone)return;let i=Rh(Wh(e,t.tile[0],t.tile[1]));if(!t.path.length&&this.elapsed>t.wanderAt){let[n,a]=qh(e,t.pos.x,t.pos.z),o=[];for(let[t,s]of[[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1]]){let c=n+t,l=a+s,[u,d,f,p]=r.zone;c<u||c>f||l<d||l>p||!Uh(e,c,l)||(i?Rh(Wh(e,c,l)):Gh(e,c,l)&&!this.blocked(c,l))&&o.push([c,l])}o.length&&(t.path=[o[Math.floor(Math.abs(Math.sin(this.elapsed*91.7+t.phase))*o.length)%o.length]]),t.wanderAt=this.elapsed+1.2+Math.abs(Math.sin(this.elapsed+t.phase))*2.2,t.crouch=+!t.crouch}let a=!1;if(t.path.length){let[r,o]=t.path[0],s=Kh(e,r,o),c=s.x-t.pos.x,l=s.z-t.pos.z,u=Math.hypot(c,l),d=t.speed*n;Math.abs(c)>.05&&this.face(t,c>0?1:-1),u<=d?(t.pos.x=s.x,t.pos.z=s.z,t.path.shift()):(t.pos.x+=c/u*d,t.pos.z+=l/u*d,a=!0),t.pos.y=i?Lh-.12:Jh(e,t.pos.x,t.pos.z)}t.bob+=a?n*9:0;let o=this.reducedMotion?1:.3;t.card.scale.x+=(t.facing-t.card.scale.x)*o,Math.abs(t.card.scale.x)<.04&&(t.card.scale.x=.04*t.facing),r.creature===`xingxing`&&(t.card.scale.y=t.crouch?.76:1)}checkContacts(e){for(let t of this.sprites.values()){if(t.kind!==`creature`||!t.visible)continue;let n=Math.hypot(t.pos.x-e.pos.x,t.pos.z-e.pos.z);if(t.mark.foe){if(n<pg&&this.elapsed>=this.safeUntil){this.stop(),this.onContact?.(t.id);return}}else if(n<mg&&!this.touched.has(t.id)){this.touched.add(t.id),this.stop(),this.onContact?.(t.id);return}else n>2.5&&this.touched.delete(t.id)}}updateGuide(e,t,n){let r=this.guideTarget?this.sprites.get(this.guideTarget):void 0;if(!r?.visible||!n){this.arrow.visible=!1;return}if(this.elapsed>=this.guideAt){this.guideAt=this.elapsed+.5;let n=qh(e,t.pos.x,t.pos.z),i=r.kind===`creature`?qh(e,r.pos.x,r.pos.z):r.tile,a=Math.max(Math.abs(i[0]-n[0]),Math.abs(i[1]-n[1]))<=2?null:r.kind===`exit`?Xh(e,n,i,this.blocked):Zh(e,n,i[0],i[1],this.blocked)?.path;if(!a?.length)this.guideDir=null;else{let[n,r]=a[Math.min(a.length-1,3)],{x:i,z:o}=Kh(e,n,r);this.guideDir=new B(i-t.pos.x,o-t.pos.z).normalize()}}if(!this.guideDir){this.arrow.visible=!1;return}this.arrow.visible=!0;let i=1+(this.reducedMotion?0:Math.sin(this.elapsed*4)*.08),a=t.pos.x+this.guideDir.x*i,o=t.pos.z+this.guideDir.y*i;this.arrow.position.set(a,Jh(e,a,o)+.06,o),this.arrow.rotation.y=Math.atan2(-this.guideDir.x,-this.guideDir.y)}updateCamera(e){let t=this.grid,n=this.hero,r=this.reducedMotion?1:1-Math.exp(-e*5);this.look.lerp(n.pos,r);let i=dg*Math.tan(Nt.degToRad(fg/2))*this.camera.aspect*.8,a=-t.w/2+i,o=t.w/2-i,s=new V(a<o?Math.min(o,Math.max(a,this.look.x)):0,.3,Math.min(t.h/2-3.2,Math.max(-t.h/2+2.4,this.look.z)));this.camera.position.set(s.x,s.y+Math.sin(sg)*dg,s.z+Math.cos(sg)*dg),this.camera.lookAt(s)}resize(e,t){this.width=e,this.height=t,this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}screenOf(e){let t=e.clone().project(this.camera);return t.z>1?null:{x:(t.x+1)/2*this.width,y:(1-t.y)/2*this.height}}anchors(){let e=[];for(let t of this.sprites.values()){if(!t.visible||t.kind===`outcrop`||t.kind===`thing`||t.kind===`hero`||t.kind===`companion`)continue;let n=t.pos.clone().add(new V(0,t.height*(t.card.scale.y||1)+.12,0)),r=this.screenOf(n);r&&e.push({id:t.id,kind:t.kind,x:r.x,y:r.y,onScreen:r.x>-40&&r.x<this.width+40&&r.y>-40&&r.y<this.height+40})}return e}tapPoint(e){let t=this.grid,n=this.hero;if(!t||!n)return null;let r={left:70,right:this.width-70,top:110,bottom:this.height-80},i=e=>!!e&&e.x>r.left&&e.x<r.right&&e.y>r.top&&e.y<r.bottom,a=(e,n)=>{let{x:r,z:i}=Kh(t,e,n);return this.screenOf(new V(r,Jh(t,r,i),i))},o=(e,n,r)=>{this.raycaster.setFromCamera(new B(e.x/this.width*2-1,-(e.y/this.height)*2+1),this.camera);let i=this.terrain?this.raycaster.intersectObject(this.terrain,!1)[0]:void 0;if(!i)return!1;let[a,o]=qh(t,i.point.x,i.point.z);return Math.max(Math.abs(a-n),Math.abs(o-r))<=1},s,c;if(typeof e==`string`){let n=this.sprites.get(e);if(!n)return null;s=n.kind===`creature`?qh(t,n.pos.x,n.pos.z):n.tile,c=n.kind===`exit`?a(n.tile[0],n.tile[1]):this.screenOf(n.pos.clone().add(new V(0,n.kind===`outcrop`?.05:n.height*.5,0)))}else s=e,c=a(e[0],e[1]);let l=typeof e!=`string`||this.sprites.get(e)?.kind===`outcrop`||this.sprites.get(e)?.kind===`exit`;if(c&&i(c)&&(!l||o(c,s[0],s[1])))return c;let u=qh(t,n.pos.x,n.pos.z),d=typeof e==`string`&&this.sprites.get(e)?.kind!==`exit`?Zh(t,u,s[0],s[1],this.blocked)?.path:Xh(t,u,s,this.blocked);for(let[e,t]of(d??[]).slice().reverse()){let n=a(e,t);if(n&&i(n)&&o(n,e,t))return n}return c?{x:Math.min(r.right,Math.max(r.left,c.x)),y:Math.min(r.bottom,Math.max(r.top,c.y))}:null}snapshot(){let e=this.grid;return{hero:this.heroTile(),moving:!!this.hero?.path.length,entities:e?[...this.sprites.values()].map(t=>({id:t.id,kind:t.kind,tile:t.kind===`creature`?qh(e,t.pos.x,t.pos.z):t.tile,visible:t.visible})):[]}}tileOfEntity(e){let t=this.sprites.get(e);return!t||!this.grid?null:t.kind===`creature`?qh(this.grid,t.pos.x,t.pos.z):t.tile}get gridInfo(){return this.grid}},vg=``+new URL(`cry-chiru-CCEh6i4d.mp3`,import.meta.url).href,yg=``+new URL(`cry-guanguan-Dif6ypfh.mp3`,import.meta.url).href,bg=``+new URL(`cry-jiuweihu-DjBkIbsT.mp3`,import.meta.url).href,xg=``+new URL(`cry-lu-BqmUBeJY.mp3`,import.meta.url).href,Sg=``+new URL(`cry-lushu-_7Yiq_Z3.mp3`,import.meta.url).href,Cg=``+new URL(`cry-xuangui-B2XiVv7p.mp3`,import.meta.url).href,wg=``+new URL(`approach-chanyuan-CVVIZl4S.mp3`,import.meta.url).href,Tg=``+new URL(`approach-di-CCvlCC4b.mp3`,import.meta.url).href,Eg=``+new URL(`approach-ji-DzV6O2aC.mp3`,import.meta.url).href,Dg=``+new URL(`approach-jiwei-BXfup0WY.mp3`,import.meta.url).href,Og=``+new URL(`approach-niuyang-8BG1XOSg.mp3`,import.meta.url).href,kg=``+new URL(`approach-qingqiu-BrhxfbQ8.mp3`,import.meta.url).href,Ag=``+new URL(`approach-tangting-TzTCEcKL.mp3`,import.meta.url).href,jg=``+new URL(`approach-yuanyi-BlMUjxAD.mp3`,import.meta.url).href,Mg=``+new URL(`codex-baijin-original-CThkbgyB.mp3`,import.meta.url).href,Ng=``+new URL(`codex-baijin-plain-BjcMkgD4.mp3`,import.meta.url).href,Pg=``+new URL(`codex-baiyu-original-DwPDjeEC.mp3`,import.meta.url).href,Fg=``+new URL(`codex-baiyu-plain-IW_E7TJ5.mp3`,import.meta.url).href,Ig=``+new URL(`codex-baiyuan-original-Ay1KadQL.mp3`,import.meta.url).href,Lg=``+new URL(`codex-baiyuan-plain-BbcKls3x.mp3`,import.meta.url).href,Rg=``+new URL(`codex-boyi-original-BQUEr2_L.mp3`,import.meta.url).href,zg=``+new URL(`codex-boyi-plain-xuFY1UzB.mp3`,import.meta.url).href,Bg=``+new URL(`codex-changfu-original-CwzHrl66.mp3`,import.meta.url).href,Vg=``+new URL(`codex-changfu-plain-BnxmZz_x.mp3`,import.meta.url).href,Hg=``+new URL(`codex-chijin-original-CZtY0P2U.mp3`,import.meta.url).href,Ug=``+new URL(`codex-chijin-plain-B3Khr48C.mp3`,import.meta.url).href,Wg=``+new URL(`codex-chiru-original-BhrL0zfY.mp3`,import.meta.url).href,Gg=``+new URL(`codex-chiru-plain-CwjeWKw4.mp3`,import.meta.url).href,Kg=``+new URL(`codex-guanguan-original-2D33ZYvT.mp3`,import.meta.url).href,qg=``+new URL(`codex-guanguan-plain-CToARkJX.mp3`,import.meta.url).href,Jg=``+new URL(`codex-gui-original-C-2gb0S1.mp3`,import.meta.url).href,Yg=``+new URL(`codex-gui-plain-BPeultBg.mp3`,import.meta.url).href,Xg=``+new URL(`codex-jiuweihu-original-Canu__bD.mp3`,import.meta.url).href,Zg=``+new URL(`codex-jiuweihu-plain-D-bLnmEp.mp3`,import.meta.url).href,Qg=``+new URL(`codex-lei-original-s4gzF91R.mp3`,import.meta.url).href,$g=``+new URL(`codex-lei-plain-CKfoFOZ6.mp3`,import.meta.url).href,e_=``+new URL(`codex-lu-original-CTIATwaZ.mp3`,import.meta.url).href,t_=``+new URL(`codex-lu-plain-DOY_KZzD.mp3`,import.meta.url).href,n_=``+new URL(`codex-lushu-original-UmohPcAV.mp3`,import.meta.url).href,r_=``+new URL(`codex-lushu-plain-icfZhXUx.mp3`,import.meta.url).href,i_=``+new URL(`codex-migu-original-D128plHT.mp3`,import.meta.url).href,a_=``+new URL(`codex-migu-plain-9y4EozJQ.mp3`,import.meta.url).href,o_=``+new URL(`codex-qinghuo-original-EBqmc1jx.mp3`,import.meta.url).href,s_=``+new URL(`codex-qinghuo-plain-Bw8Xw4-X.mp3`,import.meta.url).href,c_=``+new URL(`codex-queshanshen-original-BILIV2m9.mp3`,import.meta.url).href,l_=``+new URL(`codex-queshanshen-plain-C0SZ7UmO.mp3`,import.meta.url).href,u_=``+new URL(`codex-shuiyu-original-CTsPbvie.mp3`,import.meta.url).href,d_=``+new URL(`codex-shuiyu-plain-DcPWQjtJ.mp3`,import.meta.url).href,f_=``+new URL(`codex-xingxing-original-CevXc3jU.mp3`,import.meta.url).href,p_=``+new URL(`codex-xingxing-plain-DmfyyQx0.mp3`,import.meta.url).href,m_=``+new URL(`codex-xuangui-original-m8H-bIC2.mp3`,import.meta.url).href,h_=``+new URL(`codex-xuangui-plain-Dp9wLJly.mp3`,import.meta.url).href,g_=``+new URL(`codex-yanmu-original-DcpkSI9o.mp3`,import.meta.url).href,__=``+new URL(`codex-yanmu-plain-Bo-Bok1Y.mp3`,import.meta.url).href,v_=``+new URL(`codex-zhuyu-original-Dsbe0P8d.mp3`,import.meta.url).href,y_=``+new URL(`codex-zhuyu-plain-C20CnObx.mp3`,import.meta.url).href,b_=``+new URL(`mountain-chanyuan-original-DQ26vY1n.mp3`,import.meta.url).href,x_=``+new URL(`mountain-chanyuan-plain-ysMGyFGR.mp3`,import.meta.url).href,S_=``+new URL(`mountain-di-original-GdG_T_YC.mp3`,import.meta.url).href,C_=``+new URL(`mountain-di-plain-BotPRFD9.mp3`,import.meta.url).href,w_=``+new URL(`mountain-ji-original-BmjUPHec.mp3`,import.meta.url).href,T_=``+new URL(`mountain-ji-plain-D5DHu8cQ.mp3`,import.meta.url).href,E_=``+new URL(`mountain-jiwei-original-xCwA6M4B.mp3`,import.meta.url).href,D_=``+new URL(`mountain-jiwei-plain-D3nConBY.mp3`,import.meta.url).href,O_=``+new URL(`mountain-niuyang-original-DR-DUt-G.mp3`,import.meta.url).href,k_=``+new URL(`mountain-niuyang-plain-mA6Fql1W.mp3`,import.meta.url).href,A_=``+new URL(`mountain-qingqiu-original-CLhwKGB2.mp3`,import.meta.url).href,j_=``+new URL(`mountain-qingqiu-plain-B55c-lXC.mp3`,import.meta.url).href,M_=``+new URL(`mountain-tangting-original-CiVpzxt7.mp3`,import.meta.url).href,N_=``+new URL(`mountain-tangting-plain-BGfaVMsr.mp3`,import.meta.url).href,P_=``+new URL(`mountain-yuanyi-original-BThXDo5M.mp3`,import.meta.url).href,F_=``+new URL(`mountain-yuanyi-plain-D9Ffw1AE.mp3`,import.meta.url).href,I_=``+new URL(`mountain-zhaoyao-original-BtzJw4_O.mp3`,import.meta.url).href,L_=``+new URL(`mountain-zhaoyao-plain-CL5qu-mk.mp3`,import.meta.url).href,R_=``+new URL(`summary-original-DI-ipM74.mp3`,import.meta.url).href,z_=``+new URL(`summary-plain-S-8IJK9S.mp3`,import.meta.url).href,B_=new Map(Object.entries(Object.assign({"../../assets/audio/sfx/cry-chiru.mp3":vg,"../../assets/audio/sfx/cry-guanguan.mp3":yg,"../../assets/audio/sfx/cry-jiuweihu.mp3":bg,"../../assets/audio/sfx/cry-lu.mp3":xg,"../../assets/audio/sfx/cry-lushu.mp3":Sg,"../../assets/audio/sfx/cry-xuangui.mp3":Cg,"../../assets/audio/voice/approach-chanyuan.mp3":wg,"../../assets/audio/voice/approach-di.mp3":Tg,"../../assets/audio/voice/approach-ji.mp3":Eg,"../../assets/audio/voice/approach-jiwei.mp3":Dg,"../../assets/audio/voice/approach-niuyang.mp3":Og,"../../assets/audio/voice/approach-qingqiu.mp3":kg,"../../assets/audio/voice/approach-tangting.mp3":Ag,"../../assets/audio/voice/approach-yuanyi.mp3":jg,"../../assets/audio/voice/codex-baijin-original.mp3":Mg,"../../assets/audio/voice/codex-baijin-plain.mp3":Ng,"../../assets/audio/voice/codex-baiyu-original.mp3":Pg,"../../assets/audio/voice/codex-baiyu-plain.mp3":Fg,"../../assets/audio/voice/codex-baiyuan-original.mp3":Ig,"../../assets/audio/voice/codex-baiyuan-plain.mp3":Lg,"../../assets/audio/voice/codex-boyi-original.mp3":Rg,"../../assets/audio/voice/codex-boyi-plain.mp3":zg,"../../assets/audio/voice/codex-changfu-original.mp3":Bg,"../../assets/audio/voice/codex-changfu-plain.mp3":Vg,"../../assets/audio/voice/codex-chijin-original.mp3":Hg,"../../assets/audio/voice/codex-chijin-plain.mp3":Ug,"../../assets/audio/voice/codex-chiru-original.mp3":Wg,"../../assets/audio/voice/codex-chiru-plain.mp3":Gg,"../../assets/audio/voice/codex-guanguan-original.mp3":Kg,"../../assets/audio/voice/codex-guanguan-plain.mp3":qg,"../../assets/audio/voice/codex-gui-original.mp3":Jg,"../../assets/audio/voice/codex-gui-plain.mp3":Yg,"../../assets/audio/voice/codex-jiuweihu-original.mp3":Xg,"../../assets/audio/voice/codex-jiuweihu-plain.mp3":Zg,"../../assets/audio/voice/codex-lei-original.mp3":Qg,"../../assets/audio/voice/codex-lei-plain.mp3":$g,"../../assets/audio/voice/codex-lu-original.mp3":e_,"../../assets/audio/voice/codex-lu-plain.mp3":t_,"../../assets/audio/voice/codex-lushu-original.mp3":n_,"../../assets/audio/voice/codex-lushu-plain.mp3":r_,"../../assets/audio/voice/codex-migu-original.mp3":i_,"../../assets/audio/voice/codex-migu-plain.mp3":a_,"../../assets/audio/voice/codex-qinghuo-original.mp3":o_,"../../assets/audio/voice/codex-qinghuo-plain.mp3":s_,"../../assets/audio/voice/codex-queshanshen-original.mp3":c_,"../../assets/audio/voice/codex-queshanshen-plain.mp3":l_,"../../assets/audio/voice/codex-shuiyu-original.mp3":u_,"../../assets/audio/voice/codex-shuiyu-plain.mp3":d_,"../../assets/audio/voice/codex-xingxing-original.mp3":f_,"../../assets/audio/voice/codex-xingxing-plain.mp3":p_,"../../assets/audio/voice/codex-xuangui-original.mp3":m_,"../../assets/audio/voice/codex-xuangui-plain.mp3":h_,"../../assets/audio/voice/codex-yanmu-original.mp3":g_,"../../assets/audio/voice/codex-yanmu-plain.mp3":__,"../../assets/audio/voice/codex-zhuyu-original.mp3":v_,"../../assets/audio/voice/codex-zhuyu-plain.mp3":y_,"../../assets/audio/voice/mountain-chanyuan-original.mp3":b_,"../../assets/audio/voice/mountain-chanyuan-plain.mp3":x_,"../../assets/audio/voice/mountain-di-original.mp3":S_,"../../assets/audio/voice/mountain-di-plain.mp3":C_,"../../assets/audio/voice/mountain-ji-original.mp3":w_,"../../assets/audio/voice/mountain-ji-plain.mp3":T_,"../../assets/audio/voice/mountain-jiwei-original.mp3":E_,"../../assets/audio/voice/mountain-jiwei-plain.mp3":D_,"../../assets/audio/voice/mountain-niuyang-original.mp3":O_,"../../assets/audio/voice/mountain-niuyang-plain.mp3":k_,"../../assets/audio/voice/mountain-qingqiu-original.mp3":A_,"../../assets/audio/voice/mountain-qingqiu-plain.mp3":j_,"../../assets/audio/voice/mountain-tangting-original.mp3":M_,"../../assets/audio/voice/mountain-tangting-plain.mp3":N_,"../../assets/audio/voice/mountain-yuanyi-original.mp3":P_,"../../assets/audio/voice/mountain-yuanyi-plain.mp3":F_,"../../assets/audio/voice/mountain-zhaoyao-original.mp3":I_,"../../assets/audio/voice/mountain-zhaoyao-plain.mp3":L_,"../../assets/audio/voice/summary-original.mp3":R_,"../../assets/audio/voice/summary-plain.mp3":z_})).map(([e,t])=>[e.slice(e.lastIndexOf(`/`)+1,-4),t]));function V_(){let e=new Uint8Array(444).fill(128,44),t=new DataView(e.buffer),n=(e,n)=>Array.from(n).forEach((n,r)=>t.setUint8(e+r,n.charCodeAt(0)));return n(0,`RIFF`),t.setUint32(4,436,!0),n(8,`WAVEfmt `),t.setUint32(16,16,!0),t.setUint16(20,1,!0),t.setUint16(22,1,!0),t.setUint32(24,8e3,!0),t.setUint32(28,8e3,!0),t.setUint16(32,1,!0),t.setUint16(34,8,!0),n(36,`data`),t.setUint32(40,400,!0),URL.createObjectURL(new Blob([e],{type:`audio/wav`}))}var H_=`xingzou-shanhaijing-muted`,U_=class{context=null;quiet=!1;unlocked=!1;player=new Audio;clipToken=0;clipDone=null;constructor(){try{this.quiet=localStorage.getItem(H_)===`1`}catch{}let e=()=>{this.unlock(),window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,e)};window.addEventListener(`pointerdown`,e,{once:!0}),window.addEventListener(`keydown`,e,{once:!0})}async unlock(){if(this.unlocked)return;let e=window.AudioContext||window.webkitAudioContext;this.player.src=V_(),this.player.play().catch(()=>{}),e&&(this.context=new e,await this.context.resume(),this.unlocked=!0)}get muted(){return this.quiet}setMuted(e){this.quiet=e,e&&this.stopClip();try{localStorage.setItem(H_,e?`1`:`0`)}catch{}}correct(){[523.25,587.33,659.25,783.99].forEach((e,t)=>this.tone(e,`triangle`,t*.07,.25,.07))}wrong(){this.tone(220,`sine`,0,.3,.06)}step(){this.tone(880,`square`,0,.04,.02)}stamp(){this.tone(110,`sine`,0,.18,.12),this.tone(1046.5,`triangle`,.05,.4,.05)}hasClip(e){return B_.has(e)}playClip(e){this.stopClip();let t=B_.get(e);if(!t||this.quiet)return Promise.resolve();let n=++this.clipToken,r=()=>{n===this.clipToken&&this.stopClip()};return new Promise(e=>{this.clipDone=e,this.player.src=t,this.player.onended=r,this.player.play().catch(r)})}stopClip(){this.clipToken+=1,this.player.pause(),this.player.onended=null;let e=this.clipDone;this.clipDone=null,e?.()}dispose(){this.stopClip(),this.context?.close(),this.context=null}tone(e,t,n,r,i){if(this.quiet||!this.context||this.context.state!==`running`)return;let a=this.context.currentTime+n,o=this.context.createOscillator(),s=this.context.createGain();o.type=t,o.frequency.setValueAtTime(e,a),s.gain.setValueAtTime(1e-4,a),s.gain.exponentialRampToValueAtTime(i,a+.015),s.gain.exponentialRampToValueAtTime(1e-4,a+r),o.connect(s).connect(this.context.destination),o.start(a),o.stop(a+r+.05)}},W_=class{ui;labelLayer;banner=null;bar=null;hint=null;layer=null;labelNodes=new Map;autoButton=null;constructor(e,t){this.ui=e,this.labelLayer=t}show(){this.ui.clear(),this.banner=this.ui.element(`div`,`battle-banner panel`),this.bar=this.ui.element(`section`,`battle-bar panel`),this.hint=this.ui.element(`div`,`battle-hint`),this.ui.mount(this.banner),this.ui.mount(this.hint),this.ui.mount(this.bar),this.layer=this.ui.element(`div`,`battle-labels`),this.labelLayer.append(this.layer)}hide(){for(let e of[this.banner,this.bar,this.hint])e?.remove();this.layer?.remove(),this.layer=null,this.labelNodes.clear(),this.banner=this.bar=this.hint=null}setBanner(e){this.banner&&(this.banner.innerHTML=e)}setHint(e){this.hint&&(this.hint.textContent=e,this.hint.hidden=!e)}setActive(e,t,n,r){if(!this.bar)return;this.bar.replaceChildren(),this.autoButton=null;let i=()=>{let e=this.ui.button(r.on?Z(`battleAutoOff`):Z(`battleAuto`),r.on,r.onToggle);return e.classList.add(`skill`,`auto`),this.autoButton=e,e};if(!e||r?.on){this.bar.append(this.ui.element(`div`,`battle-wait`,r?.on?Z(`battleAutoPlaying`):Z(`battleWatching`))),r?.on&&this.bar.append(i());return}let a=this.ui.element(`div`,`battle-who`),o=this.ui.element(`img`,`battle-portrait`);o.src=e.figureUrl,o.alt=``;let s=this.ui.element(`div`,`battle-info`);s.append(this.ui.element(`div`,`battle-name ruby-text`,e.name),this.hpBar(e.hp,e.maxHp,!1,!0)),a.append(o,s);let c=this.ui.element(`div`,`battle-skills`);for(let n of e.skills){let e=this.ui.element(`button`,`btn skill${n.selected?` selected`:``}`);e.type=`button`,e.disabled=!n.enabled,e.append(this.ui.element(`span`,`skill-name`,n.name),this.ui.element(`span`,`skill-hint`,n.wait?Z(`battleCooldown`,{n:n.wait}):n.hint)),e.addEventListener(`click`,()=>t(n.id)),c.append(e)}let l=this.ui.button(Z(`battleWait`),!1,n);l.classList.add(`skill`,`wait`),this.bar.append(a,c,l),r&&this.bar.append(i())}setAutoCountdown(e){let t=this.autoButton?.querySelector(`span`);if(!t||this.autoButton?.classList.contains(`primary`))return;let n=e===null?Z(`battleAuto`):Z(`battleAutoIn`,{n:e});t.textContent!==n&&(t.textContent=n)}hpBar(e,t,n,r){let i=this.ui.element(`div`,`hp${n?` enemy`:``}`),a=this.ui.element(`div`,`hp-fill`);return a.style.width=`${Math.round(100*e/Math.max(1,t))}%`,i.append(a),r&&i.append(this.ui.element(`span`,`hp-text`,`${e} / ${t}`)),i}labels(e){if(this.layer)for(let t of e){let e=this.labelNodes.get(t.id);e||(e=this.ui.element(`div`,`unit-label${t.enemy?` enemy`:``}`),e.append(this.ui.element(`div`,`unit-name ruby-text`,t.name),this.hpBar(t.hp,t.maxHp,t.enemy,!1)),this.labelNodes.set(t.id,e),this.layer.append(e));let n=e.querySelector(`.hp-fill`);n&&(n.style.width=`${Math.round(100*t.hp/Math.max(1,t.maxHp))}%`),e.classList.toggle(`out`,t.out),e.style.left=`${t.x}px`,e.style.top=`${t.y}px`}}float(e,t,n,r){if(!this.layer)return;let i=this.ui.element(`div`,`float-text ${r}`,e);i.style.left=`${t}px`,i.style.top=`${n}px`,this.layer.append(i),window.setTimeout(()=>i.remove(),1200)}};function G_(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function Q(e){let t=``,n=0,r=/\{([^|{}]+)\|([^{}]+)\}/g;for(let i=r.exec(e);i;i=r.exec(e)){t+=G_(e.slice(n,i.index));let r=Array.from(i[1]),a=i[2].trim().split(/\s+/);a.length===r.length?t+=r.map((e,t)=>`<ruby>${G_(e)}<rt>${G_(a[t])}</rt></ruby>`).join(``):t+=`<ruby>${G_(i[1])}<rt>${G_(i[2])}</rt></ruby>`,n=i.index+i[0].length}return t+G_(e.slice(n))}function $(e,t=``,n=``){let r=document.createElement(e);return t&&(r.className=t),n&&(r.innerHTML=n),r}var K_=class{root;labelLayer;hud=null;hudProgress=null;hudBadge=null;hudLevel=null;hudXp=null;readingHint=null;labelNodes=new Map;walkLabelNodes=new Map;walkTracker=null;walkSearch=null;onSound=null;muted=!1;onClear=null;reducedMotion=!1;constructor(e,t){this.root=e,this.labelLayer=t}clear(){for(let e of Array.from(this.root.children))e!==this.hud&&!e.classList.contains(`toast`)&&!e.classList.contains(`stamp`)&&e.remove();this.readingHint=null,this.walkTracker=null,this.walkSearch=null,this.onClear?.()}title(e,t=``){this.clear();let n=$(`section`,`title-screen`);n.append($(`span`,`seal`,Z(`chapter`)),$(`h1`,``,Z(`gameTitle`)),$(`div`,`sub`,Z(`gameSubtitle`))),t&&n.append($(`div`,`title-note`,t));let r=this.soundButton();r.classList.add(`title-sound`),n.append(r);let i=$(`div`,`title-buttons`);for(let t of e){let e=this.button(t.label,t.primary,t.onClick);e.addEventListener(`click`,()=>i.querySelectorAll(`button`).forEach(e=>e.disabled=!0),{once:!0}),i.append(e)}n.append(i,$(`div`,`title-credits`,Z(`credits`))),this.root.append(n)}heroSelect(e){return this.clear(),new Promise(t=>{let n=$(`section`,`hero-select`);n.append($(`div`,`kicker`,Z(`heroSelectKicker`)),$(`h2`,``,Z(`heroSelectTitle`)));let r=$(`div`,`hero-choices`);for(let n of e){let e=$(`button`,`hero-card panel`);e.type=`button`;let i=$(`img`);i.src=n.figureUrl,i.alt=n.label,e.append(i,$(`span`,`hero-label`,n.label)),e.addEventListener(`click`,()=>t(n.value),{once:!0}),r.append(e)}n.append(r,$(`div`,`sub`,Z(`heroSelectNote`))),this.root.append(n)})}dialogue(e){return this.clear(),new Promise(t=>{let n=$(`section`,`dialogue-bar panel`),r=$(`img`,`dialogue-portrait`);r.alt=``;let i=$(`div`,`dialogue-box`),a=$(`div`,`dialogue-name ruby-text`),o=$(`div`,`dialogue-text ruby-text`);i.append(a,o);let s=$(`div`,`dialogue-actions`),c=this.button(Z(`dialogueBack`),!1,()=>d(u-1));c.classList.add(`dialogue-back`);let l=this.button(Z(`next`),!0,()=>d(u+1));l.classList.add(`dialogue-next`),s.append(c,l),n.append(r,i,s);let u=-1,d=i=>{if(!(i<0)){if(u=i,u>=e.length){n.remove(),t();return}r.src=e[u].figureUrl,a.innerHTML=e[u].name,o.innerHTML=e[u].text,l.textContent=u===e.length-1?Z(`dialogueDone`):Z(`next`),c.style.visibility=u>0?`visible`:`hidden`}};n.addEventListener(`click`,e=>{s.contains(e.target)||d(u+1)}),d(0),this.root.append(n)})}showHud(e){if(this.hud)return;this.hud=$(`header`,`hud-top`);let t=$(`div`,`chip`);t.append($(`span`,``,Z(`chapter`))),this.hudProgress=$(`span`,`progress`),t.append(this.hudProgress),this.hudLevel=$(`span`,`level`);let n=$(`span`,`xp-bar`);this.hudXp=$(`span`,`xp-fill`),n.append(this.hudXp),t.append(this.hudLevel,n);let r=$(`div`,`hud-buttons`),i=this.button(Z(`quests`),!1,e.quests),a=this.button(Z(`bag`),!1,e.bag),o=$(`button`,`btn codex-btn`,Z(`codex`));o.type=`button`,this.hudBadge=$(`span`,`badge`,`0`),o.append(this.hudBadge),o.addEventListener(`click`,e.codex),r.append(i,a,o,this.soundButton()),this.hud.append(t,r),this.root.prepend(this.hud)}updateHud(e){this.hudProgress&&(this.hudProgress.textContent=e.progress),this.hudBadge&&(this.hudBadge.textContent=String(e.codexCount)),this.hudLevel&&(this.hudLevel.textContent=Z(`levelShort`,{n:e.level})),this.hudXp&&(this.hudXp.style.width=`${Math.round(e.xpFraction*100)}%`)}setHudVisible(e){this.hud&&(this.hud.style.visibility=e?`visible`:`hidden`)}reading(e,t,n,r,i=[]){this.clear();let a=$(`section`,`reading-bar panel`),o=$(`div`,`text`),s=$(`div`,`prompt`,e);s.append(...i),o.append(s,$(`div`,`ruby-text`,t)),this.readingHint=$(`div`,`hint`),o.append(this.readingHint);let c=$(`div`,`choices`);for(let e of n){let t=$(`button`,`btn`,e.label);t.type=`button`,t.addEventListener(`click`,()=>r(e.value,t)),c.append(t)}a.append(o,c),this.root.append(a)}hint(e){this.readingHint&&(this.readingHint.textContent=e)}sideCard(e,t){this.clear();let n=$(`section`,`side-card panel`);n.append($(`div`,`kicker`,e),$(`h2`,``,t));let r=$(`div`,`scroll`),i=$(`div`,`actions`);return n.append(r,i),this.root.append(n),{card:n,body:r,actions:i}}setMuted(e){this.muted=e,document.querySelectorAll(`.sound-btn`).forEach(e=>this.paintSound(e))}soundButton(){let e=$(`button`,`btn sound-btn`);return e.type=`button`,e.addEventListener(`click`,e=>{e.stopPropagation(),this.onSound?.()}),this.paintSound(e),e}paintSound(e){e.innerHTML=`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" stroke="none"/>${this.muted?`<path d="M16.5 9.5l5 5M21.5 9.5l-5 5"/>`:`<path d="M16 9.5a4 4 0 0 1 0 5M18.8 7a7.5 7.5 0 0 1 0 10"/>`}</svg>`,e.setAttribute(`aria-label`,this.muted?Z(`soundOff`):Z(`soundOn`)),e.setAttribute(`aria-pressed`,String(this.muted)),e.classList.toggle(`muted`,this.muted)}button(e,t,n){let r=$(`button`,t?`btn primary`:`btn`);return r.append($(`span`,``,e)),r.type=`button`,r.addEventListener(`click`,n),r}listenButton(e,t,n){let r=$(`button`,`btn small listen`,e);return r.type=`button`,r.addEventListener(`click`,()=>{if(r.classList.contains(`playing`)){n();return}r.classList.add(`playing`),t().then(()=>r.classList.remove(`playing`))}),r}originalBlock(e,t,n=``,r=[]){let i=$(`div`),a=$(`div`,`plain`,t);a.hidden=!0;let o=$(`button`,`btn small`,Z(`showPlain`));o.type=`button`,o.addEventListener(`click`,()=>{a.hidden=!a.hidden,o.textContent=a.hidden?Z(`showPlain`):Z(`hidePlain`),a.hidden||this.reveal(a)});let s=$(`div`,`listen-row`);return s.append(o,...r),i.append(s,$(`div`,`original ruby-text`,e),a),n&&i.append($(`div`,`tag-draft`,n)),i}reveal(e){let t=e.closest(`.scroll`);if(!t)return;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect(),i=r.top-n.top+t.scrollTop,a=Math.min(i,i+r.height-t.clientHeight);a<=t.scrollTop||t.scrollTo({top:a,behavior:this.reducedMotion?`auto`:`smooth`})}element(e,t=``,n=``){return $(e,t,n)}mount(e){this.root.append(e)}toast(e,t=1600,n=!1){let r=$(`div`,`toast panel${n?` low`:``}`,e);this.root.append(r),window.setTimeout(()=>r.remove(),t)}clearToasts(){for(let e of Array.from(this.root.querySelectorAll(`.toast`)))e.remove()}stamp(e){let t=$(`div`,`stamp`,e);this.root.append(t),window.setTimeout(()=>t.remove(),1100)}labels(e){for(let t of e){let e=this.labelNodes.get(t.index);e||(e=$(`div`,`map-label`),this.labelNodes.set(t.index,e),this.labelLayer.append(e)),e.dataset.html!==t.html&&(e.innerHTML=t.html,e.dataset.html=t.html),e.classList.toggle(`current`,t.current),e.style.display=t.visible?``:`none`,e.style.left=`${t.x}px`,e.style.top=`${t.y}px`}}hideLabels(){for(let e of this.labelNodes.values())e.style.display=`none`}walkHud(e,t){this.clear();let n=$(`button`,`walk-tracker panel ruby-text`);n.type=`button`,n.addEventListener(`click`,e.tracker),this.walkTracker=n;let r=$(`div`,`walk-actions`),i=this.button(Z(`walkOriginal`),!1,e.original),a=this.button(Z(`walkSearch`),!0,e.search);a.hidden=!0,this.walkSearch=a,r.append(i,a);let o=$(`div`,`walk-compass panel${t?` yinyang`:``}`);o.append($(`span`,`north`,Z(t?`compassNorthYin`:`compassNorth`)),$(`span`,`needle`),$(`span`,`south`,Z(t?`compassSouthYang`:`compassSouth`))),this.root.append(n,r,o)}setTracker(e){this.walkTracker&&this.walkTracker.dataset.html!==e&&(this.walkTracker.dataset.html=e,this.walkTracker.innerHTML=e,this.walkTracker.hidden=!e)}setSearchVisible(e){this.walkSearch&&this.walkSearch.hidden===e&&(this.walkSearch.hidden=!e)}walkLabels(e){let t=new Set;for(let n of e){t.add(n.id);let e=this.walkLabelNodes.get(n.id);e||(e=$(`div`,`walk-label`),this.walkLabelNodes.set(n.id,e),this.labelLayer.append(e));let r=`${n.marker?`<b class="marker">${n.marker}</b>`:``}<span class="ruby-text">${n.html}</span>`;e.dataset.html!==r&&(e.innerHTML=r,e.dataset.html=r),e.style.display=n.visible?``:`none`,e.style.left=`${n.x}px`,e.style.top=`${n.y}px`}for(let[e,n]of this.walkLabelNodes)t.has(e)||(n.style.display=`none`)}hideWalkLabels(){for(let e of this.walkLabelNodes.values())e.style.display=`none`}};function q_(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var J_=12,Y_=5,X_={panmu:`cry-xuangui`,ti:`cry-jiuweihu`,ruyao:`cry-lushu`},Z_=class{scene;hud;audio;canvas;state;options;active=null;skill=null;busy=!1;finish=null;urls=new Map;shownHp=new Map;down=null;auto=!1;autoRunning=!1;idleSince=0;constructor(e,t,n,r){this.scene=e,this.hud=t,this.audio=n,this.canvas=r}get running(){return this.finish!==null}async run(e){this.options=e,this.state=Xu(Yu[e.battle],e.party,{protect:e.protect,zhuyu:e.zhuyu,seed:e.seed}),this.scene.clearPieces();for(let e of this.state.units){let t=this.figureOf(e.kind),[n,r]=await Promise.all([fm(t),pm(t)]);this.urls.set(e.id,r),this.scene.addPiece(e.id,e.kind,n,[e.x,e.y],e.side===`player`?1:-1),this.shownHp.set(e.id,e.hp)}return this.hud.show(),this.setBanner(),this.active=null,this.skill=null,this.busy=!1,this.canvas.addEventListener(`pointerdown`,this.onDown),this.canvas.addEventListener(`pointerup`,this.onUp),this.autoRunning=!1,this.idleSince=performance.now(),this.refresh(),new Promise(e=>this.finish=e)}figureOf(e){return e===`hero`?this.options.heroFigure:e}nameOf(e){let t=Zu(this.state,e);return t.kind===`hero`?Z(`battleYou`):Q(Cd[t.kind]??t.kind)}onDown=e=>{this.down={x:e.clientX,y:e.clientY},this.idleSince=performance.now()};onUp=e=>{let t=this.down;if(this.down=null,!t||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12)return;let n=this.scene.pick(e.clientX,e.clientY,this.canvas);n&&this.tap(n)};tap([e,t]){if(this.busy||!this.active||this.state.phase!==`player`)return;let n=Zu(this.state,this.active);if(this.skill&&rd(this.state,n.id,this.skill).some(([n,r])=>n===e&&r===t)){this.act({type:`skill`,unit:n.id,skill:this.skill,x:e,y:t});return}let r=Qu(this.state,e,t);if(r&&r.side===`player`&&r.id!==n.id&&id(this.state).includes(r)){this.active=r.id,this.skill=null,this.refresh();return}!n.moved&&!(e===n.x&&t===n.y)&&nd(this.state,n.id).has(`${e},${t}`)&&this.act({type:`move`,unit:n.id,x:e,y:t})}pickSkill(e){if(this.idleSince=performance.now(),this.busy||!this.active)return;let t=Ku[e],n=Zu(this.state,this.active);if(t.kind===`heal`||t.kind===`cry`){this.act({type:`skill`,unit:n.id,skill:e,x:n.x,y:n.y});return}this.skill=this.skill===e?null:e,this.refresh()}wait(){this.idleSince=performance.now(),!(this.busy||!this.active)&&this.act({type:`wait`,unit:this.active})}toggleAuto(){this.auto=!this.auto,this.idleSince=performance.now(),this.skill=null,this.refresh()}async autoStep(){if(this.autoRunning||!this.auto||this.busy||!this.active||this.state.phase!==`player`)return;this.autoRunning=!0,await this.pause(.45);let e=this.active;if(this.auto&&this.finish&&e&&this.state.phase===`player`)for(let t of hd(this.state,e)){if(!this.finish||this.state.phase!==`player`)break;await this.act(t)}this.autoRunning=!1,this.finish&&this.refresh()}async act(e){this.busy=!0,this.skill=null;let{state:t,events:n}=pd(this.state,e);this.scene.mark([]),this.hud.setActive(null,()=>{},()=>{}),this.hud.setHint(``),await this.play(n),this.state=t;for(let e of t.units)this.shownHp.set(e.id,e.hp);if(this.busy=!1,t.phase===`won`||t.phase===`lost`){await this.pause(.9),this.end(t.phase);return}this.active&&!id(t).some(e=>e.id===this.active)&&(this.active=null),this.refresh()}end(e){this.canvas.removeEventListener(`pointerdown`,this.onDown),this.canvas.removeEventListener(`pointerup`,this.onUp),this.scene.mark([]),this.hud.hide();let t=this.finish;this.finish=null,t?.({result:e,zhuyuUsed:this.options.zhuyu-this.state.zhuyu})}refresh(){let e=id(this.state);if((!this.active||!e.some(e=>e.id===this.active))&&(this.active=e[0]?.id??null),this.setBanner(),!this.active){this.scene.mark([]),this.hud.setActive(null,()=>{},()=>{});return}let t={on:this.auto,onToggle:()=>this.toggleAuto()};if(this.auto){this.scene.mark([{cell:[Zu(this.state,this.active).x,Zu(this.state,this.active).y],mark:`active`}]),this.hud.setActive(null,()=>{},()=>{},t),this.hud.setHint(``),this.autoStep();return}let n=Zu(this.state,this.active),r=[];if(this.skill)for(let e of rd(this.state,n.id,this.skill))r.push({cell:e,mark:`target`});else if(!n.moved)for(let e of nd(this.state,n.id).values()){let t=e[e.length-1];(t[0]!==n.x||t[1]!==n.y)&&r.push({cell:t,mark:`move`})}r.push({cell:[n.x,n.y],mark:`active`}),this.scene.mark(r),this.hud.setActive({name:this.nameOf(n.id),figureUrl:this.urls.get(n.id)??``,hp:n.hp,maxHp:n.maxHp,skills:n.skills.map(e=>({id:e,name:Sd[e]?.name??e,hint:e===`zhuyu`?Z(`battleZhuyuLeft`,{n:this.state.zhuyu}):Sd[e]?.hint??``,enabled:rd(this.state,n.id,e).length>0,selected:this.skill===e,wait:n.cooldowns[e]??0}))},e=>this.pickSkill(e),()=>this.wait(),t),this.hud.setHint(this.hintFor(n.id))}hintFor(e){let t=Zu(this.state,e);return this.skill?Z(`battleHintTarget`):!this.options.tutorial&&this.state.turn>1?``:t.moved?Z(`battleHintSkill`):id(this.state).length>1?Z(`battleHintMoveOrSwitch`):Z(`battleHintMove`)}setBanner(){let e=this.state.phase===`enemy`?Z(`battleEnemyTurn`):Z(`battleYourTurn`);this.hud.setBanner(`${Z(`battleTurn`,{n:this.state.turn})} · ${e}`)}pause(e){return new Promise(t=>window.setTimeout(t,this.scene.reducedMotion?0:e*1e3))}screenOf(e){let t=(this.scene.anchor(e)??new V).project(this.scene.camera),n=this.canvas.getBoundingClientRect();return{x:(t.x+1)/2*n.width,y:(1-t.y)/2*n.height}}floatAt(e,t,n){let{x:r,y:i}=this.screenOf(e);this.hud.float(t,r,i-18,n)}async play(e){let t=e=>{let t=Zu(this.state,e);return[t.x,t.y]},n=this.state;for(let r of e)switch(r.type){case`phase`:(r.phase===`enemy`||r.phase===`player`)&&(this.state={...n,phase:r.phase,turn:r.turn},n=this.state,this.setBanner(),await this.pause(r.phase===`enemy`?.5:.3));break;case`move`:{this.audio.step(),await this.scene.walk(r.unit,r.path);let[e,t]=r.path[r.path.length-1];n={...n,units:n.units.map(n=>n.id===r.unit?{...n,x:e,y:t}:n)},this.state=n;break}case`skill`:{let e=Ku[r.skill];this.floatAt(r.unit,Sd[r.skill]?.name??r.skill,`status`);let n=X_[r.skill];n&&this.audio.hasClip(n)&&this.audio.playClip(n),e.kind===`cry`?await this.scene.ripple(r.unit,`#c0392b`,e.maxRange*2):e.kind===`heal`?await this.scene.ripple(r.unit,`#3f6f62`,e.maxRange*2):r.skill===`shi`?await this.scene.throwStone(t(r.unit),[r.x,r.y]):e.kind===`strike`&&await this.scene.lunge(r.unit,[r.x,r.y]);break}case`damage`:this.shownHp.set(r.unit,r.hp),this.floatAt(r.unit,`-${r.amount}`,`damage`),await this.scene.hit(r.unit);break;case`heal`:this.shownHp.set(r.unit,r.hp),this.audio.correct(),this.floatAt(r.unit,`+${r.amount}`,`heal`),await this.pause(.25);break;case`status`:this.floatAt(r.unit,Z(`battleStatus`,{status:wd[r.status]}),`status`),await this.pause(.45);break;case`blocked`:{let e=this.options.equipped.find(e=>Td[e]?.blocks===r.status);this.floatAt(r.unit,Z(`battleBlocked`,{item:e?Q(Td[e].name):``}),`heal`),await this.pause(.45);break}case`skip`:this.floatAt(r.unit,r.status===`yun`?Z(`battleDazed`):Z(`battleConfused`),`status`),await this.pause(.5);break;case`out`:{let e=Zu(this.state,r.unit).side===`enemy`;this.floatAt(r.unit,Z(e?`battleSubdued`:`battleTired`),e?`heal`:`damage`),e&&this.audio.stamp(),await this.scene.knockOut(r.unit);break}}}snapshot(){if(!this.finish||!this.state)return null;let e=this.busy?null:this.active;return{phase:this.state.phase,turn:this.state.turn,active:e,skill:this.skill,auto:this.auto,units:this.state.units.map(e=>({id:e.id,side:e.side,x:e.x,y:e.y,hp:e.hp,maxHp:e.maxHp,out:e.out,acted:e.acted,moved:e.moved})),reachable:e&&!Zu(this.state,e).moved?[...nd(this.state,e).values()].map(e=>e[e.length-1]):[],skills:e?Zu(this.state,e).skills.map(t=>({id:t,name:Sd[t]?.name??t,targets:rd(this.state,e,t)})):[]}}cellOnScreen(e,t){let n=this.scene.cellPoint(e,t).project(this.scene.camera),r=this.canvas.getBoundingClientRect();return{x:r.left+(n.x+1)/2*r.width,y:r.top+(1-n.y)/2*r.height}}updateLabels(){if(!(!this.finish||!this.state)){if(!this.auto&&!this.options.tutorial&&!this.busy&&this.active&&this.state.phase===`player`){let e=Math.ceil(J_-(performance.now()-this.idleSince)/1e3);e<=0?(this.auto=!0,this.refresh()):this.hud.setAutoCountdown(e<=Y_?e:null)}this.hud.labels(this.state.units.map(e=>{let{x:t,y:n}=this.screenOf(e.id),r=this.shownHp.get(e.id)??e.hp;return{id:e.id,name:this.nameOf(e.id),hp:r,maxHp:e.maxHp,enemy:e.side===`enemy`,out:r<=0,x:t,y:n}}))}}},Q_=new URLSearchParams(location.search).has(`test`),$_={东:`east`,南:`south`,西:`west`,北:`north`},ev=[`east`,`south`,`west`,`north`],tv={shape:`uShape`,head:`uHead`,body:`uBody`,tail:`uTail`},nv=[`card`,`travel`,`ending`,`codex`,`panel`,`walk`],rv={boy:`hero-boy`,girl:`hero-girl`},iv=class{canvas;renderer;map;stage;battle;walkScene;ui;hud;runner;audio=new U_;loop=new Ud((e,t)=>this.update(e,t),()=>this.render());mountains=Fd.mountains;codexOrder;tweens=[];mode=`title`;view=`map`;showStage=!1;walkTip=!1;lastSide=null;tapDown=null;walkLoading=null;walkLoadedFor=-1;walkCompanions=``;walkMarks=new Map;index=0;player=vm(`boy`);discovered=new Set;built=new Set;met=new Set;resume=null;panelReturn=null;rng=q_(1);frame=0;paused=!1;saveWarned=!1;reducedMotion=!1;width=0;height=0;constructor(e){this.canvas=e,this.renderer=Wd(e),this.renderer.shadowMap.enabled=!1,this.renderer.toneMapping=0,this.map=new ch(this.mountains),this.stage=new Mh(e),this.battle=new Qm,this.walkScene=new _g,this.walkScene.onArrive=e=>void this.walkArrive(e),this.walkScene.onContact=e=>void this.walkArrive(e),this.walkScene.onExit=e=>void this.walkExit(e),e.addEventListener(`pointerdown`,e=>{this.mode===`walk`&&(this.tapDown={x:e.clientX,y:e.clientY})}),e.addEventListener(`pointerup`,t=>{let n=this.tapDown;this.tapDown=null,!(this.mode!==`walk`||!n||Math.hypot(t.clientX-n.x,t.clientY-n.y)>14)&&this.walkScene.tap(t.clientX,t.clientY,e)});let t=document.querySelector(`#labels`);this.ui=new K_(document.querySelector(`#ui`),t),this.hud=new W_(this.ui,t),this.runner=new Z_(this.battle,this.hud,this.audio,e),this.ui.onClear=()=>this.audio.stopClip(),this.ui.onSound=()=>{this.audio.setMuted(!this.audio.muted),this.ui.setMuted(this.audio.muted)},this.ui.setMuted(this.audio.muted);let n=new Set(this.mountains.flatMap(e=>e.finds));this.codexOrder=[...n,...Object.keys(Fd.codex).filter(e=>!n.has(e))].filter(e=>Fd.codex[e]),mm([`hero-boy`,`hero-girl`,`boyi`,`villager`,`herbalist`]),Q_&&this.installTestHooks(),this.showTitle()}start(){this.loop.start()}dispose(){this.loop.stop(),this.audio.dispose(),this.renderer.dispose(),window.__THREE_GAME_DIAGNOSTICS__=void 0,window.__THREE_GAME_TEST_HOOKS__=void 0}showTitle(){this.mode=`title`,this.showStage=!1,this.ui.setHudVisible(!1);let e=wm();e.status===`ok`&&e.repaired.length&&console.info(`save repaired on load:`,e.repaired),e.status===`ok`?this.ui.title([{label:Z(`continueSave`),primary:!0,onClick:()=>this.resumeGame(e.player)},{label:Z(`newGame`),primary:!1,onClick:()=>void this.confirmNewGame()}]):e.status===`newer`?this.ui.title([{label:Z(`saveReload`),primary:!0,onClick:()=>location.reload()},{label:Z(`saveStartHere`),primary:!1,onClick:()=>void this.newGame()}],Z(`saveNewer`)):this.ui.title([{label:Z(`start`),primary:!0,onClick:()=>void this.newGame()}],e.status===`broken`?Z(`saveBroken`):``)}async confirmNewGame(){await this.choice(Z(`newGame`),Z(`newGameConfirm`),[{label:Z(`newGameYes`),value:`yes`,primary:!1},{label:Z(`newGameNo`),value:`no`,primary:!0}])===`yes`?await this.newGame():this.showTitle()}enterHud(){this.ui.showHud({codex:()=>this.openCodex(),quests:()=>this.openQuests(),bag:()=>this.openBag()}),this.ui.setHudVisible(!0)}async newGame(){Dm(),this.mode=`select`,this.ui.setHudVisible(!1);let[e,t]=await Promise.all([pm(`hero-boy`),pm(`hero-girl`)]),n=await this.ui.heroSelect([{value:`boy`,label:Z(`heroBoy`),figureUrl:e},{value:`girl`,label:Z(`heroGirl`),figureUrl:t}]);this.player=vm(n),this.syncSets(),this.dressTraveller(),this.enterHud(),this.index=0,this.map.setCurrent(0,!0),this.refreshHud(),await this.runSteps(vd,null),this.arrive(0)}resumeGame(e){this.player=e,this.syncSets(),this.dressTraveller(),this.enterHud(),this.arrive(Math.min(e.mountain,this.mountains.length-1))}async dressTraveller(){this.map.setHeroFigure(await fm(rv[this.player.gender]))}syncSets(){let e=[[this.discovered,this.player.discovered],[this.built,this.player.built],[this.met,this.player.met]];for(let[t,n]of e)t.clear(),n.forEach(e=>t.add(e))}persist(){this.player.discovered=[...this.discovered],this.player.built=[...this.built],this.player.met=[...this.met],!Cm(this.player)&&!this.saveWarned&&(this.saveWarned=!0,this.ui.toast(Z(`saveFailed`),4200))}arrive(e){this.index=e,this.player.mountain=e,this.persist(),this.map.setCurrent(e,!0),this.view=`map`,this.mode=`card`,this.showStage=!1,this.stage.setActive(!1),this.refreshHud();let t=this.mountains[e],{body:n,actions:r}=this.ui.sideCard(Z(`arriveKicker`,{n:e+1}),Q(t.name));t.climbable||n.append(this.ui.element(`div`,`note`,Z(`notClimbable`))),n.append(this.ui.originalBlock(Q(t.original),t.plain,e===0?Z(`draftSource`):``,this.listenButtons(`mountain-${t.id}`)));let i=Vd[t.id],a=i?[]:t.finds.filter(e=>Fd.codex[e]);if(a.length){n.append(this.ui.element(`div`,`kicker`,Z(`findsLabel`)));let e=this.ui.element(`div`,`finds`);for(let t of a)e.append(this.ui.element(`span`,`find ruby-text`,Q(Fd.codex[t].name)));n.append(e)}if(i){let t=this.loadWalk(e);r.append(this.ui.button(Z(`enterMountain`),!0,()=>void t.then(()=>this.enterWalk(e))))}else r.append(this.ui.button(Z(`continueJourney`),!0,()=>void this.afterCard(e)));this.resume=()=>this.arrive(e)}async afterCard(e){let t=this.mountains[e].finds.filter(e=>Fd.codex[e]&&!this.discovered.has(e));t.length&&(t.forEach(e=>this.discovered.add(e)),this.ui.stamp(Z(`stampText`)),this.audio.stamp(),this.refreshHud()),this.resume=null;for(let t of yd)t.mountain===e&&!t.hidden&&!this.player.questsDone.includes(t.id)&&await this.runQuest(t);e===this.mountains.length-1?this.ending():this.travel(e)}travel(e){this.mode=`travel`,this.showStage=!1,this.stage.setActive(!1);let t=this.mountains[e+1],n=0,r=ev.map(e=>({label:Cp(e),value:e}));this.ui.reading(Z(`whichWay`),Q(t.approach),r,(t,r)=>{t===`east`?(this.audio.correct(),r.classList.add(`correct`),window.setTimeout(()=>this.chooseDistance(e,n),350)):(n+=1,this.audio.wrong(),this.shake(r),this.ui.hint(Z(`hintDirection`)))},this.listen(`approach-${t.id}`,Z(`listenOriginal`))),this.resume=()=>this.travel(e)}chooseDistance(e,t){let n=this.mountains[e+1],r=Array.from(new Set(this.mountains.map(e=>e.distanceText).filter(e=>e&&e!==n.distanceText))),i=this.shuffle(r).slice(0,2),a=this.shuffle([n.distanceText,...i]).map(e=>({label:e,value:e}));this.ui.reading(Z(`howFar`),Q(n.approach),a,(r,i)=>{r===n.distanceText?(this.audio.correct(),i.classList.add(`correct`),window.setTimeout(()=>void this.walk(e,t),350)):(t+=1,this.audio.wrong(),this.shake(i),this.ui.hint(Z(`hintDistance`,{text:n.distanceText.replace(/./g,`？`)})))},this.listen(`approach-${n.id}`,Z(`listenOriginal`))),this.resume=()=>this.chooseDistance(e,t)}async walk(e,t){this.mode=`walking`,this.ui.clear(),this.ui.toast(Z(`walking`),1e3),this.resume=null;let n=window.setInterval(()=>this.audio.step(),260);await this.map.walkToNext(),window.clearInterval(n),this.gainXp(t?Pd.retry:Pd.first),this.arrive(e+1)}loadWalk(e){if(this.walkLoadedFor===e&&this.walkLoading)return this.walkLoading;let t=Vd[this.mountains[e].id];this.walkLoadedFor=e,this.walkCompanions=this.player.companions.join(),this.walkMarks.clear();for(let e of Object.values(t.marks))e.kind===`npc`?this.walkMarks.set(e.npc,e):e.kind===`exit`?this.walkMarks.set(`exit-${e.dir}`,e):e.kind!==`spawn`&&this.walkMarks.set(e.id,e);return this.walkLoading=this.walkScene.load(t,rv[this.player.gender],this.player.companions),this.walkLoading}enterWalk(e){this.walkScene.toSpawn(),this.lastSide=null,this.resumeWalk(),this.walkTip||(this.walkTip=!0,this.ui.toast(Z(`walkTutorial`),4200,!0))}resumeWalk(){this.mode=`walk`,this.view=`walk`,this.showStage=!1,this.stage.setActive(!1),this.ui.setHudVisible(!0);let e=Vd[this.mountains[this.index].id];this.ui.walkHud({tracker:()=>this.openQuests(),original:()=>this.openOriginal(),search:()=>void this.walkDo(()=>this.searchHere())},!!e.yinyang);let t=this.player.companions.join();t!==this.walkCompanions&&(this.walkCompanions=t,this.walkScene.setCompanions(this.player.companions)),this.refreshWalk(),this.refreshHud(),this.resume=()=>this.resumeWalk()}refreshWalk(){for(let[e,t]of this.walkMarks)t.kind===`creature`&&(t.foe===`boss`&&this.walkScene.setVisible(e,!!this.waitingGoal(e=>e.type===`defeat`&&e.creature===t.creature)),(t.creature===`xingxing`||t.creature===`xuangui`)&&this.walkScene.setVisible(e,!this.player.companions.includes(t.creature)));this.ui.setTracker(Q(this.walkHint())),this.walkScene.setGuide(this.guideTarget())}guideTarget(){let e=[...this.walkMarks.entries()],t=t=>e.filter(([,e])=>t(e)).map(([e])=>e),n=this.waitingGoal(()=>!0);if(n){let e=n.step.goal;if(e.type===`find`)return null;if(e.type===`meet`||e.type===`defeat`)return this.walkScene.nearest(t(t=>t.kind===`creature`&&t.creature===e.creature));let r=this.walkScene.gridInfo,i=r?.def;return this.walkScene.nearest(t(t=>{if(t.kind!==`outcrop`||!r||!i?.ore)return!1;if(`any`in i.ore)return!0;let n=this.walkScene.tileOfEntity(t.id);return!!n&&i.ore[Yh(r,n[1])]===e.ore}))}let r=this.mountainQuests(),i=r.find(e=>this.questState(e)===`ready`)??r.find(e=>this.questState(e)===`available`);if(i)return i.giver;let a=this.wayOn();return a?`exit-${a}`:null}wayOn(){let e=this.mountains[this.index+1];return e?this.approachDir(e.approach):`east`}mountainQuests(){return yd.filter(e=>e.mountain===this.index&&!e.hidden)}questState(e){let t=this.player;if(t.questsDone.includes(e.id))return`done`;if(e.requires?.some(e=>!t.questsDone.includes(e)))return`locked`;let n=t.questStep[e.id];return n===void 0?`available`:e.steps[n]?.kind===`goal`?t.goalMet.includes(e.id)?`ready`:`active`:`ready`}waitingGoal(e){for(let t of this.mountainQuests()){if(this.questState(t)!==`active`)continue;let n=t.steps[this.player.questStep[t.id]];if(e(n.goal))return{quest:t,step:n}}return null}goalReached(e){let t=this.player;for(let n of this.mountainQuests()){if(this.questState(n)!==`active`)continue;let r=n.steps[t.questStep[n.id]];if(e(r.goal)){if(r.goal.type===`defeat`&&r.goal.n>1&&(t.goalCount[n.id]=(t.goalCount[n.id]??0)+1,t.goalCount[n.id]<r.goal.n)){this.persist();continue}return t.goalMet.push(n.id),this.persist(),n}}return null}async afterGoal(e){e.steps[this.player.questStep[e.id]].then===`now`?await this.advanceQuest(e):this.ui.toast(Q(Z(`walkReturn`,{name:_d[e.giver].name})),2200,!0)}walkHint(){let e=this.mountainQuests();for(let t of e)if(this.questState(t)===`active`)return t.steps[this.player.questStep[t.id]].tracker;let t=e.find(e=>this.questState(e)===`ready`);if(t)return Z(`walkReturn`,{name:_d[t.giver].name});let n=e.find(e=>this.questState(e)===`available`);return n?Z(`walkFind`,{name:_d[n.giver].name}):this.index===this.mountains.length-1?Z(`walkAllDoneEnd`):Z(`walkAllDone`)}npcMarker(e){let t=this.mountainQuests().filter(t=>t.giver===e).map(e=>this.questState(e));return t.includes(`ready`)?`？`:t.includes(`available`)?`！`:``}async walkDo(e){if(this.mode===`walk`){this.mode=`story`,this.walkScene.stop();try{await e()}finally{this.view===`walk`&&this.resumeWalk()}}}walkArrive(e){let t=this.walkMarks.get(e);return t?this.walkDo(async()=>{t.kind===`npc`?await this.talkTo(t.npc):t.kind===`thing`?await this.inspect(t.thing):t.kind===`outcrop`?await this.searchHere():t.kind===`creature`&&(t.foe?await this.walkBattle(t):await this.touchCreature(t.creature))}):Promise.resolve()}async talkTo(e){let t=this.mountainQuests().filter(t=>t.giver===e),n=t.find(e=>this.questState(e)===`ready`)??t.find(e=>this.questState(e)===`available`);if(n){await this.advanceQuest(n);return}await this.say([{who:e,text:e===`boyi`?this.walkHint():Z(`walkNothing`)}])}async inspect(e){let t=Id[e],n=this.waitingGoal(e=>e.type===`find`),r=n?.step.goal.type===`find`?n.step.goal.thing:null;this.story();let i=t.codex&&this.discovered.has(t.codex),{body:a,actions:o}=this.ui.sideCard(Z(`lookKicker`),i?Q(Fd.codex[t.codex].name):`？`),s=this.ui.element(`img`,`look-figure`);if(s.src=await pm(t.figure),s.alt=``,a.append(s),r&&a.append(this.ui.element(`div`,`excerpt original ruby-text`,Q((n.step.tracker.split(`：`)[1]??``).split(`——`)[0]))),a.append(this.ui.element(`div`,`question ruby-text`,Q(t.look))),r){let n=this.ui.element(`div`,`gloss ruby-text`);if(a.append(n),!await new Promise(i=>{let a=this.ui.button(Z(`lookPick`),!0,()=>{e===r?(this.audio.correct(),a.classList.add(`correct`),window.setTimeout(()=>i(!0),450)):(this.audio.wrong(),this.shake(a),n.innerHTML=Q(`${Z(`lookWrong`)}${t.plain??``} ${Ld[r]??``}`))});o.append(a,this.ui.button(Z(`lookNotIt`),!1,()=>i(!1)))}))return;this.discover(t.codex);let i=this.goalReached(t=>t.type===`find`&&t.thing===e);i&&await this.afterGoal(i);return}if(t.codex){let e=Fd.codex[t.codex];a.append(this.ui.originalBlock(Q(e.original),e.plain,``,this.listenButtons(`codex-${e.id}`))),this.discover(t.codex)}else t.plain&&a.append(this.ui.element(`div`,`note ruby-text`,Q(t.plain)));await new Promise(e=>o.append(this.ui.button(Z(`lookNoted`),!0,()=>e())))}async touchCreature(e){let t=this.goalReached(t=>t.type===`meet`&&t.creature===e),n=!this.discovered.has(e);t?(bp(e)||await this.lookCard(e),await this.afterGoal(t)):n?bp(e)?await this.meet(e):await this.lookCard(e):this.ui.toast(Q(Fd.codex[e]?.name??e),1200)}async lookCard(e){let t=Fd.codex[e];if(!t)return;this.story();let{body:n,actions:r}=this.ui.sideCard(Z(`lookKicker`),Q(t.name));if(im(Bd(e))){let t=this.ui.element(`img`,`look-figure`);t.src=await pm(Bd(e)),t.alt=``,n.append(t)}n.append(this.ui.originalBlock(Q(t.original),t.plain,``,this.listenButtons(`codex-${e}`,e))),n.append(this.ui.element(`div`,`note`,`${Z(`ancientRecord`)}：${t.note}`)),this.audio.playClip(`cry-${e}`),this.met.add(e),this.discover(e),await new Promise(e=>r.append(this.ui.button(Z(`lookNoted`),!0,()=>e())))}discover(e){!e||!Fd.codex[e]||this.discovered.has(e)||(this.discovered.add(e),this.ui.stamp(Z(`stampText`)),this.audio.stamp(),this.refreshHud(),this.persist())}async searchHere(){let e=this.walkScene.nearOutcrop(),t=this.walkScene.gridInfo,n=e?this.walkScene.tileOfEntity(e):null;if(!e||!t||!n||!t.def.ore)return;let r=t.def,i=t.def.ore,a=Yh(t,n[1]);this.story();let{body:o,actions:s}=this.ui.sideCard(Z(`searchKicker`),``),c;if(c=`any`in i?i.any:a===`ridge`?null:i[a],r.yinyang&&o.append(this.ui.element(`div`,`question`,a===`ridge`?Z(`searchRidge`):Z(`searchWhere`,{side:Z(a===`yin`?`sideYin`:`sideYang`)}))),c){let e=Rd[c],t=Ed[e.item].name;if(this.audio.correct(),o.append(this.ui.element(`div`,`note big ruby-text`,Q(Z(`searchFound`,{name:t})))),e.codex){let t=Fd.codex[e.codex];o.append(this.ui.originalBlock(Q(t.original),t.plain,``,this.listenButtons(`codex-${t.id}`))),this.discover(e.codex)}let n=this.waitingGoal(e=>e.type===`search`);n&&n.step.goal.type===`search`&&n.step.goal.ore!==c&&o.append(this.ui.element(`div`,`gloss`,Z(`searchNotThis`)))}if(await new Promise(e=>s.append(this.ui.button(Z(`ok`),!0,()=>e()))),!c)return;let l=this.goalReached(e=>e.type===`search`&&e.ore===c);l&&await this.afterGoal(l)}async walkBattle(e){let t=e.foe;t===`boss`&&this.player.trinkets.length&&await this.equip(xd);let{result:n}=await this.fight(t,e.id);if(this.ui.setHudVisible(!0),this.story(),n===`won`){t===`training`&&(this.gainXp(this.trainingXp()),this.player.training+=1,this.persist()),this.walkScene.retire(e.id,t===`training`?25:null);let n=this.goalReached(t=>t.type===`defeat`&&t.creature===e.creature);n?await this.afterGoal(n):t===`training`&&this.ui.toast(Z(`trainingWon`),1800)}else await this.choice(Z(`battleLost`),`${Z(`battleLostWalk`)}${bd[t]}`,[{label:Z(`ok`),value:`ok`,primary:!0}]),this.walkScene.toSpawn();this.walkScene.safe(3)}async walkExit(e){if(this.mode!==`walk`)return;let t=this.index,n=this.mountains[t+1],r=this.wayOn(),i=this.mountainQuests().filter(e=>this.questState(e)!==`done`);if(e!==r||i.length){await this.walkDo(async()=>{let t=n?Z(`walkWrongWay`,{approach:n.approach.split(`，`)[0],dir:Hd[e].slice(1)}):Z(`walkWrongWayEnd`),a=e===r?Z(`walkNotYet`,{list:i.map(e=>`“${e.title}”`).join(`、`)}):t;await this.say([{who:`boyi`,text:a}]),this.walkScene.stepBack()});return}if(!n){this.mode=`story`,this.ending();return}this.mode=`story`,this.view=`map`,this.ui.hideWalkLabels(),this.chooseDistance(t,0)}approachDir(e){let t=e.indexOf(`又`);return t>=0?$_[e[t+1]]??null:null}openOriginal(){if(!this.openPanel())return;this.mode=`panel`;let e=this.mountains[this.index],{body:t,actions:n}=this.ui.sideCard(Z(`arriveKicker`,{n:this.index+1}),Q(e.name));e.climbable||t.append(this.ui.element(`div`,`note`,Z(`notClimbable`))),t.append(this.ui.originalBlock(Q(e.original),e.plain,``,this.listenButtons(`mountain-${e.id}`))),n.append(this.ui.button(Z(`close`),!0,()=>this.closePanel()))}updateWalkLabels(){let e=this.walkScene.anchors().map(e=>{let t=this.walkMarks.get(e.id),n=``,r=``;return t?.kind===`npc`?(n=Q(_d[t.npc].name),r=this.mode===`walk`?this.npcMarker(t.npc):``):t?.kind===`creature`?n=this.discovered.has(t.creature)||!Fd.codex[t.creature]?Q(Fd.codex[t.creature]?.name??Cd[t.creature]??t.creature):Z(`creatureUnknown`):t?.kind===`exit`&&(n=Hd[t.dir]),{id:e.id,html:n,marker:r,x:e.x,y:e.y,visible:e.onScreen&&!!n}});this.ui.walkLabels(e)}checkSide(){let e=this.walkScene.gridInfo,t=this.walkScene.heroTile();if(!e?.def.yinyang||!t)return;let n=Yh(e,t[1]);n===`ridge`||n===this.lastSide||(this.lastSide!==null&&this.ui.toast(Z(n===`yin`?`walkSideYin`:`walkSideYang`),2400,!0),this.lastSide=n)}async runQuest(e){await this.advanceQuest(e)}async advanceQuest(e){let t=this.player;t.questStep[e.id]===void 0&&(t.questStep[e.id]=0,t.questActive=e.id,this.ui.toast(Z(`questNew`,{title:Q(e.title)}),1800),await this.pause(.6));for(let n=t.questStep[e.id];n<e.steps.length;n++){t.questStep[e.id]=n;let r=e.steps[n];if(r.kind===`goal`){if(!t.goalMet.includes(e.id))return this.persist(),this.ui.toast(Q(r.tracker),2200,this.view===`walk`),!1;t.goalMet=t.goalMet.filter(t=>t!==e.id),delete t.goalCount[e.id];continue}this.persist(),await this.runStep(r,e)}return delete t.questStep[e.id],t.questActive=null,t.questsDone.push(e.id),this.gainXp(e.xp),this.ui.toast(Z(`questDone`,{title:Q(e.title)}),1600),this.persist(),await this.pause(.4),!0}async runSteps(e,t){for(let n of e)await this.runStep(n,t)}async runStep(e,t){switch(e.kind){case`say`:await this.say(e.lines);break;case`note`:await this.note(e.text);break;case`quiz`:{let n=await this.quiz(e,t);this.gainXp(n?Nd.first:Nd.retry);break}case`build`:this.built.has(e.creature)||(await this.build(e.creature),this.gainXp(Nd.first*2));break;case`meet`:await this.meet(e.creature);break;case`battle`:await this.battleStep(e);break;case`equip`:await this.equip(e.prompt);break;case`ritual`:await this.ritual();break;case`gain`:await this.gain(e);break;case`goal`:break}}story(){this.mode=`story`,this.showStage=!1,this.stage.setActive(!1)}async say(e){this.story();let t=await Promise.all(e.map(async e=>{let t=e.who===`hero`,n=_d[e.who];return{name:t?Z(`heroLabel`):Q(n?.name??e.who),text:Q(e.text),figureUrl:await pm(t?rv[this.player.gender]:n?.figure??`villager`)}}));await this.ui.dialogue(t)}note(e){this.story();let{body:t,actions:n}=this.ui.sideCard(Z(`noteKicker`),``);return t.append(this.ui.element(`div`,`note big`,e)),new Promise(e=>n.append(this.ui.button(Z(`gotIt`),!0,()=>e())))}quiz(e,t){this.story();let{body:n,actions:r}=this.ui.sideCard(t?Q(t.title):Z(`quizKicker`),Z(`quizKicker`));n.append(this.ui.element(`div`,`original ruby-text excerpt`,Q(e.excerpt)));let i=this.ui.element(`div`,`question ruby-text`,Q(e.question)),a=this.ui.element(`div`,`options`),o=this.ui.element(`div`,`gloss`);n.append(i,a,o);let s=!0;return new Promise(t=>{for(let n of this.shuffle(e.options)){let i=this.ui.button(Q(n),!1,()=>{a.classList.contains(`done`)||(n===e.options[0]?(this.audio.correct(),i.classList.add(`correct`),a.classList.add(`done`),o.textContent=`${Z(`quizRight`)}${e.gloss}`,r.append(this.ui.button(Z(`next`),!0,()=>t(s))),this.ui.reveal(o)):(s=!1,this.audio.wrong(),this.shake(i),o.textContent=Z(`quizWrong`)))});i.classList.add(`ruby-text`),a.append(i)}})}async gain(e){this.story();let t=[],n=this.player;if(e.trinket&&!n.trinkets.includes(e.trinket)){n.trinkets.push(e.trinket),n.equipped.length<2&&n.equipped.push(e.trinket);let r=Td[e.trinket];t.push(Z(`gainTrinket`,{name:Q(r.name),guards:r.guards}))}for(let[r,i]of Object.entries(e.items??{}))n.items[r]=(n.items[r]??0)+i,t.push(Z(`gainItem`,{name:Q(Ed[r].name),n:i}));if(e.companion&&!n.companions.includes(e.companion)&&(n.companions.push(e.companion),t.push(Z(`gainCompanion`,{name:Q(Od[e.companion].name)}))),e.skill&&!n.skills.includes(e.skill)&&(n.skills.push(e.skill),t.push(Z(`gainSkill`,{name:Dd[e.skill].name}))),e.scroll&&!n.scrolls.includes(e.scroll)&&(n.scrolls.push(e.scroll),t.push(Z(`gainScroll`,{name:kd[e.scroll].name}))),!t.length)return;this.audio.stamp();let{body:r,actions:i}=this.ui.sideCard(Z(`gainKicker`),``),a=this.ui.element(`ul`,`gain-list`);for(let e of t)a.append(this.ui.element(`li`,`ruby-text`,e));r.append(a),e.skill&&r.append(this.ui.element(`div`,`note ruby-text`,Q(`${Dd[e.skill].source}：${Dd[e.skill].hint}`))),e.companion&&r.append(this.ui.element(`div`,`note ruby-text`,Q(Od[e.companion].hint))),e.trinket&&r.append(this.ui.element(`div`,`note ruby-text`,Q(Td[e.trinket].source))),this.persist(),await new Promise(e=>i.append(this.ui.button(Z(`ok`),!0,()=>e())))}trinketToggles(e,t,n=!1){let r=this.ui.element(`div`,`toggle-list`),i=()=>{r.replaceChildren();for(let a of this.player.trinkets){let o=Td[a],s=e.includes(a),c=this.ui.element(`button`,`toggle${s?` on`:``}`);c.type=`button`,c.append(this.ui.element(`span`,`toggle-name ruby-text`,`${Q(o.name)}${s?` · ${Z(`equipped`)}`:``}`),this.ui.element(`span`,`toggle-hint ruby-text`,`${o.guards} · ${Q(n?o.source:`“${o.quote}”`)}`)),c.addEventListener(`click`,()=>{s?e.splice(e.indexOf(a),1):(e.length>=2&&e.shift(),e.push(a)),i(),t()}),r.append(c)}};return i(),r}equip(e){this.story();let t=this.player.equipped.slice(),{body:n,actions:r}=this.ui.sideCard(Z(`equipKicker`),Z(`equipTitle`));n.append(this.ui.element(`div`,`question`,e));let i=this.ui.element(`div`,`gloss`),a=()=>i.textContent=Z(`equipCount`,{n:t.length,max:2});return n.append(this.trinketToggles(t,a),i),a(),new Promise(e=>r.append(this.ui.button(Z(`equipGo`),!0,()=>{this.player.equipped=t,this.persist(),e()})))}ritual(){this.story();let e=new Set,{body:t,actions:n}=this.ui.sideCard(Z(`ritualKicker`),Z(`ritualTitle`));t.append(this.ui.originalBlock(Q(Ad.excerpt),Ad.plain),this.ui.element(`div`,`note`,Ad.note));let r=this.ui.element(`aside`,`altar panel`);r.append(this.ui.element(`div`,`kicker`,Z(`ritualHint`)));let i=this.ui.element(`div`,`offerings`),a=this.ui.element(`div`,`gloss`);for(let t of Ad.offerings){let n=this.ui.button(Q(t.name),!1,()=>{e.has(t.id)?e.delete(t.id):e.add(t.id),n.classList.toggle(`on`,e.has(t.id))});n.classList.add(`toggle`,`ruby-text`),i.append(n)}return r.append(i,a),this.ui.mount(r),new Promise(t=>{let r=this.ui.button(Z(`ritualCheck`),!0,()=>{let n=Ad.offerings.filter(t=>t.listed!==e.has(t.id)).length;if(n){this.audio.wrong(),this.shake(r),a.textContent=Z(`ritualWrong`,{n});return}this.audio.correct(),this.ui.stamp(Z(`ritualRight`)),r.disabled=!0,window.setTimeout(t,900)});n.append(r)})}heroSkills(){return[`zhang`,`shi`,...this.player.skills,...(this.player.items.zhuyu??0)>0?[`zhuyu`]:[]]}trainingXp(){return Math.round(40*Md[Math.min(this.player.training,Md.length-1)])}async fight(e,t=null){let n=ym(this.player.xp);this.mode=`battle`,this.showStage=!1,this.ui.setHudVisible(!1),this.ui.hideWalkLabels(),this.ui.clearToasts(),await mm([rv[this.player.gender],...this.player.companions,e===`boss`?`jiuweihu`:`guaishe`]);let r=this.view===`walk`?this.walkScene.gridInfo:null,i=t?this.walkScene.heroTile():null,a=r&&i?$h(r,i,6,4):null;if(a){let{host:e,origin:n,lift:r}=this.walkScene.beginFight(a,6,4,t);this.battle.mountOn(e,n,r,this.walkScene.camera)}else this.battle.setScenery(this.view===`walk`?e===`training`?`twisted`:`forest`:null);let{result:o,zhuyuUsed:s}=await this.runner.run({battle:e,party:[qu(n,this.heroSkills()),...this.player.companions.map(e=>Ju(e,n))],heroFigure:rv[this.player.gender],equipped:this.player.equipped,protect:xm(this.player),zhuyu:this.player.items.zhuyu??0,seed:Math.floor(this.rng()*1e9),tutorial:e===`training`&&this.player.training===0});return s&&(this.player.items.zhuyu=Math.max(0,(this.player.items.zhuyu??0)-s)),this.battle.mounted&&(await this.battle.unmount(this.walkScene.camera),this.walkScene.endFight()),{result:o}}async battleStep(e){for(;;){let{result:t}=await this.fight(e.battle);if(this.ui.setHudVisible(!0),this.story(),t===`won`){if(e.battle!==`training`||(this.gainXp(this.trainingXp()),this.player.training+=1,this.persist(),await this.choice(Z(`battleWon`),Z(`trainingWon`),[{label:Z(`continueJourney`),value:`go`,primary:!0},...e.repeatable?[{label:Z(`trainingAgain`,{n:this.trainingXp()}),value:`again`,primary:!1}]:[]])!==`again`))return;continue}let n=[{label:Z(`battleRetry`),value:`retry`,primary:!0}];e.battle===`boss`&&n.push({label:Z(`battleReequip`),value:`equip`,primary:!1}),e.battle===`training`&&n.push({label:Z(`trainingSkip`),value:`skip`,primary:!1});let r=await this.choice(Z(`battleLost`),e.retryHint,n);if(r===`skip`)return;r===`equip`&&await this.equip(Z(`equipTitle`))}}choice(e,t,n){let{body:r,actions:i}=this.ui.sideCard(e,``);return r.append(this.ui.element(`div`,`note big ruby-text`,Q(t))),new Promise(e=>{for(let t of n)i.append(this.ui.button(t.label,t.primary,()=>e(t.value)))})}async build(e){let t=gd[e],n=await xp(e),r=n.reveal;if(r)for(let e of[`uShape`,`uHead`,`uBody`,`uTail`])r[e].value=0;this.mode=`build`,this.showStage=!0,this.stage.show(n),this.stage.setActive(!0),this.resume=null;let i=Fd.codex[e],{card:a,body:o,actions:s}=this.ui.sideCard(`${Z(`buildKicker`)} · ${Q(t.source)}`,Q(i?.name??t.name));this.fitStage(0,a),o.append(this.ui.element(`div`,`question`,Z(`buildIntro`)));let c=this.ui.element(`div`,`clauses`),l=t.clauses.map(e=>{let t=this.ui.element(`span`,`clause`,e.text);return c.append(t),t}),u=this.ui.element(`div`,`question`),d=this.ui.element(`div`,`options`),f=this.ui.element(`div`,`gloss`);o.append(c,u,d,f);for(let[e,n]of t.clauses.entries())l[e].classList.add(`active`),u.textContent=Z(`buildQuestion`,{clause:n.text}),await new Promise(e=>{d.replaceChildren();for(let t of this.shuffle(n.options)){let i=this.ui.button(t,!1,()=>{t===n.options[0]?(this.audio.correct(),i.classList.add(`correct`),f.textContent=n.gloss,r&&this.tweens.push({target:r[tv[n.part]],to:1,speed:1.6}),window.setTimeout(e,900)):(this.audio.wrong(),this.shake(i),u.textContent=Z(`buildWrong`,{clause:n.text}))});d.append(i)}}),l[e].classList.remove(`active`),l[e].classList.add(`done`);d.replaceChildren(),u.textContent=``,this.built.add(e),this.met.add(e),this.discover(e),this.ui.toast(Z(`buildDone`,{name:t.name})),this.audio.stamp(),this.audio.playClip(`cry-${e}`);let p=i?this.ui.originalBlock(Q(i.original),i.plain,``,this.listenButtons(`codex-${e}`,e)):null;p&&o.append(p),await new Promise(e=>{s.append(this.ui.button(Z(`continueJourney`),!0,()=>e())),p&&this.ui.reveal(p)})}async meet(e){let t=Fd.codex[e];if(!bp(e))return;let n=await xp(e);this.mode=`meet`,this.showStage=!0,this.stage.show(n),this.stage.setActive(!0),this.resume=null;let{card:r,body:i,actions:a}=this.ui.sideCard(Z(`meetKicker`),Q(t.name));this.fitStage(0,r),i.append(this.ui.originalBlock(Q(t.original),t.plain,``,this.listenButtons(`codex-${e}`,e))),i.append(this.ui.element(`div`,`note`,`${Z(`ancientRecord`)}：${t.note}`)),this.audio.playClip(`cry-${e}`),this.met.add(e),this.discovered.add(e),this.refreshHud(),await new Promise(e=>a.append(this.ui.button(Z(`meetButton`),!0,()=>e())))}openPanel(){return nv.includes(this.mode)?(this.mode!==`codex`&&this.mode!==`panel`&&(this.panelReturn=this.resume),!0):!1}closePanel(){this.stage.setActive(!1),this.showStage=!1;let e=this.panelReturn;this.panelReturn=null,e&&e()}openCodex(e){if(!this.openPanel())return;this.mode=`codex`;let t=e??this.codexOrder.find(e=>this.discovered.has(e)),n=t?Fd.codex[t]:void 0,{card:r,body:i,actions:a}=this.ui.sideCard(Z(`codexCount`,{n:this.discovered.size,total:this.codexOrder.length}),n?Q(n.name):Z(`codexTitle`)),o=this.ui.element(`aside`,`codex-list panel`);o.append(this.ui.element(`div`,`kicker`,Z(`codexTitle`)));let s=this.ui.element(`div`,`grid`);for(let e of[`beast`,`bird`,`fish`,`plant`,`mineral`,`spirit`]){let n=this.codexOrder.filter(t=>Fd.codex[t].kind===e);if(!n.length)continue;let r=n.filter(e=>this.discovered.has(e)).length;s.append(this.ui.element(`div`,`codex-group`,`${Z(`codexKind_${e}`)} · ${r}/${n.length}`));for(let e of n){let n=this.discovered.has(e),r=this.ui.element(`button`,`codex-item ruby-text${n?``:` locked`}${e===t?` selected`:``}`,n?Q(Fd.codex[e].name):Z(`codexLocked`));r.type=`button`,n&&r.addEventListener(`click`,()=>this.openCodex(e)),s.append(r)}}o.append(s),this.ui.mount(o),n?(this.renderCodexEntry(n,i),n.model&&bp(n.model)?(this.showStage=!0,xp(n.model).then(e=>{this.mode===`codex`&&(this.stage.show(e),this.stage.setActive(!0),this.fitStage(o.getBoundingClientRect().right,r))})):(this.showStage=!1,i.prepend(this.ui.element(`div`,`codex-portrait ruby-text`,Q(n.name).slice(0,400))))):(this.showStage=!1,i.append(this.ui.element(`div`,`question`,Z(`codexEmpty`)))),a.append(this.ui.button(Z(`close`),!0,()=>this.closePanel()))}renderCodexEntry(e,t){t.append(this.ui.originalBlock(Q(e.original),e.plain,``,this.listenButtons(`codex-${e.id}`,e.id))),t.append(this.ui.element(`div`,`note`,`${Z(`ancientRecord`)}：${e.note}`))}openQuests(){if(!this.openPanel())return;this.mode=`panel`,this.showStage=!1;let{body:e,actions:t}=this.ui.sideCard(Z(`questLogTitle`),Z(`questLogTitle`));e.append(this.ui.element(`div`,`note`,Z(`questMain`,{n:this.player.scrolls.length})));let n=this.ui.element(`div`,`quest-list`);for(let e of yd){let t=this.player.questStep[e.id];if(t===void 0||this.player.questsDone.includes(e.id))continue;let r=e.steps[t],i=r?.kind===`goal`&&!this.player.goalMet.includes(e.id)?r.tracker:Z(`walkReturn`,{name:_d[e.giver].name}),a=this.ui.element(`div`,`quest-row active`);a.append(this.ui.element(`span`,`quest-title ruby-text`,Q(e.title)),this.ui.element(`span`,`quest-meta ruby-text`,`${Q(this.mountains[e.mountain].name)} · ${Q(i)}`)),n.append(a)}let r=yd.filter(e=>this.player.questsDone.includes(e.id));!r.length&&!n.childElementCount&&e.append(this.ui.element(`div`,`question`,Z(`questNoneYet`)));for(let e of r){let t=this.ui.element(`div`,`quest-row`),r=e.about.map(e=>Fd.codex[e]?.name).filter(e=>!!e).map(Q).join(`、`);t.append(this.ui.element(`span`,`quest-title ruby-text`,Q(e.title)),this.ui.element(`span`,`quest-meta ruby-text`,`${Q(this.mountains[e.mountain].name)}${r?` · ${r}`:``} · ${Z(`questDoneMark`)}`)),n.append(t)}e.append(n),t.append(this.ui.button(Z(`close`),!0,()=>this.closePanel()))}openBag(){if(!this.openPanel())return;this.mode=`panel`,this.showStage=!1;let e=this.player,{body:t,actions:n}=this.ui.sideCard(Z(`bagTitle`),Z(`bagTitle`)),r=bm(e.xp);t.append(this.ui.element(`div`,`question`,r.need?Z(`bagLevel`,{level:r.level,have:r.have,need:r.need}):Z(`bagLevelMax`,{level:r.level})));let i=(e,n)=>{t.append(this.ui.element(`div`,`kicker`,e)),n.length||t.append(this.ui.element(`div`,`question`,Z(`bagEmpty`)));for(let e of n)t.append(e)},a=e=>this.ui.element(`div`,`bag-row ruby-text`,e);i(Z(`bagTrinkets`,{max:2}),e.trinkets.length?[this.trinketToggles(e.equipped,()=>this.persist(),!0)]:[]),i(Z(`bagItems`),Object.entries(e.items).filter(([,e])=>e>0).map(([e,t])=>a(`${Q(Ed[e].name)} × ${t}：${Q(Ed[e].hint)}`))),i(Z(`bagCompanions`),e.companions.map(e=>a(`${Q(Od[e].name)}：${Q(Od[e].hint)}`))),i(Z(`bagSkills`),[a(Z(`bagBasicSkills`)),...e.skills.map(e=>a(`${Dd[e].name}：${Q(Dd[e].hint)}`))]),i(Z(`bagScrolls`),e.scrolls.map(e=>a(kd[e].name))),n.append(this.ui.button(Z(`close`),!0,()=>this.closePanel()))}ending(){this.mode=`ending`,this.showStage=!1,this.view=`map`,this.ui.hideWalkLabels();for(let e of this.codexOrder)this.discovered.add(e);this.persist(),this.refreshHud();let e=this.mountains.reduce((e,t)=>e+t.distanceLi,0),{body:t,actions:n}=this.ui.sideCard(Z(`endingKicker`),Z(`endingTitle`));t.append(this.ui.element(`div`,`question`,Z(`endingStats`,{li:e,n:this.discovered.size}))),t.append(this.ui.originalBlock(Q(Fd.summary.original),Fd.summary.plain,``,this.listenButtons(`summary`)));let r=yd.find(e=>e.hidden&&!this.player.questsDone.includes(e.id));r?n.append(this.ui.button(Z(`tenthChallenge`),!1,()=>{this.resume=null,this.runQuest(r).then(()=>this.ending())})):t.append(this.ui.element(`div`,`note`,Fd.summary.note)),n.append(this.ui.button(Z(`restart`),!0,()=>this.restart())),this.resume=()=>this.ending()}restart(){this.discovered.clear(),this.built.clear(),this.met.clear(),this.newGame()}update(e,t){if(this.frame+=1,this.handleResize(),!this.paused){for(let t=this.tweens.length-1;t>=0;t--){let n=this.tweens[t];n.target.value=this.reducedMotion?n.to:Math.min(n.to,n.target.value+e*n.speed),n.target.value>=n.to&&this.tweens.splice(t,1)}this.map.update(e,t),this.stage.update(e,t),this.battle.update(e,t),this.view===`walk`&&this.walkScene.update(e,t,this.mode===`walk`)}this.mode===`walk`&&(this.ui.setSearchVisible(!!this.walkScene.nearOutcrop()),this.checkSide()),this.updateLabels(),this.mode===`battle`&&this.runner.updateLabels(),Q_&&this.publishDiagnostics()}render(){this.mode===`battle`?this.renderer.render(this.battle.mounted?this.walkScene.scene:this.battle.scene,this.battle.camera):this.showStage?this.renderer.render(this.stage.scene,this.stage.camera):this.view===`walk`?this.renderer.render(this.walkScene.scene,this.walkScene.camera):this.renderer.render(this.map.scene,this.map.camera)}handleResize(){Gd(this.renderer,this.map.camera,2);let e=this.canvas.clientWidth,t=this.canvas.clientHeight;(e!==this.width||t!==this.height)&&(this.width=e,this.height=t,this.map.resize(e,t),this.stage.resize(e,t),this.battle.resize(e,t),this.walkScene.resize(e,t))}updateLabels(){if(this.showStage||this.mode===`title`||this.mode===`select`||this.mode===`battle`){this.ui.hideLabels(),this.ui.hideWalkLabels();return}if(this.view===`walk`){this.ui.hideLabels(),this.updateWalkLabels();return}this.ui.hideWalkLabels();let e=this.mountains.map((e,t)=>{let n=this.map.labelAnchor(t).project(this.map.camera),r=t<=this.index+1&&n.z<1&&n.x>-1.1&&n.x<1.1;return{index:t,html:t<=this.index?Q(e.name):`？`,x:(n.x+1)/2*this.width,y:(1-n.y)/2*this.height,current:t===this.index,visible:r}});this.ui.labels(e)}gainXp(e){if(e<=0)return;let t=ym(this.player.xp);this.player.xp+=e;let n=ym(this.player.xp);this.ui.toast(Z(`xpGain`,{n:e}),1100),n>t&&(this.ui.stamp(Z(`levelUp`,{n})),this.audio.stamp()),this.refreshHud()}refreshHud(){let e=bm(this.player.xp);this.ui.updateHud({progress:Z(`progress`,{n:this.index+1,total:this.mountains.length}),codexCount:this.discovered.size,level:e.level,xpFraction:e.need?e.have/e.need:1})}pause(e){return new Promise(t=>window.setTimeout(t,this.reducedMotion?0:e*1e3))}listen(e,t){return this.audio.hasClip(e)?[this.ui.listenButton(t,()=>this.audio.playClip(e),()=>this.audio.stopClip())]:[]}listenButtons(e,t){return[...this.listen(`${e}-original`,Z(`listenOriginal`)),...this.listen(`${e}-plain`,Z(`listenPlain`)),...t?this.listen(`cry-${t}`,Z(`listenCry`)):[]]}fitStage(e,t){let n=t.getBoundingClientRect().left;this.stage.setFreeRange(e,n>e?n:this.width)}shake(e){e.classList.remove(`wrong`),e.offsetWidth,e.classList.add(`wrong`)}shuffle(e){let t=e.slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(this.rng()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}testPlayer(e){let t=vm(`girl`);t.mountain=e;for(let n of yd)if(!(n.mountain>=e||n.hidden)){t.questsDone.push(n.id),t.xp+=n.xp+25;for(let e of n.steps)if(e.kind===`gain`){e.trinket&&t.trinkets.push(e.trinket),e.companion&&t.companions.push(e.companion),e.skill&&t.skills.push(e.skill);for(let[n,r]of Object.entries(e.items??{}))t.items[n]=(t.items[n]??0)+r}}return t.equipped=t.trinkets.slice(0,2),t}installTestHooks(){window.__THREE_GAME_TEST_HOOKS__={seed:e=>{this.rng=q_(e)},setState:async e=>{this.discovered.clear(),this.built.clear(),this.met.clear();let t=(e,t)=>{this.view=`map`,this.walkLoadedFor=-1,this.player=this.testPlayer(e),t?.(this.player),this.dressTraveller(),this.enterHud(),this.index=e,this.map.setCurrent(e,!0),this.mountains.slice(0,e+1).forEach(e=>e.finds.forEach(e=>this.discovered.add(e))),this.refreshHud()};if(e===`title`)this.showTitle();else if(e===`select`)this.newGame(),await pm(`hero-girl`);else if(e===`dialogue`)t(0),this.runSteps(vd,null);else if(e===`quiz`)t(0),this.runSteps(yd[0].steps.slice(1,2),yd[0]);else if(e===`travel`)t(0),this.travel(0);else if(e===`build-lushu`)t(3),this.build(`lushu`),await xp(`lushu`);else if(e===`codex`)t(3),this.resume=()=>this.travel(3),this.mode=`travel`,this.openCodex(`lushu`),await xp(`lushu`);else if(e===`bag`)t(7,e=>e.trinkets.push(`guanyu`,`chirulin`)),this.resume=()=>this.travel(7),this.mode=`travel`,this.openBag();else if(e===`equip`)t(7,e=>e.trinkets.push(`guanyu`,`chirulin`)),this.equip(xd);else if(e===`battle-training`)t(2,e=>e.companions=[`xingxing`]),this.battleStep({kind:`battle`,battle:`training`,retryHint:``,repeatable:!0}),await this.pause(.5);else if(e===`battle-boss`)t(7,e=>{e.trinkets.push(`guanyu`,`chirulin`),e.equipped=[`guanyu`,`luyu`]}),this.battleStep({kind:`battle`,battle:`boss`,retryHint:bd.boss}),await this.pause(.5);else if(e===`ritual`)t(8),this.ritual();else if(e.startsWith(`walk-`)){let n=this.mountains.findIndex(t=>t.id===e.slice(5));t(n),await this.loadWalk(n),this.enterWalk(n)}else if(e===`ending`)t(this.mountains.length-1),this.ending();else throw Error(`Unknown test state: ${e}`);return this.render(),{state:e}},setPausedForScreenshot:e=>{this.paused=e},setReducedMotion:e=>{this.reducedMotion=e,this.ui.reducedMotion=e,this.map.reducedMotion=e,this.stage.reducedMotion=e,this.battle.reducedMotion=e},hideDebugUi:()=>{},battleCell:(e,t)=>this.runner.cellOnScreen(e,t),walkTap:e=>this.walkScene.tapPoint(e)}}publishDiagnostics(){let e=this.renderer.info;window.__THREE_GAME_DIAGNOSTICS__={frame:this.frame,mode:this.mode,mountainIndex:this.index,codexCount:this.discovered.size,codexTotal:this.codexOrder.length,level:ym(this.player.xp),xp:this.player.xp,questsDone:this.player.questsDone.length,battle:this.mode===`battle`?this.runner.snapshot():null,battleInPlace:this.battle.mounted,battleFlying:this.battle.flying,walk:this.view===`walk`?{mountain:this.mountains[this.index].id,...this.walkScene.snapshot(),hint:this.walkHint(),goal:this.waitingGoal(()=>!0)?.step.goal??null,nearOutcrop:this.walkScene.nearOutcrop(),markers:Object.fromEntries([...this.walkMarks.values()].filter(e=>e.kind===`npc`).map(e=>[e.npc,this.npcMarker(e.npc)])),quests:Object.fromEntries(this.mountainQuests().map(e=>[e.id,this.questState(e)]))}:null,renderer:{calls:e.render.calls,triangles:e.render.triangles,geometries:e.memory.geometries,textures:e.memory.textures},canvas:{clientWidth:this.canvas.clientWidth,clientHeight:this.canvas.clientHeight,width:this.canvas.width,height:this.canvas.height,dpr:Math.min(window.devicePixelRatio||1,2)}}}},av=document.querySelector(`#game-canvas`);if(!av)throw Error(`Missing #game-canvas element.`);var ov=document.querySelector(`#rotate-hint`);ov&&(ov.innerHTML=`<div class="phone"></div><div>${Z(`rotatePhone`)}</div>`);var sv=document.querySelector(`#paper-overlay`);sv&&(sv.style.backgroundImage=`url(${ep(512,23).toDataURL(`image/png`)})`),new iv(av).start();