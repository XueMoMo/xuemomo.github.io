(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"2mql":function(t,e,n){"use strict";var r=n("TOwV"),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function a(t){return r.isMemo(t)?c:s[t.$$typeof]||i}s[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[r.Memo]=c;var u=Object.defineProperty,f=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,d=Object.prototype;t.exports=function t(e,n,r){if("string"!==typeof n){if(d){var i=p(n);i&&i!==d&&t(e,i,r)}var c=f(n);h&&(c=c.concat(h(n)));for(var s=a(e),y=a(n),b=0;b<c.length;++b){var v=c[b];if(!o[v]&&(!r||!r[v])&&(!y||!y[v])&&(!s||!s[v])){var w=l(n,v);try{u(e,v,w)}catch(m){}}}}return e}},"3UD+":function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},"5HXA":function(t,e,n){"use strict";var r=n("ANjH").compose;e.__esModule=!0,e.composeWithDevTools="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},e.devToolsEnhancer="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(t){return t}}},ANjH:function(t,e,n){"use strict";n.r(e),n.d(e,"__DO_NOT_USE__ActionTypes",(function(){return o})),n.d(e,"applyMiddleware",(function(){return b})),n.d(e,"bindActionCreators",(function(){return h})),n.d(e,"combineReducers",(function(){return u})),n.d(e,"compose",(function(){return y})),n.d(e,"createStore",(function(){return s}));var r=n("bCCX"),i=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function c(t){if("object"!==typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function s(t,e,n){var i;if("function"===typeof e&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"===typeof e&&"undefined"===typeof n&&(n=e,e=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error("Expected the enhancer to be a function.");return n(s)(t,e)}if("function"!==typeof t)throw new Error("Expected the reducer to be a function.");var a=t,u=e,f=[],h=f,l=!1;function p(){h===f&&(h=f.slice())}function d(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return u}function y(t){if("function"!==typeof t)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var e=!0;return p(),h.push(t),function(){if(e){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");e=!1,p();var n=h.indexOf(t);h.splice(n,1),f=null}}}function b(t){if(!c(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"===typeof t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,u=a(u,t)}finally{l=!1}for(var e=f=h,n=0;n<e.length;n++){(0,e[n])()}return t}function v(t){if("function"!==typeof t)throw new Error("Expected the nextReducer to be a function.");a=t,b({type:o.REPLACE})}function w(){var t,e=y;return(t={subscribe:function(t){if("object"!==typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(d())}return n(),{unsubscribe:e(n)}}})[r.a]=function(){return this},t}return b({type:o.INIT}),(i={dispatch:b,subscribe:y,getState:d,replaceReducer:v})[r.a]=w,i}function a(t,e){var n=e&&e.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function u(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];0,"function"===typeof t[i]&&(n[i]=t[i])}var c,s=Object.keys(n);try{!function(t){Object.keys(t).forEach((function(e){var n=t[e];if("undefined"===typeof n(void 0,{type:o.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if("undefined"===typeof n(void 0,{type:o.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(u){c=u}return function(t,e){if(void 0===t&&(t={}),c)throw c;for(var r=!1,i={},o=0;o<s.length;o++){var u=s[o],f=n[u],h=t[u],l=f(h,e);if("undefined"===typeof l){var p=a(u,e);throw new Error(p)}i[u]=l,r=r||l!==h}return(r=r||s.length!==Object.keys(t).length)?i:t}}function f(t,e){return function(){return e(t.apply(this,arguments))}}function h(t,e){if("function"===typeof t)return f(t,e);if("object"!==typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var n={};for(var r in t){var i=t[r];"function"===typeof i&&(n[r]=f(i,e))}return n}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function b(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(){var n=t.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=e.map((function(t){return t(i)}));return d({},n,{dispatch:r=y.apply(void 0,o)(n.dispatch)})}}}},BXYc:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return R}));var r=n("nKUr");function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=n("q1tI"),c=n.n(o),s=(n("17x9"),c.a.createContext(null));var a=function(t){t()},u={notify:function(){}};function f(){var t=a,e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t((function(){for(var t=e;t;)t.callback(),t=t.next}))},get:function(){for(var t=[],n=e;n;)t.push(n),n=n.next;return t},subscribe:function(t){var r=!0,i=n={callback:t,next:null,prev:n};return i.prev?i.prev.next=i:e=i,function(){r&&null!==e&&(r=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var h=function(){function t(t,e){this.store=t,this.parentSub=e,this.unsubscribe=null,this.listeners=u,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var e=t.prototype;return e.addNestedSub=function(t){return this.trySubscribe(),this.listeners.subscribe(t)},e.notifyNestedSubs=function(){this.listeners.notify()},e.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},e.isSubscribed=function(){return Boolean(this.unsubscribe)},e.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=f())},e.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=u)},t}();var l=function(t){var e=t.store,n=t.context,r=t.children,i=Object(o.useMemo)((function(){var t=new h(e);return t.onStateChange=t.notifyNestedSubs,{store:e,subscription:t}}),[e]),a=Object(o.useMemo)((function(){return e.getState()}),[e]);Object(o.useEffect)((function(){var t=i.subscription;return t.trySubscribe(),a!==e.getState()&&t.notifyNestedSubs(),function(){t.tryUnsubscribe(),t.onStateChange=null}}),[i,a]);var u=n||s;return c.a.createElement(u.Provider,{value:i},r)};n("2mql"),n("TOwV"),"undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?o.useLayoutEffect:o.useEffect;var p=n("ANjH");var d,y=n("i8i4");function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}d=y.unstable_batchedUpdates,a=d;var w,m=n("5HXA"),O=n("LvDl");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x={lastUpdate:0,light:!1,count:0},P=function(t,e,n){if(1===e.length)return n;for(var r=n,i=e,o=e.length-1;o--;o>=0){var c=i[i.length-1];if(i=Object(O.dropRight)(i),Object(O.size)(i)>0){var s=Object(O.get)(t,Object(O.join)(i,".")),a=s instanceof Array?v(s):j({},s);a[c]=r,r=a}}return r},S="UPDATE_STORE";var E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;if(e.type=S){var n=j({},t);e.list;return Object(O.each)(e.list,(function(t){var e=Object(O.split)(t.key,".");n[e[0]]=P(w,e,t.value)})),n}return t};function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return Object(p.createStore)(E,t,Object(m.composeWithDevTools)(Object(p.applyMiddleware)()))}function I(t){return Object(o.useMemo)((function(){return function(t){var e,n=null!==(e=w)&&void 0!==e?e:T(t);return t&&w&&(n=T(j(j({},w.getState()),t)),w=void 0),w||(w=n),n}(t)}),[t])}var M=function(){};M.prototype.init=function(t){return this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.particleNetwork=new D(this),this};var _=function(t,e,n){this.network=t,this.canvas=t.canvas,this.ctx=t.ctx,this.particleColor=N(this.network.options.particleColors),this.radius=C(1.5,2.5),this.opacity=0,this.x=e||Math.random()*this.canvas.width,this.y=n||Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*t.options.velocity,y:(Math.random()-.5)*t.options.velocity}};_.prototype.update=function(){this.opacity<1?this.opacity+=.01:this.opacity=1,(this.x>this.canvas.width+100||this.x<-100)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+100||this.y<-100)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},_.prototype.draw=function(){this.ctx.beginPath(),this.ctx.fillStyle=this.particleColor,this.ctx.globalAlpha=this.opacity,this.ctx.arc(this.x,this.y,this.radius,0,2*Math.PI),this.ctx.fill()};var D=function(t){this.options={velocity:1.2,density:13e3,netLineDistance:200,netLineColor:"#929292",particleColors:["#aaa"]},this.canvas=t.canvas,this.ctx=t.ctx,this.init()};D.prototype.init=function(){this.createParticles(!0),this.animationFrame=requestAnimationFrame(this.update.bind(this)),this.bindUiActions()},D.prototype.createParticles=function(t){var e=this;this.particles=[];var n=this.canvas.width*this.canvas.height/this.options.density;if(t){var r=0;clearInterval(this.createIntervalId);for(var i=0;i<n;i++)this.particles.push(new _(this));this.createIntervalId=setInterval(function(){r<n-1?this.particles.push(new _(this)):clearInterval(e.createIntervalId),r++}.bind(this),250)}else for(var o=0;o<n;o++)this.particles.push(new _(this))},D.prototype.createInteractionParticle=function(){return this.interactionParticle=new _(this),this.interactionParticle.velocity={x:0,y:0},this.particles.push(this.interactionParticle),this.interactionParticle},D.prototype.removeInteractionParticle=function(){var t=this.particles.indexOf(this.interactionParticle);t>-1&&(this.interactionParticle=void 0,this.particles.splice(t,1))},D.prototype.update=function(){if(this.canvas){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.globalAlpha=1;for(var t=0;t<this.particles.length;t++)for(var e=this.particles.length-1;e>t;e--){var n=void 0,r=this.particles[t],i=this.particles[e];(n=Math.min(Math.abs(r.x-i.x),Math.abs(r.y-i.y)))>this.options.netLineDistance||((n=Math.sqrt(Math.pow(r.x-i.x,2)+Math.pow(r.y-i.y,2)))>this.options.netLineDistance||(this.ctx.beginPath(),this.ctx.strokeStyle=this.options.netLineColor,this.ctx.globalAlpha=(this.options.netLineDistance-n)/this.options.netLineDistance*r.opacity*i.opacity,this.ctx.lineWidth=.7,this.ctx.moveTo(r.x,r.y),this.ctx.lineTo(i.x,i.y),this.ctx.stroke()))}for(var o=0;o<this.particles.length;o++)this.particles[o].update(),this.particles[o].draw();0!==this.options.velocity&&(this.animationFrame=requestAnimationFrame(this.update.bind(this)))}else cancelAnimationFrame(this.animationFrame)},D.prototype.bindUiActions=function(){this.spawnQuantity=3,this.mouseIsDown=!1,this.touchIsMoving=!1,this.onMouseMove=function(t){this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.clientX,this.interactionParticle.y=t.clientY}.bind(this),this.onTouchMove=function(t){t.preventDefault(),this.touchIsMoving=!0,this.interactionParticle||this.createInteractionParticle(),this.interactionParticle.x=t.changedTouches[0].clientX,this.interactionParticle.y=t.changedTouches[0].clientY}.bind(this),this.onMouseDown=function(t){this.mouseIsDown=!0;var e=0,n=this.spawnQuantity,r=setInterval(function(){if(this.mouseIsDown){1===e&&(n=1);for(var t=0;t<n;t++)this.interactionParticle&&this.particles.push(new _(this,this.interactionParticle.x,this.interactionParticle.y))}else clearInterval(r);e++}.bind(this),50)}.bind(this),this.onTouchStart=function(t){t.preventDefault(),setTimeout(function(){if(!this.touchIsMoving)for(var e=0;e<this.spawnQuantity;e++)this.particles.push(new _(this,t.changedTouches[0].clientX,t.changedTouches[0].clientY))}.bind(this),200)}.bind(this),this.onMouseUp=function(t){this.mouseIsDown=!1}.bind(this),this.onMouseOut=function(t){this.removeInteractionParticle()}.bind(this),this.onTouchEnd=function(t){t.preventDefault(),this.touchIsMoving=!1,this.removeInteractionParticle()}.bind(this),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("mouseout",this.onMouseOut),window.addEventListener("touchend",this.onTouchEnd)},D.prototype.unbindUiActions=function(){this.canvas&&(this.canvas.removeEventListener("mousemove",this.onMouseMove),this.canvas.removeEventListener("touchmove",this.onTouchMove),this.canvas.removeEventListener("mouseup",this.onMouseUp),this.canvas.removeEventListener("mouseout",this.onMouseOut),this.canvas.removeEventListener("touchend",this.onTouchEnd))};var C=function(t,e,n){var r=Math.random()*(e-t)+t;return n&&(r=Math.round(r)),r},N=function(t){return t[Math.floor(Math.random()*t.length)]},A=new M;function L(){var t=Object(o.useRef)(),e=Object(o.useRef)();return Object(o.useEffect)((function(){var t;e.current&&(t=e.current,A.init(t),console.info("---initBgAnim--\x3e"))}),[e.current]),Object(o.useEffect)((function(){if(t.current&&e.current){var n=e.current.offsetWidth,r=e.current.offsetHeight,i=setInterval((function(){var e,i,o=n!==t.current.offsetWidth||r!==t.current.offsetHeight;o&&(n=t.current.offsetWidth,r=t.current.offsetHeight,e=n,i=r,A.ctx.clearRect(0,0,A.canvas.width,A.canvas.height),A.canvas.width=e,A.canvas.height=i,A.particleNetwork.createParticles(),console.info("---\x3e",o))}),1e3);return function(){clearInterval(i)}}}),[t.current,e.current]),Object(r.jsx)("div",{ref:t,style:{width:"100vw",height:"100vh"},children:Object(r.jsx)("canvas",{ref:e})})}function $(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?$(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function R(t){var e=t.Component,n=t.pageProps,i=I(n.initialReduxState);return Object(r.jsxs)(l,{store:i,children:[Object(r.jsx)(L,{}),Object(r.jsx)("div",{style:{position:"absolute",left:0,top:0},children:Object(r.jsx)(e,k({},n))})]})}},SLVX:function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"===typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}n.d(e,"a",(function(){return r}))},TOwV:function(t,e,n){"use strict";t.exports=n("qT12")},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},bCCX:function(t,e,n){"use strict";(function(t,r){var i,o=n("SLVX");i="undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof t?t:r;var c=Object(o.a)(i);e.a=c}).call(this,n("yLpj"),n("3UD+")(t))},qT12:function(t,e,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,h=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,w=r?Symbol.for("react.block"):60121,m=r?Symbol.for("react.fundamental"):60117,O=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function j(t){if("object"===typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case h:case l:case c:case a:case s:case d:return t;default:switch(t=t&&t.$$typeof){case f:case p:case v:case b:case u:return t;default:return e}}case o:return e}}}function x(t){return j(t)===l}e.AsyncMode=h,e.ConcurrentMode=l,e.ContextConsumer=f,e.ContextProvider=u,e.Element=i,e.ForwardRef=p,e.Fragment=c,e.Lazy=v,e.Memo=b,e.Portal=o,e.Profiler=a,e.StrictMode=s,e.Suspense=d,e.isAsyncMode=function(t){return x(t)||j(t)===h},e.isConcurrentMode=x,e.isContextConsumer=function(t){return j(t)===f},e.isContextProvider=function(t){return j(t)===u},e.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return j(t)===p},e.isFragment=function(t){return j(t)===c},e.isLazy=function(t){return j(t)===v},e.isMemo=function(t){return j(t)===b},e.isPortal=function(t){return j(t)===o},e.isProfiler=function(t){return j(t)===a},e.isStrictMode=function(t){return j(t)===s},e.isSuspense=function(t){return j(t)===d},e.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===c||t===l||t===a||t===s||t===d||t===y||"object"===typeof t&&null!==t&&(t.$$typeof===v||t.$$typeof===b||t.$$typeof===u||t.$$typeof===f||t.$$typeof===p||t.$$typeof===m||t.$$typeof===O||t.$$typeof===g||t.$$typeof===w)},e.typeOf=j},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n}}]);