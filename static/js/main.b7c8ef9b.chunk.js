(this.webpackJsonpwookflix=this.webpackJsonpwookflix||[]).push([[0],{127:function(n,t,e){"use strict";e.r(t);var i=e(9),o=e(0),r=e.n(o),c=e(45),a=e.n(c),l=e(36),s=e(17),d=e(11),b=e(5),h=e(7),u=e(132),j=e(134),p=e(135),v=e(87),g=e(133),x=e(28);function O(n,t){return"https://image.tmdb.org/t/p/".concat(t||"original","/").concat(n)}var f="10923b261ba94d897ac6b81148314a3f",m="https://api.themoviedb.org/3";function w(){return fetch("".concat(m,"/movie/now_playing?api_key=").concat(f)).then((function(n){return n.json()}))}function k(){return fetch("".concat(m,"/tv/on_the_air?api_key=").concat(f,"&language=en-US&page=1")).then((function(n){return n.json()}))}function y(){return fetch("".concat(m,"/tv/popular?api_key=").concat(f,"&language=en-US&page=1")).then((function(n){return n.json()}))}function C(){return fetch("".concat(m,"/tv/top_rated?api_key=").concat(f,"&language=en-US&page=1")).then((function(n){return n.json()}))}var S,z,L,_,I,T,P,E,M,R,q,H,U,Y=e(2),Q=Object(h.c)(u.a.svg)(S||(S=Object(i.a)(["\n  width: 50px;\n  height: 50px;\n  padding: 10px;\n"]))),B=h.c.div(z||(z=Object(i.a)(["\n  padding: 10px;\n  position: absolute;\n  top: 0;\n  right: 0;\n"]))),F=Object(h.c)(u.a.img)(L||(L=Object(i.a)(["\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n"]))),A=Object(h.c)(u.a.svg)(_||(_=Object(i.a)(["\n  width: 30px;\n  height: 30px;\n  background-color: transparent;\n\n  cursor: pointer;\n"]))),W=Object(h.c)(u.a.div)(I||(I=Object(i.a)(["\n  background-color: #3d3d3d;\n  background-size: cover;\n"]))),J=Object(h.c)(u.a.div)(T||(T=Object(i.a)(["\n  width: 100%;\n  padding: 200px 60px 30px 60px;\n  display: grid;\n  gap: 15px;\n  grid-template-columns: repeat(4, 1fr);\n"]))),X=h.c.h1(P||(P=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),D=Object(h.c)(u.a.div)(E||(E=Object(i.a)(["\n  height: 250px;\n  background-image: url(",");\n  background-size: cover;\n  cursor: pointer;\n"])),(function(n){return n.bgPhoto})),N=Object(h.c)(u.a.div)(M||(M=Object(i.a)(["\n  padding: 10px;\n  background-color: ",";\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  text-align: center;\n  h4: {\n    text-align: center;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.black.lighter})),Z={start:{scale:1},hover:{scale:1.2,transition:{delay:.5,duaration:.1,type:"tween"}}},G={hover:{opacity:1,transition:{delay:.5,duaration:.1,type:"tween"}}},K=Object(h.c)(u.a.div)(R||(R=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  background-color: rgba(0, 0, 0, 0.7);\n"]))),V=h.c.div(q||(q=Object(i.a)(["\n  position: absolute;\n  width: 40vw;\n  height: 80vh;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 15px;\n  overflow: hidden;\n  background-color: #2f2f2f;\n  display: flex;\n  flex-direction: column;\n"]))),$={start:{opacity:0,scale:0},visible:{opacity:1,scale:1,rotateZ:360,transition:{duaration:.1,type:"tween"}},exit:{opacity:0,scale:0,transition:{duaration:.1,type:"tween"}}},nn={start:{fill:"black"},hover:{fill:"yellow"}},tn={initial:{fill:"black"},click:{fill:"yellow"}},en=h.c.div(H||(H=Object(i.a)(["\n  background-image: url(",");\n  background-size: cover;\n  height: 50%;\n"])),(function(n){return n.bgphoto})),on=h.c.div(U||(U=Object(i.a)(["\n  width: 100%;\n  height: 50%;\n  display: flex;\n  padding: 20px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  p {\n    margin: 20px 0 20px 0;\n  }\n"]))),rn=window.location.search.split("=").splice(1).toString();console.log(rn);var cn,an,ln,sn,dn,bn,hn,un,jn=function(){var n=Object(o.useState)(!1),t=Object(b.a)(n,2),e=t[0],i=t[1],r=Object(s.h)("/search/detail/:id"),c=Object(s.g)(),a=Object(s.f)(),l=new URLSearchParams(c.search).get("keyword"),d=Object(x.useQuery)(["search","movie"],(function(){return function(n){return fetch("".concat(m,"/search/movie?api_key=").concat(f,"&language=en-US&query=").concat(n,"&page=1&include_adult=false&region=kr")).then((function(n){return n.json()}))}(String(l))})),h=d.isLoading,u=d.data,j=(null===r||void 0===r?void 0:r.params.id)&&(null===u||void 0===u?void 0:u.results.find((function(n){return String(n.id)===r.params.id})));return Object(Y.jsxs)(W,{children:[h?Object(Y.jsx)(X,{children:"Loading...."}):Object(Y.jsx)(J,{children:null===u||void 0===u?void 0:u.results.map((function(n){return Object(Y.jsx)(g.a,{children:Object(Y.jsx)(D,{layoutId:n.id+"",variants:Z,initial:"start",whileHover:"hover",bgPhoto:O(n.backdrop_path,"w500"),onClick:function(){return t=n.id,void a.push("/search/detail/".concat(t));var t},children:Object(Y.jsx)(N,{variants:G,children:Object(Y.jsx)("h4",{children:n.title})})},n.id)})}))}),Object(Y.jsx)(g.a,{children:r?Object(Y.jsx)(K,{layoutId:r.params.id,variants:$,initial:"start",animate:"visible",exit:"exit",children:Object(Y.jsxs)(V,{style:{bottom:0},children:[Object(Y.jsx)(en,{bgphoto:O(j&&j.backdrop_path,"w500"),children:Object(Y.jsx)(Q,{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 490 490",variants:nn,initial:"start",whileHover:"hover",exit:"exit",onClick:function(){return String(l),void a.goBack()},children:Object(Y.jsx)("path",{d:"M413.476,398.302L258.215,245L413.476,91.69L324.619,0L76.524,245l248.094,245L413.476,398.302z M120.086,245L324.14,43.502\r l46.252,47.71L214.653,245l155.739,153.781l-46.252,47.717L120.086,245z"})})}),Object(Y.jsxs)(on,{children:[Object(Y.jsxs)(B,{children:[Object(Y.jsxs)(A,{variants:tn,initial:"initial",whileHover:"click",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",onClick:function(){console.log("\ud074\ub9ad"),i((function(n){return!n})),console.log(e)},children:[" ",Object(Y.jsx)("path",{d:"M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"})]}),Object(Y.jsx)(F,{onClick:function(){a.push("/wookflix")},src:"https://cdn-icons-png.flaticon.com/512/609/609803.png"})]}),Object(Y.jsxs)("h1",{children:["Title : ",j&&j.title]}),Object(Y.jsxs)("p",{children:["Description : ",j&&j.overview]}),Object(Y.jsxs)("h4",{children:["popularity : ",j&&j.popularity]})]})]})}):null})]})},pn=Object(h.c)(u.a.nav)(cn||(cn=Object(i.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 99;\n  font-size: 14px;\n  padding: 20px 60px;\n  color: white;\n"]))),vn=h.c.div(an||(an=Object(i.a)(["\n  display: flex;\n  align-items: center;\n"]))),gn=Object(h.c)(u.a.svg)(ln||(ln=Object(i.a)(["\n  margin-right: 50px;\n  width: 95px;\n  height: 25px;\n  fill: ",";\n  path {\n    stroke-width: 6px;\n    stroke: white;\n  }\n"])),(function(n){return n.theme.red})),xn=h.c.ul(sn||(sn=Object(i.a)(["\n  display: flex;\n  align-items: center;\n"]))),On=h.c.li(dn||(dn=Object(i.a)(["\n  margin-right: 20px;\n  color: ",";\n  transition: color 0.3s ease-in-out;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.white.darker}),(function(n){return n.theme.white.lighter})),fn=Object(h.c)(u.a.span)(bn||(bn=Object(i.a)(["\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 5px;\n  bottom: -5px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: ",";\n"])),(function(n){return n.theme.red})),mn=h.c.form(hn||(hn=Object(i.a)(["\n  color: white;\n  display: flex;\n  align-items: center;\n  position: relative;\n  svg {\n    height: 25px;\n  }\n"]))),wn={normal:{fillOpacity:1},active:{fillOpacity:[0,.4,0,.5,0,.7,1,0],transition:{repeat:1/0}}},kn=Object(h.c)(u.a.input)(un||(un=Object(i.a)(["\n  /* transform-origin : \ubcc0\ud654\uac00 \uc2dc\uc791\ub418\ub294 \uc9c0\uc810  */\n  transform-origin: right center;\n  position: absolute;\n  right: 0px;\n  padding: 5px 10px;\n  padding-left: 40px;\n  z-index: -1;\n  color: white;\n  font-size: 16px;\n  background-color: transparent;\n  border: 1px solid ",";\n"])),(function(n){return n.theme.white.lighter})),yn={top:{backgroundColor:"rgba(0,0,0,0)",transition:{duration:1}},scroll:{backgroundColor:"rgba(0,0,0,1)"}};var Cn,Sn,zn,Ln,_n,In,Tn,Pn,En,Mn,Rn,qn,Hn,Un,Yn=function(){var n=Object(o.useState)(rn),t=Object(b.a)(n,2),e=t[0],i=t[1],r=Object(o.useState)([]),c=Object(b.a)(r,2),a=c[0],h=c[1],g=Object(o.useState)(!1),x=Object(b.a)(g,2),O=x[0],f=x[1],m=(Object(s.h)("/search"),Object(s.h)("/wookflix")),w=Object(s.h)("/tv"),k=Object(j.a)(),y=Object(j.a)(),C=Object(p.a)().scrollY;Object(s.g)(),Object(o.useEffect)((function(){C.onChange((function(){C.get()>80?y.start("scroll"):y.start("top")}))}),[C,y]),console.log(),Object(o.useEffect)((function(){i(e),localStorage.setItem("search",JSON.stringify(e)),h(e)}),[rn]),console.log(a);var S=Object(s.f)(),z=Object(v.a)(),L=z.register,_=z.handleSubmit;return Object(Y.jsxs)(pn,{variants:yn,animate:y,initial:{backgroundColor:"rgba(0,0,0,0)"},children:[Object(Y.jsxs)(vn,{children:[Object(Y.jsx)(gn,{variants:wn,whileHover:"active",initial:"normal",xmlns:"http://www.w3.org/2000/svg",width:"1024",height:"276.742",viewBox:"0 0 1024 276.742",children:Object(Y.jsx)(u.a.path,{d:"M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"})}),Object(Y.jsxs)(xn,{children:[Object(Y.jsxs)(On,{children:[Object(Y.jsx)(l.b,{to:"/wookflix",children:"Home"}),!0===(null===m||void 0===m?void 0:m.isExact)?Object(Y.jsx)(fn,{layoutId:"circle"}):null]}),Object(Y.jsxs)(On,{children:[Object(Y.jsx)(l.b,{to:"/tv",children:"Tv Shows"}),!0===(null===w||void 0===w?void 0:w.isExact)?Object(Y.jsx)(fn,{layoutId:"circle"}):null]})]})]}),Object(Y.jsx)(vn,{children:Object(Y.jsxs)(mn,{onSubmit:_((function(n){console.log(n),S.push("/search?keyword=".concat(n.keyword)),window.location.reload()})),children:[Object(Y.jsx)(u.a.svg,{onClick:function(){O?k.start({scaleX:0}):k.start({scaleX:1}),f((function(n){return!n}))},animate:{x:O?-220:0},transition:{type:"linear"},fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(Y.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),Object(Y.jsx)(kn,Object(d.a)(Object(d.a)({},L("keyword",{value:e,required:!0,minLength:2})),{},{animate:k,initial:{scaleX:0},transition:{type:"linear"},placeholder:"Search for movie or tv show..."}))]})})]})},Qn=h.c.div(Cn||(Cn=Object(i.a)(["\n  background-color: black;\n"]))),Bn=h.c.div(Sn||(Sn=Object(i.a)(["\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Fn=h.c.div(zn||(zn=Object(i.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 60px;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\n    url(",");\n  background-size: cover;\n"])),(function(n){return n.bgPhoto})),An=h.c.h2(Ln||(Ln=Object(i.a)(["\n  font-size: 68px;\n"]))),Wn=h.c.p(_n||(_n=Object(i.a)(["\n  font-size: 36px;\n  width: 50%;\n  overflow: hidden;\n"]))),Jn=h.c.div(In||(In=Object(i.a)(["\n  position: relative;\n  top: -100px;\n"]))),Xn=Object(h.c)(u.a.div)(Tn||(Tn=Object(i.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 10px;\n  margin-bottom: 5px;\n  position: absolute;\n  width: 100%;\n"]))),Dn=Object(h.c)(u.a.div)(Pn||(Pn=Object(i.a)(["\n  background-color: white;\n  height: 200px;\n  background-image: url(",");\n  background-size: cover;\n  cursor: pointer;\n  &:first-child {\n    transform: left center;\n  }\n  &:last-child {\n    transform: right center;\n  }\n"])),(function(n){return n.bgPhoto})),Nn=Object(h.c)(u.a.div)(En||(En=Object(i.a)(["\n  padding: 10px;\n  background-color: ",";\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  h4: {\n    text-align: center;\n    font-size: 18px;\n  }\n"])),(function(n){return n.theme.black.lighter})),Zn={hidden:{x:window.outerWidth+10},visible:{x:0},exit:{x:-window.outerWidth-10}},Gn={normal:{scale:1},hover:{scale:1.3,y:-80,transition:{delay:.5,duaration:.1,type:"tween"}}},Kn={hover:{opacity:1,transition:{delay:.5,duaration:.1,type:"tween"}}},Vn=h.c.div(Mn||(Mn=Object(i.a)(["\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n  height: 400px;\n"]))),$n=h.c.div(Rn||(Rn=Object(i.a)(["\n  color: ",";\n  padding: 10px;\n  top: -80px;\n  position: relative;\n  font-size: 46px;\n"])),(function(n){return n.theme.white.lighter})),nt=Object(h.c)(u.a.div)(qn||(qn=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n"]))),tt=Object(h.c)(u.a.div)(Hn||(Hn=Object(i.a)(["\n  position: absolute;\n  width: 40vw;\n  height: 80vh;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 15px;\n  overflow: hidden;\n  background-color: ",";\n"])),(function(n){return n.theme.black.lighter})),et=h.c.p(Un||(Un=Object(i.a)(["\n  padding: 20px;\n  color: ",";\n  position: relative;\n"])),(function(n){return n.theme.white.lighter}));var it,ot,rt,ct,at,lt,st,dt,bt,ht,ut,jt,pt,vt,gt,xt,Ot,ft=function(){var n=Object(s.h)("/movies/:movieId");console.log(n);var t=Object(s.f)(),e=Object(p.a)().scrollY,i=Object(x.useQuery)(["movie","nowPlaying"],w),r=i.isLoading,c=i.data,a=(null===n||void 0===n?void 0:n.params.movieId)&&(null===c||void 0===c?void 0:c.results.find((function(t){return String(t.id)===n.params.movieId})));console.log(a);var l=Object(o.useState)(0),d=Object(b.a)(l,2),h=d[0],u=d[1],j=Object(o.useState)(!1),v=Object(b.a)(j,2),f=v[0],m=v[1];return Object(Y.jsx)(Qn,{children:r?Object(Y.jsx)(Bn,{children:"...Loading"}):Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsxs)(Fn,{onClick:function(){if(c){if(f)return;console.log(c.results.length),m(!0);var n=c.results.length-1,t=Math.floor(n/6)-1;u((function(n){return n===t?0:n+1}))}},bgPhoto:O(null===c||void 0===c?void 0:c.results[0].backdrop_path)||"",children:[Object(Y.jsx)(An,{children:null===c||void 0===c?void 0:c.results[0].title}),Object(Y.jsx)(Wn,{children:null===c||void 0===c?void 0:c.results[0].overview})]}),Object(Y.jsx)(Jn,{children:Object(Y.jsx)(g.a,{initial:!1,onExitComplete:function(){return m((function(n){return!n}))},children:Object(Y.jsx)(Xn,{variants:Zn,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:2},children:null===c||void 0===c?void 0:c.results.slice(1).slice(6*h,6*h+6).map((function(n){return Object(Y.jsx)(Dn,{layoutId:n.id+"",onClick:function(){return e=n.id,void t.push("/movies/".concat(e));var e},whileHover:"hover",initial:"normal",variants:Gn,bgPhoto:O(n.backdrop_path,"w500"),children:Object(Y.jsx)(Nn,{variants:Kn,children:Object(Y.jsx)("h4",{children:n.title})})},n.id)}))},h)})}),Object(Y.jsx)(g.a,{children:n?Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(nt,{onClick:function(){t.push("/wookflix")},children:Object(Y.jsx)(tt,{onClick:function(){return a},style:{top:e.get()+100},layoutId:n.params.movieId,children:a&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(Vn,{style:{backgroundImage:"linear-gradient(to top , black , transparent), url(".concat(O(a.backdrop_path,"w500"),")")}}),Object(Y.jsx)($n,{children:a.title}),Object(Y.jsx)(et,{children:a.overview})]})})})}):null})]})})},mt=h.c.div(it||(it=Object(i.a)(["\n  height: 100vh;\n  margin-top: 70px;\n  display: flex;\n  flex-direction: columns;\n  /* justify-content: */\n  position: relative;\n"]))),wt=Object(h.c)(u.a.div)(ot||(ot=Object(i.a)(["\n  width: 100%;\n  display: grid;\n  gap: 15px;\n  grid-template-columns: repeat(5, 1fr);\n  position: absolute;\n  top: 150px;\n"]))),kt=Object(h.c)(u.a.div)(rt||(rt=Object(i.a)(["\n  width: 100%;\n  display: grid;\n  gap: 15px;\n  grid-template-columns: repeat(5, 1fr);\n  top: 450px;\n  position: absolute;\n"]))),yt=Object(h.c)(u.a.div)(ct||(ct=Object(i.a)(["\n  width: 100%;\n  display: grid;\n  gap: 15px;\n  top: 750px;\n  grid-template-columns: repeat(5, 1fr);\n  position: absolute;\n"]))),Ct=Object(h.c)(u.a.div)(at||(at=Object(i.a)(["\n  width: 100%;\n  height: 250px;\n  background-image: url(",");\n  background-size: cover;\n  cursor: pointer;\n\n  &:first-child {\n    transform: left center;\n  }\n  &:last-child {\n    transform: right center;\n  }\n"])),(function(n){return n.bgphoto})),St=Object(h.c)(u.a.div)(lt||(lt=Object(i.a)(["\n  width: 100%;\n  height: 250px;\n  background-image: url(",");\n  background-size: cover;\n  cursor: pointer;\n  &:first-child {\n    transform: left center;\n  }\n  &:last-child {\n    transform: right center;\n  }\n"])),(function(n){return n.bgphoto})),zt=Object(h.c)(u.a.div)(st||(st=Object(i.a)(["\n  width: 100%;\n  height: 250px;\n  background-image: url(",");\n  background-size: cover;\n  cursor: pointer;\n  &:first-child {\n    transform: left center;\n  }\n  &:last-child {\n    transform: right center;\n  }\n"])),(function(n){return n.bgphoto})),Lt=Object(h.c)(u.a.div)(dt||(dt=Object(i.a)(["\n  width: 100%;\n  position: absolute;\n  background: grey;\n  bottom: 0;\n  padding: 10px;\n  text-align: center;\n  opacity: 0;\n"]))),_t=Object(h.c)(u.a.div)(bt||(bt=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n"]))),It=h.c.div(ht||(ht=Object(i.a)(["\n  position: absolute;\n  width: 40vw;\n  height: 80vh;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 15px;\n  overflow: hidden;\n  background-color: #2f2f2f;\n  display: flex;\n  flex-direction: column;\n"]))),Tt=h.c.div(ut||(ut=Object(i.a)(["\n  width: 100%;\n  height: 60%;\n  background-image: url(",");\n  background-size: cover;\n"])),(function(n){return n.bgphoto})),Pt=h.c.div(jt||(jt=Object(i.a)(["\n  width: 100%;\n  height: 40%;\n  padding: 10px 50px 10px 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n"]))),Et=h.c.h1(pt||(pt=Object(i.a)(["\n  margin-bottom: 10px;\n"]))),Mt=h.c.p(vt||(vt=Object(i.a)(["\n  margin-bottom: 30px;\n"]))),Rt=h.c.h4(gt||(gt=Object(i.a)(["\n  margin-bottom: 10px;\n"]))),qt=h.c.button(xt||(xt=Object(i.a)(["\n  background: transparent;\n  border: none;\n  position: absolute;\n  right: 0;\n  padding: 10px;\n  font-size: 20px;\n"]))),Ht=Object(h.c)(u.a.img)(Ot||(Ot=Object(i.a)(["\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  position: absolute;\n\n  right: 10px;\n"])));var Ut=function(){var n=Object(x.useQuery)(["tv","get"],k),t=n.isLoading,e=n.data,i=Object(x.useQuery)(["tv","toprate"],C),r=i.isLoading,c=i.data,a=Object(x.useQuery)(["tv","popluate"],y),l=a.isLoading,d=a.data,h=Object(o.useState)(0),u=Object(b.a)(h,2),j=u[0],p=u[1],v=Object(o.useState)(0),f=Object(b.a)(v,2),m=f[0],w=f[1],S=Object(o.useState)(0),z=Object(b.a)(S,2),L=z[0],_=z[1],I=Object(o.useState)(!1),T=Object(b.a)(I,2),P=T[0],E=T[1],M=Object(o.useState)(!1),R=Object(b.a)(M,2),q=R[0],H=R[1],U=Object(o.useState)(!1),Q=Object(b.a)(U,2),B=Q[0],F=Q[1],A=Object(s.h)("/tv/onair/:id"),W=Object(s.h)("/tv/top/:id"),J=Object(s.h)("/tv/pop/:id"),X=Object(s.f)(),D=function(){X.push("/wookflix")},N=function(){X.push("/tv")},Z={hidden:{x:window.outerWidth+10},visible:{x:0},exit:{x:-window.outerWidth-10}},G={normal:{scale:1},hover:{scale:1.3,y:-80,transition:{delay:.5,duration:.3,type:"tween"}}},K={hover:{opacity:1,transition:{delay:.5,duration:.3,type:"tween"}}},V=null===e||void 0===e?void 0:e.results.find((function(n){return n.id+""===(null===A||void 0===A?void 0:A.params.id)})),$=null===c||void 0===c?void 0:c.results.find((function(n){return n.id+""===(null===W||void 0===W?void 0:W.params.id)})),nn=null===d||void 0===d?void 0:d.results.find((function(n){return n.id+""===(null===J||void 0===J?void 0:J.params.id)}));return console.log(V),Object(Y.jsxs)(mt,{children:[t?Object(Y.jsx)("span",{children:"..."}):Object(Y.jsx)(g.a,{onExitComplete:function(){E((function(n){return!n}))},children:Object(Y.jsxs)(wt,{variants:Z,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:2},children:[null===e||void 0===e?void 0:e.results.slice(5*j,5*j+5).map((function(n){return Object(Y.jsx)(Ct,{onClick:function(){return t=n.id+"",void X.push("/tv/onair/".concat(t));var t},variants:G,initial:"normal",whileHover:"hover",bgphoto:O(n.backdrop_path,"w500"),children:Object(Y.jsx)(Lt,{variants:K,children:n.name})},n.id)})),Object(Y.jsx)("button",{style:{position:"absolute",top:"-35px",background:"transparent",border:"none",color:"white",fontSize:"35px",cursor:"pointer"},onClick:function(){if(e){if(P)return;var n=null===e||void 0===e?void 0:e.results.length,t=Math.floor(n/5)-1;console.log(t),E(!0),p((function(n){return n===t?0:n+1}))}},children:"Tv-OnAir"})]},j)}),r?null:Object(Y.jsx)(g.a,{onExitComplete:function(){H((function(n){return!n}))},children:Object(Y.jsxs)(kt,{variants:Z,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:2},children:[null===c||void 0===c?void 0:c.results.slice(5*m,5*m+5).map((function(n){return Object(Y.jsx)(St,{onClick:function(){return t=n.id+"",void X.push("/tv/top/".concat(t));var t},variants:G,initial:"normal",whileHover:"hover",bgphoto:O(n.backdrop_path,"w500"),children:Object(Y.jsx)(Lt,{variants:K,children:n.name})},n.id)})),Object(Y.jsx)("button",{style:{position:"absolute",top:"-37px",background:"transparent",border:"none",color:"white",fontSize:"35px",cursor:"pointer"},onClick:function(){if(c){if(q)return;var n=null===c||void 0===c?void 0:c.results.length,t=Math.floor(n/5);H(!0),w((function(n){return n===t?0:n+1}))}},children:"Tv-Top"})]},m)}),l?null:Object(Y.jsx)(g.a,{onExitComplete:function(){F((function(n){return!n}))},children:Object(Y.jsxs)(yt,{variants:Z,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:2},children:[null===d||void 0===d?void 0:d.results.slice(5*L,5*L+5).map((function(n){return Object(Y.jsx)(zt,{onClick:function(){return t=n.id+"",void X.push("/tv/pop/".concat(t));var t},variants:G,initial:"normal",whileHover:"hover",bgphoto:O(n.backdrop_path,"w500"),children:Object(Y.jsx)(Lt,{variants:K,children:n.name})},n.id)})),Object(Y.jsx)("button",{style:{position:"absolute",top:"-37px",background:"transparent",border:"none",color:"white",fontSize:"35px",cursor:"pointer"},onClick:function(){if(d){if(B)return;var n=null===d||void 0===d?void 0:d.results.length,t=Math.floor(n/5);F(!0),_((function(n){return n===t?0:n+1}))}},children:"Tv-Populate"})]},L)}),A?Object(Y.jsx)(_t,{children:Object(Y.jsxs)(It,{style:{bottom:"10%"},children:[Object(Y.jsx)(Tt,{bgphoto:O(null===V||void 0===V?void 0:V.backdrop_path,"w500"),children:Object(Y.jsx)(qt,{onClick:N,children:"\u274c"})}),Object(Y.jsxs)(Pt,{children:[Object(Y.jsx)(Ht,{onClick:D,src:"https://cdn-icons-png.flaticon.com/512/609/609803.png"}),Object(Y.jsxs)(Et,{children:["TITLE : ",null===V||void 0===V?void 0:V.name]}),Object(Y.jsxs)(Mt,{children:["STORY:",Object(Y.jsx)("br",{}),null===V||void 0===V?void 0:V.overview]}),Object(Y.jsxs)(Rt,{children:["POPULARITY",Object(Y.jsx)("br",{}),Object(Y.jsx)("br",{}),null===V||void 0===V?void 0:V.popularity," SCORE"]})]})]})}):null,W?Object(Y.jsx)(_t,{children:Object(Y.jsxs)(It,{style:{bottom:"10%"},children:[Object(Y.jsx)(Tt,{bgphoto:O(null===$||void 0===$?void 0:$.backdrop_path,"w500"),children:Object(Y.jsx)(qt,{onClick:N,children:"\u274c"})}),Object(Y.jsxs)(Pt,{children:[Object(Y.jsx)(Ht,{onClick:D,src:"https://cdn-icons-png.flaticon.com/512/609/609803.png"}),Object(Y.jsxs)(Et,{children:["TITLE : ",null===$||void 0===$?void 0:$.name]}),Object(Y.jsxs)(Mt,{children:["STORY:",Object(Y.jsx)("br",{}),null===$||void 0===$?void 0:$.overview]}),Object(Y.jsxs)(Rt,{children:["POPULARITY",Object(Y.jsx)("br",{}),Object(Y.jsx)("br",{}),null===$||void 0===$?void 0:$.popularity," SCORE"]})]})]})}):null,J?Object(Y.jsx)(_t,{children:Object(Y.jsxs)(It,{style:{bottom:"10%"},children:[Object(Y.jsx)(Tt,{bgphoto:O(null===nn||void 0===nn?void 0:nn.backdrop_path,"w500"),children:Object(Y.jsx)(qt,{onClick:N,children:"\u274c"})}),Object(Y.jsxs)(Pt,{children:[Object(Y.jsx)(Ht,{onClick:D,src:"https://cdn-icons-png.flaticon.com/512/609/609803.png"}),Object(Y.jsxs)(Et,{children:["TITLE : ",null===nn||void 0===nn?void 0:nn.name]}),Object(Y.jsxs)(Mt,{children:["STORY:",Object(Y.jsx)("br",{}),null===nn||void 0===nn?void 0:nn.overview]}),Object(Y.jsxs)(Rt,{children:["POPULARITY",Object(Y.jsx)("br",{}),Object(Y.jsx)("br",{}),null===nn||void 0===nn?void 0:nn.popularity," SCORE"]})]})]})}):null]})};var Yt,Qt=function(){return Object(Y.jsxs)(l.a,{children:[Object(Y.jsx)(Yn,{}),Object(Y.jsxs)(s.c,{children:[Object(Y.jsx)(s.a,{path:"/tv",children:Object(Y.jsx)(Ut,{})}),Object(Y.jsx)(s.a,{path:["/search","/search/detail/:movieId"],children:Object(Y.jsx)(jn,{})}),Object(Y.jsx)(s.a,{path:["/wookflix","/movies/:movieId"],children:Object(Y.jsx)(ft,{})})]})]})},Bt=e(92),Ft=Object(h.b)(Yt||(Yt=Object(i.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n  overflow-x:hidden\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n  \n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:",";\n  line-height: 1.2;\n  background-color: black;\n  \n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.white.darker})),At=new x.QueryClient;a.a.render(Object(Y.jsx)(r.a.StrictMode,{children:Object(Y.jsx)(Bt.a,{children:Object(Y.jsx)(x.QueryClientProvider,{client:At,children:Object(Y.jsxs)(h.a,{theme:{red:"#E51013",black:{veryDark:"#141414",darker:"#181818",lighter:"#2F2F2F"},white:{lighter:"#fff",darker:"#e5e5e5"}},children:[Object(Y.jsx)(Ft,{}),Object(Y.jsx)(Qt,{})]})})})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.b7c8ef9b.chunk.js.map