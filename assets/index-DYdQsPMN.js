var Ak=Object.defineProperty;var Ik=(Hg,mg,GC)=>mg in Hg?Ak(Hg,mg,{enumerable:!0,configurable:!0,writable:!0,value:GC}):Hg[mg]=GC;var tA=(Hg,mg,GC)=>Ik(Hg,typeof mg!="symbol"?mg+"":mg,GC);(async()=>{(function(){const B=document.createElement("link").relList;if(B&&B.supports&&B.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))I(g);new MutationObserver(g=>{for(const C of g)if(C.type==="childList")for(const Q of C.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&I(Q)}).observe(document,{childList:!0,subtree:!0});function A(g){const C={};return g.integrity&&(C.integrity=g.integrity),g.referrerPolicy&&(C.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?C.credentials="include":g.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function I(g){if(g.ep)return;g.ep=!0;const C=A(g);fetch(g.href,C)}})();const Hg="167",mg=0,GC=1,QD=2,Me=1,ED=2,fg=3,Tg=0,gg=1,hg=2,QC=0,_C=1,xE=2,Ne=3,Ke=4,iD=5,kC=100,oD=101,eD=102,tD=103,aD=104,sD=200,DD=201,hD=202,rD=203,bE=204,OE=205,nD=206,SD=207,wD=208,cD=209,lD=210,GD=211,kD=212,yD=213,UD=214,MD=0,ND=1,KD=2,NQ=3,JD=4,FD=5,RD=6,pD=7,vE=0,dD=1,qD=2,EC=0,YD=1,LD=2,uD=3,HD=4,mD=5,fD=6,TD=7,Je="attached",xD="detached",Fe=300,ZC=301,WC=302,KQ=303,_E=304,JQ=306,yC=1e3,Mg=1001,FQ=1002,TI=1003,Re=1004,uB=1005,uI=1006,RQ=1007,Ng=1008,rg=1009,pe=1010,de=1011,HB=1012,ZE=1013,UC=1014,Cg=1015,xg=1016,WE=1017,PE=1018,PC=1020,qe=35902,Ye=1021,Le=1022,eg=1023,ue=1024,He=1025,jC=1026,VC=1027,jE=1028,VE=1029,me=1030,XE=1031,zE=1033,pQ=33776,dQ=33777,qQ=33778,YQ=33779,$E=35840,Ai=35841,Ii=35842,gi=35843,Ci=36196,Bi=37492,Qi=37496,Ei=37808,ii=37809,oi=37810,ei=37811,ti=37812,ai=37813,si=37814,Di=37815,hi=37816,ri=37817,ni=37818,Si=37819,wi=37820,ci=37821,LQ=36492,li=36494,Gi=36495,fe=36283,ki=36284,yi=36285,Ui=36286,bD=2200,OD=2201,vD=2202,mB=2300,fB=2301,Mi=2302,XC=2400,zC=2401,uQ=2402,Ni=2500,Te=2501,_D=0,xe=1,Ki=2,ZD=3200,WD=3201,Ji=0,PD=1,iC="",xI="srgb",FI="srgb-linear",Fi="display-p3",HQ="display-p3-linear",mQ="linear",aI="srgb",fQ="rec709",TQ="p3",$C=7680,be=519,jD=512,VD=513,XD=514,Oe=515,zD=516,$D=517,Ah=518,Ih=519,Ri=35044,ve="300 es",bg=2e3,xQ=2001;class MC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const g=this._listeners[A];if(g!==void 0){const C=g.indexOf(I);C!==-1&&g.splice(C,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const I=this._listeners[A.type];if(I!==void 0){A.target=this;const g=I.slice(0);for(let C=0,Q=g.length;C<Q;C++)g[C].call(this,A);A.target=null}}}const ZI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _e=1234567;const TB=Math.PI/180,AB=180/Math.PI;function ng(){const B=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(ZI[B&255]+ZI[B>>8&255]+ZI[B>>16&255]+ZI[B>>24&255]+"-"+ZI[A&255]+ZI[A>>8&255]+"-"+ZI[A>>16&15|64]+ZI[A>>24&255]+"-"+ZI[I&63|128]+ZI[I>>8&255]+"-"+ZI[I>>16&255]+ZI[I>>24&255]+ZI[g&255]+ZI[g>>8&255]+ZI[g>>16&255]+ZI[g>>24&255]).toLowerCase()}function bI(B,A,I){return Math.max(A,Math.min(I,B))}function pi(B,A){return(B%A+A)%A}function gh(B,A,I,g,C){return g+(B-A)*(C-g)/(I-A)}function Ch(B,A,I){return B!==A?(I-B)/(A-B):0}function xB(B,A,I){return(1-I)*B+I*A}function Bh(B,A,I,g){return xB(B,A,1-Math.exp(-I*g))}function Qh(B,A=1){return A-Math.abs(pi(B,A*2)-A)}function Eh(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*(3-2*B))}function ih(B,A,I){return B<=A?0:B>=I?1:(B=(B-A)/(I-A),B*B*B*(B*(B*6-15)+10))}function oh(B,A){return B+Math.floor(Math.random()*(A-B+1))}function eh(B,A){return B+Math.random()*(A-B)}function th(B){return B*(.5-Math.random())}function ah(B){B!==void 0&&(_e=B);let A=_e+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function sh(B){return B*TB}function Dh(B){return B*AB}function hh(B){return(B&B-1)===0&&B!==0}function rh(B){return Math.pow(2,Math.ceil(Math.log(B)/Math.LN2))}function nh(B){return Math.pow(2,Math.floor(Math.log(B)/Math.LN2))}function Sh(B,A,I,g,C){const Q=Math.cos,E=Math.sin,i=Q(I/2),o=E(I/2),e=Q((A+g)/2),t=E((A+g)/2),a=Q((A-g)/2),s=E((A-g)/2),h=Q((g-A)/2),S=E((g-A)/2);switch(C){case"XYX":B.set(i*t,o*a,o*s,i*e);break;case"YZY":B.set(o*s,i*t,o*a,i*e);break;case"ZXZ":B.set(o*a,o*s,i*t,i*e);break;case"XZX":B.set(i*t,o*S,o*h,i*e);break;case"YXY":B.set(o*h,i*t,o*S,i*e);break;case"ZYZ":B.set(o*S,o*h,i*t,i*e);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function Sg(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return B/4294967295;case Uint16Array:return B/65535;case Uint8Array:return B/255;case Int32Array:return Math.max(B/2147483647,-1);case Int16Array:return Math.max(B/32767,-1);case Int8Array:return Math.max(B/127,-1);default:throw new Error("Invalid component type.")}}function II(B,A){switch(A.constructor){case Float32Array:return B;case Uint32Array:return Math.round(B*4294967295);case Uint16Array:return Math.round(B*65535);case Uint8Array:return Math.round(B*255);case Int32Array:return Math.round(B*2147483647);case Int16Array:return Math.round(B*32767);case Int8Array:return Math.round(B*127);default:throw new Error("Invalid component type.")}}const wh={DEG2RAD:TB,RAD2DEG:AB,generateUUID:ng,clamp:bI,euclideanModulo:pi,mapLinear:gh,inverseLerp:Ch,lerp:xB,damp:Bh,pingpong:Qh,smoothstep:Eh,smootherstep:ih,randInt:oh,randFloat:eh,randFloatSpread:th,seededRandom:ah,degToRad:sh,radToDeg:Dh,isPowerOfTwo:hh,ceilPowerOfTwo:rh,floorPowerOfTwo:nh,setQuaternionFromProperEuler:Sh,normalize:II,denormalize:Sg};class pA{constructor(A=0,I=0){pA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(bI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*g-E*C+A.x,this.y=Q*C+E*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class TA{constructor(A,I,g,C,Q,E,i,o,e){TA.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,e)}set(A,I,g,C,Q,E,i,o,e){const t=this.elements;return t[0]=A,t[1]=C,t[2]=i,t[3]=I,t[4]=Q,t[5]=o,t[6]=g,t[7]=E,t[8]=e,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[3],o=g[6],e=g[1],t=g[4],a=g[7],s=g[2],h=g[5],S=g[8],w=C[0],n=C[3],r=C[6],l=C[1],c=C[4],M=C[7],Y=C[2],K=C[5],N=C[8];return Q[0]=E*w+i*l+o*Y,Q[3]=E*n+i*c+o*K,Q[6]=E*r+i*M+o*N,Q[1]=e*w+t*l+a*Y,Q[4]=e*n+t*c+a*K,Q[7]=e*r+t*M+a*N,Q[2]=s*w+h*l+S*Y,Q[5]=s*n+h*c+S*K,Q[8]=s*r+h*M+S*N,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8];return I*E*t-I*i*e-g*Q*t+g*i*o+C*Q*e-C*E*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=t*E-i*e,s=i*o-t*Q,h=e*Q-E*o,S=I*a+g*s+C*h;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return A[0]=a*w,A[1]=(C*e-t*g)*w,A[2]=(i*g-C*E)*w,A[3]=s*w,A[4]=(t*I-C*o)*w,A[5]=(C*Q-i*I)*w,A[6]=h*w,A[7]=(g*o-e*I)*w,A[8]=(E*I-g*Q)*w,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,Q,E,i){const o=Math.cos(Q),e=Math.sin(Q);return this.set(g*o,g*e,-g*(o*E+e*i)+E+A,-C*e,C*o,-C*(-e*E+o*i)+i+I,0,0,1),this}scale(A,I){return this.premultiply(di.makeScale(A,I)),this}rotate(A){return this.premultiply(di.makeRotation(-A)),this}translate(A,I){return this.premultiply(di.makeTranslation(A,I)),this}makeTranslation(A,I){return A.isVector2?this.set(1,0,A.x,0,1,A.y,0,0,1):this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const di=new TA;function Ze(B){for(let A=B.length-1;A>=0;--A)if(B[A]>=65535)return!0;return!1}function bB(B){return document.createElementNS("http://www.w3.org/1999/xhtml",B)}function ch(){const B=bB("canvas");return B.style.display="block",B}const We={};function IB(B){B in We||(We[B]=!0,console.warn(B))}function lh(B,A,I){return new Promise(function(g,C){function Q(){switch(B.clientWaitSync(A,B.SYNC_FLUSH_COMMANDS_BIT,0)){case B.WAIT_FAILED:C();break;case B.TIMEOUT_EXPIRED:setTimeout(Q,I);break;default:g()}}setTimeout(Q,I)})}const Pe=new TA().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),je=new TA().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),OB={[FI]:{transfer:mQ,primaries:fQ,luminanceCoefficients:[.2126,.7152,.0722],toReference:B=>B,fromReference:B=>B},[xI]:{transfer:aI,primaries:fQ,luminanceCoefficients:[.2126,.7152,.0722],toReference:B=>B.convertSRGBToLinear(),fromReference:B=>B.convertLinearToSRGB()},[HQ]:{transfer:mQ,primaries:TQ,luminanceCoefficients:[.2289,.6917,.0793],toReference:B=>B.applyMatrix3(je),fromReference:B=>B.applyMatrix3(Pe)},[Fi]:{transfer:aI,primaries:TQ,luminanceCoefficients:[.2289,.6917,.0793],toReference:B=>B.convertSRGBToLinear().applyMatrix3(je),fromReference:B=>B.applyMatrix3(Pe).convertLinearToSRGB()}},Gh=new Set([FI,HQ]),XA={enabled:!0,_workingColorSpace:FI,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(B){if(!Gh.has(B))throw new Error(`Unsupported working color space, "${B}".`);this._workingColorSpace=B},convert:function(B,A,I){if(this.enabled===!1||A===I||!A||!I)return B;const g=OB[A].toReference,C=OB[I].fromReference;return C(g(B))},fromWorkingColorSpace:function(B,A){return this.convert(B,this._workingColorSpace,A)},toWorkingColorSpace:function(B,A){return this.convert(B,A,this._workingColorSpace)},getPrimaries:function(B){return OB[B].primaries},getTransfer:function(B){return B===iC?mQ:OB[B].transfer},getLuminanceCoefficients:function(B,A=this._workingColorSpace){return B.fromArray(OB[A].luminanceCoefficients)}};function gB(B){return B<.04045?B*.0773993808:Math.pow(B*.9478672986+.0521327014,2.4)}function qi(B){return B<.0031308?B*12.92:1.055*Math.pow(B,.41666)-.055}let CB;class kh{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{CB===void 0&&(CB=bB("canvas")),CB.width=A.width,CB.height=A.height;const g=CB.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=CB}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=bB("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),Q=C.data;for(let E=0;E<Q.length;E++)Q[E]=gB(Q[E]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(gB(I[g]/255)*255):I[g]=gB(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}let yh=0;class Ve{constructor(A=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=ng(),this.data=A,this.dataReady=!0,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let Q;if(Array.isArray(C)){Q=[];for(let E=0,i=C.length;E<i;E++)C[E].isDataTexture?Q.push(Yi(C[E].image)):Q.push(Yi(C[E]))}else Q=Yi(C);g.url=Q}return I||(A.images[this.uuid]=g),g}}function Yi(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap?kh.getDataURL(B):B.data?{data:Array.from(B.data),width:B.width,height:B.height,type:B.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uh=0;class RI extends MC{constructor(A=RI.DEFAULT_IMAGE,I=RI.DEFAULT_MAPPING,g=Mg,C=Mg,Q=uI,E=Ng,i=eg,o=rg,e=RI.DEFAULT_ANISOTROPY,t=iC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=ng(),this.name="",this.source=new Ve(A),this.mipmaps=[],this.mapping=I,this.channel=0,this.wrapS=g,this.wrapT=C,this.magFilter=Q,this.minFilter=E,this.anisotropy=e,this.format=i,this.internalFormat=null,this.type=o,this.offset=new pA(0,0),this.repeat=new pA(1,1),this.center=new pA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new TA,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=t,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.channel=A.channel,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.colorSpace=A.colorSpace,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Fe)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case yC:A.x=A.x-Math.floor(A.x);break;case Mg:A.x=A.x<0?0:1;break;case FQ:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case yC:A.y=A.y-Math.floor(A.y);break;case Mg:A.y=A.y<0?0:1;break;case FQ:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(A){A===!0&&this.pmremVersion++}}RI.DEFAULT_IMAGE=null,RI.DEFAULT_MAPPING=Fe,RI.DEFAULT_ANISOTROPY=1;class gI{constructor(A=0,I=0,g=0,C=1){gI.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=this.w,E=A.elements;return this.x=E[0]*I+E[4]*g+E[8]*C+E[12]*Q,this.y=E[1]*I+E[5]*g+E[9]*C+E[13]*Q,this.z=E[2]*I+E[6]*g+E[10]*C+E[14]*Q,this.w=E[3]*I+E[7]*g+E[11]*C+E[15]*Q,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,Q;const E=A.elements,i=E[0],o=E[4],e=E[8],t=E[1],a=E[5],s=E[9],h=E[2],S=E[6],w=E[10];if(Math.abs(o-t)<.01&&Math.abs(e-h)<.01&&Math.abs(s-S)<.01){if(Math.abs(o+t)<.1&&Math.abs(e+h)<.1&&Math.abs(s+S)<.1&&Math.abs(i+a+w-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const r=(i+1)/2,l=(a+1)/2,c=(w+1)/2,M=(o+t)/4,Y=(e+h)/4,K=(s+S)/4;return r>l&&r>c?r<.01?(g=0,C=.707106781,Q=.707106781):(g=Math.sqrt(r),C=M/g,Q=Y/g):l>c?l<.01?(g=.707106781,C=0,Q=.707106781):(C=Math.sqrt(l),g=M/C,Q=K/C):c<.01?(g=.707106781,C=.707106781,Q=0):(Q=Math.sqrt(c),g=Y/Q,C=K/Q),this.set(g,C,Q,I),this}let n=Math.sqrt((S-s)*(S-s)+(e-h)*(e-h)+(t-o)*(t-o));return Math.abs(n)<.001&&(n=1),this.x=(S-s)/n,this.y=(e-h)/n,this.z=(t-o)/n,this.w=Math.acos((i+a+w-1)/2),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this.w=I[15],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mh extends MC{constructor(A=1,I=1,g={}){super(),this.isRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new gI(0,0,A,I),this.scissorTest=!1,this.viewport=new gI(0,0,A,I);const C={width:A,height:I,depth:1};g=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:uI,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},g);const Q=new RI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace);Q.flipY=!1,Q.generateMipmaps=g.generateMipmaps,Q.internalFormat=g.internalFormat,this.textures=[];const E=g.count;for(let i=0;i<E;i++)this.textures[i]=Q.clone(),this.textures[i].isRenderTargetTexture=!0;this.depthBuffer=g.depthBuffer,this.stencilBuffer=g.stencilBuffer,this.resolveDepthBuffer=g.resolveDepthBuffer,this.resolveStencilBuffer=g.resolveStencilBuffer,this.depthTexture=g.depthTexture,this.samples=g.samples}get texture(){return this.textures[0]}set texture(A){this.textures[0]=A}setSize(A,I,g=1){if(this.width!==A||this.height!==I||this.depth!==g){this.width=A,this.height=I,this.depth=g;for(let C=0,Q=this.textures.length;C<Q;C++)this.textures[C].image.width=A,this.textures[C].image.height=I,this.textures[C].image.depth=g;this.dispose()}this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.scissor.copy(A.scissor),this.scissorTest=A.scissorTest,this.viewport.copy(A.viewport),this.textures.length=0;for(let g=0,C=A.textures.length;g<C;g++)this.textures[g]=A.textures[g].clone(),this.textures[g].isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Ve(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class NC extends Mh{constructor(A=1,I=1,g={}){super(A,I,g),this.isWebGLRenderTarget=!0}}class Xe extends RI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=TI,this.minFilter=TI,this.wrapR=Mg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(A){this.layerUpdates.add(A)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nh extends RI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=TI,this.minFilter=TI,this.wrapR=Mg,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class HI{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,Q,E,i){let o=g[C+0],e=g[C+1],t=g[C+2],a=g[C+3];const s=Q[E+0],h=Q[E+1],S=Q[E+2],w=Q[E+3];if(i===0){A[I+0]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a;return}if(i===1){A[I+0]=s,A[I+1]=h,A[I+2]=S,A[I+3]=w;return}if(a!==w||o!==s||e!==h||t!==S){let n=1-i;const r=o*s+e*h+t*S+a*w,l=r>=0?1:-1,c=1-r*r;if(c>Number.EPSILON){const Y=Math.sqrt(c),K=Math.atan2(Y,r*l);n=Math.sin(n*K)/Y,i=Math.sin(i*K)/Y}const M=i*l;if(o=o*n+s*M,e=e*n+h*M,t=t*n+S*M,a=a*n+w*M,n===1-i){const Y=1/Math.sqrt(o*o+e*e+t*t+a*a);o*=Y,e*=Y,t*=Y,a*=Y}}A[I]=o,A[I+1]=e,A[I+2]=t,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,Q,E){const i=g[C],o=g[C+1],e=g[C+2],t=g[C+3],a=Q[E],s=Q[E+1],h=Q[E+2],S=Q[E+3];return A[I]=i*S+t*a+o*h-e*s,A[I+1]=o*S+t*s+e*a-i*h,A[I+2]=e*S+t*h+i*s-o*a,A[I+3]=t*S-i*a-o*s-e*h,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I=!0){const g=A._x,C=A._y,Q=A._z,E=A._order,i=Math.cos,o=Math.sin,e=i(g/2),t=i(C/2),a=i(Q/2),s=o(g/2),h=o(C/2),S=o(Q/2);switch(E){case"XYZ":this._x=s*t*a+e*h*S,this._y=e*h*a-s*t*S,this._z=e*t*S+s*h*a,this._w=e*t*a-s*h*S;break;case"YXZ":this._x=s*t*a+e*h*S,this._y=e*h*a-s*t*S,this._z=e*t*S-s*h*a,this._w=e*t*a+s*h*S;break;case"ZXY":this._x=s*t*a-e*h*S,this._y=e*h*a+s*t*S,this._z=e*t*S+s*h*a,this._w=e*t*a-s*h*S;break;case"ZYX":this._x=s*t*a-e*h*S,this._y=e*h*a+s*t*S,this._z=e*t*S-s*h*a,this._w=e*t*a+s*h*S;break;case"YZX":this._x=s*t*a+e*h*S,this._y=e*h*a+s*t*S,this._z=e*t*S-s*h*a,this._w=e*t*a-s*h*S;break;case"XZY":this._x=s*t*a-e*h*S,this._y=e*h*a-s*t*S,this._z=e*t*S+s*h*a,this._w=e*t*a+s*h*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return I===!0&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],Q=I[8],E=I[1],i=I[5],o=I[9],e=I[2],t=I[6],a=I[10],s=g+i+a;if(s>0){const h=.5/Math.sqrt(s+1);this._w=.25/h,this._x=(t-o)*h,this._y=(Q-e)*h,this._z=(E-C)*h}else if(g>i&&g>a){const h=2*Math.sqrt(1+g-i-a);this._w=(t-o)/h,this._x=.25*h,this._y=(C+E)/h,this._z=(Q+e)/h}else if(i>a){const h=2*Math.sqrt(1+i-g-a);this._w=(Q-e)/h,this._x=(C+E)/h,this._y=.25*h,this._z=(o+t)/h}else{const h=2*Math.sqrt(1+a-g-i);this._w=(E-C)/h,this._x=(Q+e)/h,this._y=(o+t)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(bI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,Q=A._z,E=A._w,i=I._x,o=I._y,e=I._z,t=I._w;return this._x=g*t+E*i+C*e-Q*o,this._y=C*t+E*o+Q*i-g*e,this._z=Q*t+E*e+g*o-C*i,this._w=E*t-g*i-C*o-Q*e,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,Q=this._z,E=this._w;let i=E*A._w+g*A._x+C*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=g,this._y=C,this._z=Q,this;const o=1-i*i;if(o<=Number.EPSILON){const h=1-I;return this._w=h*E+I*this._w,this._x=h*g+I*this._x,this._y=h*C+I*this._y,this._z=h*Q+I*this._z,this.normalize(),this}const e=Math.sqrt(o),t=Math.atan2(e,i),a=Math.sin((1-I)*t)/e,s=Math.sin(I*t)/e;return this._w=E*a+this._w*s,this._x=g*a+this._x*s,this._y=C*a+this._y*s,this._z=Q*a+this._z*s,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=2*Math.PI*Math.random(),I=2*Math.PI*Math.random(),g=Math.random(),C=Math.sqrt(1-g),Q=Math.sqrt(g);return this.set(C*Math.sin(A),C*Math.cos(A),Q*Math.sin(I),Q*Math.cos(I))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(A=0,I=0,g=0){q.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(ze.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(ze.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[3]*g+Q[6]*C,this.y=Q[1]*I+Q[4]*g+Q[7]*C,this.z=Q[2]*I+Q[5]*g+Q[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,Q=A.elements,E=1/(Q[3]*I+Q[7]*g+Q[11]*C+Q[15]);return this.x=(Q[0]*I+Q[4]*g+Q[8]*C+Q[12])*E,this.y=(Q[1]*I+Q[5]*g+Q[9]*C+Q[13])*E,this.z=(Q[2]*I+Q[6]*g+Q[10]*C+Q[14])*E,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,Q=A.x,E=A.y,i=A.z,o=A.w,e=2*(E*C-i*g),t=2*(i*I-Q*C),a=2*(Q*g-E*I);return this.x=I+o*e+E*a-i*t,this.y=g+o*t+i*e-Q*a,this.z=C+o*a+Q*t-E*e,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C,this.y=Q[1]*I+Q[5]*g+Q[9]*C,this.z=Q[2]*I+Q[6]*g+Q[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,Q=A.z,E=I.x,i=I.y,o=I.z;return this.x=C*o-Q*i,this.y=Q*E-g*o,this.z=g*i-C*E,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return Li.copy(this).projectOnVector(A),this.sub(Li)}reflect(A){return this.sub(Li.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(bI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}setFromColor(A){return this.x=A.r,this.y=A.g,this.z=A.b,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=Math.random()*Math.PI*2,I=Math.random()*2-1,g=Math.sqrt(1-I*I);return this.x=g*Math.cos(A),this.y=I,this.z=g*Math.sin(A),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Li=new q,ze=new HI;class Og{constructor(A=new q(1/0,1/0,1/0),I=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I+=3)this.expandByPoint(wg.fromArray(A,I));return this}setFromBufferAttribute(A){this.makeEmpty();for(let I=0,g=A.count;I<g;I++)this.expandByPoint(wg.fromBufferAttribute(A,I));return this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=wg.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0){const Q=g.getAttribute("position");if(I===!0&&Q!==void 0&&A.isInstancedMesh!==!0)for(let E=0,i=Q.count;E<i;E++)A.isMesh===!0?A.getVertexPosition(E,wg):wg.fromBufferAttribute(Q,E),wg.applyMatrix4(A.matrixWorld),this.expandByPoint(wg);else A.boundingBox!==void 0?(A.boundingBox===null&&A.computeBoundingBox(),bQ.copy(A.boundingBox)):(g.boundingBox===null&&g.computeBoundingBox(),bQ.copy(g.boundingBox)),bQ.applyMatrix4(A.matrixWorld),this.union(bQ)}const C=A.children;for(let Q=0,E=C.length;Q<E;Q++)this.expandByObject(C[Q],I);return this}containsPoint(A){return A.x>=this.min.x&&A.x<=this.max.x&&A.y>=this.min.y&&A.y<=this.max.y&&A.z>=this.min.z&&A.z<=this.max.z}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return A.max.x>=this.min.x&&A.min.x<=this.max.x&&A.max.y>=this.min.y&&A.min.y<=this.max.y&&A.max.z>=this.min.z&&A.min.z<=this.max.z}intersectsSphere(A){return this.clampPoint(A.center,wg),wg.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(vB),OQ.subVectors(this.max,vB),BB.subVectors(A.a,vB),QB.subVectors(A.b,vB),EB.subVectors(A.c,vB),oC.subVectors(QB,BB),eC.subVectors(EB,QB),KC.subVectors(BB,EB);let I=[0,-oC.z,oC.y,0,-eC.z,eC.y,0,-KC.z,KC.y,oC.z,0,-oC.x,eC.z,0,-eC.x,KC.z,0,-KC.x,-oC.y,oC.x,0,-eC.y,eC.x,0,-KC.y,KC.x,0];return!ui(I,BB,QB,EB,OQ)||(I=[1,0,0,0,1,0,0,0,1],!ui(I,BB,QB,EB,OQ))?!1:(vQ.crossVectors(oC,eC),I=[vQ.x,vQ.y,vQ.z],ui(I,BB,QB,EB,OQ))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,wg).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(wg).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(vg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),vg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),vg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),vg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),vg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),vg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),vg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),vg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(vg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const vg=[new q,new q,new q,new q,new q,new q,new q,new q],wg=new q,bQ=new Og,BB=new q,QB=new q,EB=new q,oC=new q,eC=new q,KC=new q,vB=new q,OQ=new q,vQ=new q,JC=new q;function ui(B,A,I,g,C){for(let Q=0,E=B.length-3;Q<=E;Q+=3){JC.fromArray(B,Q);const i=C.x*Math.abs(JC.x)+C.y*Math.abs(JC.y)+C.z*Math.abs(JC.z),o=A.dot(JC),e=I.dot(JC),t=g.dot(JC);if(Math.max(-Math.max(o,e,t),Math.min(o,e,t))>i)return!1}return!0}const Kh=new Og,_B=new q,Hi=new q;class Kg{constructor(A=new q,I=-1){this.isSphere=!0,this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):Kh.setFromPoints(A).getCenter(g);let C=0;for(let Q=0,E=A.length;Q<E;Q++)C=Math.max(C,g.distanceToSquared(A[Q]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;_B.subVectors(A,this.center);const I=_B.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(_B,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(Hi.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(_B.copy(A.center).add(Hi)),this.expandByPoint(_B.copy(A.center).sub(Hi))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _g=new q,mi=new q,_Q=new q,tC=new q,fi=new q,ZQ=new q,Ti=new q;class WQ{constructor(A=new q,I=new q(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,_g)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=_g.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(_g.copy(this.origin).addScaledVector(this.direction,I),_g.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){mi.copy(A).add(I).multiplyScalar(.5),_Q.copy(I).sub(A).normalize(),tC.copy(this.origin).sub(mi);const Q=A.distanceTo(I)*.5,E=-this.direction.dot(_Q),i=tC.dot(this.direction),o=-tC.dot(_Q),e=tC.lengthSq(),t=Math.abs(1-E*E);let a,s,h,S;if(t>0)if(a=E*o-i,s=E*i-o,S=Q*t,a>=0)if(s>=-S)if(s<=S){const w=1/t;a*=w,s*=w,h=a*(a+E*s+2*i)+s*(E*a+s+2*o)+e}else s=Q,a=Math.max(0,-(E*s+i)),h=-a*a+s*(s+2*o)+e;else s=-Q,a=Math.max(0,-(E*s+i)),h=-a*a+s*(s+2*o)+e;else s<=-S?(a=Math.max(0,-(-E*Q+i)),s=a>0?-Q:Math.min(Math.max(-Q,-o),Q),h=-a*a+s*(s+2*o)+e):s<=S?(a=0,s=Math.min(Math.max(-Q,-o),Q),h=s*(s+2*o)+e):(a=Math.max(0,-(E*Q+i)),s=a>0?Q:Math.min(Math.max(-Q,-o),Q),h=-a*a+s*(s+2*o)+e);else s=E>0?-Q:Q,a=Math.max(0,-(E*s+i)),h=-a*a+s*(s+2*o)+e;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(mi).addScaledVector(_Q,s),h}intersectSphere(A,I){_g.subVectors(A.center,this.origin);const g=_g.dot(this.direction),C=_g.dot(_g)-g*g,Q=A.radius*A.radius;if(C>Q)return null;const E=Math.sqrt(Q-C),i=g-E,o=g+E;return o<0?null:i<0?this.at(o,I):this.at(i,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,Q,E,i,o;const e=1/this.direction.x,t=1/this.direction.y,a=1/this.direction.z,s=this.origin;return e>=0?(g=(A.min.x-s.x)*e,C=(A.max.x-s.x)*e):(g=(A.max.x-s.x)*e,C=(A.min.x-s.x)*e),t>=0?(Q=(A.min.y-s.y)*t,E=(A.max.y-s.y)*t):(Q=(A.max.y-s.y)*t,E=(A.min.y-s.y)*t),g>E||Q>C||((Q>g||isNaN(g))&&(g=Q),(E<C||isNaN(C))&&(C=E),a>=0?(i=(A.min.z-s.z)*a,o=(A.max.z-s.z)*a):(i=(A.max.z-s.z)*a,o=(A.min.z-s.z)*a),g>o||i>C)||((i>g||g!==g)&&(g=i),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,_g)!==null}intersectTriangle(A,I,g,C,Q){fi.subVectors(I,A),ZQ.subVectors(g,A),Ti.crossVectors(fi,ZQ);let E=this.direction.dot(Ti),i;if(E>0){if(C)return null;i=1}else if(E<0)i=-1,E=-E;else return null;tC.subVectors(this.origin,A);const o=i*this.direction.dot(ZQ.crossVectors(tC,ZQ));if(o<0)return null;const e=i*this.direction.dot(fi.cross(tC));if(e<0||o+e>E)return null;const t=-i*tC.dot(Ti);return t<0?null:this.at(t/E,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class uA{constructor(A,I,g,C,Q,E,i,o,e,t,a,s,h,S,w,n){uA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],A!==void 0&&this.set(A,I,g,C,Q,E,i,o,e,t,a,s,h,S,w,n)}set(A,I,g,C,Q,E,i,o,e,t,a,s,h,S,w,n){const r=this.elements;return r[0]=A,r[4]=I,r[8]=g,r[12]=C,r[1]=Q,r[5]=E,r[9]=i,r[13]=o,r[2]=e,r[6]=t,r[10]=a,r[14]=s,r[3]=h,r[7]=S,r[11]=w,r[15]=n,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/iB.setFromMatrixColumn(A,0).length(),Q=1/iB.setFromMatrixColumn(A,1).length(),E=1/iB.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*Q,I[5]=g[5]*Q,I[6]=g[6]*Q,I[7]=0,I[8]=g[8]*E,I[9]=g[9]*E,I[10]=g[10]*E,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,Q=A.z,E=Math.cos(g),i=Math.sin(g),o=Math.cos(C),e=Math.sin(C),t=Math.cos(Q),a=Math.sin(Q);if(A.order==="XYZ"){const s=E*t,h=E*a,S=i*t,w=i*a;I[0]=o*t,I[4]=-o*a,I[8]=e,I[1]=h+S*e,I[5]=s-w*e,I[9]=-i*o,I[2]=w-s*e,I[6]=S+h*e,I[10]=E*o}else if(A.order==="YXZ"){const s=o*t,h=o*a,S=e*t,w=e*a;I[0]=s+w*i,I[4]=S*i-h,I[8]=E*e,I[1]=E*a,I[5]=E*t,I[9]=-i,I[2]=h*i-S,I[6]=w+s*i,I[10]=E*o}else if(A.order==="ZXY"){const s=o*t,h=o*a,S=e*t,w=e*a;I[0]=s-w*i,I[4]=-E*a,I[8]=S+h*i,I[1]=h+S*i,I[5]=E*t,I[9]=w-s*i,I[2]=-E*e,I[6]=i,I[10]=E*o}else if(A.order==="ZYX"){const s=E*t,h=E*a,S=i*t,w=i*a;I[0]=o*t,I[4]=S*e-h,I[8]=s*e+w,I[1]=o*a,I[5]=w*e+s,I[9]=h*e-S,I[2]=-e,I[6]=i*o,I[10]=E*o}else if(A.order==="YZX"){const s=E*o,h=E*e,S=i*o,w=i*e;I[0]=o*t,I[4]=w-s*a,I[8]=S*a+h,I[1]=a,I[5]=E*t,I[9]=-i*t,I[2]=-e*t,I[6]=h*a+S,I[10]=s-w*a}else if(A.order==="XZY"){const s=E*o,h=E*e,S=i*o,w=i*e;I[0]=o*t,I[4]=-a,I[8]=e*t,I[1]=s*a+w,I[5]=E*t,I[9]=h*a-S,I[2]=S*a-h,I[6]=i*t,I[10]=w*a+s}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Jh,A,Fh)}lookAt(A,I,g){const C=this.elements;return Bg.subVectors(A,I),Bg.lengthSq()===0&&(Bg.z=1),Bg.normalize(),aC.crossVectors(g,Bg),aC.lengthSq()===0&&(Math.abs(g.z)===1?Bg.x+=1e-4:Bg.z+=1e-4,Bg.normalize(),aC.crossVectors(g,Bg)),aC.normalize(),PQ.crossVectors(Bg,aC),C[0]=aC.x,C[4]=PQ.x,C[8]=Bg.x,C[1]=aC.y,C[5]=PQ.y,C[9]=Bg.y,C[2]=aC.z,C[6]=PQ.z,C[10]=Bg.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,Q=this.elements,E=g[0],i=g[4],o=g[8],e=g[12],t=g[1],a=g[5],s=g[9],h=g[13],S=g[2],w=g[6],n=g[10],r=g[14],l=g[3],c=g[7],M=g[11],Y=g[15],K=C[0],N=C[4],d=C[8],y=C[12],G=C[1],p=C[5],T=C[9],x=C[13],Z=C[2],V=C[6],_=C[10],z=C[14],W=C[3],iA=C[7],lA=C[11],FA=C[15];return Q[0]=E*K+i*G+o*Z+e*W,Q[4]=E*N+i*p+o*V+e*iA,Q[8]=E*d+i*T+o*_+e*lA,Q[12]=E*y+i*x+o*z+e*FA,Q[1]=t*K+a*G+s*Z+h*W,Q[5]=t*N+a*p+s*V+h*iA,Q[9]=t*d+a*T+s*_+h*lA,Q[13]=t*y+a*x+s*z+h*FA,Q[2]=S*K+w*G+n*Z+r*W,Q[6]=S*N+w*p+n*V+r*iA,Q[10]=S*d+w*T+n*_+r*lA,Q[14]=S*y+w*x+n*z+r*FA,Q[3]=l*K+c*G+M*Z+Y*W,Q[7]=l*N+c*p+M*V+Y*iA,Q[11]=l*d+c*T+M*_+Y*lA,Q[15]=l*y+c*x+M*z+Y*FA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],Q=A[12],E=A[1],i=A[5],o=A[9],e=A[13],t=A[2],a=A[6],s=A[10],h=A[14],S=A[3],w=A[7],n=A[11],r=A[15];return S*(+Q*o*a-C*e*a-Q*i*s+g*e*s+C*i*h-g*o*h)+w*(+I*o*h-I*e*s+Q*E*s-C*E*h+C*e*t-Q*o*t)+n*(+I*e*a-I*i*h-Q*E*a+g*E*h+Q*i*t-g*e*t)+r*(-C*i*t-I*o*a+I*i*s+C*E*a-g*E*s+g*o*t)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],Q=A[3],E=A[4],i=A[5],o=A[6],e=A[7],t=A[8],a=A[9],s=A[10],h=A[11],S=A[12],w=A[13],n=A[14],r=A[15],l=a*n*e-w*s*e+w*o*h-i*n*h-a*o*r+i*s*r,c=S*s*e-t*n*e-S*o*h+E*n*h+t*o*r-E*s*r,M=t*w*e-S*a*e+S*i*h-E*w*h-t*i*r+E*a*r,Y=S*a*o-t*w*o-S*i*s+E*w*s+t*i*n-E*a*n,K=I*l+g*c+C*M+Q*Y;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/K;return A[0]=l*N,A[1]=(w*s*Q-a*n*Q-w*C*h+g*n*h+a*C*r-g*s*r)*N,A[2]=(i*n*Q-w*o*Q+w*C*e-g*n*e-i*C*r+g*o*r)*N,A[3]=(a*o*Q-i*s*Q-a*C*e+g*s*e+i*C*h-g*o*h)*N,A[4]=c*N,A[5]=(t*n*Q-S*s*Q+S*C*h-I*n*h-t*C*r+I*s*r)*N,A[6]=(S*o*Q-E*n*Q-S*C*e+I*n*e+E*C*r-I*o*r)*N,A[7]=(E*s*Q-t*o*Q+t*C*e-I*s*e-E*C*h+I*o*h)*N,A[8]=M*N,A[9]=(S*a*Q-t*w*Q-S*g*h+I*w*h+t*g*r-I*a*r)*N,A[10]=(E*w*Q-S*i*Q+S*g*e-I*w*e-E*g*r+I*i*r)*N,A[11]=(t*i*Q-E*a*Q-t*g*e+I*a*e+E*g*h-I*i*h)*N,A[12]=Y*N,A[13]=(t*w*C-S*a*C+S*g*s-I*w*s-t*g*n+I*a*n)*N,A[14]=(S*i*C-E*w*C-S*g*o+I*w*o+E*g*n-I*i*n)*N,A[15]=(E*a*C-t*i*C+t*g*o-I*a*o-E*g*s+I*i*s)*N,this}scale(A){const I=this.elements,g=A.x,C=A.y,Q=A.z;return I[0]*=g,I[4]*=C,I[8]*=Q,I[1]*=g,I[5]*=C,I[9]*=Q,I[2]*=g,I[6]*=C,I[10]*=Q,I[3]*=g,I[7]*=C,I[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return A.isVector3?this.set(1,0,0,A.x,0,1,0,A.y,0,0,1,A.z,0,0,0,1):this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),Q=1-g,E=A.x,i=A.y,o=A.z,e=Q*E,t=Q*i;return this.set(e*E+g,e*i-C*o,e*o+C*i,0,e*i+C*o,t*i+g,t*o-C*E,0,e*o-C*i,t*o+C*E,Q*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,Q,E){return this.set(1,g,Q,0,A,1,E,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,Q=I._x,E=I._y,i=I._z,o=I._w,e=Q+Q,t=E+E,a=i+i,s=Q*e,h=Q*t,S=Q*a,w=E*t,n=E*a,r=i*a,l=o*e,c=o*t,M=o*a,Y=g.x,K=g.y,N=g.z;return C[0]=(1-(w+r))*Y,C[1]=(h+M)*Y,C[2]=(S-c)*Y,C[3]=0,C[4]=(h-M)*K,C[5]=(1-(s+r))*K,C[6]=(n+l)*K,C[7]=0,C[8]=(S+c)*N,C[9]=(n-l)*N,C[10]=(1-(s+w))*N,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let Q=iB.set(C[0],C[1],C[2]).length();const E=iB.set(C[4],C[5],C[6]).length(),i=iB.set(C[8],C[9],C[10]).length();this.determinant()<0&&(Q=-Q),A.x=C[12],A.y=C[13],A.z=C[14],cg.copy(this);const o=1/Q,e=1/E,t=1/i;return cg.elements[0]*=o,cg.elements[1]*=o,cg.elements[2]*=o,cg.elements[4]*=e,cg.elements[5]*=e,cg.elements[6]*=e,cg.elements[8]*=t,cg.elements[9]*=t,cg.elements[10]*=t,I.setFromRotationMatrix(cg),g.x=Q,g.y=E,g.z=i,this}makePerspective(A,I,g,C,Q,E,i=bg){const o=this.elements,e=2*Q/(I-A),t=2*Q/(g-C),a=(I+A)/(I-A),s=(g+C)/(g-C);let h,S;if(i===bg)h=-(E+Q)/(E-Q),S=-2*E*Q/(E-Q);else if(i===xQ)h=-E/(E-Q),S=-E*Q/(E-Q);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+i);return o[0]=e,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=t,o[9]=s,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=S,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(A,I,g,C,Q,E,i=bg){const o=this.elements,e=1/(I-A),t=1/(g-C),a=1/(E-Q),s=(I+A)*e,h=(g+C)*t;let S,w;if(i===bg)S=(E+Q)*a,w=-2*a;else if(i===xQ)S=Q*a,w=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+i);return o[0]=2*e,o[4]=0,o[8]=0,o[12]=-s,o[1]=0,o[5]=2*t,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=w,o[14]=-S,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const iB=new q,cg=new uA,Jh=new q(0,0,0),Fh=new q(1,1,1),aC=new q,PQ=new q,Bg=new q,$e=new uA,At=new HI;class jI{constructor(A=0,I=0,g=0,C=jI.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,Q=C[0],E=C[4],i=C[8],o=C[1],e=C[5],t=C[9],a=C[2],s=C[6],h=C[10];switch(I){case"XYZ":this._y=Math.asin(bI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-t,h),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(s,e),this._z=0);break;case"YXZ":this._x=Math.asin(-bI(t,-1,1)),Math.abs(t)<.9999999?(this._y=Math.atan2(i,h),this._z=Math.atan2(o,e)):(this._y=Math.atan2(-a,Q),this._z=0);break;case"ZXY":this._x=Math.asin(bI(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(-a,h),this._z=Math.atan2(-E,e)):(this._y=0,this._z=Math.atan2(o,Q));break;case"ZYX":this._y=Math.asin(-bI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(s,h),this._z=Math.atan2(o,Q)):(this._x=0,this._z=Math.atan2(-E,e));break;case"YZX":this._z=Math.asin(bI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-t,e),this._y=Math.atan2(-a,Q)):(this._x=0,this._y=Math.atan2(i,h));break;case"XZY":this._z=Math.asin(-bI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(s,e),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-t,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return $e.makeRotationFromQuaternion(A),this.setFromRotationMatrix($e,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return At.setFromEuler(this),this.setFromQuaternion(At,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jI.DEFAULT_ORDER="XYZ";class It{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let Rh=0;const gt=new q,oB=new HI,Zg=new uA,jQ=new q,ZB=new q,ph=new q,dh=new HI,Ct=new q(1,0,0),Bt=new q(0,1,0),Qt=new q(0,0,1),Et={type:"added"},qh={type:"removed"},eB={type:"childadded",child:null},xi={type:"childremoved",child:null};class iI extends MC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=ng(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=iI.DEFAULT_UP.clone();const A=new q,I=new jI,g=new HI,C=new q(1,1,1);function Q(){g.setFromEuler(I,!1)}function E(){I.setFromQuaternion(g,void 0,!1)}I._onChange(Q),g._onChange(E),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new uA},normalMatrix:{value:new TA}}),this.matrix=new uA,this.matrixWorld=new uA,this.matrixAutoUpdate=iI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=iI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new It,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return oB.setFromAxisAngle(A,I),this.quaternion.multiply(oB),this}rotateOnWorldAxis(A,I){return oB.setFromAxisAngle(A,I),this.quaternion.premultiply(oB),this}rotateX(A){return this.rotateOnAxis(Ct,A)}rotateY(A){return this.rotateOnAxis(Bt,A)}rotateZ(A){return this.rotateOnAxis(Qt,A)}translateOnAxis(A,I){return gt.copy(A).applyQuaternion(this.quaternion),this.position.add(gt.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(Ct,A)}translateY(A){return this.translateOnAxis(Bt,A)}translateZ(A){return this.translateOnAxis(Qt,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Zg.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?jQ.copy(A):jQ.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),ZB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zg.lookAt(ZB,jQ,this.up):Zg.lookAt(jQ,ZB,this.up),this.quaternion.setFromRotationMatrix(Zg),C&&(Zg.extractRotation(C.matrixWorld),oB.setFromRotationMatrix(Zg),this.quaternion.premultiply(oB.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.removeFromParent(),A.parent=this,this.children.push(A),A.dispatchEvent(Et),eB.child=A,this.dispatchEvent(eB),eB.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(qh),xi.child=A,this.dispatchEvent(xi),xi.child=null),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){return this.remove(...this.children)}attach(A){return this.updateWorldMatrix(!0,!1),Zg.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Zg.multiply(A.parent.matrixWorld)),A.applyMatrix4(Zg),A.removeFromParent(),A.parent=this,this.children.push(A),A.updateWorldMatrix(!1,!0),A.dispatchEvent(Et),eB.child=A,this.dispatchEvent(eB),eB.child=null,this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const Q=this.children[g].getObjectByProperty(A,I);if(Q!==void 0)return Q}}getObjectsByProperty(A,I,g=[]){this[A]===I&&g.push(this);const C=this.children;for(let Q=0,E=C.length;Q<E;Q++)C[Q].getObjectsByProperty(A,I,g);return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ZB,A,ph),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ZB,dh,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].updateMatrixWorld(A)}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),I===!0){const C=this.children;for(let Q=0,E=C.length;Q<E;Q++)C[Q].updateWorldMatrix(!1,!0)}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),C.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(C.type="BatchedMesh",C.perObjectFrustumCulled=this.perObjectFrustumCulled,C.sortObjects=this.sortObjects,C.drawRanges=this._drawRanges,C.reservedRanges=this._reservedRanges,C.visibility=this._visibility,C.active=this._active,C.bounds=this._bounds.map(i=>({boxInitialized:i.boxInitialized,boxMin:i.box.min.toArray(),boxMax:i.box.max.toArray(),sphereInitialized:i.sphereInitialized,sphereRadius:i.sphere.radius,sphereCenter:i.sphere.center.toArray()})),C.maxInstanceCount=this._maxInstanceCount,C.maxVertexCount=this._maxVertexCount,C.maxIndexCount=this._maxIndexCount,C.geometryInitialized=this._geometryInitialized,C.geometryCount=this._geometryCount,C.matricesTexture=this._matricesTexture.toJSON(A),this._colorsTexture!==null&&(C.colorsTexture=this._colorsTexture.toJSON(A)),this.boundingSphere!==null&&(C.boundingSphere={center:C.boundingSphere.center.toArray(),radius:C.boundingSphere.radius}),this.boundingBox!==null&&(C.boundingBox={min:C.boundingBox.min.toArray(),max:C.boundingBox.max.toArray()}));function Q(i,o){return i[o.uuid]===void 0&&(i[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const o=i.shapes;if(Array.isArray(o))for(let e=0,t=o.length;e<t;e++){const a=o[e];Q(A.shapes,a)}else Q(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let o=0,e=this.material.length;o<e;o++)i.push(Q(A.materials,this.material[o]));C.material=i}else C.material=Q(A.materials,this.material);if(this.children.length>0){C.children=[];for(let i=0;i<this.children.length;i++)C.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let i=0;i<this.animations.length;i++){const o=this.animations[i];C.animations.push(Q(A.animations,o))}}if(I){const i=E(A.geometries),o=E(A.materials),e=E(A.textures),t=E(A.images),a=E(A.shapes),s=E(A.skeletons),h=E(A.animations),S=E(A.nodes);i.length>0&&(g.geometries=i),o.length>0&&(g.materials=o),e.length>0&&(g.textures=e),t.length>0&&(g.images=t),a.length>0&&(g.shapes=a),s.length>0&&(g.skeletons=s),h.length>0&&(g.animations=h),S.length>0&&(g.nodes=S)}return g.object=C,g;function E(i){const o=[];for(const e in i){const t=i[e];delete t.metadata,o.push(t)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.animations=A.animations.slice(),this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}iI.DEFAULT_UP=new q(0,1,0),iI.DEFAULT_MATRIX_AUTO_UPDATE=!0,iI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const lg=new q,Wg=new q,bi=new q,Pg=new q,tB=new q,aB=new q,it=new q,Oi=new q,vi=new q,_i=new q;class Jg{constructor(A=new q,I=new q,g=new q){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),lg.subVectors(A,I),C.cross(lg);const Q=C.lengthSq();return Q>0?C.multiplyScalar(1/Math.sqrt(Q)):C.set(0,0,0)}static getBarycoord(A,I,g,C,Q){lg.subVectors(C,I),Wg.subVectors(g,I),bi.subVectors(A,I);const E=lg.dot(lg),i=lg.dot(Wg),o=lg.dot(bi),e=Wg.dot(Wg),t=Wg.dot(bi),a=E*e-i*i;if(a===0)return Q.set(0,0,0),null;const s=1/a,h=(e*o-i*t)*s,S=(E*t-i*o)*s;return Q.set(1-h-S,S,h)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,Pg)===null?!1:Pg.x>=0&&Pg.y>=0&&Pg.x+Pg.y<=1}static getInterpolation(A,I,g,C,Q,E,i,o){return this.getBarycoord(A,I,g,C,Pg)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(Q,Pg.x),o.addScaledVector(E,Pg.y),o.addScaledVector(i,Pg.z),o)}static isFrontFacing(A,I,g,C){return lg.subVectors(g,I),Wg.subVectors(A,I),lg.cross(Wg).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return lg.subVectors(this.c,this.b),Wg.subVectors(this.a,this.b),lg.cross(Wg).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Jg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return Jg.getBarycoord(A,this.a,this.b,this.c,I)}getInterpolation(A,I,g,C,Q){return Jg.getInterpolation(A,this.a,this.b,this.c,I,g,C,Q)}containsPoint(A){return Jg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Jg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,Q=this.c;let E,i;tB.subVectors(C,g),aB.subVectors(Q,g),Oi.subVectors(A,g);const o=tB.dot(Oi),e=aB.dot(Oi);if(o<=0&&e<=0)return I.copy(g);vi.subVectors(A,C);const t=tB.dot(vi),a=aB.dot(vi);if(t>=0&&a<=t)return I.copy(C);const s=o*a-t*e;if(s<=0&&o>=0&&t<=0)return E=o/(o-t),I.copy(g).addScaledVector(tB,E);_i.subVectors(A,Q);const h=tB.dot(_i),S=aB.dot(_i);if(S>=0&&h<=S)return I.copy(Q);const w=h*e-o*S;if(w<=0&&e>=0&&S<=0)return i=e/(e-S),I.copy(g).addScaledVector(aB,i);const n=t*S-h*a;if(n<=0&&a-t>=0&&h-S>=0)return it.subVectors(Q,C),i=(a-t)/(a-t+(h-S)),I.copy(C).addScaledVector(it,i);const r=1/(n+w+s);return E=w*r,i=s*r,I.copy(g).addScaledVector(tB,E).addScaledVector(aB,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}const ot={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sC={h:0,s:0,l:0},VQ={h:0,s:0,l:0};function Zi(B,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?B+(A-B)*6*I:I<1/2?A:I<2/3?B+(A-B)*6*(2/3-I):B}class KA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(A,I,g)}set(A,I,g){if(I===void 0&&g===void 0){const C=A;C&&C.isColor?this.copy(C):typeof C=="number"?this.setHex(C):typeof C=="string"&&this.setStyle(C)}else this.setRGB(A,I,g);return this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=xI){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,XA.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=XA.workingColorSpace){return this.r=A,this.g=I,this.b=g,XA.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=XA.workingColorSpace){if(A=pi(A,1),I=bI(I,0,1),g=bI(g,0,1),I===0)this.r=this.g=this.b=g;else{const Q=g<=.5?g*(1+I):g+I-g*I,E=2*g-Q;this.r=Zi(E,Q,A+1/3),this.g=Zi(E,Q,A),this.b=Zi(E,Q,A-1/3)}return XA.toWorkingColorSpace(this,C),this}setStyle(A,I=xI){function g(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const E=C[1],i=C[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(255,parseInt(Q[1],10))/255,Math.min(255,parseInt(Q[2],10))/255,Math.min(255,parseInt(Q[3],10))/255,I);if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setRGB(Math.min(100,parseInt(Q[1],10))/100,Math.min(100,parseInt(Q[2],10))/100,Math.min(100,parseInt(Q[3],10))/100,I);break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return g(Q[4]),this.setHSL(parseFloat(Q[1])/360,parseFloat(Q[2])/100,parseFloat(Q[3])/100,I);break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=C[1],E=Q.length;if(E===3)return this.setRGB(parseInt(Q.charAt(0),16)/15,parseInt(Q.charAt(1),16)/15,parseInt(Q.charAt(2),16)/15,I);if(E===6)return this.setHex(parseInt(Q,16),I);console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=xI){const g=ot[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=gB(A.r),this.g=gB(A.g),this.b=gB(A.b),this}copyLinearToSRGB(A){return this.r=qi(A.r),this.g=qi(A.g),this.b=qi(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=xI){return XA.fromWorkingColorSpace(WI.copy(this),A),Math.round(bI(WI.r*255,0,255))*65536+Math.round(bI(WI.g*255,0,255))*256+Math.round(bI(WI.b*255,0,255))}getHexString(A=xI){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=XA.workingColorSpace){XA.fromWorkingColorSpace(WI.copy(this),I);const g=WI.r,C=WI.g,Q=WI.b,E=Math.max(g,C,Q),i=Math.min(g,C,Q);let o,e;const t=(i+E)/2;if(i===E)o=0,e=0;else{const a=E-i;switch(e=t<=.5?a/(E+i):a/(2-E-i),E){case g:o=(C-Q)/a+(C<Q?6:0);break;case C:o=(Q-g)/a+2;break;case Q:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=e,A.l=t,A}getRGB(A,I=XA.workingColorSpace){return XA.fromWorkingColorSpace(WI.copy(this),I),A.r=WI.r,A.g=WI.g,A.b=WI.b,A}getStyle(A=xI){XA.fromWorkingColorSpace(WI.copy(this),A);const I=WI.r,g=WI.g,C=WI.b;return A!==xI?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${Math.round(I*255)},${Math.round(g*255)},${Math.round(C*255)})`}offsetHSL(A,I,g){return this.getHSL(sC),this.setHSL(sC.h+A,sC.s+I,sC.l+g)}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(sC),A.getHSL(VQ);const g=xB(sC.h,VQ.h,I),C=xB(sC.s,VQ.s,I),Q=xB(sC.l,VQ.l,I);return this.setHSL(g,C,Q),this}setFromVector3(A){return this.r=A.x,this.g=A.y,this.b=A.z,this}applyMatrix3(A){const I=this.r,g=this.g,C=this.b,Q=A.elements;return this.r=Q[0]*I+Q[3]*g+Q[6]*C,this.g=Q[1]*I+Q[4]*g+Q[7]*C,this.b=Q[2]*I+Q[5]*g+Q[8]*C,this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const WI=new KA;KA.NAMES=ot;let Yh=0;class Gg extends MC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=ng(),this.name="",this.type="Material",this.blending=_C,this.side=Tg,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bE,this.blendDst=OE,this.blendEquation=kC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new KA(0,0,0),this.blendAlpha=0,this.depthFunc=NQ,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=be,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$C,this.stencilZFail=$C,this.stencilZPass=$C,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn(`THREE.Material: parameter '${I}' has value of undefined.`);continue}const C=this[I];if(C===void 0){console.warn(`THREE.Material: '${I}' is not a property of THREE.${this.type}.`);continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(g.dispersion=this.dispersion),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.anisotropy!==void 0&&(g.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(g.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(g.anisotropyMap=this.anisotropyMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapRotation!==void 0&&(g.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==_C&&(g.blending=this.blending),this.side!==Tg&&(g.side=this.side),this.vertexColors===!0&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=!0),this.blendSrc!==bE&&(g.blendSrc=this.blendSrc),this.blendDst!==OE&&(g.blendDst=this.blendDst),this.blendEquation!==kC&&(g.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(g.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(g.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(g.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(g.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(g.blendAlpha=this.blendAlpha),this.depthFunc!==NQ&&(g.depthFunc=this.depthFunc),this.depthTest===!1&&(g.depthTest=this.depthTest),this.depthWrite===!1&&(g.depthWrite=this.depthWrite),this.colorWrite===!1&&(g.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(g.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==be&&(g.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(g.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(g.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$C&&(g.stencilFail=this.stencilFail),this.stencilZFail!==$C&&(g.stencilZFail=this.stencilZFail),this.stencilZPass!==$C&&(g.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(g.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaHash===!0&&(g.alphaHash=!0),this.alphaToCoverage===!0&&(g.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=!0),this.forceSinglePass===!0&&(g.forceSinglePass=!0),this.wireframe===!0&&(g.wireframe=!0),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=!0),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(Q){const E=[];for(const i in Q){const o=Q[i];delete o.metadata,E.push(o)}return E}if(I){const Q=C(A.textures),E=C(A.images);Q.length>0&&(g.textures=Q),E.length>0&&(g.images=E)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.blendColor.copy(A.blendColor),this.blendAlpha=A.blendAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let Q=0;Q!==C;++Q)g[Q]=I[Q].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaHash=A.alphaHash,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class DC extends Gg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new KA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jI,this.combine=vE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.envMapRotation.copy(A.envMapRotation),this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const jg=Lh();function Lh(){const B=new ArrayBuffer(4),A=new Float32Array(B),I=new Uint32Array(B),g=new Uint32Array(512),C=new Uint32Array(512);for(let o=0;o<256;++o){const e=o-127;e<-27?(g[o]=0,g[o|256]=32768,C[o]=24,C[o|256]=24):e<-14?(g[o]=1024>>-e-14,g[o|256]=1024>>-e-14|32768,C[o]=-e-1,C[o|256]=-e-1):e<=15?(g[o]=e+15<<10,g[o|256]=e+15<<10|32768,C[o]=13,C[o|256]=13):e<128?(g[o]=31744,g[o|256]=64512,C[o]=24,C[o|256]=24):(g[o]=31744,g[o|256]=64512,C[o]=13,C[o|256]=13)}const Q=new Uint32Array(2048),E=new Uint32Array(64),i=new Uint32Array(64);for(let o=1;o<1024;++o){let e=o<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,Q[o]=e|t}for(let o=1024;o<2048;++o)Q[o]=939524096+(o-1024<<13);for(let o=1;o<31;++o)E[o]=o<<23;E[31]=1199570944,E[32]=2147483648;for(let o=33;o<63;++o)E[o]=2147483648+(o-32<<23);E[63]=3347054592;for(let o=1;o<64;++o)o!==32&&(i[o]=1024);return{floatView:A,uint32View:I,baseTable:g,shiftTable:C,mantissaTable:Q,exponentTable:E,offsetTable:i}}function uh(B){Math.abs(B)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),B=bI(B,-65504,65504),jg.floatView[0]=B;const A=jg.uint32View[0],I=A>>23&511;return jg.baseTable[I]+((A&8388607)>>jg.shiftTable[I])}function Hh(B){const A=B>>10;return jg.uint32View[0]=jg.mantissaTable[jg.offsetTable[A]+(B&1023)]+jg.exponentTable[A],jg.floatView[0]}const XQ={toHalfFloat:uh,fromHalfFloat:Hh},GI=new q,zQ=new pA;class pI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=Ri,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cg,this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}get updateRange(){return IB("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(A){return this.usage=A,this}addUpdateRange(A,I){this.updateRanges.push({start:A,count:I})}clearUpdateRanges(){this.updateRanges.length=0}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this.gpuType=A.gpuType,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,Q=this.itemSize;C<Q;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)zQ.fromBufferAttribute(this,I),zQ.applyMatrix3(A),this.setXY(I,zQ.x,zQ.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)GI.fromBufferAttribute(this,I),GI.applyMatrix3(A),this.setXYZ(I,GI.x,GI.y,GI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)GI.fromBufferAttribute(this,I),GI.applyMatrix4(A),this.setXYZ(I,GI.x,GI.y,GI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)GI.fromBufferAttribute(this,I),GI.applyNormalMatrix(A),this.setXYZ(I,GI.x,GI.y,GI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)GI.fromBufferAttribute(this,I),GI.transformDirection(A),this.setXYZ(I,GI.x,GI.y,GI.z);return this}set(A,I=0){return this.array.set(A,I),this}getComponent(A,I){let g=this.array[A*this.itemSize+I];return this.normalized&&(g=Sg(g,this.array)),g}setComponent(A,I,g){return this.normalized&&(g=II(g,this.array)),this.array[A*this.itemSize+I]=g,this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=Sg(I,this.array)),I}setX(A,I){return this.normalized&&(I=II(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=Sg(I,this.array)),I}setY(A,I){return this.normalized&&(I=II(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=Sg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=II(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=Sg(I,this.array)),I}setW(A,I){return this.normalized&&(I=II(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=II(I,this.array),g=II(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=II(I,this.array),g=II(g,this.array),C=II(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,Q){return A*=this.itemSize,this.normalized&&(I=II(I,this.array),g=II(g,this.array),C=II(C,this.array),Q=II(Q,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==Ri&&(A.usage=this.usage),A}}class et extends pI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class tt extends pI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class VI extends pI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let mh=0;const tg=new uA,Wi=new iI,sB=new q,Qg=new Og,WB=new Og,mI=new q;class XI extends MC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=ng(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Ze(A)?tt:et)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const Q=new TA().getNormalMatrix(A);g.applyNormalMatrix(Q),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return tg.makeRotationFromQuaternion(A),this.applyMatrix4(tg),this}rotateX(A){return tg.makeRotationX(A),this.applyMatrix4(tg),this}rotateY(A){return tg.makeRotationY(A),this.applyMatrix4(tg),this}rotateZ(A){return tg.makeRotationZ(A),this.applyMatrix4(tg),this}translate(A,I,g){return tg.makeTranslation(A,I,g),this.applyMatrix4(tg),this}scale(A,I,g){return tg.makeScale(A,I,g),this.applyMatrix4(tg),this}lookAt(A){return Wi.lookAt(A),Wi.updateMatrix(),this.applyMatrix4(Wi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sB).negate(),this.translate(sB.x,sB.y,sB.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const Q=A[g];I.push(Q.x,Q.y,Q.z||0)}return this.setAttribute("position",new VI(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Og);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const Q=I[g];Qg.setFromBufferAttribute(Q),this.morphTargetsRelative?(mI.addVectors(this.boundingBox.min,Qg.min),this.boundingBox.expandByPoint(mI),mI.addVectors(this.boundingBox.max,Qg.max),this.boundingBox.expandByPoint(mI)):(this.boundingBox.expandByPoint(Qg.min),this.boundingBox.expandByPoint(Qg.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kg);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(A){const g=this.boundingSphere.center;if(Qg.setFromBufferAttribute(A),I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q];WB.setFromBufferAttribute(i),this.morphTargetsRelative?(mI.addVectors(Qg.min,WB.min),Qg.expandByPoint(mI),mI.addVectors(Qg.max,WB.max),Qg.expandByPoint(mI)):(Qg.expandByPoint(WB.min),Qg.expandByPoint(WB.max))}Qg.getCenter(g);let C=0;for(let Q=0,E=A.count;Q<E;Q++)mI.fromBufferAttribute(A,Q),C=Math.max(C,g.distanceToSquared(mI));if(I)for(let Q=0,E=I.length;Q<E;Q++){const i=I[Q],o=this.morphTargetsRelative;for(let e=0,t=i.count;e<t;e++)mI.fromBufferAttribute(i,e),o&&(sB.fromBufferAttribute(A,e),mI.add(sB)),C=Math.max(C,g.distanceToSquared(mI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=I.position,C=I.normal,Q=I.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pI(new Float32Array(4*g.count),4));const E=this.getAttribute("tangent"),i=[],o=[];for(let d=0;d<g.count;d++)i[d]=new q,o[d]=new q;const e=new q,t=new q,a=new q,s=new pA,h=new pA,S=new pA,w=new q,n=new q;function r(d,y,G){e.fromBufferAttribute(g,d),t.fromBufferAttribute(g,y),a.fromBufferAttribute(g,G),s.fromBufferAttribute(Q,d),h.fromBufferAttribute(Q,y),S.fromBufferAttribute(Q,G),t.sub(e),a.sub(e),h.sub(s),S.sub(s);const p=1/(h.x*S.y-S.x*h.y);isFinite(p)&&(w.copy(t).multiplyScalar(S.y).addScaledVector(a,-h.y).multiplyScalar(p),n.copy(a).multiplyScalar(h.x).addScaledVector(t,-S.x).multiplyScalar(p),i[d].add(w),i[y].add(w),i[G].add(w),o[d].add(n),o[y].add(n),o[G].add(n))}let l=this.groups;l.length===0&&(l=[{start:0,count:A.count}]);for(let d=0,y=l.length;d<y;++d){const G=l[d],p=G.start,T=G.count;for(let x=p,Z=p+T;x<Z;x+=3)r(A.getX(x+0),A.getX(x+1),A.getX(x+2))}const c=new q,M=new q,Y=new q,K=new q;function N(d){Y.fromBufferAttribute(C,d),K.copy(Y);const y=i[d];c.copy(y),c.sub(Y.multiplyScalar(Y.dot(y))).normalize(),M.crossVectors(K,y);const G=M.dot(o[d])<0?-1:1;E.setXYZW(d,c.x,c.y,c.z,G)}for(let d=0,y=l.length;d<y;++d){const G=l[d],p=G.start,T=G.count;for(let x=p,Z=p+T;x<Z;x+=3)N(A.getX(x+0)),N(A.getX(x+1)),N(A.getX(x+2))}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new pI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let s=0,h=g.count;s<h;s++)g.setXYZ(s,0,0,0);const C=new q,Q=new q,E=new q,i=new q,o=new q,e=new q,t=new q,a=new q;if(A)for(let s=0,h=A.count;s<h;s+=3){const S=A.getX(s+0),w=A.getX(s+1),n=A.getX(s+2);C.fromBufferAttribute(I,S),Q.fromBufferAttribute(I,w),E.fromBufferAttribute(I,n),t.subVectors(E,Q),a.subVectors(C,Q),t.cross(a),i.fromBufferAttribute(g,S),o.fromBufferAttribute(g,w),e.fromBufferAttribute(g,n),i.add(t),o.add(t),e.add(t),g.setXYZ(S,i.x,i.y,i.z),g.setXYZ(w,o.x,o.y,o.z),g.setXYZ(n,e.x,e.y,e.z)}else for(let s=0,h=I.count;s<h;s+=3)C.fromBufferAttribute(I,s+0),Q.fromBufferAttribute(I,s+1),E.fromBufferAttribute(I,s+2),t.subVectors(E,Q),a.subVectors(C,Q),t.cross(a),g.setXYZ(s+0,t.x,t.y,t.z),g.setXYZ(s+1,t.x,t.y,t.z),g.setXYZ(s+2,t.x,t.y,t.z);this.normalizeNormals(),g.needsUpdate=!0}}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)mI.fromBufferAttribute(A,I),mI.normalize(),A.setXYZ(I,mI.x,mI.y,mI.z)}toNonIndexed(){function A(i,o){const e=i.array,t=i.itemSize,a=i.normalized,s=new e.constructor(o.length*t);let h=0,S=0;for(let w=0,n=o.length;w<n;w++){i.isInterleavedBufferAttribute?h=o[w]*i.data.stride+i.offset:h=o[w]*t;for(let r=0;r<t;r++)s[S++]=e[h++]}return new pI(s,t,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new XI,g=this.index.array,C=this.attributes;for(const i in C){const o=C[i],e=A(o,g);I.setAttribute(i,e)}const Q=this.morphAttributes;for(const i in Q){const o=[],e=Q[i];for(let t=0,a=e.length;t<a;t++){const s=e[t],h=A(s,g);o.push(h)}I.morphAttributes[i]=o}I.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,o=E.length;i<o;i++){const e=E[i];I.addGroup(e.start,e.count,e.materialIndex)}return I}toJSON(){const A={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const e in o)o[e]!==void 0&&(A[e]=o[e]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const e=g[o];A.data.attributes[o]=e.toJSON(A.data)}const C={};let Q=!1;for(const o in this.morphAttributes){const e=this.morphAttributes[o],t=[];for(let a=0,s=e.length;a<s;a++){const h=e[a];t.push(h.toJSON(A.data))}t.length>0&&(C[o]=t,Q=!0)}Q&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const e in C){const t=C[e];this.setAttribute(e,t.clone(I))}const Q=A.morphAttributes;for(const e in Q){const t=[],a=Q[e];for(let s=0,h=a.length;s<h;s++)t.push(a[s].clone(I));this.morphAttributes[e]=t}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let e=0,t=E.length;e<t;e++){const a=E[e];this.addGroup(a.start,a.count,a.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const at=new uA,FC=new WQ,$Q=new Kg,st=new q,DB=new q,hB=new q,rB=new q,Pi=new q,AE=new q,IE=new pA,gE=new pA,CE=new pA,Dt=new q,ht=new q,rt=new q,BE=new q,QE=new q;class SI extends iI{constructor(A=new XI,I=new DC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=Array.isArray(A.material)?A.material.slice():A.material,this.geometry=A.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,I=Object.keys(A);if(I.length>0){const g=A[I[0]];if(g!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let C=0,Q=g.length;C<Q;C++){const E=g[C].name||String(C);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=C}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,Q=g.morphAttributes.position,E=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const i=this.morphTargetInfluences;if(Q&&i){AE.set(0,0,0);for(let o=0,e=Q.length;o<e;o++){const t=i[o],a=Q[o];t!==0&&(Pi.fromBufferAttribute(a,A),E?AE.addScaledVector(Pi,t):AE.addScaledVector(Pi.sub(I),t))}I.add(AE)}return I}raycast(A,I){const g=this.geometry,C=this.material,Q=this.matrixWorld;C!==void 0&&(g.boundingSphere===null&&g.computeBoundingSphere(),$Q.copy(g.boundingSphere),$Q.applyMatrix4(Q),FC.copy(A.ray).recast(A.near),!($Q.containsPoint(FC.origin)===!1&&(FC.intersectSphere($Q,st)===null||FC.origin.distanceToSquared(st)>(A.far-A.near)**2))&&(at.copy(Q).invert(),FC.copy(A.ray).applyMatrix4(at),!(g.boundingBox!==null&&FC.intersectsBox(g.boundingBox)===!1)&&this._computeIntersections(A,I,FC)))}_computeIntersections(A,I,g){let C;const Q=this.geometry,E=this.material,i=Q.index,o=Q.attributes.position,e=Q.attributes.uv,t=Q.attributes.uv1,a=Q.attributes.normal,s=Q.groups,h=Q.drawRange;if(i!==null)if(Array.isArray(E))for(let S=0,w=s.length;S<w;S++){const n=s[S],r=E[n.materialIndex],l=Math.max(n.start,h.start),c=Math.min(i.count,Math.min(n.start+n.count,h.start+h.count));for(let M=l,Y=c;M<Y;M+=3){const K=i.getX(M),N=i.getX(M+1),d=i.getX(M+2);C=EE(this,r,A,g,e,t,a,K,N,d),C&&(C.faceIndex=Math.floor(M/3),C.face.materialIndex=n.materialIndex,I.push(C))}}else{const S=Math.max(0,h.start),w=Math.min(i.count,h.start+h.count);for(let n=S,r=w;n<r;n+=3){const l=i.getX(n),c=i.getX(n+1),M=i.getX(n+2);C=EE(this,E,A,g,e,t,a,l,c,M),C&&(C.faceIndex=Math.floor(n/3),I.push(C))}}else if(o!==void 0)if(Array.isArray(E))for(let S=0,w=s.length;S<w;S++){const n=s[S],r=E[n.materialIndex],l=Math.max(n.start,h.start),c=Math.min(o.count,Math.min(n.start+n.count,h.start+h.count));for(let M=l,Y=c;M<Y;M+=3){const K=M,N=M+1,d=M+2;C=EE(this,r,A,g,e,t,a,K,N,d),C&&(C.faceIndex=Math.floor(M/3),C.face.materialIndex=n.materialIndex,I.push(C))}}else{const S=Math.max(0,h.start),w=Math.min(o.count,h.start+h.count);for(let n=S,r=w;n<r;n+=3){const l=n,c=n+1,M=n+2;C=EE(this,E,A,g,e,t,a,l,c,M),C&&(C.faceIndex=Math.floor(n/3),I.push(C))}}}}function fh(B,A,I,g,C,Q,E,i){let o;if(A.side===gg?o=g.intersectTriangle(E,Q,C,!0,i):o=g.intersectTriangle(C,Q,E,A.side===Tg,i),o===null)return null;QE.copy(i),QE.applyMatrix4(B.matrixWorld);const e=I.ray.origin.distanceTo(QE);return e<I.near||e>I.far?null:{distance:e,point:QE.clone(),object:B}}function EE(B,A,I,g,C,Q,E,i,o,e){B.getVertexPosition(i,DB),B.getVertexPosition(o,hB),B.getVertexPosition(e,rB);const t=fh(B,A,I,g,DB,hB,rB,BE);if(t){C&&(IE.fromBufferAttribute(C,i),gE.fromBufferAttribute(C,o),CE.fromBufferAttribute(C,e),t.uv=Jg.getInterpolation(BE,DB,hB,rB,IE,gE,CE,new pA)),Q&&(IE.fromBufferAttribute(Q,i),gE.fromBufferAttribute(Q,o),CE.fromBufferAttribute(Q,e),t.uv1=Jg.getInterpolation(BE,DB,hB,rB,IE,gE,CE,new pA)),E&&(Dt.fromBufferAttribute(E,i),ht.fromBufferAttribute(E,o),rt.fromBufferAttribute(E,e),t.normal=Jg.getInterpolation(BE,DB,hB,rB,Dt,ht,rt,new q),t.normal.dot(g.direction)>0&&t.normal.multiplyScalar(-1));const a={a:i,b:o,c:e,normal:new q,materialIndex:0};Jg.getNormal(DB,hB,rB,a.normal),t.face=a}return t}class nB extends XI{constructor(A=1,I=1,g=1,C=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:Q,depthSegments:E};const i=this;C=Math.floor(C),Q=Math.floor(Q),E=Math.floor(E);const o=[],e=[],t=[],a=[];let s=0,h=0;S("z","y","x",-1,-1,g,I,A,E,Q,0),S("z","y","x",1,-1,g,I,-A,E,Q,1),S("x","z","y",1,1,A,g,I,C,E,2),S("x","z","y",1,-1,A,g,-I,C,E,3),S("x","y","z",1,-1,A,I,g,C,Q,4),S("x","y","z",-1,-1,A,I,-g,C,Q,5),this.setIndex(o),this.setAttribute("position",new VI(e,3)),this.setAttribute("normal",new VI(t,3)),this.setAttribute("uv",new VI(a,2));function S(w,n,r,l,c,M,Y,K,N,d,y){const G=M/N,p=Y/d,T=M/2,x=Y/2,Z=K/2,V=N+1,_=d+1;let z=0,W=0;const iA=new q;for(let lA=0;lA<_;lA++){const FA=lA*p-x;for(let jA=0;jA<V;jA++){const QI=jA*G-T;iA[w]=QI*l,iA[n]=FA*c,iA[r]=Z,e.push(iA.x,iA.y,iA.z),iA[w]=0,iA[n]=0,iA[r]=K>0?1:-1,t.push(iA.x,iA.y,iA.z),a.push(jA/N),a.push(1-lA/d),z+=1}}for(let lA=0;lA<d;lA++)for(let FA=0;FA<N;FA++){const jA=s+FA+V*lA,QI=s+FA+V*(lA+1),P=s+(FA+1)+V*(lA+1),CA=s+(FA+1)+V*lA;o.push(jA,QI,CA),o.push(QI,P,CA),W+=6}i.addGroup(h,W,y),h+=W,s+=z}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new nB(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function SB(B){const A={};for(const I in B){A[I]={};for(const g in B[I]){const C=B[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?C.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),A[I][g]=null):A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function zI(B){const A={};for(let I=0;I<B.length;I++){const g=SB(B[I]);for(const C in g)A[C]=g[C]}return A}function Th(B){const A=[];for(let I=0;I<B.length;I++)A.push(B[I].clone());return A}function nt(B){const A=B.getRenderTarget();return A===null?B.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:XA.workingColorSpace}const xh={clone:SB,merge:zI};var bh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vg extends Gg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bh,this.fragmentShader=Oh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=SB(A.uniforms),this.uniformsGroups=Th(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const Q=this.uniforms[C].value;Q&&Q.isTexture?I.uniforms[C]={type:"t",value:Q.toJSON(A).uuid}:Q&&Q.isColor?I.uniforms[C]={type:"c",value:Q.getHex()}:Q&&Q.isVector2?I.uniforms[C]={type:"v2",value:Q.toArray()}:Q&&Q.isVector3?I.uniforms[C]={type:"v3",value:Q.toArray()}:Q&&Q.isVector4?I.uniforms[C]={type:"v4",value:Q.toArray()}:Q&&Q.isMatrix3?I.uniforms[C]={type:"m3",value:Q.toArray()}:Q&&Q.isMatrix4?I.uniforms[C]={type:"m4",value:Q.toArray()}:I.uniforms[C]={value:Q}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader,I.lights=this.lights,I.clipping=this.clipping;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class St extends iI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new uA,this.projectionMatrix=new uA,this.projectionMatrixInverse=new uA,this.coordinateSystem=bg}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this.coordinateSystem=A.coordinateSystem,this}getWorldDirection(A){return super.getWorldDirection(A).negate()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hC=new q,wt=new pA,ct=new pA;class $I extends St{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=AB*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(TB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return AB*2*Math.atan(Math.tan(TB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(A,I,g){hC.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),I.set(hC.x,hC.y).multiplyScalar(-A/hC.z),hC.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(hC.x,hC.y).multiplyScalar(-A/hC.z)}getViewSize(A,I){return this.getViewBounds(A,wt,ct),I.subVectors(ct,wt)}setViewOffset(A,I,g,C,Q,E){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(TB*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,Q=-.5*C;const E=this.view;if(this.view!==null&&this.view.enabled){const o=E.fullWidth,e=E.fullHeight;Q+=E.offsetX*C/o,I-=E.offsetY*g/e,C*=E.width/o,g*=E.height/e}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+C,I,I-g,A,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const wB=-90,cB=1;class vh extends iI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g,this.coordinateSystem=null,this.activeMipmapLevel=0;const C=new $I(wB,cB,A,I);C.layers=this.layers,this.add(C);const Q=new $I(wB,cB,A,I);Q.layers=this.layers,this.add(Q);const E=new $I(wB,cB,A,I);E.layers=this.layers,this.add(E);const i=new $I(wB,cB,A,I);i.layers=this.layers,this.add(i);const o=new $I(wB,cB,A,I);o.layers=this.layers,this.add(o);const e=new $I(wB,cB,A,I);e.layers=this.layers,this.add(e)}updateCoordinateSystem(){const A=this.coordinateSystem,I=this.children.concat(),[g,C,Q,E,i,o]=I;for(const e of I)this.remove(e);if(A===bg)g.up.set(0,1,0),g.lookAt(1,0,0),C.up.set(0,1,0),C.lookAt(-1,0,0),Q.up.set(0,0,-1),Q.lookAt(0,1,0),E.up.set(0,0,1),E.lookAt(0,-1,0),i.up.set(0,1,0),i.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(A===xQ)g.up.set(0,-1,0),g.lookAt(-1,0,0),C.up.set(0,-1,0),C.lookAt(1,0,0),Q.up.set(0,0,1),Q.lookAt(0,1,0),E.up.set(0,0,-1),E.lookAt(0,-1,0),i.up.set(0,-1,0),i.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+A);for(const e of I)this.add(e),e.updateMatrixWorld()}update(A,I){this.parent===null&&this.updateMatrixWorld();const{renderTarget:g,activeMipmapLevel:C}=this;this.coordinateSystem!==A.coordinateSystem&&(this.coordinateSystem=A.coordinateSystem,this.updateCoordinateSystem());const[Q,E,i,o,e,t]=this.children,a=A.getRenderTarget(),s=A.getActiveCubeFace(),h=A.getActiveMipmapLevel(),S=A.xr.enabled;A.xr.enabled=!1;const w=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0,C),A.render(I,Q),A.setRenderTarget(g,1,C),A.render(I,E),A.setRenderTarget(g,2,C),A.render(I,i),A.setRenderTarget(g,3,C),A.render(I,o),A.setRenderTarget(g,4,C),A.render(I,e),g.texture.generateMipmaps=w,A.setRenderTarget(g,5,C),A.render(I,t),A.setRenderTarget(a,s,h),A.xr.enabled=S,g.texture.needsPMREMUpdate=!0}}class lt extends RI{constructor(A,I,g,C,Q,E,i,o,e,t){A=A!==void 0?A:[],I=I!==void 0?I:ZC,super(A,I,g,C,Q,E,i,o,e,t),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class _h extends NC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new lt(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:uI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.colorSpace=I.colorSpace,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},C=new nB(5,5,5),Q=new Vg({name:"CubemapFromEquirect",uniforms:SB(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:gg,blending:QC});Q.uniforms.tEquirect.value=I;const E=new SI(C,Q),i=I.minFilter;return I.minFilter===Ng&&(I.minFilter=uI),new vh(1,10,this).update(A,E),I.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,I,g,C){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(I,g,C);A.setRenderTarget(Q)}}const ji=new q,Zh=new q,Wh=new TA;class RC{constructor(A=new q(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=ji.subVectors(g,I).cross(Zh.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(ji),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/C;return Q<0||Q>1?null:I.copy(A.start).addScaledVector(g,Q)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||Wh.getNormalMatrix(A),C=this.coplanarPoint(ji).applyMatrix4(A),Q=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pC=new Kg,iE=new q;class Vi{constructor(A=new RC,I=new RC,g=new RC,C=new RC,Q=new RC,E=new RC){this.planes=[A,I,g,C,Q,E]}set(A,I,g,C,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(I),i[2].copy(g),i[3].copy(C),i[4].copy(Q),i[5].copy(E),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A,I=bg){const g=this.planes,C=A.elements,Q=C[0],E=C[1],i=C[2],o=C[3],e=C[4],t=C[5],a=C[6],s=C[7],h=C[8],S=C[9],w=C[10],n=C[11],r=C[12],l=C[13],c=C[14],M=C[15];if(g[0].setComponents(o-Q,s-e,n-h,M-r).normalize(),g[1].setComponents(o+Q,s+e,n+h,M+r).normalize(),g[2].setComponents(o+E,s+t,n+S,M+l).normalize(),g[3].setComponents(o-E,s-t,n-S,M-l).normalize(),g[4].setComponents(o-i,s-a,n-w,M-c).normalize(),I===bg)g[5].setComponents(o+i,s+a,n+w,M+c).normalize();else if(I===xQ)g[5].setComponents(i,a,w,c).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+I);return this}intersectsObject(A){if(A.boundingSphere!==void 0)A.boundingSphere===null&&A.computeBoundingSphere(),pC.copy(A.boundingSphere).applyMatrix4(A.matrixWorld);else{const I=A.geometry;I.boundingSphere===null&&I.computeBoundingSphere(),pC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld)}return this.intersectsSphere(pC)}intersectsSprite(A){return pC.center.set(0,0,0),pC.radius=.7071067811865476,pC.applyMatrix4(A.matrixWorld),this.intersectsSphere(pC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let Q=0;Q<6;Q++)if(I[Q].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(iE.x=C.normal.x>0?A.max.x:A.min.x,iE.y=C.normal.y>0?A.max.y:A.min.y,iE.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(iE)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gt(){let B=null,A=!1,I=null,g=null;function C(Q,E){I(Q,E),g=B.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=B.requestAnimationFrame(C),A=!0)},stop:function(){B.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(Q){I=Q},setContext:function(Q){B=Q}}}function Ph(B){const A=new WeakMap;function I(i,o){const e=i.array,t=i.usage,a=e.byteLength,s=B.createBuffer();B.bindBuffer(o,s),B.bufferData(o,e,t),i.onUploadCallback();let h;if(e instanceof Float32Array)h=B.FLOAT;else if(e instanceof Uint16Array)i.isFloat16BufferAttribute?h=B.HALF_FLOAT:h=B.UNSIGNED_SHORT;else if(e instanceof Int16Array)h=B.SHORT;else if(e instanceof Uint32Array)h=B.UNSIGNED_INT;else if(e instanceof Int32Array)h=B.INT;else if(e instanceof Int8Array)h=B.BYTE;else if(e instanceof Uint8Array)h=B.UNSIGNED_BYTE;else if(e instanceof Uint8ClampedArray)h=B.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+e);return{buffer:s,type:h,bytesPerElement:e.BYTES_PER_ELEMENT,version:i.version,size:a}}function g(i,o,e){const t=o.array,a=o._updateRange,s=o.updateRanges;if(B.bindBuffer(e,i),a.count===-1&&s.length===0&&B.bufferSubData(e,0,t),s.length!==0){for(let h=0,S=s.length;h<S;h++){const w=s[h];B.bufferSubData(e,w.start*t.BYTES_PER_ELEMENT,t,w.start,w.count)}o.clearUpdateRanges()}a.count!==-1&&(B.bufferSubData(e,a.offset*t.BYTES_PER_ELEMENT,t,a.offset,a.count),a.count=-1),o.onUploadCallback()}function C(i){return i.isInterleavedBufferAttribute&&(i=i.data),A.get(i)}function Q(i){i.isInterleavedBufferAttribute&&(i=i.data);const o=A.get(i);o&&(B.deleteBuffer(o.buffer),A.delete(i))}function E(i,o){if(i.isInterleavedBufferAttribute&&(i=i.data),i.isGLBufferAttribute){const t=A.get(i);(!t||t.version<i.version)&&A.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version});return}const e=A.get(i);if(e===void 0)A.set(i,I(i,o));else if(e.version<i.version){if(e.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");g(e.buffer,i,o),e.version=i.version}}return{get:C,remove:Q,update:E}}class oE extends XI{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const Q=A/2,E=I/2,i=Math.floor(g),o=Math.floor(C),e=i+1,t=o+1,a=A/i,s=I/o,h=[],S=[],w=[],n=[];for(let r=0;r<t;r++){const l=r*s-E;for(let c=0;c<e;c++){const M=c*a-Q;S.push(M,-l,0),w.push(0,0,1),n.push(c/i),n.push(1-r/o)}}for(let r=0;r<o;r++)for(let l=0;l<i;l++){const c=l+e*r,M=l+e*(r+1),Y=l+1+e*(r+1),K=l+1+e*r;h.push(c,M,K),h.push(M,Y,K)}this.setIndex(h),this.setAttribute("position",new VI(S,3)),this.setAttribute("normal",new VI(w,3)),this.setAttribute("uv",new VI(n,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new oE(A.width,A.height,A.widthSegments,A.heightSegments)}}var jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vh=`#ifdef USE_ALPHAHASH
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
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ar=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ir=`#ifdef USE_AOMAP
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
#endif`,gr=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cr=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Br=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qr=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Er=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ir=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,or=`#ifdef USE_IRIDESCENCE
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
#endif`,er=`#ifdef USE_BUMPMAP
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
#endif`,tr=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ar=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sr=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dr=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hr=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nr=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sr=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wr=`#define PI 3.141592653589793
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
} // validated`,cr=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lr=`vec3 transformedNormal = objectNormal;
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
#endif`,Gr=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kr=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yr=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ur=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mr="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nr=`
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
}`,Kr=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Jr=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fr=`#ifdef USE_ENVMAP
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
#endif`,Rr=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pr=`#ifdef USE_ENVMAP
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
#endif`,dr=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qr=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yr=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lr=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ur=`#ifdef USE_GRADIENTMAP
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
}`,Hr=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mr=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fr=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tr=`uniform bool receiveShadow;
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
#endif`,xr=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,br=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Or=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vr=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_r=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zr=`PhysicalMaterial material;
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
#endif`,Wr=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
}`,Pr=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jr=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vr=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xr=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zr=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$r=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,An=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,In=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gn=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cn=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bn=`#if defined( USE_POINTS_UV )
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
#endif`,Qn=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,En=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,on=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,en=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tn=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,an=`#ifdef USE_MORPHTARGETS
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
#endif`,sn=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dn=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hn=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rn=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nn=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sn=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wn=`#ifdef USE_NORMALMAP
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
#endif`,cn=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ln=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gn=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kn=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yn=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Un=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Mn=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nn=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kn=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jn=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fn=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rn=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pn=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dn=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qn=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yn=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Ln=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,un=`#ifdef USE_SKINNING
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
#endif`,Hn=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mn=`#ifdef USE_SKINNING
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
#endif`,fn=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Tn=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xn=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bn=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,On=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vn=`#ifdef USE_TRANSMISSION
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
#endif`,_n=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wn=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pn=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jn=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vn=`uniform sampler2D t2D;
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
}`,Xn=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zn=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$n=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`#include <common>
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
}`,gS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CS=`#define DISTANCE
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
}`,BS=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ES=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`uniform float scale;
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
}`,oS=`uniform vec3 diffuse;
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
}`,eS=`#include <common>
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
}`,tS=`uniform vec3 diffuse;
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
}`,aS=`#define LAMBERT
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
}`,sS=`#define LAMBERT
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
}`,DS=`#define MATCAP
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
}`,hS=`#define MATCAP
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
}`,rS=`#define NORMAL
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
}`,nS=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SS=`#define PHONG
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
}`,wS=`#define PHONG
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
}`,cS=`#define STANDARD
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
}`,lS=`#define STANDARD
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
}`,GS=`#define TOON
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
}`,kS=`#define TOON
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
}`,yS=`uniform float size;
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
}`,US=`uniform vec3 diffuse;
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
}`,MS=`#include <common>
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
}`,NS=`uniform vec3 color;
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
}`,KS=`uniform float rotation;
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
}`,JS=`uniform vec3 diffuse;
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
}`,xA={alphahash_fragment:jh,alphahash_pars_fragment:Vh,alphamap_fragment:Xh,alphamap_pars_fragment:zh,alphatest_fragment:$h,alphatest_pars_fragment:Ar,aomap_fragment:Ir,aomap_pars_fragment:gr,batching_pars_vertex:Cr,batching_vertex:Br,begin_vertex:Qr,beginnormal_vertex:Er,bsdfs:ir,iridescence_fragment:or,bumpmap_pars_fragment:er,clipping_planes_fragment:tr,clipping_planes_pars_fragment:ar,clipping_planes_pars_vertex:sr,clipping_planes_vertex:Dr,color_fragment:hr,color_pars_fragment:rr,color_pars_vertex:nr,color_vertex:Sr,common:wr,cube_uv_reflection_fragment:cr,defaultnormal_vertex:lr,displacementmap_pars_vertex:Gr,displacementmap_vertex:kr,emissivemap_fragment:yr,emissivemap_pars_fragment:Ur,colorspace_fragment:Mr,colorspace_pars_fragment:Nr,envmap_fragment:Kr,envmap_common_pars_fragment:Jr,envmap_pars_fragment:Fr,envmap_pars_vertex:Rr,envmap_physical_pars_fragment:xr,envmap_vertex:pr,fog_vertex:dr,fog_pars_vertex:qr,fog_fragment:Yr,fog_pars_fragment:Lr,gradientmap_pars_fragment:ur,lightmap_pars_fragment:Hr,lights_lambert_fragment:mr,lights_lambert_pars_fragment:fr,lights_pars_begin:Tr,lights_toon_fragment:br,lights_toon_pars_fragment:Or,lights_phong_fragment:vr,lights_phong_pars_fragment:_r,lights_physical_fragment:Zr,lights_physical_pars_fragment:Wr,lights_fragment_begin:Pr,lights_fragment_maps:jr,lights_fragment_end:Vr,logdepthbuf_fragment:Xr,logdepthbuf_pars_fragment:zr,logdepthbuf_pars_vertex:$r,logdepthbuf_vertex:An,map_fragment:In,map_pars_fragment:gn,map_particle_fragment:Cn,map_particle_pars_fragment:Bn,metalnessmap_fragment:Qn,metalnessmap_pars_fragment:En,morphinstance_vertex:on,morphcolor_vertex:en,morphnormal_vertex:tn,morphtarget_pars_vertex:an,morphtarget_vertex:sn,normal_fragment_begin:Dn,normal_fragment_maps:hn,normal_pars_fragment:rn,normal_pars_vertex:nn,normal_vertex:Sn,normalmap_pars_fragment:wn,clearcoat_normal_fragment_begin:cn,clearcoat_normal_fragment_maps:ln,clearcoat_pars_fragment:Gn,iridescence_pars_fragment:kn,opaque_fragment:yn,packing:Un,premultiplied_alpha_fragment:Mn,project_vertex:Nn,dithering_fragment:Kn,dithering_pars_fragment:Jn,roughnessmap_fragment:Fn,roughnessmap_pars_fragment:Rn,shadowmap_pars_fragment:pn,shadowmap_pars_vertex:dn,shadowmap_vertex:qn,shadowmask_pars_fragment:Yn,skinbase_vertex:Ln,skinning_pars_vertex:un,skinning_vertex:Hn,skinnormal_vertex:mn,specularmap_fragment:fn,specularmap_pars_fragment:Tn,tonemapping_fragment:xn,tonemapping_pars_fragment:bn,transmission_fragment:On,transmission_pars_fragment:vn,uv_pars_fragment:_n,uv_pars_vertex:Zn,uv_vertex:Wn,worldpos_vertex:Pn,background_vert:jn,background_frag:Vn,backgroundCube_vert:Xn,backgroundCube_frag:zn,cube_vert:$n,cube_frag:AS,depth_vert:IS,depth_frag:gS,distanceRGBA_vert:CS,distanceRGBA_frag:BS,equirect_vert:QS,equirect_frag:ES,linedashed_vert:iS,linedashed_frag:oS,meshbasic_vert:eS,meshbasic_frag:tS,meshlambert_vert:aS,meshlambert_frag:sS,meshmatcap_vert:DS,meshmatcap_frag:hS,meshnormal_vert:rS,meshnormal_frag:nS,meshphong_vert:SS,meshphong_frag:wS,meshphysical_vert:cS,meshphysical_frag:lS,meshtoon_vert:GS,meshtoon_frag:kS,points_vert:yS,points_frag:US,shadow_vert:MS,shadow_frag:NS,sprite_vert:KS,sprite_frag:JS},oA={common:{diffuse:{value:new KA(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new TA},alphaMap:{value:null},alphaMapTransform:{value:new TA},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new TA}},envmap:{envMap:{value:null},envMapRotation:{value:new TA},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new TA}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new TA}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new TA},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new TA},normalScale:{value:new pA(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new TA},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new TA}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new TA}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new TA}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new KA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new KA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new TA},alphaTest:{value:0},uvTransform:{value:new TA}},sprite:{diffuse:{value:new KA(16777215)},opacity:{value:1},center:{value:new pA(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new TA},alphaMap:{value:null},alphaMapTransform:{value:new TA},alphaTest:{value:0}}},Fg={basic:{uniforms:zI([oA.common,oA.specularmap,oA.envmap,oA.aomap,oA.lightmap,oA.fog]),vertexShader:xA.meshbasic_vert,fragmentShader:xA.meshbasic_frag},lambert:{uniforms:zI([oA.common,oA.specularmap,oA.envmap,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.fog,oA.lights,{emissive:{value:new KA(0)}}]),vertexShader:xA.meshlambert_vert,fragmentShader:xA.meshlambert_frag},phong:{uniforms:zI([oA.common,oA.specularmap,oA.envmap,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.fog,oA.lights,{emissive:{value:new KA(0)},specular:{value:new KA(1118481)},shininess:{value:30}}]),vertexShader:xA.meshphong_vert,fragmentShader:xA.meshphong_frag},standard:{uniforms:zI([oA.common,oA.envmap,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.roughnessmap,oA.metalnessmap,oA.fog,oA.lights,{emissive:{value:new KA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xA.meshphysical_vert,fragmentShader:xA.meshphysical_frag},toon:{uniforms:zI([oA.common,oA.aomap,oA.lightmap,oA.emissivemap,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.gradientmap,oA.fog,oA.lights,{emissive:{value:new KA(0)}}]),vertexShader:xA.meshtoon_vert,fragmentShader:xA.meshtoon_frag},matcap:{uniforms:zI([oA.common,oA.bumpmap,oA.normalmap,oA.displacementmap,oA.fog,{matcap:{value:null}}]),vertexShader:xA.meshmatcap_vert,fragmentShader:xA.meshmatcap_frag},points:{uniforms:zI([oA.points,oA.fog]),vertexShader:xA.points_vert,fragmentShader:xA.points_frag},dashed:{uniforms:zI([oA.common,oA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xA.linedashed_vert,fragmentShader:xA.linedashed_frag},depth:{uniforms:zI([oA.common,oA.displacementmap]),vertexShader:xA.depth_vert,fragmentShader:xA.depth_frag},normal:{uniforms:zI([oA.common,oA.bumpmap,oA.normalmap,oA.displacementmap,{opacity:{value:1}}]),vertexShader:xA.meshnormal_vert,fragmentShader:xA.meshnormal_frag},sprite:{uniforms:zI([oA.sprite,oA.fog]),vertexShader:xA.sprite_vert,fragmentShader:xA.sprite_frag},background:{uniforms:{uvTransform:{value:new TA},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xA.background_vert,fragmentShader:xA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new TA}},vertexShader:xA.backgroundCube_vert,fragmentShader:xA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xA.cube_vert,fragmentShader:xA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xA.equirect_vert,fragmentShader:xA.equirect_frag},distanceRGBA:{uniforms:zI([oA.common,oA.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xA.distanceRGBA_vert,fragmentShader:xA.distanceRGBA_frag},shadow:{uniforms:zI([oA.lights,oA.fog,{color:{value:new KA(0)},opacity:{value:1}}]),vertexShader:xA.shadow_vert,fragmentShader:xA.shadow_frag}};Fg.physical={uniforms:zI([Fg.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new TA},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new TA},clearcoatNormalScale:{value:new pA(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new TA},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new TA},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new TA},sheen:{value:0},sheenColor:{value:new KA(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new TA},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new TA},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new TA},transmissionSamplerSize:{value:new pA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new TA},attenuationDistance:{value:0},attenuationColor:{value:new KA(0)},specularColor:{value:new KA(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new TA},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new TA},anisotropyVector:{value:new pA},anisotropyMap:{value:null},anisotropyMapTransform:{value:new TA}}]),vertexShader:xA.meshphysical_vert,fragmentShader:xA.meshphysical_frag};const eE={r:0,b:0,g:0},dC=new jI,FS=new uA;function RS(B,A,I,g,C,Q,E){const i=new KA(0);let o=Q===!0?0:1,e,t,a=null,s=0,h=null;function S(l){let c=l.isScene===!0?l.background:null;return c&&c.isTexture&&(c=(l.backgroundBlurriness>0?I:A).get(c)),c}function w(l){let c=!1;const M=S(l);M===null?r(i,o):M&&M.isColor&&(r(M,1),c=!0);const Y=B.xr.getEnvironmentBlendMode();Y==="additive"?g.buffers.color.setClear(0,0,0,1,E):Y==="alpha-blend"&&g.buffers.color.setClear(0,0,0,0,E),(B.autoClear||c)&&(g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),B.clear(B.autoClearColor,B.autoClearDepth,B.autoClearStencil))}function n(l,c){const M=S(c);M&&(M.isCubeTexture||M.mapping===JQ)?(t===void 0&&(t=new SI(new nB(1,1,1),new Vg({name:"BackgroundCubeMaterial",uniforms:SB(Fg.backgroundCube.uniforms),vertexShader:Fg.backgroundCube.vertexShader,fragmentShader:Fg.backgroundCube.fragmentShader,side:gg,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),t.geometry.deleteAttribute("uv"),t.onBeforeRender=function(Y,K,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(t.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(t)),dC.copy(c.backgroundRotation),dC.x*=-1,dC.y*=-1,dC.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(dC.y*=-1,dC.z*=-1),t.material.uniforms.envMap.value=M,t.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,t.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,t.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,t.material.uniforms.backgroundRotation.value.setFromMatrix4(FS.makeRotationFromEuler(dC)),t.material.toneMapped=XA.getTransfer(M.colorSpace)!==aI,(a!==M||s!==M.version||h!==B.toneMapping)&&(t.material.needsUpdate=!0,a=M,s=M.version,h=B.toneMapping),t.layers.enableAll(),l.unshift(t,t.geometry,t.material,0,0,null)):M&&M.isTexture&&(e===void 0&&(e=new SI(new oE(2,2),new Vg({name:"BackgroundMaterial",uniforms:SB(Fg.background.uniforms),vertexShader:Fg.background.vertexShader,fragmentShader:Fg.background.fragmentShader,side:Tg,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),Object.defineProperty(e.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(e)),e.material.uniforms.t2D.value=M,e.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,e.material.toneMapped=XA.getTransfer(M.colorSpace)!==aI,M.matrixAutoUpdate===!0&&M.updateMatrix(),e.material.uniforms.uvTransform.value.copy(M.matrix),(a!==M||s!==M.version||h!==B.toneMapping)&&(e.material.needsUpdate=!0,a=M,s=M.version,h=B.toneMapping),e.layers.enableAll(),l.unshift(e,e.geometry,e.material,0,0,null))}function r(l,c){l.getRGB(eE,nt(B)),g.buffers.color.setClear(eE.r,eE.g,eE.b,c,E)}return{getClearColor:function(){return i},setClearColor:function(l,c=1){i.set(l),o=c,r(i,o)},getClearAlpha:function(){return o},setClearAlpha:function(l){o=l,r(i,o)},render:w,addToRenderList:n}}function pS(B,A){const I=B.getParameter(B.MAX_VERTEX_ATTRIBS),g={},C=s(null);let Q=C,E=!1;function i(G,p,T,x,Z){let V=!1;const _=a(x,T,p);Q!==_&&(Q=_,e(Q.object)),V=h(G,x,T,Z),V&&S(G,x,T,Z),Z!==null&&A.update(Z,B.ELEMENT_ARRAY_BUFFER),(V||E)&&(E=!1,M(G,p,T,x),Z!==null&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,A.get(Z).buffer))}function o(){return B.createVertexArray()}function e(G){return B.bindVertexArray(G)}function t(G){return B.deleteVertexArray(G)}function a(G,p,T){const x=T.wireframe===!0;let Z=g[G.id];Z===void 0&&(Z={},g[G.id]=Z);let V=Z[p.id];V===void 0&&(V={},Z[p.id]=V);let _=V[x];return _===void 0&&(_=s(o()),V[x]=_),_}function s(G){const p=[],T=[],x=[];for(let Z=0;Z<I;Z++)p[Z]=0,T[Z]=0,x[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:p,enabledAttributes:T,attributeDivisors:x,object:G,attributes:{},index:null}}function h(G,p,T,x){const Z=Q.attributes,V=p.attributes;let _=0;const z=T.getAttributes();for(const W in z)if(z[W].location>=0){const iA=Z[W];let lA=V[W];if(lA===void 0&&(W==="instanceMatrix"&&G.instanceMatrix&&(lA=G.instanceMatrix),W==="instanceColor"&&G.instanceColor&&(lA=G.instanceColor)),iA===void 0||iA.attribute!==lA||lA&&iA.data!==lA.data)return!0;_++}return Q.attributesNum!==_||Q.index!==x}function S(G,p,T,x){const Z={},V=p.attributes;let _=0;const z=T.getAttributes();for(const W in z)if(z[W].location>=0){let iA=V[W];iA===void 0&&(W==="instanceMatrix"&&G.instanceMatrix&&(iA=G.instanceMatrix),W==="instanceColor"&&G.instanceColor&&(iA=G.instanceColor));const lA={};lA.attribute=iA,iA&&iA.data&&(lA.data=iA.data),Z[W]=lA,_++}Q.attributes=Z,Q.attributesNum=_,Q.index=x}function w(){const G=Q.newAttributes;for(let p=0,T=G.length;p<T;p++)G[p]=0}function n(G){r(G,0)}function r(G,p){const T=Q.newAttributes,x=Q.enabledAttributes,Z=Q.attributeDivisors;T[G]=1,x[G]===0&&(B.enableVertexAttribArray(G),x[G]=1),Z[G]!==p&&(B.vertexAttribDivisor(G,p),Z[G]=p)}function l(){const G=Q.newAttributes,p=Q.enabledAttributes;for(let T=0,x=p.length;T<x;T++)p[T]!==G[T]&&(B.disableVertexAttribArray(T),p[T]=0)}function c(G,p,T,x,Z,V,_){_===!0?B.vertexAttribIPointer(G,p,T,Z,V):B.vertexAttribPointer(G,p,T,x,Z,V)}function M(G,p,T,x){w();const Z=x.attributes,V=T.getAttributes(),_=p.defaultAttributeValues;for(const z in V){const W=V[z];if(W.location>=0){let iA=Z[z];if(iA===void 0&&(z==="instanceMatrix"&&G.instanceMatrix&&(iA=G.instanceMatrix),z==="instanceColor"&&G.instanceColor&&(iA=G.instanceColor)),iA!==void 0){const lA=iA.normalized,FA=iA.itemSize,jA=A.get(iA);if(jA===void 0)continue;const QI=jA.buffer,P=jA.type,CA=jA.bytesPerElement,SA=P===B.INT||P===B.UNSIGNED_INT||iA.gpuType===ZE;if(iA.isInterleavedBufferAttribute){const sA=iA.data,HA=sA.stride,OA=iA.offset;if(sA.isInstancedInterleavedBuffer){for(let WA=0;WA<W.locationSize;WA++)r(W.location+WA,sA.meshPerAttribute);G.isInstancedMesh!==!0&&x._maxInstanceCount===void 0&&(x._maxInstanceCount=sA.meshPerAttribute*sA.count)}else for(let WA=0;WA<W.locationSize;WA++)n(W.location+WA);B.bindBuffer(B.ARRAY_BUFFER,QI);for(let WA=0;WA<W.locationSize;WA++)c(W.location+WA,FA/W.locationSize,P,lA,HA*CA,(OA+FA/W.locationSize*WA)*CA,SA)}else{if(iA.isInstancedBufferAttribute){for(let sA=0;sA<W.locationSize;sA++)r(W.location+sA,iA.meshPerAttribute);G.isInstancedMesh!==!0&&x._maxInstanceCount===void 0&&(x._maxInstanceCount=iA.meshPerAttribute*iA.count)}else for(let sA=0;sA<W.locationSize;sA++)n(W.location+sA);B.bindBuffer(B.ARRAY_BUFFER,QI);for(let sA=0;sA<W.locationSize;sA++)c(W.location+sA,FA/W.locationSize,P,lA,FA*CA,FA/W.locationSize*sA*CA,SA)}}else if(_!==void 0){const lA=_[z];if(lA!==void 0)switch(lA.length){case 2:B.vertexAttrib2fv(W.location,lA);break;case 3:B.vertexAttrib3fv(W.location,lA);break;case 4:B.vertexAttrib4fv(W.location,lA);break;default:B.vertexAttrib1fv(W.location,lA)}}}}l()}function Y(){d();for(const G in g){const p=g[G];for(const T in p){const x=p[T];for(const Z in x)t(x[Z].object),delete x[Z];delete p[T]}delete g[G]}}function K(G){if(g[G.id]===void 0)return;const p=g[G.id];for(const T in p){const x=p[T];for(const Z in x)t(x[Z].object),delete x[Z];delete p[T]}delete g[G.id]}function N(G){for(const p in g){const T=g[p];if(T[G.id]===void 0)continue;const x=T[G.id];for(const Z in x)t(x[Z].object),delete x[Z];delete T[G.id]}}function d(){y(),E=!0,Q!==C&&(Q=C,e(Q.object))}function y(){C.geometry=null,C.program=null,C.wireframe=!1}return{setup:i,reset:d,resetDefaultState:y,dispose:Y,releaseStatesOfGeometry:K,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:n,disableUnusedAttributes:l}}function dS(B,A,I){let g;function C(e){g=e}function Q(e,t){B.drawArrays(g,e,t),I.update(t,g,1)}function E(e,t,a){a!==0&&(B.drawArraysInstanced(g,e,t,a),I.update(t,g,a))}function i(e,t,a){if(a===0)return;A.get("WEBGL_multi_draw").multiDrawArraysWEBGL(g,e,0,t,0,a);let s=0;for(let h=0;h<a;h++)s+=t[h];I.update(s,g,1)}function o(e,t,a,s){if(a===0)return;const h=A.get("WEBGL_multi_draw");if(h===null)for(let S=0;S<e.length;S++)E(e[S],t[S],s[S]);else{h.multiDrawArraysInstancedWEBGL(g,e,0,t,0,s,0,a);let S=0;for(let w=0;w<a;w++)S+=t[w];for(let w=0;w<s.length;w++)I.update(S,g,s[w])}}this.setMode=C,this.render=Q,this.renderInstances=E,this.renderMultiDraw=i,this.renderMultiDrawInstances=o}function qS(B,A,I,g){let C;function Q(){if(C!==void 0)return C;if(A.has("EXT_texture_filter_anisotropic")===!0){const K=A.get("EXT_texture_filter_anisotropic");C=B.getParameter(K.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else C=0;return C}function E(K){return!(K!==eg&&g.convert(K)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT))}function i(K){const N=K===xg&&(A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float"));return!(K!==rg&&g.convert(K)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&K!==Cg&&!N)}function o(K){if(K==="highp"){if(B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.HIGH_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.HIGH_FLOAT).precision>0)return"highp";K="mediump"}return K==="mediump"&&B.getShaderPrecisionFormat(B.VERTEX_SHADER,B.MEDIUM_FLOAT).precision>0&&B.getShaderPrecisionFormat(B.FRAGMENT_SHADER,B.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let e=I.precision!==void 0?I.precision:"highp";const t=o(e);t!==e&&(console.warn("THREE.WebGLRenderer:",e,"not supported, using",t,"instead."),e=t);const a=I.logarithmicDepthBuffer===!0,s=B.getParameter(B.MAX_TEXTURE_IMAGE_UNITS),h=B.getParameter(B.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=B.getParameter(B.MAX_TEXTURE_SIZE),w=B.getParameter(B.MAX_CUBE_MAP_TEXTURE_SIZE),n=B.getParameter(B.MAX_VERTEX_ATTRIBS),r=B.getParameter(B.MAX_VERTEX_UNIFORM_VECTORS),l=B.getParameter(B.MAX_VARYING_VECTORS),c=B.getParameter(B.MAX_FRAGMENT_UNIFORM_VECTORS),M=h>0,Y=B.getParameter(B.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:Q,getMaxPrecision:o,textureFormatReadable:E,textureTypeReadable:i,precision:e,logarithmicDepthBuffer:a,maxTextures:s,maxVertexTextures:h,maxTextureSize:S,maxCubemapSize:w,maxAttributes:n,maxVertexUniforms:r,maxVaryings:l,maxFragmentUniforms:c,vertexTextures:M,maxSamples:Y}}function YS(B){const A=this;let I=null,g=0,C=!1,Q=!1;const E=new RC,i=new TA,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,s){const h=a.length!==0||s||g!==0||C;return C=s,g=a.length,h},this.beginShadows=function(){Q=!0,t(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(a,s){I=t(a,s,0)},this.setState=function(a,s,h){const S=a.clippingPlanes,w=a.clipIntersection,n=a.clipShadows,r=B.get(a);if(!C||S===null||S.length===0||Q&&!n)Q?t(null):e();else{const l=Q?0:g,c=l*4;let M=r.clippingState||null;o.value=M,M=t(S,s,c,h);for(let Y=0;Y!==c;++Y)M[Y]=I[Y];r.clippingState=M,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=l}};function e(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function t(a,s,h,S){const w=a!==null?a.length:0;let n=null;if(w!==0){if(n=o.value,S!==!0||n===null){const r=h+w*4,l=s.matrixWorldInverse;i.getNormalMatrix(l),(n===null||n.length<r)&&(n=new Float32Array(r));for(let c=0,M=h;c!==w;++c,M+=4)E.copy(a[c]).applyMatrix4(l,i),E.normal.toArray(n,M),n[M+3]=E.constant}o.value=n,o.needsUpdate=!0}return A.numPlanes=w,A.numIntersection=0,n}}function LS(B){let A=new WeakMap;function I(E,i){return i===KQ?E.mapping=ZC:i===_E&&(E.mapping=WC),E}function g(E){if(E&&E.isTexture){const i=E.mapping;if(i===KQ||i===_E)if(A.has(E)){const o=A.get(E).texture;return I(o,E.mapping)}else{const o=E.image;if(o&&o.height>0){const e=new _h(o.height);return e.fromEquirectangularTexture(B,E),A.set(E,e),E.addEventListener("dispose",C),I(e.texture,E.mapping)}else return null}}return E}function C(E){const i=E.target;i.removeEventListener("dispose",C);const o=A.get(i);o!==void 0&&(A.delete(i),o.dispose())}function Q(){A=new WeakMap}return{get:g,dispose:Q}}class Xi extends St{constructor(A=-1,I=1,g=1,C=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let Q=g-A,E=g+A,i=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=e*this.view.offsetX,E=Q+e*this.view.width,i-=t*this.view.offsetY,o=i-t*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const lB=4,kt=[.125,.215,.35,.446,.526,.582],qC=20,zi=new Xi,yt=new KA;let $i=null,Ao=0,Io=0,go=!1;const YC=(1+Math.sqrt(5))/2,GB=1/YC,Ut=[new q(-YC,GB,0),new q(YC,GB,0),new q(-GB,0,YC),new q(GB,0,YC),new q(0,YC,-GB),new q(0,YC,GB),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Mt{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){$i=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,g,C,Q),I>0&&this._blur(Q,0,0,I),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jt(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kt(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget($i,Ao,Io),this._renderer.xr.enabled=go,A.scissorTest=!1,tE(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===ZC||A.mapping===WC?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),$i=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:uI,minFilter:uI,generateMipmaps:!1,type:xg,format:eg,colorSpace:FI,depthBuffer:!1},C=Nt(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nt(A,I,g);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uS(Q)),this._blurMaterial=HS(Q,A,I)}return C}_compileMaterial(A){const I=new SI(this._lodPlanes[0],A);this._renderer.compile(I,zi)}_sceneToCubeUV(A,I,g,C){const Q=new $I(90,1,I,g),E=[1,-1,1,1,1,1],i=[1,1,1,-1,-1,-1],o=this._renderer,e=o.autoClear,t=o.toneMapping;o.getClearColor(yt),o.toneMapping=EC,o.autoClear=!1;const a=new DC({name:"PMREM.Background",side:gg,depthWrite:!1,depthTest:!1}),s=new SI(new nB,a);let h=!1;const S=A.background;S?S.isColor&&(a.color.copy(S),A.background=null,h=!0):(a.color.copy(yt),h=!0);for(let w=0;w<6;w++){const n=w%3;n===0?(Q.up.set(0,E[w],0),Q.lookAt(i[w],0,0)):n===1?(Q.up.set(0,0,E[w]),Q.lookAt(0,i[w],0)):(Q.up.set(0,E[w],0),Q.lookAt(0,0,i[w]));const r=this._cubeSize;tE(C,n*r,w>2?r:0,r,r),o.setRenderTarget(C),h&&o.render(s,Q),o.render(A,Q)}s.geometry.dispose(),s.material.dispose(),o.toneMapping=t,o.autoClear=e,A.background=S}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===ZC||A.mapping===WC;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jt()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kt());const Q=C?this._cubemapMaterial:this._equirectMaterial,E=new SI(this._lodPlanes[0],Q),i=Q.uniforms;i.envMap.value=A;const o=this._cubeSize;tE(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(E,zi)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;const C=this._lodPlanes.length;for(let Q=1;Q<C;Q++){const E=Math.sqrt(this._sigmas[Q]*this._sigmas[Q]-this._sigmas[Q-1]*this._sigmas[Q-1]),i=Ut[(C-Q-1)%Ut.length];this._blur(A,Q-1,Q,E,i)}I.autoClear=g}_blur(A,I,g,C,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,I,g,C,"latitudinal",Q),this._halfBlur(E,A,g,g,C,"longitudinal",Q)}_halfBlur(A,I,g,C,Q,E,i){const o=this._renderer,e=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const t=3,a=new SI(this._lodPlanes[C],e),s=e.uniforms,h=this._sizeLods[g]-1,S=isFinite(Q)?Math.PI/(2*h):2*Math.PI/(2*qC-1),w=Q/S,n=isFinite(Q)?1+Math.floor(t*w):qC;n>qC&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${n} samples when the maximum is set to ${qC}`);const r=[];let l=0;for(let N=0;N<qC;++N){const d=N/w,y=Math.exp(-d*d/2);r.push(y),N===0?l+=y:N<n&&(l+=2*y)}for(let N=0;N<r.length;N++)r[N]=r[N]/l;s.envMap.value=A.texture,s.samples.value=n,s.weights.value=r,s.latitudinal.value=E==="latitudinal",i&&(s.poleAxis.value=i);const{_lodMax:c}=this;s.dTheta.value=S,s.mipInt.value=c-g;const M=this._sizeLods[C],Y=3*M*(C>c-lB?C-c+lB:0),K=4*(this._cubeSize-M);tE(I,Y,K,3*M,2*M),o.setRenderTarget(I),o.render(a,zi)}}function uS(B){const A=[],I=[],g=[];let C=B;const Q=B-lB+1+kt.length;for(let E=0;E<Q;E++){const i=Math.pow(2,C);I.push(i);let o=1/i;E>B-lB?o=kt[E-B+lB-1]:E===0&&(o=0),g.push(o);const e=1/(i-2),t=-e,a=1+e,s=[t,t,a,t,a,a,t,t,a,a,t,a],h=6,S=6,w=3,n=2,r=1,l=new Float32Array(w*S*h),c=new Float32Array(n*S*h),M=new Float32Array(r*S*h);for(let K=0;K<h;K++){const N=K%3*2/3-1,d=K>2?0:-1,y=[N,d,0,N+2/3,d,0,N+2/3,d+1,0,N,d,0,N+2/3,d+1,0,N,d+1,0];l.set(y,w*S*K),c.set(s,n*S*K);const G=[K,K,K,K,K,K];M.set(G,r*S*K)}const Y=new XI;Y.setAttribute("position",new pI(l,w)),Y.setAttribute("uv",new pI(c,n)),Y.setAttribute("faceIndex",new pI(M,r)),A.push(Y),C>lB&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function Nt(B,A,I){const g=new NC(B,A,I);return g.texture.mapping=JQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function tE(B,A,I,g,C){B.viewport.set(A,I,g,C),B.scissor.set(A,I,g,C)}function HS(B,A,I){const g=new Float32Array(qC),C=new q(0,1,0);return new Vg({name:"SphericalGaussianBlur",defines:{n:qC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${B}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:Co(),fragmentShader:`

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
		`,blending:QC,depthTest:!1,depthWrite:!1})}function Kt(){return new Vg({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

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
		`,blending:QC,depthTest:!1,depthWrite:!1})}function Jt(){return new Vg({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:QC,depthTest:!1,depthWrite:!1})}function Co(){return`

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
	`}function mS(B){let A=new WeakMap,I=null;function g(i){if(i&&i.isTexture){const o=i.mapping,e=o===KQ||o===_E,t=o===ZC||o===WC;if(e||t){let a=A.get(i);const s=a!==void 0?a.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==s)return I===null&&(I=new Mt(B)),a=e?I.fromEquirectangular(i,a):I.fromCubemap(i,a),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),a.texture;if(a!==void 0)return a.texture;{const h=i.image;return e&&h&&h.height>0||t&&h&&C(h)?(I===null&&(I=new Mt(B)),a=e?I.fromEquirectangular(i):I.fromCubemap(i),a.texture.pmremVersion=i.pmremVersion,A.set(i,a),i.addEventListener("dispose",Q),a.texture):null}}}return i}function C(i){let o=0;const e=6;for(let t=0;t<e;t++)i[t]!==void 0&&o++;return o===e}function Q(i){const o=i.target;o.removeEventListener("dispose",Q);const e=A.get(o);e!==void 0&&(A.delete(o),e.dispose())}function E(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:E}}function fS(B){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=B.getExtension("WEBGL_depth_texture")||B.getExtension("MOZ_WEBGL_depth_texture")||B.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=B.getExtension("EXT_texture_filter_anisotropic")||B.getExtension("MOZ_EXT_texture_filter_anisotropic")||B.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=B.getExtension("WEBGL_compressed_texture_s3tc")||B.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=B.getExtension("WEBGL_compressed_texture_pvrtc")||B.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=B.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(){I("EXT_color_buffer_float"),I("WEBGL_clip_cull_distance"),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture"),I("WEBGL_render_shared_exponent")},get:function(g){const C=I(g);return C===null&&IB("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function TS(B,A,I,g){const C={},Q=new WeakMap;function E(a){const s=a.target;s.index!==null&&A.remove(s.index);for(const S in s.attributes)A.remove(s.attributes[S]);for(const S in s.morphAttributes){const w=s.morphAttributes[S];for(let n=0,r=w.length;n<r;n++)A.remove(w[n])}s.removeEventListener("dispose",E),delete C[s.id];const h=Q.get(s);h&&(A.remove(h),Q.delete(s)),g.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,I.memory.geometries--}function i(a,s){return C[s.id]===!0||(s.addEventListener("dispose",E),C[s.id]=!0,I.memory.geometries++),s}function o(a){const s=a.attributes;for(const S in s)A.update(s[S],B.ARRAY_BUFFER);const h=a.morphAttributes;for(const S in h){const w=h[S];for(let n=0,r=w.length;n<r;n++)A.update(w[n],B.ARRAY_BUFFER)}}function e(a){const s=[],h=a.index,S=a.attributes.position;let w=0;if(h!==null){const l=h.array;w=h.version;for(let c=0,M=l.length;c<M;c+=3){const Y=l[c+0],K=l[c+1],N=l[c+2];s.push(Y,K,K,N,N,Y)}}else if(S!==void 0){const l=S.array;w=S.version;for(let c=0,M=l.length/3-1;c<M;c+=3){const Y=c+0,K=c+1,N=c+2;s.push(Y,K,K,N,N,Y)}}else return;const n=new(Ze(s)?tt:et)(s,1);n.version=w;const r=Q.get(a);r&&A.remove(r),Q.set(a,n)}function t(a){const s=Q.get(a);if(s){const h=a.index;h!==null&&s.version<h.version&&e(a)}else e(a);return Q.get(a)}return{get:i,update:o,getWireframeAttribute:t}}function xS(B,A,I){let g;function C(s){g=s}let Q,E;function i(s){Q=s.type,E=s.bytesPerElement}function o(s,h){B.drawElements(g,h,Q,s*E),I.update(h,g,1)}function e(s,h,S){S!==0&&(B.drawElementsInstanced(g,h,Q,s*E,S),I.update(h,g,S))}function t(s,h,S){if(S===0)return;A.get("WEBGL_multi_draw").multiDrawElementsWEBGL(g,h,0,Q,s,0,S);let w=0;for(let n=0;n<S;n++)w+=h[n];I.update(w,g,1)}function a(s,h,S,w){if(S===0)return;const n=A.get("WEBGL_multi_draw");if(n===null)for(let r=0;r<s.length;r++)e(s[r]/E,h[r],w[r]);else{n.multiDrawElementsInstancedWEBGL(g,h,0,Q,s,0,w,0,S);let r=0;for(let l=0;l<S;l++)r+=h[l];for(let l=0;l<w.length;l++)I.update(r,g,w[l])}}this.setMode=C,this.setIndex=i,this.render=o,this.renderInstances=e,this.renderMultiDraw=t,this.renderMultiDrawInstances=a}function bS(B){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(Q,E,i){switch(I.calls++,E){case B.TRIANGLES:I.triangles+=i*(Q/3);break;case B.LINES:I.lines+=i*(Q/2);break;case B.LINE_STRIP:I.lines+=i*(Q-1);break;case B.LINE_LOOP:I.lines+=i*Q;break;case B.POINTS:I.points+=i*Q;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",E);break}}function C(){I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function OS(B,A,I){const g=new WeakMap,C=new gI;function Q(E,i,o){const e=E.morphTargetInfluences,t=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,a=t!==void 0?t.length:0;let s=g.get(i);if(s===void 0||s.count!==a){let h=function(){d.dispose(),g.delete(i),i.removeEventListener("dispose",h)};s!==void 0&&s.texture.dispose();const S=i.morphAttributes.position!==void 0,w=i.morphAttributes.normal!==void 0,n=i.morphAttributes.color!==void 0,r=i.morphAttributes.position||[],l=i.morphAttributes.normal||[],c=i.morphAttributes.color||[];let M=0;S===!0&&(M=1),w===!0&&(M=2),n===!0&&(M=3);let Y=i.attributes.position.count*M,K=1;Y>A.maxTextureSize&&(K=Math.ceil(Y/A.maxTextureSize),Y=A.maxTextureSize);const N=new Float32Array(Y*K*4*a),d=new Xe(N,Y,K,a);d.type=Cg,d.needsUpdate=!0;const y=M*4;for(let G=0;G<a;G++){const p=r[G],T=l[G],x=c[G],Z=Y*K*4*G;for(let V=0;V<p.count;V++){const _=V*y;S===!0&&(C.fromBufferAttribute(p,V),N[Z+_+0]=C.x,N[Z+_+1]=C.y,N[Z+_+2]=C.z,N[Z+_+3]=0),w===!0&&(C.fromBufferAttribute(T,V),N[Z+_+4]=C.x,N[Z+_+5]=C.y,N[Z+_+6]=C.z,N[Z+_+7]=0),n===!0&&(C.fromBufferAttribute(x,V),N[Z+_+8]=C.x,N[Z+_+9]=C.y,N[Z+_+10]=C.z,N[Z+_+11]=x.itemSize===4?C.w:1)}}s={count:a,texture:d,size:new pA(Y,K)},g.set(i,s),i.addEventListener("dispose",h)}if(E.isInstancedMesh===!0&&E.morphTexture!==null)o.getUniforms().setValue(B,"morphTexture",E.morphTexture,I);else{let h=0;for(let w=0;w<e.length;w++)h+=e[w];const S=i.morphTargetsRelative?1:1-h;o.getUniforms().setValue(B,"morphTargetBaseInfluence",S),o.getUniforms().setValue(B,"morphTargetInfluences",e)}o.getUniforms().setValue(B,"morphTargetsTexture",s.texture,I),o.getUniforms().setValue(B,"morphTargetsTextureSize",s.size)}return{update:Q}}function vS(B,A,I,g){let C=new WeakMap;function Q(o){const e=g.render.frame,t=o.geometry,a=A.get(o,t);if(C.get(a)!==e&&(A.update(a),C.set(a,e)),o.isInstancedMesh&&(o.hasEventListener("dispose",i)===!1&&o.addEventListener("dispose",i),C.get(o)!==e&&(I.update(o.instanceMatrix,B.ARRAY_BUFFER),o.instanceColor!==null&&I.update(o.instanceColor,B.ARRAY_BUFFER),C.set(o,e))),o.isSkinnedMesh){const s=o.skeleton;C.get(s)!==e&&(s.update(),C.set(s,e))}return a}function E(){C=new WeakMap}function i(o){const e=o.target;e.removeEventListener("dispose",i),I.remove(e.instanceMatrix),e.instanceColor!==null&&I.remove(e.instanceColor)}return{update:Q,dispose:E}}class Ft extends RI{constructor(A,I,g,C,Q,E,i,o,e,t=jC){if(t!==jC&&t!==VC)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");g===void 0&&t===jC&&(g=UC),g===void 0&&t===VC&&(g=PC),super(null,C,Q,E,i,o,t,g,e),this.isDepthTexture=!0,this.image={width:A,height:I},this.magFilter=i!==void 0?i:TI,this.minFilter=o!==void 0?o:TI,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(A){return super.copy(A),this.compareFunction=A.compareFunction,this}toJSON(A){const I=super.toJSON(A);return this.compareFunction!==null&&(I.compareFunction=this.compareFunction),I}}const Rt=new RI,pt=new Ft(1,1),dt=new Xe,qt=new Nh,Yt=new lt,Lt=[],ut=[],Ht=new Float32Array(16),mt=new Float32Array(9),ft=new Float32Array(4);function kB(B,A,I){const g=B[0];if(g<=0||g>0)return B;const C=A*I;let Q=Lt[C];if(Q===void 0&&(Q=new Float32Array(C),Lt[C]=Q),A!==0){g.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=I,B[E].toArray(Q,i)}return Q}function dI(B,A){if(B.length!==A.length)return!1;for(let I=0,g=B.length;I<g;I++)if(B[I]!==A[I])return!1;return!0}function qI(B,A){for(let I=0,g=A.length;I<g;I++)B[I]=A[I]}function aE(B,A){let I=ut[A];I===void 0&&(I=new Int32Array(A),ut[A]=I);for(let g=0;g!==A;++g)I[g]=B.allocateTextureUnit();return I}function _S(B,A){const I=this.cache;I[0]!==A&&(B.uniform1f(this.addr,A),I[0]=A)}function ZS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(dI(I,A))return;B.uniform2fv(this.addr,A),qI(I,A)}}function WS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(B.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(dI(I,A))return;B.uniform3fv(this.addr,A),qI(I,A)}}function PS(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(dI(I,A))return;B.uniform4fv(this.addr,A),qI(I,A)}}function jS(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(dI(I,A))return;B.uniformMatrix2fv(this.addr,!1,A),qI(I,A)}else{if(dI(I,g))return;ft.set(g),B.uniformMatrix2fv(this.addr,!1,ft),qI(I,g)}}function VS(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(dI(I,A))return;B.uniformMatrix3fv(this.addr,!1,A),qI(I,A)}else{if(dI(I,g))return;mt.set(g),B.uniformMatrix3fv(this.addr,!1,mt),qI(I,g)}}function XS(B,A){const I=this.cache,g=A.elements;if(g===void 0){if(dI(I,A))return;B.uniformMatrix4fv(this.addr,!1,A),qI(I,A)}else{if(dI(I,g))return;Ht.set(g),B.uniformMatrix4fv(this.addr,!1,Ht),qI(I,g)}}function zS(B,A){const I=this.cache;I[0]!==A&&(B.uniform1i(this.addr,A),I[0]=A)}function $S(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(dI(I,A))return;B.uniform2iv(this.addr,A),qI(I,A)}}function Aw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(dI(I,A))return;B.uniform3iv(this.addr,A),qI(I,A)}}function Iw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(dI(I,A))return;B.uniform4iv(this.addr,A),qI(I,A)}}function gw(B,A){const I=this.cache;I[0]!==A&&(B.uniform1ui(this.addr,A),I[0]=A)}function Cw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(B.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(dI(I,A))return;B.uniform2uiv(this.addr,A),qI(I,A)}}function Bw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(B.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(dI(I,A))return;B.uniform3uiv(this.addr,A),qI(I,A)}}function Qw(B,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(B.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(dI(I,A))return;B.uniform4uiv(this.addr,A),qI(I,A)}}function Ew(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C);let Q;this.type===B.SAMPLER_2D_SHADOW?(pt.compareFunction=Oe,Q=pt):Q=Rt,I.setTexture2D(A||Q,C)}function iw(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||qt,C)}function ow(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||Yt,C)}function ew(B,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(B.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||dt,C)}function tw(B){switch(B){case 5126:return _S;case 35664:return ZS;case 35665:return WS;case 35666:return PS;case 35674:return jS;case 35675:return VS;case 35676:return XS;case 5124:case 35670:return zS;case 35667:case 35671:return $S;case 35668:case 35672:return Aw;case 35669:case 35673:return Iw;case 5125:return gw;case 36294:return Cw;case 36295:return Bw;case 36296:return Qw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return ew}}function aw(B,A){B.uniform1fv(this.addr,A)}function sw(B,A){const I=kB(A,this.size,2);B.uniform2fv(this.addr,I)}function Dw(B,A){const I=kB(A,this.size,3);B.uniform3fv(this.addr,I)}function hw(B,A){const I=kB(A,this.size,4);B.uniform4fv(this.addr,I)}function rw(B,A){const I=kB(A,this.size,4);B.uniformMatrix2fv(this.addr,!1,I)}function nw(B,A){const I=kB(A,this.size,9);B.uniformMatrix3fv(this.addr,!1,I)}function Sw(B,A){const I=kB(A,this.size,16);B.uniformMatrix4fv(this.addr,!1,I)}function ww(B,A){B.uniform1iv(this.addr,A)}function cw(B,A){B.uniform2iv(this.addr,A)}function lw(B,A){B.uniform3iv(this.addr,A)}function Gw(B,A){B.uniform4iv(this.addr,A)}function kw(B,A){B.uniform1uiv(this.addr,A)}function yw(B,A){B.uniform2uiv(this.addr,A)}function Uw(B,A){B.uniform3uiv(this.addr,A)}function Mw(B,A){B.uniform4uiv(this.addr,A)}function Nw(B,A,I){const g=this.cache,C=A.length,Q=aE(I,C);dI(g,Q)||(B.uniform1iv(this.addr,Q),qI(g,Q));for(let E=0;E!==C;++E)I.setTexture2D(A[E]||Rt,Q[E])}function Kw(B,A,I){const g=this.cache,C=A.length,Q=aE(I,C);dI(g,Q)||(B.uniform1iv(this.addr,Q),qI(g,Q));for(let E=0;E!==C;++E)I.setTexture3D(A[E]||qt,Q[E])}function Jw(B,A,I){const g=this.cache,C=A.length,Q=aE(I,C);dI(g,Q)||(B.uniform1iv(this.addr,Q),qI(g,Q));for(let E=0;E!==C;++E)I.setTextureCube(A[E]||Yt,Q[E])}function Fw(B,A,I){const g=this.cache,C=A.length,Q=aE(I,C);dI(g,Q)||(B.uniform1iv(this.addr,Q),qI(g,Q));for(let E=0;E!==C;++E)I.setTexture2DArray(A[E]||dt,Q[E])}function Rw(B){switch(B){case 5126:return aw;case 35664:return sw;case 35665:return Dw;case 35666:return hw;case 35674:return rw;case 35675:return nw;case 35676:return Sw;case 5124:case 35670:return ww;case 35667:case 35671:return cw;case 35668:case 35672:return lw;case 35669:case 35673:return Gw;case 5125:return kw;case 36294:return yw;case 36295:return Uw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Nw;case 35679:case 36299:case 36307:return Kw;case 35680:case 36300:case 36308:case 36293:return Jw;case 36289:case 36303:case 36311:case 36292:return Fw}}class pw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.setValue=tw(I.type)}}class dw{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.type=I.type,this.size=I.size,this.setValue=Rw(I.type)}}class qw{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let Q=0,E=C.length;Q!==E;++Q){const i=C[Q];i.setValue(A,I[i.id],g)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Tt(B,A){B.seq.push(A),B.map[A.id]=A}function Yw(B,A,I){const g=B.name,C=g.length;for(Bo.lastIndex=0;;){const Q=Bo.exec(g),E=Bo.lastIndex;let i=Q[1];const o=Q[2]==="]",e=Q[3];if(o&&(i=i|0),e===void 0||e==="["&&E+2===C){Tt(I,e===void 0?new pw(i,B,A):new dw(i,B,A));break}else{let t=I.map[i];t===void 0&&(t=new qw(i),Tt(I,t)),I=t}}}class sE{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,A.ACTIVE_UNIFORMS);for(let C=0;C<g;++C){const Q=A.getActiveUniform(I,C),E=A.getUniformLocation(I,Q.name);Yw(Q,E,this)}}setValue(A,I,g,C){const Q=this.map[I];Q!==void 0&&Q.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let Q=0,E=I.length;Q!==E;++Q){const i=I[Q],o=g[i.id];o.needsUpdate!==!1&&i.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,Q=A.length;C!==Q;++C){const E=A[C];E.id in I&&g.push(E)}return g}}function xt(B,A,I){const g=B.createShader(A);return B.shaderSource(g,I),B.compileShader(g),g}const Lw=37297;let uw=0;function Hw(B,A){const I=B.split(`
`),g=[],C=Math.max(A-6,0),Q=Math.min(A+6,I.length);for(let E=C;E<Q;E++){const i=E+1;g.push(`${i===A?">":" "} ${i}: ${I[E]}`)}return g.join(`
`)}function mw(B){const A=XA.getPrimaries(XA.workingColorSpace),I=XA.getPrimaries(B);let g;switch(A===I?g="":A===TQ&&I===fQ?g="LinearDisplayP3ToLinearSRGB":A===fQ&&I===TQ&&(g="LinearSRGBToLinearDisplayP3"),B){case FI:case HQ:return[g,"LinearTransferOETF"];case xI:case Fi:return[g,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",B),[g,"LinearTransferOETF"]}}function bt(B,A,I){const g=B.getShaderParameter(A,B.COMPILE_STATUS),C=B.getShaderInfoLog(A).trim();if(g&&C==="")return"";const Q=/ERROR: 0:(\d+)/.exec(C);if(Q){const E=parseInt(Q[1]);return I.toUpperCase()+`

`+C+`

`+Hw(B.getShaderSource(A),E)}else return C}function fw(B,A){const I=mw(A);return`vec4 ${B}( vec4 value ) { return ${I[0]}( ${I[1]}( value ) ); }`}function Tw(B,A){let I;switch(A){case YD:I="Linear";break;case LD:I="Reinhard";break;case uD:I="OptimizedCineon";break;case HD:I="ACESFilmic";break;case fD:I="AgX";break;case TD:I="Neutral";break;case mD:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+B+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}const DE=new q;function xw(){XA.getLuminanceCoefficients(DE);const B=DE.x.toFixed(4),A=DE.y.toFixed(4),I=DE.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${B}, ${A}, ${I} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bw(B){return[B.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",B.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(PB).join(`
`)}function Ow(B){const A=[];for(const I in B){const g=B[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function vw(B,A){const I={},g=B.getProgramParameter(A,B.ACTIVE_ATTRIBUTES);for(let C=0;C<g;C++){const Q=B.getActiveAttrib(A,C),E=Q.name;let i=1;Q.type===B.FLOAT_MAT2&&(i=2),Q.type===B.FLOAT_MAT3&&(i=3),Q.type===B.FLOAT_MAT4&&(i=4),I[E]={type:Q.type,location:B.getAttribLocation(A,E),locationSize:i}}return I}function PB(B){return B!==""}function Ot(B,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return B.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function vt(B,A){return B.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const _w=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qo(B){return B.replace(_w,Ww)}const Zw=new Map;function Ww(B,A){let I=xA[A];if(I===void 0){const g=Zw.get(A);if(g!==void 0)I=xA[g],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',A,g);else throw new Error("Can not resolve #include <"+A+">")}return Qo(I)}const Pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _t(B){return B.replace(Pw,jw)}function jw(B,A,I,g){let C="";for(let Q=parseInt(A);Q<parseInt(I);Q++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return C}function Zt(B){let A=`precision ${B.precision} float;
	precision ${B.precision} int;
	precision ${B.precision} sampler2D;
	precision ${B.precision} samplerCube;
	precision ${B.precision} sampler3D;
	precision ${B.precision} sampler2DArray;
	precision ${B.precision} sampler2DShadow;
	precision ${B.precision} samplerCubeShadow;
	precision ${B.precision} sampler2DArrayShadow;
	precision ${B.precision} isampler2D;
	precision ${B.precision} isampler3D;
	precision ${B.precision} isamplerCube;
	precision ${B.precision} isampler2DArray;
	precision ${B.precision} usampler2D;
	precision ${B.precision} usampler3D;
	precision ${B.precision} usamplerCube;
	precision ${B.precision} usampler2DArray;
	`;return B.precision==="highp"?A+=`
#define HIGH_PRECISION`:B.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:B.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function Vw(B){let A="SHADOWMAP_TYPE_BASIC";return B.shadowMapType===Me?A="SHADOWMAP_TYPE_PCF":B.shadowMapType===ED?A="SHADOWMAP_TYPE_PCF_SOFT":B.shadowMapType===fg&&(A="SHADOWMAP_TYPE_VSM"),A}function Xw(B){let A="ENVMAP_TYPE_CUBE";if(B.envMap)switch(B.envMapMode){case ZC:case WC:A="ENVMAP_TYPE_CUBE";break;case JQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function zw(B){let A="ENVMAP_MODE_REFLECTION";if(B.envMap)switch(B.envMapMode){case WC:A="ENVMAP_MODE_REFRACTION";break}return A}function $w(B){let A="ENVMAP_BLENDING_NONE";if(B.envMap)switch(B.combine){case vE:A="ENVMAP_BLENDING_MULTIPLY";break;case dD:A="ENVMAP_BLENDING_MIX";break;case qD:A="ENVMAP_BLENDING_ADD";break}return A}function Ac(B){const A=B.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function Ic(B,A,I,g){const C=B.getContext(),Q=I.defines;let E=I.vertexShader,i=I.fragmentShader;const o=Vw(I),e=Xw(I),t=zw(I),a=$w(I),s=Ac(I),h=bw(I),S=Ow(Q),w=C.createProgram();let n,r,l=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(n=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,S].filter(PB).join(`
`),n.length>0&&(n+=`
`),r=["#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,S].filter(PB).join(`
`),r.length>0&&(r+=`
`)):(n=[Zt(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,S,I.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",I.batching?"#define USE_BATCHING":"",I.batchingColor?"#define USE_BATCHING_COLOR":"",I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.instancingMorph?"#define USE_INSTANCING_MORPH":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.displacementMap?"#define USE_DISPLACEMENTMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.mapUv?"#define MAP_UV "+I.mapUv:"",I.alphaMapUv?"#define ALPHAMAP_UV "+I.alphaMapUv:"",I.lightMapUv?"#define LIGHTMAP_UV "+I.lightMapUv:"",I.aoMapUv?"#define AOMAP_UV "+I.aoMapUv:"",I.emissiveMapUv?"#define EMISSIVEMAP_UV "+I.emissiveMapUv:"",I.bumpMapUv?"#define BUMPMAP_UV "+I.bumpMapUv:"",I.normalMapUv?"#define NORMALMAP_UV "+I.normalMapUv:"",I.displacementMapUv?"#define DISPLACEMENTMAP_UV "+I.displacementMapUv:"",I.metalnessMapUv?"#define METALNESSMAP_UV "+I.metalnessMapUv:"",I.roughnessMapUv?"#define ROUGHNESSMAP_UV "+I.roughnessMapUv:"",I.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+I.anisotropyMapUv:"",I.clearcoatMapUv?"#define CLEARCOATMAP_UV "+I.clearcoatMapUv:"",I.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+I.clearcoatNormalMapUv:"",I.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+I.clearcoatRoughnessMapUv:"",I.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+I.iridescenceMapUv:"",I.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+I.iridescenceThicknessMapUv:"",I.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+I.sheenColorMapUv:"",I.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+I.sheenRoughnessMapUv:"",I.specularMapUv?"#define SPECULARMAP_UV "+I.specularMapUv:"",I.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+I.specularColorMapUv:"",I.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+I.specularIntensityMapUv:"",I.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+I.transmissionMapUv:"",I.thicknessMapUv?"#define THICKNESSMAP_UV "+I.thicknessMapUv:"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(PB).join(`
`),r=[Zt(I),"#define SHADER_TYPE "+I.shaderType,"#define SHADER_NAME "+I.shaderName,S,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.envMap?"#define "+t:"",I.envMap?"#define "+a:"",s?"#define CUBEUV_TEXEL_WIDTH "+s.texelWidth:"",s?"#define CUBEUV_TEXEL_HEIGHT "+s.texelHeight:"",s?"#define CUBEUV_MAX_MIP "+s.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",I.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.anisotropy?"#define USE_ANISOTROPY":"",I.anisotropyMap?"#define USE_ANISOTROPYMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.dispersion?"#define USE_DISPERSION":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",I.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.alphaHash?"#define USE_ALPHAHASH":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.vertexTangents&&I.flatShading===!1?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor||I.batchingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUv1s?"#define USE_UV1":"",I.vertexUv2s?"#define USE_UV2":"",I.vertexUv3s?"#define USE_UV3":"",I.pointsUvs?"#define USE_POINTS_UV":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.numLightProbes>0?"#define USE_LIGHT_PROBES":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==EC?"#define TONE_MAPPING":"",I.toneMapping!==EC?xA.tonemapping_pars_fragment:"",I.toneMapping!==EC?Tw("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",xA.colorspace_pars_fragment,fw("linearToOutputTexel",I.outputColorSpace),xw(),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(PB).join(`
`)),E=Qo(E),E=Ot(E,I),E=vt(E,I),i=Qo(i),i=Ot(i,I),i=vt(i,I),E=_t(E),i=_t(i),I.isRawShaderMaterial!==!0&&(l=`#version 300 es
`,n=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+n,r=["#define varying in",I.glslVersion===ve?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===ve?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const c=l+n+E,M=l+r+i,Y=xt(C,C.VERTEX_SHADER,c),K=xt(C,C.FRAGMENT_SHADER,M);C.attachShader(w,Y),C.attachShader(w,K),I.index0AttributeName!==void 0?C.bindAttribLocation(w,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(w,0,"position"),C.linkProgram(w);function N(p){if(B.debug.checkShaderErrors){const T=C.getProgramInfoLog(w).trim(),x=C.getShaderInfoLog(Y).trim(),Z=C.getShaderInfoLog(K).trim();let V=!0,_=!0;if(C.getProgramParameter(w,C.LINK_STATUS)===!1)if(V=!1,typeof B.debug.onShaderError=="function")B.debug.onShaderError(C,w,Y,K);else{const z=bt(C,Y,"vertex"),W=bt(C,K,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(w,C.VALIDATE_STATUS)+`

Material Name: `+p.name+`
Material Type: `+p.type+`

Program Info Log: `+T+`
`+z+`
`+W)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(x===""||Z==="")&&(_=!1);_&&(p.diagnostics={runnable:V,programLog:T,vertexShader:{log:x,prefix:n},fragmentShader:{log:Z,prefix:r}})}C.deleteShader(Y),C.deleteShader(K),d=new sE(C,w),y=vw(C,w)}let d;this.getUniforms=function(){return d===void 0&&N(this),d};let y;this.getAttributes=function(){return y===void 0&&N(this),y};let G=I.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=C.getProgramParameter(w,Lw)),G},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(w),this.program=void 0},this.type=I.shaderType,this.name=I.shaderName,this.id=uw++,this.cacheKey=A,this.usedTimes=1,this.program=w,this.vertexShader=Y,this.fragmentShader=K,this}let gc=0;class Cc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),Q=this._getShaderStage(g),E=this._getShaderCacheForMaterial(A);return E.has(C)===!1&&(E.add(C),C.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new Bc(A),I.set(A,g)),g}}class Bc{constructor(A){this.id=gc++,this.code=A,this.usedTimes=0}}function Qc(B,A,I,g,C,Q,E){const i=new It,o=new Cc,e=new Set,t=[],a=C.logarithmicDepthBuffer,s=C.vertexTextures;let h=C.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(y){return e.add(y),y===0?"uv":`uv${y}`}function n(y,G,p,T,x){const Z=T.fog,V=x.geometry,_=y.isMeshStandardMaterial?T.environment:null,z=(y.isMeshStandardMaterial?I:A).get(y.envMap||_),W=z&&z.mapping===JQ?z.image.height:null,iA=S[y.type];y.precision!==null&&(h=C.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const lA=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,FA=lA!==void 0?lA.length:0;let jA=0;V.morphAttributes.position!==void 0&&(jA=1),V.morphAttributes.normal!==void 0&&(jA=2),V.morphAttributes.color!==void 0&&(jA=3);let QI,P,CA,SA;if(iA){const AI=Fg[iA];QI=AI.vertexShader,P=AI.fragmentShader}else QI=y.vertexShader,P=y.fragmentShader,o.update(y),CA=o.getVertexShaderID(y),SA=o.getFragmentShaderID(y);const sA=B.getRenderTarget(),HA=x.isInstancedMesh===!0,OA=x.isBatchedMesh===!0,WA=!!y.map,nI=!!y.matcap,R=!!z,UI=!!y.aoMap,CI=!!y.lightMap,EI=!!y.bumpMap,kA=!!y.normalMap,MI=!!y.displacementMap,qA=!!y.emissiveMap,mA=!!y.metalnessMap,J=!!y.roughnessMap,k=y.anisotropy>0,O=y.clearcoat>0,AA=y.dispersion>0,gA=y.iridescence>0,$=y.sheen>0,NA=y.transmission>0,eA=k&&!!y.anisotropyMap,rA=O&&!!y.clearcoatMap,LA=O&&!!y.clearcoatNormalMap,BA=O&&!!y.clearcoatRoughnessMap,nA=gA&&!!y.iridescenceMap,VA=gA&&!!y.iridescenceThicknessMap,dA=$&&!!y.sheenColorMap,DA=$&&!!y.sheenRoughnessMap,YA=!!y.specularMap,vA=!!y.specularColorMap,rI=!!y.specularIntensityMap,H=NA&&!!y.transmissionMap,QA=NA&&!!y.thicknessMap,j=!!y.gradientMap,X=!!y.alphaMap,EA=y.alphaTest>0,yA=!!y.alphaHash,tI=!!y.extensions;let NI=EC;y.toneMapped&&(sA===null||sA.isXRRenderTarget===!0)&&(NI=B.toneMapping);const _I={shaderID:iA,shaderType:y.type,shaderName:y.name,vertexShader:QI,fragmentShader:P,defines:y.defines,customVertexShaderID:CA,customFragmentShaderID:SA,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:OA,batchingColor:OA&&x._colorsTexture!==null,instancing:HA,instancingColor:HA&&x.instanceColor!==null,instancingMorph:HA&&x.morphTexture!==null,supportsVertexTextures:s,outputColorSpace:sA===null?B.outputColorSpace:sA.isXRRenderTarget===!0?sA.texture.colorSpace:FI,alphaToCoverage:!!y.alphaToCoverage,map:WA,matcap:nI,envMap:R,envMapMode:R&&z.mapping,envMapCubeUVHeight:W,aoMap:UI,lightMap:CI,bumpMap:EI,normalMap:kA,displacementMap:s&&MI,emissiveMap:qA,normalMapObjectSpace:kA&&y.normalMapType===PD,normalMapTangentSpace:kA&&y.normalMapType===Ji,metalnessMap:mA,roughnessMap:J,anisotropy:k,anisotropyMap:eA,clearcoat:O,clearcoatMap:rA,clearcoatNormalMap:LA,clearcoatRoughnessMap:BA,dispersion:AA,iridescence:gA,iridescenceMap:nA,iridescenceThicknessMap:VA,sheen:$,sheenColorMap:dA,sheenRoughnessMap:DA,specularMap:YA,specularColorMap:vA,specularIntensityMap:rI,transmission:NA,transmissionMap:H,thicknessMap:QA,gradientMap:j,opaque:y.transparent===!1&&y.blending===_C&&y.alphaToCoverage===!1,alphaMap:X,alphaTest:EA,alphaHash:yA,combine:y.combine,mapUv:WA&&w(y.map.channel),aoMapUv:UI&&w(y.aoMap.channel),lightMapUv:CI&&w(y.lightMap.channel),bumpMapUv:EI&&w(y.bumpMap.channel),normalMapUv:kA&&w(y.normalMap.channel),displacementMapUv:MI&&w(y.displacementMap.channel),emissiveMapUv:qA&&w(y.emissiveMap.channel),metalnessMapUv:mA&&w(y.metalnessMap.channel),roughnessMapUv:J&&w(y.roughnessMap.channel),anisotropyMapUv:eA&&w(y.anisotropyMap.channel),clearcoatMapUv:rA&&w(y.clearcoatMap.channel),clearcoatNormalMapUv:LA&&w(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:BA&&w(y.clearcoatRoughnessMap.channel),iridescenceMapUv:nA&&w(y.iridescenceMap.channel),iridescenceThicknessMapUv:VA&&w(y.iridescenceThicknessMap.channel),sheenColorMapUv:dA&&w(y.sheenColorMap.channel),sheenRoughnessMapUv:DA&&w(y.sheenRoughnessMap.channel),specularMapUv:YA&&w(y.specularMap.channel),specularColorMapUv:vA&&w(y.specularColorMap.channel),specularIntensityMapUv:rI&&w(y.specularIntensityMap.channel),transmissionMapUv:H&&w(y.transmissionMap.channel),thicknessMapUv:QA&&w(y.thicknessMap.channel),alphaMapUv:X&&w(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(kA||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!V.attributes.uv&&(WA||X),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:a,skinning:x.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:FA,morphTextureStride:jA,numDirLights:G.directional.length,numPointLights:G.point.length,numSpotLights:G.spot.length,numSpotLightMaps:G.spotLightMap.length,numRectAreaLights:G.rectArea.length,numHemiLights:G.hemi.length,numDirLightShadows:G.directionalShadowMap.length,numPointLightShadows:G.pointShadowMap.length,numSpotLightShadows:G.spotShadowMap.length,numSpotLightShadowsWithMaps:G.numSpotLightShadowsWithMaps,numLightProbes:G.numLightProbes,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:y.dithering,shadowMapEnabled:B.shadowMap.enabled&&p.length>0,shadowMapType:B.shadowMap.type,toneMapping:NI,decodeVideoTexture:WA&&y.map.isVideoTexture===!0&&XA.getTransfer(y.map.colorSpace)===aI,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===hg,flipSided:y.side===gg,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:tI&&y.extensions.clipCullDistance===!0&&g.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tI&&y.extensions.multiDraw===!0||OA)&&g.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:g.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return _I.vertexUv1s=e.has(1),_I.vertexUv2s=e.has(2),_I.vertexUv3s=e.has(3),e.clear(),_I}function r(y){const G=[];if(y.shaderID?G.push(y.shaderID):(G.push(y.customVertexShaderID),G.push(y.customFragmentShaderID)),y.defines!==void 0)for(const p in y.defines)G.push(p),G.push(y.defines[p]);return y.isRawShaderMaterial===!1&&(l(G,y),c(G,y),G.push(B.outputColorSpace)),G.push(y.customProgramCacheKey),G.join()}function l(y,G){y.push(G.precision),y.push(G.outputColorSpace),y.push(G.envMapMode),y.push(G.envMapCubeUVHeight),y.push(G.mapUv),y.push(G.alphaMapUv),y.push(G.lightMapUv),y.push(G.aoMapUv),y.push(G.bumpMapUv),y.push(G.normalMapUv),y.push(G.displacementMapUv),y.push(G.emissiveMapUv),y.push(G.metalnessMapUv),y.push(G.roughnessMapUv),y.push(G.anisotropyMapUv),y.push(G.clearcoatMapUv),y.push(G.clearcoatNormalMapUv),y.push(G.clearcoatRoughnessMapUv),y.push(G.iridescenceMapUv),y.push(G.iridescenceThicknessMapUv),y.push(G.sheenColorMapUv),y.push(G.sheenRoughnessMapUv),y.push(G.specularMapUv),y.push(G.specularColorMapUv),y.push(G.specularIntensityMapUv),y.push(G.transmissionMapUv),y.push(G.thicknessMapUv),y.push(G.combine),y.push(G.fogExp2),y.push(G.sizeAttenuation),y.push(G.morphTargetsCount),y.push(G.morphAttributeCount),y.push(G.numDirLights),y.push(G.numPointLights),y.push(G.numSpotLights),y.push(G.numSpotLightMaps),y.push(G.numHemiLights),y.push(G.numRectAreaLights),y.push(G.numDirLightShadows),y.push(G.numPointLightShadows),y.push(G.numSpotLightShadows),y.push(G.numSpotLightShadowsWithMaps),y.push(G.numLightProbes),y.push(G.shadowMapType),y.push(G.toneMapping),y.push(G.numClippingPlanes),y.push(G.numClipIntersection),y.push(G.depthPacking)}function c(y,G){i.disableAll(),G.supportsVertexTextures&&i.enable(0),G.instancing&&i.enable(1),G.instancingColor&&i.enable(2),G.instancingMorph&&i.enable(3),G.matcap&&i.enable(4),G.envMap&&i.enable(5),G.normalMapObjectSpace&&i.enable(6),G.normalMapTangentSpace&&i.enable(7),G.clearcoat&&i.enable(8),G.iridescence&&i.enable(9),G.alphaTest&&i.enable(10),G.vertexColors&&i.enable(11),G.vertexAlphas&&i.enable(12),G.vertexUv1s&&i.enable(13),G.vertexUv2s&&i.enable(14),G.vertexUv3s&&i.enable(15),G.vertexTangents&&i.enable(16),G.anisotropy&&i.enable(17),G.alphaHash&&i.enable(18),G.batching&&i.enable(19),G.dispersion&&i.enable(20),G.batchingColor&&i.enable(21),y.push(i.mask),i.disableAll(),G.fog&&i.enable(0),G.useFog&&i.enable(1),G.flatShading&&i.enable(2),G.logarithmicDepthBuffer&&i.enable(3),G.skinning&&i.enable(4),G.morphTargets&&i.enable(5),G.morphNormals&&i.enable(6),G.morphColors&&i.enable(7),G.premultipliedAlpha&&i.enable(8),G.shadowMapEnabled&&i.enable(9),G.doubleSided&&i.enable(10),G.flipSided&&i.enable(11),G.useDepthPacking&&i.enable(12),G.dithering&&i.enable(13),G.transmission&&i.enable(14),G.sheen&&i.enable(15),G.opaque&&i.enable(16),G.pointsUvs&&i.enable(17),G.decodeVideoTexture&&i.enable(18),G.alphaToCoverage&&i.enable(19),y.push(i.mask)}function M(y){const G=S[y.type];let p;if(G){const T=Fg[G];p=xh.clone(T.uniforms)}else p=y.uniforms;return p}function Y(y,G){let p;for(let T=0,x=t.length;T<x;T++){const Z=t[T];if(Z.cacheKey===G){p=Z,++p.usedTimes;break}}return p===void 0&&(p=new Ic(B,G,y,Q),t.push(p)),p}function K(y){if(--y.usedTimes===0){const G=t.indexOf(y);t[G]=t[t.length-1],t.pop(),y.destroy()}}function N(y){o.remove(y)}function d(){o.dispose()}return{getParameters:n,getProgramCacheKey:r,getUniforms:M,acquireProgram:Y,releaseProgram:K,releaseShaderCache:N,programs:t,dispose:d}}function Ec(){let B=new WeakMap;function A(Q){let E=B.get(Q);return E===void 0&&(E={},B.set(Q,E)),E}function I(Q){B.delete(Q)}function g(Q,E,i){B.get(Q)[E]=i}function C(){B=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function ic(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.material.id!==A.material.id?B.material.id-A.material.id:B.z!==A.z?B.z-A.z:B.id-A.id}function Wt(B,A){return B.groupOrder!==A.groupOrder?B.groupOrder-A.groupOrder:B.renderOrder!==A.renderOrder?B.renderOrder-A.renderOrder:B.z!==A.z?A.z-B.z:B.id-A.id}function Pt(){const B=[];let A=0;const I=[],g=[],C=[];function Q(){A=0,I.length=0,g.length=0,C.length=0}function E(a,s,h,S,w,n){let r=B[A];return r===void 0?(r={id:a.id,object:a,geometry:s,material:h,groupOrder:S,renderOrder:a.renderOrder,z:w,group:n},B[A]=r):(r.id=a.id,r.object=a,r.geometry=s,r.material=h,r.groupOrder=S,r.renderOrder=a.renderOrder,r.z=w,r.group=n),A++,r}function i(a,s,h,S,w,n){const r=E(a,s,h,S,w,n);h.transmission>0?g.push(r):h.transparent===!0?C.push(r):I.push(r)}function o(a,s,h,S,w,n){const r=E(a,s,h,S,w,n);h.transmission>0?g.unshift(r):h.transparent===!0?C.unshift(r):I.unshift(r)}function e(a,s){I.length>1&&I.sort(a||ic),g.length>1&&g.sort(s||Wt),C.length>1&&C.sort(s||Wt)}function t(){for(let a=A,s=B.length;a<s;a++){const h=B[a];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:I,transmissive:g,transparent:C,init:Q,push:i,unshift:o,finish:t,sort:e}}function oc(){let B=new WeakMap;function A(g,C){const Q=B.get(g);let E;return Q===void 0?(E=new Pt,B.set(g,[E])):C>=Q.length?(E=new Pt,Q.push(E)):E=Q[C],E}function I(){B=new WeakMap}return{get:A,dispose:I}}function ec(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new q,color:new KA};break;case"SpotLight":I={position:new q,direction:new q,color:new KA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new q,color:new KA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new q,skyColor:new KA,groundColor:new KA};break;case"RectAreaLight":I={color:new KA,position:new q,halfWidth:new q,halfHeight:new q};break}return B[A.id]=I,I}}}function tc(){const B={};return{get:function(A){if(B[A.id]!==void 0)return B[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pA};break;case"SpotLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pA};break;case"PointLight":I={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pA,shadowCameraNear:1,shadowCameraFar:1e3};break}return B[A.id]=I,I}}}let ac=0;function sc(B,A){return(A.castShadow?2:0)-(B.castShadow?2:0)+(A.map?1:0)-(B.map?1:0)}function Dc(B){const A=new ec,I=tc(),g={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)g.probe.push(new q);const C=new q,Q=new uA,E=new uA;function i(e){let t=0,a=0,s=0;for(let y=0;y<9;y++)g.probe[y].set(0,0,0);let h=0,S=0,w=0,n=0,r=0,l=0,c=0,M=0,Y=0,K=0,N=0;e.sort(sc);for(let y=0,G=e.length;y<G;y++){const p=e[y],T=p.color,x=p.intensity,Z=p.distance,V=p.shadow&&p.shadow.map?p.shadow.map.texture:null;if(p.isAmbientLight)t+=T.r*x,a+=T.g*x,s+=T.b*x;else if(p.isLightProbe){for(let _=0;_<9;_++)g.probe[_].addScaledVector(p.sh.coefficients[_],x);N++}else if(p.isDirectionalLight){const _=A.get(p);if(_.color.copy(p.color).multiplyScalar(p.intensity),p.castShadow){const z=p.shadow,W=I.get(p);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,g.directionalShadow[h]=W,g.directionalShadowMap[h]=V,g.directionalShadowMatrix[h]=p.shadow.matrix,l++}g.directional[h]=_,h++}else if(p.isSpotLight){const _=A.get(p);_.position.setFromMatrixPosition(p.matrixWorld),_.color.copy(T).multiplyScalar(x),_.distance=Z,_.coneCos=Math.cos(p.angle),_.penumbraCos=Math.cos(p.angle*(1-p.penumbra)),_.decay=p.decay,g.spot[w]=_;const z=p.shadow;if(p.map&&(g.spotLightMap[Y]=p.map,Y++,z.updateMatrices(p),p.castShadow&&K++),g.spotLightMatrix[w]=z.matrix,p.castShadow){const W=I.get(p);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,g.spotShadow[w]=W,g.spotShadowMap[w]=V,M++}w++}else if(p.isRectAreaLight){const _=A.get(p);_.color.copy(T).multiplyScalar(x),_.halfWidth.set(p.width*.5,0,0),_.halfHeight.set(0,p.height*.5,0),g.rectArea[n]=_,n++}else if(p.isPointLight){const _=A.get(p);if(_.color.copy(p.color).multiplyScalar(p.intensity),_.distance=p.distance,_.decay=p.decay,p.castShadow){const z=p.shadow,W=I.get(p);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,g.pointShadow[S]=W,g.pointShadowMap[S]=V,g.pointShadowMatrix[S]=p.shadow.matrix,c++}g.point[S]=_,S++}else if(p.isHemisphereLight){const _=A.get(p);_.skyColor.copy(p.color).multiplyScalar(x),_.groundColor.copy(p.groundColor).multiplyScalar(x),g.hemi[r]=_,r++}}n>0&&(B.has("OES_texture_float_linear")===!0?(g.rectAreaLTC1=oA.LTC_FLOAT_1,g.rectAreaLTC2=oA.LTC_FLOAT_2):(g.rectAreaLTC1=oA.LTC_HALF_1,g.rectAreaLTC2=oA.LTC_HALF_2)),g.ambient[0]=t,g.ambient[1]=a,g.ambient[2]=s;const d=g.hash;(d.directionalLength!==h||d.pointLength!==S||d.spotLength!==w||d.rectAreaLength!==n||d.hemiLength!==r||d.numDirectionalShadows!==l||d.numPointShadows!==c||d.numSpotShadows!==M||d.numSpotMaps!==Y||d.numLightProbes!==N)&&(g.directional.length=h,g.spot.length=w,g.rectArea.length=n,g.point.length=S,g.hemi.length=r,g.directionalShadow.length=l,g.directionalShadowMap.length=l,g.pointShadow.length=c,g.pointShadowMap.length=c,g.spotShadow.length=M,g.spotShadowMap.length=M,g.directionalShadowMatrix.length=l,g.pointShadowMatrix.length=c,g.spotLightMatrix.length=M+Y-K,g.spotLightMap.length=Y,g.numSpotLightShadowsWithMaps=K,g.numLightProbes=N,d.directionalLength=h,d.pointLength=S,d.spotLength=w,d.rectAreaLength=n,d.hemiLength=r,d.numDirectionalShadows=l,d.numPointShadows=c,d.numSpotShadows=M,d.numSpotMaps=Y,d.numLightProbes=N,g.version=ac++)}function o(e,t){let a=0,s=0,h=0,S=0,w=0;const n=t.matrixWorldInverse;for(let r=0,l=e.length;r<l;r++){const c=e[r];if(c.isDirectionalLight){const M=g.directional[a];M.direction.setFromMatrixPosition(c.matrixWorld),C.setFromMatrixPosition(c.target.matrixWorld),M.direction.sub(C),M.direction.transformDirection(n),a++}else if(c.isSpotLight){const M=g.spot[h];M.position.setFromMatrixPosition(c.matrixWorld),M.position.applyMatrix4(n),M.direction.setFromMatrixPosition(c.matrixWorld),C.setFromMatrixPosition(c.target.matrixWorld),M.direction.sub(C),M.direction.transformDirection(n),h++}else if(c.isRectAreaLight){const M=g.rectArea[S];M.position.setFromMatrixPosition(c.matrixWorld),M.position.applyMatrix4(n),E.identity(),Q.copy(c.matrixWorld),Q.premultiply(n),E.extractRotation(Q),M.halfWidth.set(c.width*.5,0,0),M.halfHeight.set(0,c.height*.5,0),M.halfWidth.applyMatrix4(E),M.halfHeight.applyMatrix4(E),S++}else if(c.isPointLight){const M=g.point[s];M.position.setFromMatrixPosition(c.matrixWorld),M.position.applyMatrix4(n),s++}else if(c.isHemisphereLight){const M=g.hemi[w];M.direction.setFromMatrixPosition(c.matrixWorld),M.direction.transformDirection(n),w++}}}return{setup:i,setupView:o,state:g}}function jt(B){const A=new Dc(B),I=[],g=[];function C(t){e.camera=t,I.length=0,g.length=0}function Q(t){I.push(t)}function E(t){g.push(t)}function i(){A.setup(I)}function o(t){A.setupView(I,t)}const e={lightsArray:I,shadowsArray:g,camera:null,lights:A,transmissionRenderTarget:{}};return{init:C,state:e,setupLights:i,setupLightsView:o,pushLight:Q,pushShadow:E}}function hc(B){let A=new WeakMap;function I(C,Q=0){const E=A.get(C);let i;return E===void 0?(i=new jt(B),A.set(C,[i])):Q>=E.length?(i=new jt(B),E.push(i)):i=E[Q],i}function g(){A=new WeakMap}return{get:I,dispose:g}}class rc extends Gg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ZD,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class nc extends Gg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const Sc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wc=`uniform sampler2D shadow_pass;
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
}`;function cc(B,A,I){let g=new Vi;const C=new pA,Q=new pA,E=new gI,i=new rc({depthPacking:WD}),o=new nc,e={},t=I.maxTextureSize,a={[Tg]:gg,[gg]:Tg,[hg]:hg},s=new Vg({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pA},radius:{value:4}},vertexShader:Sc,fragmentShader:wc}),h=s.clone();h.defines.HORIZONTAL_PASS=1;const S=new XI;S.setAttribute("position",new pI(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new SI(S,s),n=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Me;let r=this.type;this.render=function(K,N,d){if(n.enabled===!1||n.autoUpdate===!1&&n.needsUpdate===!1||K.length===0)return;const y=B.getRenderTarget(),G=B.getActiveCubeFace(),p=B.getActiveMipmapLevel(),T=B.state;T.setBlending(QC),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const x=r!==fg&&this.type===fg,Z=r===fg&&this.type!==fg;for(let V=0,_=K.length;V<_;V++){const z=K[V],W=z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;C.copy(W.mapSize);const iA=W.getFrameExtents();if(C.multiply(iA),Q.copy(W.mapSize),(C.x>t||C.y>t)&&(C.x>t&&(Q.x=Math.floor(t/iA.x),C.x=Q.x*iA.x,W.mapSize.x=Q.x),C.y>t&&(Q.y=Math.floor(t/iA.y),C.y=Q.y*iA.y,W.mapSize.y=Q.y)),W.map===null||x===!0||Z===!0){const FA=this.type!==fg?{minFilter:TI,magFilter:TI}:{};W.map!==null&&W.map.dispose(),W.map=new NC(C.x,C.y,FA),W.map.texture.name=z.name+".shadowMap",W.camera.updateProjectionMatrix()}B.setRenderTarget(W.map),B.clear();const lA=W.getViewportCount();for(let FA=0;FA<lA;FA++){const jA=W.getViewport(FA);E.set(Q.x*jA.x,Q.y*jA.y,Q.x*jA.z,Q.y*jA.w),T.viewport(E),W.updateMatrices(z,FA),g=W.getFrustum(),M(N,d,W.camera,z,this.type)}W.isPointLightShadow!==!0&&this.type===fg&&l(W,d),W.needsUpdate=!1}r=this.type,n.needsUpdate=!1,B.setRenderTarget(y,G,p)};function l(K,N){const d=A.update(w);s.defines.VSM_SAMPLES!==K.blurSamples&&(s.defines.VSM_SAMPLES=K.blurSamples,h.defines.VSM_SAMPLES=K.blurSamples,s.needsUpdate=!0,h.needsUpdate=!0),K.mapPass===null&&(K.mapPass=new NC(C.x,C.y)),s.uniforms.shadow_pass.value=K.map.texture,s.uniforms.resolution.value=K.mapSize,s.uniforms.radius.value=K.radius,B.setRenderTarget(K.mapPass),B.clear(),B.renderBufferDirect(N,null,d,s,w,null),h.uniforms.shadow_pass.value=K.mapPass.texture,h.uniforms.resolution.value=K.mapSize,h.uniforms.radius.value=K.radius,B.setRenderTarget(K.map),B.clear(),B.renderBufferDirect(N,null,d,h,w,null)}function c(K,N,d,y){let G=null;const p=d.isPointLight===!0?K.customDistanceMaterial:K.customDepthMaterial;if(p!==void 0)G=p;else if(G=d.isPointLight===!0?o:i,B.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const T=G.uuid,x=N.uuid;let Z=e[T];Z===void 0&&(Z={},e[T]=Z);let V=Z[x];V===void 0&&(V=G.clone(),Z[x]=V,N.addEventListener("dispose",Y)),G=V}if(G.visible=N.visible,G.wireframe=N.wireframe,y===fg?G.side=N.shadowSide!==null?N.shadowSide:N.side:G.side=N.shadowSide!==null?N.shadowSide:a[N.side],G.alphaMap=N.alphaMap,G.alphaTest=N.alphaTest,G.map=N.map,G.clipShadows=N.clipShadows,G.clippingPlanes=N.clippingPlanes,G.clipIntersection=N.clipIntersection,G.displacementMap=N.displacementMap,G.displacementScale=N.displacementScale,G.displacementBias=N.displacementBias,G.wireframeLinewidth=N.wireframeLinewidth,G.linewidth=N.linewidth,d.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const T=B.properties.get(G);T.light=d}return G}function M(K,N,d,y,G){if(K.visible===!1)return;if(K.layers.test(N.layers)&&(K.isMesh||K.isLine||K.isPoints)&&(K.castShadow||K.receiveShadow&&G===fg)&&(!K.frustumCulled||g.intersectsObject(K))){K.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,K.matrixWorld);const T=A.update(K),x=K.material;if(Array.isArray(x)){const Z=T.groups;for(let V=0,_=Z.length;V<_;V++){const z=Z[V],W=x[z.materialIndex];if(W&&W.visible){const iA=c(K,W,y,G);K.onBeforeShadow(B,K,N,d,T,iA,z),B.renderBufferDirect(d,null,T,iA,K,z),K.onAfterShadow(B,K,N,d,T,iA,z)}}}else if(x.visible){const Z=c(K,x,y,G);K.onBeforeShadow(B,K,N,d,T,Z,null),B.renderBufferDirect(d,null,T,Z,K,null),K.onAfterShadow(B,K,N,d,T,Z,null)}}const p=K.children;for(let T=0,x=p.length;T<x;T++)M(p[T],N,d,y,G)}function Y(K){K.target.removeEventListener("dispose",Y);for(const N in e){const d=e[N],y=K.target.uuid;y in d&&(d[y].dispose(),delete d[y])}}}function lc(B){function A(){let H=!1;const QA=new gI;let j=null;const X=new gI(0,0,0,0);return{setMask:function(EA){j!==EA&&!H&&(B.colorMask(EA,EA,EA,EA),j=EA)},setLocked:function(EA){H=EA},setClear:function(EA,yA,tI,NI,_I){_I===!0&&(EA*=NI,yA*=NI,tI*=NI),QA.set(EA,yA,tI,NI),X.equals(QA)===!1&&(B.clearColor(EA,yA,tI,NI),X.copy(QA))},reset:function(){H=!1,j=null,X.set(-1,0,0,0)}}}function I(){let H=!1,QA=null,j=null,X=null;return{setTest:function(EA){EA?SA(B.DEPTH_TEST):sA(B.DEPTH_TEST)},setMask:function(EA){QA!==EA&&!H&&(B.depthMask(EA),QA=EA)},setFunc:function(EA){if(j!==EA){switch(EA){case MD:B.depthFunc(B.NEVER);break;case ND:B.depthFunc(B.ALWAYS);break;case KD:B.depthFunc(B.LESS);break;case NQ:B.depthFunc(B.LEQUAL);break;case JD:B.depthFunc(B.EQUAL);break;case FD:B.depthFunc(B.GEQUAL);break;case RD:B.depthFunc(B.GREATER);break;case pD:B.depthFunc(B.NOTEQUAL);break;default:B.depthFunc(B.LEQUAL)}j=EA}},setLocked:function(EA){H=EA},setClear:function(EA){X!==EA&&(B.clearDepth(EA),X=EA)},reset:function(){H=!1,QA=null,j=null,X=null}}}function g(){let H=!1,QA=null,j=null,X=null,EA=null,yA=null,tI=null,NI=null,_I=null;return{setTest:function(AI){H||(AI?SA(B.STENCIL_TEST):sA(B.STENCIL_TEST))},setMask:function(AI){QA!==AI&&!H&&(B.stencilMask(AI),QA=AI)},setFunc:function(AI,BC,ug){(j!==AI||X!==BC||EA!==ug)&&(B.stencilFunc(AI,BC,ug),j=AI,X=BC,EA=ug)},setOp:function(AI,BC,ug){(yA!==AI||tI!==BC||NI!==ug)&&(B.stencilOp(AI,BC,ug),yA=AI,tI=BC,NI=ug)},setLocked:function(AI){H=AI},setClear:function(AI){_I!==AI&&(B.clearStencil(AI),_I=AI)},reset:function(){H=!1,QA=null,j=null,X=null,EA=null,yA=null,tI=null,NI=null,_I=null}}}const C=new A,Q=new I,E=new g,i=new WeakMap,o=new WeakMap;let e={},t={},a=new WeakMap,s=[],h=null,S=!1,w=null,n=null,r=null,l=null,c=null,M=null,Y=null,K=new KA(0,0,0),N=0,d=!1,y=null,G=null,p=null,T=null,x=null;const Z=B.getParameter(B.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,_=0;const z=B.getParameter(B.VERSION);z.indexOf("WebGL")!==-1?(_=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=_>=1):z.indexOf("OpenGL ES")!==-1&&(_=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=_>=2);let W=null,iA={};const lA=B.getParameter(B.SCISSOR_BOX),FA=B.getParameter(B.VIEWPORT),jA=new gI().fromArray(lA),QI=new gI().fromArray(FA);function P(H,QA,j,X){const EA=new Uint8Array(4),yA=B.createTexture();B.bindTexture(H,yA),B.texParameteri(H,B.TEXTURE_MIN_FILTER,B.NEAREST),B.texParameteri(H,B.TEXTURE_MAG_FILTER,B.NEAREST);for(let tI=0;tI<j;tI++)H===B.TEXTURE_3D||H===B.TEXTURE_2D_ARRAY?B.texImage3D(QA,0,B.RGBA,1,1,X,0,B.RGBA,B.UNSIGNED_BYTE,EA):B.texImage2D(QA+tI,0,B.RGBA,1,1,0,B.RGBA,B.UNSIGNED_BYTE,EA);return yA}const CA={};CA[B.TEXTURE_2D]=P(B.TEXTURE_2D,B.TEXTURE_2D,1),CA[B.TEXTURE_CUBE_MAP]=P(B.TEXTURE_CUBE_MAP,B.TEXTURE_CUBE_MAP_POSITIVE_X,6),CA[B.TEXTURE_2D_ARRAY]=P(B.TEXTURE_2D_ARRAY,B.TEXTURE_2D_ARRAY,1,1),CA[B.TEXTURE_3D]=P(B.TEXTURE_3D,B.TEXTURE_3D,1,1),C.setClear(0,0,0,1),Q.setClear(1),E.setClear(0),SA(B.DEPTH_TEST),Q.setFunc(NQ),EI(!1),kA(GC),SA(B.CULL_FACE),UI(QC);function SA(H){e[H]!==!0&&(B.enable(H),e[H]=!0)}function sA(H){e[H]!==!1&&(B.disable(H),e[H]=!1)}function HA(H,QA){return t[H]!==QA?(B.bindFramebuffer(H,QA),t[H]=QA,H===B.DRAW_FRAMEBUFFER&&(t[B.FRAMEBUFFER]=QA),H===B.FRAMEBUFFER&&(t[B.DRAW_FRAMEBUFFER]=QA),!0):!1}function OA(H,QA){let j=s,X=!1;if(H){j=a.get(QA),j===void 0&&(j=[],a.set(QA,j));const EA=H.textures;if(j.length!==EA.length||j[0]!==B.COLOR_ATTACHMENT0){for(let yA=0,tI=EA.length;yA<tI;yA++)j[yA]=B.COLOR_ATTACHMENT0+yA;j.length=EA.length,X=!0}}else j[0]!==B.BACK&&(j[0]=B.BACK,X=!0);X&&B.drawBuffers(j)}function WA(H){return h!==H?(B.useProgram(H),h=H,!0):!1}const nI={[kC]:B.FUNC_ADD,[oD]:B.FUNC_SUBTRACT,[eD]:B.FUNC_REVERSE_SUBTRACT};nI[tD]=B.MIN,nI[aD]=B.MAX;const R={[sD]:B.ZERO,[DD]:B.ONE,[hD]:B.SRC_COLOR,[bE]:B.SRC_ALPHA,[lD]:B.SRC_ALPHA_SATURATE,[wD]:B.DST_COLOR,[nD]:B.DST_ALPHA,[rD]:B.ONE_MINUS_SRC_COLOR,[OE]:B.ONE_MINUS_SRC_ALPHA,[cD]:B.ONE_MINUS_DST_COLOR,[SD]:B.ONE_MINUS_DST_ALPHA,[GD]:B.CONSTANT_COLOR,[kD]:B.ONE_MINUS_CONSTANT_COLOR,[yD]:B.CONSTANT_ALPHA,[UD]:B.ONE_MINUS_CONSTANT_ALPHA};function UI(H,QA,j,X,EA,yA,tI,NI,_I,AI){if(H===QC){S===!0&&(sA(B.BLEND),S=!1);return}if(S===!1&&(SA(B.BLEND),S=!0),H!==iD){if(H!==w||AI!==d){if((n!==kC||c!==kC)&&(B.blendEquation(B.FUNC_ADD),n=kC,c=kC),AI)switch(H){case _C:B.blendFuncSeparate(B.ONE,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case xE:B.blendFunc(B.ONE,B.ONE);break;case Ne:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case Ke:B.blendFuncSeparate(B.ZERO,B.SRC_COLOR,B.ZERO,B.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case _C:B.blendFuncSeparate(B.SRC_ALPHA,B.ONE_MINUS_SRC_ALPHA,B.ONE,B.ONE_MINUS_SRC_ALPHA);break;case xE:B.blendFunc(B.SRC_ALPHA,B.ONE);break;case Ne:B.blendFuncSeparate(B.ZERO,B.ONE_MINUS_SRC_COLOR,B.ZERO,B.ONE);break;case Ke:B.blendFunc(B.ZERO,B.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}r=null,l=null,M=null,Y=null,K.set(0,0,0),N=0,w=H,d=AI}return}EA=EA||QA,yA=yA||j,tI=tI||X,(QA!==n||EA!==c)&&(B.blendEquationSeparate(nI[QA],nI[EA]),n=QA,c=EA),(j!==r||X!==l||yA!==M||tI!==Y)&&(B.blendFuncSeparate(R[j],R[X],R[yA],R[tI]),r=j,l=X,M=yA,Y=tI),(NI.equals(K)===!1||_I!==N)&&(B.blendColor(NI.r,NI.g,NI.b,_I),K.copy(NI),N=_I),w=H,d=!1}function CI(H,QA){H.side===hg?sA(B.CULL_FACE):SA(B.CULL_FACE);let j=H.side===gg;QA&&(j=!j),EI(j),H.blending===_C&&H.transparent===!1?UI(QC):UI(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),Q.setFunc(H.depthFunc),Q.setTest(H.depthTest),Q.setMask(H.depthWrite),C.setMask(H.colorWrite);const X=H.stencilWrite;E.setTest(X),X&&(E.setMask(H.stencilWriteMask),E.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),E.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),qA(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?SA(B.SAMPLE_ALPHA_TO_COVERAGE):sA(B.SAMPLE_ALPHA_TO_COVERAGE)}function EI(H){y!==H&&(H?B.frontFace(B.CW):B.frontFace(B.CCW),y=H)}function kA(H){H!==mg?(SA(B.CULL_FACE),H!==G&&(H===GC?B.cullFace(B.BACK):H===QD?B.cullFace(B.FRONT):B.cullFace(B.FRONT_AND_BACK))):sA(B.CULL_FACE),G=H}function MI(H){H!==p&&(V&&B.lineWidth(H),p=H)}function qA(H,QA,j){H?(SA(B.POLYGON_OFFSET_FILL),(T!==QA||x!==j)&&(B.polygonOffset(QA,j),T=QA,x=j)):sA(B.POLYGON_OFFSET_FILL)}function mA(H){H?SA(B.SCISSOR_TEST):sA(B.SCISSOR_TEST)}function J(H){H===void 0&&(H=B.TEXTURE0+Z-1),W!==H&&(B.activeTexture(H),W=H)}function k(H,QA,j){j===void 0&&(W===null?j=B.TEXTURE0+Z-1:j=W);let X=iA[j];X===void 0&&(X={type:void 0,texture:void 0},iA[j]=X),(X.type!==H||X.texture!==QA)&&(W!==j&&(B.activeTexture(j),W=j),B.bindTexture(H,QA||CA[H]),X.type=H,X.texture=QA)}function O(){const H=iA[W];H!==void 0&&H.type!==void 0&&(B.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function AA(){try{B.compressedTexImage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function gA(){try{B.compressedTexImage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function $(){try{B.texSubImage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function NA(){try{B.texSubImage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function eA(){try{B.compressedTexSubImage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function rA(){try{B.compressedTexSubImage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function LA(){try{B.texStorage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function BA(){try{B.texStorage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nA(){try{B.texImage2D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function VA(){try{B.texImage3D.apply(B,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dA(H){jA.equals(H)===!1&&(B.scissor(H.x,H.y,H.z,H.w),jA.copy(H))}function DA(H){QI.equals(H)===!1&&(B.viewport(H.x,H.y,H.z,H.w),QI.copy(H))}function YA(H,QA){let j=o.get(QA);j===void 0&&(j=new WeakMap,o.set(QA,j));let X=j.get(H);X===void 0&&(X=B.getUniformBlockIndex(QA,H.name),j.set(H,X))}function vA(H,QA){const j=o.get(QA).get(H);i.get(QA)!==j&&(B.uniformBlockBinding(QA,j,H.__bindingPointIndex),i.set(QA,j))}function rI(){B.disable(B.BLEND),B.disable(B.CULL_FACE),B.disable(B.DEPTH_TEST),B.disable(B.POLYGON_OFFSET_FILL),B.disable(B.SCISSOR_TEST),B.disable(B.STENCIL_TEST),B.disable(B.SAMPLE_ALPHA_TO_COVERAGE),B.blendEquation(B.FUNC_ADD),B.blendFunc(B.ONE,B.ZERO),B.blendFuncSeparate(B.ONE,B.ZERO,B.ONE,B.ZERO),B.blendColor(0,0,0,0),B.colorMask(!0,!0,!0,!0),B.clearColor(0,0,0,0),B.depthMask(!0),B.depthFunc(B.LESS),B.clearDepth(1),B.stencilMask(4294967295),B.stencilFunc(B.ALWAYS,0,4294967295),B.stencilOp(B.KEEP,B.KEEP,B.KEEP),B.clearStencil(0),B.cullFace(B.BACK),B.frontFace(B.CCW),B.polygonOffset(0,0),B.activeTexture(B.TEXTURE0),B.bindFramebuffer(B.FRAMEBUFFER,null),B.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),B.bindFramebuffer(B.READ_FRAMEBUFFER,null),B.useProgram(null),B.lineWidth(1),B.scissor(0,0,B.canvas.width,B.canvas.height),B.viewport(0,0,B.canvas.width,B.canvas.height),e={},W=null,iA={},t={},a=new WeakMap,s=[],h=null,S=!1,w=null,n=null,r=null,l=null,c=null,M=null,Y=null,K=new KA(0,0,0),N=0,d=!1,y=null,G=null,p=null,T=null,x=null,jA.set(0,0,B.canvas.width,B.canvas.height),QI.set(0,0,B.canvas.width,B.canvas.height),C.reset(),Q.reset(),E.reset()}return{buffers:{color:C,depth:Q,stencil:E},enable:SA,disable:sA,bindFramebuffer:HA,drawBuffers:OA,useProgram:WA,setBlending:UI,setMaterial:CI,setFlipSided:EI,setCullFace:kA,setLineWidth:MI,setPolygonOffset:qA,setScissorTest:mA,activeTexture:J,bindTexture:k,unbindTexture:O,compressedTexImage2D:AA,compressedTexImage3D:gA,texImage2D:nA,texImage3D:VA,updateUBOMapping:YA,uniformBlockBinding:vA,texStorage2D:LA,texStorage3D:BA,texSubImage2D:$,texSubImage3D:NA,compressedTexSubImage2D:eA,compressedTexSubImage3D:rA,scissor:dA,viewport:DA,reset:rI}}function Vt(B,A,I,g){const C=Gc(g);switch(I){case Ye:return B*A;case ue:return B*A;case He:return B*A*2;case jE:return B*A/C.components*C.byteLength;case VE:return B*A/C.components*C.byteLength;case me:return B*A*2/C.components*C.byteLength;case XE:return B*A*2/C.components*C.byteLength;case Le:return B*A*3/C.components*C.byteLength;case eg:return B*A*4/C.components*C.byteLength;case zE:return B*A*4/C.components*C.byteLength;case pQ:case dQ:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*8;case qQ:case YQ:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case Ai:case gi:return Math.max(B,16)*Math.max(A,8)/4;case $E:case Ii:return Math.max(B,8)*Math.max(A,8)/2;case Ci:case Bi:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*8;case Qi:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case Ei:return Math.floor((B+3)/4)*Math.floor((A+3)/4)*16;case ii:return Math.floor((B+4)/5)*Math.floor((A+3)/4)*16;case oi:return Math.floor((B+4)/5)*Math.floor((A+4)/5)*16;case ei:return Math.floor((B+5)/6)*Math.floor((A+4)/5)*16;case ti:return Math.floor((B+5)/6)*Math.floor((A+5)/6)*16;case ai:return Math.floor((B+7)/8)*Math.floor((A+4)/5)*16;case si:return Math.floor((B+7)/8)*Math.floor((A+5)/6)*16;case Di:return Math.floor((B+7)/8)*Math.floor((A+7)/8)*16;case hi:return Math.floor((B+9)/10)*Math.floor((A+4)/5)*16;case ri:return Math.floor((B+9)/10)*Math.floor((A+5)/6)*16;case ni:return Math.floor((B+9)/10)*Math.floor((A+7)/8)*16;case Si:return Math.floor((B+9)/10)*Math.floor((A+9)/10)*16;case wi:return Math.floor((B+11)/12)*Math.floor((A+9)/10)*16;case ci:return Math.floor((B+11)/12)*Math.floor((A+11)/12)*16;case LQ:case li:case Gi:return Math.ceil(B/4)*Math.ceil(A/4)*16;case fe:case ki:return Math.ceil(B/4)*Math.ceil(A/4)*8;case yi:case Ui:return Math.ceil(B/4)*Math.ceil(A/4)*16}throw new Error(`Unable to determine texture byte length for ${I} format.`)}function Gc(B){switch(B){case rg:case pe:return{byteLength:1,components:1};case HB:case de:case xg:return{byteLength:2,components:1};case WE:case PE:return{byteLength:2,components:4};case UC:case ZE:case Cg:return{byteLength:4,components:1};case qe:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${B}.`)}function kc(B,A,I,g,C,Q,E){const i=A.has("WEBGL_multisampled_render_to_texture")?A.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),e=new pA,t=new WeakMap;let a;const s=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(J,k){return h?new OffscreenCanvas(J,k):bB("canvas")}function w(J,k,O){let AA=1;const gA=mA(J);if((gA.width>O||gA.height>O)&&(AA=O/Math.max(gA.width,gA.height)),AA<1)if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap||typeof VideoFrame<"u"&&J instanceof VideoFrame){const $=Math.floor(AA*gA.width),NA=Math.floor(AA*gA.height);a===void 0&&(a=S($,NA));const eA=k?S($,NA):a;return eA.width=$,eA.height=NA,eA.getContext("2d").drawImage(J,0,0,$,NA),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+gA.width+"x"+gA.height+") to ("+$+"x"+NA+")."),eA}else return"data"in J&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+gA.width+"x"+gA.height+")."),J;return J}function n(J){return J.generateMipmaps&&J.minFilter!==TI&&J.minFilter!==uI}function r(J){B.generateMipmap(J)}function l(J,k,O,AA,gA=!1){if(J!==null){if(B[J]!==void 0)return B[J];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+J+"'")}let $=k;if(k===B.RED&&(O===B.FLOAT&&($=B.R32F),O===B.HALF_FLOAT&&($=B.R16F),O===B.UNSIGNED_BYTE&&($=B.R8)),k===B.RED_INTEGER&&(O===B.UNSIGNED_BYTE&&($=B.R8UI),O===B.UNSIGNED_SHORT&&($=B.R16UI),O===B.UNSIGNED_INT&&($=B.R32UI),O===B.BYTE&&($=B.R8I),O===B.SHORT&&($=B.R16I),O===B.INT&&($=B.R32I)),k===B.RG&&(O===B.FLOAT&&($=B.RG32F),O===B.HALF_FLOAT&&($=B.RG16F),O===B.UNSIGNED_BYTE&&($=B.RG8)),k===B.RG_INTEGER&&(O===B.UNSIGNED_BYTE&&($=B.RG8UI),O===B.UNSIGNED_SHORT&&($=B.RG16UI),O===B.UNSIGNED_INT&&($=B.RG32UI),O===B.BYTE&&($=B.RG8I),O===B.SHORT&&($=B.RG16I),O===B.INT&&($=B.RG32I)),k===B.RGB&&O===B.UNSIGNED_INT_5_9_9_9_REV&&($=B.RGB9_E5),k===B.RGBA){const NA=gA?mQ:XA.getTransfer(AA);O===B.FLOAT&&($=B.RGBA32F),O===B.HALF_FLOAT&&($=B.RGBA16F),O===B.UNSIGNED_BYTE&&($=NA===aI?B.SRGB8_ALPHA8:B.RGBA8),O===B.UNSIGNED_SHORT_4_4_4_4&&($=B.RGBA4),O===B.UNSIGNED_SHORT_5_5_5_1&&($=B.RGB5_A1)}return($===B.R16F||$===B.R32F||$===B.RG16F||$===B.RG32F||$===B.RGBA16F||$===B.RGBA32F)&&A.get("EXT_color_buffer_float"),$}function c(J,k){let O;return J?k===null||k===UC||k===PC?O=B.DEPTH24_STENCIL8:k===Cg?O=B.DEPTH32F_STENCIL8:k===HB&&(O=B.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):k===null||k===UC||k===PC?O=B.DEPTH_COMPONENT24:k===Cg?O=B.DEPTH_COMPONENT32F:k===HB&&(O=B.DEPTH_COMPONENT16),O}function M(J,k){return n(J)===!0||J.isFramebufferTexture&&J.minFilter!==TI&&J.minFilter!==uI?Math.log2(Math.max(k.width,k.height))+1:J.mipmaps!==void 0&&J.mipmaps.length>0?J.mipmaps.length:J.isCompressedTexture&&Array.isArray(J.image)?k.mipmaps.length:1}function Y(J){const k=J.target;k.removeEventListener("dispose",Y),N(k),k.isVideoTexture&&t.delete(k)}function K(J){const k=J.target;k.removeEventListener("dispose",K),y(k)}function N(J){const k=g.get(J);if(k.__webglInit===void 0)return;const O=J.source,AA=s.get(O);if(AA){const gA=AA[k.__cacheKey];gA.usedTimes--,gA.usedTimes===0&&d(J),Object.keys(AA).length===0&&s.delete(O)}g.remove(J)}function d(J){const k=g.get(J);B.deleteTexture(k.__webglTexture);const O=J.source,AA=s.get(O);delete AA[k.__cacheKey],E.memory.textures--}function y(J){const k=g.get(J);if(J.depthTexture&&J.depthTexture.dispose(),J.isWebGLCubeRenderTarget)for(let AA=0;AA<6;AA++){if(Array.isArray(k.__webglFramebuffer[AA]))for(let gA=0;gA<k.__webglFramebuffer[AA].length;gA++)B.deleteFramebuffer(k.__webglFramebuffer[AA][gA]);else B.deleteFramebuffer(k.__webglFramebuffer[AA]);k.__webglDepthbuffer&&B.deleteRenderbuffer(k.__webglDepthbuffer[AA])}else{if(Array.isArray(k.__webglFramebuffer))for(let AA=0;AA<k.__webglFramebuffer.length;AA++)B.deleteFramebuffer(k.__webglFramebuffer[AA]);else B.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&B.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&B.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let AA=0;AA<k.__webglColorRenderbuffer.length;AA++)k.__webglColorRenderbuffer[AA]&&B.deleteRenderbuffer(k.__webglColorRenderbuffer[AA]);k.__webglDepthRenderbuffer&&B.deleteRenderbuffer(k.__webglDepthRenderbuffer)}const O=J.textures;for(let AA=0,gA=O.length;AA<gA;AA++){const $=g.get(O[AA]);$.__webglTexture&&(B.deleteTexture($.__webglTexture),E.memory.textures--),g.remove(O[AA])}g.remove(J)}let G=0;function p(){G=0}function T(){const J=G;return J>=C.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+J+" texture units while this GPU supports only "+C.maxTextures),G+=1,J}function x(J){const k=[];return k.push(J.wrapS),k.push(J.wrapT),k.push(J.wrapR||0),k.push(J.magFilter),k.push(J.minFilter),k.push(J.anisotropy),k.push(J.internalFormat),k.push(J.format),k.push(J.type),k.push(J.generateMipmaps),k.push(J.premultiplyAlpha),k.push(J.flipY),k.push(J.unpackAlignment),k.push(J.colorSpace),k.join()}function Z(J,k){const O=g.get(J);if(J.isVideoTexture&&MI(J),J.isRenderTargetTexture===!1&&J.version>0&&O.__version!==J.version){const AA=J.image;if(AA===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(AA.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{QI(O,J,k);return}}I.bindTexture(B.TEXTURE_2D,O.__webglTexture,B.TEXTURE0+k)}function V(J,k){const O=g.get(J);if(J.version>0&&O.__version!==J.version){QI(O,J,k);return}I.bindTexture(B.TEXTURE_2D_ARRAY,O.__webglTexture,B.TEXTURE0+k)}function _(J,k){const O=g.get(J);if(J.version>0&&O.__version!==J.version){QI(O,J,k);return}I.bindTexture(B.TEXTURE_3D,O.__webglTexture,B.TEXTURE0+k)}function z(J,k){const O=g.get(J);if(J.version>0&&O.__version!==J.version){P(O,J,k);return}I.bindTexture(B.TEXTURE_CUBE_MAP,O.__webglTexture,B.TEXTURE0+k)}const W={[yC]:B.REPEAT,[Mg]:B.CLAMP_TO_EDGE,[FQ]:B.MIRRORED_REPEAT},iA={[TI]:B.NEAREST,[Re]:B.NEAREST_MIPMAP_NEAREST,[uB]:B.NEAREST_MIPMAP_LINEAR,[uI]:B.LINEAR,[RQ]:B.LINEAR_MIPMAP_NEAREST,[Ng]:B.LINEAR_MIPMAP_LINEAR},lA={[jD]:B.NEVER,[Ih]:B.ALWAYS,[VD]:B.LESS,[Oe]:B.LEQUAL,[XD]:B.EQUAL,[Ah]:B.GEQUAL,[zD]:B.GREATER,[$D]:B.NOTEQUAL};function FA(J,k){if(k.type===Cg&&A.has("OES_texture_float_linear")===!1&&(k.magFilter===uI||k.magFilter===RQ||k.magFilter===uB||k.magFilter===Ng||k.minFilter===uI||k.minFilter===RQ||k.minFilter===uB||k.minFilter===Ng)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B.texParameteri(J,B.TEXTURE_WRAP_S,W[k.wrapS]),B.texParameteri(J,B.TEXTURE_WRAP_T,W[k.wrapT]),(J===B.TEXTURE_3D||J===B.TEXTURE_2D_ARRAY)&&B.texParameteri(J,B.TEXTURE_WRAP_R,W[k.wrapR]),B.texParameteri(J,B.TEXTURE_MAG_FILTER,iA[k.magFilter]),B.texParameteri(J,B.TEXTURE_MIN_FILTER,iA[k.minFilter]),k.compareFunction&&(B.texParameteri(J,B.TEXTURE_COMPARE_MODE,B.COMPARE_REF_TO_TEXTURE),B.texParameteri(J,B.TEXTURE_COMPARE_FUNC,lA[k.compareFunction])),A.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===TI||k.minFilter!==uB&&k.minFilter!==Ng||k.type===Cg&&A.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||g.get(k).__currentAnisotropy){const O=A.get("EXT_texture_filter_anisotropic");B.texParameterf(J,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,C.getMaxAnisotropy())),g.get(k).__currentAnisotropy=k.anisotropy}}}function jA(J,k){let O=!1;J.__webglInit===void 0&&(J.__webglInit=!0,k.addEventListener("dispose",Y));const AA=k.source;let gA=s.get(AA);gA===void 0&&(gA={},s.set(AA,gA));const $=x(k);if($!==J.__cacheKey){gA[$]===void 0&&(gA[$]={texture:B.createTexture(),usedTimes:0},E.memory.textures++,O=!0),gA[$].usedTimes++;const NA=gA[J.__cacheKey];NA!==void 0&&(gA[J.__cacheKey].usedTimes--,NA.usedTimes===0&&d(k)),J.__cacheKey=$,J.__webglTexture=gA[$].texture}return O}function QI(J,k,O){let AA=B.TEXTURE_2D;(k.isDataArrayTexture||k.isCompressedArrayTexture)&&(AA=B.TEXTURE_2D_ARRAY),k.isData3DTexture&&(AA=B.TEXTURE_3D);const gA=jA(J,k),$=k.source;I.bindTexture(AA,J.__webglTexture,B.TEXTURE0+O);const NA=g.get($);if($.version!==NA.__version||gA===!0){I.activeTexture(B.TEXTURE0+O);const eA=XA.getPrimaries(XA.workingColorSpace),rA=k.colorSpace===iC?null:XA.getPrimaries(k.colorSpace),LA=k.colorSpace===iC||eA===rA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,LA);let BA=w(k.image,!1,C.maxTextureSize);BA=qA(k,BA);const nA=Q.convert(k.format,k.colorSpace),VA=Q.convert(k.type);let dA=l(k.internalFormat,nA,VA,k.colorSpace,k.isVideoTexture);FA(AA,k);let DA;const YA=k.mipmaps,vA=k.isVideoTexture!==!0,rI=NA.__version===void 0||gA===!0,H=$.dataReady,QA=M(k,BA);if(k.isDepthTexture)dA=c(k.format===VC,k.type),rI&&(vA?I.texStorage2D(B.TEXTURE_2D,1,dA,BA.width,BA.height):I.texImage2D(B.TEXTURE_2D,0,dA,BA.width,BA.height,0,nA,VA,null));else if(k.isDataTexture)if(YA.length>0){vA&&rI&&I.texStorage2D(B.TEXTURE_2D,QA,dA,YA[0].width,YA[0].height);for(let j=0,X=YA.length;j<X;j++)DA=YA[j],vA?H&&I.texSubImage2D(B.TEXTURE_2D,j,0,0,DA.width,DA.height,nA,VA,DA.data):I.texImage2D(B.TEXTURE_2D,j,dA,DA.width,DA.height,0,nA,VA,DA.data);k.generateMipmaps=!1}else vA?(rI&&I.texStorage2D(B.TEXTURE_2D,QA,dA,BA.width,BA.height),H&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,BA.width,BA.height,nA,VA,BA.data)):I.texImage2D(B.TEXTURE_2D,0,dA,BA.width,BA.height,0,nA,VA,BA.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){vA&&rI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,QA,dA,YA[0].width,YA[0].height,BA.depth);for(let j=0,X=YA.length;j<X;j++)if(DA=YA[j],k.format!==eg)if(nA!==null)if(vA){if(H)if(k.layerUpdates.size>0){const EA=Vt(DA.width,DA.height,k.format,k.type);for(const yA of k.layerUpdates){const tI=DA.data.subarray(yA*EA/DA.data.BYTES_PER_ELEMENT,(yA+1)*EA/DA.data.BYTES_PER_ELEMENT);I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,j,0,0,yA,DA.width,DA.height,1,nA,tI,0,0)}k.clearLayerUpdates()}else I.compressedTexSubImage3D(B.TEXTURE_2D_ARRAY,j,0,0,0,DA.width,DA.height,BA.depth,nA,DA.data,0,0)}else I.compressedTexImage3D(B.TEXTURE_2D_ARRAY,j,dA,DA.width,DA.height,BA.depth,0,DA.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else vA?H&&I.texSubImage3D(B.TEXTURE_2D_ARRAY,j,0,0,0,DA.width,DA.height,BA.depth,nA,VA,DA.data):I.texImage3D(B.TEXTURE_2D_ARRAY,j,dA,DA.width,DA.height,BA.depth,0,nA,VA,DA.data)}else{vA&&rI&&I.texStorage2D(B.TEXTURE_2D,QA,dA,YA[0].width,YA[0].height);for(let j=0,X=YA.length;j<X;j++)DA=YA[j],k.format!==eg?nA!==null?vA?H&&I.compressedTexSubImage2D(B.TEXTURE_2D,j,0,0,DA.width,DA.height,nA,DA.data):I.compressedTexImage2D(B.TEXTURE_2D,j,dA,DA.width,DA.height,0,DA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vA?H&&I.texSubImage2D(B.TEXTURE_2D,j,0,0,DA.width,DA.height,nA,VA,DA.data):I.texImage2D(B.TEXTURE_2D,j,dA,DA.width,DA.height,0,nA,VA,DA.data)}else if(k.isDataArrayTexture)if(vA){if(rI&&I.texStorage3D(B.TEXTURE_2D_ARRAY,QA,dA,BA.width,BA.height,BA.depth),H)if(k.layerUpdates.size>0){const j=Vt(BA.width,BA.height,k.format,k.type);for(const X of k.layerUpdates){const EA=BA.data.subarray(X*j/BA.data.BYTES_PER_ELEMENT,(X+1)*j/BA.data.BYTES_PER_ELEMENT);I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,X,BA.width,BA.height,1,nA,VA,EA)}k.clearLayerUpdates()}else I.texSubImage3D(B.TEXTURE_2D_ARRAY,0,0,0,0,BA.width,BA.height,BA.depth,nA,VA,BA.data)}else I.texImage3D(B.TEXTURE_2D_ARRAY,0,dA,BA.width,BA.height,BA.depth,0,nA,VA,BA.data);else if(k.isData3DTexture)vA?(rI&&I.texStorage3D(B.TEXTURE_3D,QA,dA,BA.width,BA.height,BA.depth),H&&I.texSubImage3D(B.TEXTURE_3D,0,0,0,0,BA.width,BA.height,BA.depth,nA,VA,BA.data)):I.texImage3D(B.TEXTURE_3D,0,dA,BA.width,BA.height,BA.depth,0,nA,VA,BA.data);else if(k.isFramebufferTexture){if(rI)if(vA)I.texStorage2D(B.TEXTURE_2D,QA,dA,BA.width,BA.height);else{let j=BA.width,X=BA.height;for(let EA=0;EA<QA;EA++)I.texImage2D(B.TEXTURE_2D,EA,dA,j,X,0,nA,VA,null),j>>=1,X>>=1}}else if(YA.length>0){if(vA&&rI){const j=mA(YA[0]);I.texStorage2D(B.TEXTURE_2D,QA,dA,j.width,j.height)}for(let j=0,X=YA.length;j<X;j++)DA=YA[j],vA?H&&I.texSubImage2D(B.TEXTURE_2D,j,0,0,nA,VA,DA):I.texImage2D(B.TEXTURE_2D,j,dA,nA,VA,DA);k.generateMipmaps=!1}else if(vA){if(rI){const j=mA(BA);I.texStorage2D(B.TEXTURE_2D,QA,dA,j.width,j.height)}H&&I.texSubImage2D(B.TEXTURE_2D,0,0,0,nA,VA,BA)}else I.texImage2D(B.TEXTURE_2D,0,dA,nA,VA,BA);n(k)&&r(AA),NA.__version=$.version,k.onUpdate&&k.onUpdate(k)}J.__version=k.version}function P(J,k,O){if(k.image.length!==6)return;const AA=jA(J,k),gA=k.source;I.bindTexture(B.TEXTURE_CUBE_MAP,J.__webglTexture,B.TEXTURE0+O);const $=g.get(gA);if(gA.version!==$.__version||AA===!0){I.activeTexture(B.TEXTURE0+O);const NA=XA.getPrimaries(XA.workingColorSpace),eA=k.colorSpace===iC?null:XA.getPrimaries(k.colorSpace),rA=k.colorSpace===iC||NA===eA?B.NONE:B.BROWSER_DEFAULT_WEBGL;B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment),B.pixelStorei(B.UNPACK_COLORSPACE_CONVERSION_WEBGL,rA);const LA=k.isCompressedTexture||k.image[0].isCompressedTexture,BA=k.image[0]&&k.image[0].isDataTexture,nA=[];for(let X=0;X<6;X++)!LA&&!BA?nA[X]=w(k.image[X],!0,C.maxCubemapSize):nA[X]=BA?k.image[X].image:k.image[X],nA[X]=qA(k,nA[X]);const VA=nA[0],dA=Q.convert(k.format,k.colorSpace),DA=Q.convert(k.type),YA=l(k.internalFormat,dA,DA,k.colorSpace),vA=k.isVideoTexture!==!0,rI=$.__version===void 0||AA===!0,H=gA.dataReady;let QA=M(k,VA);FA(B.TEXTURE_CUBE_MAP,k);let j;if(LA){vA&&rI&&I.texStorage2D(B.TEXTURE_CUBE_MAP,QA,YA,VA.width,VA.height);for(let X=0;X<6;X++){j=nA[X].mipmaps;for(let EA=0;EA<j.length;EA++){const yA=j[EA];k.format!==eg?dA!==null?vA?H&&I.compressedTexSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,EA,0,0,yA.width,yA.height,dA,yA.data):I.compressedTexImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,EA,YA,yA.width,yA.height,0,yA.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):vA?H&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,EA,0,0,yA.width,yA.height,dA,DA,yA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,EA,YA,yA.width,yA.height,0,dA,DA,yA.data)}}}else{if(j=k.mipmaps,vA&&rI){j.length>0&&QA++;const X=mA(nA[0]);I.texStorage2D(B.TEXTURE_CUBE_MAP,QA,YA,X.width,X.height)}for(let X=0;X<6;X++)if(BA){vA?H&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,nA[X].width,nA[X].height,dA,DA,nA[X].data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,YA,nA[X].width,nA[X].height,0,dA,DA,nA[X].data);for(let EA=0;EA<j.length;EA++){const yA=j[EA].image[X].image;vA?H&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,EA+1,0,0,yA.width,yA.height,dA,DA,yA.data):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,EA+1,YA,yA.width,yA.height,0,dA,DA,yA.data)}}else{vA?H&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,dA,DA,nA[X]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,YA,dA,DA,nA[X]);for(let EA=0;EA<j.length;EA++){const yA=j[EA];vA?H&&I.texSubImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,EA+1,0,0,dA,DA,yA.image[X]):I.texImage2D(B.TEXTURE_CUBE_MAP_POSITIVE_X+X,EA+1,YA,dA,DA,yA.image[X])}}}n(k)&&r(B.TEXTURE_CUBE_MAP),$.__version=gA.version,k.onUpdate&&k.onUpdate(k)}J.__version=k.version}function CA(J,k,O,AA,gA,$){const NA=Q.convert(O.format,O.colorSpace),eA=Q.convert(O.type),rA=l(O.internalFormat,NA,eA,O.colorSpace);if(!g.get(k).__hasExternalTextures){const LA=Math.max(1,k.width>>$),BA=Math.max(1,k.height>>$);gA===B.TEXTURE_3D||gA===B.TEXTURE_2D_ARRAY?I.texImage3D(gA,$,rA,LA,BA,k.depth,0,NA,eA,null):I.texImage2D(gA,$,rA,LA,BA,0,NA,eA,null)}I.bindFramebuffer(B.FRAMEBUFFER,J),kA(k)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,AA,gA,g.get(O).__webglTexture,0,EI(k)):(gA===B.TEXTURE_2D||gA>=B.TEXTURE_CUBE_MAP_POSITIVE_X&&gA<=B.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&B.framebufferTexture2D(B.FRAMEBUFFER,AA,gA,g.get(O).__webglTexture,$),I.bindFramebuffer(B.FRAMEBUFFER,null)}function SA(J,k,O){if(B.bindRenderbuffer(B.RENDERBUFFER,J),k.depthBuffer){const AA=k.depthTexture,gA=AA&&AA.isDepthTexture?AA.type:null,$=c(k.stencilBuffer,gA),NA=k.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,eA=EI(k);kA(k)?i.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,eA,$,k.width,k.height):O?B.renderbufferStorageMultisample(B.RENDERBUFFER,eA,$,k.width,k.height):B.renderbufferStorage(B.RENDERBUFFER,$,k.width,k.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,NA,B.RENDERBUFFER,J)}else{const AA=k.textures;for(let gA=0;gA<AA.length;gA++){const $=AA[gA],NA=Q.convert($.format,$.colorSpace),eA=Q.convert($.type),rA=l($.internalFormat,NA,eA,$.colorSpace),LA=EI(k);O&&kA(k)===!1?B.renderbufferStorageMultisample(B.RENDERBUFFER,LA,rA,k.width,k.height):kA(k)?i.renderbufferStorageMultisampleEXT(B.RENDERBUFFER,LA,rA,k.width,k.height):B.renderbufferStorage(B.RENDERBUFFER,rA,k.width,k.height)}}B.bindRenderbuffer(B.RENDERBUFFER,null)}function sA(J,k){if(k&&k.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(I.bindFramebuffer(B.FRAMEBUFFER,J),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!g.get(k.depthTexture).__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)&&(k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0),Z(k.depthTexture,0);const O=g.get(k.depthTexture).__webglTexture,AA=EI(k);if(k.depthTexture.format===jC)kA(k)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,O,0,AA):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_ATTACHMENT,B.TEXTURE_2D,O,0);else if(k.depthTexture.format===VC)kA(k)?i.framebufferTexture2DMultisampleEXT(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,O,0,AA):B.framebufferTexture2D(B.FRAMEBUFFER,B.DEPTH_STENCIL_ATTACHMENT,B.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function HA(J){const k=g.get(J),O=J.isWebGLCubeRenderTarget===!0;if(J.depthTexture&&!k.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");sA(k.__webglFramebuffer,J)}else if(O){k.__webglDepthbuffer=[];for(let AA=0;AA<6;AA++)I.bindFramebuffer(B.FRAMEBUFFER,k.__webglFramebuffer[AA]),k.__webglDepthbuffer[AA]=B.createRenderbuffer(),SA(k.__webglDepthbuffer[AA],J,!1)}else I.bindFramebuffer(B.FRAMEBUFFER,k.__webglFramebuffer),k.__webglDepthbuffer=B.createRenderbuffer(),SA(k.__webglDepthbuffer,J,!1);I.bindFramebuffer(B.FRAMEBUFFER,null)}function OA(J,k,O){const AA=g.get(J);k!==void 0&&CA(AA.__webglFramebuffer,J,J.texture,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,0),O!==void 0&&HA(J)}function WA(J){const k=J.texture,O=g.get(J),AA=g.get(k);J.addEventListener("dispose",K);const gA=J.textures,$=J.isWebGLCubeRenderTarget===!0,NA=gA.length>1;if(NA||(AA.__webglTexture===void 0&&(AA.__webglTexture=B.createTexture()),AA.__version=k.version,E.memory.textures++),$){O.__webglFramebuffer=[];for(let eA=0;eA<6;eA++)if(k.mipmaps&&k.mipmaps.length>0){O.__webglFramebuffer[eA]=[];for(let rA=0;rA<k.mipmaps.length;rA++)O.__webglFramebuffer[eA][rA]=B.createFramebuffer()}else O.__webglFramebuffer[eA]=B.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){O.__webglFramebuffer=[];for(let eA=0;eA<k.mipmaps.length;eA++)O.__webglFramebuffer[eA]=B.createFramebuffer()}else O.__webglFramebuffer=B.createFramebuffer();if(NA)for(let eA=0,rA=gA.length;eA<rA;eA++){const LA=g.get(gA[eA]);LA.__webglTexture===void 0&&(LA.__webglTexture=B.createTexture(),E.memory.textures++)}if(J.samples>0&&kA(J)===!1){O.__webglMultisampledFramebuffer=B.createFramebuffer(),O.__webglColorRenderbuffer=[],I.bindFramebuffer(B.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let eA=0;eA<gA.length;eA++){const rA=gA[eA];O.__webglColorRenderbuffer[eA]=B.createRenderbuffer(),B.bindRenderbuffer(B.RENDERBUFFER,O.__webglColorRenderbuffer[eA]);const LA=Q.convert(rA.format,rA.colorSpace),BA=Q.convert(rA.type),nA=l(rA.internalFormat,LA,BA,rA.colorSpace,J.isXRRenderTarget===!0),VA=EI(J);B.renderbufferStorageMultisample(B.RENDERBUFFER,VA,nA,J.width,J.height),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+eA,B.RENDERBUFFER,O.__webglColorRenderbuffer[eA])}B.bindRenderbuffer(B.RENDERBUFFER,null),J.depthBuffer&&(O.__webglDepthRenderbuffer=B.createRenderbuffer(),SA(O.__webglDepthRenderbuffer,J,!0)),I.bindFramebuffer(B.FRAMEBUFFER,null)}}if($){I.bindTexture(B.TEXTURE_CUBE_MAP,AA.__webglTexture),FA(B.TEXTURE_CUBE_MAP,k);for(let eA=0;eA<6;eA++)if(k.mipmaps&&k.mipmaps.length>0)for(let rA=0;rA<k.mipmaps.length;rA++)CA(O.__webglFramebuffer[eA][rA],J,k,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+eA,rA);else CA(O.__webglFramebuffer[eA],J,k,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+eA,0);n(k)&&r(B.TEXTURE_CUBE_MAP),I.unbindTexture()}else if(NA){for(let eA=0,rA=gA.length;eA<rA;eA++){const LA=gA[eA],BA=g.get(LA);I.bindTexture(B.TEXTURE_2D,BA.__webglTexture),FA(B.TEXTURE_2D,LA),CA(O.__webglFramebuffer,J,LA,B.COLOR_ATTACHMENT0+eA,B.TEXTURE_2D,0),n(LA)&&r(B.TEXTURE_2D)}I.unbindTexture()}else{let eA=B.TEXTURE_2D;if((J.isWebGL3DRenderTarget||J.isWebGLArrayRenderTarget)&&(eA=J.isWebGL3DRenderTarget?B.TEXTURE_3D:B.TEXTURE_2D_ARRAY),I.bindTexture(eA,AA.__webglTexture),FA(eA,k),k.mipmaps&&k.mipmaps.length>0)for(let rA=0;rA<k.mipmaps.length;rA++)CA(O.__webglFramebuffer[rA],J,k,B.COLOR_ATTACHMENT0,eA,rA);else CA(O.__webglFramebuffer,J,k,B.COLOR_ATTACHMENT0,eA,0);n(k)&&r(eA),I.unbindTexture()}J.depthBuffer&&HA(J)}function nI(J){const k=J.textures;for(let O=0,AA=k.length;O<AA;O++){const gA=k[O];if(n(gA)){const $=J.isWebGLCubeRenderTarget?B.TEXTURE_CUBE_MAP:B.TEXTURE_2D,NA=g.get(gA).__webglTexture;I.bindTexture($,NA),r($),I.unbindTexture()}}}const R=[],UI=[];function CI(J){if(J.samples>0){if(kA(J)===!1){const k=J.textures,O=J.width,AA=J.height;let gA=B.COLOR_BUFFER_BIT;const $=J.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT,NA=g.get(J),eA=k.length>1;if(eA)for(let rA=0;rA<k.length;rA++)I.bindFramebuffer(B.FRAMEBUFFER,NA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+rA,B.RENDERBUFFER,null),I.bindFramebuffer(B.FRAMEBUFFER,NA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+rA,B.TEXTURE_2D,null,0);I.bindFramebuffer(B.READ_FRAMEBUFFER,NA.__webglMultisampledFramebuffer),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,NA.__webglFramebuffer);for(let rA=0;rA<k.length;rA++){if(J.resolveDepthBuffer&&(J.depthBuffer&&(gA|=B.DEPTH_BUFFER_BIT),J.stencilBuffer&&J.resolveStencilBuffer&&(gA|=B.STENCIL_BUFFER_BIT)),eA){B.framebufferRenderbuffer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.RENDERBUFFER,NA.__webglColorRenderbuffer[rA]);const LA=g.get(k[rA]).__webglTexture;B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,LA,0)}B.blitFramebuffer(0,0,O,AA,0,0,O,AA,gA,B.NEAREST),o===!0&&(R.length=0,UI.length=0,R.push(B.COLOR_ATTACHMENT0+rA),J.depthBuffer&&J.resolveDepthBuffer===!1&&(R.push($),UI.push($),B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,UI)),B.invalidateFramebuffer(B.READ_FRAMEBUFFER,R))}if(I.bindFramebuffer(B.READ_FRAMEBUFFER,null),I.bindFramebuffer(B.DRAW_FRAMEBUFFER,null),eA)for(let rA=0;rA<k.length;rA++){I.bindFramebuffer(B.FRAMEBUFFER,NA.__webglMultisampledFramebuffer),B.framebufferRenderbuffer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+rA,B.RENDERBUFFER,NA.__webglColorRenderbuffer[rA]);const LA=g.get(k[rA]).__webglTexture;I.bindFramebuffer(B.FRAMEBUFFER,NA.__webglFramebuffer),B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0+rA,B.TEXTURE_2D,LA,0)}I.bindFramebuffer(B.DRAW_FRAMEBUFFER,NA.__webglMultisampledFramebuffer)}else if(J.depthBuffer&&J.resolveDepthBuffer===!1&&o){const k=J.stencilBuffer?B.DEPTH_STENCIL_ATTACHMENT:B.DEPTH_ATTACHMENT;B.invalidateFramebuffer(B.DRAW_FRAMEBUFFER,[k])}}}function EI(J){return Math.min(C.maxSamples,J.samples)}function kA(J){const k=g.get(J);return J.samples>0&&A.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function MI(J){const k=E.render.frame;t.get(J)!==k&&(t.set(J,k),J.update())}function qA(J,k){const O=J.colorSpace,AA=J.format,gA=J.type;return J.isCompressedTexture===!0||J.isVideoTexture===!0||O!==FI&&O!==iC&&(XA.getTransfer(O)===aI?(AA!==eg||gA!==rg)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),k}function mA(J){return typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement?(e.width=J.naturalWidth||J.width,e.height=J.naturalHeight||J.height):typeof VideoFrame<"u"&&J instanceof VideoFrame?(e.width=J.displayWidth,e.height=J.displayHeight):(e.width=J.width,e.height=J.height),e}this.allocateTextureUnit=T,this.resetTextureUnits=p,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=_,this.setTextureCube=z,this.rebindTextures=OA,this.setupRenderTarget=WA,this.updateRenderTargetMipmap=nI,this.updateMultisampleRenderTarget=CI,this.setupDepthRenderbuffer=HA,this.setupFrameBufferTexture=CA,this.useMultisampledRTT=kA}function yc(B,A){function I(g,C=iC){let Q;const E=XA.getTransfer(C);if(g===rg)return B.UNSIGNED_BYTE;if(g===WE)return B.UNSIGNED_SHORT_4_4_4_4;if(g===PE)return B.UNSIGNED_SHORT_5_5_5_1;if(g===qe)return B.UNSIGNED_INT_5_9_9_9_REV;if(g===pe)return B.BYTE;if(g===de)return B.SHORT;if(g===HB)return B.UNSIGNED_SHORT;if(g===ZE)return B.INT;if(g===UC)return B.UNSIGNED_INT;if(g===Cg)return B.FLOAT;if(g===xg)return B.HALF_FLOAT;if(g===Ye)return B.ALPHA;if(g===Le)return B.RGB;if(g===eg)return B.RGBA;if(g===ue)return B.LUMINANCE;if(g===He)return B.LUMINANCE_ALPHA;if(g===jC)return B.DEPTH_COMPONENT;if(g===VC)return B.DEPTH_STENCIL;if(g===jE)return B.RED;if(g===VE)return B.RED_INTEGER;if(g===me)return B.RG;if(g===XE)return B.RG_INTEGER;if(g===zE)return B.RGBA_INTEGER;if(g===pQ||g===dQ||g===qQ||g===YQ)if(E===aI)if(Q=A.get("WEBGL_compressed_texture_s3tc_srgb"),Q!==null){if(g===pQ)return Q.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(g===dQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(g===qQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(g===YQ)return Q.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(Q=A.get("WEBGL_compressed_texture_s3tc"),Q!==null){if(g===pQ)return Q.COMPRESSED_RGB_S3TC_DXT1_EXT;if(g===dQ)return Q.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(g===qQ)return Q.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(g===YQ)return Q.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(g===$E||g===Ai||g===Ii||g===gi)if(Q=A.get("WEBGL_compressed_texture_pvrtc"),Q!==null){if(g===$E)return Q.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(g===Ai)return Q.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(g===Ii)return Q.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(g===gi)return Q.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(g===Ci||g===Bi||g===Qi)if(Q=A.get("WEBGL_compressed_texture_etc"),Q!==null){if(g===Ci||g===Bi)return E===aI?Q.COMPRESSED_SRGB8_ETC2:Q.COMPRESSED_RGB8_ETC2;if(g===Qi)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:Q.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(g===Ei||g===ii||g===oi||g===ei||g===ti||g===ai||g===si||g===Di||g===hi||g===ri||g===ni||g===Si||g===wi||g===ci)if(Q=A.get("WEBGL_compressed_texture_astc"),Q!==null){if(g===Ei)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:Q.COMPRESSED_RGBA_ASTC_4x4_KHR;if(g===ii)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:Q.COMPRESSED_RGBA_ASTC_5x4_KHR;if(g===oi)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:Q.COMPRESSED_RGBA_ASTC_5x5_KHR;if(g===ei)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:Q.COMPRESSED_RGBA_ASTC_6x5_KHR;if(g===ti)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:Q.COMPRESSED_RGBA_ASTC_6x6_KHR;if(g===ai)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:Q.COMPRESSED_RGBA_ASTC_8x5_KHR;if(g===si)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:Q.COMPRESSED_RGBA_ASTC_8x6_KHR;if(g===Di)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:Q.COMPRESSED_RGBA_ASTC_8x8_KHR;if(g===hi)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:Q.COMPRESSED_RGBA_ASTC_10x5_KHR;if(g===ri)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:Q.COMPRESSED_RGBA_ASTC_10x6_KHR;if(g===ni)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:Q.COMPRESSED_RGBA_ASTC_10x8_KHR;if(g===Si)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:Q.COMPRESSED_RGBA_ASTC_10x10_KHR;if(g===wi)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:Q.COMPRESSED_RGBA_ASTC_12x10_KHR;if(g===ci)return E===aI?Q.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:Q.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(g===LQ||g===li||g===Gi)if(Q=A.get("EXT_texture_compression_bptc"),Q!==null){if(g===LQ)return E===aI?Q.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:Q.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(g===li)return Q.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(g===Gi)return Q.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(g===fe||g===ki||g===yi||g===Ui)if(Q=A.get("EXT_texture_compression_rgtc"),Q!==null){if(g===LQ)return Q.COMPRESSED_RED_RGTC1_EXT;if(g===ki)return Q.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(g===yi)return Q.COMPRESSED_RED_GREEN_RGTC2_EXT;if(g===Ui)return Q.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return g===PC?B.UNSIGNED_INT_24_8:B[g]!==void 0?B[g]:null}return{convert:I}}class Uc extends $I{constructor(A=[]){super(),this.isArrayCamera=!0,this.cameras=A}}class Xg extends iI{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mc={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xg,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xg,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xg,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(A){return this._targetRay!==null&&this._targetRay.dispatchEvent(A),this._grip!==null&&this._grip.dispatchEvent(A),this._hand!==null&&this._hand.dispatchEvent(A),this}connect(A){if(A&&A.hand){const I=this._hand;if(I)for(const g of A.hand.values())this._getHandJoint(I,g)}return this.dispatchEvent({type:"connected",data:A}),this}disconnect(A){return this.dispatchEvent({type:"disconnected",data:A}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(A,I,g){let C=null,Q=null,E=null;const i=this._targetRay,o=this._grip,e=this._hand;if(A&&I.session.visibilityState!=="visible-blurred"){if(e&&A.hand){E=!0;for(const w of A.hand.values()){const n=I.getJointPose(w,g),r=this._getHandJoint(e,w);n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,r.jointRadius=n.radius),r.visible=n!==null}const t=e.joints["index-finger-tip"],a=e.joints["thumb-tip"],s=t.position.distanceTo(a.position),h=.02,S=.005;e.inputState.pinching&&s>h+S?(e.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:A.handedness,target:this})):!e.inputState.pinching&&s<=h-S&&(e.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:A.handedness,target:this}))}else o!==null&&A.gripSpace&&(Q=I.getPose(A.gripSpace,g),Q!==null&&(o.matrix.fromArray(Q.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,Q.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(Q.linearVelocity)):o.hasLinearVelocity=!1,Q.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(Q.angularVelocity)):o.hasAngularVelocity=!1));i!==null&&(C=I.getPose(A.targetRaySpace,g),C===null&&Q!==null&&(C=Q),C!==null&&(i.matrix.fromArray(C.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,C.linearVelocity?(i.hasLinearVelocity=!0,i.linearVelocity.copy(C.linearVelocity)):i.hasLinearVelocity=!1,C.angularVelocity?(i.hasAngularVelocity=!0,i.angularVelocity.copy(C.angularVelocity)):i.hasAngularVelocity=!1,this.dispatchEvent(Mc)))}return i!==null&&(i.visible=C!==null),o!==null&&(o.visible=Q!==null),e!==null&&(e.visible=E!==null),this}_getHandJoint(A,I){if(A.joints[I.jointName]===void 0){const g=new Xg;g.matrixAutoUpdate=!1,g.visible=!1,A.joints[I.jointName]=g,A.add(g)}return A.joints[I.jointName]}}const Nc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kc=`
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

`);this.workerSourceURL=URL.createObjectURL(new Blob([E]))}),this.decoderPending}_getWorker(A,I){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const C=new Worker(this.workerSourceURL);C._callbacks={},C._taskCosts={},C._taskLoad=0,C.postMessage({type:"init",decoderConfig:this.decoderConfig}),C.onmessage=function(Q){const E=Q.data;switch(E.type){case"decode":C._callbacks[E.id].resolve(E);break;case"error":C._callbacks[E.id].reject(E);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+E.type+'"')}},this.workerPool.push(C)}else this.workerPool.sort(function(C,Q){return C._taskLoad>Q._taskLoad?-1:1});const g=this.workerPool[this.workerPool.length-1];return g._taskCosts[A]=I,g._taskLoad+=I,g})}_releaseTask(A,I){A._taskLoad-=A._taskCosts[I],delete A._callbacks[I],delete A._taskCosts[I]}debug(){console.log("Task load: ",this.workerPool.map(A=>A._taskLoad))}dispose(){for(let A=0;A<this.workerPool.length;++A)this.workerPool[A].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function JG(){let B,A;onmessage=function(E){const i=E.data;switch(i.type){case"init":B=i.decoderConfig,A=new Promise(function(t){B.onModuleLoaded=function(a){t({draco:a})},DracoDecoderModule(B)});break;case"decode":const o=i.buffer,e=i.taskConfig;A.then(t=>{const a=t.draco,s=new a.Decoder;try{const h=I(a,s,new Int8Array(o),e),S=h.attributes.map(w=>w.array.buffer);h.index&&S.push(h.index.array.buffer),self.postMessage({type:"decode",id:i.id,geometry:h},S)}catch(h){console.error(h),self.postMessage({type:"error",id:i.id,error:h.message})}finally{a.destroy(s)}});break}};function I(E,i,o,e){const t=e.attributeIDs,a=e.attributeTypes;let s,h;const S=i.GetEncodedGeometryType(o);if(S===E.TRIANGULAR_MESH)s=new E.Mesh,h=i.DecodeArrayToMesh(o,o.byteLength,s);else if(S===E.POINT_CLOUD)s=new E.PointCloud,h=i.DecodeArrayToPointCloud(o,o.byteLength,s);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!h.ok()||s.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+h.error_msg());const w={index:null,attributes:[]};for(const n in t){const r=self[a[n]];let l,c;if(e.useUniqueIDs)c=t[n],l=i.GetAttributeByUniqueId(s,c);else{if(c=i.GetAttributeId(s,E[t[n]]),c===-1)continue;l=i.GetAttribute(s,c)}const M=C(E,i,s,n,r,l);n==="color"&&(M.vertexColorSpace=e.vertexColorSpace),w.attributes.push(M)}return S===E.TRIANGULAR_MESH&&(w.index=g(E,i,s)),E.destroy(s),w}function g(E,i,o){const e=o.num_faces()*3,t=e*4,a=E._malloc(t);i.GetTrianglesUInt32Array(o,t,a);const s=new Uint32Array(E.HEAPF32.buffer,a,e).slice();return E._free(a),{array:s,itemSize:1}}function C(E,i,o,e,t,a){const s=a.num_components(),h=o.num_points()*s,S=h*t.BYTES_PER_ELEMENT,w=Q(E,t),n=E._malloc(S);i.GetAttributeDataArrayForAllPoints(o,a,w,S,n);const r=new t(E.HEAPF32.buffer,n,h).slice();return E._free(n),{name:e,array:r,itemSize:s}}function Q(E,i){switch(i){case Float32Array:return E.DT_FLOAT32;case Int8Array:return E.DT_INT8;case Int16Array:return E.DT_INT16;case Int32Array:return E.DT_INT32;case Uint8Array:return E.DT_UINT8;case Uint16Array:return E.DT_UINT16;case Uint32Array:return E.DT_UINT32}}}class FG extends Xg{constructor(){super();tA(this,"mixer");tA(this,"glTFLoader");const I=new KG;I.setDecoderPath("jsm/libs/draco/"),this.glTFLoader=new ae,this.glTFLoader.setDRACOLoader(I)}async init(I){const[g,C,Q,E]=await Promise.all([this.glTFLoader.loadAsync("models/eve$@walk_compressed.glb"),this.glTFLoader.loadAsync("models/eve@idle.glb"),this.glTFLoader.loadAsync("models/eve@jump.glb"),this.glTFLoader.loadAsync("models/eve@pose.glb")]);g.scene.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),this.mixer=new Gl(g.scene),I.idle=this.mixer.clipAction(C.animations[0]),I.walk=this.mixer.clipAction(_c.subclip(g.animations[0],"walk",0,42)),Q.animations[0].tracks=Q.animations[0].tracks.filter(function(i){return!i.name.endsWith(".position")}),console.log(Q.animations[0].tracks),I.jump=this.mixer.clipAction(Q.animations[0]),I.pose=this.mixer.clipAction(E.animations[0]),I.idle.play(),this.add(g.scene)}update(I){var g;(g=this.mixer)==null||g.update(I)}}class RG{constructor(A,I){tA(this,"scene");tA(this,"wait",!1);tA(this,"animationActions",{});tA(this,"activeAction");tA(this,"speed",0);tA(this,"keyboard");tA(this,"model");this.scene=A,this.keyboard=I}async init(){this.model=new FG,await this.model.init(this.animationActions),this.activeAction=this.animationActions.idle,this.scene.add(this.model)}setAction(A){var I;this.activeAction!=A&&((I=this.activeAction)==null||I.fadeOut(.1),A.reset().fadeIn(.1).play(),this.activeAction=A)}update(A){var I,g;if(!this.wait){let C=!1;this.keyboard.keyMap.Space&&(this.setAction(this.animationActions.jump),C=!0,this.wait=!0,setTimeout(()=>this.wait=!1,1200)),!C&&(this.keyboard.keyMap.KeyW||this.keyboard.keyMap.KeyA||this.keyboard.keyMap.KeyS||this.keyboard.keyMap.KeyD)&&(this.setAction(this.animationActions.walk),C=!0),!C&&this.keyboard.keyMap.KeyQ&&(this.setAction(this.animationActions.pose),C=!0),!C&&this.setAction(this.animationActions.idle)}this.activeAction===this.animationActions.walk?(I=this.model)==null||I.update(A*2):(g=this.model)==null||g.update(A)}}class pG{constructor(A,I,g){tA(this,"camera");tA(this,"pivot",new iI);tA(this,"yaw",new iI);tA(this,"pitch",new iI);tA(this,"onDocumentMouseMove",A=>{this.yaw.rotation.y-=A.movementX*.002;const I=this.pitch.rotation.x-A.movementY*.002;I>-1&&I<1&&(this.pitch.rotation.x=I)});tA(this,"onDocumentMouseWheel",A=>{A.preventDefault();const I=this.camera.position.z+A.deltaY*.005;I>=.5&&I<=10&&(this.camera.position.z=I)});this.camera=I,this.yaw.position.y=.75,document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===g.domElement?(g.domElement.addEventListener("mousemove",this.onDocumentMouseMove),g.domElement.addEventListener("wheel",this.onDocumentMouseWheel)):(g.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),g.domElement.removeEventListener("wheel",this.onDocumentMouseWheel))}),A.add(this.pivot),this.pivot.add(this.yaw),this.yaw.add(this.pitch),this.pitch.add(I)}}class dG{constructor(A){tA(this,"keyMap",{});tA(this,"onDocumentKey",A=>{this.keyMap[A.code]=A.type==="keydown"});document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===A.domElement?(document.addEventListener("keydown",this.onDocumentKey),document.addEventListener("keyup",this.onDocumentKey)):(document.removeEventListener("keydown",this.onDocumentKey),document.removeEventListener("keyup",this.onDocumentKey))})}}class qG{constructor(A,I,g,C,Q=[0,0,0],E){tA(this,"scene");tA(this,"world");tA(this,"ui");tA(this,"body");tA(this,"animationController");tA(this,"vector",new q);tA(this,"inputVelocity",new q);tA(this,"euler",new jI);tA(this,"quaternion",new HI);tA(this,"followTarget",new iI);tA(this,"grounded",!1);tA(this,"rotationMatrix",new uA);tA(this,"targetQuaternion",new HI);tA(this,"followCam");tA(this,"keyboard");tA(this,"wait",!1);tA(this,"handle",-1);this.scene=A,this.world=C,this.ui=E,this.keyboard=new dG(g),this.followCam=new pG(this.scene,I,g),A.add(this.followTarget),this.body=C.createRigidBody(PI.dynamic().setTranslation(...Q).enabledRotations(!1,!1,!1).setCanSleep(!1)),this.handle=this.body.handle;const i=eI.capsule(.5,.15).setTranslation(0,.645,0).setMass(1).setFriction(0).setActiveEvents(rQ.COLLISION_EVENTS);C.createCollider(i,this.body)}async init(){this.animationController=new RG(this.scene,this.keyboard),await this.animationController.init()}setGrounded(A){A!=this.grounded&&(this.grounded=A,A?(this.body.setLinearDamping(4),setTimeout(()=>{this.wait=!1},250)):this.body.setLinearDamping(0))}reset(){this.body.setLinvel(new q(0,0,0),!0),this.body.setTranslation(new q(0,1,0),!0),this.ui.reset()}update(A){var g,C,Q,E,i,o,e,t,a,s,h,S,w;this.inputVelocity.set(0,0,0);let I=1;this.grounded&&(this.keyboard.keyMap.KeyW&&(this.inputVelocity.z=-1,I=9.5),this.keyboard.keyMap.KeyS&&(this.inputVelocity.z=1,I=9.5),this.keyboard.keyMap.KeyA&&(this.inputVelocity.x=-1,I=9.5),this.keyboard.keyMap.KeyD&&(this.inputVelocity.x=1,I=9.5),this.inputVelocity.setLength(A*I),!this.wait&&this.keyboard.keyMap.Space&&(this.wait=!0,this.inputVelocity.y=5)),this.euler.y=this.followCam.yaw.rotation.y,this.quaternion.setFromEuler(this.euler),this.inputVelocity.applyQuaternion(this.quaternion),this.body.applyImpulse(this.inputVelocity,!0),this.body.translation().y<-3&&this.reset(),this.followTarget.position.copy(this.body.translation()),this.followTarget.getWorldPosition(this.vector),this.followCam.pivot.position.lerp(this.vector,A*10),(C=(g=this.animationController)==null?void 0:g.model)==null||C.position.lerp(this.vector,A*20),this.rotationMatrix.lookAt(this.followTarget.position,(E=(Q=this.animationController)==null?void 0:Q.model)==null?void 0:E.position,(o=(i=this.animationController)==null?void 0:i.model)==null?void 0:o.up),this.targetQuaternion.setFromRotationMatrix(this.rotationMatrix),((t=(e=this.animationController)==null?void 0:e.model)==null?void 0:t.position.distanceTo(this.followTarget.position))>1e-4&&!((s=(a=this.animationController)==null?void 0:a.model)!=null&&s.quaternion.equals(this.targetQuaternion))&&(this.targetQuaternion.z=0,this.targetQuaternion.x=0,this.targetQuaternion.normalize(),(S=(h=this.animationController)==null?void 0:h.model)==null||S.quaternion.rotateTowards(this.targetQuaternion,A*20)),(w=this.animationController)==null||w.update(A)}}class YG extends Il{constructor(A){super(A),this.type=xg}parse(A){const I=function(r,l){switch(r){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(l||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(l||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(l||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(l||""))}},g=`
`,C=function(r,l,c){l=l||1024;let M=r.pos,Y=-1,K=0,N="",d=String.fromCharCode.apply(null,new Uint16Array(r.subarray(M,M+128)));for(;0>(Y=d.indexOf(g))&&K<l&&M<r.byteLength;)N+=d,K+=d.length,M+=128,d+=String.fromCharCode.apply(null,new Uint16Array(r.subarray(M,M+128)));return-1<Y?(r.pos+=K+Y+1,N+d.slice(0,Y)):!1},Q=function(r){const l=/^#\?(\S+)/,c=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,Y=/^\s*FORMAT=(\S+)\s*$/,K=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let d,y;for((r.pos>=r.byteLength||!(d=C(r)))&&I(1,"no header found"),(y=d.match(l))||I(3,"bad initial token"),N.valid|=1,N.programtype=y[1],N.string+=d+`
`;d=C(r),d!==!1;){if(N.string+=d+`
`,d.charAt(0)==="#"){N.comments+=d+`
`;continue}if((y=d.match(c))&&(N.gamma=parseFloat(y[1])),(y=d.match(M))&&(N.exposure=parseFloat(y[1])),(y=d.match(Y))&&(N.valid|=2,N.format=y[1]),(y=d.match(K))&&(N.valid|=4,N.height=parseInt(y[1],10),N.width=parseInt(y[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||I(3,"missing format specifier"),N.valid&4||I(3,"missing image size specifier"),N},E=function(r,l,c){const M=l;if(M<8||M>32767||r[0]!==2||r[1]!==2||r[2]&128)return new Uint8Array(r);M!==(r[2]<<8|r[3])&&I(3,"wrong scanline width");const Y=new Uint8Array(4*l*c);Y.length||I(4,"unable to allocate buffer space");let K=0,N=0;const d=4*M,y=new Uint8Array(4),G=new Uint8Array(d);let p=c;for(;p>0&&N<r.byteLength;){N+4>r.byteLength&&I(1),y[0]=r[N++],y[1]=r[N++],y[2]=r[N++],y[3]=r[N++],(y[0]!=2||y[1]!=2||(y[2]<<8|y[3])!=M)&&I(3,"bad rgbe scanline format");let T=0,x;for(;T<d&&N<r.byteLength;){x=r[N++];const V=x>128;if(V&&(x-=128),(x===0||T+x>d)&&I(3,"bad scanline data"),V){const _=r[N++];for(let z=0;z<x;z++)G[T++]=_}else G.set(r.subarray(N,N+x),T),T+=x,N+=x}const Z=M;for(let V=0;V<Z;V++){let _=0;Y[K]=G[V+_],_+=M,Y[K+1]=G[V+_],_+=M,Y[K+2]=G[V+_],_+=M,Y[K+3]=G[V+_],K+=4}p--}return Y},i=function(r,l,c,M){const Y=r[l+3],K=Math.pow(2,Y-128)/255;c[M+0]=r[l+0]*K,c[M+1]=r[l+1]*K,c[M+2]=r[l+2]*K,c[M+3]=1},o=function(r,l,c,M){const Y=r[l+3],K=Math.pow(2,Y-128)/255;c[M+0]=XQ.toHalfFloat(Math.min(r[l+0]*K,65504)),c[M+1]=XQ.toHalfFloat(Math.min(r[l+1]*K,65504)),c[M+2]=XQ.toHalfFloat(Math.min(r[l+2]*K,65504)),c[M+3]=XQ.toHalfFloat(1)},e=new Uint8Array(A);e.pos=0;const t=Q(e),a=t.width,s=t.height,h=E(e.subarray(e.pos),a,s);let S,w,n;switch(this.type){case Cg:n=h.length/4;const r=new Float32Array(n*4);for(let c=0;c<n;c++)i(h,c*4,r,c*4);S=r,w=Cg;break;case xg:n=h.length/4;const l=new Uint16Array(n*4);for(let c=0;c<n;c++)o(h,c*4,l,c*4);S=l,w=xg;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:a,height:s,data:S,header:t.string,gamma:t.gamma,exposure:t.exposure,type:w}}setDataType(A){return this.type=A,this}load(A,I,g,C){function Q(E,i){switch(E.type){case Cg:case xg:E.colorSpace=FI,E.minFilter=uI,E.magFilter=uI,E.generateMipmaps=!1,E.flipY=!0;break}I&&I(E,i)}return super.load(A,Q,g,C)}}class yQ extends SI{constructor(){super(yQ.Geometry,new DC({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const A=new q,I=new q,g=new ra(16,16),C=new ra(16,16);let Q=rg;const E=yQ.Geometry,i=new So({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),o=new So({uniforms:{map:{value:g},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),e=new SI(E,i),t=[],a=bC.Shader,s=new So({name:a.name,uniforms:{map:{value:null},occlusionMap:{value:C},color:{value:new KA(16777215)},scale:{value:new pA},screenPosition:{value:new q}},vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,blending:xE,transparent:!0,depthWrite:!1}),h=new SI(E,s);this.addElement=function(l){t.push(l)};const S=new pA,w=new pA,n=new kl,r=new gI;this.onBeforeRender=function(l,c,M){l.getCurrentViewport(r);const Y=l.getRenderTarget(),K=Y!==null?Y.texture.type:rg;Q!==K&&(g.dispose(),C.dispose(),g.type=C.type=K,Q=K);const N=r.w/r.z,d=r.z/2,y=r.w/2;let G=16/r.w;if(S.set(G*N,G),n.min.set(r.x,r.y),n.max.set(r.x+(r.z-16),r.y+(r.w-16)),I.setFromMatrixPosition(this.matrixWorld),I.applyMatrix4(M.matrixWorldInverse),!(I.z>0)&&(A.copy(I).applyMatrix4(M.projectionMatrix),w.x=r.x+A.x*d+d-8,w.y=r.y+A.y*y+y-8,n.containsPoint(w))){l.copyFramebufferToTexture(g,w);let p=i.uniforms;p.scale.value=S,p.screenPosition.value=A,l.renderBufferDirect(M,null,E,i,e,null),l.copyFramebufferToTexture(C,w),p=o.uniforms,p.scale.value=S,p.screenPosition.value=A,l.renderBufferDirect(M,null,E,o,e,null);const T=-A.x*2,x=-A.y*2;for(let Z=0,V=t.length;Z<V;Z++){const _=t[Z],z=s.uniforms;z.color.value.copy(_.color),z.map.value=_.texture,z.screenPosition.value.x=A.x+T*_.distance,z.screenPosition.value.y=A.y+x*_.distance,G=_.size/r.w;const W=r.w/r.z;z.scale.value.set(G*W,G),s.uniformsNeedUpdate=!0,l.renderBufferDirect(M,null,E,s,h,null)}}},this.dispose=function(){i.dispose(),o.dispose(),s.dispose(),g.dispose(),C.dispose();for(let l=0,c=t.length;l<c;l++)t[l].texture.dispose()}}}class bC{constructor(A,I=1,g=0,C=new KA(16777215)){this.texture=A,this.size=I,this.distance=g,this.color=C}}bC.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`},yQ.Geometry=function(){const B=new XI,A=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),I=new Xt(A,5);return B.setIndex([0,1,2,0,2,3]),B.setAttribute("position",new jB(I,3,0,!1)),B.setAttribute("uv",new jB(I,2,3,!1)),B}();class LG{constructor(A){tA(this,"scene");tA(this,"light");this.scene=A,this.light=new ya(16777215,Math.PI),this.light.position.set(65.7,19.2,50.2),this.light.castShadow=!0,this.scene.add(this.light);const I=new Go,g=I.load("img/lensflare0.png"),C=I.load("img/lensflare3.png"),Q=new yQ;Q.addElement(new bC(g,1e3,0)),Q.addElement(new bC(C,500,.2)),Q.addElement(new bC(C,250,.8)),Q.addElement(new bC(C,125,.6)),Q.addElement(new bC(C,62.5,.4)),this.light.add(Q)}async init(){await new YG().loadAsync("img/venice_sunset_1k.hdr").then(A=>{A.mapping=KQ,this.scene.environment=A,this.scene.background=A,this.scene.backgroundBlurriness=.4})}}class uG{constructor(A,I){tA(this,"mesh");tA(this,"world");tA(this,"enabled",!0);this.world=I,this.mesh=new aa(new XI,new so({color:16777215,vertexColors:!0})),this.mesh.frustumCulled=!1,A.add(this.mesh)}update(){if(this.enabled){const{vertices:A,colors:I}=this.world.debugRender();this.mesh.geometry.setAttribute("position",new pI(A,3)),this.mesh.geometry.setAttribute("color",new pI(I,4)),this.mesh.visible=!0}else this.mesh.visible=!1}}class Yg{constructor(A,I,g,C,Q="div"){this.parent=A,this.object=I,this.property=g,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(C),this.$name=document.createElement("div"),this.$name.classList.add("name"),Yg.nextNameID=Yg.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Yg.nextNameID,this.$widget=document.createElement(Q),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(g)}name(A){return this._name=A,this.$name.innerHTML=A,this}onChange(A){return this._onChange=A,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(A=!0){return this.disable(!A)}disable(A=!0){return A===this._disabled||(this._disabled=A,this.domElement.classList.toggle("disabled",A),this.$disable.toggleAttribute("disabled",A)),this}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(A){const I=this.parent.add(this.object,this.property,A);return I.name(this._name),this.destroy(),I}min(A){return this}max(A){return this}step(A){return this}decimals(A){return this}listen(A=!0){return this._listening=A,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const A=this.save();A!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=A}getValue(){return this.object[this.property]}setValue(A){return this.object[this.property]=A,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(A){return this.setValue(A),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class HG extends Yg{constructor(A,I,g){super(A,I,g,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function we(B){let A,I;return(A=B.match(/(#|0x)?([a-f0-9]{6})/i))?I=A[2]:(A=B.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?I=parseInt(A[1]).toString(16).padStart(2,0)+parseInt(A[2]).toString(16).padStart(2,0)+parseInt(A[3]).toString(16).padStart(2,0):(A=B.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(I=A[1]+A[1]+A[2]+A[2]+A[3]+A[3]),!!I&&"#"+I}const mG={isPrimitive:!0,match:B=>typeof B=="string",fromHexString:we,toHexString:we},UQ={isPrimitive:!0,match:B=>typeof B=="number",fromHexString:B=>parseInt(B.substring(1),16),toHexString:B=>"#"+B.toString(16).padStart(6,0)},fG={isPrimitive:!1,match:Array.isArray,fromHexString(B,A,I=1){const g=UQ.fromHexString(B);A[0]=(g>>16&255)/255*I,A[1]=(g>>8&255)/255*I,A[2]=(255&g)/255*I},toHexString:([B,A,I],g=1)=>UQ.toHexString(B*(g=255/g)<<16^A*g<<8^I*g<<0)},TG={isPrimitive:!1,match:B=>Object(B)===B,fromHexString(B,A,I=1){const g=UQ.fromHexString(B);A.r=(g>>16&255)/255*I,A.g=(g>>8&255)/255*I,A.b=(255&g)/255*I},toHexString:({r:B,g:A,b:I},g=1)=>UQ.toHexString(B*(g=255/g)<<16^A*g<<8^I*g<<0)},xG=[mG,UQ,fG,TG];class bG extends Yg{constructor(A,I,g,C){var Q;super(A,I,g,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(Q=this.initialValue,xG.find(E=>E.match(Q))),this._rgbScale=C,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const E=we(this.$text.value);E&&this._setValueFromHexString(E)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(A){if(this._format.isPrimitive){const I=this._format.fromHexString(A);this.setValue(I)}else this._format.fromHexString(A,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(A){return this._setValueFromHexString(A),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ce extends Yg{constructor(A,I,g){super(A,I,g,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",C=>{C.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class OG extends Yg{constructor(A,I,g,C,Q,E){super(A,I,g,"number"),this._initInput(),this.min(C),this.max(Q);const i=E!==void 0;this.step(i?E:this._getImplicitStep(),i),this.updateDisplay()}decimals(A){return this._decimals=A,this.updateDisplay(),this}min(A){return this._min=A,this._onUpdateMinMax(),this}max(A){return this._max=A,this._onUpdateMinMax(),this}step(A,I=!0){return this._step=A,this._stepExplicit=I,this}updateDisplay(){const A=this.getValue();if(this._hasSlider){let I=(A-this._min)/(this._max-this._min);I=Math.max(0,Math.min(I,1)),this.$fill.style.width=100*I+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?A:A.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const A=t=>{const a=parseFloat(this.$input.value);isNaN(a)||(this._snapClampSetValue(a+t),this.$input.value=this.getValue())};let I,g,C,Q,E,i=!1;const o=t=>{if(i){const a=t.clientX-I,s=t.clientY-g;Math.abs(s)>5?(t.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(a)>5&&e()}if(!i){const a=t.clientY-C;E-=a*this._step*this._arrowKeyMultiplier(t),Q+E>this._max?E=this._max-Q:Q+E<this._min&&(E=this._min-Q),this._snapClampSetValue(Q+E)}C=t.clientY},e=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",e)};this.$input.addEventListener("input",()=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._stepExplicit&&(t=this._snap(t)),this.setValue(this._clamp(t)))}),this.$input.addEventListener("keydown",t=>{t.code==="Enter"&&this.$input.blur(),t.code==="ArrowUp"&&(t.preventDefault(),A(this._step*this._arrowKeyMultiplier(t))),t.code==="ArrowDown"&&(t.preventDefault(),A(this._step*this._arrowKeyMultiplier(t)*-1))}),this.$input.addEventListener("wheel",t=>{this._inputFocused&&(t.preventDefault(),A(this._step*this._normalizeMouseWheel(t)))},{passive:!1}),this.$input.addEventListener("mousedown",t=>{I=t.clientX,g=C=t.clientY,i=!0,Q=this.getValue(),E=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",e)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const A=s=>{const h=this.$slider.getBoundingClientRect();let S=(w=s,n=h.left,r=h.right,l=this._min,c=this._max,(w-n)/(r-n)*(c-l)+l);var w,n,r,l,c;this._snapClampSetValue(S)},I=s=>{A(s.clientX)},g=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",g)};let C,Q,E=!1;const i=s=>{s.preventDefault(),this._setDraggingStyle(!0),A(s.touches[0].clientX),E=!1},o=s=>{if(E){const h=s.touches[0].clientX-C,S=s.touches[0].clientY-Q;Math.abs(h)>Math.abs(S)?i(s):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",e))}else s.preventDefault(),A(s.touches[0].clientX)},e=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",e)},t=this._callOnFinishChange.bind(this);let a;this.$slider.addEventListener("mousedown",s=>{this._setDraggingStyle(!0),A(s.clientX),window.addEventListener("mousemove",I),window.addEventListener("mouseup",g)}),this.$slider.addEventListener("touchstart",s=>{s.touches.length>1||(this._hasScrollBar?(C=s.touches[0].clientX,Q=s.touches[0].clientY,E=!0):i(s),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",e))},{passive:!1}),this.$slider.addEventListener("wheel",s=>{if(Math.abs(s.deltaX)<Math.abs(s.deltaY)&&this._hasScrollBar)return;s.preventDefault();const h=this._normalizeMouseWheel(s)*this._step;this._snapClampSetValue(this.getValue()+h),this.$input.value=this.getValue(),clearTimeout(a),a=setTimeout(t,400)},{passive:!1})}_setDraggingStyle(A,I="horizontal"){this.$slider&&this.$slider.classList.toggle("active",A),document.body.classList.toggle("lil-gui-dragging",A),document.body.classList.toggle("lil-gui-"+I,A)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(A){let{deltaX:I,deltaY:g}=A;return Math.floor(A.deltaY)!==A.deltaY&&A.wheelDelta&&(I=0,g=-A.wheelDelta/120,g*=this._stepExplicit?1:10),I+-g}_arrowKeyMultiplier(A){let I=this._stepExplicit?1:10;return A.shiftKey?I*=10:A.altKey&&(I/=10),I}_snap(A){const I=Math.round(A/this._step)*this._step;return parseFloat(I.toPrecision(15))}_clamp(A){return A<this._min&&(A=this._min),A>this._max&&(A=this._max),A}_snapClampSetValue(A){this.setValue(this._clamp(this._snap(A)))}get _hasScrollBar(){const A=this.parent.root.$children;return A.scrollHeight>A.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class vG extends Yg{constructor(A,I,g,C){super(A,I,g,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(C)?C:Object.values(C),this._names=Array.isArray(C)?C:Object.keys(C),this._names.forEach(Q=>{const E=document.createElement("option");E.innerHTML=Q,this.$select.appendChild(E)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const A=this.getValue(),I=this._values.indexOf(A);return this.$select.selectedIndex=I,this.$display.innerHTML=I===-1?A:this._names[I],this}}class _G extends Yg{constructor(A,I,g){super(A,I,g,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",C=>{C.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let vs=!1;class le{constructor({parent:A,autoPlace:I=A===void 0,container:g,width:C,title:Q="Controls",injectStyles:E=!0,touchStyles:i=!0}={}){if(this.parent=A,this.root=A?A.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",o=>{o.code!=="Enter"&&o.code!=="Space"||(o.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(Q),i&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!vs&&E&&(function(o){const e=document.createElement("style");e.innerHTML=o;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),vs=!0),g?g.appendChild(this.domElement):I&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),C&&this.domElement.style.setProperty("--width",C+"px"),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation())}add(A,I,g,C,Q){if(Object(g)===g)return new vG(this,A,I,g);const E=A[I];switch(typeof E){case"number":return new OG(this,A,I,g,C,Q);case"boolean":return new HG(this,A,I);case"string":return new _G(this,A,I);case"function":return new ce(this,A,I)}console.error(`gui.add failed
	property:`,I,`
	object:`,A,`
	value:`,E)}addColor(A,I,g=1){return new bG(this,A,I,g)}addFolder(A){return new le({parent:this,title:A})}load(A,I=!0){return A.controllers&&this.controllers.forEach(g=>{g instanceof ce||g._name in A.controllers&&g.load(A.controllers[g._name])}),I&&A.folders&&this.folders.forEach(g=>{g._title in A.folders&&g.load(A.folders[g._title])}),this}save(A=!0){const I={controllers:{},folders:{}};return this.controllers.forEach(g=>{if(!(g instanceof ce)){if(g._name in I.controllers)throw new Error(`Cannot save GUI with duplicate property "${g._name}"`);I.controllers[g._name]=g.save()}}),A&&this.folders.forEach(g=>{if(g._title in I.folders)throw new Error(`Cannot save GUI with duplicate folder "${g._title}"`);I.folders[g._title]=g.save()}),I}open(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(A=!0){return this._hidden=!A,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(A=!0){return this._closed=!A,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const I=this.$children.clientHeight;this.$children.style.height=I+"px",this.domElement.classList.add("transition");const g=Q=>{Q.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",g))};this.$children.addEventListener("transitionend",g);const C=A?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!A),requestAnimationFrame(()=>{this.$children.style.height=C+"px"})}),this}title(A){return this._title=A,this.$title.innerHTML=A,this}reset(A=!0){return(A?this.controllersRecursive():this.controllers).forEach(I=>I.reset()),this}onChange(A){return this._onChange=A,this}_callOnChange(A){this.parent&&this.parent._callOnChange(A),this._onChange!==void 0&&this._onChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}onFinishChange(A){return this._onFinishChange=A,this}_callOnFinishChange(A){this.parent&&this.parent._callOnFinishChange(A),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:A.object,property:A.property,value:A.getValue(),controller:A})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(A=>A.destroy())}controllersRecursive(){let A=Array.from(this.controllers);return this.folders.forEach(I=>{A=A.concat(I.controllersRecursive())}),A}foldersRecursive(){let A=Array.from(this.folders);return this.folders.forEach(I=>{A=A.concat(I.foldersRecursive())}),A}}class ZG{constructor(A,I,g){tA(this,"material",new zg);new ae().load("models/start.glb",C=>{var e;const Q=C.scene.getObjectByName("Cylinder");Q.receiveShadow=!0,A.add(Q),this.material=Q.material,(e=this.material.map)==null||e.center.set(.1034,0);const E=I.createRigidBody(PI.fixed().setTranslation(...g)),i=new Float32Array(Q.geometry.attributes.position.array),o=eI.convexHull(i);I.createCollider(o,E),Q.position.copy(E.translation()),Q.quaternion.copy(E.rotation()),setInterval(()=>{this.material.map.rotation+=Math.PI},500)})}}class Lg{constructor(A,I,g,C,Q=[0,0,0]){const E=new SI(new nB(...g),new zg);E.castShadow=!0,E.receiveShadow=!0,A.add(E);const i=I.createRigidBody(PI.fixed().setTranslation(...C).setRotation(new HI().setFromEuler(new jI(...Q)))),o=eI.cuboid(g[0]/2,g[1]/2,g[2]/2);I.createCollider(o,i),E.position.copy(i.translation()),E.quaternion.copy(i.rotation())}}class WG{constructor(A,I,g){tA(this,"dynamicBody");tA(this,"material",new zg);tA(this,"texture");tA(this,"handle",-1);this.texture=new Go().load("img/finish.png",Q=>{Q.repeat.x=2,Q.wrapS=yC,Q.flipY=!0});const C=new SI(new $B(3.4,3.4,2,12,1,!0),new bc({transparent:!0,opacity:.75,map:this.texture,side:hg}));C.position.set(...g),C.position.y+=3,A.add(C),new ae().load("models/finish.glb",Q=>{const E=Q.scene.getObjectByName("Cylinder");E.receiveShadow=!0,A.add(E),this.material=E.material;const i=I.createRigidBody(PI.fixed().setTranslation(...g));this.handle=i.handle;const o=new Float32Array(E.geometry.attributes.position.array),e=eI.convexHull(o);I.createCollider(e,i),E.position.copy(i.translation()),E.quaternion.copy(i.rotation()),setInterval(()=>{this.material.map.rotation+=Math.PI},500)})}update(A){this.texture.offset.x+=A/3}}class _s{constructor(A,I,g){tA(this,"group");tA(this,"body");tA(this,"handle",-1);this.group=new Xg,this.group.position.set(...g),A.add(this.group);const C=new SI(new $B(.25,.25,1.5),new zg);C.castShadow=!0,this.group.add(C);const Q=new SI(new $B(.25,.25,4),new zg);Q.rotateX(-Math.PI/2),Q.castShadow=!0,this.group.add(Q),this.body=I.createRigidBody(PI.kinematicPositionBased().setTranslation(...g)),this.handle=this.body.handle;const E=eI.cylinder(2,.25).setRotation(new HI().setFromEuler(new jI(-Math.PI/2,0,0)));I.createCollider(E,this.body)}update(A){this.group.rotation.y+=A,this.body.setNextKinematicRotation(this.group.quaternion)}}class mE{constructor(A,I,g,C=0){tA(this,"dynamicBodies",[]);tA(this,"handles",[-1,-1]);const Q=[];for(let E=0;E<4;E++){const i=new SI(new no(.4),new zg);i.position.set(g[0],g[1],E+g[2]),i.castShadow=!0,A.add(i);let o;E==0?o=ig.Fixed:o=ig.Dynamic;const e=I.createRigidBody(new PI(o).setTranslation(g[0],g[1],E+g[2]).setRotation(new HI().setFromEuler(new jI(0,C,0))));let t=eI.ball(.4).setMass(1);if(E>=2&&this.handles.push(e.handle),I.createCollider(t,e),E>0){let a=Q[Q.length-1],s=dg.spherical(new pE(0,0,0),new pE(0,0,-1));I.createImpulseJoint(s,a,e,!0)}Q.push(e),this.dynamicBodies.push([i,e])}}update(){for(let A=0,I=this.dynamicBodies.length;A<I;A++)this.dynamicBodies[A][0].position.copy(this.dynamicBodies[A][1].translation()),this.dynamicBodies[A][0].quaternion.copy(this.dynamicBodies[A][1].rotation())}}class PG{constructor(A,I,g){tA(this,"scene");tA(this,"camera");tA(this,"renderer");tA(this,"ui");tA(this,"player");tA(this,"world");tA(this,"rapierDebugRenderer");tA(this,"eventQueue");tA(this,"finish");tA(this,"spinners",[]);tA(this,"pendulums",[]);this.scene=A,this.camera=I,this.renderer=g,this.ui=new yl(this.renderer)}async init(){await Zl.init();const A=new q(0,-9.81,0);this.world=new GQ(A),this.eventQueue=new Ys(!0),this.rapierDebugRenderer=new uG(this.scene,this.world),this.rapierDebugRenderer.enabled=!1,new le().add(this.rapierDebugRenderer,"enabled").name("Rapier Degug Renderer"),new ZG(this.scene,this.world,[0,-.5,0]),new Lg(this.scene,this.world,[1,.1,2],[0,0,6]),new Lg(this.scene,this.world,[2.5,.1,1],[3,.25,6]),new Lg(this.scene,this.world,[2,.1,1],[6,1,6]),new Lg(this.scene,this.world,[.25,.1,4.5],[6,2,2.25]),new Lg(this.scene,this.world,[4,.1,5],[6,2,-3]),this.spinners.push(new _s(this.scene,this.world,[6,2.8,-3])),new Lg(this.scene,this.world,[1,.1,2],[6.25,2.5,-7.5]),new Lg(this.scene,this.world,[4,.1,4],[2.5,3,-8]),this.spinners.push(new _s(this.scene,this.world,[2.5,3.8,-8])),new Lg(this.scene,this.world,[1,.1,2.75],[1.5,3.75,-3.25],[-Math.PI/8,0,0]),new Lg(this.scene,this.world,[6,.1,1],[-1,4.5,-1]),this.pendulums.push(new mE(this.scene,this.world,[0,8,-1])),this.pendulums.push(new mE(this.scene,this.world,[-2,8,-1])),new Lg(this.scene,this.world,[1.5,.1,8],[-5.5,4.5,4.5],[0,0,-Math.PI/8]),this.pendulums.push(new mE(this.scene,this.world,[-5,8,2.5],Math.PI/2)),this.pendulums.push(new mE(this.scene,this.world,[-5,8,5],Math.PI/2)),this.finish=new WG(this.scene,this.world,[0,4,10]),this.player=new qG(this.scene,this.camera,this.renderer,this.world,[0,.1,0],this.ui),await this.player.init();const I=new LG(this.scene);await I.init(),I.light.target=this.player.followTarget,this.ui.show()}update(A){var I,g,C,Q,E;this.spinners.forEach(i=>{i.update(A)}),this.world.timestep=Math.min(A,.1),(I=this.world)==null||I.step(this.eventQueue),(g=this.eventQueue)==null||g.drainCollisionEvents((i,o,e)=>{var s,h;e&&[i,o].includes((s=this.finish)==null?void 0:s.handle)&&this.ui.showLevelCompleted();let t=!1;this.spinners.forEach(S=>{[i,o].includes(S.handle)&&(t=!0)});let a=!1;this.pendulums.forEach(S=>{S.handles.some(w=>[i,o].includes(w))&&(a=!0)}),!t&&!a&&((h=this.player)==null||h.setGrounded(e))}),(C=this.player)==null||C.update(A),(Q=this.finish)==null||Q.update(A),this.pendulums.forEach(i=>{i.update()}),(E=this.rapierDebugRenderer)==null||E.update()}}const Zs=new Yc,MQ=new $I(75,window.innerWidth/window.innerHeight,.1,1e3);MQ.position.set(0,0,2);const YB=new qc({antialias:!0});YB.setSize(window.innerWidth,window.innerHeight),YB.shadowMap.enabled=!0,document.body.appendChild(YB.domElement),window.addEventListener("resize",()=>{MQ.aspect=window.innerWidth/window.innerHeight,MQ.updateProjectionMatrix(),YB.setSize(window.innerWidth,window.innerHeight)});const Ws=new BQ;document.body.appendChild(Ws.dom);const Ps=new PG(Zs,MQ,YB);await Ps.init();const jG=new ol;let js=0;function Vs(){requestAnimationFrame(Vs),js=jG.getDelta(),Ps.update(js),YB.render(Zs,MQ),Ws.update()}Vs()})();