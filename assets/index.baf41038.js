var Ve=Object.defineProperty,He=Object.defineProperties;var Ge=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var ae=(e,t,r)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))le.call(t,r)&&ae(e,r,t[r]);if(_)for(var r of _(t))ie.call(t,r)&&ae(e,r,t[r]);return e},k=(e,t)=>He(e,Ge(t));var ce=(e,t)=>{var r={};for(var o in e)le.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&_)for(var o of _(e))t.indexOf(o)<0&&ie.call(e,o)&&(r[o]=e[o]);return r};import{n as pe,r as l,j as n,f as V,u as j,P as je,B as C,t as J,C as I,s as xe,z as U,a as Je,b as u,c as W,d as f,I as g,T as me,e as fe,g as ge,h as A,i as b,k as Ue,l as Ce,m as qe,F as L,o as B,p as M,q as y,v as Ye,w as Ke,x as E,y as Xe,A as Qe,S as Ze,O as et,D as tt,M as nt,E as v,G as rt,H as be,J as ye,K as ot,L as st,N as at,Q as lt,R as it,U as ve,V as Se,W as we,X as ct,Y as ut,Z as F,_ as dt,$ as ht,a0 as pt,a1 as xt,a2 as mt,a3 as ft,a4 as gt,a5 as Ct,a6 as bt}from"./vendor.1802fdef.js";function In(){import("data:text/javascript,")}const yt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}};yt();const Ie=e=>p({id:pe()},e),vt=r=>{var o=r,{playerIds:e}=o,t=ce(o,["playerIds"]);if(e.length!==4)throw new Error("playerIds.length is not 4");return Ie(p({isTied:!1,playerIds:e},t))},T=l.exports.createContext({rounds:[],addRound:()=>{},removeRound:()=>{}}),St=({children:e})=>{const[t,r]=l.exports.useState([]);return n(T.Provider,{value:{rounds:t,addRound:o=>r(V(t,a=>{a.push(Ie(o))})),removeRound:o=>r(t.filter(a=>a.id!==o))},children:e})},wt=({farn:e,halfSpicyFrom:t})=>Number((2**Math.min(e,t)*1.5**Math.max(0,Math.ceil((e-t)/2))*(4/3)**Math.max(0,Math.floor((e-t)/2))).toFixed(2)),It=({farn:e,halfSpicyFrom:t,baseScore:r,isSelfTouch:o})=>wt({farn:e,halfSpicyFrom:t})*r*(o?6:4),Pt=({score:e,chungJai:t,isLoser:r,loserCount:o,isSelfTouch:a})=>{if(a)return r?-1*e/o:0;switch(t){case"full":return r?-1*e:0;case"half":return-1*e/(r?2:4)}},Pe=(e,{players:t,scoringSettings:r})=>{if(e.isTied)return t.map(()=>0);const o=It({farn:e.farn,baseScore:{"25chicken":.25,"51":.5,"12mosquitoes":1}[r.chipValue],halfSpicyFrom:r.halfSpicyFrom==="never"?Number.POSITIVE_INFINITY:r.halfSpicyFrom,isSelfTouch:e.isSelfTouch}),a=new Set(e.playerIds);return t.map(({id:s})=>a.has(s)?e.winnerId===s?o:Pt({score:o,chungJai:r.chungJai,isLoser:e.loserIds.includes(s),loserCount:e.loserIds.length,isSelfTouch:e.isSelfTouch}):null)},Ft="modulepreload",ue={},Et="/",Fe=function(t,r){return!r||r.length===0?t():Promise.all(r.map(o=>{if(o=`${Et}${o}`,o in ue)return;ue[o]=!0;const a=o.endsWith(".css"),s=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${s}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":Ft,a||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),a)return new Promise((c,d)=>{i.addEventListener("load",c),i.addEventListener("error",d)})})).then(()=>t())},kt=e=>e;var Ee=kt({appName:"\u9EBB\u96C0\u8A08\u5206\u5668",locales:{chinglish:"Chinglish",zhHk:"\u5EE3\u6771\u8A71"},bottomMenu:{chart:"\u5716",table:"\u8868",settings:"\u8A2D\u5B9A"},round:"\u5C40",score:"\u5206\u6578",addRound:"\u98DF\u7CCA",next:"\u7E7C\u7E8C",back:"\u8FD4\u56DE",cancel:"\u53D6\u6D88",done:"\u641E\u6382",winner:"\u98DF\u8005",losers:"\u51FA\u9283\u8005",farn:"\u756A",player:"\u73A9\u5BB6",players:"\u73A9\u5BB6\u5011",selfTouch:"\u81EA\u6478",isSelfTouch:"\u81EA\u6478\uFF1F",isBao:"\u5305\uFF1F",addPlayer:"\u65B0\u589E\u73A9\u5BB6",chungJai:"\u9283\u5236",chungJais:{half:"\u534A\u9283",full:"\u5168\u9283"},chipValue:"\u7C4C\u78BC\u8A08\u6CD5",chipValues:{c25chicken:"\u4E8C\u4E94\u96DE",c51:"\u4E94\u4E00",c12mosquitoes:"\u4E00\u4E8C\u868A"},halfSpicyFrom:"\u5E7E\u756A\u958B\u59CB\u534A\u8FA3\uFF1F",halfSpicyFroms:{never:"\u5F9E\u4E0D",customPlaceholder:"\u81EA\u8A02"},noData:"\u672A\u6709\u6578\u64DA...",chartPlaceholderText:"\u98DF\u4E0B\u7CCA\u5148\u6709\u5716\u7747...",openTable:"\u958B\u6AAF",landingPage:{heading:"\u9EBB\u96C0\u8A08\u5206\u5668",subheading:"\u5514\u6D17\u7528\u8166\u7684\u5668"},openTablePage:{scoringSettings:{heading:"\u9EDE\u6253\u6CD5\uFF1F"},players:{heading:"\u73A9\u5BB6"},firstWuStep:{heading:"\u641E\u6382\u54C2\uFF01",subheading:"\u3A52\u4E0B\u9762\u500B\u63A3\u98DF\u7CCA\uFF01"}},beforeUnloadMessage:"\u771F\u4FC2\u8981\u8D70\uFF1F\u8D70\u5497\u5C31\u5187\u54C2\u5572\u8A18\u9304\u5AC1\u5566\uFF01"});const Tt={chinglish:()=>Fe(()=>import("./chinglish.36085d86.js"),["assets/chinglish.36085d86.js","assets/vendor.1802fdef.js"]),"zh-hk":()=>({default:Ee})},ke=l.exports.createContext(null),At=({children:e})=>{const[t,r]=l.exports.useState("zh-hk"),[o,a]=l.exports.useState(Ee);return l.exports.useEffect(()=>{(async()=>a((await Tt[t]()).default))()},[t]),n(ke.Provider,{value:{t:o,locale:t,setLocale:r},children:e})},Te=()=>{const e=l.exports.useContext(ke);if(!e)throw new Error("no locale context found");return e},h=()=>{const{t:e}=Te();return e},Ae=e=>p({id:pe()},e),R=l.exports.createContext({players:[],setPlayers:()=>{}}),Bt=({children:e})=>{const t=h(),[r,o]=l.exports.useState(Array.from({length:4},(a,s)=>Ae({name:`${t.player} ${s+1}`})));return n(R.Provider,{value:{players:r,setPlayers:o},children:e})},Be={chungJai:"full",chipValue:"25chicken",halfSpicyFrom:4},N=l.exports.createContext({settings:Be,setSettings:()=>{}}),Mt=({children:e})=>{const[t,r]=l.exports.useState(Be);return n(N.Provider,{value:{settings:t,setSettings:r},children:e})},Rt=({data:e})=>{var o,a,s,i;const t=j(),r=h();return n(je,{data:e.map(({playerName:c,scores:d})=>({id:c,data:d.map((x,m)=>({x:m,y:x}))})),pointLabelYOffset:-12,enableSlices:"x",theme:{background:t.palette.background.default,textColor:t.palette.text.secondary,fontSize:11,grid:{line:{stroke:t.palette.secondary.dark,strokeWidth:1}},tooltip:{container:{background:t.palette.secondary.light,color:t.palette.secondary.contrastText,fontSize:12}}},margin:{top:20,right:20,bottom:85,left:60},yScale:{type:"linear",min:-Math.max(...e.flatMap(({scores:c})=>c).map(c=>Math.abs(c!=null?c:0))),max:Math.max(...e.flatMap(({scores:c})=>c).map(c=>Math.abs(c!=null?c:0)))},colors:{scheme:"set3"},gridXValues:(a=(o=e[0])==null?void 0:o.scores.length)!=null?a:0,axisBottom:{legend:r.round,legendOffset:36,legendPosition:"middle",tickValues:(i=(s=e[0])==null?void 0:s.scores.length)!=null?i:0},axisLeft:{legend:r.score,legendOffset:-40,legendPosition:"middle"},useMesh:!0,legends:[{anchor:"bottom-left",direction:"row",justify:!1,translateX:-20,translateY:70,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)"}]})},Dt=25,Me=({data:e})=>{var t,r;return n(C,{sx:{width:"100%",overflowX:"auto",overflowY:"hidden"},children:n(C,{sx:{minWidth:`${Dt*((r=(t=e[0])==null?void 0:t.scores.length)!=null?r:1)}px`,minHeight:"600px",height:"calc(80vh - 200px)",display:"flex",alignItem:"center"},children:n(Rt,{data:e})})})},_t=()=>{const e=h(),{players:t}=l.exports.useContext(R),{settings:r}=l.exports.useContext(N),{rounds:o}=l.exports.useContext(T),a=J(o.map(s=>Pe(s,{players:t,scoringSettings:r})));return n(I,{maxWidth:"xl",sx:{pt:5,pb:8},children:o.length<=0?n(C,{sx:{width:"100%",height:"70vh",backgroundColor:s=>s.palette.grey[900],color:s=>s.palette.getContrastText(s.palette.grey[900]),display:"flex",justifyContent:"center",alignItems:"center"},children:e.chartPlaceholderText}):n(Me,{data:a.map(s=>xe((i,c)=>i+(c!=null?c:0),0,s)).map((s,i)=>{var c,d;return{playerName:(d=(c=t[i])==null?void 0:c.name)!=null?d:"## NO PLAYER FOUND ##",scores:s}})})})},Lt=(e,{active:t=!0}={})=>l.exports.useEffect(()=>{if(!t)return;const r=o=>(o.preventDefault(),o.returnValue=e,e);return window.addEventListener("beforeunload",r),()=>window.removeEventListener("beforeunload",r)},[e,t]),Re=e=>({path:e}),de=e=>window.history.pushState({},document.title,e),Wt=()=>{const[e,t]=l.exports.useState(location.pathname);return[l.exports.useMemo(()=>Re(e),[e]),l.exports.useCallback(({path:r})=>{t(r),de(r)},[]),l.exports.useCallback(({path:r})=>{t(r),de(r)},[])]},Nt=(e,t)=>[l.exports.useMemo(()=>Re(t.currentLocation.path.slice(e.length)),[t.currentLocation.path,e]),l.exports.useCallback(({path:r})=>t.navigate({path:`${e}${r}`}),[e]),t.navigateAbsolute],H=l.exports.createContext(null),De=({rootPath:e="",children:t}={})=>{const r=l.exports.useContext(H),[o,a,s]=r?Nt(e,r):Wt();return n(H.Provider,{value:{rootPath:e,currentLocation:o,navigate:a,navigateAbsolute:s},children:t})},Ot=(e,t)=>Object.fromEntries(U(e.split("/"),t.split("/")).filter(([r])=>r.startsWith(":")).map(([r,o])=>[r.slice(1),o])),$t=(e,t)=>{const r=e.split("/"),o=t.split("/");return r.length>o.length?!1:U(r,o).every(Je(zt))},zt=(e,t)=>e==="*"||e.startsWith(":")?!0:e===t,D=()=>{const e=l.exports.useContext(H);if(!e)throw new Error("no router context found");return e},w=e=>e,q=({views:e})=>{const{currentLocation:t,navigate:r}=D(),o=t.path,a=e.find(({path:s})=>$t(s,o));return a?"redirect"in a?(l.exports.useEffect(()=>{r({path:a.redirect})},[]),null):n(De,{rootPath:a.path==="/"?"":a.path,children:n(a.component,p({},Ot(a.path,o)))}):null},Vt=({players:e,onSetPlayers:t,sx:r})=>{const o=h();return u(W,{sx:p({flexGrow:1,display:"flex",gap:1,flexDirection:"column",padding:2},r),children:[n(C,{sx:{marginBottom:1},children:n(f,{variant:"outlined",startIcon:n(g,{children:"person_add"}),onClick:()=>t(V(e,a=>{a.push(Ae({name:`${o.player} ${e.length+1}`}))})),children:o.addPlayer})}),n(me,{children:n(fe,{sx:{minWidth:320},children:n(ge,{children:e.map((a,s)=>u(A,{children:[n(b,{padding:"checkbox",children:n(Ue,{onClick:()=>t(e.filter(({id:i})=>i!==a.id)),disabled:e.length<=4,children:n(g,{children:"delete"})})}),n(b,{children:n(Ce,{label:`${o.player} ${s+1}`,variant:"outlined",InputProps:{startAdornment:n(qe,{position:"start",children:n(g,{sx:{marginRight:1},children:"person"})})},value:a.name,onChange:i=>t(V(e,c=>{const d=c.find(({id:x})=>x===a.id);!d||(d.name=i.target.value)})),fullWidth:!0})})]},a.id))})})})]})},_e=()=>{const{players:e,setPlayers:t}=l.exports.useContext(R);return n(Vt,{players:e,onSetPlayers:r=>t(r)})},Ht=({settings:e,onSetSettings:t,sx:r})=>{const o=h();return u(W,{sx:p({flexGrow:1,display:"flex",gap:2,flexDirection:"column",padding:2},r),children:[u(L,{children:[n(B,{sx:{mb:1},children:o.chungJai}),u(M,{value:e.chungJai,exclusive:!0,onChange:(a,s)=>s&&t(k(p({},e),{chungJai:s})),fullWidth:!0,children:[n(y,{value:"half",children:o.chungJais.half}),n(y,{value:"full",children:o.chungJais.full})]})]}),u(L,{children:[n(B,{sx:{mb:1},children:o.chipValue}),u(M,{value:e.chipValue,exclusive:!0,onChange:(a,s)=>s&&t(k(p({},e),{chipValue:s})),fullWidth:!0,children:[n(y,{value:"25chicken",children:o.chipValues.c25chicken}),n(y,{value:"51",children:o.chipValues.c51}),n(y,{value:"12mosquitoes",children:o.chipValues.c12mosquitoes})]})]}),u(L,{children:[n(B,{sx:{mb:1},children:o.halfSpicyFrom}),u(M,{value:e.halfSpicyFrom,exclusive:!0,onChange:(a,s)=>s&&t(k(p({},e),{halfSpicyFrom:s})),fullWidth:!0,sx:{mb:1},children:[n(y,{value:"never",children:o.halfSpicyFroms.never}),n(y,{value:4,children:"4"})]}),n(Ye,{inputProps:{inputMode:"numeric",pattern:"[0-9]{2}"},value:["never",4].includes(e.halfSpicyFrom)?"":e.halfSpicyFrom,onChange:a=>t(k(p({},e),{halfSpicyFrom:Number.parseInt(a.target.value)||4})),placeholder:o.halfSpicyFroms.customPlaceholder,sx:{alignSelf:"flex-start",pt:1,pl:1,pr:1}})]})]})},Le=()=>{const{settings:e,setSettings:t}=l.exports.useContext(N);return n(Ht,{settings:e,onSetSettings:t})},Gt=()=>u(I,{maxWidth:"xl",sx:{display:"flex",flexDirection:"column",gap:3},children:[n(_e,{}),n(Le,{})]}),jt=()=>{const e=h(),{players:t}=l.exports.useContext(R),{rounds:r}=l.exports.useContext(T),{settings:o}=l.exports.useContext(N),a=l.exports.useMemo(()=>r.map(s=>Pe(s,{players:t,scoringSettings:o})),[r,t,o]);return n(I,{maxWidth:"xl",sx:{pb:8},children:n(W,{sx:{width:"100%",overflow:"hidden"},children:n(me,{sx:{maxHeight:"65vh"},children:u(fe,{stickyHeader:!0,"aria-label":"sticky table",children:[n(Ke,{children:u(A,{sx:{whiteSpace:"nowrap"},children:[n(b,{children:"#"}),t.map(s=>n(b,{children:s.name},s.id))]})}),n(ge,{children:r.length<=0?n(A,{children:n(b,{colSpan:1+t.length,align:"center",children:e.noData})}):u(E,{children:[a.map((s,i)=>u(A,{children:[u(b,{children:["#",i+1]}),s.map((c,d)=>n(b,{sx:c?{color:({palette:x})=>x[c>0?"success":"error"].main}:{},children:c!=null?c:"-"},d))]},`round${i}`)),u(A,{sx:({palette:s})=>({bgcolor:"#122b36",color:s.info.contrastText}),ref:s=>s==null?void 0:s.scrollIntoView(),children:[n(b,{children:"Sum"}),J(a).map(s=>Xe(s.map(i=>i!=null?i:0))).map((s,i)=>n(b,{sx:s?{color:({palette:c})=>c[s>0?"success":"error"].main}:{},children:s},i))]})]})})]})})})})},Jt=({allPlayers:e,selectedPlayerIds:t,onSelectedPlayerIdsChange:r})=>{const o=l.exports.useMemo(()=>new Set(t),[t]),a=l.exports.useMemo(()=>new Map(e.map(i=>[i.id,i])),[e]),s=h();return u(L,{fullWidth:!0,sx:{mt:1},children:[n(Qe,{children:s.players}),n(Ze,{multiple:!0,value:t,onChange:i=>{const c=typeof i.target.value=="string"?i.target.value.split(","):i.target.value;c.length>4||r(c)},input:n(et,{label:s.player}),renderValue:i=>n(C,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:i.map(c=>{var d;return n(tt,{label:((d=a.get(c))==null?void 0:d.name)||"error: cannot find player"},c)})}),children:e.map(({id:i,name:c})=>n(nt,{value:i,sx:({typography:d})=>({fontWeight:o.has(i)?d.fontWeightMedium:d.fontWeightRegular}),children:c},i))})]})},Ut=()=>{const{players:e,selectedPlayerIds:t,setSelectedPlayerIds:r,setCanNext:o}=l.exports.useContext(O);return l.exports.useEffect(()=>o(t.length===4),[t]),n(Jt,{allPlayers:e,selectedPlayerIds:t,onSelectedPlayerIdsChange:r})},qt=({players:e,loserIds:t,onLoserIdsChange:r,disabled:o})=>{const a=h();return u(v,{children:[n(B,{children:a.losers}),n(M,{color:"primary",value:t,onChange:(s,i)=>r([i]),exclusive:!0,fullWidth:!0,disabled:o,children:e.map(({id:s,name:i})=>n(y,{value:s,children:i},s))})]})},Yt=()=>{const e=h(),{selectedPlayers:t,winnerId:r,loserIds:o,setLoserIds:a,isSelfTouch:s,isBao:i,setIsBao:c,setCanNext:d}=l.exports.useContext(O),x=l.exports.useMemo(()=>t.filter(({id:m})=>m!==r),[t,r]);return l.exports.useEffect(()=>c(s&&i),[s,i]),l.exports.useEffect(()=>a(s&&!i?x.map(({id:m})=>m):[]),[s,i]),l.exports.useEffect(()=>d(o.length>0),[o]),u(E,{children:[s&&n(rt,{children:n(be,{control:n(ye,{checked:i,onChange:(m,P)=>c(P)}),label:`${e.isBao} \u{1F35E}`})}),n(qt,{loserIds:o,disabled:s&&!i,onLoserIdsChange:a,players:x})]})},Kt=({farn:e,onFarnChange:t})=>{const r=h();return u(v,{direction:"row",spacing:2,alignItems:"center",flexWrap:"wrap",children:[n(Ce,{value:e,label:r.farn,inputProps:{readOnly:!0},size:"small",sx:({spacing:o})=>({width:o(8)})}),n(C,{sx:{pr:1},flexGrow:1,children:n(ot,{value:e,onChange:(o,a)=>t(a),step:1,max:15,marks:[3,7,13].map(o=>({value:o,label:`${o} ${r.farn}`}))})})]})},Xt=({players:e,winnerId:t,onWinnerIdChange:r})=>{const o=h();return u(v,{children:[n(B,{children:o.winner}),n(M,{color:"primary",value:t,exclusive:!0,onChange:(a,s)=>{!e.map(({id:i})=>i).includes(s)||r(s)},fullWidth:!0,children:e.map(({id:a,name:s})=>n(y,{value:a,children:s},a))})]})},Qt=()=>{const e=h(),{selectedPlayers:t,winnerId:r,setWinnerId:o,farn:a,setFarn:s,isSelfTouch:i,setIsSelfTouch:c,setCanNext:d}=l.exports.useContext(O);return l.exports.useEffect(()=>d(!!r),[r]),u(E,{children:[n(Xt,{players:t,winnerId:r,onWinnerIdChange:o}),n(Kt,{farn:a,onFarnChange:s}),n(be,{control:n(ye,{checked:i,onChange:(x,m)=>c(m)}),label:`${e.isSelfTouch} \u{1F90F}`})]})},Zt=3,O=l.exports.createContext({players:[],selectedPlayers:[],selectedPlayerIds:[],setSelectedPlayerIds:e=>{},farn:3,setFarn:e=>{},winnerId:void 0,setWinnerId:e=>{},loserIds:[],setLoserIds:e=>{},isBao:!1,setIsBao:e=>{},isSelfTouch:!1,setIsSelfTouch:e=>{},setCanNext:e=>{}}),en=({players:e,onAddRound:t,TriggerComponent:r})=>{var oe,se;const o=h(),a=l.exports.useMemo(()=>new Map(e.map(S=>[S.id,S])),[e]),[s,i]=l.exports.useState(!1),[c,d]=l.exports.useState(0),[x,m]=l.exports.useState(!1),[P,Oe]=l.exports.useState(e.slice(0,4).map(({id:S})=>S));l.exports.useEffect(()=>{console.log(P)},[]);const[Y,K]=l.exports.useState(3),[$,X]=l.exports.useState(),[Q,Z]=l.exports.useState([]),[ee,te]=l.exports.useState(!1),[ne,re]=l.exports.useState(!1);l.exports.useEffect(()=>{!s||(d(0),K(3),X(void 0),Z([]),te(!1),re(!1),m(!1))},[s]);const $e=l.exports.useMemo(()=>P.map(S=>a.get(S)),[P,a]);return u(E,{children:[n(r,{onOpenModal:()=>i(!0)}),u(st,{open:s,onClose:()=>i(!1),fullWidth:!0,children:[n(at,{children:o.addRound}),n(lt,{children:n(O.Provider,{value:{players:e,selectedPlayers:$e,selectedPlayerIds:P,setSelectedPlayerIds:Oe,farn:Y,setFarn:K,winnerId:$,setWinnerId:X,loserIds:Q,setLoserIds:Z,isBao:ee,setIsBao:te,isSelfTouch:ne,setIsSelfTouch:re,setCanNext:m},children:(se=(oe=[()=>n(Ut,{}),()=>n(Qt,{}),()=>n(Yt,{})])[c])==null?void 0:se.call(oe)})}),u(it,{children:[n(f,{onClick:()=>i(!1),sx:{mr:"auto"},color:"secondary",children:o.cancel}),n(f,{disabled:c<=0,onClick:()=>d(c-1),children:o.back}),(({onClick:S,text:ze})=>n(f,{onClick:S,disabled:!x,children:ze}))(c<Zt-1?{text:o.next,onClick:()=>d(c+1)}:{text:o.done,onClick:()=>{if(i(!1),!$)throw new Error("no winnerId found");t(vt({playerIds:P,winnerId:$,loserIds:Q,farn:Y,isBao:ee,isSelfTouch:ne}))}})]})]})]})},tn=({onOpenModal:e})=>{const t=j(),r=h(),o=ve(t.breakpoints.down("xl")).valueOf();return n(Se,k(p({color:"primary"},o?{variant:"circular",sx:{position:"fixed",bottom:t.spacing(10),right:t.spacing(3),zIndex:10}}:{variant:"extended",sx:{gap:1,"&::after":{content:`"${r.addRound}"`}}}),{onClick:e,children:n(we,{icon:n(g,{children:"ramen_dining"})})}))},We=({TriggerComponent:e=tn})=>{const{players:t}=l.exports.useContext(R),{addRound:r}=l.exports.useContext(T);return n(en,{players:t,onAddRound:r,TriggerComponent:e},0)},nn=({items:e,selectedItemId:t,onSelectedItemIdChange:r})=>n(ct,{showLabels:!0,value:e.findIndex(({id:o})=>o===t),onChange:(o,a)=>{const s=e[a];if(!s)throw new Error(`cannot find item at index ${a}`);r(s.id)},sx:{width:"100%"},children:e.map(({label:o,icon:a},s)=>n(ut,{label:o,icon:a},s))}),rn=e=>{const{currentLocation:t,navigate:r}=D();return[l.exports.useCallback(()=>n(q,{views:e}),[e]),l.exports.useCallback(()=>n(nn,{items:l.exports.useMemo(()=>e.map(({path:o,label:a,icon:s})=>({id:o,label:a,icon:s})),[e]),selectedItemId:t.path,onSelectedItemIdChange:o=>r({path:o})}),[e,t,r])]},on=()=>{const e=h(),{rounds:t}=l.exports.useContext(T);Lt(e.beforeUnloadMessage,{active:l.exports.useMemo(()=>t.length>0,[t.length])});const{currentLocation:r}=D(),[o,a]=rn(l.exports.useMemo(()=>[{path:"/chart",label:e.bottomMenu.chart,icon:n(g,{children:"stacked_line_chart"}),component:_t},{path:"/table",label:e.bottomMenu.table,icon:n(g,{children:"list_alt"}),component:jt},{path:"/settings",label:e.bottomMenu.settings,icon:n(g,{children:"settings"}),component:Gt}],[e]));return u(C,{sx:{pb:12},children:[n(I,{maxWidth:"xl",sx:{mb:2,display:r.path==="/settings"?"none":void 0},children:n(We,{})}),n(o,{}),n(I,{maxWidth:"xl",sx:{position:"fixed",bottom:0,left:0,right:0,zIndex:1},children:n(a,{})})]})},sn=()=>n(W,{elevation:1,sx:{padding:3,pb:7,mt:10,textAlign:"center"},children:"Made with \u2665 by ycmjason"}),an=(e,t)=>{const{wait:r=0,immediate:o=!1}=(()=>typeof t=="undefined"?{wait:0}:typeof t=="number"?{wait:t}:t)();o&&e();const a=window.setInterval(e,r);return()=>window.clearInterval(a)},he=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,z=e=>G(e,1)[0],G=(e,t)=>ln(e).slice(0,t),ln=([...e])=>{for(let t=0;t<e.length;t++){const r=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[r],e[r]=o}return e},cn=(e,t)=>{const[r,o]=l.exports.useState(t);return l.exports.useEffect(()=>{(async()=>o(await e()))()},[]),r},Ne=()=>D().navigate,un=e=>{const t=G(e,he(4,6)),r=Array.from({length:he(40,120)},()=>{const o=G(t,4),a=z(o),s=z(o.filter(c=>a!==c)),i=z([4,8,16,24,32,48,64]);return t.map(c=>a===c?i:s===c?-i/2:o.includes(c)?-i/4:0)});return U(t,J(r)).map(([o,a])=>({playerName:o,scores:xe(dt,0,a)}))},dn=()=>{const e=cn(()=>Fe(()=>import("./names.4818f342.js"),[]).then(o=>o.default),[]),[t,r]=l.exports.useState([]);return l.exports.useEffect(()=>an(()=>{r(un(e))},{wait:5e3,immediate:!0}),[e]),t},hn=()=>{const e=h(),t=Ne();return u(E,{children:[n(I,{maxWidth:"xl",sx:{pt:5},children:u(v,{alignItems:"center",children:[n(F,{variant:"h3",component:"h1",children:e.landingPage.heading}),n(F,{variant:"h5",component:"h2",textAlign:"center",sx:{mb:3},children:e.landingPage.subheading}),n(Me,{data:dn()}),u(f,{variant:"contained",size:"large",sx:{mt:5},onClick:()=>t({path:"/open-table"}),children:[e.openTable,n(g,{sx:{ml:1},children:"table_bar"})]})]})}),n(sn,{})]})},pn=({onOpenModal:e})=>{const t=j(),r=h(),o=ve(t.breakpoints.down("md")).valueOf()?1.8:3;return n(Se,{color:"primary",variant:"extended",sx:{gap:1,transform:`scale(${o})`,boxShadow:`0px 0px 50px 10px ${t.palette.grey[600]}`,"&::after":{content:`"${r.addRound}"`}},onClick:e,size:"large",children:n(we,{icon:n(g,{children:"ramen_dining"})})})},xn=({onNext:e,onBack:t})=>{const r=h(),{rounds:o}=l.exports.useContext(T);return l.exports.useEffect(()=>{o.length>0&&e()},[o]),u(v,{sx:{gap:3,alignItems:"center"},children:[n(C,{alignSelf:"flex-start",children:n(f,{onClick:t,children:r.back})}),u(F,{variant:"h3",component:"h1",sx:{display:"flex",gap:3,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[n(g,{fontSize:"inherit",children:"done"}),r.openTablePage.firstWuStep.heading]}),n(F,{variant:"h4",component:"h2",children:r.openTablePage.firstWuStep.subheading}),n(C,{sx:{display:"flex",height:"500px",maxHeight:"80vw",alignItems:"center",justifyContent:"center",width:"100%"},children:n(We,{TriggerComponent:pn})})]})},mn=({onBack:e,onNext:t})=>{const r=h();return u(v,{gap:3,children:[n(F,{variant:"h3",component:"h1",children:r.openTablePage.players.heading}),n(_e,{}),u(v,{sx:{alignSelf:"flex-end",flexDirection:"row",gap:2},children:[n(f,{variant:"text",size:"large",onClick:e,children:r.back}),n(f,{variant:"contained",size:"large",onClick:t,children:r.next})]})]})},fn=({onNext:e})=>{const t=h();return u(v,{sx:{gap:3},children:[n(F,{variant:"h3",component:"h1",children:t.openTablePage.scoringSettings.heading}),n(Le,{}),n(v,{sx:{alignSelf:"flex-end",flexDirection:"row",gap:2},children:n(f,{variant:"contained",size:"large",onClick:e,children:t.next})})]})},gn=()=>{const{navigate:e,navigateAbsolute:t}=D();return n(I,{maxWidth:"xl",sx:{pt:5},children:n(q,{views:[w({path:"/scoring-settings",component:()=>n(fn,{onNext:()=>e({path:"/players"})})}),w({path:"/players",component:()=>n(mn,{onBack:()=>e({path:"/scoring-settings"}),onNext:()=>e({path:"/first-wu"})})}),w({path:"/first-wu",component:()=>n(xn,{onBack:()=>e({path:"/players"}),onNext:()=>t({path:"/game/chart"})})}),w({path:"*",redirect:"/scoring-settings"})]})})},Cn=()=>{const{t:e,setLocale:t,locale:r}=Te();return{chinglish:()=>n(f,{color:"inherit",onClick:()=>t("zh-hk"),children:e.locales.zhHk}),"zh-hk":()=>n(f,{color:"inherit",onClick:()=>t("chinglish"),children:e.locales.chinglish})}[r]()},bn=()=>{const e=h(),t=Ne();return n(C,{sx:{flexGrow:1,marginBottom:10,zIndex:999},children:n(ht,{position:"fixed",children:n(pt,{children:u(I,{maxWidth:"xl",sx:{display:"flex"},children:[n(F,{variant:"h6",component:"h1",sx:{cursor:"pointer",mr:"auto"},onClick:()=>t({path:"/"}),children:e.appName}),n(Cn,{})]})})})})};const yn=()=>u(E,{children:[n(bn,{}),n(q,{views:[w({path:"/open-table",component:gn}),w({path:"/game",component:on}),w({path:"/",component:hn}),w({path:"/*",redirect:"/"})]})]}),vn=({children:e,components:t})=>t.reduceRight((r,o)=>n(o,{children:r}),n(E,{children:e})),Sn=({children:e})=>n(At,{children:n(De,{children:u(xt,{theme:mt({palette:{mode:"dark",secondary:{main:"#b7b7b7",contrastText:"#000"}}}),children:[n(ft,{}),n(vn,{components:[Bt,St,Mt],children:e})]})})});gt();Ct.render(n(bt.StrictMode,{children:n(Sn,{children:n(yn,{})})}),document.getElementById("root"));export{In as __vite_legacy_guard,kt as c};
