(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3],{315:function(t,e,l){"use strict";l.r(e);var c=l(16),component=Object(c.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"comments py-lg-4 py-md-3 py-sm-3 py-3"},[l("div",{staticClass:"container py-lg-5 py-md-4 py-sm-4 py-3"},[l("div",{staticClass:"fun-hedder-up"},[t._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,l){t.exports=l.p+"img/346a9190d.917e79d.jpg"},317:function(t,e,l){t.exports=l.p+"img/8ab9ab97d.7cdc8fb.jpg"},318:function(t,e,l){t.exports=l.p+"img/30a391eed.e54b2f9.jpg"},340:function(t,e,l){"use strict";l.r(e);var c=l(3),r=(l(42),{asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var l,c,r,n,o,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$content,c=t.app,r=c.i18n.locale,e.next=4,l("".concat(r,"/aboutus")).fetch();case 4:return n=e.sent,e.next=7,l("".concat(r,"/articles")).only(["title","category","author","slug","updatedAt"]).sortBy("updatedAt","desc").limit(3).fetch();case 7:return o=e.sent,e.next=10,l("".concat(r,"/products"),{deep:!0}).only(["title","image","slug","updatedAt"]).sortBy("updatedAt","desc").limit(3).fetch();case 10:return d=e.sent,e.next=13,l("".concat(r,"/projects")).only(["title","image","slug","updatedAt"]).sortBy("updatedAt","desc").limit(4).fetch();case 13:return v=e.sent,e.abrupt("return",{currentLocale:r,articles:o,products:d,projects:v,aboutUs:n});case 15:case"end":return e.stop()}}),e)})))()},data:function(){return{slides:[{title:"Slide #1",content:"Slide content."},{title:"Slide #2",content:"Slide content."}]}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),n=l(16),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"content"},[c("div",{staticClass:"header-outs",attrs:{id:"header"}},[c("vueper-slides",{staticClass:"header-slider no-shadow",attrs:{autoplay:"","fixed-height":!0}},[c("vueper-slide",{scopedSlots:t._u([{key:"content",fn:function(){return[c("img",{attrs:{src:l(316),alt:""}}),t._v(" "),c("div",{staticClass:"header-slider-text"},[c("h5",[t._v("Let's Work Together")]),t._v(" "),c("div",{staticClass:"bottom-info"},[c("nuxt-link",{attrs:{to:t.localePath("/contact")}},[t._v("Contact Us")])],1)])]},proxy:!0}])}),t._v(" "),c("vueper-slide",{scopedSlots:t._u([{key:"content",fn:function(){return[c("img",{attrs:{src:l(317),alt:""}}),t._v(" "),c("div",{staticClass:"header-slider-text"},[c("h5",[t._v("Pursuit for High Quality")]),t._v(" "),c("div",{staticClass:"bottom-info"},[c("nuxt-link",{attrs:{to:t.localePath("/contact")}},[t._v("Contact Us")])],1)])]},proxy:!0}])}),t._v(" "),c("vueper-slide",{scopedSlots:t._u([{key:"content",fn:function(){return[c("img",{attrs:{src:l(318),alt:""}}),t._v(" "),c("div",{staticClass:"header-slider-text"},[c("h5",[t._v("More Than 20 Years Experience")]),t._v(" "),c("div",{staticClass:"bottom-info"},[c("nuxt-link",{attrs:{to:t.localePath("/contact")}},[t._v("Contact Us")])],1)])]},proxy:!0}])})],1)],1),t._v(" "),c("section",{staticClass:"about py-lg-4 py-md-3 py-sm-3 py-3",attrs:{id:"about"}},[c("div",{staticClass:"container py-lg-5 py-md-5 py-sm-4 py-3"},[c("div",{staticClass:"row abt-colm"},[c("div",{staticClass:"col-lg-6 agile-info-img"},[c("div",{staticClass:"row stats-info mb-lg-4 mb-3 text-center"},[c("div",{staticClass:"col-md-4 col-sm-4 stats-grid-2"},[c("div",{staticClass:" stats-grid"},[c("div",{staticClass:"counter"},[t._v(t._s(t.aboutUs.experienceCount))]),t._v(" "),c("div",{staticClass:"stat-info"},[c("h5",{staticClass:"pt-2"},[t._v(t._s(t.aboutUs.experienceLabel))])])])]),t._v(" "),c("div",{staticClass:"col-md-4 col-sm-4 stats-grid-3"},[c("div",{staticClass:" stats-grid"},[c("div",{staticClass:"counter"},[t._v(t._s(t.aboutUs.countriesCount))]),t._v(" "),c("div",{staticClass:"stat-info"},[c("h5",{staticClass:"pt-2"},[t._v(t._s(t.aboutUs.countriesLabel))])])])]),t._v(" "),c("div",{staticClass:"col-md-4 col-sm-4 stats-grid-4"},[c("div",{staticClass:" stats-grid"},[c("div",{staticClass:"counter"},[t._v(t._s(t.aboutUs.projectsCount))]),t._v(" "),c("div",{staticClass:"stat-info"},[c("h5",{staticClass:"pt-2"},[t._v(t._s(t.aboutUs.projectsLabel))])])])])]),t._v(" "),t._m(0)]),t._v(" "),c("div",{staticClass:"col-lg-6 agile-abt-info"},[c("nuxt-content",{attrs:{document:t.aboutUs}})],1)])])]),t._v(" "),t._m(1),t._v(" "),c("section",{staticClass:"service py-lg-4 py-md-3 py-sm-3 py-3",attrs:{id:"service"}},[c("div",{staticClass:"container py-lg-5 py-md-4 py-sm-4 py-3"},[t._m(2),t._v(" "),c("vueper-slides",{staticClass:"product-slider no-shadow",attrs:{"visible-slides":3,"slide-ratio":1/3,"fixed-height":!0,"slide-multiple":"",gap:3,"dragging-distance":200,breakpoints:{800:{visibleSlides:2,slideMultiple:2},600:{visibleSlides:1,slideMultiple:!1}}}},t._l(t.products,(function(e){return c("vueper-slide",{key:e.title,scopedSlots:t._u([{key:"content",fn:function(){return[c("div",{staticClass:"product-slider-item"},[c("img",{attrs:{src:e.image}}),t._v(" "),c("h4",{staticClass:"my-3"},[t._v(t._s(e.title))]),t._v(" "),c("nuxt-link",{attrs:{to:t.localePath("/products")}},[t._v("Learn More")])],1)]},proxy:!0}],null,!0)})})),1)],1)]),t._v(" "),c("PageCTA",[c("h6",[t._v("Need more information? "),c("nuxt-link",{attrs:{to:t.localePath("/contact")}},[t._v("  \r\n                                    Talk to us.\r\n                                ")])],1)]),t._v(" "),c("section",{staticClass:"team py-lg-4 py-md-3 py-sm-3 py-3",attrs:{id:"team"}},[c("div",{staticClass:"container py-lg-5 py-md-4 py-sm-4 py-3"},[t._m(3),t._v(" "),c("vueper-slides",{staticClass:"product-slider no-shadow",attrs:{"visible-slides":3,gap:3,"slide-ratio":1/3,"fixed-height":!0,"dragging-distance":200,breakpoints:{800:{visibleSlides:2,slideMultiple:2},600:{visibleSlides:1,slideMultiple:!1}}}},t._l(t.projects,(function(e){return c("vueper-slide",{key:e.title,scopedSlots:t._u([{key:"content",fn:function(){return[c("div",{staticClass:"product-slider-item"},[c("img",{attrs:{src:e.image}}),t._v(" "),c("h4",{staticClass:"my-3"},[t._v(t._s(e.title))]),t._v(" "),c("nuxt-link",{attrs:{to:t.localePath("/projects")}},[t._v("Learn More")])],1)]},proxy:!0}],null,!0)})})),1)],1)]),t._v(" "),c("PageCTA",[c("h6",[t._v("Interested to find out more? "),c("nuxt-link",{attrs:{to:t.localePath("/contact")}},[t._v("  \r\n                                    Contact us.\r\n                                ")])],1)]),t._v(" "),c("section",{staticClass:"blog py-lg-4 py-md-3 py-sm-3 py-3",attrs:{id:"blog"}},[c("div",{staticClass:"container py-lg-5 py-md-4 py-sm-4 py-3"},[t._m(4),t._v(" "),c("vueper-slides",{staticClass:"article-slider no-shadow",attrs:{"arrows-outside":"","bullets-outside":"","transition-speed":"250"}},t._l(t.articles,(function(article){return c("vueper-slide",{key:article.slug,scopedSlots:t._u([{key:"content",fn:function(){return[c("nuxt-link",{staticClass:"article-title article-link",attrs:{to:t.localePath("/articles/"+article.slug)}},[t._v("  \r\n                            "+t._s(article.title)+"\r\n                        ")]),t._v(" "),c("div",{staticClass:"article-meta"},[c("img",{staticClass:"article-avatar",attrs:{src:article.author.image}}),t._v(" "),c("span",{staticClass:"article-author"},[t._v(t._s(article.author.name))]),t._v(" "),c("span",{staticClass:"article-date"},[t._v(t._s(t.formatDate(article.updatedAt)))])])]},proxy:!0}],null,!0)})})),1)],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"video-left-w3l",attrs:{id:"video"}},[e("iframe",{attrs:{src:"https://www.youtube.com/embed/rsNDN8jpVhY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"fun-facts py-lg-4 py-md-3 py-sm-3 py-3"},[l("div",{staticClass:"container py-lg-5 py-md-5 py-sm-4 py-3"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-lg-4 funt-list-grids"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-4 col-sm-4 col-4 funt-agile-grids text-right"},[l("h6",[t._v("01")])]),t._v(" "),l("div",{staticClass:"col-md-8 col-sm-8 col-8 funt-agile-text text-left"},[l("h4",{staticClass:"mb-3"},[t._v("High Quality")]),t._v(" "),l("p",[t._v("We are fiercely proud of our commitment to quality and have received certificates to demonstrate that.")])])])]),t._v(" "),l("div",{staticClass:"col-lg-4 funt-list-grids"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-4 col-sm-4 col-4 funt-agile-grids text-right"},[l("h6",[t._v("02")])]),t._v(" "),l("div",{staticClass:"col-md-8 col-sm-8 col-8 funt-agile-text text-left"},[l("h4",{staticClass:"mb-3"},[t._v("Pricing")]),t._v(" "),l("p",[t._v("Our prices are competitive and fair.")])])])]),t._v(" "),l("div",{staticClass:"col-lg-4 funt-list-grids"},[l("div",{staticClass:"row"},[l("div",{staticClass:"col-md-4 col-sm-4 col-4 funt-agile-grids text-right"},[l("h6",[t._v("03")])]),t._v(" "),l("div",{staticClass:"col-md-8 col-sm-8 col-8 funt-agile-text text-left"},[l("h4",{staticClass:"mb-3"},[t._v("Exceptional Service")]),t._v(" "),l("p",[t._v("We pride ourselves on providing a high level of customer service.")])])])])])])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3"},[l("h3",[t._v("Products")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3"},[l("h3",[t._v("Projects")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3"},[l("h3",[t._v("News & Articles")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PageCTA:l(315).default})}}]);