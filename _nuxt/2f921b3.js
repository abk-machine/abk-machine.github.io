(window.webpackJsonp=window.webpackJsonp||[]).push([[2,4],{277:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"en":{"next-btn":"Next","prev-btn":"Previous"},"es":{"next-btn":"Próximo","prev-btn":"Previo"}}'),delete t.options._Ctor}},278:function(t,e,n){"use strict";var r=n(13),l=n(7),o=n(81),c=n(20),f=n(14),_=n(57),v=n(138),d=n(79),h=n(5),m=n(58),P=n(80).f,N=n(47).f,C=n(16).f,I=n(190).trim,x="Number",y=l.Number,A=y.prototype,E=_(m(A))==x,k=function(t){var e,n,r,l,o,c,f,code,_=d(t,!1);if("string"==typeof _&&_.length>2)if(43===(e=(_=I(_)).charCodeAt(0))||45===e){if(88===(n=_.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(_.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+_}for(c=(o=_.slice(2)).length,f=0;f<c;f++)if((code=o.charCodeAt(f))<48||code>l)return NaN;return parseInt(o,r)}return+_};if(o(x,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var w,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(E?h((function(){A.valueOf.call(n)})):_(n)!=x)?v(new y(k(e)),n,S):k(e)},$=r?P(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;$.length>F;F++)f(y,w=$[F])&&!f(S,w)&&C(S,w,N(y,w));S.prototype=A,A.constructor=S,c(l,x,S)}},279:function(t,e,n){"use strict";n.r(e);n(278);var r={name:"Pagination",props:{total:{type:Number,default:0},perPage:{type:Number,default:3}},computed:{totalPages:function(){return Math.ceil(this.total/this.perPage)},currentPage:function(){return parseInt(this.$route.params.page)||1},prevPage:function(){return this.currentPage>1?this.currentPage-1:1},nextPage:function(){return this.currentPage<this.totalPages?this.currentPage+1:this.totalPages}}},l=n(56),o=n(280),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[1===t.currentPage?n("div",{staticClass:"prev-page disabled"},[t._v("\n    "+t._s(t.$t("prev-btn"))+"\n  ")]):n("nuxt-link",{staticClass:"prev-page",attrs:{to:{params:{page:t.prevPage}}}},[t._v("\n     "+t._s(t.$t("prev-btn"))+"\n  ")]),t._v(" "),t.currentPage===t.totalPages?n("div",{staticClass:"next-page disabled"},[t._v("\n    "+t._s(t.$t("next-btn"))+"\n  ")]):n("nuxt-link",{staticClass:"next-page",attrs:{to:{params:{page:t.nextPage}}}},[t._v("\n     "+t._s(t.$t("next-btn"))+"\n  ")])],1)}),[],!1,null,null,null);"function"==typeof o.default&&Object(o.default)(component);e.default=component.exports},280:function(t,e,n){"use strict";var r=n(277),l=n.n(r);e.default=l.a},282:function(t,e,n){"use strict";n.r(e);n(278);var r={name:"ArticleList",components:{Pagination:n(279).default},props:{articles:{type:Array,default:Array},total:{type:Number,default:0}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}},l=n(56),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"article-list"},[n("ul",{staticClass:"articles"},t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"article-card"},[n("p",{staticClass:"article-category"},[t._v(t._s(article.category))]),t._v(" "),n("nuxt-link",{staticClass:"article-title article-link",attrs:{to:t.localePath("/articles/"+article.slug)}},[t._v("  \n        "+t._s(article.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"article-meta"},[n("img",{staticClass:"article-avatar",attrs:{src:article.author.image}}),t._v(" "),n("span",{staticClass:"article-author"},[t._v(t._s(article.author.name))]),t._v(" "),n("span",{staticClass:"article-date"},[t._v(t._s(t.formatDate(article.updatedAt)))])])],1)})),0),t._v(" "),t.total>3?n("Pagination",{attrs:{total:t.total}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pagination:n(279).default})}}]);