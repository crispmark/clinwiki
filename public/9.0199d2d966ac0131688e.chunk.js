webpackJsonp([9],{"./app/containers/Study/actions.js":function(n,e,t){"use strict";var r=t("./app/utils/client.js"),u=t("./app/containers/Study/constants.js");t.d(e,"b",function(){return a}),t.d(e,"a",function(){return i}),t.d(e,"t",function(){return o}),t.d(e,"c",function(){return c}),t.d(e,"m",function(){return f}),t.d(e,"n",function(){return s}),t.d(e,"o",function(){return l}),t.d(e,"p",function(){return d}),t.d(e,"q",function(){return p}),t.d(e,"r",function(){return h}),t.d(e,"e",function(){return v}),t.d(e,"d",function(){return y}),t.d(e,"k",function(){return g}),t.d(e,"j",function(){return m}),t.d(e,"l",function(){return b}),t.d(e,"f",function(){return k}),t.d(e,"g",function(){return E}),t.d(e,"s",function(){return _}),t.d(e,"i",function(){return x}),t.d(e,"h",function(){return j});var a=function(n){return{type:u.a,nctId:n}},i=function(n){return{type:u.b,nctId:n}},o=function(n){return{type:u.c,data:n}},c=function(n,e){return{type:u.d,nctId:n,wikiText:e}},f=function(n){return{type:u.e,data:n}},s=function(n){return{type:u.f,data:n}},l=function(n){return{type:u.g,data:n}},d=function(n){return{type:u.h,data:n}},p=function(n){return{type:u.i,data:n}},h=function(n){return{type:u.j,data:n}},v=function(n){return function(e,t){return r.a.delete("/tags/"+t,{nct_id:e}).then(function(){return n({type:u.k})})}},y=function(n){return function(e,t){return r.a.post("/tags",{nct_id:e,new_tag:t}).then(function(e){return n({type:u.l,data:e.data})})}},g=function(n){return function(e,t){return r.a.patch("/annotations/"+e+".json",{description:t}).then(function(){return n({type:u.m})})}},m=function(n){return function(e){return r.a.delete("/annotations/"+e+".json").then(function(){return n({type:u.n})})}},b=function(n){return function(e,t,a){return r.a.post("/annotations.json",{nct_id:e,label:t,description:a}).then(function(){return n({type:u.o})})}},k=function(n){return function(e,t,a){return r.a.post("/reviews.json",{nct_id:e,comment:t,rating:a}).then(function(){return n({type:u.p})})}},E=function(n){return function(e,t,a){return r.a.patch("/reviews/"+e+".json",{comment:t,rating:a}).then(function(){return n({type:u.q})})}},_=function(n){return{type:u.r,data:n}},x=function(n){return function(e){return r.a.get("reviews/"+e).then(function(e){return n({type:u.s,data:e.data})})}},j=function(n){return function(e){return r.a.delete("reviews/"+e+".json").then(function(){return n({type:u.t})})}}},"./app/containers/Study/constants.js":function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return u}),t.d(e,"e",function(){return a}),t.d(e,"f",function(){return i}),t.d(e,"h",function(){return o}),t.d(e,"i",function(){return c}),t.d(e,"j",function(){return f}),t.d(e,"g",function(){return s}),t.d(e,"c",function(){return l}),t.d(e,"d",function(){return d}),t.d(e,"l",function(){return p}),t.d(e,"k",function(){return h}),t.d(e,"p",function(){return v}),t.d(e,"r",function(){return y}),t.d(e,"s",function(){return g}),t.d(e,"q",function(){return m}),t.d(e,"t",function(){return b}),t.d(e,"o",function(){return k}),t.d(e,"n",function(){return E}),t.d(e,"m",function(){return _});var r="app/Study/REQUEST_STUDY_ACTION",u="app/Study/RELOAD_STUDY_ACTION",a="app/Study/DEFAULT_ACTION",i="app/Study/CROWD_ACTION",o="app/Study/DESCRIPTIVE_ACTION",c="app/Study/ADMIN_ACTION",f="app/Study/RECRUITMENT_ACTION",s="app/Study/TRACKING_ACTION",l="app/Study/WIKI_ACTION",d="app/Study/WIKI_SUBMIT_ACTION",p="app/Study/TAG_SUBMIT_ACTION",h="app/Study/TAG_REMOVE_ACTION",v="app/Study/REVIEW_SUBMIT_ACTION",y="app/Study/REVIEWS_RECEIVE_ACTION",g="app/Study/REVIEW_RECEIVE_ACTION",m="app/Study/REVIEW_UPDATE_ACTION",b="app/Study/REVIEW_DELETE_ACTION",k="app/Study/ANNOTATION_CREATE_ACTION",E="app/Study/ANNOTATION_DELETE_ACTION",_="app/Study/ANNOTATION_UPDATE_ACTION"},"./app/containers/Study/sagas.js":function(n,e,t){"use strict";function r(n){var e;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.get("/studies/"+n.nctId+"/json");case 2:return e=r.sent,r.next=5,t.i(v.put)(t.i(g.m)(e.data));case 5:case"end":return r.stop()}},b[0],this)}function u(n){var e;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.get("/studies/"+n.nctId+"/crowd");case 2:return e=r.sent,r.next=5,t.i(v.put)(t.i(g.n)(e.data));case 5:case"end":return r.stop()}},b[1],this)}function a(n){var e;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.get("/studies/"+n.nctId+"/tracking");case 2:return e=r.sent,r.next=5,t.i(v.put)(t.i(g.o)(e.data));case 5:case"end":return r.stop()}},b[2],this)}function i(n){var e;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.get("/studies/"+n.nctId+"/descriptive");case 2:return e=r.sent,r.next=5,t.i(v.put)(t.i(g.p)(e.data));case 5:case"end":return r.stop()}},b[3],this)}function o(n){var e;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.get("/studies/"+n.nctId+"/administrative");case 2:return e=r.sent,r.next=5,t.i(v.put)(t.i(g.q)(e.data));case 5:case"end":return r.stop()}},b[4],this)}function c(n){var e;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.get("/studies/"+n.nctId+"/recruitment");case 2:return e=r.sent,r.next=5,t.i(v.put)(t.i(g.r)(e.data));case 5:case"end":return r.stop()}},b[5],this)}function f(n){var e;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.get("reviews.json?nct_id="+n.nctId);case 2:return e=r.sent,r.next=5,t.i(v.put)(t.i(g.s)(e.data));case 5:case"end":return r.stop()}},b[6],this)}function s(n){var e;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.get("/studies/"+n.nctId+"/wiki");case 2:return e=r.sent,r.next=5,t.i(v.put)(t.i(g.t)(e.data));case 5:case"end":return r.stop()}},b[7],this)}function l(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.i(v.call)(r,n);case 2:return e.next=4,t.i(v.call)(s,n);case 4:return e.next=6,t.i(v.call)(u,n);case 6:return e.next=8,t.i(v.call)(a,n);case 8:return e.next=10,t.i(v.call)(i,n);case 10:return e.next=12,t.i(v.call)(o,n);case 12:return e.next=14,t.i(v.call)(c,n);case 14:return e.next=16,t.i(v.call)(f,n);case 16:case"end":return e.stop()}},b[8],this)}function d(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.i(v.call)(r,n);case 2:return e.next=4,t.i(v.call)(s,n);case 4:return e.next=6,t.i(v.call)(f,n);case 6:return e.next=8,t.i(v.call)(u,n);case 8:case"end":return e.stop()}},b[9],this)}function p(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post("/studies/"+n.nctId+"/wiki",{wiki_text:n.wikiText});case 2:return e.next=4,t.i(v.put)({type:y.b,nctId:n.nctId});case 4:case"end":return e.stop()}},b[10],this)}function h(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(v.takeEvery)(y.a,l);case 2:return n.next=4,t.i(v.takeEvery)(y.b,d);case 4:return n.next=6,t.i(v.takeEvery)(y.d,p);case 6:case"end":return n.stop()}},b[11],this)}Object.defineProperty(e,"__esModule",{value:!0});var v=t("./node_modules/redux-saga/effects.js"),y=(t.n(v),t("./app/containers/Study/constants.js")),g=t("./app/containers/Study/actions.js"),m=t("./app/utils/client.js");e.loadDefault=r,e.loadCrowd=u,e.loadTracking=a,e.loadDescriptive=i,e.loadAdmin=o,e.loadRecruitment=c,e.loadReviews=f,e.loadWiki=s,e.loadStudy=l,e.reloadStudy=d,e.submitWiki=p,e.studySaga=h;var b=[r,u,a,i,o,c,f,s,l,d,p,h].map(regeneratorRuntime.mark);e.default=[h]},"./node_modules/redux-saga/effects.js":function(n,e,t){n.exports=t("./node_modules/redux-saga/lib/effects.js")},"./node_modules/redux-saga/lib/effects.js":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("./node_modules/redux-saga/lib/internal/io.js");Object.defineProperty(e,"take",{enumerable:!0,get:function(){return r.take}}),Object.defineProperty(e,"takem",{enumerable:!0,get:function(){return r.takem}}),Object.defineProperty(e,"put",{enumerable:!0,get:function(){return r.put}}),Object.defineProperty(e,"race",{enumerable:!0,get:function(){return r.race}}),Object.defineProperty(e,"call",{enumerable:!0,get:function(){return r.call}}),Object.defineProperty(e,"apply",{enumerable:!0,get:function(){return r.apply}}),Object.defineProperty(e,"cps",{enumerable:!0,get:function(){return r.cps}}),Object.defineProperty(e,"fork",{enumerable:!0,get:function(){return r.fork}}),Object.defineProperty(e,"spawn",{enumerable:!0,get:function(){return r.spawn}}),Object.defineProperty(e,"join",{enumerable:!0,get:function(){return r.join}}),Object.defineProperty(e,"cancel",{enumerable:!0,get:function(){return r.cancel}}),Object.defineProperty(e,"select",{enumerable:!0,get:function(){return r.select}}),Object.defineProperty(e,"actionChannel",{enumerable:!0,get:function(){return r.actionChannel}}),Object.defineProperty(e,"cancelled",{enumerable:!0,get:function(){return r.cancelled}}),Object.defineProperty(e,"flush",{enumerable:!0,get:function(){return r.flush}}),Object.defineProperty(e,"takeEvery",{enumerable:!0,get:function(){return r.takeEvery}}),Object.defineProperty(e,"takeLatest",{enumerable:!0,get:function(){return r.takeLatest}}),Object.defineProperty(e,"throttle",{enumerable:!0,get:function(){return r.throttle}})},"./node_modules/redux-saga/lib/internal/buffers.js":function(n,e,t){"use strict";function r(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=arguments[1],t=new Array(n),r=0,u=0,o=0,s=function(e){t[u]=e,u=(u+1)%n,r++},l=function(){if(0!=r){var e=t[o];return t[o]=null,r--,o=(o+1)%n,e}},d=function(){for(var n=[];r;)n.push(l());return n};return{isEmpty:function(){return 0==r},put:function(l){if(r<n)s(l);else{var p=void 0;switch(e){case i:throw new Error(a);case c:t[u]=l,u=(u+1)%n,o=u;break;case f:p=2*n,t=d(),r=t.length,u=t.length,o=0,t.length=p,n=p,s(l)}}},take:l,flush:d}}Object.defineProperty(e,"__esModule",{value:!0}),e.buffers=e.BUFFER_OVERFLOW=void 0;var u=t("./node_modules/redux-saga/lib/internal/utils.js"),a=e.BUFFER_OVERFLOW="Channel's Buffer overflow!",i=1,o=2,c=3,f=4,s={isEmpty:u.kTrue,put:u.noop,take:u.noop};e.buffers={none:function(){return s},fixed:function(n){return r(n,i)},dropping:function(n){return r(n,o)},sliding:function(n){return r(n,c)},expanding:function(n){return r(n,f)}}},"./node_modules/redux-saga/lib/internal/channel.js":function(n,e,t){"use strict";function r(){function n(n){return t.push(n),function(){return(0,c.remove)(t,n)}}function e(n){for(var e=t.slice(),r=0,u=e.length;r<u;r++)e[r](n)}var t=[];return{subscribe:n,emit:e}}function u(){function n(){if(i&&o.length)throw(0,c.internalErr)("Cannot have a closed channel with pending takers");if(o.length&&!a.isEmpty())throw(0,c.internalErr)("Cannot have pending takers with non empty buffer")}function e(e){if(n(),(0,c.check)(e,c.is.notUndef,v),!i){if(!o.length)return a.put(e);for(var t=0;t<o.length;t++){var r=o[t];if(!r[c.MATCH]||r[c.MATCH](e))return o.splice(t,1),r(e)}}}function t(e){n(),(0,c.check)(e,c.is.func,"channel.take's callback must be a function"),i&&a.isEmpty()?e(d):a.isEmpty()?(o.push(e),e.cancel=function(){return(0,c.remove)(o,e)}):e(a.take())}function r(e){return n(),(0,c.check)(e,c.is.func,"channel.flush' callback must be a function"),i&&a.isEmpty()?void e(d):void e(a.flush())}function u(){if(n(),!i&&(i=!0,o.length)){var e=o;o=[];for(var t=0,r=e.length;t<r;t++)e[t](d)}}var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.buffers.fixed(),i=!1,o=[];return(0,c.check)(a,c.is.buffer,h),{take:t,put:e,flush:r,close:u,get __takers__(){return o},get __closed__(){return i}}}function a(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.buffers.none(),t=arguments[2];arguments.length>2&&(0,c.check)(t,c.is.func,"Invalid match function passed to eventChannel");var r=u(e),a=n(function(n){return p(n)?void r.close():void(t&&!t(n)||r.put(n))});if(!c.is.func(a))throw new Error("in eventChannel: subscribe should return a function to unsubscribe");return{take:r.take,flush:r.flush,close:function(){r.__closed__||(r.close(),a())}}}function i(n){var e=a(function(e){return n(function(n){return n[c.SAGA_ACTION]?void e(n):void(0,s.asap)(function(){return e(n)})})});return o({},e,{take:function(n,t){arguments.length>1&&((0,c.check)(t,c.is.func,"channel.take's matcher argument must be a function"),n[c.MATCH]=t),e.take(n)}})}Object.defineProperty(e,"__esModule",{value:!0}),e.UNDEFINED_INPUT_ERROR=e.INVALID_BUFFER=e.isEnd=e.END=void 0;var o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n};e.emitter=r,e.channel=u,e.eventChannel=a,e.stdChannel=i;var c=t("./node_modules/redux-saga/lib/internal/utils.js"),f=t("./node_modules/redux-saga/lib/internal/buffers.js"),s=t("./node_modules/redux-saga/lib/internal/scheduler.js"),l="@@redux-saga/CHANNEL_END",d=e.END={type:l},p=e.isEnd=function(n){return n&&n.type===l},h=e.INVALID_BUFFER="invalid buffer passed to channel factory function",v=e.UNDEFINED_INPUT_ERROR="Saga was provided with an undefined action"},"./node_modules/redux-saga/lib/internal/io.js":function(n,e,t){"use strict";function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*";if(arguments.length&&(0,x.check)(arguments[0],x.is.notUndef,"take(patternOrChannel): patternOrChannel is undefined"),x.is.pattern(n))return M(O,{pattern:n});if(x.is.channel(n))return M(O,{channel:n});throw new Error("take(patternOrChannel): argument "+String(n)+" is not valid channel or a valid pattern")}function a(n,e){return arguments.length>1?((0,x.check)(n,x.is.notUndef,"put(channel, action): argument channel is undefined"),(0,x.check)(n,x.is.channel,"put(channel, action): argument "+n+" is not a valid channel"),(0,x.check)(e,x.is.notUndef,"put(channel, action): argument action is undefined")):((0,x.check)(n,x.is.notUndef,"put(action): argument action is undefined"),e=n,n=null),M(A,{channel:n,action:e})}function i(n){return M(T,n)}function o(n,e,t){(0,x.check)(e,x.is.notUndef,n+": argument fn is undefined");var r=null;if(x.is.array(e)){var u=e,a=_(u,2);r=a[0],e=a[1]}else if(e.fn){var i=e;r=i.context,e=i.fn}return(0,x.check)(e,x.is.func,n+": argument "+e+" is not a function"),{context:r,fn:e,args:t}}function c(n){for(var e=arguments.length,t=Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return M(I,o("call",n,t))}function f(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return M(I,o("apply",{context:n,fn:e},t))}function s(n){for(var e=arguments.length,t=Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return M(C,o("cps",n,t))}function l(n){for(var e=arguments.length,t=Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return M(S,o("fork",n,t))}function d(n){for(var e=arguments.length,t=Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=l.apply(void 0,[n].concat(t));return u[S].detached=!0,u}function p(n){if((0,x.check)(n,x.is.notUndef,"join(task): argument task is undefined"),!H(n))throw new Error("join(task): argument "+n+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return M(N,n)}function h(n){if((0,x.check)(n,x.is.notUndef,"cancel(task): argument task is undefined"),!H(n))throw new Error("cancel(task): argument "+n+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return M(R,n)}function v(n){for(var e=arguments.length,t=Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return 0===arguments.length?n=x.ident:((0,x.check)(n,x.is.notUndef,"select(selector,[...]): argument selector is undefined"),(0,x.check)(n,x.is.func,"select(selector,[...]): argument "+n+" is not a function")),M(P,{selector:n,args:t})}function y(n,e){return(0,x.check)(n,x.is.notUndef,"actionChannel(pattern,...): argument pattern is undefined"),arguments.length>1&&((0,x.check)(e,x.is.notUndef,"actionChannel(pattern, buffer): argument buffer is undefined"),(0,x.check)(e,x.is.notUndef,"actionChannel(pattern, buffer): argument "+e+" is not a valid buffer")),M(U,{pattern:n,buffer:e})}function g(){return M(D,{})}function m(n){return(0,x.check)(n,x.is.channel,"flush(channel): argument "+n+" is not valid channel"),M(L,n)}function b(n,e){for(var t=arguments.length,r=Array(t>2?t-2:0),u=2;u<t;u++)r[u-2]=arguments[u];return l.apply(void 0,[j.takeEveryHelper,n,e].concat(r))}function k(n,e){for(var t=arguments.length,r=Array(t>2?t-2:0),u=2;u<t;u++)r[u-2]=arguments[u];return l.apply(void 0,[j.takeLatestHelper,n,e].concat(r))}function E(n,e,t){for(var r=arguments.length,u=Array(r>3?r-3:0),a=3;a<r;a++)u[a-3]=arguments[a];return l.apply(void 0,[j.throttleHelper,n,e,t].concat(u))}Object.defineProperty(e,"__esModule",{value:!0}),e.asEffect=e.takem=void 0;var _=function(){function n(n,e){var t=[],r=!0,u=!1,a=void 0;try{for(var i,o=n[Symbol.iterator]();!(r=(i=o.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){u=!0,a=n}finally{try{!r&&o.return&&o.return()}finally{if(u)throw a}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.take=u,e.put=a,e.race=i,e.call=c,e.apply=f,e.cps=s,e.fork=l,e.spawn=d,e.join=p,e.cancel=h,e.select=v,e.actionChannel=y,e.cancelled=g,e.flush=m,e.takeEvery=b,e.takeLatest=k,e.throttle=E;var x=t("./node_modules/redux-saga/lib/internal/utils.js"),j=t("./node_modules/redux-saga/lib/internal/sagaHelpers.js"),w=(0,x.sym)("IO"),O="TAKE",A="PUT",T="RACE",I="CALL",C="CPS",S="FORK",N="JOIN",R="CANCEL",P="SELECT",U="ACTION_CHANNEL",D="CANCELLED",L="FLUSH",q=function(n,e){return n+" has been deprecated in favor of "+e+", please update your code"},M=function(n,e){var t;return t={},r(t,w,!0),r(t,n,e),t};u.maybe=function(){var n=u.apply(void 0,arguments);return n[O].maybe=!0,n};e.takem=(0,x.deprecate)(u.maybe,q("takem","take.maybe"));a.resolve=function(){var n=a.apply(void 0,arguments);return n[A].resolve=!0,n},a.sync=(0,x.deprecate)(a.resolve,q("put.sync","put.resolve"));var H=function(n){return n[x.TASK]},F=function(n){return function(e){return e&&e[w]&&e[n]}};e.asEffect={take:F(O),put:F(A),race:F(T),call:F(I),cps:F(C),fork:F(S),join:F(N),cancel:F(R),select:F(P),actionChannel:F(U),cancelled:F(D),flush:F(L)}},"./node_modules/redux-saga/lib/internal/sagaHelpers.js":function(n,e,t){"use strict";function r(n,e){function t(e,t){if(a===h)return p;if(t)throw a=h,t;u&&u(e);var r=n[a](),i=c(r,3),o=i[0],f=i[1],s=i[2];return a=o,u=s,a===h?p:f}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"iterator",u=void 0,a=e;return(0,s.makeIterator)(t,function(n){return t(null,n)},r,!0)}function u(n){return s.is.channel(n)?"channel":Array.isArray(n)?String(n.map(function(n){return String(n)})):String(n)}function a(n,e){for(var t=arguments.length,a=Array(t>2?t-2:0),i=2;i<t;i++)a[i-2]=arguments[i];var o={done:!1,value:(0,l.take)(n)},c=function(n){return{done:!1,value:l.fork.apply(void 0,[e].concat(a,[n]))}},s=void 0,d=function(n){return s=n};return r({q1:function(){return["q2",o,d]},q2:function(){return s===f.END?[h]:["q1",c(s)]}},"q1","takeEvery("+u(n)+", "+e.name+")")}function i(n,e){for(var t=arguments.length,a=Array(t>2?t-2:0),i=2;i<t;i++)a[i-2]=arguments[i];var o={done:!1,value:(0,l.take)(n)},c=function(n){return{done:!1,value:l.fork.apply(void 0,[e].concat(a,[n]))}},s=function(n){return{done:!1,value:(0,l.cancel)(n)}},d=void 0,p=void 0,v=function(n){return d=n},y=function(n){return p=n};return r({q1:function(){return["q2",o,y]},q2:function(){return p===f.END?[h]:d?["q3",s(d)]:["q1",c(p),v]},q3:function(){return["q1",c(p),v]}},"q1","takeLatest("+u(n)+", "+e.name+")")}function o(n,e,t){for(var a=arguments.length,i=Array(a>3?a-3:0),o=3;o<a;o++)i[o-3]=arguments[o];var c=void 0,p=void 0,v={done:!1,value:(0,l.actionChannel)(e,d.buffers.sliding(1))},y=function(){return{done:!1,value:(0,l.take)(p,e)}},g=function(n){return{done:!1,value:l.fork.apply(void 0,[t].concat(i,[n]))}},m={done:!1,value:(0,l.call)(s.delay,n)},b=function(n){return c=n},k=function(n){return p=n};return r({q1:function(){return["q2",v,k]},q2:function(){return["q3",y(),b]},q3:function(){return c===f.END?[h]:["q4",g(c)]},q4:function(){return["q2",m]}},"q1","throttle("+u(e)+", "+t.name+")")}Object.defineProperty(e,"__esModule",{value:!0}),e.throttle=e.takeLatest=e.takeEvery=void 0;var c=function(){function n(n,e){var t=[],r=!0,u=!1,a=void 0;try{for(var i,o=n[Symbol.iterator]();!(r=(i=o.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(n){u=!0,a=n}finally{try{!r&&o.return&&o.return()}finally{if(u)throw a}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.takeEveryHelper=a,e.takeLatestHelper=i,e.throttleHelper=o;var f=t("./node_modules/redux-saga/lib/internal/channel.js"),s=t("./node_modules/redux-saga/lib/internal/utils.js"),l=t("./node_modules/redux-saga/lib/internal/io.js"),d=t("./node_modules/redux-saga/lib/internal/buffers.js"),p={done:!0,value:void 0},h={},v=function(n){return"import "+n+" from 'redux-saga' has been deprecated in favor of import "+n+" from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield "+n+" will return task descriptor to your saga and execute next lines of code."};e.takeEvery=(0,s.deprecate)(a,v("takeEvery")),e.takeLatest=(0,s.deprecate)(i,v("takeLatest")),e.throttle=(0,s.deprecate)(o,v("throttle"))},"./node_modules/redux-saga/lib/internal/scheduler.js":function(n,e,t){"use strict";function r(n){try{a(),n()}finally{i()}}function u(n){c?o.push(n):r(n)}function a(){c++}function i(){c--,!c&&o.length&&r(o.shift())}Object.defineProperty(e,"__esModule",{value:!0}),e.asap=u,e.suspend=a,e.flush=i;var o=[],c=0},"./node_modules/redux-saga/lib/internal/utils.js":function(n,e,t){"use strict";function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e,t){if(!e(n))throw d("error","uncaught at check",t),new Error(t)}function a(n,e){var t=n.indexOf(e);t>=0&&n.splice(t,1)}function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=v({},n),t=new Promise(function(n,t){e.resolve=n,e.reject=t});return e.promise=t,e}function o(n){for(var e=[],t=0;t<n;t++)e.push(i());return e}function c(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=void 0,r=new Promise(function(r){t=setTimeout(function(){return r(e)},n)});return r[k]=function(){return clearTimeout(t)},r}function f(){var n,e=!0,t=void 0,u=void 0;return n={},r(n,m,!0),r(n,"isRunning",function(){return e}),r(n,"result",function(){return t}),r(n,"error",function(){return u}),r(n,"setRunning",function(n){return e=n}),r(n,"setResult",function(n){return t=n}),r(n,"setError",function(n){return u=n}),n}function s(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return++n}}function l(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],u={name:t,next:n,throw:e,return:O};return r&&(u[b]=!0),"undefined"!=typeof Symbol&&(u[Symbol.iterator]=function(){return u}),u}function d(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";"undefined"==typeof window?console.log("redux-saga "+n+": "+e+"\n"+(t&&t.stack||t)):console[n](e,t)}function p(n,e){return function(){return x&&d("warn",e),n.apply(void 0,arguments)}}function h(n){return function(e){var t=Object.defineProperty(e,E,{value:!0});return n(t)}}Object.defineProperty(e,"__esModule",{value:!0});var v=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};e.check=u,e.remove=a,e.deferred=i,e.arrayOfDeffered=o,e.delay=c,e.createMockTask=f,e.autoInc=s,e.makeIterator=l,e.log=d,e.deprecate=p,e.wrapSagaDispatch=h;var g=e.sym=function(n){return"@@redux-saga/"+n},m=e.TASK=g("TASK"),b=e.HELPER=g("HELPER"),k=(e.MATCH=g("MATCH"),e.CANCEL=g("cancelPromise")),E=e.SAGA_ACTION=g("SAGA_ACTION"),_=e.konst=function(n){return function(){return n}},x=(e.kTrue=_(!0),e.kFalse=_(!1),e.noop=function(){},e.ident=function(n){return n},e.isDev=!1),j=e.is={undef:function(n){return null===n||void 0===n},notUndef:function(n){return null!==n&&void 0!==n},func:function(n){return"function"==typeof n},number:function(n){return"number"==typeof n},array:Array.isArray,promise:function(n){return n&&j.func(n.then)},iterator:function(n){return n&&j.func(n.next)&&j.func(n.throw)},task:function(n){return n&&n[m]},observable:function(n){return n&&j.func(n.subscribe)},buffer:function(n){return n&&j.func(n.isEmpty)&&j.func(n.take)&&j.func(n.put)},pattern:function(n){return n&&("string"==typeof n||"symbol"===("undefined"==typeof n?"undefined":y(n))||j.func(n)||j.array(n))},channel:function(n){return n&&j.func(n.take)&&j.func(n.close)},helper:function(n){return n&&n[b]}},w=(e.uid=s(),function(n){throw n}),O=function(n){return{value:n,done:!0}};e.internalErr=function(n){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+n+"\n")}}});