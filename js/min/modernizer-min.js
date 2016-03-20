window.Modernizr=function(e,t,n){function r(e){m.cssText=e}function o(e,t){return r(b.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function c(e,t){return!!~(""+e).indexOf(t)}function u(e,t){for(var r in e){var o=e[r];if(!c(o,"-")&&m[o]!==n)return"pfx"==t?o:!0}return!1}function a(e,t,r){for(var o in e){var c=t[e[o]];if(c!==n)return r===!1?e[o]:i(c,"function")?c.bind(r||t):c}return!1}function s(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+g.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?u(o,t):(o=(e+" "+E.join(r+" ")+r).split(" "),a(o,t,n))}var l="2.7.1",f={},d=t.documentElement,p="modernizr",v=t.createElement(p),m=v.style,y,h={}.toString,b=" -webkit- -moz- -o- -ms- ".split(" "),w="Webkit Moz O ms",g=w.split(" "),E=w.toLowerCase().split(" "),T={},C={},x={},P=[],j=P.slice,A,z=function(e,n,r,o){var i,c,u,a,s=t.createElement("div"),l=t.body,f=l||t.createElement("body");if(parseInt(r,10))for(;r--;)u=t.createElement("div"),u.id=o?o[r]:p+(r+1),s.appendChild(u);return i=["&#173;",'<style id="s',p,'">',e,"</style>"].join(""),s.id=p,(l?s:f).innerHTML+=i,f.appendChild(s),l||(f.style.background="",f.style.overflow="hidden",a=d.style.overflow,d.style.overflow="hidden",d.appendChild(f)),c=n(s,e),l?s.parentNode.removeChild(s):(f.parentNode.removeChild(f),d.style.overflow=a),!!c},L=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var c=e in o;return c||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),c=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,c}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),O={}.hasOwnProperty,_;_=i(O,"undefined")||i(O.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return O.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function M(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,c=t.apply(i,n.concat(j.call(arguments)));return Object(c)===c?c:i}return t.apply(e,n.concat(j.call(arguments)))};return r}),T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:z(["@media (",b.join("touch-enabled),("),p,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n};for(var k in T)_(T,k)&&(A=k.toLowerCase(),f[A]=T[k](),P.push((f[A]?"":"no-")+A));return f.addTest=function(e,t){if("object"==typeof e)for(var r in e)_(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,"undefined"!=typeof enableClasses&&enableClasses&&(d.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),v=y=null,f._version=l,f._prefixes=b,f._domPrefixes=E,f._cssomPrefixes=g,f.hasEvent=L,f.testProp=function(e){return u([e])},f.testAllProps=s,f.testStyles=z,f.prefixed=function(e,t,n){return t?s(e,t,n):s(e,"pfx")},f}(this,this.document);