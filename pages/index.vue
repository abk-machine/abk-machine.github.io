<template>
<div class="content">
    <div class="header-outs" id="header">
        <!-- Slideshow 4 -->
        <vueper-slides autoplay class="header-slider no-shadow" :fixed-height="true">
            <vueper-slide>
                <template v-slot:content>
                    <img src="~/assets/images/346a9190d.jpg" alt="">
                    <div class="header-slider-text">
                        <h5>Let's Work Together</h5>
                        <div class="bottom-info">
                            <nuxt-link :to="localePath('/contact')">Contact Us</nuxt-link>
                        </div>
                    </div>
                </template>
            </vueper-slide>
            <vueper-slide>
                <template v-slot:content>
                   <img src="~/assets/images/8ab9ab97d.jpg" alt="">
                    <div class="header-slider-text">
                        <h5>Pursuit for High Quality</h5>
                        <div class="bottom-info">
                            <nuxt-link :to="localePath('/contact')">Contact Us</nuxt-link>
                        </div>
                    </div>
                </template>
            </vueper-slide>
             <vueper-slide>
                <template v-slot:content>
                   <img src="~/assets/images/30a391eed.jpg" alt="">
                    <div class="header-slider-text">
                        <h5>More Than 20 Years Experience</h5>
                        <div class="bottom-info">
                            <nuxt-link :to="localePath('/contact')">Contact Us</nuxt-link>
                        </div>
                    </div>
                </template>
            </vueper-slide>
        </vueper-slides>
    </div>
    <!-- //banner -->
    <!-- about -->
    <section class="about py-lg-4 py-md-3 py-sm-3 py-3" id="about">
        <div class="container py-lg-5 py-md-5 py-sm-4 py-3">
            <div class="row abt-colm">
                <div class="col-lg-6 agile-info-img">
                    <div class="row stats-info mb-lg-4 mb-3 text-center">
                        <div class="col-md-4 col-sm-4 stats-grid-2">
                            <div class=" stats-grid">
                                <div class="counter">{{aboutUs.experienceCount}}</div>
                                <div class="stat-info">
                                    <h5 class="pt-2">{{aboutUs.experienceLabel}}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 stats-grid-3">
                            <div class=" stats-grid">
                                <div class="counter">{{aboutUs.countriesCount}}</div>
                                <div class="stat-info">
                                    <h5 class="pt-2">{{aboutUs.countriesLabel}}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-4 stats-grid-4">
                            <div class=" stats-grid">
                                <div class="counter">{{aboutUs.projectsCount}}</div>
                                <div class="stat-info">
                                    <h5 class="pt-2">{{aboutUs.projectsLabel}}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="video-left-w3l" id="video">
                        <iframe src="https://www.youtube.com/embed/rsNDN8jpVhY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
                    </div>
                </div>
                <div class="col-lg-6 agile-abt-info">
                    <nuxt-content :document="aboutUs" />
                </div>
            </div>
        </div>
    </section>
    <!-- //about -->
    <!--Fun-facts-->
    <section class="fun-facts py-lg-4 py-md-3 py-sm-3 py-3">
        <div class="container py-lg-5 py-md-5 py-sm-4 py-3">
            <div class="row">
                <div class="col-lg-4 funt-list-grids">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-4 funt-agile-grids text-right">
                            <h6>01</h6>
                        </div>
                        <div class="col-md-8 col-sm-8 col-8 funt-agile-text text-left">
                            <h4 class="mb-3">High Quality</h4>
                            <p>We are fiercely proud of our commitment to quality and have received certificates to demonstrate that.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 funt-list-grids">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-4 funt-agile-grids text-right">
                            <h6>02</h6>
                        </div>
                        <div class="col-md-8 col-sm-8 col-8 funt-agile-text text-left">
                            <h4 class="mb-3">Pricing</h4>
                            <p>Our prices are competitive and fair.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 funt-list-grids">
                    <div class="row">
                        <div class="col-md-4 col-sm-4 col-4 funt-agile-grids text-right">
                            <h6>03</h6>
                        </div>
                        <div class="col-md-8 col-sm-8 col-8 funt-agile-text text-left">
                            <h4 class="mb-3">Exceptional Service</h4>
                            <p>We pride ourselves on providing a high level of customer service.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--//Fun-facts-->
    <!--services-->
    <section class="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
        <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div class="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
                <h3>Products</h3>
            </div>
            <vueper-slides
                class="product-slider no-shadow"
                :visible-slides="3"
                :slide-ratio="1 / 3"
                :fixed-height="true"
                slide-multiple
                :gap="3"
                :dragging-distance="200"
                :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 }, 600: {visibleSlides: 1, slideMultiple: false} }">
                <vueper-slide  
                    v-for="product of products"
                    :key="product.title">
                    <template v-slot:content>
                        <div class="product-slider-item">
                            <img :src="product.image" />
                            <h4 class="my-3">{{product.title}}</h4>
                            <nuxt-link :to="localePath('/products')">Learn More</nuxt-link>
                        </div>
                    </template>
                </vueper-slide>
            </vueper-slides>
        </div>
    </section>
    <!--//services-->
    <PageCTA>
        <h6>Need more information? <nuxt-link :to="localePath('/contact')">  
                                    Talk to us.
                                </nuxt-link></h6>
    </PageCTA>
    <!--projects-->
    <section class="team py-lg-4 py-md-3 py-sm-3 py-3" id="team">
        <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div class="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
                <h3>Projects</h3>
            </div>
            <vueper-slides
                class="product-slider no-shadow"
                :visible-slides="3"
                :gap="3"
                :slide-ratio="1 / 3"
                :fixed-height="true"
                :dragging-distance="200"
                :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 }, 600: {visibleSlides: 1, slideMultiple: false} }">
                <vueper-slide  
                    v-for="project of projects"
                    :key="project.title">
                    <template v-slot:content>
                        <div class="product-slider-item">
                            <img :src="project.image" />
                            <h4 class="my-3">{{project.title}}</h4>
                            <nuxt-link :to="localePath('/projects')">Learn More</nuxt-link>
                        </div>
                    </template>
                </vueper-slide>
            </vueper-slides>
        </div>
    </section>
    <!--//team-->
    <PageCTA>
        <h6>Interested to find out more? <nuxt-link :to="localePath('/contact')">  
                                    Contact us.
                                </nuxt-link></h6>
    </PageCTA>
    <!--Articles-->			  
    <section class="blog py-lg-4 py-md-3 py-sm-3 py-3" id="blog">
        <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
            <div class="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
                <h3>News & Articles</h3>
            </div>
            <vueper-slides class="article-slider no-shadow" arrows-outside bullets-outside transition-speed="250">
                <vueper-slide v-for="article of articles"
                    :key="article.slug">
                    <template v-slot:content>
                        <nuxt-link :to="localePath('/articles/' + article.slug)" class="article-title article-link">  
                            {{ article.title }}
                        </nuxt-link>
                        <div class="article-meta">
                            <img class="article-avatar" :src="article.author.image" />
                            <span class="article-author">{{ article.author.name }}</span>
                            <span class="article-date">{{ formatDate(article.updatedAt) }}</span>
                        </div>
                    </template>
                </vueper-slide>
            </vueper-slides>
        </div>    
    </section>
    <!--Articles -->
    <!--CTA
    <PageCTA>
        <h6>Subscribe to us</h6>
        <form action="#" method="post">
            <div class=" subscribe-form ">
                <div class="form-group contact-forms">
                    <input type="email" class="form-control" placeholder="youremail@company.com" required="">
                    <button type="submit" class="btn click-me">Subscribe</button>
                </div>
            </div>
        </form>
    </PageCTA>
    CTA-->
</div>
</template>
<script>
export default {
    async asyncData({ $content, app}) {
        const currentLocale = app.i18n.locale;

        const aboutUs = await $content(`${currentLocale}/aboutus`).fetch();

        const latestArticles = await $content(`${currentLocale}/articles`)
        .only(['title', 'category', 'author', 'slug', 'updatedAt'])
        .sortBy('updatedAt', 'desc')
        .limit(3)
        .fetch();

        const selectedProducts = await $content(`${currentLocale}/products`, {deep: true})
        .only(['title', 'image', 'slug', 'updatedAt'])
        .sortBy('updatedAt', 'desc')
        .limit(3)
        .fetch();

        const selectedProjects = await $content(`${currentLocale}/projects`)
        .only(['title', 'image', 'slug', 'updatedAt'])
        .sortBy('updatedAt', 'desc')
        .limit(4)
        .fetch();

        return {
            currentLocale,
            articles: latestArticles,
            products: selectedProducts,
            projects: selectedProjects,
            aboutUs
        };
    },
    data: () => ({
        slides: [
            {
            title: 'Slide #1',
            content: 'Slide content.'
            },
            {
            title: 'Slide #2',
            content: 'Slide content.'
            }
        ]
    }),
    methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
        }
    }
};
</script>