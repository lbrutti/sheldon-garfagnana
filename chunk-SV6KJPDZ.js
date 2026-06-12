import{$ as g,$b as Bc,A as Kr,Aa as Qa,Ac as it,Ba as I,Bb as Nc,Bc as zi,Ca as Ja,Cb as is,Cc as Yc,D as Tn,Da as Cc,Db as rs,E as me,Ea as Ni,Eb as Ae,Ec as Te,F as Zr,Fa as Dc,Fb as z,Fc as ss,G as Ri,Ga as Fn,Gb as G,Gc as Kc,H as Ii,Ha as eo,Hb as Me,Hc as M,I as Ht,Ia as kn,Ib as Ot,Ic as Zc,J as et,Ja as to,Jb as Ft,Jc as Xc,K as pc,Ka as Pn,Kb as ft,Kc as oo,L as $t,La as Nn,M as On,Ma as xc,Mc as Qc,N as Gt,Na as Ec,Nb as Bi,O as Xa,Oa as Sc,Ob as Yt,P as Xr,Pa as Ac,Pb as os,Q as gc,Qa as Mc,Qb as Vi,R as Qr,Ra as Rc,Rb as ue,S as Jr,Sa as Ic,Sc as Jc,T as dt,Ta as Ve,Tb as ce,Tc as ao,U as Se,Ub as xe,Uc as so,V as Pe,Va as Tc,Vb as J,W as vc,Wa as T,Wb as hn,X as ye,Xa as Ln,Xb as mt,Y as F,Ya as Oc,Yb as se,Z as Ti,Za as no,Zb as le,_ as tt,_b as Lc,a as m,aa as ne,ab as ut,ac as as,b as Y,ba as bc,bb as Wt,bc as kt,ca as v,cb as je,cc as Bn,d as Tt,da as A,db as De,dc as K,e as Sm,ea as c,eb as W,ec as Vc,f as pe,fa as Oi,fb as ht,fc as Vn,g as dc,ga as _c,gb as es,gc as nt,h as ke,ha as we,hb as Fc,hc as jn,i as uc,ia as Ye,ib as ts,ic as ji,j as y,ja as Fi,jb as q,k as Ge,ka as ki,kb as ie,lb as E,lc as ge,m as hc,ma as he,mb as io,mc as jc,n as fc,na as U,nc as Uc,o as We,oa as dn,ob as Ie,p as qe,pa as yc,pb as ro,pc as Un,q as D,qa as $,qb as kc,qc as Ui,r as Wr,ra as k,rb as ns,rc as zc,s as cn,sa as un,sb as qt,sc as Hc,t as mc,ta as Pi,tb as Li,tc as $c,uc as Gc,v as j,va as w,vb as Pc,vc as ee,w as qr,wa as wc,wb as wt,wc as ve,x as zt,xa as _t,xb as fe,xc as Wc,y as Yr,ya as Ce,yb as oe,yc as zn,z as In,za as yt,zb as ae,zc as qc}from"./chunk-JTDC6VWF.js";var Ji=Tt(Dt=>{"use strict";Object.defineProperty(Dt,"__esModule",{value:!0});Dt.excelBOM=Dt.defaultCsv2JsonOptions=Dt.defaultJson2CsvOptions=Dt.errors=void 0;Dt.errors={optionsRequired:"Options were not passed and are required.",json2csv:{cannotCallOn:"Cannot call json2csv on",dataCheckFailure:"Data provided was not an array of documents.",notSameSchema:"Not all documents have the same schema."},csv2json:{cannotCallOn:"Cannot call csv2json on",dataCheckFailure:"CSV is not a string."}};Dt.defaultJson2CsvOptions={arrayIndexesAsKeys:!1,checkSchemaDifferences:!1,delimiter:{field:",",wrap:'"',eol:`
`},emptyFieldValue:void 0,escapeHeaderNestedDots:!0,excelBOM:!1,excludeKeys:[],expandNestedObjects:!0,expandArrayObjects:!1,prependHeader:!0,preventCsvInjection:!1,sortHeader:!1,trimFieldValues:!1,trimHeaderFields:!1,unwindArrays:!1,useDateIso8601Format:!1,useLocaleFormat:!1,wrapBooleans:!1,fieldTitleMap:Object.create({})};Dt.defaultCsv2JsonOptions={delimiter:{field:",",wrap:'"',eol:`
`},excelBOM:!1,preventCsvInjection:!1,trimFieldValues:!1,trimHeaderFields:!1};Dt.excelBOM="\uFEFF"});var wo=Tt(Xn=>{"use strict";Object.defineProperty(Xn,"__esModule",{value:!0});Xn.setPath=Xn.evaluatePath=void 0;function er(t,i){if(!t)return null;let{dotIndex:e,key:n,remaining:r}=yo(i),o=typeof t=="object"&&i in t?t[i]:void 0,a=typeof t=="object"&&n in t?t[n]:void 0;if(e>=0&&typeof t=="object"&&!(i in t)){let{key:s}=yo(r),l=parseInt(s);return Array.isArray(a)&&isNaN(l)?a.map(d=>er(d,r)):er(a,r)}else if(Array.isArray(t)){let s=parseInt(n);return i===n&&e===-1&&!isNaN(s)?a:t.map(l=>er(l,i))}else{if(e>=0&&i!==n&&typeof t=="object"&&n in t)return er(a,r);if(e===-1&&typeof t=="object"&&n in t&&!(i in t))return a}return o}Xn.evaluatePath=er;function Hp(t,i,e){if(t){if(!i)throw new Error("No keyPath was provided.")}else throw new Error("No object was provided.");return tr(t,i,e)}Xn.setPath=Hp;function tr(t,i,e){let{dotIndex:n,key:r,remaining:o}=yo(i);if(i.startsWith("__proto__")||i.startsWith("constructor")||i.startsWith("prototype"))return t;if(n>=0){let a=parseInt(r);if(typeof t=="object"&&t!==null&&!(r in t)&&Array.isArray(t)&&!isNaN(a))return t[r]=t[r]??{},tr(t[r],o,e),t;if(typeof t=="object"&&t!==null&&!(r in t)&&Array.isArray(t))return t.forEach(s=>tr(s,i,e)),t;if(typeof t=="object"&&t!==null&&!(r in t)&&!Array.isArray(t)){let{key:s}=yo(o),l=parseInt(s);if(!isNaN(l))t[r]=[];else{if(o==="")return t[i]=e,t;t[r]={}}}tr(t[r],o,e)}else if(Array.isArray(t)){let a=parseInt(r);return i===r&&n===-1&&!isNaN(a)?(t[r]=e,t):(t.forEach(s=>tr(s,o,e)),t)}else t[r]=e;return t}function yo(t){let i=$p(t);return{dotIndex:i,key:t.slice(0,i>=0?i:void 0).replace(/\\./g,"."),remaining:t.slice(i+1)}}function $p(t){for(let i=0;i<t.length;i++){let e=i>0?t[i-1]:"";if(t[i]==="."&&e!=="\\")return i}return-1}});var kd=Tt(Qt=>{"use strict";Object.defineProperty(Qt,"__esModule",{value:!0});Qt.isDocumentToRecurOn=Qt.flatten=Qt.unique=void 0;function Gp(t){return[...new Set(t)]}Qt.unique=Gp;function Wp(t){return[].concat(...t)}Qt.flatten=Wp;function qp(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)&&Object.keys(t).length}Qt.isDocumentToRecurOn=qp});var Nd=Tt(Pd=>{"use strict";Object.defineProperty(Pd,"__esModule",{value:!0})});var $d=Tt(Ue=>{"use strict";var Ld=Ue&&Ue.__createBinding||(Object.create?function(t,i,e,n){n===void 0&&(n=e);var r=Object.getOwnPropertyDescriptor(i,e);(!r||("get"in r?!i.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return i[e]}}),Object.defineProperty(t,n,r)}:function(t,i,e,n){n===void 0&&(n=e),t[n]=i[e]}),Yp=Ue&&Ue.__setModuleDefault||(Object.create?function(t,i){Object.defineProperty(t,"default",{enumerable:!0,value:i})}:function(t,i){t.default=i}),Kp=Ue&&Ue.__importStar||function(t){if(t&&t.__esModule)return t;var i={};if(t!=null)for(var e in t)e!=="default"&&Object.prototype.hasOwnProperty.call(t,e)&&Ld(i,t,e);return Yp(i,t),i},Zp=Ue&&Ue.__exportStar||function(t,i){for(var e in t)e!=="default"&&!Object.prototype.hasOwnProperty.call(i,e)&&Ld(i,t,e)};Object.defineProperty(Ue,"__esModule",{value:!0});Ue.deepKeysFromList=Ue.deepKeys=void 0;var nr=Kp(kd());Zp(Nd(),Ue);function Bd(t,i){let e=Hd(i);return typeof t=="object"&&t!==null?jd("",t,e):[]}Ue.deepKeys=Bd;function Vd(t,i){let e=Hd(i);return t.map(n=>typeof n=="object"&&n!==null?Bd(n,e):[])}Ue.deepKeysFromList=Vd;function jd(t,i,e){let n=Object.keys(i).map(r=>{let o=zd(t,Ud(r,e));return e.expandNestedObjects&&nr.isDocumentToRecurOn(i[r])||e.arrayIndexesAsKeys&&Array.isArray(i[r])&&i[r].length?jd(o,i[r],e):e.expandArrayObjects&&Array.isArray(i[r])?Xp(i[r],o,e):e.ignoreEmptyArrays&&Array.isArray(i[r])&&!i[r].length?[]:o});return nr.flatten(n)}function Xp(t,i,e){let n=Vd(t,e);return t.length?t.length&&nr.flatten(n).length===0?[i]:(n=n.map(r=>Array.isArray(r)&&r.length===0?[i]:r.map(o=>zd(i,Ud(o,e)))),nr.unique(nr.flatten(n))):e.ignoreEmptyArraysWhenExpanding?[]:[i]}function Ud(t,i){return i.escapeNestedDots?t.replace(/\./g,"\\."):t}function zd(t,i){return t?t+"."+i:i}function Hd(t){return m({arrayIndexesAsKeys:!1,expandNestedObjects:!0,expandArrayObjects:!1,ignoreEmptyArraysWhenExpanding:!1,escapeNestedDots:!1,ignoreEmptyArrays:!1},t??{})}});var Co=Tt(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});N.isInvalid=N.flatten=N.unique=N.arrayDifference=N.isError=N.isUndefined=N.isNull=N.isObject=N.isString=N.isNumber=N.unwind=N.getNCharacters=N.removeEmptyFields=N.isEmptyField=N.computeSchemaDifferences=N.isDateRepresentation=N.isStringRepresentation=N.deepCopy=N.validate=N.buildC2JOptions=N.buildJ2COptions=void 0;var Rs=wo(),Jt=Ji(),Qp=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/,Is=1e5;function Jp(t){return Y(m(m({},Jt.defaultJson2CsvOptions),t),{delimiter:{field:t?.delimiter?.field??Jt.defaultJson2CsvOptions.delimiter.field,wrap:t?.delimiter?.wrap||Jt.defaultJson2CsvOptions.delimiter.wrap,eol:t?.delimiter?.eol||Jt.defaultJson2CsvOptions.delimiter.eol},fieldTitleMap:t?.fieldTitleMap||Object.create({})})}N.buildJ2COptions=Jp;function eg(t){return Y(m(m({},Jt.defaultCsv2JsonOptions),t),{delimiter:{field:t?.delimiter?.field??Jt.defaultCsv2JsonOptions.delimiter.field,wrap:t?.delimiter?.wrap||Jt.defaultCsv2JsonOptions.delimiter.wrap,eol:t?.delimiter?.eol||Jt.defaultCsv2JsonOptions.delimiter.eol}})}N.buildC2JOptions=eg;function tg(t,i,e){if(!t)throw new Error(`${e.cannotCallOn} ${t}.`);if(!i(t))throw new Error(e.dataCheckFailure);return!0}N.validate=tg;function Ts(t){return JSON.parse(JSON.stringify(t))}N.deepCopy=Ts;function ng(t,i){let e=t[0],n=t.length-1,r=t[n];return e===i.delimiter.wrap&&r===i.delimiter.wrap}N.isStringRepresentation=ng;function ig(t){return Qp.test(t)}N.isDateRepresentation=ig;function rg(t,i){return Os(t,i).concat(Os(i,t))}N.computeSchemaDifferences=rg;function Gd(t){return qd(t)||Wd(t)||t===""}N.isEmptyField=Gd;function og(t){return t.filter(i=>!Gd(i))}N.removeEmptyFields=og;function ag(t,i,e){return t.substring(i,i+e)}N.getNCharacters=ag;function sg(t,i,e){let n=(0,Rs.evaluatePath)(i,e),r=Ts(i);Array.isArray(n)&&n.length?n.forEach(o=>{r=Ts(i),t.push((0,Rs.setPath)(r,e,o))}):(Array.isArray(n)&&n.length===0&&(0,Rs.setPath)(r,e,""),t.push(r))}function lg(t,i){let e=[];return t.forEach(n=>{sg(e,n,i)}),e}N.unwind=lg;function cg(t){return!isNaN(Number(t))}N.isNumber=cg;function dg(t){return typeof t=="string"}N.isString=dg;function ug(t){return typeof t=="object"}N.isObject=ug;function Wd(t){return t===null}N.isNull=Wd;function qd(t){return typeof t>"u"}N.isUndefined=qd;function hg(t){return Object.prototype.toString.call(t)==="[object Error]"}N.isError=hg;function Os(t,i){return t.filter(e=>!i.includes(e))}N.arrayDifference=Os;function fg(t){return[...new Set(t)]}N.unique=fg;function mg(t){if(t.flat)return t.flat();if(t.length>Is){let i=[];for(let e=0;e<t.length;e+=Is)i=i.concat(...t.slice(e,e+Is));return i}return t.reduce((i,e)=>i.concat(e),[])}N.flatten=mg;function pg(t){return t===1/0||t===-1/0}N.isInvalid=pg});var Zd=Tt(xt=>{"use strict";var gg=xt&&xt.__createBinding||(Object.create?function(t,i,e,n){n===void 0&&(n=e);var r=Object.getOwnPropertyDescriptor(i,e);(!r||("get"in r?!i.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return i[e]}}),Object.defineProperty(t,n,r)}:function(t,i,e,n){n===void 0&&(n=e),t[n]=i[e]}),vg=xt&&xt.__setModuleDefault||(Object.create?function(t,i){Object.defineProperty(t,"default",{enumerable:!0,value:i})}:function(t,i){t.default=i}),bg=xt&&xt.__importStar||function(t){if(t&&t.__esModule)return t;var i={};if(t!=null)for(var e in t)e!=="default"&&Object.prototype.hasOwnProperty.call(t,e)&&gg(i,t,e);return vg(i,t),i};Object.defineProperty(xt,"__esModule",{value:!0});xt.Json2Csv=void 0;var Yd=wo(),_g=$d(),Kd=Ji(),en=bg(Co()),yg=function(t){let i=new RegExp(t.delimiter.wrap,"g"),e=/\r?\n|\r/,n=t.parseValue&&typeof t.parseValue=="function"?t.parseValue:null,r=t.expandArrayObjects&&!t.unwindArrays,o={arrayIndexesAsKeys:t.arrayIndexesAsKeys,expandNestedObjects:t.expandNestedObjects,expandArrayObjects:r,ignoreEmptyArraysWhenExpanding:r,escapeNestedDots:!0};function a(f){return(0,_g.deepKeysFromList)(f,o)}function s(f){return f.length===0?[]:t.checkSchemaDifferences?l(f):en.unique(en.flatten(f))}function l(f){let V=f[0],Q=f.slice(1);if(d(V,Q))throw new Error(Kd.errors.json2csv.notSameSchema);return V}function d(f,V){return V.reduce((Q,be)=>en.computeSchemaDifferences(f,be).length>0?Q+1:Q,0)}function u(f){return t.excludeKeys?f.filter(V=>{for(let Q of t.excludeKeys){let be=Q instanceof RegExp?Q:new RegExp(`^${Q}`);if(Q===V||V.match(be))return!1}return!0}):f}function h(f){return t.sortHeader&&typeof t.sortHeader=="function"?f.sort(t.sortHeader):t.sortHeader?f.sort():f}function _(f){return t.trimHeaderFields&&(f.headerFields=f.headerFields.map(V=>V.split(".").map(Q=>Q.trim()).join("."))),f}function x(f){return t.prependHeader&&(f.headerFields=f.headerFields.map(function(V){return ct(V)})),f}function O(f){let V=Object.keys(t.fieldTitleMap);return f.header=f.headerFields.map(function(Q){let be=Q;return V.includes(Q)?be=t.fieldTitleMap[Q]:t.escapeHeaderNestedDots||(be=be.replace(/\\\./g,".")),be}).join(t.delimiter.field),f}function Z(){return t.keys?t.keys.map(f=>typeof f=="object"&&"field"in f?(t.fieldTitleMap[f.field]=f.title??f.field,f.field):f):[]}function S(){return t.keys?t.keys.flatMap(f=>typeof f=="string"?[]:f?.wildcardMatch?f.field:[]):[]}function B(f){let V=S(),Q=Z(),be=a(f),_e=s(be);if(t.keys){t.keys=Q;let Ka=Q.flatMap(Rn=>{if(!V.includes(Rn))return Rn;let cc=[],Em=new RegExp(`^${Rn}`);for(let Za of _e)(Rn===Za||Za.match(Em))&&cc.push(Za);return cc});if(!t.unwindArrays){let Rn=u(Ka);return h(Rn)}}let ln=u(_e);return h(ln)}function p(f){for(let V of f.records)for(let Q of f.headerFields){let be=(0,Yd.evaluatePath)(V,Q);if(Array.isArray(be))return!0}return!1}function C(f,V=!1){if(t.unwindArrays){if(f.headerFields.forEach(Q=>{f.records=en.unwind(f.records,Q)}),f.headerFields=B(f.records),p(f))return C(f,V);if(!V)return C(f,!0);if(t.keys){let Q=Z();f.headerFields=u(Q)}return f}return f}function R(f){return f.recordString=f.records.map(V=>{let Q=b(V,f.headerFields),be=Q.map(_e=>{_e=Be(_e),_e=$e(_e);let ln=n?n(_e,re):re(_e);return ln=ct(ln),ln});return Mn(be)}).join(t.delimiter.eol),f}function X(f){let V=en.removeEmptyFields(f);return!f.length||!V.length?t.emptyFieldValue||"":V.length===1?V[0]:f}function b(f,V){let Q=[];return V.forEach(be=>{let _e=(0,Yd.evaluatePath)(f,be);!en.isUndefined(t.emptyFieldValue)&&en.isEmptyField(_e)?_e=t.emptyFieldValue:t.expandArrayObjects&&Array.isArray(_e)&&(_e=X(_e)),Q.push(_e)}),Q}function re(f){let V=f instanceof Date;return f===null||Array.isArray(f)||typeof f=="object"&&!V?JSON.stringify(f):typeof f>"u"?"undefined":V&&t.useDateIso8601Format?f.toISOString():t.useLocaleFormat?f.toLocaleString():f.toString()}function Be(f){return t.trimFieldValues?Array.isArray(f)?f.map(Be):typeof f=="string"?f.trim():f:f}function $e(f){return t.preventCsvInjection?Array.isArray(f)?f.map($e):typeof f=="string"&&!en.isNumber(f)?f.replace(/^[=+\-@\t\r]+/g,""):f:f}function ct(f){let V=t.delimiter.wrap;return f.includes(t.delimiter.wrap)&&(f=f.replace(i,V+V)),(f.includes(t.delimiter.field)||f.includes(t.delimiter.wrap)||f.match(e)||t.wrapBooleans&&(f==="true"||f==="false"))&&(f=V+f+V),f}function Mn(f){return f.join(t.delimiter.field)}function H(f){let V=f.header,Q=f.recordString;return(t.excelBOM?Kd.excelBOM:"")+(t.prependHeader?V+t.delimiter.eol:"")+Q}function Mi(f){Array.isArray(f)||(f=[f]);let V={headerFields:B(f),records:f,header:"",recordString:""},Q=C(V),be=R(Q),_e=x(be),ln=_(_e),Ka=O(ln);return H(Ka)}return{convert:Mi}};xt.Json2Csv=yg});var Xd=Tt(Et=>{"use strict";var wg=Et&&Et.__createBinding||(Object.create?function(t,i,e,n){n===void 0&&(n=e);var r=Object.getOwnPropertyDescriptor(i,e);(!r||("get"in r?!i.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return i[e]}}),Object.defineProperty(t,n,r)}:function(t,i,e,n){n===void 0&&(n=e),t[n]=i[e]}),Cg=Et&&Et.__setModuleDefault||(Object.create?function(t,i){Object.defineProperty(t,"default",{enumerable:!0,value:i})}:function(t,i){t.default=i}),Dg=Et&&Et.__importStar||function(t){if(t&&t.__esModule)return t;var i={};if(t!=null)for(var e in t)e!=="default"&&Object.prototype.hasOwnProperty.call(t,e)&&wg(i,t,e);return Cg(i,t),i};Object.defineProperty(Et,"__esModule",{value:!0});Et.Csv2Json=void 0;var xg=wo(),Eg=Ji(),tn=Dg(Co()),Sg=function(t){let i=new RegExp(t.delimiter.wrap+t.delimiter.wrap,"g"),e=new RegExp("^"+Eg.excelBOM),n=t.parseValue&&typeof t.parseValue=="function"?t.parseValue:JSON.parse;function r(p){return p=x(p),t.trimHeaderFields?p.split(".").map(C=>C.trim()).join("."):p}function o(p){let C=[];if(t.headerFields)C=t.headerFields.map((R,X)=>({value:r(R),index:X}));else if(C=p[0].map((X,b)=>({value:r(X),index:b})),t.keys){let X=t.keys;C=C.filter(b=>X.includes(b.value))}return{lines:p,headerFields:C,recordLines:[]}}function a(p){return t.excelBOM?p.replace(e,""):p}function s(p){let C=[],R=p.length-1,X=t.delimiter.eol.length,b={insideWrapDelimiter:!1,parsingValue:!0,justParsedDoubleQuote:!1,startIndex:0},re=[],Be,$e,ct,Mn,H=0;for(;H<p.length;){if(Be=p[H],$e=H?p[H-1]:"",ct=H<R?p[H+1]:"",Mn=tn.getNCharacters(p,H,X),(Mn===t.delimiter.eol&&!b.insideWrapDelimiter||H===R)&&$e===t.delimiter.field)Mn===t.delimiter.eol&&b.startIndex===H||Be===t.delimiter.field?re.push(""):re.push(p.substring(b.startIndex)),re.push(""),C.push(re),re=[],b.startIndex=H+X,b.parsingValue=!0,b.insideWrapDelimiter=ct===t.delimiter.wrap;else if(H===R&&Be===t.delimiter.field){let Mi=p.substring(b.startIndex,H);re.push(Mi),re.push(""),C.push(re)}else if(H===R||Mn===t.delimiter.eol&&(!b.insideWrapDelimiter||b.insideWrapDelimiter&&$e===t.delimiter.wrap&&!b.justParsedDoubleQuote)){let Mi=H!==R||$e===t.delimiter.wrap?H:void 0;re.push(p.substring(b.startIndex,Mi)),C.push(re),re=[],b.startIndex=H+X,b.parsingValue=!0,b.insideWrapDelimiter=ct===t.delimiter.wrap}else if(Be===t.delimiter.wrap&&$e===t.delimiter.field&&!b.insideWrapDelimiter&&!b.parsingValue)b.startIndex=H,b.insideWrapDelimiter=!0,b.parsingValue=!0,tn.getNCharacters(p,H+1,X)===t.delimiter.eol&&(H+=t.delimiter.eol.length+1);else if($e===t.delimiter.field&&Be===t.delimiter.wrap&&ct===t.delimiter.eol)re.push(p.substring(b.startIndex,H-1)),b.startIndex=H,b.parsingValue=!0,b.insideWrapDelimiter=!0,b.justParsedDoubleQuote=!0,H+=1;else if(($e!==t.delimiter.wrap||b.justParsedDoubleQuote&&$e===t.delimiter.wrap)&&Be===t.delimiter.wrap&&tn.getNCharacters(p,H+1,X)===t.delimiter.eol)b.insideWrapDelimiter=!1,b.parsingValue=!1;else if(Be===t.delimiter.wrap&&(H===0||tn.getNCharacters(p,H-X,X)===t.delimiter.eol&&!b.insideWrapDelimiter))b.insideWrapDelimiter=!0,b.parsingValue=!0,b.startIndex=H;else if(Be===t.delimiter.wrap&&ct===t.delimiter.field&&b.insideWrapDelimiter)re.push(p.substring(b.startIndex,H+1)),b.startIndex=H+2,b.insideWrapDelimiter=!1,b.parsingValue=!1;else if(Be===t.delimiter.wrap&&$e===t.delimiter.field&&!b.insideWrapDelimiter&&b.parsingValue)re.push(p.substring(b.startIndex,H-1)),b.insideWrapDelimiter=!0,b.parsingValue=!0,b.startIndex=H;else if(Be===t.delimiter.wrap&&ct===t.delimiter.wrap&&H!==b.startIndex){H+=2,b.justParsedDoubleQuote=!0;continue}else Be===t.delimiter.field&&$e!==t.delimiter.wrap&&ct!==t.delimiter.wrap&&!b.insideWrapDelimiter&&b.parsingValue?(re.push(p.substring(b.startIndex,H)),b.startIndex=H+1):Be===t.delimiter.field&&$e===t.delimiter.wrap&&ct!==t.delimiter.wrap&&!b.parsingValue&&(b.insideWrapDelimiter=!1,b.parsingValue=!0,b.startIndex=H+1);H++,b.justParsedDoubleQuote=!1}return C}function l(p){return t.headerFields?p.recordLines=p.lines:p.recordLines=p.lines.splice(1),p}function d(p,C){let R=C[p.index];return u(R)}function u(p){let C=S(p);return!tn.isError(C)&&!tn.isInvalid(C)?C:p==="undefined"?void 0:p}function h(p){return t.trimFieldValues&&p!==null?p.trim():p}function _(p,C){return p.reduce((R,X)=>{let b=d(X,C);try{return(0,xg.setPath)(R,X.value,b)}catch{return R}},{})}function x(p){let C=p[0],R=p.length-1,X=p[R];return C===t.delimiter.wrap&&X===t.delimiter.wrap?p.length<=2?"":p.substring(1,R):p}function O(p){return p.replace(i,t.delimiter.wrap)}function Z(p){return p.recordLines.reduce((C,R)=>{R=R.map(b=>(b=x(b),b=O(b),b=h(b),b));let X=_(p.headerFields,R);return C.concat(X)},[])}function S(p){try{if(tn.isStringRepresentation(p,t)&&!tn.isDateRepresentation(p))return p;let C=n(p);return Array.isArray(C)?C.map(h):C}catch(C){return C}}function B(p){let C=a(p),R=s(C),X=o(R),b=l(X);return Z(b)}return{convert:B}};Et.Csv2Json=Sg});var Jd=Tt(Jn=>{"use strict";Object.defineProperty(Jn,"__esModule",{value:!0});Jn.csv2json=Jn.json2csv=void 0;var Qd=Ji(),Ag=Zd(),Mg=Xd(),Qn=Co();function Rg(t,i){let e=(0,Qn.buildJ2COptions)(i??{});return(0,Qn.validate)(t,Qn.isObject,Qd.errors.json2csv),(0,Ag.Json2Csv)(e).convert(t)}Jn.json2csv=Rg;function Ig(t,i){let e=(0,Qn.buildC2JOptions)(i??{});return(0,Qn.validate)(t,Qn.isString,Qd.errors.csv2json),(0,Mg.Csv2Json)(e).convert(t)}Jn.csv2json=Ig});var ed=null;function rt(){return ed}function ls(t){ed??=t}var Hi=class{},Hn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>c(td),providedIn:"platform"})}return t})();var td=(()=>{class t extends Hn{_location;_history;_doc=c(U);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return rt().getBaseHref(this._doc)}onPopState(e){let n=rt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=rt().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function rd(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function nd(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Kt(t){return t&&t[0]!=="?"?`?${t}`:t}var $n=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>c(Mm),providedIn:"root"})}return t})(),Am=new v(""),Mm=(()=>{class t extends $n{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??c(U).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return rd(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Kt(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+Kt(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+Kt(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(A(Hn),A(Am,8))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zt=(()=>{class t{_subject=new y;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Tm(nd(id(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Kt(n))}normalize(e){return t.stripTrailingSlash(Im(this._basePath,id(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Kt(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Kt(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=Kt;static joinWithSlash=rd;static stripTrailingSlash=nd;static \u0275fac=function(n){return new(n||t)(A($n))};static \u0275prov=g({token:t,factory:()=>Rm(),providedIn:"root"})}return t})();function Rm(){return new Zt(A($n))}function Im(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function id(t){return t.replace(/\/index.html$/,"")}function Tm(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var us=(function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t})(us||{});var Ct={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Gn(t,i){let e=os(t),n=e[Vi.NumberSymbols][i];if(typeof n>"u"){if(i===Ct.CurrencyDecimal)return e[Vi.NumberSymbols][Ct.Decimal];if(i===Ct.CurrencyGroup)return e[Vi.NumberSymbols][Ct.Group]}return n}function ad(t,i){return os(t)[Vi.NumberFormats][i]}var Om=/^(\d+)?\.((\d+)(-(\d+))?)?$/,od=22,lo=".",$i="0",Fm=";",km=",",cs="#";function Pm(t,i,e,n,r,o,a=!1){let s="",l=!1;if(!isFinite(t))s=Gn(e,Ct.Infinity);else{let d=Bm(t);a&&(d=Lm(d));let u=i.minInt,h=i.minFrac,_=i.maxFrac;if(o){let p=o.match(Om);if(p===null)throw new F(2306,!1);let C=p[1],R=p[3],X=p[5];C!=null&&(u=ds(C)),R!=null&&(h=ds(R)),X!=null?_=ds(X):R!=null&&h>_&&(_=h)}Vm(d,h,_);let x=d.digits,O=d.integerLen,Z=d.exponent,S=[];for(l=x.every(p=>!p);O<u;O++)x.unshift(0);for(;O<0;O++)x.unshift(0);O>0?S=x.splice(O,x.length):(S=x,x=[0]);let B=[];for(x.length>=i.lgSize&&B.unshift(x.splice(-i.lgSize,x.length).join(""));x.length>i.gSize;)B.unshift(x.splice(-i.gSize,x.length).join(""));x.length&&B.unshift(x.join("")),s=B.join(Gn(e,n)),S.length&&(s+=Gn(e,r)+S.join("")),Z&&(s+=Gn(e,Ct.Exponential)+"+"+Z)}return t<0&&!l?s=i.negPre+s+i.negSuf:s=i.posPre+s+i.posSuf,s}function sd(t,i,e){let n=ad(i,us.Decimal),r=Nm(n,Gn(i,Ct.MinusSign));return Pm(t,r,i,Ct.Group,Ct.Decimal,e)}function Nm(t,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(Fm),r=n[0],o=n[1],a=r.indexOf(lo)!==-1?r.split(lo):[r.substring(0,r.lastIndexOf($i)+1),r.substring(r.lastIndexOf($i)+1)],s=a[0],l=a[1]||"";e.posPre=s.substring(0,s.indexOf(cs));for(let u=0;u<l.length;u++){let h=l.charAt(u);h===$i?e.minFrac=e.maxFrac=u+1:h===cs?e.maxFrac=u+1:e.posSuf+=h}let d=s.split(km);if(e.gSize=d[1]?d[1].length:0,e.lgSize=d[2]||d[1]?(d[2]||d[1]).length:0,o){let u=r.length-e.posPre.length-e.posSuf.length,h=o.indexOf(cs);e.negPre=o.substring(0,h).replace(/'/g,""),e.negSuf=o.slice(h+u).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function Lm(t){if(t.digits[0]===0)return t;let i=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(i===0?t.digits.push(0,0):i===1&&t.digits.push(0),t.integerLen+=2),t}function Bm(t){let i=Math.abs(t)+"",e=0,n,r,o,a,s;for((r=i.indexOf(lo))>-1&&(i=i.replace(lo,"")),(o=i.search(/e/i))>0?(r<0&&(r=o),r+=+i.slice(o+1),i=i.substring(0,o)):r<0&&(r=i.length),o=0;i.charAt(o)===$i;o++);if(o===(s=i.length))n=[0],r=1;else{for(s--;i.charAt(s)===$i;)s--;for(r-=o,n=[],a=0;o<=s;o++,a++)n[a]=Number(i.charAt(o))}return r>od&&(n=n.splice(0,od-1),e=r-1,r=1),{digits:n,exponent:e,integerLen:r}}function Vm(t,i,e){if(i>e)throw new F(2307,!1);let n=t.digits,r=n.length-t.integerLen,o=Math.min(Math.max(i,r),e),a=o+t.integerLen,s=n[a];if(a>0){n.splice(Math.max(t.integerLen,a));for(let h=a;h<n.length;h++)n[h]=0}else{r=Math.max(0,r),t.integerLen=1,n.length=Math.max(1,a=o+1),n[0]=0;for(let h=1;h<a;h++)n[h]=0}if(s>=5)if(a-1<0){for(let h=0;h>a;h--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[a-1]++;for(;r<Math.max(0,o);r++)n.push(0);let l=o!==0,d=i+t.integerLen,u=n.reduceRight(function(h,_,x,O){return _=_+h,O[x]=_<10?_:_-10,l&&(O[x]===0&&x>=d?O.pop():l=!1),_>=10?1:0},0);u&&(n.unshift(u),t.integerLen++)}function ds(t){let i=parseInt(t);if(isNaN(i))throw new F(2305,!1);return i}var hs=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=c(he);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(W(ht))};static \u0275dir=E({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ce]})}return t})();function jm(t,i){return new F(2100,!1)}var fs=(()=>{class t{_locale;constructor(e){this._locale=e}transform(e,n,r){if(!Um(e))return null;r||=this._locale;try{let o=zm(e);return sd(o,r,n)}catch(o){throw jm(t,o.message)}}static \u0275fac=function(n){return new(n||t)(W(Gc,16))};static \u0275pipe=io({name:"number",type:t,pure:!0})}return t})();function Um(t){return!(t==null||t===""||t!==t)}function zm(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new F(2309,!1);return t}var ld=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();function Gi(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var fn=class{};var ms="browser";function cd(t){return t===ms}var Wi=class{_doc;constructor(i){this._doc=i}manager},co=(()=>{class t extends Wi{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||t)(A(U))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),fo=new v(""),bs=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof co));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof co);o&&this._plugins.push(o)}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new F(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(A(fo),A(k))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),ps="ng-app-id";function ud(t){for(let i of t)i.remove()}function hd(t,i){let e=i.createElement("style");return e.textContent=t,e}function $m(t,i,e,n){let r=t.head?.querySelectorAll(`style[${ps}="${i}"],link[${ps}="${i}"]`);if(r)for(let o of r)o.removeAttribute(ps),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function vs(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var _s=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,$m(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,hd);n?.forEach(r=>this.addUsage(r,this.external,vs))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(ud(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ud(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,hd(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,vs(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(A(U),A(Ni),A(kn,8),A(Fn))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),gs={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ys=/%COMP%/g;var md="%COMP%",Gm=`_nghost-${md}`,Wm=`_ngcontent-${md}`,qm=!0,Ym=new v("",{factory:()=>qm});function Km(t){return Wm.replace(ys,t)}function Zm(t){return Gm.replace(ys,t)}function pd(t,i){return i.map(e=>e.replace(ys,t))}var ws=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,r,o,a,s,l=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=l,this.tracingService=d,this.defaultRenderer=new qi(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof ho?r.applyToHost(e):r instanceof Yi&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let a=this.doc,s=this.ngZone,l=this.eventManager,d=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.tracingService;switch(n.encapsulation){case to.Emulated:o=new ho(l,d,n,this.appId,u,a,s,h);break;case to.ShadowDom:return new uo(l,e,n,a,s,this.nonce,h,d);case to.ExperimentalIsolatedShadowDom:return new uo(l,e,n,a,s,this.nonce,h);default:o=new Yi(l,d,n,u,a,s,h);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(A(bs),A(_s),A(Ni),A(Ym),A(U),A(k),A(kn),A(no,8))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),qi=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(gs[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(fd(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(fd(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new F(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=gs[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=gs[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(Ln.DashCase|Ln.Important)?i.style.setProperty(e,n,r&Ln.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&Ln.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=rt().getGlobalEventTarget(this.doc,i),!i))throw new F(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function fd(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var uo=class extends qi{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,r,o,a,s,l){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=pd(n.id,d);for(let h of d){let _=document.createElement("style");a&&_.setAttribute("nonce",a),_.textContent=h,this.shadowRoot.appendChild(_)}let u=n.getExternalStyles?.();if(u)for(let h of u){let _=vs(h,r);a&&_.setAttribute("nonce",a),this.shadowRoot.appendChild(_)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Yi=class extends qi{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,a,s,l){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=n.styles;this.styles=l?pd(l,d):d,this.styleUrls=n.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Oc.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ho=class extends Yi{contentAttr;hostAttr;constructor(i,e,n,r,o,a,s,l){let d=r+"-"+n.id;super(i,e,n,o,a,s,l,d),this.contentAttr=Km(d),this.hostAttr=Zm(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var mo=class t extends Hi{supportsDOMEvents=!0;static makeCurrent(){ls(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=Qm();return e==null?null:Jm(e)}resetBaseElement(){Ki=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return Gi(document.cookie,i)}},Ki=null;function Qm(){return Ki=Ki||document.head.querySelector("base"),Ki?Ki.getAttribute("href"):null}function Jm(t){return new URL(t,document.baseURI).pathname}var ep=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})(),gd=["alt","control","meta","shift"],tp={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},np={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},vd=(()=>{class t extends Wi{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>rt().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),gd.forEach(d=>{let u=n.indexOf(d);u>-1&&(n.splice(u,1),a+=d+".")}),a+=o,n.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=a,l}static matchEventFullKeyCode(e,n){let r=tp[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),gd.forEach(a=>{if(a!==r){let s=np[a];s(e)&&(o+=a+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(A(U))};static \u0275prov=g({token:t,factory:t.\u0275fac})}return t})();async function ip(t,i,e){let n=m({rootComponent:t},rp(i,e));return Kc(n)}function rp(t,i){return{platformRef:i?.platformRef,appProviders:[...cp,...t?.providers??[]],platformProviders:lp}}function op(){mo.makeCurrent()}function ap(){return new un}function sp(){return Cc(document),document}var lp=[{provide:Fn,useValue:ms},{provide:Dc,useValue:op,multi:!0},{provide:U,useFactory:sp}];var cp=[{provide:_c,useValue:"root"},{provide:un,useFactory:ap},{provide:fo,useClass:co,multi:!0},{provide:fo,useClass:vd,multi:!0},ws,_s,bs,{provide:je,useExisting:ws},{provide:fn,useClass:ep},[]];var Xt=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var go=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},vo=class{encodeKey(i){return bd(i)}encodeValue(i){return bd(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function dp(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],l=e.get(a)||[];l.push(s),e.set(a,l)}),e}var up=/%(\d[a-f0-9])/gi,hp={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function bd(t){return encodeURIComponent(t).replace(up,(i,e)=>hp[e]??i)}function po(t){return`${t}`}var Pt=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new vo,i.fromString){if(i.fromObject)throw new F(2805,!1);this.map=dp(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(po):[po(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(po(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(po(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function fp(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function _d(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function yd(t){return typeof Blob<"u"&&t instanceof Blob}function wd(t){return typeof FormData<"u"&&t instanceof FormData}function mp(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var Cd="Content-Type",Dd="Accept",xd="text/plain",Ed="application/json",pp=`${Ed}, ${xd}, */*`,Wn=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(fp(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new F(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Xt,this.context??=new go,!this.params)this.params=new Pt,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),l=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+l+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||_d(this.body)||yd(this.body)||wd(this.body)||mp(this.body)?this.body:this.body instanceof Pt?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||wd(this.body)?null:yd(this.body)?this.body.type||null:_d(this.body)?null:typeof this.body=="string"?xd:this.body instanceof Pt?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Ed:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,l=i.mode||this.mode,d=i.redirect||this.redirect,u=i.credentials||this.credentials,h=i.referrer||this.referrer,_=i.integrity||this.integrity,x=i.referrerPolicy||this.referrerPolicy,O=i.transferCache??this.transferCache,Z=i.timeout??this.timeout,S=i.body!==void 0?i.body:this.body,B=i.withCredentials??this.withCredentials,p=i.reportProgress??this.reportProgress,C=i.headers||this.headers,R=i.params||this.params,X=i.context??this.context;return i.setHeaders!==void 0&&(C=Object.keys(i.setHeaders).reduce((b,re)=>b.set(re,i.setHeaders[re]),C)),i.setParams&&(R=Object.keys(i.setParams).reduce((b,re)=>b.set(re,i.setParams[re]),R)),new t(e,n,S,{params:R,headers:C,context:X,reportProgress:p,responseType:r,withCredentials:B,transferCache:O,keepalive:o,cache:s,priority:a,timeout:Z,mode:l,redirect:d,credentials:u,referrer:h,integrity:_,referrerPolicy:x})}},mn=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(mn||{}),Yn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new Xt,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},bo=class t extends Yn{constructor(i={}){super(i)}type=mn.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Zi=class t extends Yn{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=mn.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},qn=class extends Yn{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},gp=200,vp=204;var bp=new v("");var _p=/^\)\]\}',?\n/;var Ds=(()=>{class t{xhrFactory;tracingService=c(no,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new F(-2800,!1);let n=this.xhrFactory;return D(null).pipe(Se(()=>new ke(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((S,B)=>a.setRequestHeader(S,B.join(","))),e.headers.has(Dd)||a.setRequestHeader(Dd,pp),!e.headers.has(Cd)){let S=e.detectContentTypeHeader();S!==null&&a.setRequestHeader(Cd,S)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let S=e.responseType.toLowerCase();a.responseType=S!=="json"?S:"text"}let s=e.serializeBody(),l=null,d=()=>{if(l!==null)return l;let S=a.statusText||"OK",B=new Xt(a.getAllResponseHeaders()),p=a.responseURL||e.url;return l=new bo({headers:B,status:a.status,statusText:S,url:p}),l},u=this.maybePropagateTrace(()=>{let{headers:S,status:B,statusText:p,url:C}=d(),R=null;B!==vp&&(R=typeof a.response>"u"?a.responseText:a.response),B===0&&(B=R?gp:0);let X=B>=200&&B<300;if(e.responseType==="json"&&typeof R=="string"){let b=R;R=R.replace(_p,"");try{R=R!==""?JSON.parse(R):null}catch(re){R=b,X&&(X=!1,R={error:re,text:R})}}X?(o.next(new Zi({body:R,headers:S,status:B,statusText:p,url:C||void 0})),o.complete()):o.error(new qn({error:R,headers:S,status:B,statusText:p,url:C||void 0}))}),h=this.maybePropagateTrace(S=>{let{url:B}=d(),p=new qn({error:S,status:a.status||0,statusText:a.statusText||"Unknown Error",url:B||void 0});o.error(p)}),_=h;e.timeout&&(_=this.maybePropagateTrace(S=>{let{url:B}=d(),p=new qn({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:B||void 0});o.error(p)}));let x=!1,O=this.maybePropagateTrace(S=>{x||(o.next(d()),x=!0);let B={type:mn.DownloadProgress,loaded:S.loaded};S.lengthComputable&&(B.total=S.total),e.responseType==="text"&&a.responseText&&(B.partialText=a.responseText),o.next(B)}),Z=this.maybePropagateTrace(S=>{let B={type:mn.UploadProgress,loaded:S.loaded};S.lengthComputable&&(B.total=S.total),o.next(B)});return a.addEventListener("load",u),a.addEventListener("error",h),a.addEventListener("timeout",_),a.addEventListener("abort",h),e.reportProgress&&(a.addEventListener("progress",O),s!==null&&a.upload&&a.upload.addEventListener("progress",Z)),a.send(s),o.next({type:mn.Sent}),()=>{a.removeEventListener("error",h),a.removeEventListener("abort",h),a.removeEventListener("load",u),a.removeEventListener("timeout",_),e.reportProgress&&(a.removeEventListener("progress",O),s!==null&&a.upload&&a.upload.removeEventListener("progress",Z)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(A(fn))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function yp(t,i){return i(t)}function wp(t,i,e){return(n,r)=>Ye(e,()=>i(n,o=>t(o,r)))}var Sd=new v("",{factory:()=>[]}),Ad=new v(""),Md=new v("",{factory:()=>!0});var xs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=A(Ds),r},providedIn:"root"})}return t})();var _o=(()=>{class t{backend;injector;chain=null;pendingTasks=c(wc);contributeToStability=c(Md);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Sd),...this.injector.get(Ad,[])]));this.chain=n.reduceRight((r,o)=>wp(r,o,this.injector),yp)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(On(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(A(xs),A(we))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Es=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=A(_o),r},providedIn:"root"})}return t})();function Cs(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Kn=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof Wn)o=e;else{let l;r.headers instanceof Xt?l=r.headers:l=new Xt(r.headers);let d;r.params&&(r.params instanceof Pt?d=r.params:d=new Pt({fromObject:r.params})),o=new Wn(e,n,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=D(o).pipe(Ii(l=>this.handler.handle(l)));if(e instanceof Wn||r.observe==="events")return a;let s=a.pipe(me(l=>l instanceof Zi));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(j(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new F(2806,!1);return l.body}));case"blob":return s.pipe(j(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new F(2807,!1);return l.body}));case"text":return s.pipe(j(l=>{if(l.body!==null&&typeof l.body!="string")throw new F(2808,!1);return l.body}));default:return s.pipe(j(l=>l.body))}case"response":return s;default:throw new F(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Pt().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,Cs(r,n))}post(e,n,r={}){return this.request("POST",e,Cs(r,n))}put(e,n,r={}){return this.request("PUT",e,Cs(r,n))}static \u0275fac=function(n){return new(n||t)(A(Es))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Cp=new v("",{factory:()=>!0}),Dp="XSRF-TOKEN",xp=new v("",{factory:()=>Dp}),Ep="X-XSRF-TOKEN",Sp=new v("",{factory:()=>Ep}),Ap=(()=>{class t{cookieName=c(xp);doc=c(U);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Gi(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Rd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=A(Ap),r},providedIn:"root"})}return t})();function Mp(t,i){if(!c(Cp)||t.method==="GET"||t.method==="HEAD")return i(t);try{let r=c(Hn).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return i(t)}catch{return i(t)}let e=c(Rd).getToken(),n=c(Sp);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}function Rp(...t){let i=[Kn,_o,{provide:Es,useExisting:_o},{provide:xs,useFactory:()=>c(bp,{optional:!0})??c(Ds)},{provide:Sd,useValue:Mp,multi:!0}];for(let e of t)i.push(...e.\u0275providers);return Oi(i)}var Td=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(A(U))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Xi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=A(Fp),r},providedIn:"root"})}return t})(),Fp=(()=>{class t extends Xi{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Ve.NONE:return n;case Ve.HTML:return Nn(n,"HTML")?Pn(n):Ic(this._doc,String(n)).toString();case Ve.STYLE:return Nn(n,"Style")?Pn(n):n;case Ve.SCRIPT:if(Nn(n,"Script"))return Pn(n);throw new F(5200,!1);case Ve.URL:return Nn(n,"URL")?Pn(n):Rc(String(n));case Ve.RESOURCE_URL:if(Nn(n,"ResourceURL"))return Pn(n);throw new F(5201,!1);default:throw new F(5202,!1)}}bypassSecurityTrustHtml(e){return xc(e)}bypassSecurityTrustStyle(e){return Ec(e)}bypassSecurityTrustScript(e){return Sc(e)}bypassSecurityTrustUrl(e){return Ac(e)}bypassSecurityTrustResourceUrl(e){return Mc(e)}static \u0275fac=function(n){return new(n||t)(A(U))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function zD(t,i,e="valore"){switch(i){case"sum":return t.reduce((n,r)=>n+r[e],0);case"max":return t.reduce((n,r)=>Math.max(n,r[e]),-1/0);case"count":return t.length;default:return 0}}function HD(t,i,e){let n=t[i]??[];switch(e){case"sum":return n.reduce((r,o)=>r+o.valore,0);case"max":return n.reduce((r,o)=>Math.max(r,o.valore),-1/0);case"count":case"countunique":return n.length;default:return 0}}function $D(t,i){return t.flatMap(e=>e[i].split("|").map(n=>Y(m({},e),{[i]:n.trim()})))}function GD(t){let i=JSON.parse(JSON.stringify(t)),e=i.length;for(;e!=0;){let n=Math.floor(Math.random()*e);e--,[i[e],i[n]]=[i[n],i[e]]}return i}function Zn(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase()}function Ss(t){return getComputedStyle(document.body).getPropertyValue(t).trim()}function KD(t,i="0deg",e=10,n=90){let r=Math.floor(Math.random()*31+10),o=Math.floor(Math.random()*41+40),a=["ambiente","cultura","mobilita","sicurezza","sociale","economia"],s=Zn(t)||a[Math.floor(Math.random()*a.length)];return`linear-gradient(${i}, var(--color-gradient-${s}-start) ${Math.min(r,o)}%, var(--color-gradient-${s}-end) ${Math.max(r,o)}%)`}var As=/[\p{Lu}]/u,kp=/[\p{Ll}]/u,Pp=/^[\p{Lu}](?![\p{Lu}])/u,Qi=/[_.\- ]+/,Fd=/([\p{Alpha}\p{N}_]|$)/u,Np=new RegExp("^"+Qi.source),Lp=new RegExp(Qi.source+Fd.source,"gu"),Bp=new RegExp(String.raw`\d+`+Fd.source,"gu"),Vp=(t,i,e,n)=>{let r=!1,o=!1,a=!1,s=!1;for(let l=0;l<t.length;l++){let d=t[l];s=l>2?t[l-3]==="-":!0,r&&As.test(d)?(t=t.slice(0,l)+"-"+t.slice(l),r=!1,a=o,o=!0,l++):o&&a&&kp.test(d)&&(!s||n)?(t=t.slice(0,l-1)+"-"+t.slice(l-1),a=o,o=!1,r=!0):(r=i(d)===d&&e(d)!==d,a=o,o=e(d)===d&&i(d)!==d)}return t},jp=(t,i)=>t.replace(Pp,e=>i(e)),Up=(t,i,e)=>{let n="",r=!1,o=!1,a=[...t];for(let s=0;s<a.length;s++){let l=a[s],d=As.test(l),u=s+1<a.length&&As.test(a[s+1]);r&&/[\p{Alpha}]/u.test(l)?(n+=l,r=!1,o=d):e&&d&&(o||u)?(n+=l,o=!0):/\d/.test(l)?(n+=l,r=!0,o=!1):Qi.test(l)?(n+=l,o=!1):(n+=i(l),r=!1,o=!1)}return n},zp=(t,i,{capitalizeAfterNumber:e})=>{let n=e?(r,o,a,s)=>{let l=s.charAt(a+r.length);return Qi.test(l)?r:o?r.slice(0,-o.length)+i(o):r}:r=>r;return t.replaceAll(Bp,n).replaceAll(Lp,(r,o)=>i(o))};function Ms(t,i){if(!(typeof t=="string"||Array.isArray(t)))throw new TypeError("Expected the input to be `string | string[]`");if(i=m({pascalCase:!1,preserveConsecutiveUppercase:!1,capitalizeAfterNumber:!0},i),Array.isArray(t)?t=t.map(a=>a.trim()).filter(a=>a.length>0).join("-"):t=t.trim(),t.length===0)return"";let e=t.match(/^[_$]*/)[0];if(t=t.slice(e.length),t.length===0)return e;let n=i.locale===!1?a=>a.toLowerCase():a=>a.toLocaleLowerCase(i.locale),r=i.locale===!1?a=>a.toUpperCase():a=>a.toLocaleUpperCase(i.locale);return t.length===1?Qi.test(t)?e:e+(i.pascalCase?r(t):n(t)):(t!==n(t)&&(t=Vp(t,n,r,i.preserveConsecutiveUppercase)),t=t.replace(Np,""),i.capitalizeAfterNumber?t=i.preserveConsecutiveUppercase?jp(t,n):n(t):t=Up(t,n,i.preserveConsecutiveUppercase),i.pascalCase&&t.length>0&&(t=r(t[0])+t.slice(1)),e+zp(t,r,i))}var eu=Sm(Jd());function mx(t,i){return t.map(e=>Tg(e,i))}function Tg(t,i){let e=Object.keys(i),n={};return e.forEach(r=>{n[i[r]]=t[r]}),n}function px(t,i){return t.map(e=>Og(e,i))}function Og(t,i){let e=Object.keys(i),n={};return e.forEach(r=>{r!=="gruppi"?n[i[r]]=t[r]:i[r].map(a=>{n[a]=t[a]})}),n}function pn(t){return(0,eu.csv2json)(t,{trimHeaderFields:!0,trimFieldValues:!0}).map(i=>{let e=Object.keys(i),n={};return e.forEach(r=>{n[Ms(r)]=i[r]}),n})}function Fs(t){return{datasets:pn(t).filter(n=>!!n.key).map(n=>{let r={};for(let[o,a]of Object.entries(n))if(!(a===""||a===null||a===void 0))if(o==="mapping")try{r[o]=JSON.parse(a)}catch{r[o]=a}else r[o]=a;return r})}}var Fg=new Set(["auxReduce","groups","tooltipProperties"]),kg=new Set(["limit","tileWidth","minFontSize"]),Pg=new Set(["showSorting"]);function ks(t){return pn(t).filter(e=>!!e.id).map(e=>{let n={};for(let[r,o]of Object.entries(e))if(!(o===""||o===null||o===void 0))if(Fg.has(r))try{n[r]=JSON.parse(o)}catch{n[r]=o}else kg.has(r)?n[r]=Number(o):Pg.has(r)?n[r]=o.toLowerCase()==="true":n[r]=o;return n})}var St={production:!0,sheets:{spreadsheetId:"1v6tjQ-JyeN9MY01-oVRDcqzqbAyFIDmUozo1uV2_trY",interventiGid:"807550168",popolazioneGid:"691841134"},data:{comuniPoints:"data/comuni.points.json",comuniPolygons:"data/comuni.polygons.grid.json"},settings:{dashboardParsingConfigUrl:"https://docs.google.com/spreadsheets/d/e/2PACX-1vT_8-NWzBRl0rclOV-LjFPBSl6N2e8twTe4y4hgvowiSyZF4QV9XZCFpxj_SId0zlx5u3SQu8HC7Md1/pub?gid=286859829&single=true&output=csv",dashboardSettingsUrl:"https://docs.google.com/spreadsheets/d/e/2PACX-1vT_8-NWzBRl0rclOV-LjFPBSl6N2e8twTe4y4hgvowiSyZF4QV9XZCFpxj_SId0zlx5u3SQu8HC7Md1/pub?gid=688611119&single=true&output=csv",mapInterventiParsingConfigUrl:"https://docs.google.com/spreadsheets/d/e/2PACX-1vT_8-NWzBRl0rclOV-LjFPBSl6N2e8twTe4y4hgvowiSyZF4QV9XZCFpxj_SId0zlx5u3SQu8HC7Md1/pub?gid=309223040&single=true&output=csv",mapInterventiSettingsUrl:"https://docs.google.com/spreadsheets/d/e/2PACX-1vT_8-NWzBRl0rclOV-LjFPBSl6N2e8twTe4y4hgvowiSyZF4QV9XZCFpxj_SId0zlx5u3SQu8HC7Md1/pub?gid=196849019&single=true&output=csv"},categorie:["ambiente","cultura","mobilita","sicurezza","economia","sociale","societa"]};var Tx=(()=>{class t{httpClient;_interventi=w([]);_popolazione=w([]);_comuniPoints=w({type:"FeatureCollection",features:[]});_comuniPolygons=w({type:"FeatureCollection",features:[]});_dashboardSettings=w([]);_dashboardParsingConfig=w(null);_mapInterventiSettings=w([]);_mapInterventiParsingConfig=w(null);_loadingCount=w(0);_fetched=new Set;loading=ve(()=>this._loadingCount()>0);constructor(e){this.httpClient=e}getPopolazione(){if(this._fetched.has("popolazione"))return;this._fetched.add("popolazione");let e=this.getGVizURL(St.sheets.spreadsheetId,St.sheets.popolazioneGid,"SELECT * WHERE D = 'nati'");this._loadingCount.update(n=>n+1),this.httpClient.get(e,{responseType:"text"}).subscribe({next:n=>{this._popolazione.set(pn(n)),this._loadingCount.update(r=>r-1)},error:()=>this._loadingCount.update(n=>n-1)})}getInterventi(){if(this._fetched.has("interventi"))return;this._fetched.add("interventi");let e=this.getGVizURL(St.sheets.spreadsheetId,St.sheets.interventiGid,"SELECT *");this._loadingCount.update(n=>n+1),this.httpClient.get(e,{responseType:"text"}).subscribe({next:n=>{this._interventi.set(pn(n)),this._loadingCount.update(r=>r-1)},error:()=>this._loadingCount.update(n=>n-1)})}getComuniPolygons(){this._fetched.has("comuniPolygons")||(this._fetched.add("comuniPolygons"),this._loadingCount.update(e=>e+1),this.httpClient.get(St.data.comuniPolygons,{responseType:"json"}).subscribe({next:e=>{this._comuniPolygons.set(e),this._loadingCount.update(n=>n-1)},error:()=>this._loadingCount.update(e=>e-1)}))}getGVizURL(e,n,r="SELECT *"){return`https://docs.google.com/spreadsheets/d/${e}/gviz/tq?tqx=out:csv&gid=${n}&tq=${encodeURIComponent(r)}`}getDashboardSettings(){this._fetched.has("dashboardSettings")||(this._fetched.add("dashboardSettings"),this._loadingCount.update(e=>e+1),this.httpClient.get(St.settings.dashboardSettingsUrl,{responseType:"text"}).subscribe({next:e=>{this._dashboardSettings.set(ks(e)),this._loadingCount.update(n=>n-1)},error:()=>this._loadingCount.update(e=>e-1)}))}getDashboardParsingConfig(){this._fetched.has("dashboardParsingConfig")||(this._fetched.add("dashboardParsingConfig"),this._loadingCount.update(e=>e+1),this.httpClient.get(St.settings.dashboardParsingConfigUrl,{responseType:"text"}).subscribe({next:e=>{this._dashboardParsingConfig.set(Fs(e)),this._loadingCount.update(n=>n-1)},error:()=>this._loadingCount.update(e=>e-1)}))}getMapInterventiSettings(){this._fetched.has("mapInterventiSettings")||(this._fetched.add("mapInterventiSettings"),this._loadingCount.update(e=>e+1),this.httpClient.get(St.settings.mapInterventiSettingsUrl,{responseType:"text"}).subscribe({next:e=>{this._mapInterventiSettings.set(ks(e)),this._loadingCount.update(n=>n-1)},error:()=>this._loadingCount.update(e=>e-1)}))}getMapInterventiParsingConfig(){this._fetched.has("mapInterventiParsingConfig")||(this._fetched.add("mapInterventiParsingConfig"),this._loadingCount.update(e=>e+1),this.httpClient.get(St.settings.mapInterventiParsingConfigUrl,{responseType:"text"}).subscribe({next:e=>{this._mapInterventiParsingConfig.set(Fs(e)),this._loadingCount.update(n=>n-1)},error:()=>this._loadingCount.update(e=>e-1)}))}interventi=this._interventi.asReadonly();popolazione=this._popolazione.asReadonly();comuniPolygons=this._comuniPolygons.asReadonly();dashboardSettings=this._dashboardSettings.asReadonly();dashboardParsingConfig=this._dashboardParsingConfig.asReadonly();mapInterventiSettings=this._mapInterventiSettings.asReadonly();mapInterventiParsingConfig=this._mapInterventiParsingConfig.asReadonly();static \u0275fac=function(n){return new(n||t)(A(Kn))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var L="primary",gr=Symbol("RouteTitle"),Vs=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function vn(t){return new Vs(t)}function Ps(t,i,e){for(let n=0;n<t.length;n++){let r=t[n],o=i[n];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function lu(t,i,e){let n=e.path.split("/"),r=n.indexOf("**");if(r===-1){if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let l={},d=t.slice(0,n.length);return Ps(n,d,l)?{consumed:d,posParams:l}:null}if(r!==n.lastIndexOf("**"))return null;let o=n.slice(0,r),a=n.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!Ps(o,t.slice(0,o.length),s)||!Ps(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function Mo(t){return new Promise((i,e)=>{t.pipe(Gt()).subscribe({next:n=>i(n),error:n=>e(n)})})}function Ng(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!At(t[e],i[e]))return!1;return!0}function At(t,i){let e=t?js(t):void 0,n=i?js(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!cu(t[r],i[r]))return!1;return!0}function js(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function cu(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,o)=>n[o]===r)}else return t===i}function Lg(t){return t.length>0?t[t.length-1]:null}function yn(t){return cn(t)?t:Li(t)?qe(Promise.resolve(t)):D(t)}function du(t){return cn(t)?Mo(t):Promise.resolve(t)}var Bg={exact:fu,subset:mu},uu={exact:Vg,subset:jg,ignored:()=>!0},hu={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Us={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function tu(t,i,e){return Bg[e.paths](t.root,i.root,e.matrixParams)&&uu[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function Vg(t,i){return At(t,i)}function fu(t,i,e){if(!gn(t.segments,i.segments)||!Eo(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!fu(t.children[n],i.children[n],e))return!1;return!0}function jg(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>cu(t[e],i[e]))}function mu(t,i,e){return pu(t,i,i.segments,e)}function pu(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!gn(r,e)||i.hasChildren()||!Eo(r,e,n))}else if(t.segments.length===e.length){if(!gn(t.segments,e)||!Eo(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!mu(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!gn(t.segments,r)||!Eo(t.segments,r,n)||!t.children[L]?!1:pu(t.children[L],i,o,n)}}function Eo(t,i,e){return i.every((n,r)=>uu[e](t[r].parameters,n.parameters))}var Xe=class{root;queryParams;fragment;_queryParamMap;constructor(i=new te([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=vn(this.queryParams),this._queryParamMap}toString(){return Hg.serialize(this)}},te=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return So(this)}},nn=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=vn(this.parameters),this._parameterMap}toString(){return vu(this)}};function Ug(t,i){return gn(t,i)&&t.every((e,n)=>At(e.parameters,i[n].parameters))}function gn(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function zg(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===L&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==L&&(e=e.concat(i(r,n)))}),e}var li=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>new rn,providedIn:"root"})}return t})(),rn=class{parse(i){let e=new Hs(i);return new Xe(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${ir(i.root,!0)}`,n=Wg(i.queryParams),r=typeof i.fragment=="string"?`#${$g(i.fragment)}`:"";return`${e}${n}${r}`}},Hg=new rn;function So(t){return t.segments.map(i=>vu(i)).join("/")}function ir(t,i){if(!t.hasChildren())return So(t);if(i){let e=t.children[L]?ir(t.children[L],!1):"",n=[];return Object.entries(t.children).forEach(([r,o])=>{r!==L&&n.push(`${r}:${ir(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=zg(t,(n,r)=>r===L?[ir(t.children[L],!1)]:[`${r}:${ir(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[L]!=null?`${So(t)}/${e[0]}`:`${So(t)}/(${e.join("//")})`}}function gu(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Do(t){return gu(t).replace(/%3B/gi,";")}function $g(t){return encodeURI(t)}function zs(t){return gu(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Ao(t){return decodeURIComponent(t)}function nu(t){return Ao(t.replace(/\+/g,"%20"))}function vu(t){return`${zs(t.path)}${Gg(t.parameters)}`}function Gg(t){return Object.entries(t).map(([i,e])=>`;${zs(i)}=${zs(e)}`).join("")}function Wg(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Do(e)}=${Do(r)}`).join("&"):`${Do(e)}=${Do(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var qg=/^[^\/()?;#]+/;function Ns(t){let i=t.match(qg);return i?i[0]:""}var Yg=/^[^\/()?;=#]+/;function Kg(t){let i=t.match(Yg);return i?i[0]:""}var Zg=/^[^=?&#]+/;function Xg(t){let i=t.match(Zg);return i?i[0]:""}var Qg=/^[^&#]+/;function Jg(t){let i=t.match(Qg);return i?i[0]:""}var Hs=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new te([],{}):new te([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new F(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(n).length>0)&&(r[L]=new te(e,n)),r}parseSegment(){let i=Ns(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new F(4009,!1);return this.capture(i),new nn(Ao(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=Kg(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=Ns(this.remaining);r&&(n=r,this.capture(n))}i[Ao(e)]=Ao(n)}parseQueryParam(i){let e=Xg(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=Jg(this.remaining);a&&(n=a,this.capture(n))}let r=nu(e),o=nu(n);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Ns(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new F(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=L);let s=this.parseChildren(e+1);n[a??L]=Object.keys(s).length===1&&s[L]?s[L]:new te([],s),this.consumeOptional("//")}return n}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new F(4011,!1)}};function bu(t){return t.segments.length>0?new te([],{[L]:t}):t}function _u(t){let i={};for(let[n,r]of Object.entries(t.children)){let o=_u(r);if(n===L&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let e=new te(t.segments,i);return ev(e)}function ev(t){if(t.numberOfChildren===1&&t.children[L]){let i=t.children[L];return new te(t.segments.concat(i.segments),i.children)}return t}function on(t){return t instanceof Xe}function yu(t,i,e=null,n=null,r=new rn){let o=wu(t);return Cu(o,i,e,n,r)}function wu(t){let i;function e(o){let a={};for(let l of o.children){let d=e(l);a[l.outlet]=d}let s=new te(o.url,a);return o===t&&(i=s),s}let n=e(t.root),r=bu(n);return i??r}function Cu(t,i,e,n,r){let o=t;for(;o.parent;)o=o.parent;if(i.length===0)return Ls(o,o,o,e,n,r);let a=tv(i);if(a.toRoot())return Ls(o,o,new te([],{}),e,n,r);let s=nv(a,o,t),l=s.processChildren?or(s.segmentGroup,s.index,a.commands):xu(s.segmentGroup,s.index,a.commands);return Ls(o,s.segmentGroup,l,e,n,r)}function Ro(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function lr(t){return typeof t=="object"&&t!=null&&t.outlets}function iu(t,i,e){t||="\u0275";let n=new Xe;return n.queryParams={[t]:i},e.parse(e.serialize(n)).queryParams[t]}function Ls(t,i,e,n,r,o){let a={};for(let[d,u]of Object.entries(n??{}))a[d]=Array.isArray(u)?u.map(h=>iu(d,h,o)):iu(d,u,o);let s;t===i?s=e:s=Du(t,i,e);let l=bu(_u(s));return new Xe(l,a,r)}function Du(t,i,e){let n={};return Object.entries(t.children).forEach(([r,o])=>{o===i?n[r]=e:n[r]=Du(o,i,e)}),new te(t.segments,n)}var Io=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&Ro(n[0]))throw new F(4003,!1);let r=n.find(lr);if(r&&r!==Lg(n))throw new F(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function tv(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new Io(!0,0,t);let i=0,e=!1,n=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([l,d])=>{s[l]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,l)=>{l==0&&s==="."||(l==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new Io(e,i,n)}var ti=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function nv(t,i,e){if(t.isAbsolute)return new ti(i,!0,0);if(!e)return new ti(i,!1,NaN);if(e.parent===null)return new ti(e,!0,0);let n=Ro(t.commands[0])?0:1,r=e.segments.length-1+n;return iv(e,r,t.numberOfDoubleDots)}function iv(t,i,e){let n=t,r=i,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new F(4005,!1);r=n.segments.length}return new ti(n,!1,r-o)}function rv(t){return lr(t[0])?t[0].outlets:{[L]:t}}function xu(t,i,e){if(t??=new te([],{}),t.segments.length===0&&t.hasChildren())return or(t,i,e);let n=ov(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new te(t.segments.slice(0,n.pathIndex),{});return o.children[L]=new te(t.segments.slice(n.pathIndex),t.children),or(o,0,r)}else return n.match&&r.length===0?new te(t.segments,{}):n.match&&!t.hasChildren()?$s(t,i,e):n.match?or(t,0,r):$s(t,i,e)}function or(t,i,e){if(e.length===0)return new te(t.segments,{});{let n=rv(e),r={};if(Object.keys(n).some(o=>o!==L)&&t.children[L]&&t.numberOfChildren===1&&t.children[L].segments.length===0){let o=or(t.children[L],i,e);return new te(t.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=xu(t.children[o],i,a))}),Object.entries(t.children).forEach(([o,a])=>{n[o]===void 0&&(r[o]=a)}),new te(t.segments,r)}}function ov(t,i,e){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return o;let a=t.segments[r],s=e[n];if(lr(s))break;let l=`${s}`,d=n<e.length-1?e[n+1]:null;if(r>0&&l===void 0)break;if(l&&d&&typeof d=="object"&&d.outlets===void 0){if(!ou(l,d,a))return o;n+=2}else{if(!ou(l,{},a))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function $s(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(lr(o)){let l=av(o.outlets);return new te(n,l)}if(r===0&&Ro(e[0])){let l=t.segments[i];n.push(new nn(l.path,ru(e[0]))),r++;continue}let a=lr(o)?o.outlets[L]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&Ro(s)?(n.push(new nn(a,ru(s))),r+=2):(n.push(new nn(a,{})),r++)}return new te(n,{})}function av(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=$s(new te([],{}),0,n))}),i}function ru(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function ou(t,i,e){return t==e.path&&At(i,e.parameters)}var ar="imperative",Re=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(Re||{}),Qe=class{id;url;constructor(i,e){this.id=i,this.url=e}},bn=class extends Qe{type=Re.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Mt=class extends Qe{urlAfterRedirects;type=Re.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ne=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Ne||{}),cr=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(cr||{}),ot=class extends Qe{reason;code;type=Re.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Eu(t){return t instanceof ot&&(t.code===Ne.Redirect||t.code===Ne.SupersededByNewNavigation)}var Lt=class extends Qe{reason;code;type=Re.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},_n=class extends Qe{error;target;type=Re.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},dr=class extends Qe{urlAfterRedirects;state;type=Re.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},To=class extends Qe{urlAfterRedirects;state;type=Re.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Oo=class extends Qe{urlAfterRedirects;state;shouldActivate;type=Re.GuardsCheckEnd;constructor(i,e,n,r,o){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Fo=class extends Qe{urlAfterRedirects;state;type=Re.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ko=class extends Qe{urlAfterRedirects;state;type=Re.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Po=class{route;type=Re.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},No=class{route;type=Re.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Lo=class{snapshot;type=Re.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Bo=class{snapshot;type=Re.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Vo=class{snapshot;type=Re.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},jo=class{snapshot;type=Re.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var ii=class{},ur=class{},ri=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function sv(t){return!(t instanceof ii)&&!(t instanceof ri)&&!(t instanceof ur)}var Uo=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new ci(this.rootInjector)}},ci=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new Uo(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(A(we))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zo=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=Gs(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=Gs(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=Ws(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return Ws(i,this._root).map(e=>e.value)}};function Gs(t,i){if(t===i.value)return i;for(let e of i.children){let n=Gs(t,e);if(n)return n}return null}function Ws(t,i){if(t===i.value)return[i];for(let e of i.children){let n=Ws(t,e);if(n.length)return n.unshift(i),n}return[]}var Ze=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function ei(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var hr=class extends zo{snapshot;constructor(i,e){super(i),this.snapshot=e,tl(this,i)}toString(){return this.snapshot.toString()}};function Su(t,i){let e=lv(t,i),n=new Ge([new nn("",{})]),r=new Ge({}),o=new Ge({}),a=new Ge({}),s=new Ge(""),l=new gt(n,r,a,s,o,L,t,e.root);return l.snapshot=e.root,new hr(new Ze(l,[]),e)}function lv(t,i){let e={},n={},r={},a=new oi([],e,r,"",n,L,t,null,{},i);return new fr("",new Ze(a,[]))}var gt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,r,o,a,s,l){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(j(d=>d[gr]))??D(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(j(i=>vn(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(j(i=>vn(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function el(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:m(m({},i.params),t.params),data:m(m({},i.data),t.data),resolve:m(m(m(m({},t.data),i.data),r?.data),t._resolvedData)}:n={params:m({},t.params),data:m({},t.data),resolve:m(m({},t.data),t._resolvedData??{})},r&&Mu(r)&&(n.resolve[gr]=r.title),n}var oi=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[gr]}constructor(i,e,n,r,o,a,s,l,d,u){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=l,this._resolve=d,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=vn(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=vn(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},fr=class extends zo{url;constructor(i,e){super(e),this.url=i,tl(this,e)}toString(){return Au(this._root)}};function tl(t,i){i.value._routerState=t,i.children.forEach(e=>tl(t,e))}function Au(t){let i=t.children.length>0?` { ${t.children.map(Au).join(", ")} } `:"";return`${t.value}${i}`}function Bs(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,At(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),At(i.params,e.params)||t.paramsSubject.next(e.params),Ng(i.url,e.url)||t.urlSubject.next(e.url),At(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function qs(t,i){let e=At(t.params,i.params)&&Ug(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||qs(t.parent,i.parent))}function Mu(t){return typeof t.title=="string"||t.title===null}var Ru=new v(""),nl=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=L;activateEvents=new $;deactivateEvents=new $;attachEvents=new $;detachEvents=new $;routerOutletData=it();parentContexts=c(ci);location=c(ht);changeDetector=c(Te);inputBinder=c(Wo,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new F(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new F(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new F(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new F(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,l=new Ys(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ce]})}return t})(),Ys=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===gt?this.route:i===ci?this.childContexts:i===Ru?this.outletData:this.parent.get(i,e)}},Wo=new v("");var il=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&Me(0,"router-outlet")},dependencies:[nl],encapsulation:2})}return t})();function rl(t){let i=t.children&&t.children.map(rl),e=i?Y(m({},t),{children:i}):m({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==L&&(e.component=il),e}function cv(t,i,e){let n=mr(t,i._root,e?e._root:void 0);return new hr(n,i)}function mr(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=dv(t,i,e);return new Ze(n,r)}else{if(t.shouldAttach(i.value)){let o=t.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>mr(t,s)),a}}let n=uv(i.value),r=i.children.map(o=>mr(t,o));return new Ze(n,r)}}function dv(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return mr(t,n,r);return mr(t,n)})}function uv(t){return new gt(new Ge(t.url),new Ge(t.params),new Ge(t.queryParams),new Ge(t.fragment),new Ge(t.data),t.outlet,t.component,t)}var ai=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},Iu="ngNavigationCancelingError";function Ho(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=on(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=Tu(!1,Ne.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function Tu(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[Iu]=!0,e.cancellationCode=i,e}function hv(t){return Ou(t)&&on(t.url)}function Ou(t){return!!t&&t[Iu]}var Ks=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),Bs(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=ei(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],n),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=n.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=ei(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=ei(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=ei(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new jo(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Bo(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(Bs(r),r===o)if(r.component){let a=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let a=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Bs(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,n)}},$o=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},ni=class{component;route;constructor(i,e){this.component=i,this.route=e}};function fv(t,i,e){let n=t._root,r=i?i._root:null;return rr(n,r,e,[n.value])}function mv(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function di(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!bc(t)?t:i.get(t):n}function rr(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ei(i);return t.children.forEach(a=>{pv(a,o[a.value.outlet],e,n.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>sr(s,e.getContext(a),r)),r}function pv(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=i?i.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let l=gv(a,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new $o(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?rr(t,i,s?s.children:null,n,r):rr(t,i,e,n,r),l&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new ni(s.outlet.component,a))}else a&&sr(i,s,r),r.canActivateChecks.push(new $o(n)),o.component?rr(t,null,s?s.children:null,n,r):rr(t,null,e,n,r);return r}function gv(t,i,e){if(typeof e=="function")return Ye(i._environmentInjector,()=>e(t,i));switch(e){case"pathParamsChange":return!gn(t.url,i.url);case"pathParamsOrQueryParamsChange":return!gn(t.url,i.url)||!At(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!qs(t,i)||!At(t.queryParams,i.queryParams);default:return!qs(t,i)}}function sr(t,i,e){let n=ei(t),r=t.value;Object.entries(n).forEach(([o,a])=>{r.component?i?sr(a,i.children.getContext(o),e):sr(a,null,e):sr(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new ni(i.outlet.component,r)):e.canDeactivateChecks.push(new ni(null,r)):e.canDeactivateChecks.push(new ni(null,r))}function vr(t){return typeof t=="function"}function vv(t){return typeof t=="boolean"}function bv(t){return t&&vr(t.canLoad)}function _v(t){return t&&vr(t.canActivate)}function yv(t){return t&&vr(t.canActivateChild)}function wv(t){return t&&vr(t.canDeactivate)}function Cv(t){return t&&vr(t.canMatch)}function Fu(t){return t instanceof mc||t?.name==="EmptyError"}var xo=Symbol("INITIAL_VALUE");function si(){return Se(t=>qr(t.map(i=>i.pipe(et(1),dt(xo)))).pipe(j(i=>{for(let e of i)if(e!==!0){if(e===xo)return xo;if(e===!1||Dv(e))return e}return!0}),me(i=>i!==xo),et(1)))}function Dv(t){return on(t)||t instanceof ai}function ku(t){return t.aborted?D(void 0).pipe(et(1)):new ke(i=>{let e=()=>{i.next(),i.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function Pu(t){return Pe(ku(t))}function xv(t){return zt(i=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?D(Y(m({},i),{guardsResult:!0})):Ev(o,e,n).pipe(zt(a=>a&&vv(a)?Sv(e,r,t):D(a)),j(a=>Y(m({},i),{guardsResult:a})))})}function Ev(t,i,e){return qe(t).pipe(zt(n=>Tv(n.component,n.route,e,i)),Gt(n=>n!==!0,!0))}function Sv(t,i,e){return qe(i).pipe(Ii(n=>Yr(Mv(n.route.parent,e),Av(n.route,e),Iv(t,n.path),Rv(t,n.route))),Gt(n=>n!==!0,!0))}function Av(t,i){return t!==null&&i&&i(new Vo(t)),D(!0)}function Mv(t,i){return t!==null&&i&&i(new Lo(t)),D(!0)}function Rv(t,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return D(!0);let n=e.map(r=>In(()=>{let o=i._environmentInjector,a=di(r,o),s=_v(a)?a.canActivate(i,t):Ye(o,()=>a(i,t));return yn(s).pipe(Gt())}));return D(n).pipe(si())}function Iv(t,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>mv(o)).filter(o=>o!==null).map(o=>In(()=>{let a=o.guards.map(s=>{let l=o.node._environmentInjector,d=di(s,l),u=yv(d)?d.canActivateChild(e,t):Ye(l,()=>d(e,t));return yn(u).pipe(Gt())});return D(a).pipe(si())}));return D(r).pipe(si())}function Tv(t,i,e,n){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return D(!0);let o=r.map(a=>{let s=i._environmentInjector,l=di(a,s),d=wv(l)?l.canDeactivate(t,i,e,n):Ye(s,()=>l(t,i,e,n));return yn(d).pipe(Gt())});return D(o).pipe(si())}function Ov(t,i,e,n,r){let o=i.canLoad;if(o===void 0||o.length===0)return D(!0);let a=o.map(s=>{let l=di(s,t),d=bv(l)?l.canLoad(i,e):Ye(t,()=>l(i,e)),u=yn(d);return r?u.pipe(Pu(r)):u});return D(a).pipe(si(),Nu(n))}function Nu(t){return dc(ye(i=>{if(typeof i!="boolean")throw Ho(t,i)}),j(i=>i===!0))}function Fv(t,i,e,n,r,o){let a=i.canMatch;if(!a||a.length===0)return D(!0);let s=a.map(l=>{let d=di(l,t),u=Cv(d)?d.canMatch(i,e,r):Ye(t,()=>d(i,e,r));return yn(u).pipe(Pu(o))});return D(s).pipe(si(),Nu(n))}var Nt=class t extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,t.prototype)}},pr=class t extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,t.prototype)}};function kv(t){throw new F(4e3,!1)}function Pv(t){throw Tu(!1,Ne.GuardRejected)}var Zs=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return n;if(r.numberOfChildren>1||!r.children[L])throw kv(`${i.redirectTo}`);r=r.children[L]}}async applyRedirectCommands(i,e,n,r,o){let a=await Nv(e,r,o);if(a instanceof Xe)throw new pr(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,n);if(a[0]==="/")throw new pr(s);return s}applyRedirectCreateUrlTree(i,e,n,r){let o=this.createSegmentGroup(i,e.root,n,r);return new Xe(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);n[r]=e[s]}else n[r]=o}),n}createSegmentGroup(i,e,n,r){let o=this.createSegments(i,e.segments,n,r),a={};return Object.entries(e.children).forEach(([s,l])=>{a[s]=this.createSegmentGroup(i,l,n,r)}),new te(o,a)}createSegments(i,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new F(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}};function Nv(t,i,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return Mo(yn(Ye(e,()=>n(i))))}function Lv(t,i){return t.providers&&!t._injector&&(t._injector=ts(t.providers,i,`Route: ${t.path}`)),t._injector??i}function pt(t){return t.outlet||L}function Bv(t,i){let e=t.filter(n=>pt(n)===i);return e.push(...t.filter(n=>pt(n)!==i)),e}var Xs={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Lu(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function Vv(t,i,e,n,r,o,a){let s=Bu(t,i,e);if(!s.matched)return D(s);let l=Lu(o(s));return n=Lv(i,n),Fv(n,i,e,r,l,a).pipe(j(d=>d===!0?s:m({},Xs)))}function Bu(t,i,e){if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?m({},Xs):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||lu)(e,t,i);if(!r)return m({},Xs);let o={};Object.entries(r.posParams??{}).forEach(([s,l])=>{o[s]=l.path});let a=r.consumed.length>0?m(m({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function au(t,i,e,n,r){return e.length>0&&zv(t,e,n,r)?{segmentGroup:new te(i,Uv(n,new te(e,t.children))),slicedSegments:[]}:e.length===0&&Hv(t,e,n)?{segmentGroup:new te(t.segments,jv(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new te(t.segments,t.children),slicedSegments:e}}function jv(t,i,e,n){let r={};for(let o of e)if(qo(t,i,o)&&!n[pt(o)]){let a=new te([],{});r[pt(o)]=a}return m(m({},n),r)}function Uv(t,i){let e={};e[L]=i;for(let n of t)if(n.path===""&&pt(n)!==L){let r=new te([],{});e[pt(n)]=r}return e}function zv(t,i,e,n){return e.some(r=>!qo(t,i,r)||!(pt(r)!==L)?!1:!(n!==void 0&&pt(r)===n))}function Hv(t,i,e){return e.some(n=>qo(t,i,n))}function qo(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function $v(t,i,e){return i.length===0&&!t.children[e]}var Qs=class{};async function Gv(t,i,e,n,r,o,a="emptyOnly",s){return new Js(t,i,e,n,r,a,o,s).recognize()}var Wv=31,Js=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,o,a,s,l){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=l,this.applyRedirects=new Zs(this.urlSerializer,this.urlTree)}noMatchError(i){return new F(4002,`'${i.segmentGroup}'`)}async recognize(){let i=au(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(i),r=new Ze(n,e),o=new fr("",r),a=yu(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new oi([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),L,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,L,e),rootSnapshot:e}}catch(n){if(n instanceof pr)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Nt?this.noMatchError(n):n}}async processSegmentGroup(i,e,n,r,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(i,e,n,o);let a=await this.processSegment(i,e,n,n.segments,r,!0,o);return a instanceof Ze?[a]:[]}async processChildren(i,e,n,r){let o=[];for(let l of Object.keys(n.children))l==="primary"?o.unshift(l):o.push(l);let a=[];for(let l of o){let d=n.children[l],u=Bv(e,l),h=await this.processSegmentGroup(i,u,d,l,r);a.push(...h)}let s=Vu(a);return qv(s),s}async processSegment(i,e,n,r,o,a,s){for(let l of e)try{return await this.processSegmentAgainstRoute(l._injector??i,e,l,n,r,o,a,s)}catch(d){if(d instanceof Nt||Fu(d))continue;throw d}if($v(n,r,o))return new Qs;throw new Nt(n)}async processSegmentAgainstRoute(i,e,n,r,o,a,s,l){if(pt(n)!==a&&(a===L||!qo(r,o,n)))throw new Nt(r);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,n,o,a,l);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,o,a,l);throw new Nt(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,n,r,o,a,s){let{matched:l,parameters:d,consumedSegments:u,positionalParamSegments:h,remainingSegments:_}=Bu(e,r,o);if(!l)throw new Nt(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Wv&&(this.allowRedirects=!1));let x=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let O=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,Lu(x),i),Z=await this.applyRedirects.lineralizeSegments(r,O);return this.processSegment(i,n,e,Z.concat(_),a,!1,s)}createSnapshot(i,e,n,r,o){let a=new oi(n,r,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Kv(e),pt(e),e.component??e._loadedComponent??null,e,Zv(e),i),s=el(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,n,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=C=>this.createSnapshot(i,n,C.consumedSegments,C.parameters,a),l=await Mo(Vv(e,n,r,i,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!l?.matched)throw new Nt(e);i=n._injector??i;let{routes:d}=await this.getChildConfig(i,n,r),u=n._loadedInjector??i,{parameters:h,consumedSegments:_,remainingSegments:x}=l,O=this.createSnapshot(i,n,_,h,a),{segmentGroup:Z,slicedSegments:S}=au(e,_,x,d,o);if(S.length===0&&Z.hasChildren()){let C=await this.processChildren(u,d,Z,O);return new Ze(O,C)}if(d.length===0&&S.length===0)return new Ze(O,[]);let B=pt(n)===o,p=await this.processSegment(u,d,Z,S,B?L:o,!0,O);return new Ze(O,p instanceof Ze?[p]:[])}async getChildConfig(i,e,n){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await Mo(Ov(i,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Pv(e)}return{routes:[],injector:i}}};function qv(t){t.sort((i,e)=>i.value.outlet===L?-1:e.value.outlet===L?1:i.value.outlet.localeCompare(e.value.outlet))}function Yv(t){let i=t.value.routeConfig;return i&&i.path===""}function Vu(t){let i=[],e=new Set;for(let n of t){if(!Yv(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=Vu(n.children);i.push(new Ze(n.value,r))}return i.filter(n=>!e.has(n))}function Kv(t){return t.data||{}}function Zv(t){return t.resolve||{}}function Xv(t,i,e,n,r,o,a){return zt(async s=>{let{state:l,tree:d}=await Gv(t,i,e,n,s.extractedUrl,r,o,a);return Y(m({},s),{targetSnapshot:l,urlAfterRedirects:d})})}function Qv(t){return zt(i=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=i;if(!n.length)return D(i);let r=new Set(n.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let l of ju(s))o.add(l);let a=0;return qe(o).pipe(Ii(s=>r.has(s)?Jv(s,e,t):(s.data=el(s,s.parent,t).resolve,D(void 0))),ye(()=>a++),Xa(1),zt(s=>a===o.size?D(i):We))})}function ju(t){let i=t.children.map(e=>ju(e)).flat();return[t,...i]}function Jv(t,i,e){let n=t.routeConfig,r=t._resolve;return n?.title!==void 0&&!Mu(n)&&(r[gr]=n.title),In(()=>(t.data=el(t,t.parent,e).resolve,eb(r,t,i).pipe(j(o=>(t._resolvedData=o,t.data=m(m({},t.data),o),null)))))}function eb(t,i,e){let n=js(t);if(n.length===0)return D({});let r={};return qe(n).pipe(zt(o=>tb(t[o],i,e).pipe(Gt(),ye(a=>{if(a instanceof ai)throw Ho(new rn,a);r[o]=a}))),Xa(1),j(()=>r),Ri(o=>Fu(o)?We:Wr(o)))}function tb(t,i,e){let n=i._environmentInjector,r=di(t,n),o=r.resolve?r.resolve(i,e):Ye(n,()=>r(i,e));return yn(o)}function su(t){return Se(i=>{let e=t(i);return e?qe(e).pipe(j(()=>i)):D(i)})}var ol=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===L);return n}getResolvedTitleForRoute(e){return e.data[gr]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>c(Uu),providedIn:"root"})}return t})(),Uu=(()=>{class t extends ol{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(A(Td))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ui=new v("",{factory:()=>({})}),br=new v(""),zu=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=c($c);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await du(Ye(e,()=>n.loadComponent())),a=await Gu($u(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await Hu(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,r),r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function Hu(t,i,e,n){let r=await du(Ye(e,()=>t.loadChildren())),o=await Gu($u(r)),a;o instanceof Fc||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),n&&n(t);let s,l,d=!1,u;return Array.isArray(a)?(l=a,d=!0):(s=a.create(e).injector,u=a,l=s.get(br,[],{optional:!0,self:!0}).flat()),{routes:l.map(rl),injector:s,factory:u}}function nb(t){return t&&typeof t=="object"&&"default"in t}function $u(t){return nb(t)?t.default:t}async function Gu(t){return t}var Yo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>c(ib),providedIn:"root"})}return t})(),ib=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wu=new v("");var rb=()=>{},qu=new v(""),Yu=(()=>{class t{currentNavigation=w(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=w(null);events=new y;transitionAbortWithErrorSubject=new y;configLoader=c(zu);environmentInjector=c(we);destroyRef=c(dn);urlSerializer=c(li);rootContexts=c(ci);location=c(Zt);inputBindingEnabled=c(Wo,{optional:!0})!==null;titleStrategy=c(ol);options=c(ui,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=c(Yo);createViewTransition=c(Wu,{optional:!0});navigationErrorHandler=c(qu,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>D(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new Po(r)),n=r=>this.events.next(new No(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;ee(()=>{this.transitions?.next(Y(m({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ge(null),this.transitions.pipe(me(n=>n!==null),Se(n=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===n.id;return D(n).pipe(Se(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",Ne.SupersededByNewNavigation),We;this.currentTransition=n;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:l?Y(m({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&u!=="reload")return this.events.next(new Lt(s.id,this.urlSerializer.serialize(s.rawUrl),"",cr.IgnoredSameUrlNavigation)),s.resolve(!1),We;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return D(s).pipe(Se(h=>(this.events.next(new bn(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?We:Promise.resolve(h))),Xv(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),ye(h=>{n.targetSnapshot=h.targetSnapshot,n.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(_=>(_.finalUrl=h.urlAfterRedirects,_)),this.events.next(new ur)}),Se(h=>qe(n.routesRecognizeHandler.deferredHandle??D(void 0)).pipe(j(()=>h))),ye(()=>{let h=new dr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:h,extractedUrl:_,source:x,restoredState:O,extras:Z}=s,S=new bn(h,this.urlSerializer.serialize(_),x,O);this.events.next(S);let B=Su(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=Y(m({},s),{targetSnapshot:B,urlAfterRedirects:_,extras:Y(m({},Z),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(p=>(p.finalUrl=_,p)),D(n)}else return this.events.next(new Lt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",cr.IgnoredByUrlHandlingStrategy)),s.resolve(!1),We}),j(s=>{let l=new To(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(l),this.currentTransition=n=Y(m({},s),{guards:fv(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),xv(s=>this.events.next(s)),Se(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Ho(this.urlSerializer,s.guardsResult);let l=new Oo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(l),!a())return We;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Ne.GuardRejected),We;if(s.guards.canActivateChecks.length===0)return D(s);let d=new Fo(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return We;let u=!1;return D(s).pipe(Qv(this.paramsInheritanceStrategy),ye({next:()=>{u=!0;let h=new ko(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(h)},complete:()=>{u||this.cancelNavigationTransition(s,"",Ne.NoDataFromResolver)}}))}),su(s=>{let l=u=>{let h=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let _=u._environmentInjector;h.push(this.configLoader.loadComponent(_,u.routeConfig).then(x=>{u.component=x}))}for(let _ of u.children)h.push(...l(_));return h},d=l(s.targetSnapshot.root);return d.length===0?D(s):qe(Promise.all(d).then(()=>s))}),su(()=>this.afterPreactivation()),Se(()=>{let{currentSnapshot:s,targetSnapshot:l}=n,d=this.createViewTransition?.(this.environmentInjector,s.root,l.root);return d?qe(d).pipe(j(()=>n)):D(n)}),et(1),Se(s=>{let l=cv(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=Y(m({},s),{targetRouterState:l}),this.currentNavigation.update(u=>(u.targetRouterState=l,u)),this.events.next(new ii);let d=n.beforeActivateHandler.deferredHandle;return d?qe(d.then(()=>s)):D(s)}),ye(s=>{new Ks(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(l=>(l.abort=rb,l)),this.lastSuccessfulNavigation.set(ee(this.currentNavigation)),this.events.next(new Mt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Pe(ku(o.signal).pipe(me(()=>!r&&!n.targetRouterState),ye(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",Ne.Aborted)}))),ye({complete:()=>{r=!0}}),Pe(this.transitionAbortWithErrorSubject.pipe(ye(s=>{throw s}))),On(()=>{o.abort(),r||this.cancelNavigationTransition(n,"",Ne.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ri(s=>{if(r=!0,this.destroyed)return n.resolve(!1),We;if(Ou(s))this.events.next(new ot(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),hv(s)?this.events.next(new ri(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let l=new _n(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let d=Ye(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(d instanceof ai){let{message:u,cancellationCode:h}=Ho(this.urlSerializer,d);this.events.next(new ot(n.id,this.urlSerializer.serialize(n.extractedUrl),u,h)),this.events.next(new ri(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(l),s}catch(d){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(d)}}return We}))}))}cancelNavigationTransition(e,n,r){let o=new ot(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=ee(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ob(t){return t!==ar}var Ku=new v("");var Zu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>c(ab),providedIn:"root"})}return t})(),Go=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},ab=(()=>{class t extends Go{static \u0275fac=(()=>{let e;return function(r){return(e||(e=yt(t)))(r||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ko=(()=>{class t{urlSerializer=c(li);options=c(ui,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=c(Zt);urlHandlingStrategy=c(Yo);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Xe;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=r??o;return a instanceof Xe?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Su(null,c(we));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:()=>c(sb),providedIn:"root"})}return t})(),sb=(()=>{class t extends Ko{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof bn?this.updateStateMemento():e instanceof Lt?this.commitTransition(n):e instanceof dr?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof ii?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof ot&&!Eu(e)?this.restoreHistory(n):e instanceof _n?this.restoreHistory(n,!0):e instanceof Mt&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:r,id:o}=n,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let l=this.browserPageId,d=m(m({},s),this.generateNgRouterState(o,l,n));this.location.replaceState(e,"",d)}else{let l=m(m({},s),this.generateNgRouterState(o,this.browserPageId+1,n));this.location.go(e,"",l)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,r){return this.canceledNavigationResolution==="computed"?m({navigationId:e,\u0275routerPageId:n},this.routerUrlState(r)):m({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=yt(t)))(r||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function al(t,i){t.events.pipe(me(e=>e instanceof Mt||e instanceof ot||e instanceof _n||e instanceof Lt),j(e=>e instanceof Mt||e instanceof Lt?0:(e instanceof ot?e.code===Ne.Redirect||e.code===Ne.SupersededByNewNavigation:!1)?2:1),me(e=>e!==2),et(1)).subscribe(()=>{i()})}var Rt=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=c(ns);stateManager=c(Ko);options=c(ui,{optional:!0})||{};pendingTasks=c(yc);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=c(Yu);urlSerializer=c(li);location=c(Zt);urlHandlingStrategy=c(Yo);injector=c(we);_events=new y;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=c(Zu);injectorCleanup=c(Ku,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=c(br,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!c(Wo,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new pe;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=ee(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof ot&&n.code!==Ne.Redirect&&n.code!==Ne.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof Mt)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof ri){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=m({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||ob(r.source)},a);this.scheduleNavigation(s,ar,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}sv(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ar,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r,o)=>{this.navigateToSyncWithBrowser(e,r,n,o)})}navigateToSyncWithBrowser(e,n,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=Y(m({},o),{browserUrl:e})),r){let d=m({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let l=this.parseUrl(s);this.scheduleNavigation(l,n,a,o).catch(d=>{this.disposed||this.injector.get(Pi)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return ee(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(rl),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:l}=n,d=l?this.currentUrlTree.fragment:a,u=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":u=m(m({},this.currentUrlTree.queryParams),o);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=o||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let _=r?r.snapshot:this.routerState.snapshot.root;h=wu(_)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return Cu(h,e,u,d??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let r=on(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,ar,null,n)}navigate(e,n={skipLocationChange:!1}){return lb(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(Ti(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=m({},hu):n===!1?r=m({},Us):r=m(m({},Us),n),on(e))return tu(this.currentUrlTree,e,r);let o=this.parseUrl(e);return tu(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,l,d;a?(s=a.resolve,l=a.reject,d=a.promise):d=new Promise((h,_)=>{s=h,l=_});let u=this.pendingTasks.add();return al(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:l,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function lb(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new F(4008,!1)}var ub=(()=>{class t{router=c(Rt);stateManager=c(Ko);fragment=w("");queryParams=w({});path=w("");serializer=c(li);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof Mt&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Xe(n)))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Xu=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=c(new zn("href"),{optional:!0});reactiveHref=Wc(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return ee(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return ee(this._target)}_target=w(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return ee(this._queryParams)}_queryParams=w(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return ee(this._fragment)}_fragment=w(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return ee(this._queryParamsHandling)}_queryParamsHandling=w(void 0);set state(e){this._state.set(e)}get state(){return ee(this._state)}_state=w(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return ee(this._info)}_info=w(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return ee(this._relativeTo)}_relativeTo=w(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return ee(this._preserveFragment)}_preserveFragment=w(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return ee(this._skipLocationChange)}_skipLocationChange=w(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return ee(this._replaceUrl)}_replaceUrl=w(!1);isAnchorElement;onChanges=new y;applicationErrorHandler=c(Pi);options=c(ui,{optional:!0});reactiveRouterState=c(ub);constructor(e,n,r,o,a,s){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let l=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area"||!!(typeof customElements=="object"&&customElements.get(l)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=w(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(on(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||n||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,l)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let r=this.renderer,o=this.el.nativeElement;n!==null?r.setAttribute(o,e,n):r.removeAttribute(o,e)}_urlTree=ve(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:on(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return ee(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(n){return new(n||t)(W(Rt),W(gt),Qa("tabindex"),W(De),W(I),W($n))};static \u0275dir=E({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,r){n&1&&ue("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),n&2&&fe("href",r.reactiveHref(),Tc)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",M],skipLocationChange:[2,"skipLocationChange","skipLocationChange",M],replaceUrl:[2,"replaceUrl","replaceUrl",M],routerLink:"routerLink"},features:[Ce]})}return t})();var hb=new v("");function fb(t,...i){return Oi([{provide:br,multi:!0,useValue:t},[],{provide:gt,useFactory:mb},{provide:Pc,multi:!0,useFactory:pb},i.map(e=>e.\u0275providers)])}function mb(){return c(Rt).routerState.root}function pb(){let t=c(he);return i=>{let e=t.get(wt);if(i!==e.components[0])return;let n=t.get(Rt),r=t.get(gb);t.get(vb)===1&&n.initialNavigation(),t.get(bb,null,{optional:!0})?.setUpPreloading(),t.get(hb,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var gb=new v("",{factory:()=>new y}),vb=new v("",{factory:()=>1});var bb=new v("");var Zo=new WeakMap,Ke=(()=>{class t{_appRef;_injector=c(he);_environmentInjector=c(we);load(e){let n=this._appRef=this._appRef||this._injector.get(wt),r=Zo.get(n);r||(r={loaders:new Set,refs:[]},Zo.set(n,r),n.onDestroy(()=>{Zo.get(n)?.refs.forEach(o=>o.destroy()),Zo.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(oo(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Xo;function _b(){if(Xo===void 0&&(Xo=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Xo=t.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Xo}function wn(t){return _b()?.createHTML(t)||t}function Qu(t,i,e){let n=e.sanitize(Ve.HTML,i);t.innerHTML=wn(n||"")}function Ju(t){return Error(`Unable to find icon with the name "${t}"`)}function yb(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function eh(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function th(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Bt=class{url;svgText;options;svgElement=null;constructor(i,e,n){this.url=i,this.svgText=e,this.options=n}},ih=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,r,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,o){return this._addSvgIconConfig(e,n,new Bt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,o){let a=this._sanitizer.sanitize(Ve.HTML,r);if(!a)throw th(r);let s=wn(a);return this._addSvgIconConfig(e,n,new Bt("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new Bt(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){let o=this._sanitizer.sanitize(Ve.HTML,n);if(!o)throw th(n);let a=wn(o);return this._addSvgIconSetConfig(e,new Bt("",a,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(Ve.RESOURCE_URL,e);if(!n)throw eh(e);let r=this._cachedIconsByUrl.get(n);return r?D(Qo(r)):this._loadSvgIconFromConfig(new Bt(e,null)).pipe(ye(o=>this._cachedIconsByUrl.set(n,o)),j(o=>Qo(o)))}getNamedSvgIcon(e,n=""){let r=nh(n,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):Wr(Ju(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?D(Qo(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(j(n=>Qo(n)))}_getSvgFromIconSetConfigs(e,n){let r=this._extractIconWithNameFromAnySet(e,n);if(r)return D(r);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(Ri(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Ve.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),D(null)})));return Kr(o).pipe(j(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw Ju(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){let o=n[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(ye(n=>e.svgText=n),j(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?D(null):this._fetchIcon(e).pipe(ye(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(wn("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let n=this._svgElementFromString(wn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw yb();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(Ve.RESOURCE_URL,n);if(!a)throw eh(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let l=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(j(d=>wn(d)),On(()=>this._inProgressUrlFetches.delete(a)),gc());return this._inProgressUrlFetches.set(a,l),l}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(nh(e,n),r),this}_addSvgIconSetConfig(e,n){let r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](n,e);if(o)return wb(o)?new Bt(o.url,null,o.options):new Bt(o,null)}}static \u0275fac=function(n){return new(n||t)(A(Kn,8),A(Xi),A(U,8),A(un))};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Qo(t){return t.cloneNode(!0)}function nh(t,i){return t+":"+i}function wb(t){return!!(t.url&&t.options)}var Cb=new v("cdk-dir-doc",{providedIn:"root",factory:()=>c(U)}),Db=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function rh(t){let i=t?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?Db.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var at=(()=>{class t{get value(){return this.valueSignal()}valueSignal=w("ltr");change=new $;constructor(){let e=c(Cb,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(rh(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var It=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();var xb=["*"],Eb=new v("MAT_ICON_DEFAULT_OPTIONS"),Sb=new v("mat-icon-location",{providedIn:"root",factory:()=>{let t=c(U),i=t?t.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),oh=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ab=oh.map(t=>`[${t}]`).join(", "),Mb=/^url\(['"]?#(.*?)['"]?\)$/,Jo=(()=>{class t{_elementRef=c(I);_iconRegistry=c(ih);_location=c(Sb);_errorHandler=c(un);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=pe.EMPTY;constructor(){let e=c(new zn("aria-hidden"),{optional:!0}),n=c(Eb,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let r=e.childNodes[n];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(Ab),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)oh.forEach(a=>{let s=n[o],l=s.getAttribute(a),d=l?l.match(Mb):null;if(d){let u=r.get(s);u||(u=[],r.set(s,u)),u.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(et(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,r){n&2&&(fe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Vn(r.color?"mat-"+r.color:""),K("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",M],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:xb,decls:1,vars:0,template:function(n,r){n&1&&(xe(),J(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})();function Vt(t,i=0){return ah(t)?Number(t):arguments.length===2?i:0}function ah(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function ze(t){return t instanceof I?t.nativeElement:t}function jt(t){return Array.isArray(t)?t:[t]}function Ee(t){return t==null?"":typeof t=="string"?t:`${t}px`}function hi(t){return t!=null&&`${t}`!="false"}var fh=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(W(De),W(I))};static \u0275dir=E({type:t})}return t})(),Rb=(()=>{class t extends fh{static \u0275fac=(()=>{let e;return function(r){return(e||(e=yt(t)))(r||t)}})();static \u0275dir=E({type:t,features:[Ie]})}return t})(),Cn=new v("");var Ib={provide:Cn,useExisting:tt(()=>ha),multi:!0};function Tb(){let t=rt()?rt().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ob=new v(""),ha=(()=>{class t extends fh{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Tb())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(W(De),W(I),W(Ob,8))};static \u0275dir=E({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&ue("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[ge([Ib]),Ie]})}return t})();function ul(t){return t==null||hl(t)===0}function hl(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var fa=new v(""),ma=new v(""),Fb=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,na=class{static min(i){return kb(i)}static max(i){return Pb(i)}static required(i){return Nb(i)}static requiredTrue(i){return Lb(i)}static email(i){return Bb(i)}static minLength(i){return Vb(i)}static maxLength(i){return jb(i)}static pattern(i){return Ub(i)}static nullValidator(i){return mh()}static compose(i){return yh(i)}static composeAsync(i){return wh(i)}};function kb(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function Pb(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function Nb(t){return ul(t.value)?{required:!0}:null}function Lb(t){return t.value===!0?null:{required:!0}}function Bb(t){return ul(t.value)||Fb.test(t.value)?null:{email:!0}}function Vb(t){return i=>{let e=i.value?.length??hl(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function jb(t){return i=>{let e=i.value?.length??hl(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function Ub(t){if(!t)return mh;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(ul(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function mh(t){return null}function ph(t){return t!=null}function gh(t){return Li(t)?qe(t):t}function vh(t){let i={};return t.forEach(e=>{i=e!=null?m(m({},i),e):i}),Object.keys(i).length===0?null:i}function bh(t,i){return i.map(e=>e(t))}function zb(t){return!t.validate}function _h(t){return t.map(i=>zb(i)?i:e=>i.validate(e))}function yh(t){if(!t)return null;let i=t.filter(ph);return i.length==0?null:function(e){return vh(bh(e,i))}}function fl(t){return t!=null?yh(_h(t)):null}function wh(t){if(!t)return null;let i=t.filter(ph);return i.length==0?null:function(e){let n=bh(e,i).map(gh);return Kr(n).pipe(j(vh))}}function ml(t){return t!=null?wh(_h(t)):null}function sh(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function Ch(t){return t._rawValidators}function Dh(t){return t._rawAsyncValidators}function ll(t){return t?Array.isArray(t)?t:[t]:[]}function ia(t,i){return Array.isArray(t)?t.includes(i):t===i}function lh(t,i){let e=ll(i);return ll(t).forEach(r=>{ia(e,r)||e.push(r)}),e}function ch(t,i){return ll(i).filter(e=>!ia(t,e))}var ra=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=fl(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=ml(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},an=class extends ra{name;get formDirective(){return null}get path(){return null}},Ut=class extends ra{_parent=null;name=null;valueAccessor=null},oa=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var xh=(()=>{class t extends oa{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(W(Ut,2))};static \u0275dir=E({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&K("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Ie]})}return t})(),Eh=(()=>{class t extends oa{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(W(an,10))};static \u0275dir=E({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&K("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Ie]})}return t})();var _r="VALID",ea="INVALID",fi="PENDING",yr="DISABLED",sn=class{},aa=class extends sn{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Cr=class extends sn{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Dr=class extends sn{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},mi=class extends sn{status;source;constructor(i,e){super(),this.status=i,this.source=e}},sa=class extends sn{source;constructor(i){super(),this.source=i}},xr=class extends sn{source;constructor(i){super(),this.source=i}};function pl(t){return(pa(t)?t.validators:t)||null}function Hb(t){return Array.isArray(t)?fl(t):t||null}function gl(t,i){return(pa(i)?i.asyncValidators:t)||null}function $b(t){return Array.isArray(t)?ml(t):t||null}function pa(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Sh(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new F(1e3,"");if(!n[e])throw new F(1001,"")}function Ah(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new F(-1002,"")})}var pi=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return ee(this.statusReactive)}set status(i){ee(()=>this.statusReactive.set(i))}_status=ve(()=>this.statusReactive());statusReactive=w(void 0);get valid(){return this.status===_r}get invalid(){return this.status===ea}get pending(){return this.status===fi}get disabled(){return this.status===yr}get enabled(){return this.status!==yr}errors;get pristine(){return ee(this.pristineReactive)}set pristine(i){ee(()=>this.pristineReactive.set(i))}_pristine=ve(()=>this.pristineReactive());pristineReactive=w(!0);get dirty(){return!this.pristine}get touched(){return ee(this.touchedReactive)}set touched(i){ee(()=>this.touchedReactive.set(i))}_touched=ve(()=>this.touchedReactive());touchedReactive=w(!1);get untouched(){return!this.touched}_events=new y;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(lh(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(lh(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(ch(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(ch(i,this._rawAsyncValidators))}hasValidator(i){return ia(this._rawValidators,i)}hasAsyncValidator(i){return ia(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(Y(m({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Dr(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new Dr(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(Y(m({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Cr(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new Cr(!0,n))}markAsPending(i={}){this.status=fi;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new mi(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(Y(m({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=yr,this.errors=null,this._forEachChild(r=>{r.disable(Y(m({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new aa(this.value,n)),this._events.next(new mi(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Y(m({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=_r,this._forEachChild(n=>{n.enable(Y(m({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(Y(m({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===_r||this.status===fi)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new aa(this.value,e)),this._events.next(new mi(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(Y(m({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?yr:_r}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=fi,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=gh(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new mi(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new $,this.statusChanges=new $}_calculateStatus(){return this._allControlsDisabled()?yr:this.errors?ea:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(fi)?fi:this._anyControlsHaveStatus(ea)?ea:_r}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Cr(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Dr(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){pa(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Hb(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=$b(this._rawAsyncValidators)}},gi=class extends pi{constructor(i,e,n){super(pl(e),gl(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){Ah(this,!0,i),Object.keys(i).forEach(n=>{Sh(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this.controls[n];r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,Y(m({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new xr(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var cl=class extends gi{};var Er=new v("",{factory:()=>ga}),ga="always";function Gb(t,i){return[...i.path,t]}function la(t,i,e=ga){vl(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),qb(t,i),Kb(t,i),Yb(t,i),Wb(t,i)}function ca(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),ua(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function da(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Wb(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function vl(t,i){let e=Ch(t);i.validator!==null?t.setValidators(sh(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=Dh(t);i.asyncValidator!==null?t.setAsyncValidators(sh(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();da(i._rawValidators,r),da(i._rawAsyncValidators,r)}function ua(t,i){let e=!1;if(t!==null){if(i.validator!==null){let r=Ch(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(i.asyncValidator!==null){let r=Dh(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return da(i._rawValidators,n),da(i._rawAsyncValidators,n),e}function qb(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Mh(t,i)})}function Yb(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Mh(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Mh(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Kb(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Rh(t,i){t==null,vl(t,i)}function Zb(t,i){return ua(t,i)}function Ih(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Xb(t){return Object.getPrototypeOf(t.constructor)===Rb}function Th(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Oh(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(o=>{o.constructor===ha?e=o:Xb(o)?n=o:r=o}),r||n||e||null}function Qb(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var Jb={provide:an,useExisting:tt(()=>bl)},wr=Promise.resolve(),bl=(()=>{class t extends an{callSetDisabledState;get submitted(){return ee(this.submittedReactive)}_submitted=ve(()=>this.submittedReactive());submittedReactive=w(!1);_directives=new Set;form;ngSubmit=new $;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new gi({},fl(e),ml(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){wr.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),la(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){wr.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){wr.then(()=>{let n=this._findContainer(e.path),r=new gi({});Rh(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){wr.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){wr.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Th(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new sa(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(W(fa,10),W(ma,10),W(Er,8))};static \u0275dir=E({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&ue("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ge([Jb]),Ie]})}return t})();function dh(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function uh(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ta=class extends pi{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(pl(e),gl(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),pa(e)&&(e.nonNullable||e.initialValueIsDefault)&&(uh(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new xr(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){dh(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){dh(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){uh(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var e_=t=>t instanceof ta;var Fh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var dl=class extends pi{constructor(i,e,n){super(pl(e),gl(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){Ah(this,!1,i),i.forEach((n,r)=>{Sh(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,r)=>{n.reset(i[r],Y(m({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new xr(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var t_=(()=>{class t extends an{callSetDisabledState;get submitted(){return ee(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=ve(()=>this._submittedReactive());_submittedReactive=w(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(ua(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return la(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){ca(e.control||null,e,!1),Qb(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Th(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new sa(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(ca(n||null,e),e_(r)&&(la(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Rh(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&Zb(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){vl(this.form,this),this._oldForm&&ua(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(W(fa,10),W(ma,10),W(Er,8))};static \u0275dir=E({type:t,features:[Ie,Ce]})}return t})();var _l=new v(""),n_={provide:Ut,useExisting:tt(()=>i_)},i_=(()=>{class t extends Ut{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new $;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,a){super(),this._ngModelWarningConfig=o,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=Oh(this,r)}ngOnChanges(e){if(this._isControlChanged(e)){let n=e.form.previousValue;n&&ca(n,this,!1),la(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1})}Ih(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.form&&ca(this.form,this,!1)}get path(){return[]}get control(){return this.form}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_isControlChanged(e){return e.hasOwnProperty("form")}static \u0275fac=function(n){return new(n||t)(W(fa,10),W(ma,10),W(Cn,10),W(_l,8),W(Er,8))};static \u0275dir=E({type:t,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[ge([n_]),Ie,Ce]})}return t})();var r_={provide:Ut,useExisting:tt(()=>yl)},yl=(()=>{class t extends Ut{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new $;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Oh(this,o)}ngOnChanges(e){this._added||this._setUpControl(),Ih(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return Gb(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(W(an,13),W(fa,10),W(ma,10),W(Cn,10),W(_l,8))};static \u0275dir=E({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[ge([r_]),Ie,Ce]})}return t})();var o_={provide:an,useExisting:tt(()=>Sr)},Sr=(()=>{class t extends t_{form=null;ngSubmit=new $;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=yt(t)))(r||t)}})();static \u0275dir=E({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&ue("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[ge([o_]),Ie]})}return t})();var kh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();function hh(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Ph=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),o={};return hh(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new gi(r,o)}record(e,n=null){let r=this._reduceControls(e);return new cl(r,n)}control(e,n,r){let o={};return this.useNonNullable?(hh(n)?o=n:(o.validators=n,o.asyncValidators=r),new ta(e,Y(m({},o),{nonNullable:!0}))):new ta(e,n,r)}array(e,n,r){let o=e.map(a=>this._createControl(a));return new dl(o,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof ta)return e;if(e instanceof pi)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,r,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var WS=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Er,useValue:e.callSetDisabledState??ga}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[kh]})}return t})(),Nh=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:_l,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Er,useValue:e.callSetDisabledState??ga}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[kh]})}return t})();var wl;try{wl=typeof Intl<"u"&&Intl.v8BreakIterator}catch{wl=!1}var de=(()=>{class t{_platformId=c(Fn);isBrowser=this._platformId?cd(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||wl)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vt=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(vt||{}),va,Dn;function Lh(){if(Dn==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Dn=!1,Dn;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Dn=!0;else{let t=Element.prototype.scrollTo;t?Dn=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Dn=!1}}return Dn}function vi(){if(typeof document!="object"||!document)return vt.NORMAL;if(va==null){let t=document.createElement("div"),i=t.style;t.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),va=vt.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,va=t.scrollLeft===0?vt.NEGATED:vt.INVERTED),t.remove()}return va}var Cl;function Bh(){if(Cl==null){let t=typeof document<"u"?document.head:null;Cl=!!(t&&(t.createShadowRoot||t.attachShadow))}return Cl}function Dl(t){if(Bh()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function xl(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let i=t.shadowRoot.activeElement;if(i===t)break;t=i}return t}function Oe(t){return t.composedPath?t.composedPath()[0]:t.target}function El(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Ar;function Vh(){if(Ar==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ar=!0}))}finally{Ar=Ar||!1}return Ar}function bi(t){return Vh()?t:!!t.capture}var _i,jh=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Sl(){if(_i)return _i;if(typeof document!="object"||!document)return _i=new Set(jh),_i;let t=document.createElement("input");return _i=new Set(jh.filter(i=>(t.setAttribute("type",i),t.type===i))),_i}var s_=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),l_={passive:!0},Uh=(()=>{class t{_platform=c(de);_ngZone=c(k);_renderer=c(je).createRenderer(null,null);_styleLoader=c(Ke);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return We;this._styleLoader.load(s_);let n=ze(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new y,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,l_)));return this._monitoredElements.set(n,{subject:o,unlisten:l}),o}stopMonitoring(e){let n=ze(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var zh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({})}return t})();function Mr(t){return t.buttons===0||t.detail===0}function Rr(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Hh=new v("cdk-input-modality-detector-options"),$h={ignoreKeys:[18,17,224,91,16]},Gh=650,Al={passive:!0,capture:!0},Wh=(()=>{class t{_platform=c(de);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ge(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=Oe(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Gh||(this._modality.next(Mr(e)?"keyboard":"mouse"),this._mostRecentTarget=Oe(e))};_onTouchstart=e=>{if(Rr(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=Oe(e)};constructor(){let e=c(k),n=c(U),r=c(Hh,{optional:!0});if(this._options=m(m({},$h),r),this.modalityDetected=this._modality.pipe(Jr(1)),this.modalityChanged=this.modalityDetected.pipe($t()),this._platform.isBrowser){let o=c(je).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,Al),o.listen(n,"mousedown",this._onMousedown,Al),o.listen(n,"touchstart",this._onTouchstart,Al)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ir=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(Ir||{}),qh=new v("cdk-focus-monitor-default-options"),ba=bi({passive:!0,capture:!0}),Tr=(()=>{class t{_ngZone=c(k);_platform=c(de);_inputModalityDetector=c(Wh);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=c(U);_stopInputModalityDetector=new y;constructor(){let e=c(qh,{optional:!0});this._detectionMode=e?.detectionMode||Ir.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=Oe(e);for(let r=n;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=ze(e);if(!this._platform.isBrowser||r.nodeType!==1)return D();let o=Dl(r)||this._document,a=this._elementInfo.get(r);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new y,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=ze(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let o=ze(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,l])=>this._originChanged(s,n,l)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Ir.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===Ir.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Gh:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),o=Oe(e);!r||!r.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,ba),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,ba)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Pe(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,ba),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,ba),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&n.push([o,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Yh=new Set,xn,_a=(()=>{class t{_platform=c(de);_nonce=c(kn,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):d_}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&c_(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function c_(t,i){if(!Yh.has(t))try{xn||(xn=document.createElement("style"),i&&xn.setAttribute("nonce",i),xn.setAttribute("type","text/css"),document.head.appendChild(xn)),xn.sheet&&(xn.sheet.insertRule(`@media ${t} {body{ }}`,0),Yh.add(t))}catch(e){console.error(e)}}function d_(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Ml=(()=>{class t{_mediaMatcher=c(_a);_zone=c(k);_queries=new Map;_destroySubject=new y;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Kh(jt(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Kh(jt(e)).map(a=>this._registerQuery(a).observable),o=qr(r);return o=Yr(o.pipe(et(1)),o.pipe(Jr(1),Ht(0))),o.pipe(j(a=>{let s={matches:!1,breakpoints:{}};return a.forEach(({matches:l,query:d})=>{s.matches=s.matches||l,s.breakpoints[d]=l}),s}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new ke(a=>{let s=l=>this._zone.run(()=>a.next(l));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(dt(n),j(({matches:a})=>({query:e,matches:a})),Pe(this._destroySubject)),mql:n};return this._queries.set(e,o),o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Kh(t){return t.map(i=>i.split(",")).reduce((i,e)=>i.concat(e)).map(i=>i.trim())}function u_(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let i=0;i<t.addedNodes.length;i++)if(!(t.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<t.removedNodes.length;i++)if(!(t.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var Zh=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),h_=(()=>{class t{_mutationObserverFactory=c(Zh);_observedElements=new Map;_ngZone=c(k);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=ze(e);return new ke(r=>{let a=this._observeElement(n).pipe(j(s=>s.filter(l=>!u_(l))),me(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new y,r=this._mutationObserverFactory.create(o=>n.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:r}=this._observedElements.get(e);n&&n.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),tM=(()=>{class t{_contentObserver=c(h_);_elementRef=c(I);event=new $;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=Vt(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Ht(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",M],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Xh=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({providers:[Zh]})}return t})();var Qh=new v("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Jh=new v("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),f_=0,m_=(()=>{class t{_ngZone=c(k);_defaultOptions=c(Jh,{optional:!0});_liveElement;_document=c(U);_sanitizer=c(Xi);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=c(Qh,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let r=this._defaultOptions,o,a;return n.length===1&&typeof n[0]=="number"?a=n[0]:[o,a]=n,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Qu(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<n.length;o++)n[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${f_++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let o=n[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var p_=200,ya=class{_letterKeyStream=new y;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new y;selectedItem=this._selectedItem;constructor(i,e){let n=typeof e?.debounceInterval=="number"?e.debounceInterval:p_;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(i),this._setupKeyHandler(n)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let e=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(ye(e=>this._pressedLetters.push(e)),Ht(i),me(()=>this._pressedLetters.length>0),j(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let n=1;n<this._items.length+1;n++){let r=(this._selectedItemIndex+n)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function st(t,...i){return i.length?i.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var yi=class{_items;_activeItemIndex=w(-1);_activeItem=w(null);_wrap=!1;_typeaheadSubscription=pe.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,e){this._items=i,i instanceof Ja?this._itemChangesSubscription=i.changes.subscribe(n=>this._itemsChanged(n.toArray())):qt(i)&&(this._effectRef=_t(()=>this._itemsChanged(i()),{injector:e}))}tabOut=new y;change=new y;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new ya(e,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:n=>this._skipPredicateFn(n)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(n=>{this.setActiveItem(n)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,e=10){return this._pageUpAndDown={enabled:i,delta:e},this}setActiveItem(i){let e=this._activeItem();this.updateActiveItem(i),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(i){let e=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||st(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let e=this._getItemsArray(),n=typeof i=="number"?i:e.indexOf(i),r=e[n];this._activeItem.set(r??null),this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let e=this._getItemsArray();for(let n=1;n<=e.length;n++){let r=(this._activeItemIndex()+i*n+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,e){let n=this._getItemsArray();if(n[i]){for(;this._skipPredicateFn(n[i]);)if(i+=e,!n[i])return;this.setActiveItem(i)}}_getItemsArray(){return qt(this._items)?this._items():this._items instanceof Ja?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let e=this._activeItem();if(e){let n=i.indexOf(e);n>-1&&n!==this._activeItemIndex()&&(this._activeItemIndex.set(n),this._typeahead?.setCurrentSelectedItemIndex(n))}}};var Fr=class extends yi{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Rl=class extends yi{_origin="program";setFocusOrigin(i){return this._origin=i,this}setActiveItem(i){super.setActiveItem(i),this.activeItem&&this.activeItem.focus(this._origin)}};var Il={},Fe=class t{_appId=c(Ni);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),Il.hasOwnProperty(i)||(Il[i]=0),`${i}${e?t._infix+"-":""}${Il[i]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})};var rf=" ";function Tl(t,i,e){let n=of(t,i);e=e.trim(),!n.some(r=>r.trim()===e)&&(n.push(e),t.setAttribute(i,n.join(rf)))}function Ca(t,i,e){let n=of(t,i);e=e.trim();let r=n.filter(o=>o!==e);r.length?t.setAttribute(i,r.join(rf)):t.removeAttribute(i)}function of(t,i){return t.getAttribute(i)?.match(/\S+/g)??[]}var af=new v("MAT_INPUT_VALUE_ACCESSOR");var Ol=class{_box;_destroyed=new y;_resizeSubject=new y;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new ke(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(me(e=>e.some(n=>n.target===i)),Qr({bufferSize:1,refCount:!0}),Pe(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},sf=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=c(k);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new Ol(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var lf={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var g_=new v("MATERIAL_ANIMATIONS"),cf=null;function v_(){return c(g_,{optional:!0})?.animationsDisabled||c(eo,{optional:!0})==="NoopAnimations"?"di-disabled":(cf??=c(_a).matchMedia("(prefers-reduced-motion)").matches,cf?"reduced-motion":"enabled")}function He(){return v_()!=="enabled"}var b_=["notch"],__=["matFormFieldNotchedOutline",""],y_=["*"],df=["iconPrefixContainer"],uf=["textPrefixContainer"],hf=["iconSuffixContainer"],ff=["textSuffixContainer"],w_=["textField"],C_=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],D_=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function x_(t,i){t&1&&Me(0,"span",21)}function E_(t,i){if(t&1&&(z(0,"label",20),J(1,1),oe(2,x_,1,0,"span",21),G()),t&2){let e=ce(2);Ae("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),fe("for",e._control.disableAutomaticLabeling?null:e._control.id),T(2),ae(!e.hideRequiredMarker&&e._control.required?2:-1)}}function S_(t,i){if(t&1&&oe(0,E_,3,5,"label",20),t&2){let e=ce();ae(e._hasFloatingLabel()?0:-1)}}function A_(t,i){t&1&&Me(0,"div",7)}function M_(t,i){}function R_(t,i){if(t&1&&ro(0,M_,0,0,"ng-template",13),t&2){ce(2);let e=kt(1);Ae("ngTemplateOutlet",e)}}function I_(t,i){if(t&1&&(z(0,"div",9),oe(1,R_,1,1,null,13),G()),t&2){let e=ce();Ae("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),T(),ae(e._forceDisplayInfixLabel()?-1:1)}}function T_(t,i){t&1&&(z(0,"div",10,2),J(2,2),G())}function O_(t,i){t&1&&(z(0,"div",11,3),J(2,3),G())}function F_(t,i){}function k_(t,i){if(t&1&&ro(0,F_,0,0,"ng-template",13),t&2){ce();let e=kt(1);Ae("ngTemplateOutlet",e)}}function P_(t,i){t&1&&(z(0,"div",14,4),J(2,4),G())}function N_(t,i){t&1&&(z(0,"div",15,5),J(2,5),G())}function L_(t,i){t&1&&Me(0,"div",16)}function B_(t,i){t&1&&(z(0,"div",18),J(1,6),G())}function V_(t,i){if(t&1&&(z(0,"mat-hint",22),nt(1),G()),t&2){let e=ce(2);Ae("id",e._hintLabelId),T(),jn(e.hintLabel)}}function j_(t,i){if(t&1&&(z(0,"div",19),oe(1,V_,2,2,"mat-hint",22),J(2,7),Me(3,"div",23),J(4,8),G()),t&2){let e=ce();T(),ae(e.hintLabel?1:-1)}}var xa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["mat-label"]]})}return t})(),U_=new v("MatError");var Ea=(()=>{class t{align="start";id=c(Fe).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(Yt("id",r.id),fe("align",null),K("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),z_=new v("MatPrefix");var yf=new v("MatSuffix"),Sa=(()=>{class t{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[ge([{provide:yf,useExisting:t}])]})}return t})(),wf=new v("FloatingLabelParent"),mf=(()=>{class t{_elementRef=c(I);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=c(sf);_ngZone=c(k);_parent=c(wf);_resizeSubscription=new pe;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return H_(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&K("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function H_(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var pf="mdc-line-ripple--active",Da="mdc-line-ripple--deactivating",gf=(()=>{class t{_elementRef=c(I);_cleanupTransitionEnd;constructor(){let e=c(k),n=c(De);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Da),e.add(pf)}deactivate(){this._elementRef.nativeElement.classList.add(Da)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(Da);e.propertyName==="opacity"&&r&&n.remove(pf,Da)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),vf=(()=>{class t{_elementRef=c(I);_ngZone=c(k);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&mt(b_,5),n&2){let o;se(o=le())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&K("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:__,ngContentSelectors:y_,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(xe(),ft(0,"div",1),Ot(1,"div",2,0),J(3),Ft(),ft(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),Fl=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t})}return t})();var kr=new v("MatFormField"),$_=new v("MAT_FORM_FIELD_DEFAULT_OPTIONS"),bf="fill",G_="auto",_f="fixed",W_="translateY(-50%)",Pr=(()=>{class t{_elementRef=c(I);_changeDetectorRef=c(Te);_platform=c(de);_idGenerator=c(Fe);_ngZone=c(k);_defaults=c($_,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=zi("iconPrefixContainer");_textPrefixContainerSignal=zi("textPrefixContainer");_iconSuffixContainerSignal=zi("iconSuffixContainer");_textSuffixContainerSignal=zi("textSuffixContainer");_prefixSuffixContainers=ve(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Yc(xa);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=hi(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||G_}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||bf;this._appearanceSignal.set(n)}_appearanceSignal=w(bf);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||_f}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||_f}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new y;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=He();constructor(){let e=this._defaults,n=c(at);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),_t(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=ve(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(dt([void 0,void 0]),j(()=>[n.errorState,n.userAriaDescribedBy]),Xr(),me(([[o,a],[s,l]])=>o!==s||a!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(Pe(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Tn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){Xc({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=ve(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,u=this._currentDirection==="rtl"?"-1":"1",h=`${a+s}px`,x=`calc(${u} * (${h} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,O=`var(--mat-mdc-form-field-label-transform, ${W_} translateX(${x}))`,Z=a+s+l+d;return[O,Z]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,r,o){if(n&1&&(Lc(o,r._labelChild,xa,5),hn(o,Fl,5)(o,z_,5)(o,yf,5)(o,U_,5)(o,Ea,5)),n&2){as();let a;se(a=le())&&(r._formFieldControl=a.first),se(a=le())&&(r._prefixChildren=a),se(a=le())&&(r._suffixChildren=a),se(a=le())&&(r._errorChildren=a),se(a=le())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(Bc(r._iconPrefixContainerSignal,df,5)(r._textPrefixContainerSignal,uf,5)(r._iconSuffixContainerSignal,hf,5)(r._textSuffixContainerSignal,ff,5),mt(w_,5)(df,5)(uf,5)(hf,5)(ff,5)(mf,5)(vf,5)(gf,5)),n&2){as(4);let o;se(o=le())&&(r._textField=o.first),se(o=le())&&(r._iconPrefixContainer=o.first),se(o=le())&&(r._textPrefixContainer=o.first),se(o=le())&&(r._iconSuffixContainer=o.first),se(o=le())&&(r._textSuffixContainer=o.first),se(o=le())&&(r._floatingLabel=o.first),se(o=le())&&(r._notchedOutline=o.first),se(o=le())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&K("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[ge([{provide:kr,useExisting:t},{provide:wf,useExisting:t}])],ngContentSelectors:D_,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(xe(C_),ro(0,S_,1,1,"ng-template",null,0,Hc),z(2,"div",6,1),ue("click",function(a){return r._control.onContainerClick(a)}),oe(4,A_,1,0,"div",7),z(5,"div",8),oe(6,I_,2,2,"div",9),oe(7,T_,3,0,"div",10),oe(8,O_,3,0,"div",11),z(9,"div",12),oe(10,k_,1,1,null,13),J(11),G(),oe(12,P_,3,0,"div",14),oe(13,N_,3,0,"div",15),G(),oe(14,L_,1,0,"div",16),G(),z(15,"div",17),oe(16,B_,2,0,"div",18)(17,j_,5,1,"div",19),G()),n&2){let o;T(2),K("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),T(2),ae(!r._hasOutline()&&!r._control.disabled?4:-1),T(2),ae(r._hasOutline()?6:-1),T(),ae(r._hasIconPrefix?7:-1),T(),ae(r._hasTextPrefix?8:-1),T(2),ae(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),T(2),ae(r._hasTextSuffix?12:-1),T(),ae(r._hasIconSuffix?13:-1),T(),ae(r._hasOutline()?-1:14),T(),K("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();T(),ae((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[mf,vf,hs,gf,Ea],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var Cf=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Aa=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,n,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var kl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Xh,Pr,It]})}return t})();var K_=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Z_=new v("MAT_INPUT_CONFIG"),Df=(()=>{class t{_elementRef=c(I);_platform=c(de);ngControl=c(Ut,{optional:!0,self:!0});_autofillMonitor=c(Uh);_ngZone=c(k);_formField=c(kr,{optional:!0});_renderer=c(De);_uid=c(Fe).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=c(Z_,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new y;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=hi(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(na.required)??!1}set required(e){this._required=hi(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Sl().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=hi(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Sl().has(e));constructor(){let e=c(bl,{optional:!0}),n=c(Sr,{optional:!0}),r=c(Cf),o=c(af,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?qt(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Aa(r,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&_t(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){K_.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&ue("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(Yt("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),fe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),K("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",M]},exportAs:["matInput"],features:[ge([{provide:Fl,useExisting:t}]),Ce]})}return t})(),ZR=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[kl,kl,zh,It]})}return t})();var Ma=class{};function xf(t){return t&&typeof t.connect=="function"&&!(t instanceof uc)}var Ra=class extends Ma{_data;constructor(i){super(),this._data=i}connect(){return cn(this._data)?this._data:D(this._data)}disconnect(){}},Nr=(function(t){return t[t.REPLACED=0]="REPLACED",t[t.INSERTED=1]="INSERTED",t[t.MOVED=2]="MOVED",t[t.REMOVED=3]="REMOVED",t})(Nr||{}),Ia=class{viewCacheSize=20;_viewCache=[];applyChanges(i,e,n,r,o){i.forEachOperation((a,s,l)=>{let d,u;if(a.previousIndex==null){let h=()=>n(a,s,l);d=this._insertView(h,l,e,r(a)),u=d?Nr.INSERTED:Nr.REPLACED}else l==null?(this._detachAndCacheView(s,e),u=Nr.REMOVED):(d=this._moveView(s,l,e,r(a)),u=Nr.MOVED);o&&o({context:d?.context,operation:u,record:a})})}detach(){for(let i of this._viewCache)i.destroy();this._viewCache=[]}_insertView(i,e,n,r){let o=this._insertViewFromCache(e,n);if(o){o.context.$implicit=r;return}let a=i();return n.createEmbeddedView(a.templateRef,a.context,a.index)}_detachAndCacheView(i,e){let n=e.detach(i);this._maybeCacheView(n,e)}_moveView(i,e,n,r){let o=n.get(i);return n.move(o,e),o.context.$implicit=r,o}_maybeCacheView(i,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(i);else{let n=e.indexOf(i);n===-1?i.destroy():e.remove(n)}}_insertViewFromCache(i,e){let n=this._viewCache.pop();return n&&e.insert(n,i),n||null}};var X_=["contentWrapper"],Q_=["*"],Af=new v("VIRTUAL_SCROLL_STRATEGY"),Pl=class{_scrolledIndexChange=new y;scrolledIndexChange=this._scrolledIndexChange.pipe($t());_viewport=null;_itemSize;_minBufferPx;_maxBufferPx;constructor(i,e,n){this._itemSize=i,this._minBufferPx=e,this._maxBufferPx=n}attach(i){this._viewport=i,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(i,e,n){n<e,this._itemSize=i,this._minBufferPx=e,this._maxBufferPx=n,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(i,e){this._viewport&&this._viewport.scrollToOffset(i*this._itemSize,e)}_updateTotalContentSize(){this._viewport&&this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;let i=this._viewport.getRenderedRange(),e={start:i.start,end:i.end},n=this._viewport.getViewportSize(),r=this._viewport.getDataLength(),o=this._viewport.measureScrollOffset(),a=this._itemSize>0?o/this._itemSize:0;if(e.end>r){let l=Math.ceil(n/this._itemSize),d=Math.max(0,Math.min(a,r-l));a!=d&&(a=d,o=d*this._itemSize,e.start=Math.floor(a)),e.end=Math.max(0,Math.min(r,e.start+l))}let s=o-e.start*this._itemSize;if(s<this._minBufferPx&&e.start!=0){let l=Math.ceil((this._maxBufferPx-s)/this._itemSize);e.start=Math.max(0,e.start-l),e.end=Math.min(r,Math.ceil(a+(n+this._minBufferPx)/this._itemSize))}else{let l=e.end*this._itemSize-(o+n);if(l<this._minBufferPx&&e.end!=r){let d=Math.ceil((this._maxBufferPx-l)/this._itemSize);d>0&&(e.end=Math.min(r,e.end+d),e.start=Math.max(0,Math.floor(a-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(e),this._viewport.setRenderedContentOffset(Math.round(this._itemSize*e.start)),this._scrolledIndexChange.next(Math.floor(a))}};function J_(t){return t._scrollStrategy}var CI=(()=>{class t{get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=Vt(e)}_itemSize=20;get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=Vt(e)}_minBufferPx=100;get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=Vt(e)}_maxBufferPx=200;_scrollStrategy=new Pl(this.itemSize,this.minBufferPx,this.maxBufferPx);ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},features:[ge([{provide:Af,useFactory:J_,deps:[tt(()=>t)]}]),Ce]})}return t})(),ey=20,Nl=(()=>{class t{_ngZone=c(k);_platform=c(de);_renderer=c(je).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new y;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=ey){return this._platform.isBrowser?new ke(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Zr(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):D()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(me(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&n.push(o)}),n}_scrollableContainsElement(e,n){let r=ze(n),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Mf=(()=>{class t{elementRef=c(I);scrollDispatcher=c(Nl);ngZone=c(k);dir=c(at,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new y;_renderer=c(De);_cleanupScroll;_elementScrolled=new y;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),r&&vi()!=vt.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),vi()==vt.INVERTED?e.left=e.right:vi()==vt.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;Lh()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:n:e=="end"&&(e=a?n:r),a&&vi()==vt.INVERTED?e==n?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&vi()==vt.NEGATED?e==n?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==n?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),ty=20,wi=(()=>{class t{_platform=c(de);_listeners;_viewportSize=null;_change=new y;_document=c(U);constructor(){let e=c(k),n=c(je).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[n.listen("window","resize",r),n.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||n.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||n.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=ty){return e>0?this._change.pipe(Zr(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ef=new v("VIRTUAL_SCROLLABLE"),ny=(()=>{class t extends Mf{constructor(){super()}measureViewportSize(e){let n=this.elementRef.nativeElement;return e==="horizontal"?n.clientWidth:n.clientHeight}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,features:[Ie]})}return t})();function iy(t,i){return t.start==i.start&&t.end==i.end}var ry=typeof requestAnimationFrame<"u"?fc:hc,Rf=new v("CDK_VIRTUAL_SCROLL_VIEWPORT"),DI=(()=>{class t extends ny{elementRef=c(I);_changeDetectorRef=c(Te);_scrollStrategy=c(Af,{optional:!0});scrollable=c(Ef,{optional:!0});_platform=c(de);_detachedSubject=new y;_renderedRangeSubject=new y;_renderedContentOffsetSubject=new y;get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}_orientation="vertical";appendOnly=!1;scrolledIndexChange=new ke(e=>this._scrollStrategy.scrolledIndexChange.subscribe(n=>Promise.resolve().then(()=>this.ngZone.run(()=>e.next(n)))));_contentWrapper;renderedRangeStream=this._renderedRangeSubject;renderedContentOffset=this._renderedContentOffsetSubject.pipe(me(e=>e!==null),$t());_totalContentSize=0;_totalContentWidth=w("");_totalContentHeight=w("");_renderedContentTransform;_renderedRange={start:0,end:0};_dataLength=0;_viewportSize=0;_forOf=null;_renderedContentOffset=0;_renderedContentOffsetNeedsRewrite=!1;_changeDetectionNeeded=w(!1);_runAfterChangeDetection=[];_viewportChanges=pe.EMPTY;_injector=c(he);_isDestroyed=!1;constructor(){super();let e=c(wi);this._scrollStrategy,this._viewportChanges=e.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this);let n=_t(()=>{this._changeDetectionNeeded()&&this._doChangeDetection()},{injector:c(wt).injector});c(dn).onDestroy(()=>{n.destroy()})}ngOnInit(){this._platform.isBrowser&&(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe(dt(null),Zr(0,ry),Pe(this._destroyed)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),this._isDestroyed=!0,super.ngOnDestroy()}attach(e){this._forOf,this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe(Pe(this._detachedSubject)).subscribe(n=>{let r=n.length;r!==this._dataLength&&(this._dataLength=r,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){iy(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,n="to-start"){e=this.appendOnly&&n==="to-start"?0:e;let r=this.dir&&this.dir.value=="rtl",o=this.orientation=="horizontal",a=o?"X":"Y",l=`translate${a}(${Number((o&&r?-1:1)*e)}px)`;this._renderedContentOffset=e,n==="to-end"&&(l+=` translate${a}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=l&&(this._renderedContentTransform=l,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,n="auto"){let r={behavior:n};this.orientation==="horizontal"?r.start=e:r.top=e,this.scrollable.scrollTo(r)}scrollToIndex(e,n="auto"){this._scrollStrategy.scrollToIndex(e,n)}measureScrollOffset(e){let n;return this.scrollable==this?n=r=>super.measureScrollOffset(r):n=r=>this.scrollable.measureScrollOffset(r),Math.max(0,n(e??(this.orientation==="horizontal"?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let n,r="left",o="right",a=this.dir?.value=="rtl";e=="start"?n=a?o:r:e=="end"?n=a?r:o:e?n=e:n=this.orientation==="horizontal"?"left":"top";let s=this.scrollable.measureBoundingClientRectWithScrollOffset(n);return this.elementRef.nativeElement.getBoundingClientRect()[n]-s}measureRenderedContentSize(){let e=this._contentWrapper.nativeElement;return this.orientation==="horizontal"?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),!ee(this._changeDetectionNeeded)&&this.ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this.ngZone.run(()=>{this._changeDetectionNeeded.set(!0)})})})}_doChangeDetection(){this._isDestroyed||this.ngZone.run(()=>{this._changeDetectorRef.markForCheck(),this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this._renderedContentOffsetSubject.next(this.getOffsetToRenderedContentStart()),ut(()=>{this._changeDetectionNeeded.set(!1);let e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(let n of e)n()},{injector:this._injector})})}_calculateSpacerSize(){this._totalContentHeight.set(this.orientation==="horizontal"?"":`${this._totalContentSize}px`),this._totalContentWidth.set(this.orientation==="horizontal"?`${this._totalContentSize}px`:"")}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(n,r){if(n&1&&mt(X_,7),n&2){let o;se(o=le())&&(r._contentWrapper=o.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(n,r){n&2&&K("cdk-virtual-scroll-orientation-horizontal",r.orientation==="horizontal")("cdk-virtual-scroll-orientation-vertical",r.orientation!=="horizontal")},inputs:{orientation:"orientation",appendOnly:[2,"appendOnly","appendOnly",M]},outputs:{scrolledIndexChange:"scrolledIndexChange"},features:[ge([{provide:Mf,useFactory:()=>c(Ef,{optional:!0})||c(t)},{provide:Rf,useExisting:t}]),Ie],ngContentSelectors:Q_,decls:4,vars:4,consts:[["contentWrapper",""],[1,"cdk-virtual-scroll-content-wrapper"],[1,"cdk-virtual-scroll-spacer"]],template:function(n,r){n&1&&(xe(),Ot(0,"div",1,0),J(2),Ft(),ft(3,"div",2)),n&2&&(T(3),Bn("width",r._totalContentWidth())("height",r._totalContentHeight()))},styles:[`cdk-virtual-scroll-viewport {
  display: block;
  position: relative;
  transform: translateZ(0);
}

.cdk-virtual-scrollable {
  overflow: auto;
  will-change: scroll-position;
  contain: strict;
}

.cdk-virtual-scroll-content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  contain: content;
}
[dir=rtl] .cdk-virtual-scroll-content-wrapper {
  right: 0;
  left: auto;
}

.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper {
  min-height: 100%;
}
.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {
  padding-left: 0;
  padding-right: 0;
  margin-left: 0;
  margin-right: 0;
  border-left-width: 0;
  border-right-width: 0;
  outline: none;
}

.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper {
  min-width: 100%;
}
.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > dl:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ol:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > table:not([cdkVirtualFor]), .cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper > ul:not([cdkVirtualFor]) {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  border-top-width: 0;
  border-bottom-width: 0;
  outline: none;
}

.cdk-virtual-scroll-spacer {
  height: 1px;
  transform-origin: 0 0;
  flex: 0 0 auto;
}
[dir=rtl] .cdk-virtual-scroll-spacer {
  transform-origin: 100% 0;
}
`],encapsulation:2,changeDetection:0})}return t})();function Sf(t,i,e){let n=e;if(!n.getBoundingClientRect)return 0;let r=n.getBoundingClientRect();return t==="horizontal"?i==="start"?r.left:r.right:i==="start"?r.top:r.bottom}var xI=(()=>{class t{_viewContainerRef=c(ht);_template=c(Wt);_differs=c(ss);_viewRepeater=new Ia;_viewport=c(Rf,{skipSelf:!0});viewChange=new y;_dataSourceChanges=new y;get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,xf(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new Ra(cn(e)?e:Array.from(e||[])))}_cdkVirtualForOf;get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(n,r)=>e(n+(this._renderedRange?this._renderedRange.start:0),r):void 0}_cdkVirtualForTrackBy;set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=Vt(e)}dataStream=this._dataSourceChanges.pipe(dt(null),Xr(),Se(([e,n])=>this._changeDataSource(e,n)),Qr(1));_differ=null;_data=[];_renderedItems=[];_renderedRange={start:0,end:0};_needsUpdate=!1;_destroyed=new y;constructor(){let e=c(k);this.dataStream.subscribe(n=>{this._data=n,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe(Pe(this._destroyed)).subscribe(n=>{this._renderedRange=n,this.viewChange.observers.length&&e.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(e,n){if(e.start>=e.end)return 0;e.start<this._renderedRange.start||e.end>this._renderedRange.end;let r=e.start-this._renderedRange.start,o=e.end-e.start,a,s;for(let l=0;l<o;l++){let d=this._viewContainerRef.get(l+r);if(d&&d.rootNodes.length){a=s=d.rootNodes[0];break}}for(let l=o-1;l>-1;l--){let d=this._viewContainerRef.get(l+r);if(d&&d.rootNodes.length){s=d.rootNodes[d.rootNodes.length-1];break}}return a&&s?Sf(n,"end",s)-Sf(n,"start",a):0}ngDoCheck(){if(this._differ&&this._needsUpdate){let e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){this._renderedRange&&(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,n)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,n):n)),this._needsUpdate=!0)}_changeDataSource(e,n){return e&&e.disconnect(this),this._needsUpdate=!0,n?n.connect(this):D()}_updateContext(){let e=this._data.length,n=this._viewContainerRef.length;for(;n--;){let r=this._viewContainerRef.get(n);r.context.index=this._renderedRange.start+n,r.context.count=e,this._updateComputedContextProperties(r.context),r.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(o,a,s)=>this._getEmbeddedViewArgs(o,s),o=>o.item),e.forEachIdentityChange(o=>{let a=this._viewContainerRef.get(o.currentIndex);a.context.$implicit=o.item});let n=this._data.length,r=this._viewContainerRef.length;for(;r--;){let o=this._viewContainerRef.get(r);o.context.index=this._renderedRange.start+r,o.context.count=n,this._updateComputedContextProperties(o.context)}}_updateComputedContextProperties(e){e.first=e.index===0,e.last=e.index===e.count-1,e.even=e.index%2===0,e.odd=!e.even}_getEmbeddedViewArgs(e,n){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:n}}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"}})}return t})();var lt=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(lt||{}),Ll=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=lt.HIDDEN;constructor(i,e,n,r=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},If=bi({passive:!0,capture:!0}),Bl=class{_events=new Map;addHandler(i,e,n,r){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(r):o.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,If)})}removeHandler(i,e,n){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(n),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,If)))}_delegateEventHandler=i=>{let e=Oe(i);e&&this._events.get(i.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(o=>o.handleEvent(i))})}},Lr={enterDuration:225,exitDuration:150},oy=800,Tf=bi({passive:!0,capture:!0}),Of=["mousedown","touchstart"],Ff=["mouseup","mouseleave","touchend","touchcancel"],ay=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Br=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Bl;constructor(i,e,n,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=ze(n)),o&&o.get(Ke).load(ay)}fadeInRipple(i,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=m(m({},Lr),n.animation);n.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=n.radius||sy(i,e,r),s=i-r.left,l=e-r.top,d=o.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${s-a}px`,u.style.top=`${l-a}px`,u.style.height=`${a*2}px`,u.style.width=`${a*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),_=h.transitionProperty,x=h.transitionDuration,O=_==="none"||x==="0s"||x==="0s, 0s"||r.width===0&&r.height===0,Z=new Ll(this,u,n,O);u.style.transform="scale3d(1, 1, 1)",Z.state=lt.FADING_IN,n.persistent||(this._mostRecentTransientRipple=Z);let S=null;return!O&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let B=()=>{S&&(S.fallbackTimer=null),clearTimeout(C),this._finishRippleTransition(Z)},p=()=>this._destroyRipple(Z),C=setTimeout(p,d+100);u.addEventListener("transitionend",B),u.addEventListener("transitioncancel",p),S={onTransitionEnd:B,onTransitionCancel:p,fallbackTimer:C}}),this._activeRipples.set(Z,S),(O||!d)&&this._finishRippleTransition(Z),Z}fadeOutRipple(i){if(i.state===lt.FADING_OUT||i.state===lt.HIDDEN)return;let e=i.element,n=m(m({},Lr),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=lt.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=ze(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Of.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ff.forEach(e=>{this._triggerElement.addEventListener(e,this,Tf)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===lt.FADING_IN?this._startFadeOutTransition(i):i.state===lt.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=lt.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=lt.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Mr(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+oy;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Rr(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===lt.VISIBLE||i.config.terminateOnPointerUp&&i.state===lt.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(Of.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Ff.forEach(e=>i.removeEventListener(e,this,Tf)),this._pointerUpEventsRegistered=!1))}};function sy(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+r*r)}var Vl=new v("mat-ripple-global-options"),Ta=(()=>{class t{_elementRef=c(I);_animationsDisabled=He();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=c(k),n=c(de),r=c(Vl,{optional:!0}),o=c(he);this._globalOptions=r||{},this._rippleRenderer=new Br(this,e,this._elementRef,n,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:m(m(m({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,m(m({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,m(m({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,r){n&2&&K("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var Oa=(()=>{class t{_animationsDisabled=He();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(n,r){n&2&&K("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(n,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var Ci=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var ly=["text"],cy=[[["mat-icon"]],"*"],dy=["mat-icon","*"];function uy(t,i){if(t&1&&Me(0,"mat-pseudo-checkbox",1),t&2){let e=ce();Ae("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function hy(t,i){if(t&1&&Me(0,"mat-pseudo-checkbox",3),t&2){let e=ce();Ae("disabled",e.disabled)}}function fy(t,i){if(t&1&&(z(0,"span",4),nt(1),G()),t&2){let e=ce();T(),ji("(",e.group.label,")")}}var Ul=new v("MAT_OPTION_PARENT_COMPONENT"),zl=new v("MatOptgroup");var Vr=class{source;isUserInput;constructor(i,e=!1){this.source=i,this.isUserInput=e}},Fa=(()=>{class t{_element=c(I);_changeDetectorRef=c(Te);_parent=c(Ul,{optional:!0});group=c(zl,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=c(Fe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=w(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new $;_text;_stateChanges=new y;constructor(){let e=c(Ke);e.load(Ci),e.load(sl),this._signalDisableRipple=!!this._parent&&qt(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,n){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(n)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!st(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Vr(this,e))}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["mat-option"]],viewQuery:function(n,r){if(n&1&&mt(ly,7),n&2){let o;se(o=le())&&(r._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(n,r){n&1&&ue("click",function(){return r._selectViaInteraction()})("keydown",function(a){return r._handleKeydown(a)}),n&2&&(Yt("id",r.id),fe("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),K("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",M]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:dy,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(n,r){n&1&&(xe(cy),oe(0,uy,1,2,"mat-pseudo-checkbox",1),J(1),z(2,"span",2,0),J(4,1),G(),oe(5,hy,1,1,"mat-pseudo-checkbox",3),oe(6,fy,2,1,"span",4),Me(7,"div",5)),n&2&&(ae(r.multiple?0:-1),T(5),ae(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),T(),ae(r.group&&r.group._inert?6:-1),T(),Ae("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple))},dependencies:[Oa,Ta],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return t})();function kf(t,i,e){if(e.length){let n=i.toArray(),r=e.toArray(),o=0;for(let a=0;a<t+1;a++)n[a].group&&n[a].group===r[o]&&o++;return o}return 0}function Pf(t,i,e,n){return t<e?t:t+i>e+n?Math.max(0,t-n+i):e}var Ur=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new y;constructor(i=!1,e,n=!0,r){this._multiple=i,this._emitChanges=n,this.compareWith=r,e&&e.length&&(i?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(n=>this._markSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...i){this._verifyValueAssignment(i),i.forEach(n=>this._unmarkSelected(n));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...i){this._verifyValueAssignment(i);let e=this.selected,n=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),e.filter(o=>!n.has(this._getConcreteValue(o,n))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let e=this._hasQueuedChanges();return i&&this._emitChangeEvent(),e}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,e){if(this.compareWith){e=e??this._selection;for(let n of e)if(this.compareWith(i,n))return n;return i}else return i}};var Nf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[It]})}return t})();var my=["button"],py=["*"];function gy(t,i){if(t&1&&(z(0,"div",2),Me(1,"mat-pseudo-checkbox",6),G()),t&2){let e=ce();T(),Ae("disabled",e.disabled)}}var Lf=new v("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),Bf=new v("MatButtonToggleGroup"),vy={provide:Cn,useExisting:tt(()=>by),multi:!0},ka=class{source;value;constructor(i,e){this.source=i,this.value=e}},by=(()=>{class t{_changeDetector=c(Te);_dir=c(at,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=c(Fe).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(n=>n.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new $;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new $;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=c(Lf,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Ur(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||st(e))return;let r=e.target.id,o=this._buttonToggles.toArray().findIndex(s=>s.buttonId===r),a=null;switch(e.keyCode){case 32:case 13:a=this._buttonToggles.get(o)||null;break;case 38:a=this._getNextButton(o,-1);break;case 37:a=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:a=this._getNextButton(o,1);break;case 39:a=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}a&&(e.preventDefault(),a._onButtonClick(),a.focus())}_emitChangeEvent(e){let n=new ka(e,this.value);this._rawValue=n.value,this._controlValueAccessorChangeFn(n.value),this.change.emit(n)}_syncButtonToggle(e,n,r=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?n?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,r)):this._updateModelValue(e,r)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(n=>e.value!=null&&n===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let n=this._buttonToggles.get(e);if(!n.disabled){n.tabIndex=0;break}}}_getNextButton(e,n){let r=this._buttonToggles;for(let o=1;o<=r.length;o++){let a=(e+n*o+r.length)%r.length,s=r.get(a);if(s&&!s.disabled)return s}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let n=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(r=>this._selectValue(r,n))):(this._clearSelection(),this._selectValue(e,n)),!this.multiple&&n.every(r=>r.tabIndex===-1)){for(let r of n)if(!r.disabled){r.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,n){for(let r of n)if(r.value===e){r.checked=!0,this._selectionModel.select(r),this.multiple||(r.tabIndex=0);break}}_updateModelValue(e,n){n&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["mat-button-toggle-group"]],contentQueries:function(n,r,o){if(n&1&&hn(o,_y,5),n&2){let a;se(a=le())&&(r._buttonToggles=a)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(n,r){n&1&&ue("keydown",function(a){return r._keydown(a)}),n&2&&(fe("role",r.multiple?"group":"radiogroup")("aria-disabled",r.disabled),K("mat-button-toggle-vertical",r.vertical)("mat-button-toggle-group-appearance-standard",r.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",M],value:"value",multiple:[2,"multiple","multiple",M],disabled:[2,"disabled","disabled",M],disabledInteractive:[2,"disabledInteractive","disabledInteractive",M],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",M],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",M]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[ge([vy,{provide:Bf,useExisting:t}])]})}return t})(),_y=(()=>{class t{_changeDetectorRef=c(Te);_elementRef=c(I);_focusMonitor=c(Tr);_idGenerator=c(Fe);_animationDisabled=He();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new $;constructor(){c(Ke).load(Ci);let e=c(Bf,{optional:!0}),n=c(new zn("tabindex"),{optional:!0})||"",r=c(Lf,{optional:!0});this._tabIndex=w(parseInt(n)||0),this.buttonToggleGroup=e,this._appearance=r&&r.appearance?r.appearance:"standard",this._disabledInteractive=r?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let n=this.buttonToggleGroup._buttonToggles.find(r=>r.tabIndex===0);n&&(n.tabIndex=-1),this.tabIndex=0}this.change.emit(new ka(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["mat-button-toggle"]],viewQuery:function(n,r){if(n&1&&mt(my,5),n&2){let o;se(o=le())&&(r._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(n,r){n&1&&ue("focus",function(){return r.focus()}),n&2&&(fe("aria-label",null)("aria-labelledby",null)("id",r.id)("name",null),K("mat-button-toggle-standalone",!r.buttonToggleGroup)("mat-button-toggle-checked",r.checked)("mat-button-toggle-disabled",r.disabled)("mat-button-toggle-disabled-interactive",r.disabledInteractive)("mat-button-toggle-appearance-standard",r.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",M],appearance:"appearance",checked:[2,"checked","checked",M],disabled:[2,"disabled","disabled",M],disabledInteractive:[2,"disabledInteractive","disabledInteractive",M]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:py,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(n,r){if(n&1&&(xe(),z(0,"button",1,0),ue("click",function(){return r._onButtonClick()}),oe(2,gy,2,1,"div",2),z(3,"span",3),J(4),G()(),Me(5,"span",4)(6,"span",5)),n&2){let o=kt(1);Ae("id",r.buttonId)("disabled",r.disabled&&!r.disabledInteractive||null),fe("role",r.isSingleSelector()?"radio":"button")("tabindex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("aria-pressed",r.isSingleSelector()?null:r.checked)("aria-checked",r.isSingleSelector()?r.checked:null)("name",r._getButtonName())("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),T(2),ae(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),T(4),Ae("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)}},dependencies:[Ta,Oa],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return t})();var yy={capture:!0},wy=["focus","mousedown","mouseenter","touchstart"],Hl="mat-ripple-loader-uninitialized",$l="mat-ripple-loader-class-name",Vf="mat-ripple-loader-centered",Pa="mat-ripple-loader-disabled",jf=(()=>{class t{_document=c(U);_animationsDisabled=He();_globalRippleOptions=c(Vl,{optional:!0});_platform=c(de);_ngZone=c(k);_injector=c(he);_eventCleanups;_hosts=new Map;constructor(){let e=c(je).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>wy.map(n=>e.listen(this._document,n,this._onInteraction,yy)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(Hl,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute($l))&&e.setAttribute($l,n.className||""),n.centered&&e.setAttribute(Vf,""),n.disabled&&e.setAttribute(Pa,"")}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(Pa,""):e.removeAttribute(Pa)}_onInteraction=e=>{let n=Oe(e);if(n instanceof HTMLElement){let r=n.closest(`[${Hl}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute($l)),e.append(n);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Lr.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Lr.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Pa),rippleConfig:{centered:e.hasAttribute(Vf),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},l=new Br(s,this._ngZone,n,this._platform,this._injector),d=!s.rippleDisabled;d&&l.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:l,hasSetUpEvents:d}),e.removeAttribute(Hl)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Cy=["mat-icon-button",""],Dy=["*"],xy=new v("MAT_BUTTON_CONFIG");function Uf(t){return t==null?void 0:Zc(t)}var Gl=(()=>{class t{_elementRef=c(I);_ngZone=c(k);_animationsDisabled=He();_config=c(xy,{optional:!0});_focusMonitor=c(Tr);_cleanupClick;_renderer=c(De);_rippleLoader=c(jf);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){c(Ke).load(Ci);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,r){n&2&&(fe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Vn(r.color?"mat-"+r.color:""),K("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",M],disabled:[2,"disabled","disabled",M],ariaDisabled:[2,"aria-disabled","ariaDisabled",M],disabledInteractive:[2,"disabledInteractive","disabledInteractive",M],tabIndex:[2,"tabIndex","tabIndex",Uf],_tabindex:[2,"tabindex","_tabindex",Uf]}})}return t})(),zr=(()=>{class t extends Gl{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[Ie],attrs:Cy,ngContentSelectors:Dy,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(xe(),ft(0,"span",0),J(1),ft(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Ey=["matButton",""],Sy=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Ay=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var zf=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),QT=(()=>{class t extends Gl{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=My(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?zf.get(this._appearance):null,o=zf.get(e);r&&n.remove(...r),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Ie],attrs:Ey,ngContentSelectors:Ay,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(xe(Sy),ft(0,"span",0),J(1),Ot(2,"span",1),J(3,1),Ft(),J(4,2),ft(5,"span",2)(6,"span",3)),n&2&&K("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function My(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var JT=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=ie({type:t});static \u0275inj=ne({imports:[Nf,It]})}return t})();function Hf(t,i){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;let e=document.implementation.createHTMLDocument(),n=e.createElement("base"),r=e.createElement("a");return e.head.appendChild(n),e.body.appendChild(r),i&&(n.href=i),r.href=t,r.href}var $f=(()=>{let t=0,i=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${i()}${t}`)})();function bt(t){let i=[];for(let e=0,n=t.length;e<n;e++)i.push(t[e]);return i}var Di=null;function La(t={}){return Di||(t.includeStyleProperties?(Di=t.includeStyleProperties,Di):(Di=bt(window.getComputedStyle(document.documentElement)),Di))}function Na(t,i){let n=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(i);return n?parseFloat(n.replace("px","")):0}function Ry(t){let i=Na(t,"border-left-width"),e=Na(t,"border-right-width");return t.clientWidth+i+e}function Iy(t){let i=Na(t,"border-top-width"),e=Na(t,"border-bottom-width");return t.clientHeight+i+e}function Wl(t,i={}){let e=i.width||Ry(t),n=i.height||Iy(t);return{width:e,height:n}}function Gf(){let t,i;try{i=process}catch{}let e=i&&i.env?i.env.devicePixelRatio:null;return e&&(t=parseInt(e,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}var Je=16384;function Wf(t){(t.width>Je||t.height>Je)&&(t.width>Je&&t.height>Je?t.width>t.height?(t.height*=Je/t.width,t.width=Je):(t.width*=Je/t.height,t.height=Je):t.width>Je?(t.height*=Je/t.width,t.width=Je):(t.width*=Je/t.height,t.height=Je))}function xi(t){return new Promise((i,e)=>{let n=new Image;n.onload=()=>{n.decode().then(()=>{requestAnimationFrame(()=>i(n))})},n.onerror=e,n.crossOrigin="anonymous",n.decoding="async",n.src=t})}async function Ty(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(i=>`data:image/svg+xml;charset=utf-8,${i}`)}async function qf(t,i,e){let n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg"),o=document.createElementNS(n,"foreignObject");return r.setAttribute("width",`${i}`),r.setAttribute("height",`${e}`),r.setAttribute("viewBox",`0 0 ${i} ${e}`),o.setAttribute("width","100%"),o.setAttribute("height","100%"),o.setAttribute("x","0"),o.setAttribute("y","0"),o.setAttribute("externalResourcesRequired","true"),r.appendChild(o),o.appendChild(t),Ty(r)}var Le=(t,i)=>{if(t instanceof i)return!0;let e=Object.getPrototypeOf(t);return e===null?!1:e.constructor.name===i.name||Le(e,i)};function Oy(t){let i=t.getPropertyValue("content");return`${t.cssText} content: '${i.replace(/'|"/g,"")}';`}function Fy(t,i){return La(i).map(e=>{let n=t.getPropertyValue(e),r=t.getPropertyPriority(e);return`${e}: ${n}${r?" !important":""};`}).join(" ")}function ky(t,i,e,n){let r=`.${t}:${i}`,o=e.cssText?Oy(e):Fy(e,n);return document.createTextNode(`${r}{${o}}`)}function Yf(t,i,e,n){let r=window.getComputedStyle(t,e),o=r.getPropertyValue("content");if(o===""||o==="none")return;let a=$f();try{i.className=`${i.className} ${a}`}catch{return}let s=document.createElement("style");s.appendChild(ky(a,e,r,n)),i.appendChild(s)}function Kf(t,i,e){Yf(t,i,":before",e),Yf(t,i,":after",e)}var Zf="application/font-woff",Xf="image/jpeg",Py={woff:Zf,woff2:Zf,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:Xf,jpeg:Xf,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function Ny(t){let i=/\.([^./]*?)$/g.exec(t);return i?i[1]:""}function Ei(t){let i=Ny(t).toLowerCase();return Py[i]||""}function Ly(t){return t.split(/,/)[1]}function Hr(t){return t.search(/^(data:)/)!==-1}function Yl(t,i){return`data:${i};base64,${t}`}async function Kl(t,i,e){let n=await fetch(t,i);if(n.status===404)throw new Error(`Resource "${n.url}" not found`);let r=await n.blob();return new Promise((o,a)=>{let s=new FileReader;s.onerror=a,s.onloadend=()=>{try{o(e({res:n,result:s.result}))}catch(l){a(l)}},s.readAsDataURL(r)})}var ql={};function By(t,i,e){let n=t.replace(/\?.*/,"");return e&&(n=t),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),i?`[${i}]${n}`:n}async function Si(t,i,e){let n=By(t,i,e.includeQueryParams);if(ql[n]!=null)return ql[n];e.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let r;try{let o=await Kl(t,e.fetchRequestInit,({res:a,result:s})=>(i||(i=a.headers.get("Content-Type")||""),Ly(s)));r=Yl(o,i)}catch(o){r=e.imagePlaceholder||"";let a=`Failed to fetch resource: ${t}`;o&&(a=typeof o=="string"?o:o.message),a&&console.warn(a)}return ql[n]=r,r}async function Vy(t){let i=t.toDataURL();return i==="data:,"?t.cloneNode(!1):xi(i)}async function jy(t,i){if(t.currentSrc){let o=document.createElement("canvas"),a=o.getContext("2d");o.width=t.clientWidth,o.height=t.clientHeight,a?.drawImage(t,0,0,o.width,o.height);let s=o.toDataURL();return xi(s)}let e=t.poster,n=Ei(e),r=await Si(e,n,i);return xi(r)}async function Uy(t,i){var e;try{if(!((e=t?.contentDocument)===null||e===void 0)&&e.body)return await $r(t.contentDocument.body,i,!0)}catch{}return t.cloneNode(!1)}async function zy(t,i){return Le(t,HTMLCanvasElement)?Vy(t):Le(t,HTMLVideoElement)?jy(t,i):Le(t,HTMLIFrameElement)?Uy(t,i):t.cloneNode(Qf(t))}var Hy=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT",Qf=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SVG";async function $y(t,i,e){var n,r;if(Qf(i))return i;let o=[];return Hy(t)&&t.assignedNodes?o=bt(t.assignedNodes()):Le(t,HTMLIFrameElement)&&(!((n=t.contentDocument)===null||n===void 0)&&n.body)?o=bt(t.contentDocument.body.childNodes):o=bt(((r=t.shadowRoot)!==null&&r!==void 0?r:t).childNodes),o.length===0||Le(t,HTMLVideoElement)||await o.reduce((a,s)=>a.then(()=>$r(s,e)).then(l=>{l&&i.appendChild(l)}),Promise.resolve()),i}function Gy(t,i,e){let n=i.style;if(!n)return;let r=window.getComputedStyle(t);r.cssText?(n.cssText=r.cssText,n.transformOrigin=r.transformOrigin):La(e).forEach(o=>{let a=r.getPropertyValue(o);o==="font-size"&&a.endsWith("px")&&(a=`${Math.floor(parseFloat(a.substring(0,a.length-2)))-.1}px`),Le(t,HTMLIFrameElement)&&o==="display"&&a==="inline"&&(a="block"),o==="d"&&i.getAttribute("d")&&(a=`path(${i.getAttribute("d")})`),n.setProperty(o,a,r.getPropertyPriority(o))})}function Wy(t,i){Le(t,HTMLTextAreaElement)&&(i.innerHTML=t.value),Le(t,HTMLInputElement)&&i.setAttribute("value",t.value)}function qy(t,i){if(Le(t,HTMLSelectElement)){let n=Array.from(i.children).find(r=>t.value===r.getAttribute("value"));n&&n.setAttribute("selected","")}}function Yy(t,i,e){return Le(i,Element)&&(Gy(t,i,e),Kf(t,i,e),Wy(t,i),qy(t,i)),i}async function Ky(t,i){let e=t.querySelectorAll?t.querySelectorAll("use"):[];if(e.length===0)return t;let n={};for(let o=0;o<e.length;o++){let s=e[o].getAttribute("xlink:href");if(s){let l=t.querySelector(s),d=document.querySelector(s);!l&&d&&!n[s]&&(n[s]=await $r(d,i,!0))}}let r=Object.values(n);if(r.length){let o="http://www.w3.org/1999/xhtml",a=document.createElementNS(o,"svg");a.setAttribute("xmlns",o),a.style.position="absolute",a.style.width="0",a.style.height="0",a.style.overflow="hidden",a.style.display="none";let s=document.createElementNS(o,"defs");a.appendChild(s);for(let l=0;l<r.length;l++)s.appendChild(r[l]);t.appendChild(a)}return t}async function $r(t,i,e){return!e&&i.filter&&!i.filter(t)?null:Promise.resolve(t).then(n=>zy(n,i)).then(n=>$y(t,n,i)).then(n=>Yy(t,n,i)).then(n=>Ky(n,i))}var Jf=/url\((['"]?)([^'"]+?)\1\)/g,Zy=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Xy=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Qy(t){let i=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${i})(['"]?\\))`,"g")}function Jy(t){let i=[];return t.replace(Jf,(e,n,r)=>(i.push(r),e)),i.filter(e=>!Hr(e))}async function e0(t,i,e,n,r){try{let o=e?Hf(i,e):i,a=Ei(i),s;if(r){let l=await r(o);s=Yl(l,a)}else s=await Si(o,a,n);return t.replace(Qy(i),`$1${s}$3`)}catch{}return t}function t0(t,{preferredFontFormat:i}){return i?t.replace(Xy,e=>{for(;;){let[n,,r]=Zy.exec(e)||[];if(!r)return"";if(r===i)return`src: ${n};`}}):t}function Zl(t){return t.search(Jf)!==-1}async function Ba(t,i,e){if(!Zl(t))return t;let n=t0(t,e);return Jy(n).reduce((o,a)=>o.then(s=>e0(s,a,i,e)),Promise.resolve(n))}async function Ai(t,i,e){var n;let r=(n=i.style)===null||n===void 0?void 0:n.getPropertyValue(t);if(r){let o=await Ba(r,null,e);return i.style.setProperty(t,o,i.style.getPropertyPriority(t)),!0}return!1}async function n0(t,i){await Ai("background",t,i)||await Ai("background-image",t,i),await Ai("mask",t,i)||await Ai("-webkit-mask",t,i)||await Ai("mask-image",t,i)||await Ai("-webkit-mask-image",t,i)}async function i0(t,i){let e=Le(t,HTMLImageElement);if(!(e&&!Hr(t.src))&&!(Le(t,SVGImageElement)&&!Hr(t.href.baseVal)))return;let n=e?t.src:t.href.baseVal,r=await Si(n,Ei(n),i);await new Promise((o,a)=>{t.onload=o,t.onerror=i.onImageErrorHandler?(...l)=>{try{o(i.onImageErrorHandler(...l))}catch(d){a(d)}}:a;let s=t;s.decode&&(s.decode=o),s.loading==="lazy"&&(s.loading="eager"),e?(t.srcset="",t.src=r):t.href.baseVal=r})}async function r0(t,i){let n=bt(t.childNodes).map(r=>Xl(r,i));await Promise.all(n).then(()=>t)}async function Xl(t,i){Le(t,Element)&&(await n0(t,i),await i0(t,i),await r0(t,i))}function em(t,i){let{style:e}=t;i.backgroundColor&&(e.backgroundColor=i.backgroundColor),i.width&&(e.width=`${i.width}px`),i.height&&(e.height=`${i.height}px`);let n=i.style;return n!=null&&Object.keys(n).forEach(r=>{e[r]=n[r]}),t}var tm={};async function nm(t){let i=tm[t];if(i!=null)return i;let n=await(await fetch(t)).text();return i={url:t,cssText:n},tm[t]=i,i}async function im(t,i){let e=t.cssText,n=/url\(["']?([^"')]+)["']?\)/g,o=(e.match(/url\([^)]+\)/g)||[]).map(async a=>{let s=a.replace(n,"$1");return s.startsWith("https://")||(s=new URL(s,t.url).href),Kl(s,i.fetchRequestInit,({result:l})=>(e=e.replace(a,`url(${l})`),[a,l]))});return Promise.all(o).then(()=>e)}function rm(t){if(t==null)return[];let i=[],e=/(\/\*[\s\S]*?\*\/)/gi,n=t.replace(e,""),r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let l=r.exec(n);if(l===null)break;i.push(l[0])}n=n.replace(r,"");let o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",s=new RegExp(a,"gi");for(;;){let l=o.exec(n);if(l===null){if(l=s.exec(n),l===null)break;o.lastIndex=s.lastIndex}else s.lastIndex=o.lastIndex;i.push(l[0])}return i}async function o0(t,i){let e=[],n=[];return t.forEach(r=>{if("cssRules"in r)try{bt(r.cssRules||[]).forEach((o,a)=>{if(o.type===CSSRule.IMPORT_RULE){let s=a+1,l=o.href,d=nm(l).then(u=>im(u,i)).then(u=>rm(u).forEach(h=>{try{r.insertRule(h,h.startsWith("@import")?s+=1:r.cssRules.length)}catch(_){console.error("Error inserting rule from remote css",{rule:h,error:_})}})).catch(u=>{console.error("Error loading remote css",u.toString())});n.push(d)}})}catch(o){let a=t.find(s=>s.href==null)||document.styleSheets[0];r.href!=null&&n.push(nm(r.href).then(s=>im(s,i)).then(s=>rm(s).forEach(l=>{a.insertRule(l,a.cssRules.length)})).catch(s=>{console.error("Error loading remote stylesheet",s)})),console.error("Error inlining remote css file",o)}}),Promise.all(n).then(()=>(t.forEach(r=>{if("cssRules"in r)try{bt(r.cssRules||[]).forEach(o=>{e.push(o)})}catch(o){console.error(`Error while reading CSS rules from ${r.href}`,o)}}),e))}function a0(t){return t.filter(i=>i.type===CSSRule.FONT_FACE_RULE).filter(i=>Zl(i.style.getPropertyValue("src")))}async function s0(t,i){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");let e=bt(t.ownerDocument.styleSheets),n=await o0(e,i);return a0(n)}function om(t){return t.trim().replace(/["']/g,"")}function l0(t){let i=new Set;function e(n){(n.style.fontFamily||getComputedStyle(n).fontFamily).split(",").forEach(o=>{i.add(om(o))}),Array.from(n.children).forEach(o=>{o instanceof HTMLElement&&e(o)})}return e(t),i}async function am(t,i){let e=await s0(t,i),n=l0(t);return(await Promise.all(e.filter(o=>n.has(om(o.style.fontFamily))).map(o=>{let a=o.parentStyleSheet?o.parentStyleSheet.href:null;return Ba(o.cssText,a,i)}))).join(`
`)}async function sm(t,i){let e=i.fontEmbedCSS!=null?i.fontEmbedCSS:i.skipFonts?null:await am(t,i);if(e){let n=document.createElement("style"),r=document.createTextNode(e);n.appendChild(r),t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n)}}async function c0(t,i={}){let{width:e,height:n}=Wl(t,i),r=await $r(t,i,!0);return await sm(r,i),await Xl(r,i),em(r,i),await qf(r,e,n)}async function d0(t,i={}){let{width:e,height:n}=Wl(t,i),r=await c0(t,i),o=await xi(r),a=document.createElement("canvas"),s=a.getContext("2d"),l=i.pixelRatio||Gf(),d=i.canvasWidth||e,u=i.canvasHeight||n;return a.width=d*l,a.height=u*l,i.skipAutoScale||Wf(a),a.style.width=`${d}`,a.style.height=`${u}`,i.backgroundColor&&(s.fillStyle=i.backgroundColor,s.fillRect(0,0,a.width,a.height)),s.drawImage(o,0,0,a.width,a.height),a}async function lm(t,i={}){return(await d0(t,i)).toDataURL()}var cm="sheldon-theme",u0="sheldon-theme-bw",dm="theme",um=(()=>{class t{router=c(Rt);theme=w("light");initialized=!1;init(){if(this.initialized)return;this.initialized=!0;let e=this.parse(new URLSearchParams(window.location.search).get(dm)),n=this.parse(localStorage.getItem(cm));this.set(e??n??"light")}set(e){document.body.classList.add("sheldon-theme-transitioning"),this.apply(e),this.theme.set(e),localStorage.setItem(cm,e),this.syncUrl(e),setTimeout(()=>document.body.classList.remove("sheldon-theme-transitioning"),400)}parse(e){return e==="light"||e==="dark"||e==="system"?e:null}apply(e){document.body.classList.toggle(u0,e==="system"),document.body.style.colorScheme=e==="dark"?"dark":"light"}syncUrl(e){this.router.navigate([],{queryParams:{[dm]:e},queryParamsHandling:"merge",replaceUrl:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var f0=[[["","title",""]],[["","content",""]],[["","info",""]],[["","subheader",""]]],m0=["[title]","[content]","[info]","[subheader]"],p0=()=>({display:"flex",justifyContent:"space-between",flexDirection:"row"});function g0(t,i){if(t&1){let e=Bi();z(0,"button",14),ue("click",function(){Fi(e);let r=ce(2);return ki(r.exitFullscreen())}),z(1,"span",15),nt(2,"\u2715"),G()()}if(t&2){let e=ce(2);Bn("background",e.startColor())}}function v0(t,i){if(t&1){let e=Bi();z(0,"div",3)(1,"button",11),ue("click",function(){Fi(e);let r=ce();return ki(r.openInfo())}),Me(2,"mat-icon",12),G(),oe(3,g0,3,2,"button",13),G()}if(t&2){let e=ce();T(),Bn("background",e.startColor()),T(2),ae(e.isFullscreen()?3:-1)}}function b0(t,i){t&1&&(z(0,"div",4),nt(1),Un(2,"transloco"),G()),t&2&&(T(),jn(Ui(2,1,"card.linkCopied")))}function _0(t,i){t&1&&(z(0,"div",6),J(1,3),G())}function y0(t,i){if(t&1&&nt(0),t&2){let e=ce();ji(" ",e.infoText()," ")}}var Va="card",qO=(()=>{class t{host=c(I);router=c(Rt);route=c(gt);theme=c(um).theme;transloco=c(Jc);showButtons=it(!0);categoria=it("ambiente");infoText=it("");cardId=it("");showSubheader=it(!0);activeCard=Qc(this.route.queryParamMap.pipe(j(e=>e.get(Va))),{initialValue:new URLSearchParams(window.location.search).get(Va)});isFullscreen=ve(()=>!!this.cardId()&&this.activeCard()===this.cardId());startColor=ve(()=>(this.theme(),Ss(`--color-gradient-${Zn(this.categoria())}-start`)));endColor=ve(()=>(this.theme(),Ss(`--color-gradient-${Zn(this.categoria())}-end`)));showInfo=w(!1);openInfo(){this.showInfo.set(!0)}closeInfo(){this.showInfo.set(!1)}exporting=w(!1);async exportCard(){if(this.exporting())return;let e=this.host.nativeElement.querySelector(".sheldon-card-root");if(e){this.exporting.set(!0);try{let n=await lm(e,{pixelRatio:2,backgroundColor:"#ffffff",filter:l=>!(l instanceof HTMLElement&&l.classList.contains("sheldon-card-buttons"))}),r=`${this.exportFileName()}.png`,o=await(await fetch(n)).blob(),a=new File([o],r,{type:"image/png"});if(this.isTouchDevice()&&navigator.canShare?.({files:[a]}))try{await navigator.share({files:[a],title:r});return}catch(l){if(l instanceof DOMException&&l.name==="AbortError")return}let s=document.createElement("a");s.href=n,s.download=r,s.click()}finally{this.exporting.set(!1)}}}linkCopied=w(!1);copiedTimer=null;async shareCard(){let e=this.buildShareUrl(),n=this.cardTitle();if(this.isTouchDevice()&&navigator.canShare?.({url:e}))try{await navigator.share({title:n,url:e});return}catch(r){if(r instanceof DOMException&&r.name==="AbortError")return}try{await navigator.clipboard.writeText(e),this.flagCopied()}catch{window.prompt(this.transloco.translate("card.copyPrompt"),e)}}exitFullscreen(){this.router.navigate([],{relativeTo:this.route,queryParams:{[Va]:null},queryParamsHandling:"merge"})}buildShareUrl(){let e=new URL(window.location.href);return this.cardId()&&e.searchParams.set(Va,this.cardId()),e.toString()}cardTitle(){return this.host.nativeElement.querySelector(".sheldon-card-title")?.textContent?.trim()||"Sheldon Garfagnana"}flagCopied(){this.linkCopied.set(!0),this.copiedTimer&&clearTimeout(this.copiedTimer),this.copiedTimer=setTimeout(()=>this.linkCopied.set(!1),2e3)}isTouchDevice(){return window.matchMedia?.("(pointer: coarse)").matches??!1}exportFileName(){let e=this.host.nativeElement.querySelector(".sheldon-card-title")?.textContent?.trim();return Zn(e??"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"card"}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["sheldon-card"]],hostVars:2,hostBindings:function(n,r){n&2&&K("fullscreen",r.isFullscreen())},inputs:{showButtons:[1,"showButtons"],categoria:[1,"categoria"],infoText:[1,"infoText"],cardId:[1,"cardId"],showSubheader:[1,"showSubheader"]},ngContentSelectors:m0,decls:17,vars:14,consts:[[1,"sheldon-card-root"],[1,"sheldon-card-header"],[1,"sheldon-card-title"],[1,"sheldon-card-buttons"],[1,"sheldon-card-copied"],[1,"sheldon-card-body"],[1,"sheldon-card-subheader"],[1,"sheldon-card-content"],[1,"sheldon-card-info"],[1,"sheldon-card-info-text"],[1,"sheldon-card-info-button-close",3,"click"],["matIconButton","",1,"sheldon-card-info-button",3,"click"],["aria-hidden","false","aria-label","info","svgIcon","sheldon-info"],["aria-label","close",1,"sheldon-card-close-button",3,"background"],["aria-label","close",1,"sheldon-card-close-button",3,"click"],["aria-hidden","true"]],template:function(n,r){n&1&&(xe(f0),z(0,"div",0)(1,"div",1)(2,"div",2),J(3),G(),oe(4,v0,4,3,"div",3),oe(5,b0,3,3,"div",4),G(),z(6,"div",5),oe(7,_0,2,0,"div",6),z(8,"div",7),J(9,1),G(),z(10,"div",8)(11,"div",9),oe(12,y0,1,1),J(13,2),G(),z(14,"button",10),ue("click",function(){return r.closeInfo()}),nt(15),Un(16,"transloco"),G()()()()),n&2&&(T(),Vc(jc(13,p0)),T(3),ae(r.showButtons()?4:-1),T(),ae(r.linkCopied()?5:-1),T(2),ae(r.showSubheader()?7:-1),T(3),K("is-open",r.showInfo()),T(2),ae(r.infoText()?12:-1),T(2),Bn("background",r.startColor()),T(),ji(" ",Ui(16,11,"card.close")," "))},dependencies:[Jo,zr,so,ao],styles:[`[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;height:var(--sheldon-tile-height, fit-content);padding:0;box-sizing:border-box;justify-content:space-between;background:#fff;--sheldon-card-buttons-width: 40px}[_nghost-%COMP%]   .sheldon-card-title[_ngcontent-%COMP%]{font-weight:700;font-size:12px;line-height:128%;letter-spacing:.6px;color:#fff;background:#000;padding:3px 8px 1px;text-overflow:ellipsis;overflow-y:hidden;white-space:nowrap}[_nghost-%COMP%]   .sheldon-card-root[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}[_nghost-%COMP%]   .sheldon-card-header[_ngcontent-%COMP%]{flex-shrink:0;background:#000}[_nghost-%COMP%]   .sheldon-card-subheader[_ngcontent-%COMP%]{min-height:41px!important;align-items:baseline;display:flex;justify-content:space-between;flex-direction:row;flex-shrink:0;padding-top:8px;padding-bottom:0;--mat-button-toggle-height: var(--mat-icon-button-heigth, 21px) !important}[_nghost-%COMP%]   .sheldon-card-subheader[_ngcontent-%COMP%]     mat-button-toggle-group{display:flex;width:var(--sheldon-card-buttons-width);box-sizing:border-box;border:0}[_nghost-%COMP%]   .sheldon-card-subheader[_ngcontent-%COMP%]     mat-button-toggle-group .mat-button-toggle{flex:1 1 0;min-width:0}[_nghost-%COMP%]   .sheldon-card-subheader[_ngcontent-%COMP%]     mat-button-toggle-group .mat-button-toggle .mat-button-toggle-button{height:var(--mat-icon-button-heigth, 21px);line-height:var(--mat-icon-button-heigth, 21px)}[_nghost-%COMP%]   .sheldon-card-subheader[_ngcontent-%COMP%]     mat-button-toggle-group .mat-button-toggle .mat-button-toggle-label-content{line-height:var(--mat-icon-button-heigth, 21px);padding:0 2px}[_nghost-%COMP%]   .sheldon-card-buttons[_ngcontent-%COMP%]{display:flex;align-items:center;width:var(--sheldon-card-buttons-width)}[_nghost-%COMP%]   .sheldon-card-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:var(--mat-icon-button-width, 40px);height:var(--mat-icon-button-heigth, 21px)}[_nghost-%COMP%]   .sheldon-card-body[_ngcontent-%COMP%]{position:relative;font-family:tasaDeck,sans-serif;font-size:13px;font-weight:500;flex:1 1 auto;display:flex;flex-direction:column;min-height:0}[_nghost-%COMP%]   .sheldon-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0}[_nghost-%COMP%]   .sheldon-card-info[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;justify-content:space-between;gap:8px;padding:8px;box-sizing:border-box;overflow:auto;width:100%;height:100%;background:#000;color:#fff;opacity:0;visibility:hidden;transform:translateY(8px);pointer-events:none;transition:opacity .25s ease,transform .25s ease,visibility 0s linear .25s}[_nghost-%COMP%]   .sheldon-card-info.is-open[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;transition:opacity .25s ease,transform .25s ease,visibility 0s}[_nghost-%COMP%]   .sheldon-card-info[_ngcontent-%COMP%]   .sheldon-card-info-text[_ngcontent-%COMP%]{flex:1 1 auto;overflow:auto;line-height:128%}[_nghost-%COMP%]   .sheldon-card-info[_ngcontent-%COMP%]   .sheldon-card-info-button-close[_ngcontent-%COMP%]{align-self:flex-end;margin-left:auto;margin-right:auto;border:1px solid white;color:#fff;cursor:pointer;padding:4px 12px;background:#000!important;text-transform:unset!important}[_nghost-%COMP%]   .sheldon-card-close-button[_ngcontent-%COMP%]{border:none;color:#fff;cursor:pointer;width:var(--mat-icon-button-width, 40px);height:var(--mat-icon-button-heigth, 20px);line-height:1}[_nghost-%COMP%]   .sheldon-card-copied[_ngcontent-%COMP%]{position:absolute;top:4px;right:8px;z-index:1001;background:#000;color:#fff;font-size:11px;padding:2px 8px}.fullscreen[_nghost-%COMP%]{position:fixed;inset:0;z-index:1000;width:100vw!important;height:100vh!important;background:#fff;overflow:auto}.fullscreen[_nghost-%COMP%]   .sheldon-card-body[_ngcontent-%COMP%]{flex:1 1 auto}.fullscreen[_nghost-%COMP%]   .sheldon-card-content[_ngcontent-%COMP%]{flex:1 1 auto;height:auto}
/*# sourceMappingURL=card.component-B5AMCMBQ.css.map */`]})}return t})();var Gr=class{_attachedHost=null;attach(i){return this._attachedHost=i,i.attach(this)}detach(){let i=this._attachedHost;i!=null&&(this._attachedHost=null,i.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(i){this._attachedHost=i}},Ql=class extends Gr{component;viewContainerRef;injector;projectableNodes;bindings;constructor(i,e,n,r,o){super(),this.component=i,this.viewContainerRef=e,this.injector=n,this.projectableNodes=r,this.bindings=o||null}},En=class extends Gr{templateRef;viewContainerRef;context;injector;constructor(i,e,n,r){super(),this.templateRef=i,this.viewContainerRef=e,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(i,e=this.context){return this.context=e,super.attach(i)}detach(){return this.context=void 0,super.detach()}},Jl=class extends Gr{element;constructor(i){super(),this.element=i instanceof I?i.nativeElement:i}},ec=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(i){if(i instanceof Ql)return this._attachedPortal=i,this.attachComponentPortal(i);if(i instanceof En)return this._attachedPortal=i,this.attachTemplatePortal(i);if(this.attachDomPortal&&i instanceof Jl)return this._attachedPortal=i,this.attachDomPortal(i)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(i){this._disposeFn=i}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},ja=class extends ec{outletElement;_appRef;_defaultInjector;constructor(i,e,n){super(),this.outletElement=i,this._appRef=e,this._defaultInjector=n}attachComponentPortal(i){let e;if(i.viewContainerRef){let n=i.injector||i.viewContainerRef.injector,r=n.get(es,null,{optional:!0})||void 0;e=i.viewContainerRef.createComponent(i.component,{index:i.viewContainerRef.length,injector:n,ngModuleRef:r,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,r=i.injector||this._defaultInjector||he.NULL,o=r.get(we,n.injector);e=oo(i.component,{elementInjector:r,environmentInjector:o,projectableNodes:i.projectableNodes||void 0,bindings:i.bindings||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=i,e}attachTemplatePortal(i){let e=i.viewContainerRef,n=e.createEmbeddedView(i.templateRef,i.context,{injector:i.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(n);r!==-1&&e.remove(r)}),this._attachedPortal=i,n}attachDomPortal=i=>{let e=i.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=i,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(i){return i.hostView.rootNodes[0]}};var Ua=class{enable(){}disable(){}attach(){}};function tc(t,i){return i.some(e=>{let n=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,a=t.left>e.right;return n||r||o||a})}function hm(t,i){return i.some(e=>{let n=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,a=t.right>e.right;return n||r||o||a})}function Wa(t,i){return new za(t.get(Nl),t.get(wi),t.get(k),i)}var za=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(i,e,n,r){this._scrollDispatcher=i,this._viewportRuler=e,this._ngZone=n,this._config=r}attach(i){this._overlayRef,this._overlayRef=i}enable(){if(!this._scrollSubscription){let i=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(i).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:r}=this._viewportRuler.getViewportSize();tc(e,[{width:n,height:r,bottom:r,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var An=class{positionStrategy;scrollStrategy=new Ua;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(i){if(i){let e=Object.keys(i);for(let n of e)i[n]!==void 0&&(this[n]=i[n])}}};var Ha=class{connectionPair;scrollableViewProperties;constructor(i,e){this.connectionPair=i,this.scrollableViewProperties=e}};var vm=(()=>{class t{_attachedOverlays=[];_document=c(U);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),bm=(()=>{class t extends vm{_ngZone=c(k);_renderer=c(je).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let r=n.length-1;r>-1;r--){let o=n[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=yt(t)))(r||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_m=(()=>{class t extends vm{_platform=c(de);_ngZone=c(k);_renderer=c(je).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(n,"pointerdown",this._pointerDownListener,r),o.listen(n,"click",this._clickListener,r),o.listen(n,"auxclick",this._clickListener,r),o.listen(n,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=Oe(e)};_clickListener=e=>{let n=Oe(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let s=o[a],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,e,l))){if(fm(s.overlayElement,n)||fm(s.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=yt(t)))(r||t)}})();static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function fm(t,i){let e=typeof ShadowRoot<"u"&&ShadowRoot,n=i;for(;n;){if(n===t)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var ym=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),wm=(()=>{class t{_platform=c(de);_containerElement;_document=c(U);_styleLoader=c(Ke);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||El()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let n=this._document.createElement("div");n.classList.add(e),El()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(ym)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),nc=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(i,e,n,r){this._renderer=e,this._ngZone=n,this.element=i.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let i=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(i,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),i.style.pointerEvents="none",i.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function oc(t){return t&&t.nodeType===1}var $a=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new y;_attachments=new y;_detachments=new y;_positionStrategy;_scrollStrategy;_locationChanges=pe.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new y;_outsidePointerEvents=new y;_afterNextRenderRef;constructor(i,e,n,r,o,a,s,l,d,u=!1,h,_){this._portalOutlet=i,this._host=e,this._pane=n,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=s,this._location=l,this._outsideClickDispatcher=d,this._animationsDisabled=u,this._injector=h,this._renderer=_,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(i){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(i);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=ut(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let i=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),i}dispose(){if(this._disposed)return;let i=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,i&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(i){i!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=i,this.hasAttached()&&(i.attach(this),this.updatePosition()))}updateSize(i){this._config=m(m({},this._config),i),this._updateElementSize()}setDirection(i){this._config=Y(m({},this._config),{direction:i}),this._updateElementDirection()}addPanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!0)}removePanelClass(i){this._pane&&this._toggleClasses(this._pane,i,!1)}getDirection(){let i=this._config.direction;return i?typeof i=="string"?i:i.value:"ltr"}updateScrollStrategy(i){i!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=i,this.hasAttached()&&(i.attach(this),i.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let i=this._pane.style;i.width=Ee(this._config.width),i.height=Ee(this._config.height),i.minWidth=Ee(this._config.minWidth),i.minHeight=Ee(this._config.minHeight),i.maxWidth=Ee(this._config.maxWidth),i.maxHeight=Ee(this._config.maxHeight)}_togglePointerEvents(i){this._pane.style.pointerEvents=i?"":"none"}_attachHost(){if(!this._host.parentElement){let i=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;oc(i)?i.after(this._host):i?.type==="parent"?i.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let i="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new nc(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(i))}):this._backdropRef.element.classList.add(i)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(i,e,n){let r=jt(e||[]).filter(o=>!!o);r.length&&(n?i.classList.add(...r):i.classList.remove(...r))}_detachContentWhenEmpty(){let i=!1;try{this._detachContentAfterRenderRef=ut(()=>{i=!0,this._detachContent()},{injector:this._injector})}catch(e){if(i)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let i=this._scrollStrategy;i?.disable(),i?.detach?.()}},mm="cdk-overlay-connected-position-bounding-box",w0=/([A-Za-z%]+)$/;function qa(t,i){return new Ga(i,t.get(wi),t.get(U),t.get(de),t.get(wm))}var Ga=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new y;_resizeSubscription=pe.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(i,e,n,r,o){this._viewportRuler=e,this._document=n,this._platform=r,this._overlayContainer=o,this.setOrigin(i)}attach(i){this._overlayRef&&this._overlayRef,this._validatePositions(),i.hostElement.classList.add(mm),this._overlayRef=i,this._boundingBox=i.hostElement,this._pane=i.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let i=this._originRect,e=this._overlayRect,n=this._viewportRect,r=this._containerRect,o=[],a;for(let s of this._preferredPositions){let l=this._getOriginPoint(i,r,s),d=this._getOverlayPoint(l,e,s),u=this._getOverlayFit(d,e,n,s);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(u,d,n)){o.push({position:s,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!a||a.overlayFit.visibleArea<u.visibleArea)&&(a={overlayFit:u,overlayPoint:d,originPoint:l,position:s,overlayRect:e})}if(o.length){let s=null,l=-1;for(let d of o){let u=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);u>l&&(l=u,s=d)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return}this._applyPosition(a.position,a.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Sn(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(mm),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let i=this._lastPosition;i?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(i,this._getOriginPoint(this._originRect,this._containerRect,i))):this.apply()}withScrollableContainers(i){return this._scrollables=i,this}withPositions(i){return this._preferredPositions=i,i.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(i){return this._viewportMargin=i,this}withFlexibleDimensions(i=!0){return this._hasFlexibleDimensions=i,this}withGrowAfterOpen(i=!0){return this._growAfterOpen=i,this}withPush(i=!0){return this._canPush=i,this}withLockedPosition(i=!0){return this._positionLocked=i,this}setOrigin(i){return this._origin=i,this}withDefaultOffsetX(i){return this._offsetX=i,this}withDefaultOffsetY(i){return this._offsetY=i,this}withTransformOriginOn(i){return this._transformOriginSelector=i,this}withPopoverLocation(i){return this._popoverLocation=i,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof I?this._origin.nativeElement:oc(this._origin)?this._origin:null}_getOriginPoint(i,e,n){let r;if(n.originX=="center")r=i.left+i.width/2;else{let a=this._isRtl()?i.right:i.left,s=this._isRtl()?i.left:i.right;r=n.originX=="start"?a:s}e.left<0&&(r-=e.left);let o;return n.originY=="center"?o=i.top+i.height/2:o=n.originY=="top"?i.top:i.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(i,e,n){let r;n.overlayX=="center"?r=-e.width/2:n.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return n.overlayY=="center"?o=-e.height/2:o=n.overlayY=="top"?0:-e.height,{x:i.x+r,y:i.y+o}}_getOverlayFit(i,e,n,r){let o=gm(e),{x:a,y:s}=i,l=this._getOffset(r,"x"),d=this._getOffset(r,"y");l&&(a+=l),d&&(s+=d);let u=0-a,h=a+o.width-n.width,_=0-s,x=s+o.height-n.height,O=this._subtractOverflows(o.width,u,h),Z=this._subtractOverflows(o.height,_,x),S=O*Z;return{visibleArea:S,isCompletelyWithinViewport:o.width*o.height===S,fitsInViewportVertically:Z===o.height,fitsInViewportHorizontally:O==o.width}}_canFitWithFlexibleDimensions(i,e,n){if(this._hasFlexibleDimensions){let r=n.bottom-e.y,o=n.right-e.x,a=pm(this._overlayRef.getConfig().minHeight),s=pm(this._overlayRef.getConfig().minWidth),l=i.fitsInViewportVertically||a!=null&&a<=r,d=i.fitsInViewportHorizontally||s!=null&&s<=o;return l&&d}return!1}_pushOverlayOnScreen(i,e,n){if(this._previousPushAmount&&this._positionLocked)return{x:i.x+this._previousPushAmount.x,y:i.y+this._previousPushAmount.y};let r=gm(e),o=this._viewportRect,a=Math.max(i.x+r.width-o.width,0),s=Math.max(i.y+r.height-o.height,0),l=Math.max(o.top-n.top-i.y,0),d=Math.max(o.left-n.left-i.x,0),u=0,h=0;return r.width<=o.width?u=d||-a:u=i.x<this._getViewportMarginStart()?o.left-n.left-i.x:0,r.height<=o.height?h=l||-s:h=i.y<this._getViewportMarginTop()?o.top-n.top-i.y:0,this._previousPushAmount={x:u,y:h},{x:i.x+u,y:i.y+h}}_applyPosition(i,e){if(this._setTransformOrigin(i),this._setOverlayElementStyles(e,i),this._setBoundingBoxStyles(e,i),i.panelClass&&this._addPanelClasses(i.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(i!==this._lastPosition||!this._lastScrollVisibility||!C0(this._lastScrollVisibility,n)){let r=new Ha(i,n);this._positionChanges.next(r)}this._lastScrollVisibility=n}this._lastPosition=i,this._isInitialRender=!1}_setTransformOrigin(i){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,r=i.overlayY;i.overlayX==="center"?n="center":this._isRtl()?n=i.overlayX==="start"?"right":"left":n=i.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${n} ${r}`}_calculateBoundingBoxRect(i,e){let n=this._viewportRect,r=this._isRtl(),o,a,s;if(e.overlayY==="top")a=i.y,o=n.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")s=n.height-i.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=n.height-s+this._getViewportMarginTop();else{let x=Math.min(n.bottom-i.y+n.top,i.y),O=this._lastBoundingBoxSize.height;o=x*2,a=i.y-x,o>O&&!this._isInitialRender&&!this._growAfterOpen&&(a=i.y-O/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,u,h,_;if(d)_=n.width-i.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=i.x-this._getViewportMarginStart();else if(l)h=i.x,u=n.right-i.x-this._getViewportMarginEnd();else{let x=Math.min(n.right-i.x+n.left,i.x),O=this._lastBoundingBoxSize.width;u=x*2,h=i.x-x,u>O&&!this._isInitialRender&&!this._growAfterOpen&&(h=i.x-O/2)}return{top:a,left:h,bottom:s,right:_,width:u,height:o}}_setBoundingBoxStyles(i,e){let n=this._calculateBoundingBoxRect(i,e);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=Ee(n.width),r.height=Ee(n.height),r.top=Ee(n.top)||"auto",r.bottom=Ee(n.bottom)||"auto",r.left=Ee(n.left)||"auto",r.right=Ee(n.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=Ee(o)),a&&(r.maxWidth=Ee(a))}this._lastBoundingBoxSize=n,Sn(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Sn(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Sn(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(i,e){let n={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let u=this._viewportRuler.getViewportScrollPosition();Sn(n,this._getExactOverlayY(e,i,u)),Sn(n,this._getExactOverlayX(e,i,u))}else n.position="static";let s="",l=this._getOffset(e,"x"),d=this._getOffset(e,"y");l&&(s+=`translateX(${l}px) `),d&&(s+=`translateY(${d}px)`),n.transform=s.trim(),a.maxHeight&&(r?n.maxHeight=Ee(a.maxHeight):o&&(n.maxHeight="")),a.maxWidth&&(r?n.maxWidth=Ee(a.maxWidth):o&&(n.maxWidth="")),Sn(this._pane.style,n)}_getExactOverlayY(i,e,n){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,i);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n)),i.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`}else r.top=Ee(o.y);return r}_getExactOverlayX(i,e,n){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,i);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,n));let a;if(this._isRtl()?a=i.overlayX==="end"?"left":"right":a=i.overlayX==="end"?"right":"left",a==="right"){let s=this._document.documentElement.clientWidth;r.right=`${s-(o.x+this._overlayRect.width)}px`}else r.left=Ee(o.x);return r}_getScrollVisibility(){let i=this._getOriginRect(),e=this._pane.getBoundingClientRect(),n=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:hm(i,n),isOriginOutsideView:tc(i,n),isOverlayClipped:hm(e,n),isOverlayOutsideView:tc(e,n)}}_subtractOverflows(i,...e){return e.reduce((n,r)=>n-Math.max(r,0),i)}_getNarrowedViewportRect(){let i=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+i-this._getViewportMarginEnd(),bottom:n.top+e-this._getViewportMarginBottom(),width:i-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(i,e){return e==="x"?i.offsetX==null?this._offsetX:i.offsetX:i.offsetY==null?this._offsetY:i.offsetY}_validatePositions(){}_addPanelClasses(i){this._pane&&jt(i).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(i=>{this._pane.classList.remove(i)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let i=this._origin;if(i instanceof I)return i.nativeElement.getBoundingClientRect();if(i instanceof Element)return i.getBoundingClientRect();let e=i.width||0,n=i.height||0;return{top:i.y,bottom:i.y+n,left:i.x,right:i.x+e,height:n,width:e}}_getContainerRect(){let i=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();i&&(e.style.display="block");let n=e.getBoundingClientRect();return i&&(e.style.display=""),n}};function Sn(t,i){for(let e in i)i.hasOwnProperty(e)&&(t[e]=i[e]);return t}function pm(t){if(typeof t!="number"&&t!=null){let[i,e]=t.split(w0);return!e||e==="px"?parseFloat(i):null}return t||null}function gm(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function C0(t,i){return t===i?!0:t.isOriginClipped===i.isOriginClipped&&t.isOriginOutsideView===i.isOriginOutsideView&&t.isOverlayClipped===i.isOverlayClipped&&t.isOverlayOutsideView===i.isOverlayOutsideView}var ac=new v("OVERLAY_DEFAULT_CONFIG");function Ya(t,i){t.get(Ke).load(ym);let e=t.get(wm),n=t.get(U),r=t.get(Fe),o=t.get(wt),a=t.get(at),s=t.get(De,null,{optional:!0})||t.get(je).createRenderer(null,null),l=new An(i),d=t.get(ac,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||a.value,"showPopover"in n.body?l.usePopover=i?.usePopover??d:l.usePopover=!1;let u=n.createElement("div"),h=n.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),h.appendChild(u),l.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let _=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return oc(_)?_.after(h):_?.type==="parent"?_.element.appendChild(h):e.getContainerElement().appendChild(h),new $a(new ja(u,o,t),h,u,l,t.get(k),t.get(bm),n,t.get(Zt),t.get(_m),i?.disableAnimations??t.get(eo,null,{optional:!0})==="NoopAnimations",t.get(we),s)}var D0=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],x0=new v("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(he);return()=>Wa(t)}}),ic=(()=>{class t{elementRef=c(I);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return t})(),Cm=new v("cdk-connected-overlay-default-config"),E0=(()=>{class t{_dir=c(at,{optional:!0});_injector=c(he);_overlayRef;_templatePortal;_backdropSubscription=pe.EMPTY;_attachSubscription=pe.EMPTY;_detachSubscription=pe.EMPTY;_positionSubscription=pe.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=c(x0);_ngZone=c(k);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new $;positionChange=new $;attach=new $;detach=new $;overlayKeydown=new $;overlayOutsideClick=new $;constructor(){let e=c(Wt),n=c(ht),r=c(Cm,{optional:!0}),o=c(ac,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new En(e,n),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=D0);let e=this._overlayRef=Ya(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(n=>{this.overlayKeydown.next(n),n.keyCode===27&&!this.disableClose&&!st(n)&&(n.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(n=>{let r=this._getOriginElement(),o=Oe(n);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(n)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),n=new An({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(n.height=this.height),(this.minWidth||this.minWidth===0)&&(n.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(n.minHeight=this.minHeight),this.backdropClass&&(n.backdropClass=this.backdropClass),this.panelClass&&(n.panelClass=this.panelClass),n}_updatePositionStrategy(e){let n=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(n).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=qa(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof ic?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof ic?this.origin.elementRef.nativeElement:this.origin instanceof I?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(n=>this.backdropClick.emit(n)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(vc(()=>this.positionChange.observers.length>0)).subscribe(n=>{this._ngZone.run(()=>this.positionChange.emit(n)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",M],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",M],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",M],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",M],push:[2,"cdkConnectedOverlayPush","push",M],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",M],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",M],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Ce]})}return t})();var A0=["panel"],M0=["*"];function R0(t,i){if(t&1&&(Ot(0,"div",1,0),J(2),Ft()),t&2){let e=i.id,n=ce();Vn(n._classList),K("mat-mdc-autocomplete-visible",n.showPanel)("mat-mdc-autocomplete-hidden",!n.showPanel)("mat-autocomplete-panel-animations-enabled",!n._animationsDisabled)("mat-primary",n._color==="primary")("mat-accent",n._color==="accent")("mat-warn",n._color==="warn"),Yt("id",n.id),fe("aria-label",n.ariaLabel||null)("aria-labelledby",n._getPanelAriaLabelledby(e))}}var sc=class{source;option;constructor(i,e){this.source=i,this.option=e}},Dm=new v("mat-autocomplete-default-options",{providedIn:"root",factory:()=>({autoActiveFirstOption:!1,autoSelectActiveOption:!1,hideSingleSelectionIndicator:!1,requireSelection:!1,hasBackdrop:!1})}),xm=(()=>{class t{_changeDetectorRef=c(Te);_elementRef=c(I);_defaults=c(Dm);_animationsDisabled=He();_activeOptionChanges=pe.EMPTY;_keyManager;showPanel=!1;get isOpen(){return this._isOpen&&this.showPanel}_isOpen=!1;_latestOpeningTrigger;_setColor(e){this._color=e,this._changeDetectorRef.markForCheck()}_color;template;panel;options;optionGroups;ariaLabel;ariaLabelledby;displayWith=null;autoActiveFirstOption;autoSelectActiveOption;requireSelection;panelWidth;disableRipple=!1;optionSelected=new $;opened=new $;closed=new $;optionActivated=new $;set classList(e){this._classList=e,this._elementRef.nativeElement.className=""}_classList;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator;_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}id=c(Fe).getId("mat-autocomplete-");inertGroups;constructor(){let e=c(de);this.inertGroups=e?.SAFARI||!1,this.autoActiveFirstOption=!!this._defaults.autoActiveFirstOption,this.autoSelectActiveOption=!!this._defaults.autoSelectActiveOption,this.requireSelection=!!this._defaults.requireSelection,this._hideSingleSelectionIndicator=this._defaults.hideSingleSelectionIndicator??!1}ngAfterContentInit(){this._keyManager=new Fr(this.options).withWrap().skipPredicate(this._skipPredicate),this._activeOptionChanges=this._keyManager.change.subscribe(e=>{this.isOpen&&this.optionActivated.emit({source:this,option:this.options.toArray()[e]||null})}),this._setVisibility()}ngOnDestroy(){this._keyManager?.destroy(),this._activeOptionChanges.unsubscribe()}_setScrollTop(e){this.panel&&(this.panel.nativeElement.scrollTop=e)}_getScrollTop(){return this.panel?this.panel.nativeElement.scrollTop:0}_setVisibility(){this.showPanel=!!this.options?.length,this._changeDetectorRef.markForCheck()}_emitSelectEvent(e){let n=new sc(this,e);this.optionSelected.emit(n)}_getPanelAriaLabelledby(e){if(this.ariaLabel)return null;let n=e?e+" ":"";return this.ariaLabelledby?n+this.ariaLabelledby:e}_skipPredicate(){return!1}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["mat-autocomplete"]],contentQueries:function(n,r,o){if(n&1&&hn(o,Fa,5)(o,zl,5),n&2){let a;se(a=le())&&(r.options=a),se(a=le())&&(r.optionGroups=a)}},viewQuery:function(n,r){if(n&1&&mt(Wt,7)(A0,5),n&2){let o;se(o=le())&&(r.template=o.first),se(o=le())&&(r.panel=o.first)}},hostAttrs:[1,"mat-mdc-autocomplete"],inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],displayWith:"displayWith",autoActiveFirstOption:[2,"autoActiveFirstOption","autoActiveFirstOption",M],autoSelectActiveOption:[2,"autoSelectActiveOption","autoSelectActiveOption",M],requireSelection:[2,"requireSelection","requireSelection",M],panelWidth:"panelWidth",disableRipple:[2,"disableRipple","disableRipple",M],classList:[0,"class","classList"],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",M]},outputs:{optionSelected:"optionSelected",opened:"opened",closed:"closed",optionActivated:"optionActivated"},exportAs:["matAutocomplete"],features:[ge([{provide:Ul,useExisting:t}])],ngContentSelectors:M0,decls:1,vars:0,consts:[["panel",""],["role","listbox",1,"mat-mdc-autocomplete-panel","mdc-menu-surface","mdc-menu-surface--open",3,"id"]],template:function(n,r){n&1&&(xe(),kc(0,R0,3,17,"ng-template"))},styles:[`div.mat-mdc-autocomplete-panel {
  width: 100%;
  max-height: 256px;
  visibility: hidden;
  transform-origin: center top;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  position: relative;
  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));
  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-autocomplete-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: center bottom;
}
div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {
  visibility: visible;
}

div.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,
.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {
  visibility: hidden;
  pointer-events: none;
}

@keyframes _mat-autocomplete-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.mat-autocomplete-panel-animations-enabled {
  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}

mat-autocomplete {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})();var I0={provide:Cn,useExisting:tt(()=>lc),multi:!0};var T0=new v("mat-autocomplete-scroll-strategy",{providedIn:"root",factory:()=>{let t=c(he);return()=>Wa(t)}}),lc=(()=>{class t{_environmentInjector=c(we);_element=c(I);_injector=c(he);_viewContainerRef=c(ht);_zone=c(k);_changeDetectorRef=c(Te);_dir=c(at,{optional:!0});_formField=c(kr,{optional:!0,host:!0});_viewportRuler=c(wi);_scrollStrategy=c(T0);_renderer=c(De);_animationsDisabled=He();_defaults=c(Dm,{optional:!0});_overlayRef=null;_portal;_componentDestroyed=!1;_initialized=new y;_keydownSubscription;_outsideClickSubscription;_cleanupWindowBlur;_previousValue=null;_valueOnAttach=null;_valueOnLastKeydown=null;_positionStrategy;_manuallyFloatingLabel=!1;_closingActionsSubscription;_viewportSubscription=pe.EMPTY;_breakpointObserver=c(Ml);_handsetLandscapeSubscription=pe.EMPTY;_canOpenOnNextFocus=!0;_valueBeforeAutoSelection;_pendingAutoselectedOption=null;_closeKeyEventStream=new y;_overlayPanelClass=jt(this._defaults?.overlayPanelClass||[]);_windowBlurHandler=()=>{this._canOpenOnNextFocus=this.panelOpen||!this._hasFocus()};_onChange=()=>{};_onTouched=()=>{};autocomplete;position="auto";connectedTo;autocompleteAttribute="off";autocompleteDisabled=!1;constructor(){}_aboveClass="mat-mdc-autocomplete-panel-above";ngAfterViewInit(){this._initialized.next(),this._initialized.complete(),this._cleanupWindowBlur=this._renderer.listen("window","blur",this._windowBlurHandler)}ngOnChanges(e){e.position&&this._positionStrategy&&(this._setStrategyPositions(this._positionStrategy),this.panelOpen&&this._overlayRef.updatePosition())}ngOnDestroy(){this._cleanupWindowBlur?.(),this._handsetLandscapeSubscription.unsubscribe(),this._viewportSubscription.unsubscribe(),this._componentDestroyed=!0,this._destroyPanel(),this._closeKeyEventStream.complete(),this._clearFromModal()}get panelOpen(){return this._overlayAttached&&this.autocomplete.showPanel}_overlayAttached=!1;openPanel(){this._openPanelInternal()}closePanel(){this._resetLabel(),this._overlayAttached&&(this.panelOpen&&this._zone.run(()=>{this.autocomplete.closed.emit()}),this.autocomplete._latestOpeningTrigger===this&&(this.autocomplete._isOpen=!1,this.autocomplete._latestOpeningTrigger=null),this._overlayAttached=!1,this._pendingAutoselectedOption=null,this._overlayRef&&this._overlayRef.hasAttached()&&(this._overlayRef.detach(),this._closingActionsSubscription.unsubscribe()),this._updatePanelState(),this._componentDestroyed||this._changeDetectorRef.detectChanges(),this._trackedModal&&Ca(this._trackedModal,"aria-owns",this.autocomplete.id))}updatePosition(){this._overlayAttached&&this._overlayRef.updatePosition()}get panelClosingActions(){return Tn(this.optionSelections,this.autocomplete._keyManager.tabOut.pipe(me(()=>this._overlayAttached)),this._closeKeyEventStream,this._getOutsideClickStream(),this._overlayRef?this._overlayRef.detachments().pipe(me(()=>this._overlayAttached)):D()).pipe(j(e=>e instanceof Vr?e:null))}optionSelections=In(()=>{let e=this.autocomplete?this.autocomplete.options:null;return e?e.changes.pipe(dt(e),Se(()=>Tn(...e.map(n=>n.onSelectionChange)))):this._initialized.pipe(Se(()=>this.optionSelections))});get activeOption(){return this.autocomplete&&this.autocomplete._keyManager?this.autocomplete._keyManager.activeItem:null}_getOutsideClickStream(){return new ke(e=>{let n=o=>{let a=Oe(o),s=this._formField?this._formField.getConnectedOverlayOrigin().nativeElement:null,l=this.connectedTo?this.connectedTo.elementRef.nativeElement:null;this._overlayAttached&&a!==this._element.nativeElement&&!this._hasFocus()&&(!s||!s.contains(a))&&(!l||!l.contains(a))&&this._overlayRef&&!this._overlayRef.overlayElement.contains(a)&&e.next(o)},r=[this._renderer.listen("document","click",n),this._renderer.listen("document","auxclick",n),this._renderer.listen("document","touchend",n)];return()=>{r.forEach(o=>o())}})}writeValue(e){Promise.resolve(null).then(()=>this._assignOptionValue(e))}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this._element.nativeElement.disabled=e}_handleKeydown(e){let n=e,r=n.keyCode,o=st(n);if(r===27&&!o&&n.preventDefault(),this._valueOnLastKeydown=this._element.nativeElement.value,this.activeOption&&r===13&&this.panelOpen&&!o)this.activeOption._selectViaInteraction(),this._resetActiveItem(),n.preventDefault();else if(this.autocomplete){let a=this.autocomplete._keyManager.activeItem,s=r===38||r===40;r===9||s&&!o&&this.panelOpen?this.autocomplete._keyManager.onKeydown(n):s&&this._canOpen()&&this._openPanelInternal(this._valueOnLastKeydown),(s||this.autocomplete._keyManager.activeItem!==a)&&(this._scrollToOption(this.autocomplete._keyManager.activeItemIndex||0),this.autocomplete.autoSelectActiveOption&&this.activeOption&&(this._pendingAutoselectedOption||(this._valueBeforeAutoSelection=this._valueOnLastKeydown),this._pendingAutoselectedOption=this.activeOption,this._assignOptionValue(this.activeOption.value)))}}_handleInput(e){let n=e.target,r=n.value;if(n.type==="number"&&(r=r==""?null:parseFloat(r)),this._previousValue!==r){if(this._previousValue=r,this._pendingAutoselectedOption=null,(!this.autocomplete||!this.autocomplete.requireSelection)&&this._onChange(r),!r)this._clearPreviousSelectedOption(null,!1);else if(this.panelOpen&&!this.autocomplete.requireSelection){let o=this.autocomplete.options?.find(a=>a.selected);if(o){let a=this._getDisplayValue(o.value);r!==a&&o.deselect(!1)}}if(this._canOpen()&&this._hasFocus()){let o=this._valueOnLastKeydown??this._element.nativeElement.value;this._valueOnLastKeydown=null,this._openPanelInternal(o)}}}_handleFocus(){this._canOpenOnNextFocus?this._canOpen()&&(this._previousValue=this._element.nativeElement.value,this._attachOverlay(this._previousValue),this._floatLabel(!0)):this._canOpenOnNextFocus=!0}_handleClick(){this._canOpen()&&!this.panelOpen&&this._openPanelInternal()}_hasFocus(){return xl()===this._element.nativeElement}_floatLabel(e=!1){this._formField&&this._formField.floatLabel==="auto"&&(e?this._formField._animateAndLockLabel():this._formField.floatLabel="always",this._manuallyFloatingLabel=!0)}_resetLabel(){this._manuallyFloatingLabel&&(this._formField&&(this._formField.floatLabel="auto"),this._manuallyFloatingLabel=!1)}_subscribeToClosingActions(){let e=new ke(r=>{ut(()=>{r.next()},{injector:this._environmentInjector})}),n=this.autocomplete.options?.changes.pipe(ye(()=>this._positionStrategy.reapplyLastPosition()),pc(0))??D();return Tn(e,n).pipe(Se(()=>this._zone.run(()=>{let r=this.panelOpen;return this._resetActiveItem(),this._updatePanelState(),this._changeDetectorRef.detectChanges(),this.panelOpen&&this._overlayRef.updatePosition(),r!==this.panelOpen&&(this.panelOpen?this._emitOpened():this.autocomplete.closed.emit()),this.panelClosingActions})),et(1)).subscribe(r=>this._setValueAndClose(r))}_emitOpened(){this.autocomplete.opened.emit()}_destroyPanel(){this._overlayRef&&(this.closePanel(),this._overlayRef.dispose(),this._overlayRef=null)}_getDisplayValue(e){let n=this.autocomplete;return n&&n.displayWith?n.displayWith(e):e}_assignOptionValue(e){let n=this._getDisplayValue(e);e==null&&this._clearPreviousSelectedOption(null,!1),this._updateNativeInputValue(n??"")}_updateNativeInputValue(e){this._formField?this._formField._control.value=e:this._element.nativeElement.value=e,this._previousValue=e}_setValueAndClose(e){let n=this.autocomplete,r=e?e.source:this._pendingAutoselectedOption;r?(this._clearPreviousSelectedOption(r),this._assignOptionValue(r.value),this._onChange(r.value),n._emitSelectEvent(r),this._element.nativeElement.focus()):n.requireSelection&&this._element.nativeElement.value!==this._valueOnAttach&&(this._clearPreviousSelectedOption(null),this._assignOptionValue(null),this._onChange(null)),this.closePanel()}_clearPreviousSelectedOption(e,n){this.autocomplete?.options?.forEach(r=>{r!==e&&r.selected&&r.deselect(n)})}_openPanelInternal(e=this._element.nativeElement.value){if(this._attachOverlay(e),this._floatLabel(),this._trackedModal){let n=this.autocomplete.id;Tl(this._trackedModal,"aria-owns",n)}}_attachOverlay(e){if(!this.autocomplete)return;let n=this._overlayRef;n?(this._positionStrategy.setOrigin(this._getConnectedElement()),n.updateSize({width:this._getPanelWidth()})):(this._portal=new En(this.autocomplete.template,this._viewContainerRef,{id:this._formField?.getLabelId()}),n=Ya(this._injector,this._getOverlayConfig()),this._overlayRef=n,this._viewportSubscription=this._viewportRuler.change().subscribe(()=>{this.panelOpen&&n&&n.updateSize({width:this._getPanelWidth()})}),this._handsetLandscapeSubscription=this._breakpointObserver.observe(lf.HandsetLandscape).subscribe(o=>{o.matches?this._positionStrategy.withFlexibleDimensions(!0).withGrowAfterOpen(!0).withViewportMargin(8):this._positionStrategy.withFlexibleDimensions(!1).withGrowAfterOpen(!1).withViewportMargin(0)})),n&&!n.hasAttached()&&(n.attach(this._portal),this._valueOnAttach=e,this._valueOnLastKeydown=null,this._closingActionsSubscription=this._subscribeToClosingActions());let r=this.panelOpen;this.autocomplete._isOpen=this._overlayAttached=!0,this.autocomplete._latestOpeningTrigger=this,this.autocomplete._setColor(this._formField?.color),this._updatePanelState(),this._applyModalPanelOwnership(),this.panelOpen&&r!==this.panelOpen&&this._emitOpened()}_handlePanelKeydown=e=>{(e.keyCode===27&&!st(e)||e.keyCode===38&&st(e,"altKey"))&&(this._pendingAutoselectedOption&&(this._updateNativeInputValue(this._valueBeforeAutoSelection??""),this._pendingAutoselectedOption=null),this._closeKeyEventStream.next(),this._resetActiveItem(),e.stopPropagation(),e.preventDefault())};_updatePanelState(){if(this.autocomplete._setVisibility(),this.panelOpen){let e=this._overlayRef;this._keydownSubscription||(this._keydownSubscription=e.keydownEvents().subscribe(this._handlePanelKeydown)),this._outsideClickSubscription||(this._outsideClickSubscription=e.outsidePointerEvents().subscribe())}else this._keydownSubscription?.unsubscribe(),this._outsideClickSubscription?.unsubscribe(),this._keydownSubscription=this._outsideClickSubscription=void 0}_getOverlayConfig(){return new An({positionStrategy:this._getOverlayPosition(),scrollStrategy:this._scrollStrategy(),width:this._getPanelWidth(),direction:this._dir??void 0,hasBackdrop:this._defaults?.hasBackdrop,backdropClass:this._defaults?.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this._overlayPanelClass,disableAnimations:this._animationsDisabled})}_getOverlayPosition(){let e=qa(this._injector,this._getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPopoverLocation("inline");return this._setStrategyPositions(e),this._positionStrategy=e,e}_setStrategyPositions(e){let n=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],r=this._aboveClass,o=[{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:r},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:r}],a;this.position==="above"?a=o:this.position==="below"?a=n:a=[...n,...o],e.withPositions(a)}_getConnectedElement(){return this.connectedTo?this.connectedTo.elementRef:this._formField?this._formField.getConnectedOverlayOrigin():this._element}_getPanelWidth(){return this.autocomplete.panelWidth||this._getHostWidth()}_getHostWidth(){return this._getConnectedElement().nativeElement.getBoundingClientRect().width}_resetActiveItem(){let e=this.autocomplete;if(e.autoActiveFirstOption){let n=-1;for(let r=0;r<e.options.length;r++)if(!e.options.get(r).disabled){n=r;break}e._keyManager.setActiveItem(n)}else e._keyManager.setActiveItem(-1)}_canOpen(){let e=this._element.nativeElement;return!e.readOnly&&!e.disabled&&!this.autocompleteDisabled}_scrollToOption(e){let n=this.autocomplete,r=kf(e,n.options,n.optionGroups);if(e===0&&r===1)n._setScrollTop(0);else if(n.panel){let o=n.options.toArray()[e];if(o){let a=o._getHostElement(),s=Pf(a.offsetTop,a.offsetHeight,n._getScrollTop(),n.panel.nativeElement.offsetHeight);n._setScrollTop(s)}}}_trackedModal=null;_applyModalPanelOwnership(){let e=this._element.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let n=this.autocomplete.id;this._trackedModal&&Ca(this._trackedModal,"aria-owns",n),Tl(e,"aria-owns",n),this._trackedModal=e}_clearFromModal(){if(this._trackedModal){let e=this.autocomplete.id;Ca(this._trackedModal,"aria-owns",e),this._trackedModal=null}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=E({type:t,selectors:[["input","matAutocomplete",""],["textarea","matAutocomplete",""]],hostAttrs:[1,"mat-mdc-autocomplete-trigger"],hostVars:7,hostBindings:function(n,r){n&1&&ue("focusin",function(){return r._handleFocus()})("blur",function(){return r._onTouched()})("input",function(a){return r._handleInput(a)})("keydown",function(a){return r._handleKeydown(a)})("click",function(){return r._handleClick()}),n&2&&fe("autocomplete",r.autocompleteAttribute)("role",r.autocompleteDisabled?null:"combobox")("aria-autocomplete",r.autocompleteDisabled?null:"list")("aria-activedescendant",r.panelOpen&&r.activeOption?r.activeOption.id:null)("aria-expanded",r.autocompleteDisabled?null:r.panelOpen.toString())("aria-controls",r.autocompleteDisabled||!r.panelOpen||r.autocomplete==null?null:r.autocomplete.id)("aria-haspopup",r.autocompleteDisabled?null:"listbox")},inputs:{autocomplete:[0,"matAutocomplete","autocomplete"],position:[0,"matAutocompletePosition","position"],connectedTo:[0,"matAutocompleteConnectedTo","connectedTo"],autocompleteAttribute:[0,"autocomplete","autocompleteAttribute"],autocompleteDisabled:[2,"matAutocompleteDisabled","autocompleteDisabled",M]},exportAs:["matAutocompleteTrigger"],features:[ge([I0]),Ce]})}return t})();var O0=t=>({field:t}),F0=(t,i)=>i.key;function k0(t,i){if(t&1){let e=Bi();z(0,"button",8),Un(1,"transloco"),ue("click",function(){Fi(e);let r=ce().$implicit,o=kt(2),a=kt(3),s=ce();return ki(s.clearField(r,a,o))}),z(2,"mat-icon"),nt(3,"close"),G()()}t&2&&fe("aria-label",Ui(1,1,"filter.clear"))}function P0(t,i){if(t&1&&(z(0,"mat-option",7),nt(1),G()),t&2){let e=i.$implicit;Ae("value",e.value),T(),jn(e.value)}}function N0(t,i){if(t&1&&(z(0,"mat-form-field",3),Me(1,"input",4,0),Un(4,"transloco"),oe(5,k0,4,3,"button",5),z(6,"mat-autocomplete",6,1),is(8,P0,2,2,"mat-option",7,F0),G()()),t&2){let e=i.$implicit,n=kt(7),r=ce();T(),Ae("id",e)("formControlName",e)("placeholder",zc(4,5,"filter.search",Uc(8,O0,e)))("matAutocomplete",n),T(4),ae(r.hasValue(e)?5:-1),T(3),rs(r.filteredOptions(e))}}var Mk=(()=>{class t{filterBy=it([]);dataset=it([]);masterField=it(null);filterChange=qc();fb=c(Ph);fields=ve(()=>(this.filterBy()??[]).map(e=>e.trim()).filter(Boolean));filterForm=this.fb.group({});formValue=w({});constructor(){_t(()=>this._buildForm(this.fields()))}filteredOptions(e){let n=this.dataset();if(!n.length)return[];let r=this.formValue(),o=e===this.masterField(),a=o?n:n.filter(h=>this.fields().filter(_=>_!==e).every(_=>{let x=(r[_]??"").trim();return!x||String(h[_]??"")===x})),s=[...new Set(a.map(h=>String(h[e]??"")))].filter(Boolean).sort(),l=(r[e]??"").toLowerCase(),d=o&&s.some(h=>h.toLowerCase()===l);return(l&&!d?s.filter(h=>h.toLowerCase().includes(l)):s).map(h=>({key:h,value:h}))}hasValue(e){return!!(this.formValue()[e]??"").trim()}clearField(e,n,r){this.filterForm.get(e)?.setValue("",{emitEvent:!0}),n.autocomplete.options.filter(o=>o.selected).forEach(o=>o.deselect()),setTimeout(()=>{r.blur(),n.closePanel()},0)}_buildForm(e){let n=this.filterForm?.value??{},r={};for(let a of e)r[a]=[n[a]??""];this.filterForm=this.fb.group(r),this.filterForm.valueChanges.subscribe(a=>this.formValue.set(a));let o=this.masterField();o&&this.filterForm.contains(o)&&this.filterForm.get(o).valueChanges.pipe($t()).subscribe(a=>{this.dataset().some(l=>String(l[o]??"")===a)&&e.filter(l=>l!==o).forEach(l=>this.filterForm.get(l)?.setValue("",{emitEvent:!0}))}),this.filterForm.valueChanges.pipe(Ht(300),$t((a,s)=>JSON.stringify(a)===JSON.stringify(s))).subscribe(a=>{let s=Object.keys(a).map(l=>({key:l,value:a[l]}));this.filterChange.emit(s)})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["sheldon-dynamic-filter"]],inputs:{filterBy:[1,"filterBy"],dataset:[1,"dataset"],masterField:[1,"masterField"]},outputs:{filterChange:"filterChange"},decls:3,vars:1,consts:[["inputEl","","trigger","matAutocompleteTrigger"],["auto","matAutocomplete"],[1,"filter-form",3,"formGroup"],["appearance","outline",1,"filter-field"],["matInput","",3,"id","formControlName","placeholder","matAutocomplete"],["matSuffix","","mat-icon-button","","type","button"],[1,"dynamic-filter-autocomplete-panel"],[3,"value"],["matSuffix","","mat-icon-button","","type","button",3,"click"]],template:function(n,r){n&1&&(z(0,"form",2),is(1,N0,10,10,"mat-form-field",3,Nc),G()),n&2&&(Ae("formGroup",r.filterForm),T(),rs(r.fields()))},dependencies:[Nh,Fh,ha,xh,Eh,Sr,yl,Fa,Pr,Df,Sa,zr,Jo,lc,xm,so,ao],styles:[`[_ngcontent-%COMP%]:root{--sheldon-col: clamp(72px, 8vw, 96px)}@media(max-width:1366px){[_ngcontent-%COMP%]:root{--sheldon-col: 90px}}@media(max-width:959px){[_ngcontent-%COMP%]:root{--sheldon-col: 56px}}[_ngcontent-%COMP%]:root{--mat-sys-primary: transparent !important;--mat-tab-inactive-label-text-color: white;--color-gradient-ambiente-start: #F4B80D;--color-gradient-ambiente-end: #C79BCC;--color-gradient-cultura-start: #0080FF;--color-gradient-cultura-end: #FF9966;--color-gradient-mobilita-start: #C79BCC;--color-gradient-mobilita-end: #55BC7A;--color-gradient-sicurezza-start: #3FB5C4;--color-gradient-sicurezza-end: #F4DF64;--color-gradient-economia-start: #3FB5C4;--color-gradient-economia-end: #F4DF64;--color-gradient-sociale-start: #99EBF2;--color-gradient-sociale-end: #FF5A39;--color-gradient-societa-start: #99EBF2;--color-gradient-societa-end: #FF5A39;--chart-transition-duration: .5s;--filter-control-height: 18px;--min-bar-height: 40px;--mat-list-list-item-one-line-container-height: 30px;--mat-icon-button-icon-size: 100%;--mat-icon-button-state-layer-size: 25px;--mat-sys-surface: #EFE9E9;--mat-button-toggle-divider-color: transparent;--mat-button-toggle-selected-state-text-color: black;--mat-button-toggle-label-text-weight: bolder}body.sheldon-theme-bw[_ngcontent-%COMP%]{--color-gradient-ambiente-start: #000;--color-gradient-ambiente-end: #000;--color-gradient-cultura-start: #000;--color-gradient-cultura-end: #000;--color-gradient-mobilita-start: #000;--color-gradient-mobilita-end: #000;--color-gradient-sicurezza-start: #000;--color-gradient-sicurezza-end: #000;--color-gradient-economia-start: #000;--color-gradient-economia-end: #000;--color-gradient-sociale-start: #000;--color-gradient-sociale-end: #000;--color-gradient-societa-start: #000;--color-gradient-societa-end: #000;--mat-sys-secondary-container: rgb(219 219 219 / .44)}[_nghost-%COMP%]{display:block;--filter-control-height: var(--filter-control-height, 18px)}[_nghost-%COMP%]   .filter-field[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]     .mat-mdc-text-field-wrapper{padding:0!important;background:#fff;margin-left:7px;color:#000!important}[_nghost-%COMP%]     input.mat-mdc-input-element{color:#000!important}[_nghost-%COMP%]     input.mat-mdc-input-element::placeholder{color:#000!important;opacity:1}[_nghost-%COMP%]     .mdc-floating-label--float-above{display:none!important}[_nghost-%COMP%]     .mdc-notched-outline{border:none!important}[_nghost-%COMP%]     .mdc-floating-label{height:var(--filter-control-height)!important}[_nghost-%COMP%]     .mdc-floating-label mat-label{vertical-align:middle}[_nghost-%COMP%]     .mat-mdc-form-field-infix{min-height:var(--filter-control-height)!important;padding-top:0!important;padding-bottom:0!important;font-size:12px;padding-left:4px}[_nghost-%COMP%]     .mdc-text-field{height:var(--filter-control-height, 25px)!important}[_nghost-%COMP%]     .mat-mdc-option{min-height:var(--filter-control-height);line-height:var(--filter-control-height);font-size:13px}[_nghost-%COMP%]     .mat-mdc-form-field-icon-suffix{display:flex;align-items:center;height:var(--filter-control-height)}[_nghost-%COMP%]     .mat-mdc-form-field-icon-suffix .mat-mdc-icon-button{--mdc-icon-button-state-layer-size: var(--filter-control-height) !important;width:var(--filter-control-height)!important;height:var(--filter-control-height)!important;padding:0}[_nghost-%COMP%]     .mat-mdc-form-field-icon-suffix .mat-mdc-icon-button .mat-icon{font-size:calc(var(--filter-control-height) - 2px);line-height:var(--filter-control-height);width:calc(var(--filter-control-height) - 2px);height:calc(var(--filter-control-height) - 2px)}  .dynamic-filter-autocomplete-panel.mat-mdc-autocomplete-panel{background:#fff}  .dynamic-filter-autocomplete-panel.mat-mdc-autocomplete-panel .mat-mdc-option{background:#fff;color:#000}  .dynamic-filter-autocomplete-panel.mat-mdc-autocomplete-panel .mat-mdc-option .mdc-list-item__primary-text{color:#000}  .dynamic-filter-autocomplete-panel.mat-mdc-autocomplete-panel .mat-mdc-option:hover,   .dynamic-filter-autocomplete-panel.mat-mdc-autocomplete-panel .mat-mdc-option.mat-mdc-option-active{background:#000;color:#fff}  .dynamic-filter-autocomplete-panel.mat-mdc-autocomplete-panel .mat-mdc-option:hover .mdc-list-item__primary-text,   .dynamic-filter-autocomplete-panel.mat-mdc-autocomplete-panel .mat-mdc-option.mat-mdc-option-active .mdc-list-item__primary-text{color:#fff}
/*# sourceMappingURL=dynamic-filter.component-4LILL4GH.css.map */`]})}return t})();var Ik=(()=>{class t{decimalPipe;constructor(e){this.decimalPipe=e}transform(e){return e==null?"-":e>1e6?`${this.decimalPipe.transform(e/1e6,"1.0-0")}M`:e>1e3?`${this.decimalPipe.transform(e/1e3,"1.0-0")}K`:`${this.decimalPipe.transform(e,"1.0-0")}`}static \u0275fac=function(n){return new(n||t)(W(fs,16))};static \u0275pipe=io({name:"multiples",type:t,pure:!0})}return t})();export{fs as a,ld as b,cd as c,ws as d,ip as e,Kn as f,Rp as g,Xi as h,Mt as i,gt as j,nl as k,Rt as l,Xu as m,fb as n,Ke as o,ih as p,at as q,Jo as r,Vt as s,hi as t,de as u,Oe as v,Tr as w,tM as x,m_ as y,st as z,Fr as A,Rl as B,Fe as C,Tl as D,Ca as E,na as F,Ut as G,xh as H,Eh as I,bl as J,ta as K,Fh as L,i_ as M,Sr as N,WS as O,Nh as P,sf as Q,He as R,Fl as S,kr as T,Cf as U,Aa as V,ZR as W,Ur as X,CI as Y,wi as Z,DI as _,xI as $,Wa as aa,ac as ba,ic as ca,E0 as da,Br as ea,Vl as fa,Ta as ga,Ci as ha,Ul as ia,zl as ja,Fa as ka,kf as la,Pf as ma,by as na,_y as oa,um as pa,zD as qa,HD as ra,$D as sa,GD as ta,Zn as ua,Ss as va,KD as wa,St as xa,QT as ya,JT as za,qO as Aa,Mk as Ba,Ik as Ca,Ms as Da,mx as Ea,px as Fa,Tx as Ga};
//# sourceMappingURL=chunk-SV6KJPDZ.js.map
