var He=Object.defineProperty,Ge=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var ie=(e,t,o)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))le.call(t,o)&&ie(e,o,t[o]);if(L)for(var o of L(t))ce.call(t,o)&&ie(e,o,t[o]);return e},T=(e,t)=>Ge(e,je(t));var ue=(e,t)=>{var o={};for(var r in e)le.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(e!=null&&L)for(var r of L(e))t.indexOf(r)<0&&ce.call(e,r)&&(o[r]=e[r]);return o};import{n as pe,r as i,j as n,f as V,u as j,P as Je,B as S,t as J,C as P,s as me,a as xe,z as U,b as Ue,c as ge,d as u,e as W,g,I as f,T as fe,h as Ce,i as be,k as B,l as C,m as qe,o as Se,p as Ye,F as _,q as E,v as M,w as b,x as Ke,y as Xe,A as k,D as Qe,E as Ze,G as et,L as tt,H as nt,J as rt,K as ot,M as q,N as st,S as y,O as at,Q as ye,R as it,U as lt,V as ct,W as ut,X as dt,Y as ve,Z as we,_ as Ie,$ as ht,a0 as pt,a1 as F,a2 as mt,a3 as xt,a4 as gt,a5 as ft,a6 as Ct,a7 as bt,a8 as St,a9 as yt,aa as vt}from"./vendor.2ad202ef.js";function An(){import("data:text/javascript,")}const wt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}};wt();const Pe=e=>p({id:pe()},e),It=o=>{var r=o,{playerIds:e}=r,t=ue(r,["playerIds"]);if(e.length!==4)throw new Error("playerIds.length is not 4");return Pe(p({isTied:!1,playerIds:e},t))},A=i.exports.createContext({rounds:[],addRound:()=>{},removeRound:()=>{}}),Pt=({children:e})=>{const[t,o]=i.exports.useState([]);return n(A.Provider,{value:{rounds:t,addRound:r=>o(V(t,a=>{a.push(Pe(r))})),removeRound:r=>o(t.filter(a=>a.id!==r))},children:e})},Ft=({farn:e,halfSpicyFrom:t})=>Number((2**Math.min(e,t)*1.5**Math.max(0,Math.ceil((e-t)/2))*(4/3)**Math.max(0,Math.floor((e-t)/2))).toFixed(2)),kt=({farn:e,halfSpicyFrom:t,baseScore:o,isSelfTouch:r})=>Ft({farn:e,halfSpicyFrom:t})*o*(r?6:4),Tt=({score:e,chungJai:t,isLoser:o,loserCount:r,isSelfTouch:a})=>{if(a)return o?-1*e/r:0;switch(t){case"full":return o?-1*e:0;case"half":return-1*e/(o?2:4)}},Fe=(e,{players:t,scoringSettings:o})=>{if(e.isTied)return t.map(()=>0);const r=kt({farn:e.farn,baseScore:{"25chicken":.25,"51":.5,"12mosquitoes":1}[o.chipValue],halfSpicyFrom:o.halfSpicyFrom==="never"?Number.POSITIVE_INFINITY:o.halfSpicyFrom,isSelfTouch:e.isSelfTouch}),a=new Set(e.playerIds);return t.map(({id:s})=>a.has(s)?e.winnerId===s?r:Tt({score:r,chungJai:o.chungJai,isLoser:e.loserIds.includes(s),loserCount:e.loserIds.length,isSelfTouch:e.isSelfTouch}):null)},Et="modulepreload",de={},At="/",ke=function(t,o){return!o||o.length===0?t():Promise.all(o.map(r=>{if(r=`${At}${r}`,r in de)return;de[r]=!0;const a=r.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":Et,a||(l.as="script",l.crossOrigin=""),l.href=r,document.head.appendChild(l),a)return new Promise((c,d)=>{l.addEventListener("load",c),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},Bt=e=>e;var Te=Bt({appName:"\u9EBB\u96C0\u8A08\u5206\u5668",locales:{chinglish:"Chinglish",zhHk:"\u5EE3\u6771\u8A71"},bottomMenu:{chart:"\u5716",table:"\u8868",settings:"\u8A2D\u5B9A"},round:"\u5C40",score:"\u5206\u6578",addRound:"\u98DF\u7CCA",next:"\u7E7C\u7E8C",back:"\u8FD4\u56DE",cancel:"\u53D6\u6D88",done:"\u641E\u6382",winner:"\u98DF\u5BB6",losers:"\u51FA\u9283\u8005",farn:"\u756A",player:"\u73A9\u5BB6",selfTouch:"\u81EA\u6478",isSelfTouch:"\u81EA\u6478\uFF1F",isBao:"\u5305\uFF1F",addPlayer:"\u65B0\u589E\u73A9\u5BB6",chungJai:"\u9283\u5236",chungJais:{half:"\u534A\u9283",full:"\u5168\u9283"},chipValue:"\u7C4C\u78BC\u8A08\u6CD5",chipValues:{c25chicken:"\u4E8C\u4E94\u96DE",c51:"\u4E94\u4E00",c12mosquitoes:"\u4E00\u4E8C\u868A"},halfSpicyFrom:"\u5E7E\u756A\u958B\u59CB\u534A\u8FA3\uFF1F",halfSpicyFroms:{never:"\u5F9E\u4E0D",customPlaceholder:"\u81EA\u8A02"},noData:"\u672A\u6709\u6578\u64DA...",chartPlaceholderText:"\u98DF\u4E0B\u7CCA\u5148\u6709\u5716\u7747...",openTable:"\u958B\u6AAF",landingPage:{heading:"\u9EBB\u96C0\u8A08\u5206\u5668",subheading:"\u5514\u6D17\u7528\u8166\u65E2\u5668"},openTablePage:{scoringSettings:{heading:"\u9EDE\u6253\u6CD5\uFF1F"},players:{heading:"\u73A9\u5BB6"},firstWuStep:{heading:"\u641E\u6382\u54C2\uFF01",subheading:"\u3A52\u4E0B\u9762\u500B\u63A3\u98DF\u7CCA\uFF01"}},beforeUnloadMessage:"\u771F\u4FC2\u8981\u8D70\uFF1F\u8D70\u5497\u5C31\u5187\u54C2\u5572\u8A18\u9304\u5AC1\u5566\uFF01",addRoundModal:{currentPlayersSelectTitle:"\u908A\u500B\u73A9\u7DCA\uFF1F"}});const Mt={chinglish:()=>ke(()=>import("./chinglish.b9d443bf.js"),["assets/chinglish.b9d443bf.js","assets/vendor.2ad202ef.js"]),"zh-hk":()=>({default:Te})},Ee=i.exports.createContext(null),Rt=({children:e})=>{const[t,o]=i.exports.useState("zh-hk"),[r,a]=i.exports.useState(Te);return i.exports.useEffect(()=>{(async()=>a((await Mt[t]()).default))()},[t]),n(Ee.Provider,{value:{t:r,locale:t,setLocale:o},children:e})},Ae=()=>{const e=i.exports.useContext(Ee);if(!e)throw new Error("no locale context found");return e},h=()=>{const{t:e}=Ae();return e},Be=e=>p({id:pe()},e),R=i.exports.createContext({players:[],setPlayers:()=>{}}),Dt=({children:e})=>{const t=h(),[o,r]=i.exports.useState(Array.from({length:4},(a,s)=>Be({name:`${t.player} ${s+1}`})));return n(R.Provider,{value:{players:o,setPlayers:r},children:e})},Me={chungJai:"full",chipValue:"25chicken",halfSpicyFrom:4},N=i.exports.createContext({settings:Me,setSettings:()=>{}}),Lt=({children:e})=>{const[t,o]=i.exports.useState(Me);return n(N.Provider,{value:{settings:t,setSettings:o},children:e})},_t=({data:e})=>{var a,s,l,c;const t=j(),o=h(),r=i.exports.useMemo(()=>Math.max(...e.flatMap(({scores:d})=>d).map(d=>Math.abs(d!=null?d:0))),[e]);return n(Je,{data:e.map(({playerName:d,scores:m})=>({id:d,data:m.map((x,v)=>({x:v,y:x}))})),pointLabelYOffset:-12,enableSlices:"x",theme:{background:t.palette.background.default,textColor:t.palette.text.secondary,fontSize:11,grid:{line:{stroke:t.palette.secondary.dark,strokeWidth:1}},tooltip:{container:{background:t.palette.secondary.light,color:t.palette.secondary.contrastText,fontSize:12}}},margin:{top:20,right:20,bottom:85,left:60},yScale:{type:"linear",min:-r,max:r},colors:{scheme:"set3"},gridXValues:(s=(a=e[0])==null?void 0:a.scores.length)!=null?s:0,axisBottom:{legend:o.round,legendOffset:36,legendPosition:"middle",tickValues:(c=(l=e[0])==null?void 0:l.scores.length)!=null?c:0},axisLeft:{legend:o.score,legendOffset:-40,legendPosition:"middle"},useMesh:!0,legends:[{anchor:"bottom-left",direction:"row",justify:!1,translateX:-20,translateY:70,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)"}]})},Wt=25,Re=({data:e})=>{var t,o;return n(S,{sx:{width:"100%",overflowX:"auto",overflowY:"hidden"},children:n(S,{sx:{minWidth:`${Wt*((o=(t=e[0])==null?void 0:t.scores.length)!=null?o:1)}px`,minHeight:"600px",height:"calc(80vh - 200px)",display:"flex",alignItem:"center"},children:n(_t,{data:e})})})},Nt=()=>{const e=h(),{players:t}=i.exports.useContext(R),{settings:o}=i.exports.useContext(N),{rounds:r}=i.exports.useContext(A),a=J(r.map(s=>Fe(s,{players:t,scoringSettings:o})));return n(P,{maxWidth:"xl",sx:{pt:5,pb:8},children:r.length<=0?n(S,{sx:{width:"100%",height:"70vh",backgroundColor:s=>s.palette.grey[900],color:s=>s.palette.getContrastText(s.palette.grey[900]),display:"flex",justifyContent:"center",alignItems:"center"},children:e.chartPlaceholderText}):n(Re,{data:a.map(s=>me((l,c)=>l+(c!=null?c:0),0,s)).map((s,l)=>{var c,d;return{playerName:(d=(c=t[l])==null?void 0:c.name)!=null?d:"## NO PLAYER FOUND ##",scores:s}})})})},Ot=(e,{active:t=!0}={})=>xe("beforeunload",o=>{if(!!t)return o.preventDefault(),o.returnValue=e,e}),De=e=>({path:e}),$t=e=>window.history.pushState({},document.title,e),zt=e=>window.history.replaceState({},document.title,e),Vt=()=>{const[e,t]=i.exports.useState(location.pathname);xe("popstate",()=>t(location.pathname));const o=i.exports.useCallback(({path:a})=>{t(a),$t(a)},[]),r=i.exports.useCallback(({path:a})=>{t(a),zt(a)},[]);return[i.exports.useMemo(()=>De(e),[e]),o,o,r,r]},Ht=(e,t)=>[i.exports.useMemo(()=>De(t.currentLocation.path.slice(e.length)),[t.currentLocation.path,e]),i.exports.useCallback(({path:o})=>t.navigate({path:`${e}${o}`}),[e]),t.navigateAbsolute,i.exports.useCallback(({path:o})=>t.replace({path:`${e}${o}`}),[e]),t.replaceAbsolute],H=i.exports.createContext(null),Le=({rootPath:e="",children:t}={})=>{const o=i.exports.useContext(H),[r,a,s,l,c]=o?Ht(e,o):Vt();return n(H.Provider,{value:{rootPath:e,currentLocation:r,navigate:a,navigateAbsolute:s,replace:l,replaceAbsolute:c},children:t})},Gt=(e,t)=>Object.fromEntries(U(e.split("/"),t.split("/")).filter(([o])=>o.startsWith(":")).map(([o,r])=>[o.slice(1),r])),jt=(e,t)=>{const o=e.split("/"),r=t.split("/");return o.length>r.length?!1:U(o,r).every(Ue(Jt))},Jt=(e,t)=>e==="*"||e.startsWith(":")?!0:e===t,D=()=>{const e=i.exports.useContext(H);if(!e)throw new Error("no router context found");return e},I=e=>e,Y=({views:e})=>{const{currentLocation:t,replace:o}=D(),r=t.path,a=e.find(({path:s})=>jt(s,r));return a?"redirect"in a?(ge(()=>o({path:a.redirect})),null):n(Le,{rootPath:a.path==="/"?"":a.path,children:n(a.component,p({},Gt(a.path,r)))}):null},Ut=({players:e,onSetPlayers:t,sx:o})=>{const r=h();return u(W,{sx:p({flexGrow:1,display:"flex",gap:1,flexDirection:"column",padding:2},o),children:[n(S,{sx:{marginBottom:1},children:n(g,{variant:"outlined",startIcon:n(f,{children:"person_add"}),onClick:()=>t(V(e,a=>{a.push(Be({name:`${r.player} ${e.length+1}`}))})),children:r.addPlayer})}),n(fe,{children:n(Ce,{sx:{minWidth:320},children:n(be,{children:e.map((a,s)=>u(B,{children:[n(C,{padding:"checkbox",children:n(qe,{onClick:()=>t(e.filter(({id:l})=>l!==a.id)),disabled:e.length<=4,children:n(f,{children:"delete"})})}),n(C,{children:n(Se,{label:`${r.player} ${s+1}`,variant:"outlined",InputProps:{startAdornment:n(Ye,{position:"start",children:n(f,{sx:{marginRight:1},children:"person"})})},value:a.name,onChange:l=>t(V(e,c=>{const d=c.find(({id:m})=>m===a.id);!d||(d.name=l.target.value)})),fullWidth:!0})})]},a.id))})})})]})},_e=()=>{const{players:e,setPlayers:t}=i.exports.useContext(R);return n(Ut,{players:e,onSetPlayers:o=>t(o)})},qt=({settings:e,onSetSettings:t,sx:o})=>{const r=h();return u(W,{sx:p({flexGrow:1,display:"flex",gap:2,flexDirection:"column",padding:2},o),children:[u(_,{children:[n(E,{sx:{mb:1},children:r.chungJai}),u(M,{value:e.chungJai,exclusive:!0,onChange:(a,s)=>s&&t(T(p({},e),{chungJai:s})),fullWidth:!0,children:[n(b,{value:"half",children:r.chungJais.half}),n(b,{value:"full",children:r.chungJais.full})]})]}),u(_,{children:[n(E,{sx:{mb:1},children:r.chipValue}),u(M,{value:e.chipValue,exclusive:!0,onChange:(a,s)=>s&&t(T(p({},e),{chipValue:s})),fullWidth:!0,children:[n(b,{value:"25chicken",children:r.chipValues.c25chicken}),n(b,{value:"51",children:r.chipValues.c51}),n(b,{value:"12mosquitoes",children:r.chipValues.c12mosquitoes})]})]}),u(_,{children:[n(E,{sx:{mb:1},children:r.halfSpicyFrom}),u(M,{value:e.halfSpicyFrom,exclusive:!0,onChange:(a,s)=>s&&t(T(p({},e),{halfSpicyFrom:s})),fullWidth:!0,sx:{mb:1},children:[n(b,{value:"never",children:r.halfSpicyFroms.never}),n(b,{value:4,children:"4"})]}),n(Ke,{inputProps:{inputMode:"numeric",pattern:"[0-9]{2}"},value:["never",4].includes(e.halfSpicyFrom)?"":e.halfSpicyFrom,onChange:a=>t(T(p({},e),{halfSpicyFrom:Number.parseInt(a.target.value)||4})),placeholder:r.halfSpicyFroms.customPlaceholder,sx:{alignSelf:"flex-start",pt:1,pl:1,pr:1}})]})]})},We=()=>{const{settings:e,setSettings:t}=i.exports.useContext(N);return n(qt,{settings:e,onSetSettings:t})},Yt=()=>u(P,{maxWidth:"xl",sx:{display:"flex",flexDirection:"column",gap:3},children:[n(_e,{}),n(We,{})]}),Kt=()=>{const e=h(),{players:t}=i.exports.useContext(R),{rounds:o}=i.exports.useContext(A),{settings:r}=i.exports.useContext(N),a=i.exports.useMemo(()=>o.map(s=>Fe(s,{players:t,scoringSettings:r})),[o,t,r]);return n(P,{maxWidth:"xl",sx:{pb:8},children:n(W,{sx:{width:"100%",overflow:"hidden"},children:n(fe,{sx:{maxHeight:"65vh"},children:u(Ce,{stickyHeader:!0,"aria-label":"sticky table",children:[n(Xe,{children:u(B,{sx:{whiteSpace:"nowrap"},children:[n(C,{children:"#"}),t.map(s=>n(C,{children:s.name},s.id))]})}),n(be,{children:o.length<=0?n(B,{children:n(C,{colSpan:1+t.length,align:"center",children:e.noData})}):u(k,{children:[a.map((s,l)=>u(B,{children:[u(C,{children:["#",l+1]}),s.map((c,d)=>n(C,{sx:c?{color:({palette:m})=>m[c>0?"success":"error"].main}:{},children:c!=null?c:"-"},d))]},`round${l}`)),u(B,{sx:({palette:s})=>({bgcolor:"#122b36",color:s.info.contrastText}),ref:s=>s==null?void 0:s.scrollIntoView(),children:[n(C,{children:"Sum"}),J(a).map(s=>Qe(s.map(l=>l!=null?l:0))).map((s,l)=>n(C,{sx:s?{color:({palette:c})=>c[s>0?"success":"error"].main}:{},children:s},l))]})]})})]})})})})},Xt=(e,t)=>t.includes(e)?Ze([e],t):et(e,t),Qt=({allPlayers:e,selectedPlayerIds:t,onSelectedPlayerIdsChange:o})=>{const r=i.exports.useMemo(()=>new Set(t),[t]),a=h();return u(_,{fullWidth:!0,sx:{mt:1},children:[n(E,{focused:!1,children:a.addRoundModal.currentPlayersSelectTitle}),n(tt,{children:e.map(s=>{const l=i.exports.useMemo(()=>!r.has(s.id)&&t.length>=4,[r,t.length]);return n(nt,{disablePadding:!0,disabled:l,onClick:i.exports.useCallback(()=>{l||o(Xt(s.id,t))},[s.id,t]),children:u(rt,{role:void 0,dense:!0,children:[n(ot,{children:n(q,{edge:"start",checked:r.has(s.id),tabIndex:-1,disableRipple:!0})}),n(st,{primary:s.name})]})},s.id)})})]})},Zt=()=>{const{players:e,selectedPlayerIds:t,setSelectedPlayerIds:o,setCanNext:r}=i.exports.useContext(O);return i.exports.useEffect(()=>r(t.length===4),[t]),n(Qt,{allPlayers:e,selectedPlayerIds:t,onSelectedPlayerIdsChange:o})},en=({players:e,loserIds:t,onLoserIdsChange:o,disabled:r})=>{const a=h();return u(y,{children:[n(E,{children:a.losers}),n(M,{color:"primary",value:t,onChange:(s,l)=>o([l]),exclusive:!0,fullWidth:!0,disabled:r,children:e.map(({id:s,name:l})=>n(b,{value:s,children:l},s))})]})},tn=()=>{const e=h(),{selectedPlayers:t,winnerId:o,loserIds:r,setLoserIds:a,isSelfTouch:s,isBao:l,setIsBao:c,setCanNext:d}=i.exports.useContext(O),m=i.exports.useMemo(()=>t.filter(({id:x})=>x!==o),[t,o]);return i.exports.useEffect(()=>c(s&&l),[s,l]),i.exports.useEffect(()=>a(s&&!l?m.map(({id:x})=>x):[]),[s,l]),i.exports.useEffect(()=>d(r.length>0),[r]),u(k,{children:[s&&n(at,{children:n(ye,{control:n(q,{checked:l,onChange:(x,v)=>c(v)}),label:`${e.isBao} \u{1F35E}`})}),n(en,{loserIds:r,disabled:s&&!l,onLoserIdsChange:a,players:m})]})},nn=({farn:e,onFarnChange:t})=>{const o=h();return u(y,{direction:"row",spacing:2,alignItems:"center",flexWrap:"wrap",children:[n(Se,{value:e,label:o.farn,inputProps:{readOnly:!0},size:"small",sx:({spacing:r})=>({width:r(8)})}),n(S,{sx:{pr:1},flexGrow:1,children:n(it,{value:e,onChange:(r,a)=>t(a),step:1,max:15,marks:[3,7,13].map(r=>({value:r,label:`${r} ${o.farn}`}))})})]})},rn=({players:e,winnerId:t,onWinnerIdChange:o})=>{const r=h();return u(y,{children:[n(E,{children:r.winner}),n(M,{color:"primary",value:t,exclusive:!0,onChange:(a,s)=>{!e.map(({id:l})=>l).includes(s)||o(s)},fullWidth:!0,children:e.map(({id:a,name:s})=>n(b,{value:a,children:s},a))})]})},on=()=>{const e=h(),{selectedPlayers:t,winnerId:o,setWinnerId:r,farn:a,setFarn:s,isSelfTouch:l,setIsSelfTouch:c,setCanNext:d}=i.exports.useContext(O);return i.exports.useEffect(()=>d(!!o),[o]),u(k,{children:[n(rn,{players:t,winnerId:o,onWinnerIdChange:r}),n(nn,{farn:a,onFarnChange:s}),n(ye,{control:n(q,{checked:l,onChange:(m,x)=>c(x)}),label:`${e.isSelfTouch} \u{1F90F}`})]})},sn=3,O=i.exports.createContext({players:[],selectedPlayers:[],selectedPlayerIds:[],setSelectedPlayerIds:e=>{},farn:3,setFarn:e=>{},winnerId:void 0,setWinnerId:e=>{},loserIds:[],setLoserIds:e=>{},isBao:!1,setIsBao:e=>{},isSelfTouch:!1,setIsSelfTouch:e=>{},setCanNext:e=>{}}),an=({players:e,onAddRound:t,TriggerComponent:o})=>{var se,ae;const r=h(),a=i.exports.useMemo(()=>new Map(e.map(w=>[w.id,w])),[e]),[s,l]=i.exports.useState(!1),[c,d]=i.exports.useState(0),[m,x]=i.exports.useState(!1),[v,$e]=i.exports.useState(e.slice(0,4).map(({id:w})=>w)),[K,X]=i.exports.useState(3),[$,Q]=i.exports.useState(),[Z,ee]=i.exports.useState([]),[te,ne]=i.exports.useState(!1),[re,oe]=i.exports.useState(!1);i.exports.useEffect(()=>{!s||(d(0),X(3),Q(void 0),ee([]),ne(!1),oe(!1),x(!1))},[s]);const ze=i.exports.useMemo(()=>v.map(w=>a.get(w)),[v,a]);return u(k,{children:[n(o,{onOpenModal:()=>l(!0)}),u(lt,{open:s,onClose:()=>l(!1),fullWidth:!0,children:[n(ct,{children:r.addRound}),n(ut,{children:n(O.Provider,{value:{players:e,selectedPlayers:ze,selectedPlayerIds:v,setSelectedPlayerIds:$e,farn:K,setFarn:X,winnerId:$,setWinnerId:Q,loserIds:Z,setLoserIds:ee,isBao:te,setIsBao:ne,isSelfTouch:re,setIsSelfTouch:oe,setCanNext:x},children:(ae=(se=[()=>n(Zt,{}),()=>n(on,{}),()=>n(tn,{})])[c])==null?void 0:ae.call(se)})}),u(dt,{children:[n(g,{onClick:()=>l(!1),sx:{mr:"auto"},color:"secondary",children:r.cancel}),n(g,{disabled:c<=0,onClick:()=>d(c-1),children:r.back}),(({onClick:w,text:Ve})=>n(g,{onClick:w,disabled:!m,children:Ve}))(c<sn-1?{text:r.next,onClick:()=>d(c+1)}:{text:r.done,onClick:()=>{if(l(!1),!$)throw new Error("no winnerId found");t(It({playerIds:v,winnerId:$,loserIds:Z,farn:K,isBao:te,isSelfTouch:re}))}})]})]})]})},ln=({onOpenModal:e})=>{const t=j(),o=h(),r=ve(t.breakpoints.down("xl")).valueOf();return n(we,T(p({color:"primary"},r?{variant:"circular",sx:{position:"fixed",bottom:t.spacing(10),right:t.spacing(3),zIndex:10}}:{variant:"extended",sx:{gap:1,"&::after":{content:`"${o.addRound}"`}}}),{onClick:e,children:n(Ie,{icon:n(f,{children:"ramen_dining"})})}))},Ne=({TriggerComponent:e=ln})=>{const{players:t}=i.exports.useContext(R),{addRound:o}=i.exports.useContext(A);return n(an,{players:t,onAddRound:o,TriggerComponent:e},0)},cn=({items:e,selectedItemId:t,onSelectedItemIdChange:o})=>n(ht,{showLabels:!0,value:e.findIndex(({id:r})=>r===t),onChange:(r,a)=>{const s=e[a];if(!s)throw new Error(`cannot find item at index ${a}`);o(s.id)},sx:{width:"100%"},children:e.map(({label:r,icon:a},s)=>n(pt,{label:r,icon:a},s))}),un=e=>{const{currentLocation:t,navigate:o}=D();return[i.exports.useCallback(()=>n(Y,{views:e}),[e]),i.exports.useCallback(()=>n(cn,{items:i.exports.useMemo(()=>e.map(({path:r,label:a,icon:s})=>({id:r,label:a,icon:s})),[e]),selectedItemId:t.path,onSelectedItemIdChange:r=>o({path:r})}),[e,t,o])]},dn=()=>{const e=h(),{rounds:t}=i.exports.useContext(A);Ot(e.beforeUnloadMessage,{active:i.exports.useMemo(()=>t.length>0,[t.length])});const{currentLocation:o}=D(),[r,a]=un(i.exports.useMemo(()=>[{path:"/chart",label:e.bottomMenu.chart,icon:n(f,{children:"stacked_line_chart"}),component:Nt},{path:"/table",label:e.bottomMenu.table,icon:n(f,{children:"list_alt"}),component:Kt},{path:"/settings",label:e.bottomMenu.settings,icon:n(f,{children:"settings"}),component:Yt}],[e]));return u(S,{sx:{pb:12},children:[n(P,{maxWidth:"xl",sx:{mb:2,display:o.path==="/settings"?"none":void 0},children:n(Ne,{})}),n(r,{}),n(P,{maxWidth:"xl",sx:{position:"fixed",bottom:0,left:0,right:0,zIndex:1},children:n(a,{})})]})},hn=()=>n(W,{elevation:1,sx:{padding:3,pb:7,mt:10,textAlign:"center"},children:"Made with \u2665 by ycmjason"}),pn=(e,t)=>{const{wait:o=0,immediate:r=!1}=(()=>typeof t=="undefined"?{wait:0}:typeof t=="number"?{wait:t}:t)();r&&e();const a=window.setInterval(e,o);return()=>window.clearInterval(a)},he=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,z=e=>G(e,1)[0],G=(e,t)=>mn(e).slice(0,t),mn=([...e])=>{for(let t=0;t<e.length;t++){const o=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[o],e[o]=r}return e},xn=(e,t)=>{const[o,r]=i.exports.useState(t);return ge(()=>{(async()=>r(await e()))()}),o},Oe=()=>D().navigate,gn=e=>{const t=G(e,he(4,6)),o=Array.from({length:he(40,120)},()=>{const r=G(t,4),a=z(r),s=z(r.filter(c=>a!==c)),l=z([4,8,16,24,32,48,64]);return t.map(c=>a===c?l:s===c?-l/2:r.includes(c)?-l/4:0)});return U(t,J(o)).map(([r,a])=>({playerName:r,scores:me(mt,0,a)}))},fn=()=>{const e=xn(()=>ke(()=>import("./names.4818f342.js"),[]).then(r=>r.default),[]),[t,o]=i.exports.useState([]);return i.exports.useEffect(()=>pn(()=>o(gn(e)),{wait:5e3,immediate:!0}),[e]),t},Cn=()=>{const e=h(),t=Oe();return u(k,{children:[n(P,{maxWidth:"xl",sx:{pt:5},children:u(y,{alignItems:"center",children:[n(F,{variant:"h3",component:"h1",children:e.landingPage.heading}),n(F,{variant:"h5",component:"h2",textAlign:"center",sx:{mb:3},children:e.landingPage.subheading}),n(Re,{data:fn()}),u(g,{variant:"contained",size:"large",sx:{mt:5},onClick:()=>t({path:"/open-table"}),children:[e.openTable,n(f,{sx:{ml:1},children:"table_bar"})]})]})}),n(hn,{})]})},bn=({onOpenModal:e})=>{const t=j(),o=h(),r=ve(t.breakpoints.down("md")).valueOf()?1.8:3;return n(we,{color:"primary",variant:"extended",sx:{gap:1,transform:`scale(${r})`,boxShadow:`0px 0px 50px 10px ${t.palette.grey[600]}`,"&::after":{content:`"${o.addRound}"`}},onClick:e,size:"large",children:n(Ie,{icon:n(f,{children:"ramen_dining"})})})},Sn=({onNext:e,onBack:t})=>{const o=h(),{rounds:r}=i.exports.useContext(A);return i.exports.useEffect(()=>{r.length>0&&e()},[r]),u(y,{sx:{gap:3,alignItems:"center"},children:[n(S,{alignSelf:"flex-start",children:n(g,{onClick:t,children:o.back})}),u(F,{variant:"h3",component:"h1",sx:{display:"flex",gap:3,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[n(f,{fontSize:"inherit",children:"done"}),o.openTablePage.firstWuStep.heading]}),n(F,{variant:"h4",component:"h2",children:o.openTablePage.firstWuStep.subheading}),n(S,{sx:{display:"flex",height:"500px",maxHeight:"80vw",alignItems:"center",justifyContent:"center",width:"100%"},children:n(Ne,{TriggerComponent:bn})})]})},yn=({onBack:e,onNext:t})=>{const o=h();return u(y,{gap:3,children:[n(F,{variant:"h3",component:"h1",children:o.openTablePage.players.heading}),n(_e,{}),u(y,{sx:{alignSelf:"flex-end",flexDirection:"row",gap:2},children:[n(g,{variant:"text",size:"large",onClick:e,children:o.back}),n(g,{variant:"contained",size:"large",onClick:t,children:o.next})]})]})},vn=({onNext:e})=>{const t=h();return u(y,{sx:{gap:3},children:[n(F,{variant:"h3",component:"h1",children:t.openTablePage.scoringSettings.heading}),n(We,{}),n(y,{sx:{alignSelf:"flex-end",flexDirection:"row",gap:2},children:n(g,{variant:"contained",size:"large",onClick:e,children:t.next})})]})},wn=()=>{const{navigate:e,navigateAbsolute:t}=D();return n(P,{maxWidth:"xl",sx:{pt:5},children:n(Y,{views:[I({path:"/scoring-settings",component:()=>n(vn,{onNext:()=>e({path:"/players"})})}),I({path:"/players",component:()=>n(yn,{onBack:()=>e({path:"/scoring-settings"}),onNext:()=>e({path:"/first-wu"})})}),I({path:"/first-wu",component:()=>n(Sn,{onBack:()=>e({path:"/players"}),onNext:()=>t({path:"/game/chart"})})}),I({path:"*",redirect:"/scoring-settings"})]})})},In=()=>{const{t:e,setLocale:t,locale:o}=Ae();return{chinglish:()=>n(g,{color:"inherit",onClick:()=>t("zh-hk"),children:e.locales.zhHk}),"zh-hk":()=>n(g,{color:"inherit",onClick:()=>t("chinglish"),children:e.locales.chinglish})}[o]()},Pn=()=>{const e=h(),t=Oe();return n(S,{sx:{flexGrow:1,marginBottom:10,zIndex:999},children:n(xt,{position:"fixed",children:n(gt,{children:u(P,{maxWidth:"xl",sx:{display:"flex"},children:[n(F,{variant:"h6",component:"h1",sx:{cursor:"pointer",mr:"auto"},onClick:()=>t({path:"/"}),children:e.appName}),n(In,{})]})})})})};const Fn=()=>u(k,{children:[n(Pn,{}),n(Y,{views:[I({path:"/open-table",component:wn}),I({path:"/game",component:dn}),I({path:"/",component:Cn}),I({path:"/*",redirect:"/"})]})]}),kn=({children:e,components:t})=>t.reduceRight((o,r)=>n(r,{children:o}),n(k,{children:e})),Tn=({children:e})=>n(Rt,{children:n(Le,{children:u(ft,{theme:Ct({palette:{mode:"dark",secondary:{main:"#b7b7b7",contrastText:"#000"}}}),children:[n(bt,{}),n(kn,{components:[Dt,Pt,Lt],children:e})]})})});St();yt.render(n(vt.StrictMode,{children:n(Tn,{children:n(Fn,{})})}),document.getElementById("root"));export{An as __vite_legacy_guard,Bt as c};
