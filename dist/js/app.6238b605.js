(function(n){function t(t){for(var e,i,c=t[0],u=t[1],s=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(e in u)Object.prototype.hasOwnProperty.call(u,e)&&(n[e]=u[e]);a&&a(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),l()}function l(){for(var n,t=0;t<o.length;t++){for(var l=o[t],e=!0,c=1;c<l.length;c++){var u=l[c];0!==r[u]&&(e=!1)}e&&(o.splice(t--,1),n=i(i.s=l[0]))}return n}var e={},r={app:0},o=[];function i(t){if(e[t])return e[t].exports;var l=e[t]={i:t,l:!1,exports:{}};return n[t].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=n,i.c=e,i.d=function(n,t,l){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:l})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,t){if(1&t&&(n=i(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)i.d(l,e,function(t){return n[t]}.bind(null,e));return l},i.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="/vue-demo-01/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var a=u;o.push([0,"chunk-vendors"]),l()})({0:function(n,t,l){n.exports=l("56d7")},"034f":function(n,t,l){"use strict";var e=l("64a9"),r=l.n(e);r.a},"07e1":function(n,t,l){"use strict";var e=l("969d"),r=l.n(e);r.a},"56d7":function(n,t,l){"use strict";l.r(t);l("cadf"),l("551c"),l("f751"),l("097d");var e=l("2b0e"),r=function(){var n=this,t=n.$createElement,l=n._self._c||t;return l("div",{staticClass:"wrapper"},[l("div",[n._v("第"+n._s(n.n)+"手")]),l("div",{staticClass:"chess"},[l("div",{staticClass:"row"},[l("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(0,t)}}}),l("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(1,t)}}}),l("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(2,t)}}})],1),l("div",{staticClass:"row"},[l("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(3,t)}}}),l("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(4,t)}}}),l("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(5,t)}}})],1),l("div",{staticClass:"row"},[l("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(6,t)}}}),l("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(7,t)}}}),l("Cell",{attrs:{n:n.n},on:{click:function(t){return n.onClickCell(8,t)}}})],1)]),l("div",[n._v("结果："+n._s(null===n.result?"胜负未分":"胜方为"+n.result))])])},o=[],i=function(){var n=this,t=n.$createElement,l=n._self._c||t;return l("div",[l("div",{staticClass:"cell",on:{click:n.onClickSelf}},[n.a?[n._v(n._s(n.text))]:void 0],2)])},c=[],u={props:["n"],data:function(){return{a:!1,text:""}},methods:{onClickSelf:function(){""==this.text&&(this.a=!0,this.text=this.n%2===0?"x":"o",this.$emit("click",this.text))}}},s=u,a=(l("07e1"),l("2877")),f=Object(a["a"])(s,i,c,!1,null,null,null),p=f.exports,d={components:{Cell:p},data:function(){return{n:0,map:[[null,null,null],[null,null,null],[null,null,null]],result:null}},methods:{onClickCell:function(n,t){console.log("".concat(n,",").concat(t)),this.map[Math.floor(n/3)][n%3]=t,this.n=this.n+1,this.tell()},tell:function(){for(var n=this.map,t=0;t<2;t++)null!=n[t][0]&&n[t][0]===n[t][1]&&n[t][1]===n[t][2]&&(this.result=n[t][0]);for(var l=0;l<2;l++)null!=n[0][l]&&n[0][l]===n[1][l]&&n[1][l]===n[2][l]&&(this.result=n[0][l]);null!=n[0][0]&&n[0][0]===n[1][1]&&n[1][1]===n[2][2]&&(this.result=n[0][0]),null!=n[0][2]&&n[0][2]===n[1][1]&&n[1][1]===n[2][0]&&(this.result=n[0][2])}}},C=d,h=(l("034f"),Object(a["a"])(C,r,o,!1,null,null,null)),v=h.exports;e["a"].config.productionTip=!1,new e["a"]({render:function(n){return n(v)}}).$mount("#app")},"64a9":function(n,t,l){},"969d":function(n,t,l){}});
//# sourceMappingURL=app.6238b605.js.map