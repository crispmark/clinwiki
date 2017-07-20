webpackJsonp([4],{"./app/containers/Study/actions.js":function(e,n,t){"use strict";var r=t("./app/containers/Study/constants.js");t.d(n,"f",function(){return u}),t.d(n,"b",function(){return a}),t.d(n,"a",function(){return i}),t.d(n,"u",function(){return c}),t.d(n,"c",function(){return o}),t.d(n,"m",function(){return s}),t.d(n,"l",function(){return f}),t.d(n,"k",function(){return d}),t.d(n,"o",function(){return l}),t.d(n,"p",function(){return p}),t.d(n,"q",function(){return v}),t.d(n,"r",function(){return h}),t.d(n,"s",function(){return y}),t.d(n,"e",function(){return g}),t.d(n,"d",function(){return m}),t.d(n,"g",function(){return x}),t.d(n,"h",function(){return k}),t.d(n,"t",function(){return w}),t.d(n,"v",function(){return b}),t.d(n,"j",function(){return E}),t.d(n,"i",function(){return I}),t.d(n,"n",function(){return O}),t.d(n,"w",function(){return _});var u=function(e,n){return{type:r.a,nctId:e,shouldOverride:n}},a=function(e){return{type:r.b,nctId:e}},i=function(e){return{type:r.c,nctId:e}},c=function(e){return{type:r.d,data:e}},o=function(e,n){return{type:r.e,nctId:e,wikiText:n}},s=function(e,n,t){return{type:r.f,nctId:e,key:n,value:t}},f=function(e,n,t){return{type:r.g,nctId:e,key:n,value:t}},d=function(e,n){return{type:r.h,nctId:e,key:n}},l=function(e){return{type:r.i,data:e}},p=function(e){return{type:r.k,data:e}},v=function(e){return{type:r.l,data:e}},h=function(e){return{type:r.m,data:e}},y=function(e){return{type:r.n,data:e}},g=function(e,n){return{type:r.o,nctId:e,tag:n}},m=function(e,n){return{type:r.p,nctId:e,tag:n}},x=function(e,n,t){return{type:r.q,nctId:e,review:n,stars:t}},k=function(e,n,t,u){return{type:r.r,nctId:e,reviewId:n,review:t,stars:u}},w=function(e){return{type:r.s,data:e}},b=function(e){return{type:r.t,data:e}},E=function(e){return{type:r.u,reviewId:e}},I=function(e,n){return{type:r.v,nctId:e,reviewId:n}},O=function(e){return{type:r.w,nctId:e}},_=function(){return{type:r.x}}},"./app/containers/Study/constants.js":function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"c",function(){return u}),t.d(n,"i",function(){return a}),t.d(n,"j",function(){return i}),t.d(n,"l",function(){return c}),t.d(n,"m",function(){return o}),t.d(n,"n",function(){return s}),t.d(n,"k",function(){return f}),t.d(n,"d",function(){return d}),t.d(n,"e",function(){return l}),t.d(n,"p",function(){return p}),t.d(n,"o",function(){return v}),t.d(n,"q",function(){return h}),t.d(n,"s",function(){return y}),t.d(n,"t",function(){return g}),t.d(n,"r",function(){return m}),t.d(n,"v",function(){return x}),t.d(n,"u",function(){return k}),t.d(n,"f",function(){return w}),t.d(n,"h",function(){return b}),t.d(n,"g",function(){return E}),t.d(n,"a",function(){return I}),t.d(n,"w",function(){return O}),t.d(n,"x",function(){return _});var r="app/Study/REQUEST_STUDY_ACTION",u="app/Study/RELOAD_STUDY_ACTION",a="app/Study/DEFAULT_ACTION",i="app/Study/CROWD_ACTION",c="app/Study/DESCRIPTIVE_ACTION",o="app/Study/ADMIN_ACTION",s="app/Study/RECRUITMENT_ACTION",f="app/Study/TRACKING_ACTION",d="app/Study/WIKI_ACTION",l="app/Study/WIKI_SUBMIT_ACTION",p="app/Study/TAG_SUBMIT_ACTION",v="app/Study/TAG_REMOVE_ACTION",h="app/Study/REVIEW_SUBMIT_ACTION",y="app/Study/REVIEWS_RECEIVE_ACTION",g="app/Study/REVIEW_RECEIVE_ACTION",m="app/Study/REVIEW_UPDATE_ACTION",x="app/Study/REVIEW_DELETE_ACTION",k="app/Study/GET_REVIEW_ACTION",w="app/Study/ANNOTATION_CREATE_ACTION",b="app/Study/ANNOTATION_DELETE_ACTION",E="app/Study/ANNOTATION_UPDATE_ACTION",I="app/Study/WIKI_OVERRIDE_ACTION",O="app/Study/WRITE_REVIEW_ACTION",_="app/Study/CLEAR_REVIEW_ACTION"},"./app/containers/Study/sagas.js":function(e,n,t){"use strict";function r(e){var n,r;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.i(S.select)(t.i(H.d)());case 2:return n=u.sent,u.next=5,q.a.get("/studies/"+e.nctId+"/json?wiki_override="+n);case 5:return r=u.sent,u.next=8,t.i(S.put)(t.i(D.o)(r.data));case 8:case"end":return u.stop()}},M[0],this)}function u(e){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,q.a.get("/studies/"+e.nctId+"/tracking");case 2:return n=r.sent,r.next=5,t.i(S.put)(t.i(D.p)(n.data));case 5:case"end":return r.stop()}},M[1],this)}function a(e){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,q.a.get("/studies/"+e.nctId+"/descriptive");case 2:return n=r.sent,r.next=5,t.i(S.put)(t.i(D.q)(n.data));case 5:case"end":return r.stop()}},M[2],this)}function i(e){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,q.a.get("/studies/"+e.nctId+"/administrative");case 2:return n=r.sent,r.next=5,t.i(S.put)(t.i(D.r)(n.data));case 5:case"end":return r.stop()}},M[3],this)}function c(e){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,q.a.get("/studies/"+e.nctId+"/recruitment");case 2:return n=r.sent,r.next=5,t.i(S.put)(t.i(D.s)(n.data));case 5:case"end":return r.stop()}},M[4],this)}function o(e){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,q.a.get("/reviews/"+e.nctId);case 2:return n=r.sent,r.next=5,t.i(S.put)(t.i(D.t)(n.data));case 5:case"end":return r.stop()}},M[5],this)}function s(e){var n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,q.a.get("/studies/"+e.nctId+"/wiki");case 2:return n=r.sent,r.next=5,t.i(S.put)(t.i(D.u)(n.data));case 5:case"end":return r.stop()}},M[6],this)}function f(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(S.call)(r,e);case 2:return n.next=4,t.i(S.call)(s,e);case 4:return n.next=6,t.i(S.call)(u,e);case 6:return n.next=8,t.i(S.call)(a,e);case 8:return n.next=10,t.i(S.call)(i,e);case 10:return n.next=12,t.i(S.call)(c,e);case 12:return n.next=14,t.i(S.call)(o,e);case 14:case"end":return n.stop()}},M[7],this)}function d(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(S.call)(r,e);case 2:return n.next=4,t.i(S.call)(s,e);case 4:return n.next=6,t.i(S.call)(o,e);case 6:case"end":return n.stop()}},M[8],this)}function l(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.post(G(e),{wiki_text:e.wikiText});case 2:return n.next=4,t.i(S.put)({type:U.c,nctId:e.nctId});case 4:case"end":return n.stop()}},M[9],this)}function p(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.post(G(e),{add_meta:e});case 2:return n.next=4,t.i(S.put)({type:U.c,nctId:e.nctId});case 4:case"end":return n.stop()}},M[10],this)}function v(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.post(G(e),{delete_meta:{key:e.key}});case 2:return n.next=4,t.i(S.put)({type:U.c,nctId:e.nctId});case 4:case"end":return n.stop()}},M[11],this)}function h(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.post(G(e),{add_tag:e.tag});case 2:return n.next=4,t.i(S.put)({type:U.c,nctId:e.nctId});case 4:case"end":return n.stop()}},M[12],this)}function y(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.post(G(e),{remove_tag:e.tag});case 2:return n.next=4,t.i(S.put)({type:U.c,nctId:e.nctId});case 4:case"end":return n.stop()}},M[13],this)}function g(){var e,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.i(S.takeEvery)(U.b,f);case 2:return e=r.sent,r.next=5,t.i(S.takeEvery)(U.c,d);case 5:return n=r.sent,r.next=8,t.i(S.take)(P.LOCATION_CHANGE);case 8:return r.next=10,t.i(S.cancel)(e);case 10:return r.next=12,t.i(S.cancel)(n);case 12:case"end":return r.stop()}},M[14],this)}function m(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(S.takeEvery)(U.e,l);case 2:return e=n.sent,n.next=5,t.i(S.take)(P.LOCATION_CHANGE);case 5:return n.next=7,t.i(S.cancel)(e);case 7:case"end":return n.stop()}},M[15],this)}function x(){var e,n,r;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,t.i(S.takeEvery)(U.f,p);case 2:return e=u.sent,u.next=5,t.i(S.takeEvery)(U.h,v);case 5:return n=u.sent,u.next=8,t.i(S.takeEvery)(U.g,p);case 8:return r=u.sent,u.next=11,t.i(S.take)(P.LOCATION_CHANGE);case 11:return u.next=13,t.i(S.cancel)(e);case 13:return u.next=15,t.i(S.cancel)(n);case 15:return u.next=17,t.i(S.cancel)(r);case 17:case"end":return u.stop()}},M[16],this)}function k(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(S.takeEvery)(U.p,h);case 2:return e=n.sent,n.next=5,t.i(S.take)(P.LOCATION_CHANGE);case 5:return n.next=7,t.i(S.cancel)(e);case 7:case"end":return n.stop()}},M[17],this)}function w(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(S.takeEvery)(U.o,y);case 2:return e=n.sent,n.next=5,t.i(S.take)(P.LOCATION_CHANGE);case 5:return n.next=7,t.i(S.cancel)(e);case 7:case"end":return n.stop()}},M[18],this)}function b(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(S.takeEvery)(U.a,d);case 2:return e=n.sent,n.next=5,t.i(S.take)(P.LOCATION_CHANGE);case 5:return n.next=7,t.i(S.cancel)(e);case 7:case"end":return n.stop()}},M[19],this)}function E(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.post("/reviews/"+e.nctId,e);case 2:return n.next=4,t.i(S.call)(d,e);case 4:L.a.push("/reviews/"+e.nctId);case 5:case"end":return n.stop()}},M[20],this)}function I(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(S.takeEvery)(U.q,E);case 2:return e=n.sent,n.next=5,t.i(S.take)(P.LOCATION_CHANGE);case 5:return n.next=7,t.i(S.cancel)(e);case 7:case"end":return n.stop()}},M[21],this)}function O(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.patch("/review/"+e.reviewId,e);case 2:return n.next=4,t.i(S.call)(d,e);case 4:L.a.push("/reviews/"+e.nctId);case 5:case"end":return n.stop()}},M[22],this)}function _(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(S.takeEvery)(U.r,O);case 2:return e=n.sent,n.next=5,t.i(S.take)(P.LOCATION_CHANGE);case 5:return n.next=7,t.i(S.cancel)(e);case 7:case"end":return n.stop()}},M[23],this)}function A(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.a.delete("/review/"+e.reviewId);case 2:return n.next=4,t.i(S.call)(d,e);case 4:L.a.push("/reviews/"+e.nctId);case 5:case"end":return n.stop()}},M[24],this)}function T(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(S.takeEvery)(U.v,A);case 2:return e=n.sent,n.next=5,t.i(S.take)(P.LOCATION_CHANGE);case 5:return n.next=7,t.i(S.cancel)(e);case 7:case"end":return n.stop()}},M[25],this)}function C(e){var n,r;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,q.a.get("/review/"+e.reviewId);case 2:return n=u.sent,r=n.data,u.next=6,t.i(S.put)(t.i(D.v)(r));case 6:case"end":return u.stop()}},M[26],this)}function j(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(S.takeEvery)(U.u,C);case 2:return e=n.sent,n.next=5,t.i(S.take)(P.LOCATION_CHANGE);case 5:return n.next=7,t.i(S.cancel)(e);case 7:case"end":return n.stop()}},M[27],this)}function N(e){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:L.a.push("/review/"+e.nctId);case 1:case"end":return n.stop()}},M[28],this)}function R(){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.i(S.takeEvery)(U.w,N);case 2:return e=n.sent,n.next=5,t.i(S.put)(t.i(D.w)());case 5:return n.next=7,t.i(S.take)(P.LOCATION_CHANGE);case 7:return n.next=9,t.i(S.cancel)(e);case 9:case"end":return n.stop()}},M[29],this)}Object.defineProperty(n,"__esModule",{value:!0});var S=t("./node_modules/redux-saga/effects.js"),P=(t.n(S),t("./node_modules/react-router-redux/lib/index.js")),L=(t.n(P),t("./node_modules/react-router/es/index.js")),U=t("./app/containers/Study/constants.js"),H=t("./app/containers/Study/selectors.js"),D=t("./app/containers/Study/actions.js"),q=t("./app/utils/client.js");n.loadDefault=r,n.loadTracking=u,n.loadDescriptive=a,n.loadAdmin=i,n.loadRecruitment=c,n.loadReviews=o,n.loadWiki=s,n.loadStudy=f,n.reloadStudy=d,t.d(n,"wikiUrl",function(){return G}),n.submitWiki=l,n.postAnnotation=p,n.deleteAnnotation=v,n.submitTag=h,n.removeTag=y,n.reloadStudySaga=g,n.wikiSaga=m,n.annotationsSaga=x,n.tagsSubmitSaga=k,n.tagRemoveSaga=w,n.wikiOverrideSaga=b,n.submitReview=E,n.submitReviewSaga=I,n.updateReview=O,n.updateReviewSaga=_,n.deleteReview=A,n.deleteReviewSaga=T,n.getReview=C,n.getReviewSaga=j,n.writeReview=N,n.writeReviewSaga=R;var M=[r,u,a,i,c,o,s,f,d,l,p,v,h,y,g,m,x,k,w,b,E,I,O,_,A,T,C,j,N,R].map(regeneratorRuntime.mark),G=function(e){return"/studies/"+e.nctId+"/wiki"};n.default=[g,m,x,k,w,b,I,T,_,j,R]},"./app/containers/Study/selectors.js":function(e,n,t){"use strict";var r=t("./node_modules/reselect/es/index.js"),u=t("./node_modules/immutable/dist/immutable.js");t.n(u);t.d(n,"c",function(){return c}),t.d(n,"b",function(){return o}),t.d(n,"d",function(){return s});var a=function(){return function(e){return e.get("study")}},i=function(){return t.i(r.a)(a(),function(e){return e.toJS()})},c=function(){return t.i(r.a)(a(),function(e){return e.getIn(["wiki","meta"],t.i(u.fromJS)({})).toJS()})},o=function(){return t.i(r.a)(a(),function(e){return e.get("wiki",t.i(u.fromJS)({})).toJS()})},s=function(){return t.i(r.a)(a(),function(e){return e.get("wikiOverride",!0)})};n.a=i},"./node_modules/redux-saga/effects.js":function(e,n,t){e.exports=t("./node_modules/redux-saga/lib/effects.js")},"./node_modules/redux-saga/lib/effects.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./node_modules/redux-saga/lib/internal/io.js");Object.defineProperty(n,"take",{enumerable:!0,get:function(){return r.take}}),Object.defineProperty(n,"takem",{enumerable:!0,get:function(){return r.takem}}),Object.defineProperty(n,"put",{enumerable:!0,get:function(){return r.put}}),Object.defineProperty(n,"race",{enumerable:!0,get:function(){return r.race}}),Object.defineProperty(n,"call",{enumerable:!0,get:function(){return r.call}}),Object.defineProperty(n,"apply",{enumerable:!0,get:function(){return r.apply}}),Object.defineProperty(n,"cps",{enumerable:!0,get:function(){return r.cps}}),Object.defineProperty(n,"fork",{enumerable:!0,get:function(){return r.fork}}),Object.defineProperty(n,"spawn",{enumerable:!0,get:function(){return r.spawn}}),Object.defineProperty(n,"join",{enumerable:!0,get:function(){return r.join}}),Object.defineProperty(n,"cancel",{enumerable:!0,get:function(){return r.cancel}}),Object.defineProperty(n,"select",{enumerable:!0,get:function(){return r.select}}),Object.defineProperty(n,"actionChannel",{enumerable:!0,get:function(){return r.actionChannel}}),Object.defineProperty(n,"cancelled",{enumerable:!0,get:function(){return r.cancelled}}),Object.defineProperty(n,"flush",{enumerable:!0,get:function(){return r.flush}}),Object.defineProperty(n,"takeEvery",{enumerable:!0,get:function(){return r.takeEvery}}),Object.defineProperty(n,"takeLatest",{enumerable:!0,get:function(){return r.takeLatest}}),Object.defineProperty(n,"throttle",{enumerable:!0,get:function(){return r.throttle}})},"./node_modules/redux-saga/lib/internal/buffers.js":function(e,n,t){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments[1],t=new Array(e),r=0,u=0,c=0,f=function(n){t[u]=n,u=(u+1)%e,r++},d=function(){if(0!=r){var n=t[c];return t[c]=null,r--,c=(c+1)%e,n}},l=function(){for(var e=[];r;)e.push(d());return e};return{isEmpty:function(){return 0==r},put:function(d){if(r<e)f(d);else{var p=void 0;switch(n){case i:throw new Error(a);case o:t[u]=d,u=(u+1)%e,c=u;break;case s:p=2*e,t=l(),r=t.length,u=t.length,c=0,t.length=p,e=p,f(d)}}},take:d,flush:l}}Object.defineProperty(n,"__esModule",{value:!0}),n.buffers=n.BUFFER_OVERFLOW=void 0;var u=t("./node_modules/redux-saga/lib/internal/utils.js"),a=n.BUFFER_OVERFLOW="Channel's Buffer overflow!",i=1,c=2,o=3,s=4,f={isEmpty:u.kTrue,put:u.noop,take:u.noop};n.buffers={none:function(){return f},fixed:function(e){return r(e,i)},dropping:function(e){return r(e,c)},sliding:function(e){return r(e,o)},expanding:function(e){return r(e,s)}}},"./node_modules/redux-saga/lib/internal/channel.js":function(e,n,t){"use strict";function r(){function e(e){return t.push(e),function(){return(0,o.remove)(t,e)}}function n(e){for(var n=t.slice(),r=0,u=n.length;r<u;r++)n[r](e)}var t=[];return{subscribe:e,emit:n}}function u(){function e(){if(i&&c.length)throw(0,o.internalErr)("Cannot have a closed channel with pending takers");if(c.length&&!a.isEmpty())throw(0,o.internalErr)("Cannot have pending takers with non empty buffer")}function n(n){if(e(),(0,o.check)(n,o.is.notUndef,h),!i){if(!c.length)return a.put(n);for(var t=0;t<c.length;t++){var r=c[t];if(!r[o.MATCH]||r[o.MATCH](n))return c.splice(t,1),r(n)}}}function t(n){e(),(0,o.check)(n,o.is.func,"channel.take's callback must be a function"),i&&a.isEmpty()?n(l):a.isEmpty()?(c.push(n),n.cancel=function(){return(0,o.remove)(c,n)}):n(a.take())}function r(n){return e(),(0,o.check)(n,o.is.func,"channel.flush' callback must be a function"),i&&a.isEmpty()?void n(l):void n(a.flush())}function u(){if(e(),!i&&(i=!0,c.length)){var n=c;c=[];for(var t=0,r=n.length;t<r;t++)n[t](l)}}var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.buffers.fixed(),i=!1,c=[];return(0,o.check)(a,o.is.buffer,v),{take:t,put:n,flush:r,close:u,get __takers__(){return c},get __closed__(){return i}}}function a(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.buffers.none(),t=arguments[2];arguments.length>2&&(0,o.check)(t,o.is.func,"Invalid match function passed to eventChannel");var r=u(n),a=e(function(e){return p(e)?void r.close():void(t&&!t(e)||r.put(e))});if(!o.is.func(a))throw new Error("in eventChannel: subscribe should return a function to unsubscribe");return{take:r.take,flush:r.flush,close:function(){r.__closed__||(r.close(),a())}}}function i(e){var n=a(function(n){return e(function(e){return e[o.SAGA_ACTION]?void n(e):void(0,f.asap)(function(){return n(e)})})});return c({},n,{take:function(e,t){arguments.length>1&&((0,o.check)(t,o.is.func,"channel.take's matcher argument must be a function"),e[o.MATCH]=t),n.take(e)}})}Object.defineProperty(n,"__esModule",{value:!0}),n.UNDEFINED_INPUT_ERROR=n.INVALID_BUFFER=n.isEnd=n.END=void 0;var c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e};n.emitter=r,n.channel=u,n.eventChannel=a,n.stdChannel=i;var o=t("./node_modules/redux-saga/lib/internal/utils.js"),s=t("./node_modules/redux-saga/lib/internal/buffers.js"),f=t("./node_modules/redux-saga/lib/internal/scheduler.js"),d="@@redux-saga/CHANNEL_END",l=n.END={type:d},p=n.isEnd=function(e){return e&&e.type===d},v=n.INVALID_BUFFER="invalid buffer passed to channel factory function",h=n.UNDEFINED_INPUT_ERROR="Saga was provided with an undefined action"},"./node_modules/redux-saga/lib/internal/io.js":function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*";if(arguments.length&&(0,E.check)(arguments[0],E.is.notUndef,"take(patternOrChannel): patternOrChannel is undefined"),E.is.pattern(e))return q(_,{pattern:e});if(E.is.channel(e))return q(_,{channel:e});throw new Error("take(patternOrChannel): argument "+String(e)+" is not valid channel or a valid pattern")}function a(e,n){return arguments.length>1?((0,E.check)(e,E.is.notUndef,"put(channel, action): argument channel is undefined"),(0,E.check)(e,E.is.channel,"put(channel, action): argument "+e+" is not a valid channel"),(0,E.check)(n,E.is.notUndef,"put(channel, action): argument action is undefined")):((0,E.check)(e,E.is.notUndef,"put(action): argument action is undefined"),n=e,e=null),q(A,{channel:e,action:n})}function i(e){return q(T,e)}function c(e,n,t){(0,E.check)(n,E.is.notUndef,e+": argument fn is undefined");var r=null;if(E.is.array(n)){var u=n,a=b(u,2);r=a[0],n=a[1]}else if(n.fn){var i=n;r=i.context,n=i.fn}return(0,E.check)(n,E.is.func,e+": argument "+n+" is not a function"),{context:r,fn:n,args:t}}function o(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return q(C,c("call",e,t))}function s(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return q(C,c("apply",{context:e,fn:n},t))}function f(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return q(j,c("cps",e,t))}function d(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return q(N,c("fork",e,t))}function l(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var u=d.apply(void 0,[e].concat(t));return u[N].detached=!0,u}function p(e){if((0,E.check)(e,E.is.notUndef,"join(task): argument task is undefined"),!M(e))throw new Error("join(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return q(R,e)}function v(e){if((0,E.check)(e,E.is.notUndef,"cancel(task): argument task is undefined"),!M(e))throw new Error("cancel(task): argument "+e+" is not a valid Task object \n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)");return q(S,e)}function h(e){for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];return 0===arguments.length?e=E.ident:((0,E.check)(e,E.is.notUndef,"select(selector,[...]): argument selector is undefined"),(0,E.check)(e,E.is.func,"select(selector,[...]): argument "+e+" is not a function")),q(P,{selector:e,args:t})}function y(e,n){return(0,E.check)(e,E.is.notUndef,"actionChannel(pattern,...): argument pattern is undefined"),arguments.length>1&&((0,E.check)(n,E.is.notUndef,"actionChannel(pattern, buffer): argument buffer is undefined"),(0,E.check)(n,E.is.notUndef,"actionChannel(pattern, buffer): argument "+n+" is not a valid buffer")),q(L,{pattern:e,buffer:n})}function g(){return q(U,{})}function m(e){return(0,E.check)(e,E.is.channel,"flush(channel): argument "+e+" is not valid channel"),q(H,e)}function x(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),u=2;u<t;u++)r[u-2]=arguments[u];return d.apply(void 0,[I.takeEveryHelper,e,n].concat(r))}function k(e,n){for(var t=arguments.length,r=Array(t>2?t-2:0),u=2;u<t;u++)r[u-2]=arguments[u];return d.apply(void 0,[I.takeLatestHelper,e,n].concat(r))}function w(e,n,t){for(var r=arguments.length,u=Array(r>3?r-3:0),a=3;a<r;a++)u[a-3]=arguments[a];return d.apply(void 0,[I.throttleHelper,e,n,t].concat(u))}Object.defineProperty(n,"__esModule",{value:!0}),n.asEffect=n.takem=void 0;var b=function(){function e(e,n){var t=[],r=!0,u=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){u=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(u)throw a}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.take=u,n.put=a,n.race=i,n.call=o,n.apply=s,n.cps=f,n.fork=d,n.spawn=l,n.join=p,n.cancel=v,n.select=h,n.actionChannel=y,n.cancelled=g,n.flush=m,n.takeEvery=x,n.takeLatest=k,n.throttle=w;var E=t("./node_modules/redux-saga/lib/internal/utils.js"),I=t("./node_modules/redux-saga/lib/internal/sagaHelpers.js"),O=(0,E.sym)("IO"),_="TAKE",A="PUT",T="RACE",C="CALL",j="CPS",N="FORK",R="JOIN",S="CANCEL",P="SELECT",L="ACTION_CHANNEL",U="CANCELLED",H="FLUSH",D=function(e,n){return e+" has been deprecated in favor of "+n+", please update your code"},q=function(e,n){var t;return t={},r(t,O,!0),r(t,e,n),t};u.maybe=function(){var e=u.apply(void 0,arguments);return e[_].maybe=!0,e};n.takem=(0,E.deprecate)(u.maybe,D("takem","take.maybe"));a.resolve=function(){var e=a.apply(void 0,arguments);return e[A].resolve=!0,e},a.sync=(0,E.deprecate)(a.resolve,D("put.sync","put.resolve"));var M=function(e){return e[E.TASK]},G=function(e){return function(n){return n&&n[O]&&n[e]}};n.asEffect={take:G(_),put:G(A),race:G(T),call:G(C),cps:G(j),fork:G(N),join:G(R),cancel:G(S),select:G(P),actionChannel:G(L),cancelled:G(U),flush:G(H)}},"./node_modules/redux-saga/lib/internal/sagaHelpers.js":function(e,n,t){"use strict";function r(e,n){function t(n,t){if(a===v)return p;if(t)throw a=v,t;u&&u(n);var r=e[a](),i=o(r,3),c=i[0],s=i[1],f=i[2];return a=c,u=f,a===v?p:s}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"iterator",u=void 0,a=n;return(0,f.makeIterator)(t,function(e){return t(null,e)},r,!0)}function u(e){return f.is.channel(e)?"channel":Array.isArray(e)?String(e.map(function(e){return String(e)})):String(e)}function a(e,n){for(var t=arguments.length,a=Array(t>2?t-2:0),i=2;i<t;i++)a[i-2]=arguments[i];var c={done:!1,value:(0,d.take)(e)},o=function(e){return{done:!1,value:d.fork.apply(void 0,[n].concat(a,[e]))}},f=void 0,l=function(e){return f=e};return r({q1:function(){return["q2",c,l]},q2:function(){return f===s.END?[v]:["q1",o(f)]}},"q1","takeEvery("+u(e)+", "+n.name+")")}function i(e,n){for(var t=arguments.length,a=Array(t>2?t-2:0),i=2;i<t;i++)a[i-2]=arguments[i];var c={done:!1,value:(0,d.take)(e)},o=function(e){return{done:!1,value:d.fork.apply(void 0,[n].concat(a,[e]))}},f=function(e){return{done:!1,value:(0,d.cancel)(e)}},l=void 0,p=void 0,h=function(e){return l=e},y=function(e){return p=e};return r({q1:function(){return["q2",c,y]},q2:function(){return p===s.END?[v]:l?["q3",f(l)]:["q1",o(p),h]},q3:function(){return["q1",o(p),h]}},"q1","takeLatest("+u(e)+", "+n.name+")")}function c(e,n,t){for(var a=arguments.length,i=Array(a>3?a-3:0),c=3;c<a;c++)i[c-3]=arguments[c];var o=void 0,p=void 0,h={done:!1,value:(0,d.actionChannel)(n,l.buffers.sliding(1))},y=function(){return{done:!1,value:(0,d.take)(p,n)}},g=function(e){return{done:!1,value:d.fork.apply(void 0,[t].concat(i,[e]))}},m={done:!1,value:(0,d.call)(f.delay,e)},x=function(e){return o=e},k=function(e){return p=e};return r({q1:function(){return["q2",h,k]},q2:function(){return["q3",y(),x]},q3:function(){return o===s.END?[v]:["q4",g(o)]},q4:function(){return["q2",m]}},"q1","throttle("+u(n)+", "+t.name+")")}Object.defineProperty(n,"__esModule",{value:!0}),n.throttle=n.takeLatest=n.takeEvery=void 0;var o=function(){function e(e,n){var t=[],r=!0,u=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){u=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(u)throw a}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n.takeEveryHelper=a,n.takeLatestHelper=i,n.throttleHelper=c;var s=t("./node_modules/redux-saga/lib/internal/channel.js"),f=t("./node_modules/redux-saga/lib/internal/utils.js"),d=t("./node_modules/redux-saga/lib/internal/io.js"),l=t("./node_modules/redux-saga/lib/internal/buffers.js"),p={done:!0,value:void 0},v={},h=function(e){return"import "+e+" from 'redux-saga' has been deprecated in favor of import "+e+" from 'redux-saga/effects'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield "+e+" will return task descriptor to your saga and execute next lines of code."};n.takeEvery=(0,f.deprecate)(a,h("takeEvery")),n.takeLatest=(0,f.deprecate)(i,h("takeLatest")),n.throttle=(0,f.deprecate)(c,h("throttle"))},"./node_modules/redux-saga/lib/internal/scheduler.js":function(e,n,t){"use strict";function r(e){try{a(),e()}finally{i()}}function u(e){o?c.push(e):r(e)}function a(){o++}function i(){o--,!o&&c.length&&r(c.shift())}Object.defineProperty(n,"__esModule",{value:!0}),n.asap=u,n.suspend=a,n.flush=i;var c=[],o=0},"./node_modules/redux-saga/lib/internal/utils.js":function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n,t){if(!n(e))throw l("error","uncaught at check",t),new Error(t)}function a(e,n){var t=e.indexOf(n);t>=0&&e.splice(t,1)}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=h({},e),t=new Promise(function(e,t){n.resolve=e,n.reject=t});return n.promise=t,n}function c(e){for(var n=[],t=0;t<e;t++)n.push(i());return n}function o(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=void 0,r=new Promise(function(r){t=setTimeout(function(){return r(n)},e)});return r[k]=function(){return clearTimeout(t)},r}function s(){var e,n=!0,t=void 0,u=void 0;return e={},r(e,m,!0),r(e,"isRunning",function(){return n}),r(e,"result",function(){return t}),r(e,"error",function(){return u}),r(e,"setRunning",function(e){return n=e}),r(e,"setResult",function(e){return t=e}),r(e,"setError",function(e){return u=e}),e}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){return++e}}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments[3],u={name:t,next:e,throw:n,return:_};return r&&(u[x]=!0),"undefined"!=typeof Symbol&&(u[Symbol.iterator]=function(){return u}),u}function l(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";"undefined"==typeof window?console.log("redux-saga "+e+": "+n+"\n"+(t&&t.stack||t)):console[e](n,t)}function p(e,n){return function(){return E&&l("warn",n),e.apply(void 0,arguments)}}function v(e){return function(n){var t=Object.defineProperty(n,w,{value:!0});return e(t)}}Object.defineProperty(n,"__esModule",{value:!0});var h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.check=u,n.remove=a,n.deferred=i,n.arrayOfDeffered=c,n.delay=o,n.createMockTask=s,n.autoInc=f,n.makeIterator=d,n.log=l,n.deprecate=p,n.wrapSagaDispatch=v;var g=n.sym=function(e){return"@@redux-saga/"+e},m=n.TASK=g("TASK"),x=n.HELPER=g("HELPER"),k=(n.MATCH=g("MATCH"),n.CANCEL=g("cancelPromise")),w=n.SAGA_ACTION=g("SAGA_ACTION"),b=n.konst=function(e){return function(){return e}},E=(n.kTrue=b(!0),n.kFalse=b(!1),n.noop=function(){},n.ident=function(e){return e},n.isDev=!1),I=n.is={undef:function(e){return null===e||void 0===e},notUndef:function(e){return null!==e&&void 0!==e},func:function(e){return"function"==typeof e},number:function(e){return"number"==typeof e},array:Array.isArray,promise:function(e){return e&&I.func(e.then)},iterator:function(e){return e&&I.func(e.next)&&I.func(e.throw)},task:function(e){return e&&e[m]},observable:function(e){return e&&I.func(e.subscribe)},buffer:function(e){return e&&I.func(e.isEmpty)&&I.func(e.take)&&I.func(e.put)},pattern:function(e){return e&&("string"==typeof e||"symbol"===("undefined"==typeof e?"undefined":y(e))||I.func(e)||I.array(e))},channel:function(e){return e&&I.func(e.take)&&I.func(e.close)},helper:function(e){return e&&e[x]}},O=(n.uid=f(),function(e){throw e}),_=function(e){
return{value:e,done:!0}};n.internalErr=function(e){return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: "+e+"\n")}}});