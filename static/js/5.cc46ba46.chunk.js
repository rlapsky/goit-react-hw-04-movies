(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{66:function(t,e,r){"use strict";r.r(e);var n=r(34),a=r.n(n);function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var o=r(35),h=r(14),u=r(15),p=r(17),l=r(16),j=r(0),d=r(36),v=r.n(d),b=r(8),O=r(2),f=r(1),m=function(t){Object(p.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={movieCast:[]},t}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var t=Object(o.a)(a.a.mark((function t(){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.movieId,t.next=3,v.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=fd24293d59cd022df746242a4a847605&language=en-US")).then((function(t){return t.data}));case 3:r=t.sent,this.setState({movieCast:r.cast}),console.log(this.state);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:this.state.movieCast.length>0?Object(f.jsx)("ul",{children:this.state.movieCast.map((function(t){return Object(f.jsxs)("li",{children:[t.profile_path&&Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.profile_path),alt:""}),Object(f.jsx)("h3",{children:t.name}),Object(f.jsx)("p",{children:t.character})]},t.id)}))}):"\u041f\u0443\u0442\u0441\u043e!"})}}]),r}(j.Component),g=function(t){Object(p.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={reviews:[],movie_id:t.props.movieId},t}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var t=Object(o.a)(a.a.mark((function t(){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.props.movieId){t.next=6;break}return e=this.props.movieId,t.next=4,v.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=fd24293d59cd022df746242a4a847605&language=en-US&page=1")).then((function(t){return t.data.results}));case 4:r=t.sent,this.setState({reviews:r});case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:this.state.reviews.length>0?Object(f.jsx)("ul",{children:this.state.reviews.map((function(t){return Object(f.jsxs)("li",{children:[Object(f.jsx)("h3",{children:t.author}),Object(f.jsx)("p",{children:t.content})]},t.id)}))}):"\u041f\u0443\u0442\u0441\u043e!"})}}]),r}(j.Component),x=function(t){Object(p.a)(r,t);var e=Object(l.a)(r);function r(){var t;Object(h.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={},t.goBackFunc=function(){var e,r;t.props.history.push(null!==(e=null===(r=t.props.history.location)||void 0===r?void 0:r.state)&&void 0!==e?e:"/")},t}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var t=Object(o.a)(a.a.mark((function t(){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.props.match.params.movieId,t.next=3,v.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=fd24293d59cd022df746242a4a847605")).then((function(t){return t.data}));case 3:r=t.sent,this.setState(s({},r));case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,e,r,n,a=this;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{type:"button",onClick:this.goBackFunc,children:"Go Back"}),this.state.poster_path&&Object(f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(this.state.poster_path),alt:""}),Object(f.jsxs)("h1",{children:[this.state.original_title," (",null===(t=this.state.release_date)||void 0===t?void 0:t.slice(0,4),")"]}),Object(f.jsxs)("p",{children:["User Score: ",10*this.state.vote_average,"%"]}),Object(f.jsx)("h2",{children:"Overview"}),Object(f.jsx)("p",{children:this.state.overview}),Object(f.jsx)("h2",{children:"Genres"}),Object(f.jsx)("ul",{children:null===(e=this.state.genres)||void 0===e?void 0:e.map((function(t){return Object(f.jsxs)("li",{children:[t.name," "]},t.id)}))}),Object(f.jsx)("h2",{children:"Additional Info"}),Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(b.c,{to:{pathname:"".concat(this.props.match.url,"/cast"),state:null===(r=this.props.location)||void 0===r?void 0:r.state},children:"Cast"})}),Object(f.jsx)("li",{children:Object(f.jsx)(b.c,{to:{pathname:"".concat(this.props.match.url,"/reviews"),state:null===(n=this.props.location)||void 0===n?void 0:n.state},children:"Reviews"})})]}),Object(f.jsx)(O.a,{path:"".concat(this.props.match.url,"/cast"),render:function(t){return Object(f.jsx)(m,s(s({},t),{},{movieId:a.state.id}))}}),Object(f.jsx)(O.a,{path:"".concat(this.props.match.url,"/reviews"),render:function(t){return Object(f.jsx)(g,s(s({},t),{},{movieId:a.state.id}))}})]})}}]),r}(j.Component);e.default=x}}]);
//# sourceMappingURL=5.cc46ba46.chunk.js.map