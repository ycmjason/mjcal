!function(){var e=["playerIds"];function n(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function r(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){return function(e){if(Array.isArray(e))return f(e)}(e)||a(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function c(e,n,t,r,i,o,a){try{var c=e[o](a),l=c.value}catch(u){return void t(u)}c.done?n(l):Promise.resolve(l).then(r,i)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){c(o,r,i,a,l,"next",e)}function l(e){c(o,r,i,a,l,"throw",e)}a(void 0)}))}}function u(e,n){return d(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}(e,n)||h(e,n)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e){if(Array.isArray(e))return e}function h(e,n){if(e){if("string"==typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?f(e,n):void 0}}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./vendor-legacy.b2b35540.js"],(function(t,i){"use strict";var c,f,p,x,g,m,v,y,b,S,w,C,I,k,P,M,O,T,W,j,F,E,N,B,R,A,z,L,V,D,J,_,H,Y,q,G,X,U,$,K,Q,Z,ee,ne,te,re,ie,oe,ae,ce,le,ue,se,de,he,fe,pe,xe,ge,me,ve,ye;return{setters:[function(e){c=e.r,f=e.j,p=e.u,x=e.P,g=e.a,m=e.S,v=e.B,y=e.I,b=e.b,S=e.C,w=e.T,C=e.c,I=e.z,k=e.t,P=e.s,M=e.d,O=e.e,T=e.n,W=e.F,j=e.f,F=e.g,E=e.O,N=e.h,B=e.i,R=e.M,A=e.k,z=e.l,L=e.m,V=e.o,D=e.p,J=e.q,_=e.v,H=e.w,Y=e.x,q=e.D,G=e.y,X=e.A,U=e.E,$=e.G,K=e.H,Q=e.J,Z=e.K,ee=e.L,ne=e.N,te=e.Q,re=e.R,ie=e.U,oe=e.V,ae=e.W,ce=e.X,le=e.Y,ue=e.Z,se=e._,de=e.$,he=e.a0,fe=e.a1,pe=e.a2,xe=e.a3,ge=e.a4,me=e.a5,ve=e.a6,ye=e.a7}],execute:function(){var be=function(e,n){return e()},Se=t("c",(function(e){return e}))({appName:"麻雀計分器",locales:{chinglish:"Chinglish",zhHk:"廣東話"},bottomMenu:{chart:"圖",table:"表",settings:"設定"},round:"局",score:"分數",addRound:"食糊",next:"繼續",back:"返回",cancel:"取消",done:"搞掂",winner:"食者",losers:"出銃者",farn:"番",player:"玩家",players:"玩家們",selfTouch:"自摸",isSelfTouch:"自摸？",isBao:"包？",addPlayer:"新增玩家",chungJai:"銃制",chungJais:{half:"半銃",full:"全銃"},chipValue:"籌碼計法",chipValues:{c25chicken:"二五雞",c51:"五一",c12mosquitoes:"一二蚊"},halfSpicyFrom:"幾番開始半辣？",halfSpicyFroms:{never:"從不",customPlaceholder:"自訂"},noData:"未有數據...",chartPlaceholderText:"食下糊先有圖睇...",openTable:"開檯",landingPage:{heading:"麻雀計分器",subheading:"唔洗用腦的器"},openTablePage:{scoringSettings:{heading:"點打法？"},players:{heading:"玩家"},firstWuStep:{heading:"搞掂哂！",subheading:"㩒下面個掣食糊！"}}}),we={chinglish:function(){return be((function(){return i.import("./chinglish-legacy.ded1b428.js")}))},"zh-hk":function(){return{default:Se}}},Ce=c.exports.createContext(null),Ie=function(e){var n=e.children,t=u(c.exports.useState("zh-hk"),2),r=t[0],i=t[1],o=u(c.exports.useState(Se),2),a=o[0],s=o[1];return c.exports.useEffect((function(){console.log(r),l(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,we[r]();case 3:e.t1=e.sent.default,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[r]),f(Ce.Provider,{value:{t:a,locale:r,setLocale:i},children:n})},ke=function(){var e=c.exports.useContext(Ce);if(!e)throw new Error("no locale context found");return e},Pe=function(){return ke().t},Me=function(e){var n,t,r,i,a=e.data,c=p(),l=Pe();return f(x,{data:a.map((function(e){return{id:e.playerName,data:e.scores.map((function(e,n){return{x:n,y:e}}))}})),pointLabelYOffset:-12,enableSlices:"x",theme:{background:c.palette.background.default,textColor:c.palette.text.secondary,fontSize:11,grid:{line:{stroke:c.palette.secondary.dark,strokeWidth:1}},tooltip:{container:{background:c.palette.secondary.light,color:c.palette.secondary.contrastText,fontSize:12}}},margin:{top:50,right:20,bottom:85,left:60},yScale:{type:"linear",min:-Math.max.apply(Math,o(a.flatMap((function(e){return e.scores})).map((function(e){return Math.abs(null!=e?e:0)})))),max:Math.max.apply(Math,o(a.flatMap((function(e){return e.scores})).map((function(e){return Math.abs(null!=e?e:0)}))))},colors:{scheme:"set3"},gridXValues:null!==(n=null===(t=a[0])||void 0===t?void 0:t.scores.length)&&void 0!==n?n:0,axisBottom:{legend:l.round,legendOffset:36,legendPosition:"middle",tickValues:null!==(r=null===(i=a[0])||void 0===i?void 0:i.scores.length)&&void 0!==r?r:0},axisLeft:{legend:l.score,legendOffset:-40,legendPosition:"middle"},useMesh:!0,legends:[{anchor:"bottom-left",direction:"row",justify:!1,translateX:-20,translateY:70,itemsSpacing:0,itemDirection:"left-to-right",itemWidth:80,itemHeight:20,itemOpacity:.75,symbolSize:12,symbolShape:"circle",symbolBorderColor:"rgba(0, 0, 0, .5)"}]})},Oe=function(e){var n,t,r=e.data,i=e.isShowScrollButton,o=void 0===i||i,a=c.exports.useRef(null);return g(m,{width:"100%",children:[f(v,{sx:{overflowX:"auto",overflowY:"hidden"},ref:a,children:f(v,{sx:{minWidth:"".concat(25*(null!==(n=null===(t=r[0])||void 0===t?void 0:t.scores.length)&&void 0!==n?n:1),"px"),height:"700px",maxHeight:"calc(80vh - 200px)",display:"flex",alignItem:"center"},children:f(Me,{data:r})})}),o&&g(v,{sx:{display:"flex",justifyContent:"flex-end"},children:[f(y,{onClick:function(){var e;return null===(e=a.current)||void 0===e?void 0:e.scrollBy({left:-500,behavior:"smooth"})},children:f(b,{children:"chevron_left"})}),f(y,{onClick:function(){var e;return null===(e=a.current)||void 0===e?void 0:e.scrollBy({left:500,behavior:"smooth"})},children:f(b,{children:"chevron_right"})})]})]})},Te=function(e,n){return Math.floor(Math.random()*(n-e+1))+e},We=function(e){return je(e,1)[0]},je=function(e,n){return Fe(e).slice(0,n)},Fe=function(e){for(var n,t=(d(n=e)||a(n)||h(n)||s()).slice(0),r=0;r<t.length;r++){var i=Math.floor(Math.random()*(r+1)),o=t[r];t[r]=t[i],t[i]=o}return t},Ee=function(e){return{path:e}},Ne=function(e){return window.history.pushState({},document.title,e)},Be=function(){var e=u(c.exports.useState(location.pathname),2),n=e[0],t=e[1];return[c.exports.useMemo((function(){return Ee(n)}),[n]),c.exports.useCallback((function(e){var n=e.path;t(n),Ne(n)}),[]),c.exports.useCallback((function(e){var n=e.path;t(n),Ne(n)}),[])]},Re=function(e,n){return[c.exports.useMemo((function(){return Ee(n.currentLocation.path.slice(e.length))}),[n.currentLocation.path,e]),c.exports.useCallback((function(t){var r=t.path;return n.navigate({path:"".concat(e).concat(r)})}),[e]),n.navigateAbsolute]},Ae=c.exports.createContext(null),ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.rootPath,t=void 0===n?"":n,r=e.children,i=c.exports.useContext(Ae),o=i?Re(t,i):Be(),a=u(o,3),l=a[0],s=a[1],d=a[2];return f(Ae.Provider,{value:{rootPath:t,currentLocation:l,navigate:s,navigateAbsolute:d},children:r})},Le=function(){var e=c.exports.useContext(Ae);if(!e)throw new Error("no router context found");return e},Ve=function(){return Le().navigate},De=function(){var e,n,t,r,o,a=(e=function(){return be((function(){return i.import("./names-legacy.7f69bb53.js")})).then((function(e){return e.default}))},n=[],t=u(c.exports.useState(n),2),r=t[0],o=t[1],c.exports.useEffect((function(){l(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=o,n.next=3,e();case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))()}),[]),r),s=u(c.exports.useState([]),2),d=s[0],h=s[1];return c.exports.useEffect((function(){return function(e,n){var t=void 0===n?{wait:0}:"number"==typeof n?{wait:n}:n,r=t.wait,i=void 0===r?0:r,o=t.immediate;void 0!==o&&o&&e();var a=window.setInterval(e,i);return function(){return window.clearInterval(a)}}((function(){h(function(e){var n=je(e,Te(4,6)),t=Array.from({length:Te(40,120)},(function(){var e=je(n,4),t=We(e),r=We(e.filter((function(e){return t!==e}))),i=We([4,8,16,24,32,48,64]);return n.map((function(n){return t===n?i:r===n?-i/2:e.includes(n)?-i/4:0}))}));return I(n,k(t)).map((function(e){var n=u(e,2),t=n[0],r=n[1];return{playerName:t,scores:P(M,0,r)}}))}(a))}),{wait:5e3,immediate:!0})}),[a]),d},Je=function(){var e=Pe(),n=Ve();return f(S,{maxWidth:"xl",sx:{pt:5},children:g(m,{alignItems:"center",children:[f(w,{variant:"h3",component:"h1",children:e.landingPage.heading}),f(w,{variant:"h5",component:"h2",textAlign:"center",children:e.landingPage.subheading}),f(Oe,{data:De(),isShowScrollButton:!1}),g(C,{variant:"contained",size:"large",sx:{mt:3},onClick:function(){return n({path:"/open-table"})},children:[e.openTable,f(b,{sx:{ml:1},children:"table_bar"})]})]})})},_e=function(e,n){return"*"===e||(!!e.startsWith(":")||e===n)},He=function(e){var n,t,i=e.views,o=Le(),a=o.currentLocation,l=o.navigate,s=a.path,d=i.find((function(e){return function(e,n){var t=e.split("/"),r=n.split("/");return!(t.length>r.length)&&I(t,r).every(O(_e))}(e.path,s)}));return d?"redirect"in d?(c.exports.useEffect((function(){l({path:d.redirect})}),[]),null):f(ze,{rootPath:"/"===d.path?"":d.path,children:f(d.component,r({},(n=d.path,t=s,Object.fromEntries(I(n.split("/"),t.split("/")).filter((function(e){return u(e,1)[0].startsWith(":")})).map((function(e){var n=u(e,2),t=n[0],r=n[1];return[t.slice(1),r]}))))))}):null},Ye=function(e){return r({id:T()},e)},qe=c.exports.createContext({players:[],setPlayers:function(){}}),Ge=function(e){var n=e.children,t=Pe(),r=u(c.exports.useState(Array.from({length:4},(function(e,n){return Ye({name:"".concat(t.player," ").concat(n+1)})}))),2),i=r[0],o=r[1];return f(qe.Provider,{value:{players:i,setPlayers:o},children:n})},Xe=function(e){return r({id:T()},e)},Ue=function(e){var n=e.allPlayers,t=e.selectedPlayerIds,r=e.onSelectedPlayerIdsChange,i=c.exports.useMemo((function(){return new Set(t)}),[t]),o=c.exports.useMemo((function(){return new Map(n.map((function(e){return[e.id,e]})))}),[n]),a=Pe();return g(W,{fullWidth:!0,sx:{mt:1},children:[f(j,{children:a.players}),f(F,{multiple:!0,value:t,onChange:function(e){var n="string"==typeof e.target.value?e.target.value.split(","):e.target.value;n.length>4||r(n)},input:f(E,{label:a.player}),renderValue:function(e){return f(N,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:e.map((function(e){var n;return f(B,{label:(null===(n=o.get(e))||void 0===n?void 0:n.name)||"error: cannot find player"},e)}))})},children:n.map((function(e){var n=e.id,t=e.name;return f(R,{value:n,sx:function(e){var t=e.typography;return{fontWeight:i.has(n)?t.fontWeightMedium:t.fontWeightRegular}},children:t},n)}))})]})},$e=function(){var e=c.exports.useContext(tn),n=e.players,t=e.selectedPlayerIds,r=e.setSelectedPlayerIds,i=e.setCanNext;return c.exports.useEffect((function(){return i(4===t.length)}),[t]),f(Ue,{allPlayers:n,selectedPlayerIds:t,onSelectedPlayerIdsChange:r})},Ke=function(e){var n=e.players,t=e.loserIds,r=e.onLoserIdsChange,i=e.disabled,o=Pe();return g(m,{children:[f(A,{children:o.losers}),f(z,{color:"primary",value:t,onChange:function(e,n){return r([n])},exclusive:!0,fullWidth:!0,disabled:i,children:n.map((function(e){var n=e.id,t=e.name;return f(L,{value:n,children:t},n)}))})]})},Qe=function(){var e=Pe(),n=c.exports.useContext(tn),t=n.selectedPlayers,r=n.winnerId,i=n.loserIds,o=n.setLoserIds,a=n.isSelfTouch,l=n.isBao,u=n.setIsBao,s=n.setCanNext,d=c.exports.useMemo((function(){return t.filter((function(e){return e.id!==r}))}),[t,r]);return c.exports.useEffect((function(){return u(a&&l)}),[a,l]),c.exports.useEffect((function(){return o(a&&!l?d.map((function(e){return e.id})):[])}),[a,l]),c.exports.useEffect((function(){return s(i.length>0)}),[i]),g(V,{children:[a&&f(D,{children:f(J,{control:f(_,{checked:l,onChange:function(e,n){return u(n)}}),label:"".concat(e.isBao," 🍞")})}),f(Ke,{loserIds:i,disabled:a&&!l,onLoserIdsChange:o,players:d})]})},Ze=function(e){var n=e.farn,t=e.onFarnChange,r=Pe();return g(m,{direction:"row",spacing:2,alignItems:"center",flexWrap:"wrap",children:[f(H,{value:n,label:r.farn,inputProps:{readOnly:!0},size:"small",sx:function(e){return{width:(0,e.spacing)(8)}}}),f(N,{sx:{pr:1},flexGrow:1,children:f(Y,{value:n,onChange:function(e,n){return t(n)},step:1,max:15,marks:[3,7,13].map((function(e){return{value:e,label:"".concat(e," ").concat(r.farn)}}))})})]})},en=function(e){var n=e.players,t=e.winnerId,r=e.onWinnerIdChange,i=Pe();return g(m,{children:[f(A,{children:i.winner}),f(z,{color:"primary",value:t,exclusive:!0,onChange:function(e,t){n.map((function(e){return e.id})).includes(t)&&r(t)},fullWidth:!0,children:n.map((function(e){var n=e.id,t=e.name;return f(L,{value:n,children:t},n)}))})]})},nn=function(){var e=Pe(),n=c.exports.useContext(tn),t=n.selectedPlayers,r=n.winnerId,i=n.setWinnerId,o=n.farn,a=n.setFarn,l=n.isSelfTouch,u=n.setIsSelfTouch,s=n.setCanNext;return c.exports.useEffect((function(){return s(!!r)}),[r]),g(V,{children:[f(en,{players:t,winnerId:r,onWinnerIdChange:i}),f(Ze,{farn:o,onFarnChange:a}),f(J,{control:f(_,{checked:l,onChange:function(e,n){return u(n)}}),label:"".concat(e.isSelfTouch," 🤏")})]})},tn=c.exports.createContext({players:[],selectedPlayers:[],selectedPlayerIds:[],setSelectedPlayerIds:function(e){},farn:3,setFarn:function(e){},winnerId:void 0,setWinnerId:function(e){},loserIds:[],setLoserIds:function(e){},isBao:!1,setIsBao:function(e){},isSelfTouch:!1,setIsSelfTouch:function(e){},setCanNext:function(e){}}),rn=function(t){var i,o,a=t.players,l=t.onAddRound,s=t.TriggerComponent,d=Pe(),h=c.exports.useMemo((function(){return new Map(a.map((function(e){return[e.id,e]})))}),[a]),p=u(c.exports.useState(!1),2),x=p[0],m=p[1],v=u(c.exports.useState(0),2),y=v[0],b=v[1],S=u(c.exports.useState(!1),2),w=S[0],I=S[1],k=u(c.exports.useState(a.slice(0,4).map((function(e){return e.id}))),2),P=k[0],M=k[1],O=u(c.exports.useState(3),2),T=O[0],W=O[1],j=u(c.exports.useState(),2),F=j[0],E=j[1],N=u(c.exports.useState([]),2),B=N[0],R=N[1],A=u(c.exports.useState(!1),2),z=A[0],L=A[1],D=u(c.exports.useState(!1),2),J=D[0],_=D[1];c.exports.useEffect((function(){x&&(b(0),W(3),E(void 0),R([]),L(!1),_(!1),I(!1))}),[x]);var H,Y=c.exports.useMemo((function(){return P.map((function(e){return h.get(e)}))}),[P,h]);return g(V,{children:[f(s,{onOpenModal:function(){return m(!0)}}),g(q,{open:x,onClose:function(){return m(!1)},fullWidth:!0,children:[f(G,{children:d.addRound}),f(X,{children:f(tn.Provider,{value:{players:a,selectedPlayers:Y,selectedPlayerIds:P,setSelectedPlayerIds:M,farn:T,setFarn:W,winnerId:F,setWinnerId:E,loserIds:B,setLoserIds:R,isBao:z,setIsBao:L,isSelfTouch:J,setIsSelfTouch:_,setCanNext:I},children:null===(i=(o=[function(){return f($e,{})},function(){return f(nn,{})},function(){return f(Qe,{})}])[y])||void 0===i?void 0:i.call(o)})}),g(U,{children:[f(C,{onClick:function(){return m(!1)},sx:{mr:"auto"},color:"secondary",children:d.cancel}),f(C,{disabled:y<=0,onClick:function(){return b(y-1)},children:d.back}),(H=y<2?{text:d.next,onClick:function(){return b(y+1)}}:{text:d.done,onClick:function(){if(m(!1),!F)throw new Error("no winnerId found");l(function(t){var i=t.playerIds,o=n(t,e);if(4!==i.length)throw new Error("playerIds.length is not 4");return Xe(r({isTied:!1,playerIds:i},o))}({playerIds:P,winnerId:F,loserIds:B,farn:T,isBao:z,isSelfTouch:J}))}},f(C,{onClick:H.onClick,disabled:!w,children:H.text}))]})]})]})},on=function(e){var n=e.onOpenModal,t=p(),i=Pe(),o=$(t.breakpoints.down("xl")).valueOf();return f(K,r(r({color:"primary"},o?{variant:"circular",sx:{position:"fixed",bottom:t.spacing(10),right:t.spacing(3),zIndex:1}}:{variant:"extended",sx:{gap:1,"&::after":{content:'"'.concat(i.addRound,'"')}}}),{},{onClick:n,children:f(Q,{icon:f(b,{children:"ramen_dining"})})}))},an=c.exports.createContext({rounds:[],addRound:function(){},removeRound:function(){}}),cn=function(e){var n=e.children,t=u(c.exports.useState([]),2),r=t[0],i=t[1];return f(an.Provider,{value:{rounds:r,addRound:function(e){return i(Z(r,(function(n){n.push(Xe(e))})))},removeRound:function(e){return i(r.filter((function(n){return n.id!==e})))}},children:n})},ln=function(e){var n=e.TriggerComponent,t=void 0===n?on:n,r=c.exports.useContext(qe).players,i=c.exports.useContext(an).addRound;return f(rn,{players:r,onAddRound:i,TriggerComponent:t})},un=function(e){var n=e.onOpenModal,t=p(),r=Pe(),i=$(t.breakpoints.down("md")).valueOf()?1.8:3;return f(K,{color:"primary",variant:"extended",sx:{gap:1,transform:"scale(".concat(i,")"),boxShadow:"0px 0px 50px 10px ".concat(t.palette.grey[600]),"&::after":{content:'"'.concat(r.addRound,'"')}},onClick:n,size:"large",children:f(Q,{icon:f(b,{children:"ramen_dining"})})})},sn=function(e){var n=e.onNext,t=e.onBack,r=Pe(),i=c.exports.useContext(an).rounds;return c.exports.useEffect((function(){i.length>0&&n()}),[i]),g(m,{sx:{gap:3,alignItems:"center"},children:[f(N,{alignSelf:"flex-start",children:f(C,{onClick:t,children:r.back})}),g(w,{variant:"h3",component:"h1",sx:{display:"flex",gap:3,alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[f(b,{fontSize:"inherit",children:"done"}),r.openTablePage.firstWuStep.heading]}),f(w,{variant:"h4",component:"h2",children:r.openTablePage.firstWuStep.subheading}),f(N,{sx:{display:"flex",height:"500px",maxHeight:"80vw",alignItems:"center",justifyContent:"center",width:"100%"},children:f(ln,{TriggerComponent:un})})]})},dn=function(e){var n=e.players,t=e.onSetPlayers,i=e.sx,o=Pe();return g(ee,{sx:r({flexGrow:1,display:"flex",gap:1,flexDirection:"column",padding:2},i),children:[f(N,{sx:{marginBottom:1},children:f(C,{variant:"outlined",startIcon:f(b,{children:"person_add"}),onClick:function(){return t(Z(n,(function(e){e.push(Ye({name:"".concat(o.player," ").concat(n.length+1)}))})))},children:o.addPlayer})}),f(ne,{children:f(te,{sx:{minWidth:320},children:f(re,{children:n.map((function(e,r){return g(ie,{children:[f(oe,{padding:"checkbox",children:f(y,{onClick:function(){return t(n.filter((function(n){return n.id!==e.id})))},disabled:n.length<=4,children:f(b,{children:"delete"})})}),f(oe,{children:f(H,{label:"".concat(o.player," ").concat(r+1),variant:"outlined",InputProps:{startAdornment:f(ae,{position:"start",children:f(b,{sx:{marginRight:1},children:"person"})})},value:e.name,onChange:function(r){return t(Z(n,(function(n){var t=n.find((function(n){return n.id===e.id}));t&&(t.name=r.target.value)})))},fullWidth:!0})})]},e.id)}))})})})]})},hn=function(){var e=c.exports.useContext(qe),n=e.players,t=e.setPlayers;return f(dn,{players:n,onSetPlayers:function(e){return t(e)}})},fn=function(e){var n=e.onBack,t=e.onNext,r=Pe();return g(m,{gap:3,children:[f(w,{variant:"h3",component:"h1",children:r.openTablePage.players.heading}),f(hn,{}),g(m,{sx:{alignSelf:"flex-end",flexDirection:"row",gap:2},children:[f(C,{variant:"text",size:"large",onClick:n,children:r.back}),f(C,{variant:"contained",size:"large",onClick:t,children:r.next})]})]})},pn=function(e){var n=e.settings,t=e.onSetSettings,i=e.sx,o=Pe();return g(ee,{sx:r({flexGrow:1,display:"flex",gap:2,flexDirection:"column",padding:2},i),children:[g(W,{children:[f(A,{sx:{mb:1},children:o.chungJai}),g(z,{value:n.chungJai,exclusive:!0,onChange:function(e,i){return i&&t(r(r({},n),{},{chungJai:i}))},fullWidth:!0,children:[f(L,{value:"half",children:o.chungJais.half}),f(L,{value:"full",children:o.chungJais.full})]})]}),g(W,{children:[f(A,{sx:{mb:1},children:o.chipValue}),g(z,{value:n.chipValue,exclusive:!0,onChange:function(e,i){return i&&t(r(r({},n),{},{chipValue:i}))},fullWidth:!0,children:[f(L,{value:"25chicken",children:o.chipValues.c25chicken}),f(L,{value:"51",children:o.chipValues.c25chicken}),f(L,{value:"12mosquitoes",children:o.chipValues.c12mosquitoes})]})]}),g(W,{children:[f(A,{sx:{mb:1},children:o.halfSpicyFrom}),g(z,{value:n.halfSpicyFrom,exclusive:!0,onChange:function(e,i){return i&&t(r(r({},n),{},{halfSpicyFrom:i}))},fullWidth:!0,sx:{mb:1},children:[f(L,{value:"never",children:o.halfSpicyFroms.never}),f(L,{value:4,children:"4"})]}),f(ce,{inputProps:{inputMode:"numeric",pattern:"[0-9]{2}"},value:["never",4].includes(n.halfSpicyFrom)?"":n.halfSpicyFrom,onChange:function(e){return t(r(r({},n),{},{halfSpicyFrom:Number.parseInt(e.target.value)||4}))},placeholder:o.halfSpicyFroms.customPlaceholder,sx:{alignSelf:"flex-start",pt:1,pl:1,pr:1}})]})]})},xn={chungJai:"full",chipValue:"25chicken",halfSpicyFrom:4},gn=c.exports.createContext({settings:xn,setSettings:function(){}}),mn=function(e){var n=e.children,t=u(c.exports.useState(xn),2),r=t[0],i=t[1];return f(gn.Provider,{value:{settings:r,setSettings:i},children:n})},vn=function(){var e=c.exports.useContext(gn),n=e.settings,t=e.setSettings;return f(pn,{settings:n,onSetSettings:t})},yn=function(e){var n=e.onNext,t=Pe();return g(m,{sx:{gap:3},children:[f(w,{variant:"h3",component:"h1",children:t.openTablePage.scoringSettings.heading}),f(vn,{}),f(m,{sx:{alignSelf:"flex-end",flexDirection:"row",gap:2},children:f(C,{variant:"contained",size:"large",onClick:n,children:t.next})})]})},bn=function(){var e=Le(),n=e.navigate,t=e.navigateAbsolute;return f(S,{maxWidth:"xl",sx:{pt:5},children:f(He,{views:[{path:"/scoring-settings",component:function(){return f(yn,{onNext:function(){return n({path:"/players"})}})}},{path:"/players",component:function(){return f(fn,{onBack:function(){return n({path:"/scoring-settings"})},onNext:function(){return n({path:"/first-wu"})}})}},{path:"/first-wu",component:function(){return f(sn,{onBack:function(){return n({path:"/players"})},onNext:function(){return t({path:"/game/chart"})}})}},{path:"*",redirect:"/scoring-settings"}]})})},Sn=function(){var e=ke(),n=e.t,t=e.setLocale,r=e.locale;return console.log(r),{chinglish:function(){return f(C,{color:"inherit",onClick:function(){return t("zh-hk")},children:n.locales.zhHk})},"zh-hk":function(){return f(C,{color:"inherit",onClick:function(){return t("chinglish")},children:n.locales.chinglish})}}[r]()},wn=function(){var e=Pe(),n=Ve();return f(N,{sx:{flexGrow:1,marginBottom:10},children:f(le,{position:"fixed",children:f(ue,{children:g(S,{maxWidth:"xl",sx:{display:"flex"},children:[f(w,{variant:"h6",component:"h1",sx:{cursor:"pointer",mr:"auto"},onClick:function(){return n({path:"/"})},children:e.appName}),f(Sn,{})]})})})})},Cn=function(e){var n=e.farn,t=e.halfSpicyFrom,r=e.baseScore,i=e.isSelfTouch;return function(e){var n=e.farn,t=e.halfSpicyFrom;return Number((Math.pow(2,Math.min(n,t))*Math.pow(1.5,Math.max(0,Math.ceil((n-t)/2)))*Math.pow(4/3,Math.max(0,Math.floor((n-t)/2)))).toFixed(2))}({farn:n,halfSpicyFrom:t})*r*(i?6:4)},In=function(e,n){var t=n.players,r=n.scoringSettings;if(e.isTied)return t.map((function(){return 0}));var i=Cn({farn:e.farn,baseScore:{"25chicken":.25,51:.5,"12mosquitoes":1}[r.chipValue],halfSpicyFrom:"never"===r.halfSpicyFrom?Number.POSITIVE_INFINITY:r.halfSpicyFrom,isSelfTouch:e.isSelfTouch}),o=new Set(e.playerIds);return t.map((function(n){var t=n.id;return o.has(t)?e.winnerId===t?i:function(e){var n=e.score,t=e.chungJai,r=e.isLoser,i=e.loserCount;if(e.isSelfTouch)return r?-1*n/i:0;switch(t){case"full":return r?-1*n:0;case"half":return-1*n/(r?2:4)}}({score:i,chungJai:r.chungJai,isLoser:e.loserIds.includes(t),loserCount:e.loserIds.length,isSelfTouch:e.isSelfTouch}):null}))},kn=function(){var e=Pe(),n=c.exports.useContext(qe).players,t=c.exports.useContext(gn).settings,r=c.exports.useContext(an).rounds,i=k(r.map((function(e){return In(e,{players:n,scoringSettings:t})})));return f(S,{maxWidth:"xl",children:r.length<=0?f(N,{sx:{width:"100%",height:"70vh",backgroundColor:function(e){return e.palette.grey[900]},color:function(e){return e.palette.getContrastText(e.palette.grey[900])},display:"flex",justifyContent:"center",alignItems:"center"},children:e.chartPlaceholderText}):f(Oe,{data:i.map((function(e){return P((function(e,n){return e+(null!=n?n:0)}),0,e)})).map((function(e,t){var r,i;return{playerName:null!==(r=null===(i=n[t])||void 0===i?void 0:i.name)&&void 0!==r?r:"## NO PLAYER FOUND ##",scores:e}}))})})},Pn=function(){return g(S,{maxWidth:"xl",sx:{display:"flex",flexDirection:"column",gap:3},children:[f(hn,{}),f(vn,{})]})},Mn=function(){var e=Pe(),n=c.exports.useContext(qe).players,t=c.exports.useContext(an).rounds,r=c.exports.useContext(gn).settings,i=c.exports.useMemo((function(){return t.map((function(e){return In(e,{players:n,scoringSettings:r})}))}),[t,n,r]);return f(S,{maxWidth:"xl",children:f(ee,{sx:{width:"100%",overflow:"hidden"},children:f(ne,{sx:{maxHeight:"65vh"},children:g(te,{stickyHeader:!0,"aria-label":"sticky table",children:[f(se,{children:g(ie,{sx:{whiteSpace:"nowrap"},children:[f(oe,{children:"#"}),n.map((function(e){return f(oe,{children:e.name},e.id)}))]})}),f(re,{children:t.length<=0?f(ie,{children:f(oe,{colSpan:1+n.length,align:"center",children:e.noData})}):g(V,{children:[i.map((function(e,n){return g(ie,{children:[g(oe,{children:["#",n+1]}),e.map((function(e,n){return f(oe,{sx:e?{color:function(n){return n.palette[e>0?"success":"error"].main}}:{},children:null!=e?e:"-"},n)}))]},"round".concat(n))})),g(ie,{sx:function(e){return{bgcolor:"#122b36",color:e.palette.info.contrastText}},ref:function(e){return null==e?void 0:e.scrollIntoView()},children:[f(oe,{children:"Sum"}),k(i).map((function(e){return de(e.map((function(e){return null!=e?e:0})))})).map((function(e,n){return f(oe,{sx:e?{color:function(n){return n.palette[e>0?"success":"error"].main}}:{},children:e},n)}))]})]})})]})})})})},On=function(e){var n=e.PreView,t=e.views,r=Le(),i=r.currentLocation,a=r.navigate,l=c.exports.useMemo((function(){var e;return null===(e=t.find((function(e){return e.path===i.path})))||void 0===e?void 0:e.id}),[].concat(o(t.map((function(e){return e.id}))),o(t.map((function(e){return e.path}))),[i.path]));return g(N,{sx:{pb:12},children:[f(n,{viewId:l}),f(He,{views:t}),f(S,{maxWidth:"xl",sx:{position:"fixed",bottom:0,left:0,right:0,zIndex:1},children:f(he,{showLabels:!0,value:t.findIndex((function(e){return e.id===l})),onChange:function(e,n){var r,i=null===(r=t[n])||void 0===r?void 0:r.path;i&&a({path:i})},sx:{width:"100%"},children:t.map((function(e,n){var t=e.label,r=e.icon;return f(fe,{label:t,icon:r},n)}))})})]})},Tn=function(){var e=Pe();return f(On,{PreView:function(e){var n=e.viewId;return f(S,{maxWidth:"xl",sx:{mb:2,display:"settings"===n?"none":void 0},children:f(ln,{})})},views:c.exports.useMemo((function(){return[{id:"chart",path:"/chart",label:e.bottomMenu.chart,icon:f(b,{children:"stacked_line_chart"}),component:kn},{id:"table",path:"/table",label:e.bottomMenu.table,icon:f(b,{children:"list_alt"}),component:Mn},{id:"settings",path:"/settings",label:e.bottomMenu.settings,icon:f(b,{children:"settings"}),component:Pn}]}),[e])})},Wn=function(){return g(V,{children:[f(wn,{}),f(He,{views:[{path:"/open-table",component:bn},{path:"/game",component:Tn},{path:"/",component:Je},{path:"/*",redirect:"/"}]})]})},jn=function(e){var n=e.children;return e.components.reduceRight((function(e,n){return f(n,{children:e})}),f(V,{children:n}))},Fn=function(e){var n=e.children;return f(Ie,{children:f(ze,{children:g(pe,{theme:xe({palette:{mode:"dark",secondary:{main:"#b7b7b7",dark:"#5e5e5e",contrastText:"#000"}}}),children:[f(ge,{}),f(jn,{components:[Ge,cn,mn],children:n})]})})})};me(),ve.render(f(ye.StrictMode,{children:f(Fn,{children:f(Wn,{})})}),document.getElementById("root"))}}}))}();
