
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([2],{120:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(22),i=n(o),u=r(21),a=n(u),s=r(0),l=n(s),f=r(46),c=n(f),p=r(111),d=r(238),h=n(d),v=function(e){var t=e.posts;return l.default.createElement(c.default,null,l.default.createElement("ul",null,t.map(function(e){return l.default.createElement(h.default,{key:e.title,post:e})})))};v.getInitialProps=function(){var e=(0,a.default)(i.default.mark(function e(t){var r;t.req;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.getPosts)();case 2:return r=e.sent,e.abrupt("return",{posts:r});case 4:case"end":return e.stop()}},e,void 0)}));return function(t){return e.apply(this,arguments)}}(),t.default=v},123:function(e,t,r){"use strict";function n(e,t,r){if("function"==typeof Array.prototype.find)return e.find(t,r);r=r||this;var n,o=e.length;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(n=0;n<o;n++)if(t.call(r,e[n],n,e))return e[n]}e.exports=n},124:function(e,t,r){"use strict";var n=r(43),o=r(68),i=r(75),u=r(76),a=u(),s=r(125),l=Array.prototype.slice,f=function(e,t){return o.RequireObjectCoercible(e),a.apply(e,l.call(arguments,1))};n(f,{getPolyfill:u,implementation:i,shim:s}),e.exports=f},125:function(e,t,r){"use strict";var n=r(43),o=r(76);e.exports=function(){var e=o();return n(Array.prototype,{includes:e},{includes:function(){return Array.prototype.includes!==e}}),e}},225:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=r(250),f=n(l),c=r(0),p=n(c),d=r(74),h=r(243),v=n(h),g=r(244),y=n(g),m=r(123),x=n(m),b=r(124),k=n(b);e.exports=function(e){return new w(e)};var w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.Link,n=void 0===r?v.default:r,o=t.Router,i=void 0===o?y.default:o;u(this,e),this.routes=[],this.Link=this.getLink(n),this.Router=this.getRouter(i)}return s(e,[{key:"add",value:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.routes.push(new(Function.prototype.bind.apply(E,[null].concat(t)))),this}},{key:"findByName",value:function(e){var t=(0,x.default)(this.routes,function(t){return t.name===e});if(!t)throw new Error("Unknown route: "+e);return t}},{key:"match",value:function(e){var t=void 0;return{route:(0,x.default)(this.routes,function(r){return t=r.match(e)}),params:t}}},{key:"getRequestHandler",value:function(e){var t=this,r=e.getRequestHandler();return function(n,o){var i=(0,d.parse)(n.url,!0),u=i.pathname,s=i.query,l=t.match(u),f=l.route,c=l.params;f?e.render(n,o,f.page,a({},s,c)):r(n,o,i)}}},{key:"getLink",value:function(e){var t=this;return function(r){var n=r.route,o=r.params,u=i(r,["route","params"]);return n&&Object.assign(u,t.findByName(n).getLinkProps(o)),p.default.createElement(e,u)}}},{key:"getRouter",value:function(e){var t=this;return e.pushRoute=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments[2],i=t.findByName(r).getLinkProps(n),u=i.href,a=i.as;return e.push(u,a,o)},e.replaceRoute=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments[2],i=t.findByName(r).getLinkProps(n),u=i.href,a=i.as;return e.replace(u,a,o)},e.prefetchRoute=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.findByName(r).getLinkProps(n),i=o.href;return e.prefetch(i)},e}}]),e}(),E=function(){function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t;u(this,e),this.name=t,this.pattern=r||"/"+t,this.page=n.replace(/^\/?(.*)/,"/$1"),this.regex=(0,f.default)(this.pattern,this.keys=[]),this.keyNames=this.keys.map(function(e){return e.name}),this.toPath=f.default.compile(this.pattern)}return s(e,[{key:"match",value:function(e){var t=this.regex.exec(e);if(t)return this.valuesToParams(t.slice(1))}},{key:"valuesToParams",value:function(e){var t=this;return e.reduce(function(e,r,n){return Object.assign(e,o({},t.keys[n].name,r))},{})}},{key:"getHref",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.page+"?"+j(e)}},{key:"getAs",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=this.toPath(t),n=Object.keys(t),i=n.filter(function(t){return!(0,k.default)(e.keyNames,t)});if(!i.length)return r;var u=i.reduce(function(e,r){return Object.assign(e,o({},r,t[r]))},{});return r+"?"+j(u)}},{key:"getLinkProps",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{as:this.getAs(e),href:this.getHref(e)}}}]),e}(),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map(function(t){var r=e[t];return Array.isArray(r)&&(r=r.join("/")),[encodeURIComponent(t),encodeURIComponent(r)].join("=")}).join("&")}},237:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(20),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=o.default.div.withConfig({displayName:"Wrapper__Wrapper",componentId:"s75towb-0"})(['border-bottom: 1px solid #ddd;a {padding: 15px;text-decoration: none;display: block;&:hover {background: #F5F5F5;h3 { color: #387EF5 }}}h3 {color: #222;font-weight: bold;font-size: 1.75rem;line-height: 35px;font-family: "PT Sans", sans-serif;text-transform: capitalize;margin: 0;}p {font-size: 1.2rem;line-height: 35px;color: #444;font-family: "PT Serif", sans-serif;margin: 0;}']);t.default=i},238:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=n(o),u=r(240),a=r(237),s=n(a),l=function(e){var t=e.post;return i.default.createElement(s.default,null,i.default.createElement(u.Link,{route:"post",params:{slug:t.fields.slug}},i.default.createElement("a",null,i.default.createElement("h3",null,t.fields.title),i.default.createElement("p",null,t.fields.body))))};t.default=l},240:function(e,t,r){"use strict";var n=r(225),o=e.exports=n();o.add("index","/"),o.add("about","/about"),o.add("post","/blog/:slug")},243:function(e,t,r){e.exports=r(109)},244:function(e,t,r){e.exports=r(44)},250:function(e,t,r){function n(e,t){for(var r,n=[],o=0,i=0,u="",a=t&&t.delimiter||"/";null!=(r=m.exec(e));){var f=r[0],c=r[1],p=r.index;if(u+=e.slice(i,p),i=p+f.length,c)u+=c[1];else{var d=e[i],h=r[2],v=r[3],g=r[4],y=r[5],x=r[6],b=r[7];u&&(n.push(u),u="");var k=null!=h&&null!=d&&d!==h,w="+"===x||"*"===x,E="?"===x||"*"===x,j=r[2]||a,O=g||y;n.push({name:v||o++,prefix:h||"",delimiter:j,optional:E,repeat:w,partial:k,asterisk:!!b,pattern:O?l(O):b?".*":"[^"+s(j)+"]+?"})}}return i<e.length&&(u+=e.substr(i)),u&&n.push(u),n}function o(e,t){return a(n(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function u(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var o="",a=r||{},s=n||{},l=s.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var c=e[f];if("string"!=typeof c){var p,d=a[c.name];if(null==d){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(y(d)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<d.length;h++){if(p=l(d[h]),!t[f].test(p))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?c.prefix:c.delimiter)+p}}else{if(p=c.asterisk?u(d):l(d),!t[f].test(p))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+p+'"');o+=c.prefix+p}}else o+=c}return o}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function l(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function c(e){return e.sensitive?"":"i"}function p(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function d(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(g(e[o],t,r).source);return f(new RegExp("(?:"+n.join("|")+")",c(r)),t)}function h(e,t,r){return v(n(e,r),t,r)}function v(e,t,r){y(t)||(r=t||r,t=[]),r=r||{};for(var n=r.strict,o=!1!==r.end,i="",u=0;u<e.length;u++){var a=e[u];if("string"==typeof a)i+=s(a);else{var l=s(a.prefix),p="(?:"+a.pattern+")";t.push(a),a.repeat&&(p+="(?:"+l+p+")*"),p=a.optional?a.partial?l+"("+p+")?":"(?:"+l+"("+p+"))?":l+"("+p+")",i+=p}}var d=s(r.delimiter||"/"),h=i.slice(-d.length)===d;return n||(i=(h?i.slice(0,-d.length):i)+"(?:"+d+"(?=$))?"),i+=o?"$":n&&h?"":"(?="+d+"|$)",f(new RegExp("^"+i,c(r)),t)}function g(e,t,r){return y(t)||(r=t||r,t=[]),r=r||{},e instanceof RegExp?p(e,t):y(e)?d(e,t,r):h(e,t,r)}var y=r(251);e.exports=g,e.exports.parse=n,e.exports.compile=o,e.exports.tokensToFunction=a,e.exports.tokensToRegExp=v;var m=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},251:function(e,t){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},273:function(e,t,r){e.exports=r(120)},75:function(e,t,r){"use strict";(function(t){var n=r(68),o=Number.isNaN||function(e){return e!==e},i=Number.isFinite||function(e){return"number"==typeof e&&t.isFinite(e)},u=Array.prototype.indexOf;e.exports=function(e){var t=arguments.length>1?n.ToInteger(arguments[1]):0;if(u&&!o(e)&&i(t)&&void 0!==e)return u.apply(this,arguments)>-1;var r=n.ToObject(this),a=n.ToLength(r.length);if(0===a)return!1;for(var s=t>=0?t:Math.max(0,a+t);s<a;){if(n.SameValueZero(e,r[s]))return!0;s+=1}return!1}}).call(t,r(25))},76:function(e,t,r){"use strict";var n=r(75);e.exports=function(){return Array.prototype.includes||n}}},[273]);
            return { page: comp.default }
          })
        