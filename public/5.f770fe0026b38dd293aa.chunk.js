webpackJsonp([5],{"./app/containers/Study/constants.js":function(t,n,e){"use strict";e.d(n,"b",function(){return r}),e.d(n,"c",function(){return u}),e.d(n,"i",function(){return d}),e.d(n,"j",function(){return a}),e.d(n,"l",function(){return i}),e.d(n,"m",function(){return p}),e.d(n,"n",function(){return c}),e.d(n,"k",function(){return I}),e.d(n,"d",function(){return s}),e.d(n,"e",function(){return T}),e.d(n,"p",function(){return E}),e.d(n,"o",function(){return o}),e.d(n,"q",function(){return _}),e.d(n,"s",function(){return A}),e.d(n,"t",function(){return O}),e.d(n,"r",function(){return N}),e.d(n,"v",function(){return S}),e.d(n,"u",function(){return C}),e.d(n,"f",function(){return f}),e.d(n,"h",function(){return y}),e.d(n,"g",function(){return R}),e.d(n,"a",function(){return v}),e.d(n,"w",function(){return l}),e.d(n,"x",function(){return V});var r="app/Study/REQUEST_STUDY_ACTION",u="app/Study/RELOAD_STUDY_ACTION",d="app/Study/DEFAULT_ACTION",a="app/Study/CROWD_ACTION",i="app/Study/DESCRIPTIVE_ACTION",p="app/Study/ADMIN_ACTION",c="app/Study/RECRUITMENT_ACTION",I="app/Study/TRACKING_ACTION",s="app/Study/WIKI_ACTION",T="app/Study/WIKI_SUBMIT_ACTION",E="app/Study/TAG_SUBMIT_ACTION",o="app/Study/TAG_REMOVE_ACTION",_="app/Study/REVIEW_SUBMIT_ACTION",A="app/Study/REVIEWS_RECEIVE_ACTION",O="app/Study/REVIEW_RECEIVE_ACTION",N="app/Study/REVIEW_UPDATE_ACTION",S="app/Study/REVIEW_DELETE_ACTION",C="app/Study/GET_REVIEW_ACTION",f="app/Study/ANNOTATION_CREATE_ACTION",y="app/Study/ANNOTATION_DELETE_ACTION",R="app/Study/ANNOTATION_UPDATE_ACTION",v="app/Study/WIKI_OVERRIDE_ACTION",l="app/Study/WRITE_REVIEW_ACTION",V="app/Study/CLEAR_REVIEW_ACTION"},"./app/containers/Study/reducer.js":function(t,n,e){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments[1];switch(n.type){case a.i:return t.set("study",n.data);case a.j:return t.set("crowd",n.data);case a.k:return t.set("tracking",n.data);case a.l:return t.set("descriptive",n.data);case a.m:return t.set("administrative",n.data);case a.n:return t.set("recruitment",n.data);case a.x:return t.set("review",{});case a.s:return t.set("reviews",n.data);case a.t:return t.set("review",n.data);case d.LOCATION_CHANGE:return t.set("review",{});case a.d:return t.set("wiki",e.i(u.fromJS)(n.data));case a.a:return t.set("wikiOverride",n.shouldOverride);default:return t}}Object.defineProperty(n,"__esModule",{value:!0});var u=e("./node_modules/immutable/dist/immutable.js"),d=(e.n(u),e("./node_modules/react-router-redux/lib/index.js")),a=(e.n(d),e("./app/containers/Study/constants.js")),i=e.i(u.fromJS)({wikiOverride:!0});n.default=r}});