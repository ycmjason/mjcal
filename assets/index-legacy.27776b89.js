!function(){var e=["playerIds"];function n(e){return function(e){if(Array.isArray(e))return f(e)}(e)||t(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function r(e,n,t,r,o,i,a){try{var c=e[i](a),l=c.value}catch(u){return void t(u)}c.done?n(l):Promise.resolve(l).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,i){var a=e.apply(n,t);function c(e){r(a,o,i,c,l,"next",e)}function l(e){r(a,o,i,c,l,"throw",e)}c(void 0)}))}}function i(e,n){return c(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||h(e,n)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){if(Array.isArray(e))return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){d(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var p=document.createElement("style");p.innerHTML="*{scrollbar-width:auto;scrollbar-color:#9c9c9c #3f3f3f}*::-webkit-scrollbar{background-color:#3f3f3f;width:8px;height:8px}*::-webkit-scrollbar-thumb{background-color:#9c9c9c;border-radius:5px}*::-webkit-scrollbar-thumb:hover{background-color:#adadad}\n",document.head.appendChild(p),System.register(["./vendor-legacy.928f29ad.js"],(function(r,u){"use strict";var d,f,p,m,x,g,v,y,b,S,w,C,I,k,P,M,T,O,W,j,N,A,F,E,L,R,z,B,V,D,J,H,_,Y,q,U,G,X,$,K,Q,Z,ee,ne,te,re,oe,ie,ae,ce,le,ue,se,de,he,fe,pe;return{setters:[function(e){d=e.n,f=e.r,p=e.j,m=e.f,x=e.u,g=e.P,v=e.B,y=e.t,b=e.C,S=e.s,w=e.a,C=e.z,I=e.b,k=e.c,P=e.d,M=e.e,T=e.g,O=e.I,W=e.T,j=e.h,N=e.i,A=e.k,F=e.l,E=e.m,L=e.o,R=e.p,z=e.F,B=e.q,V=e.v,D=e.w,J=e.x,H=e.y,_=e.A,Y=e.D,q=e.S,U=e.E,G=e.G,X=e.H,$=e.J,K=e.K,Q=e.L,Z=e.M,ee=e.N,ne=e.O,te=e.Q,re=e.R,oe=e.U,ie=e.V,ae=e.W,ce=e.X,le=e.Y,ue=e.Z,se=e._,de=e.$,he=e.a0,fe=e.a1,pe=e.a2}],execute:function(){var me=function(e){return s({id:d()},e)},xe=f.exports.createContext({rounds:[],addRound:function(){},removeRound:function(){}}),ge=function(e){var n=e.children,t=i(f.exports.useState([]),2),r=t[0],o=t[1];return p(xe.Provider,{value:{rounds:r,addRound:function(e){return o(m(r,(function(n){n.push(me(e))})))},removeRound:function(e){return o(r.filter((function(n){return n.id!==e})))}},children:n})},ve=function(e){var n=e.farn,t=e.halfSpicyFrom,r=e.baseScore,o=e.isSelfTouch;return function(e){var n=e.farn,t=e.halfSpicyFrom;return Number((Math.pow(2,Math.min(n,t))*Math.pow(1.5,Math.max(0,Math.ceil((n-t)/2)))*Math.pow(4/3,Math.max(0,Math.floor((n-t)/2)))).toFixed(2))}({farn:n,halfSpicyFrom:t})*r*(o?6:4)},ye=function(e,n){var t=n.players,r=n.scoringSettings;if(e.isTied)return t.map((function(){return 0}));var o=ve({farn:e.farn,baseScore:{"25chicken":.25,51:.5,"12mosquitoes":1}[r.chipValue],halfSpicyFrom:"never"===r.halfSpicyFrom?Number.POSITIVE_INFINITY:r.halfSpicyFrom,isSelfTouch:e.isSelfTouch}),i=new Set(e.playerIds);return t.map((function(n){var t=n.id;return i.has(t)?e.winnerId===t?o:function(e){var n=e.score,t=e.chungJai,r=e.isLoser,o=e.loserCount;if(e.isSelfTouch)return r?-1*n/o:0;switch(t){case"full":return r?-1*n:0;case"half":return-1*n/(r?2:4)}}({score:o,chungJai:r.chungJai,isLoser:e.loserIds.includes(t),loserCount:e.loserIds.length,isSelfTouch:e.isSelfTouch}):null}))},be=function(e,n){return e()},Se=r("c",(function(e){return e}))({appName:"麻雀計分器",locales:{chinglish:"Chinglish",zhHk:"廣東話"},bottomMenu:{chart:"圖",table:"表",settings:"設定"},round:"局",score:"分數",addRound:"食糊",next:"繼續",back:"返回",cancel:"取消",done:"搞掂",winner:"食家",losers:"出銃者",farn:"番",player:"玩家",selfTouch:"自摸",isSelfTouch:"自摸？",isBao:"包？",addPlayer:"新增玩家",chungJai:"銃制",chungJais:{half:"半銃",full:"全銃"},chipValue:"籌碼計法",chipValues:{c25chicken:"二五雞",c51:"五一",c12mosquitoes:"一二蚊"},halfSpicyFrom:"幾番開始半辣？",halfSpicyFroms:{never:"從不",customPlaceholder:"自訂"},noData:"未有數據...",chartPlaceholderText:"食下糊先有圖睇...",openTable:"開檯",landingPage:{heading:"麻雀計分器",subheading:"唔洗用腦既器"},openTablePage:{scoringSettings:{heading:"點打法？"},players:{heading:"玩家"},firstWuStep:{heading:"搞掂哂！",subheading:"㩒下面個掣食糊！"}},beforeUnloadMessage:"真係要走？走咗就冇哂啲記錄嫁啦！",addRoundModal:{currentPlayersSelectTitle:"邊個玩緊？"}}),we={chinglish:function(){return be((function(){return u.import("./chinglish-legacy.b0986d22.js")}))},"zh-hk":function(){return{default:Se}}},Ce=f.exports.createContext(null),Ie=function(e){var n=e.children,t=i(f.exports.useState("zh-hk"),2),r=t[0],a=t[1],c=i(f.exports.useState(Se),2),l=c[0],u=c[1];return f.exports.useEffect((function(){o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,we[r]();case 3:e.t1=e.sent.default,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[r]),p(Ce.Provider,{value:{t:l,locale:r,setLocale:a},children:n})},ke=function(){var e=f.exports.useContext(Ce);if(!e)throw new Error("no locale context found");return e},Pe=function(){return ke().t},Me=function(e){return s({id:d()},e)},Te=f.exports.createContext({players:[],setPlayers:function(){}}),Oe=function(e){var n=e.children,t=Pe(),r=i(f.exports.useState(Array.from({length:4},(function(e,n){return Me({name:"".concat(t.player," ").concat(n+1)})}))),2),o=r[0],a=r[1];return p(Te.Provider,{value:{players:o,setPlayers:a},children:n})},We={chungJai:"full",chipValue:"25chicken",halfSpicyFrom:4},je=f.exports.createContext({settings:We,setSettings:function(){}}),Ne=function(e){var n=e.children,t=i(f.exports.useState(We),2),r=t[0],o=t[1];return p(je.Provider,{value:{settings:r,setSettings:o},children:n})},Ae=function(e){var t,r,o,i,a,c=e.data,l=x(),u=Pe();return p(g,{data:f.exports.useMemo((function(){return c.map((function(e){return{id:e.playerName,data:e.scores.map((function(e,n){return{x:n,y:e}}))}})).reverse()}),[c]),pointLabelYOffset:-12,enableSlices:"x",theme:{background:l.palette.background.default,textColor:l.palette.text.secondary,fontSize:11,grid:{line:{stroke:l.palette.secondary.dark,strokeWidth:1}},tooltip:{container:{background:l.palette.secondary.light,color:l.palette.secondary.contrastText,fontSize:12}}},margin:{top:20,right:20,bottom:85,left:60},yScale:(a=f.exports.useMemo((function(){return Math.max.apply(Math,n(c.flatMap((function(e){return e.scores})).map((function(e){return Math.abs(null!=e?e:0)}))))}),[c]),{type:"linear",min:-a,max:a}),colors:{scheme:"set3"},gridXValues:null!==(t=null===(r=c[0])||void 0===r?void 0:r.scores.length)&&void 0!==t?t:0,axisBottom:{legend:u.round,legendOffset:36,legendPosition:"middle",tickValues:null!==(o=null===(i=c[0])||void 0===i?void 0:i.scores.length)&&void 0!==o?o:0},axisLeft:{legend:u.score,legendOffset:-40,legendPosition:"middle"},useMesh:!0,legends:[{anchor:"bottom-left",direction:"row",justify:!1,translateX:-20,translateY:70,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)"}]})},Fe=function(e){var n,t,r=e.data;return p(v,{sx:{width:"100%",overflowX:"auto",overflowY:"hidden"},children:p(v,{sx:{minWidth:"".concat(25*(null!==(n=null===(t=r[0])||void 0===t?void 0:t.scores.length)&&void 0!==n?n:1),"px"),minHeight:"600px",height:"calc(80vh - 200px)",display:"flex",alignItem:"center"},children:p(Ae,{data:r})})})},Ee=function(){var e=Pe(),n=f.exports.useContext(Te).players,t=f.exports.useContext(je).settings,r=f.exports.useContext(xe).rounds,o=y(r.map((function(e){return ye(e,{players:n,scoringSettings:t})})));return p(b,{maxWidth:"xl",sx:{pt:5,pb:8},children:r.length<=0?p(v,{sx:{width:"100%",height:"70vh",backgroundColor:function(e){return e.palette.grey[900]},color:function(e){return e.palette.getContrastText(e.palette.grey[900])},display:"flex",justifyContent:"center",alignItems:"center"},children:e.chartPlaceholderText}):p(Fe,{data:o.map((function(e){return S((function(e,n){return e+(null!=n?n:0)}),0,e)})).map((function(e,t){var r,o;return{playerName:null!==(r=null===(o=n[t])||void 0===o?void 0:o.name)&&void 0!==r?r:"## NO PLAYER FOUND ##",scores:e}}))})})},Le=function(e){return{path:e}},Re=function(){var e=i(f.exports.useState(location.pathname),2),n=e[0],t=e[1];w("popstate",(function(){return t(location.pathname)}));var r=f.exports.useCallback((function(e){var n=e.path;t(n),function(e){window.history.pushState({},document.title,e)}(n)}),[]),o=f.exports.useCallback((function(e){var n=e.path;t(n),function(e){window.history.replaceState({},document.title,e)}(n)}),[]);return[f.exports.useMemo((function(){return Le(n)}),[n]),r,r,o,o]},ze=function(e,n){return[f.exports.useMemo((function(){return Le(n.currentLocation.path.slice(e.length))}),[n.currentLocation.path,e]),f.exports.useCallback((function(t){var r=t.path;return n.navigate({path:"".concat(e).concat(r)})}),[e]),n.navigateAbsolute,f.exports.useCallback((function(t){var r=t.path;return n.replace({path:"".concat(e).concat(r)})}),[e]),n.replaceAbsolute]},Be=f.exports.createContext(null),Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.rootPath,t=void 0===n?"":n,r=e.children,o=f.exports.useContext(Be),a=o?ze(t,o):Re(),c=i(a,5),l=c[0],u=c[1],s=c[2],d=c[3],h=c[4];return p(Be.Provider,{value:{rootPath:t,currentLocation:l,navigate:u,navigateAbsolute:s,replace:d,replaceAbsolute:h},children:r})},De=function(e,n){return"*"===e||(!!e.startsWith(":")||e===n)},Je=function(){var e=f.exports.useContext(Be);if(!e)throw new Error("no router context found");return e},He=function(e){var n,t,r=e.views,o=Je(),a=o.currentLocation,c=o.replace,l=a.path,u=r.find((function(e){return function(e,n){var t=e.split("/"),r=n.split("/");return!(t.length>r.length)&&C(t,r).every(I(De))}(e.path,l)}));return u?"redirect"in u?(k((function(){return c({path:u.redirect})})),null):p(Ve,{rootPath:"/"===u.path?"":u.path,children:p(u.component,s({},(n=u.path,t=l,Object.fromEntries(C(n.split("/"),t.split("/")).filter((function(e){return i(e,1)[0].startsWith(":")})).map((function(e){var n=i(e,2),t=n[0],r=n[1];return[t.slice(1),r]}))))))}):null},_e=function(e){var n=e.players,t=e.onSetPlayers,r=e.sx,o=Pe();return P(M,{sx:s({flexGrow:1,display:"flex",gap:1,flexDirection:"column",padding:2},r),children:[p(v,{sx:{marginBottom:1},children:p(T,{variant:"outlined",startIcon:p(O,{children:"person_add"}),onClick:function(){return t(m(n,(function(e){e.push(Me({name:"".concat(o.player," ").concat(n.length+1)}))})))},children:o.addPlayer})}),p(W,{children:p(j,{sx:{minWidth:320},children:p(N,{children:n.map((function(e,r){return P(A,{children:[p(F,{padding:"checkbox",children:p(E,{onClick:function(){return t(n.filter((function(n){return n.id!==e.id})))},disabled:n.length<=4,children:p(O,{children:"delete"})})}),p(F,{children:p(L,{label:"".concat(o.player," ").concat(r+1),variant:"outlined",InputProps:{startAdornment:p(R,{position:"start",children:p(O,{sx:{marginRight:1},children:"person"})})},value:e.name,onChange:function(r){return t(m(n,(function(n){var t=n.find((function(n){return n.id===e.id}));t&&(t.name=r.target.value)})))},fullWidth:!0})})]},e.id)}))})})})]})},Ye=function(){var e=f.exports.useContext(Te),n=e.players,t=e.setPlayers;return p(_e,{players:n,onSetPlayers:function(e){return t(e)}})},qe=function(e){var n=e.settings,t=e.onSetSettings,r=e.sx,o=Pe();return P(M,{sx:s({flexGrow:1,display:"flex",gap:2,flexDirection:"column",padding:2},r),children:[P(z,{children:[p(B,{sx:{mb:1},children:o.chungJai}),P(V,{value:n.chungJai,exclusive:!0,onChange:function(e,r){return r&&t(s(s({},n),{},{chungJai:r}))},fullWidth:!0,children:[p(D,{value:"half",children:o.chungJais.half}),p(D,{value:"full",children:o.chungJais.full})]})]}),P(z,{children:[p(B,{sx:{mb:1},children:o.chipValue}),P(V,{value:n.chipValue,exclusive:!0,onChange:function(e,r){return r&&t(s(s({},n),{},{chipValue:r}))},fullWidth:!0,children:[p(D,{value:"25chicken",children:o.chipValues.c25chicken}),p(D,{value:"51",children:o.chipValues.c51}),p(D,{value:"12mosquitoes",children:o.chipValues.c12mosquitoes})]})]}),P(z,{children:[p(B,{sx:{mb:1},children:o.halfSpicyFrom}),P(V,{value:n.halfSpicyFrom,exclusive:!0,onChange:function(e,r){return r&&t(s(s({},n),{},{halfSpicyFrom:r}))},fullWidth:!0,sx:{mb:1},children:[p(D,{value:"never",children:o.halfSpicyFroms.never}),p(D,{value:4,children:"4"})]}),p(J,{inputProps:{inputMode:"numeric",pattern:"[0-9]{2}"},value:["never",4].includes(n.halfSpicyFrom)?"":n.halfSpicyFrom,onChange:function(e){return t(s(s({},n),{},{halfSpicyFrom:Number.parseInt(e.target.value)||4}))},placeholder:o.halfSpicyFroms.customPlaceholder,sx:{alignSelf:"flex-start",pt:1,pl:1,pr:1}})]})]})},Ue=function(){var e=f.exports.useContext(je),n=e.settings,t=e.setSettings;return p(qe,{settings:n,onSetSettings:t})},Ge=function(){return P(b,{maxWidth:"xl",sx:{display:"flex",flexDirection:"column",gap:3},children:[p(Ye,{}),p(Ue,{})]})},Xe=function(){var e=Pe(),n=f.exports.useContext(Te).players,t=f.exports.useContext(xe).rounds,r=f.exports.useContext(je).settings,o=f.exports.useMemo((function(){return t.map((function(e){return ye(e,{players:n,scoringSettings:r})}))}),[t,n,r]);return p(b,{maxWidth:"xl",sx:{pb:8},children:p(M,{sx:{width:"100%",overflow:"hidden"},children:p(W,{sx:{maxHeight:"65vh"},children:P(j,{stickyHeader:!0,"aria-label":"sticky table",children:[p(H,{children:P(A,{sx:{whiteSpace:"nowrap"},children:[p(F,{children:"#"}),n.map((function(e){return p(F,{children:e.name},e.id)}))]})}),p(N,{children:t.length<=0?p(A,{children:p(F,{colSpan:1+n.length,align:"center",children:e.noData})}):P(_,{children:[o.map((function(e,n){return P(A,{children:[P(F,{children:["#",n+1]}),e.map((function(e,n){return p(F,{sx:e?{color:function(n){return n.palette[e>0?"success":"error"].main}}:{},children:null!=e?e:"-"},n)}))]},"round".concat(n))})),P(A,{sx:function(e){return{bgcolor:"#122b36",color:e.palette.info.contrastText}},ref:function(e){return null==e?void 0:e.scrollIntoView()},children:[p(F,{children:"Sum"}),y(o).map((function(e){return Y(e.map((function(e){return null!=e?e:0})))})).map((function(e,n){return p(F,{sx:e?{color:function(n){return n.palette[e>0?"success":"error"].main}}:{},children:e},n)}))]})]})})]})})})})},$e=function(e){var n=e.allPlayers,t=e.selectedPlayerIds,r=e.onSelectedPlayerIdsChange,o=f.exports.useMemo((function(){return new Set(t)}),[t]),i=Pe();return P(z,{fullWidth:!0,sx:{mt:1},children:[p(B,{focused:!1,children:i.addRoundModal.currentPlayersSelectTitle}),p(V,{color:"primary",value:t,onChange:function(e,n){return r(n)},fullWidth:!0,orientation:"vertical",children:n.map((function(e){var n=e.id,r=e.name;return p(D,{disabled:!o.has(n)&&t.length>=4,value:n,children:r},n)}))})]})},Ke=function(){var e=f.exports.useContext(rn),n=e.players,t=e.selectedPlayerIds,r=e.setSelectedPlayerIds,o=e.setCanNext;return f.exports.useEffect((function(){return o(4===t.length)}),[t]),p($e,{allPlayers:n,selectedPlayerIds:t,onSelectedPlayerIdsChange:r})},Qe=function(e){var n=e.players,t=e.loserIds,r=e.onLoserIdsChange,o=e.disabled,i=Pe();return P(q,{children:[p(B,{children:i.losers}),p(V,{color:"primary",value:t,onChange:function(e,n){return r([n])},exclusive:!0,fullWidth:!0,orientation:"vertical",disabled:o,children:n.map((function(e){var n=e.id,t=e.name;return p(D,{value:n,children:t},n)}))})]})},Ze=function(){var e=Pe(),n=f.exports.useContext(rn),t=n.selectedPlayers,r=n.winnerId,o=n.loserIds,i=n.setLoserIds,a=n.isSelfTouch,c=n.isBao,l=n.setIsBao,u=n.setCanNext,s=f.exports.useMemo((function(){return t.filter((function(e){return e.id!==r}))}),[t,r]);return f.exports.useEffect((function(){return l(a&&c)}),[a,c]),f.exports.useEffect((function(){return i(a&&!c?s.map((function(e){return e.id})):[])}),[a,c]),f.exports.useEffect((function(){return u(o.length>0)}),[o]),P(q,{gap:2,children:[p(Qe,{loserIds:o,disabled:a&&!c,onLoserIdsChange:i,players:s}),a&&p(U,{sx:{ml:"auto"},children:p(G,{control:p(X,{checked:c,onChange:function(e,n){return l(n)}}),label:"".concat(e.isBao," 🍞")})})]})},en=function(e){var n=e.farn,t=e.onFarnChange,r=Pe();return p(q,{direction:"row",children:p(L,{InputProps:{startAdornment:p(E,{onClick:function(){return t(n-1)},children:p(O,{children:"remove"})}),endAdornment:p(E,{onClick:function(){return t(n+1)},children:p(O,{children:"add"})})},sx:{width:function(e){return e.spacing(18)}},inputProps:{inputMode:"numeric",pattern:"[0-9]*",style:{textAlign:"center"}},value:n,label:r.farn,onChange:function(e){var n=Number(e.target.value);Number.isNaN(n)||t(n)}})})},nn=function(e){var n=e.players,t=e.winnerId,r=e.onWinnerIdChange,o=Pe();return P(q,{children:[p(B,{children:o.winner}),p(V,{orientation:"vertical",color:"primary",value:t,exclusive:!0,onChange:function(e,t){n.map((function(e){return e.id})).includes(t)&&r(t)},fullWidth:!0,children:n.map((function(e){var n=e.id,t=e.name;return p(D,{value:n,children:t},n)}))})]})},tn=function(){var e=Pe(),n=f.exports.useContext(rn),t=n.selectedPlayers,r=n.winnerId,o=n.setWinnerId,i=n.farn,a=n.setFarn,c=n.isSelfTouch,l=n.setIsSelfTouch,u=n.setCanNext;return f.exports.useEffect((function(){return u(!!r)}),[r]),P(q,{gap:2,children:[p(nn,{players:t,winnerId:r,onWinnerIdChange:o}),P(q,{direction:"row-reverse",justifyContent:"flex-start",flexWrap:"wrap",gap:2,children:[p(en,{farn:i,onFarnChange:a}),p(G,{control:p(X,{checked:c,onChange:function(e,n){return l(n)}}),label:"".concat(e.isSelfTouch," 🤏")})]})]})},rn=f.exports.createContext({players:[],selectedPlayers:[],selectedPlayerIds:[],setSelectedPlayerIds:function(e){},farn:3,setFarn:function(e){},winnerId:void 0,setWinnerId:function(e){},loserIds:[],setLoserIds:function(e){},isBao:!1,setIsBao:function(e){},isSelfTouch:!1,setIsSelfTouch:function(e){},setCanNext:function(e){}}),on=function(n){var t,r,o=n.players,a=n.onAddRound,c=n.TriggerComponent,u=Pe(),d=f.exports.useMemo((function(){return new Map(o.map((function(e){return[e.id,e]})))}),[o]),h=i(f.exports.useState(!1),2),m=h[0],x=h[1],g=i(f.exports.useState(0),2),v=g[0],y=g[1],b=i(f.exports.useState(!1),2),S=b[0],w=b[1],C=i(f.exports.useState(o.slice(0,4).map((function(e){return e.id}))),2),I=C[0],k=C[1],M=i(f.exports.useState(3),2),O=M[0],W=M[1],j=i(f.exports.useState(),2),N=j[0],A=j[1],F=i(f.exports.useState([]),2),E=F[0],L=F[1],R=i(f.exports.useState(!1),2),z=R[0],B=R[1],V=i(f.exports.useState(!1),2),D=V[0],J=V[1];f.exports.useEffect((function(){m&&(y(0),W(3),A(void 0),L([]),B(!1),J(!1),w(!1))}),[m]);var H,Y=f.exports.useMemo((function(){return I.map((function(e){return d.get(e)}))}),[I,d]);return P(_,{children:[p(c,{onOpenModal:function(){return x(!0)}}),P($,{open:m,onClose:function(){return x(!1)},fullWidth:!0,children:[p(K,{children:u.addRound}),p(Q,{children:p(rn.Provider,{value:{players:o,selectedPlayers:Y,selectedPlayerIds:I,setSelectedPlayerIds:k,farn:O,setFarn:W,winnerId:N,setWinnerId:A,loserIds:E,setLoserIds:L,isBao:z,setIsBao:B,isSelfTouch:D,setIsSelfTouch:J,setCanNext:w},children:null===(t=(r=[function(){return p(Ke,{})},function(){return p(tn,{})},function(){return p(Ze,{})}])[v])||void 0===t?void 0:t.call(r)})}),P(Z,{children:[p(T,{onClick:function(){return x(!1)},sx:{mr:"auto"},color:"secondary",children:u.cancel}),p(T,{disabled:v<=0,onClick:function(){return y(v-1)},children:u.back}),(H=v<2?{text:u.next,onClick:function(){return y(v+1)}}:{text:u.done,onClick:function(){if(x(!1),!N)throw new Error("no winnerId found");a(function(n){var t=n.playerIds,r=l(n,e);if(4!==t.length)throw new Error("playerIds.length is not 4");return me(s({isTied:!1,playerIds:t},r))}({playerIds:I,winnerId:N,loserIds:E,farn:O,isBao:z,isSelfTouch:D}))}},p(T,{onClick:H.onClick,disabled:!S,children:H.text}))]})]})]})},an=function(e){var n=e.onOpenModal,t=x(),r=Pe(),o=ee(t.breakpoints.down("xl")).valueOf();return p(ne,s(s({color:"primary"},o?{variant:"circular",sx:{position:"fixed",bottom:t.spacing(10),right:t.spacing(3),zIndex:10}}:{variant:"extended",sx:{gap:1,"&::after":{content:'"'.concat(r.addRound,'"')}}}),{},{onClick:n,children:p(te,{icon:p(O,{children:"ramen_dining"})})}))},cn=function(e){var n=e.TriggerComponent,t=void 0===n?an:n,r=f.exports.useContext(Te).players,o=f.exports.useContext(xe).addRound;return p(on,{players:r,onAddRound:o,TriggerComponent:t},0)},ln=function(e){var n=e.items,t=e.selectedItemId,r=e.onSelectedItemIdChange;return p(re,{showLabels:!0,value:n.findIndex((function(e){return e.id===t})),onChange:function(e,t){var o=n[t];if(!o)throw new Error("cannot find item at index ".concat(t));r(o.id)},sx:{width:"100%"},children:n.map((function(e,n){var t=e.label,r=e.icon;return p(oe,{label:t,icon:r},n)}))})},un=function(){var e=Pe(),n=f.exports.useContext(xe).rounds;!function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).active,t=void 0===n||n;w("beforeunload",(function(n){if(t)return n.preventDefault(),n.returnValue=e,e}))}(e.beforeUnloadMessage,{active:f.exports.useMemo((function(){return n.length>0}),[n.length])});var t=Je().currentLocation,r=function(e){var n=Je(),t=n.currentLocation,r=n.navigate;return[f.exports.useCallback((function(){return p(He,{views:e})}),[e]),f.exports.useCallback((function(){return p(ln,{items:f.exports.useMemo((function(){return e.map((function(e){return{id:e.path,label:e.label,icon:e.icon}}))}),[e]),selectedItemId:t.path,onSelectedItemIdChange:function(e){return r({path:e})}})}),[e,t,r])]}(f.exports.useMemo((function(){return[{path:"/chart",label:e.bottomMenu.chart,icon:p(O,{children:"stacked_line_chart"}),component:Ee},{path:"/table",label:e.bottomMenu.table,icon:p(O,{children:"list_alt"}),component:Xe},{path:"/settings",label:e.bottomMenu.settings,icon:p(O,{children:"settings"}),component:Ge}]}),[e])),o=i(r,2),a=o[0],c=o[1];return P(v,{sx:{pb:12},children:[p(b,{maxWidth:"xl",sx:{mb:2,display:"/settings"===t.path?"none":void 0},children:p(cn,{})}),p(a,{}),p(b,{maxWidth:"xl",sx:{position:"fixed",bottom:0,left:0,right:0,zIndex:1},children:p(c,{})})]})},sn=function(){return p(M,{elevation:1,sx:{padding:3,pb:7,mt:10,textAlign:"center"},children:"Made with ♥ by ycmjason"})},dn=function(e,n){return Math.floor(Math.random()*(n-e+1))+e},hn=function(e){return fn(e,1)[0]},fn=function(e,n){return pn(e).slice(0,n)},pn=function(e){for(var n,r=(c(n=e)||t(n)||h(n)||a()).slice(0),o=0;o<r.length;o++){var i=Math.floor(Math.random()*(o+1)),l=r[o];r[o]=r[i],r[i]=l}return r},mn=function(){return Je().navigate},xn=function(){var e,n,t,r,a,c=(e=function(){return be((function(){return u.import("./names-legacy.7f69bb53.js")})).then((function(e){return e.default}))},n=[],t=i(f.exports.useState(n),2),r=t[0],a=t[1],k((function(){o(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=a,n.next=3,e();case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))()})),r),l=i(f.exports.useState([]),2),s=l[0],d=l[1];return f.exports.useEffect((function(){return function(e,n){var t=void 0===n?{wait:0}:"number"==typeof n?{wait:n}:n,r=t.wait,o=void 0===r?0:r,i=t.immediate;void 0!==i&&i&&e();var a=window.setInterval(e,o);return function(){return window.clearInterval(a)}}((function(){return d(function(e){var n=fn(e,dn(4,6)),t=Array.from({length:dn(40,120)},(function(){var e=fn(n,4),t=hn(e),r=hn(e.filter((function(e){return t!==e}))),o=hn([4,8,16,24,32,48,64]);return n.map((function(n){return t===n?o:r===n?-o/2:e.includes(n)?-o/4:0}))}));return C(n,y(t)).map((function(e){var n=i(e,2),t=n[0],r=n[1];return{playerName:t,scores:S(ae,0,r)}}))}(c))}),{wait:5e3,immediate:!0})}),[c]),s},gn=function(){var e=Pe(),n=mn();return P(_,{children:[p(b,{maxWidth:"xl",sx:{pt:5},children:P(q,{alignItems:"center",children:[p(ie,{variant:"h3",component:"h1",children:e.landingPage.heading}),p(ie,{variant:"h5",component:"h2",textAlign:"center",sx:{mb:3},children:e.landingPage.subheading}),p(Fe,{data:xn()}),P(T,{variant:"contained",size:"large",sx:{mt:5},onClick:function(){return n({path:"/open-table"})},children:[e.openTable,p(O,{sx:{ml:1},children:"table_bar"})]})]})}),p(sn,{})]})},vn=function(e){var n=e.onOpenModal,t=x(),r=Pe(),o=ee(t.breakpoints.down("md")).valueOf()?1.8:3;return p(ne,{color:"primary",variant:"extended",sx:{gap:1,transform:"scale(".concat(o,")"),boxShadow:"0px 0px 50px 10px ".concat(t.palette.grey[600]),"&::after":{content:'"'.concat(r.addRound,'"')}},onClick:n,size:"large",children:p(te,{icon:p(O,{children:"ramen_dining"})})})},yn=function(e){var n=e.onNext,t=e.onBack,r=Pe(),o=f.exports.useContext(xe).rounds;return f.exports.useEffect((function(){o.length>0&&n()}),[o]),P(q,{sx:{gap:3,alignItems:"center"},children:[p(v,{alignSelf:"flex-start",children:p(T,{onClick:t,children:r.back})}),P(ie,{variant:"h3",component:"h1",sx:{display:"flex",gap:3,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[p(O,{fontSize:"inherit",children:"done"}),r.openTablePage.firstWuStep.heading]}),p(ie,{variant:"h4",component:"h2",children:r.openTablePage.firstWuStep.subheading}),p(v,{sx:{display:"flex",height:"500px",maxHeight:"80vw",alignItems:"center",justifyContent:"center",width:"100%"},children:p(cn,{TriggerComponent:vn})})]})},bn=function(e){var n=e.onBack,t=e.onNext,r=Pe();return P(q,{gap:3,children:[p(ie,{variant:"h3",component:"h1",children:r.openTablePage.players.heading}),p(Ye,{}),P(q,{sx:{alignSelf:"flex-end",flexDirection:"row",gap:2},children:[p(T,{variant:"text",size:"large",onClick:n,children:r.back}),p(T,{variant:"contained",size:"large",onClick:t,children:r.next})]})]})},Sn=function(e){var n=e.onNext,t=Pe();return P(q,{sx:{gap:3},children:[p(ie,{variant:"h3",component:"h1",children:t.openTablePage.scoringSettings.heading}),p(Ue,{}),p(q,{sx:{alignSelf:"flex-end",flexDirection:"row",gap:2},children:p(T,{variant:"contained",size:"large",onClick:n,children:t.next})})]})},wn=function(){var e=Je(),n=e.navigate,t=e.navigateAbsolute;return p(b,{maxWidth:"xl",sx:{pt:5},children:p(He,{views:[{path:"/scoring-settings",component:function(){return p(Sn,{onNext:function(){return n({path:"/players"})}})}},{path:"/players",component:function(){return p(bn,{onBack:function(){return n({path:"/scoring-settings"})},onNext:function(){return n({path:"/first-wu"})}})}},{path:"/first-wu",component:function(){return p(yn,{onBack:function(){return n({path:"/players"})},onNext:function(){return t({path:"/game/chart"})}})}},{path:"*",redirect:"/scoring-settings"}]})})},Cn=function(){var e=ke(),n=e.t,t=e.setLocale;return{chinglish:function(){return p(T,{color:"inherit",onClick:function(){return t("zh-hk")},children:n.locales.zhHk})},"zh-hk":function(){return p(T,{color:"inherit",onClick:function(){return t("chinglish")},children:n.locales.chinglish})}}[e.locale]()},In=function(){var e=Pe(),n=mn();return p(v,{sx:{flexGrow:1,marginBottom:10,zIndex:999},children:p(ce,{position:"fixed",children:p(le,{children:P(b,{maxWidth:"xl",sx:{display:"flex"},children:[p(ie,{variant:"h6",component:"h1",sx:{cursor:"pointer",mr:"auto"},onClick:function(){return n({path:"/"})},children:e.appName}),p(Cn,{})]})})})})},kn=function(){return P(_,{children:[p(In,{}),p(He,{views:[{path:"/open-table",component:wn},{path:"/game",component:un},{path:"/",component:gn},{path:"/*",redirect:"/"}]})]})},Pn=function(e){var n=e.children;return e.components.reduceRight((function(e,n){return p(n,{children:e})}),p(_,{children:n}))},Mn=function(e){var n=e.children;return p(Ie,{children:p(Ve,{children:P(ue,{theme:se({palette:{mode:"dark",secondary:{main:"#b7b7b7",contrastText:"#000"}}}),children:[p(de,{}),p(Pn,{components:[Oe,ge,Ne],children:n})]})})})};he(),fe.render(p(pe.StrictMode,{children:p(Mn,{children:p(kn,{})})}),document.getElementById("root"))}}}))}();
