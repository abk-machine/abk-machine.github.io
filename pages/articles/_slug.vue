<template>
  <article>
    <SocialHead
      :title="article.title"
      :description="article.description"
      :image="article.image"
    />
    <section class="top-section">
      <h1>{{ article.title }}</h1>
      <div class="article-meta">
          <img class="article-avatar" :src="article.author.image" />
          <span class="article-author">{{ article.author.name }}</span>
          <span class="article-date">{{ formatDate(article.updatedAt) }}</span>
      </div>
       <!-- AddToAny BEGIN -->
      <div class="a2a_kit a2a_kit_size_48 a2a_default_style" style="margin: 40px auto -30px;">
      <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
      <a class="a2a_button_facebook"></a>
      <a class="a2a_button_twitter"></a>
      <a class="a2a_button_copy_link"></a>
      </div>
      <script async src="https://static.addtoany.com/menu/page.js"></script>
      <!-- AddToAny END -->
    </section>
    <section class="article">
     
      <nuxt-content :document="article" />
      <div class="share-article-bottom">
        <p class="title">Share this article</p>
        <!-- AddToAny BEGIN -->
        <div class="a2a_kit a2a_kit_size_48 a2a_default_style">
        <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
        <a class="a2a_button_facebook"></a>
        <a class="a2a_button_twitter"></a>
        <a class="a2a_button_copy_link"></a>
        </div>
        <!-- AddToAny END -->
      </div>
    </section>
    <section class="next-prev">
      <NuxtLink
        v-if="prev"
        :to="localePath('/articles/' + prev.slug)"
        class="prev"
      >
        <p class="arrow">←</p>
        <p class="title">{{ prev.title }}</p>
      </NuxtLink>
      <NuxtLink
        v-if="next"
        :to="localePath('/articles/' + next.slug)"
        class="next"
      >
        <p class="arrow">→</p>
        <p class="title">{{ next.title }}</p>
      </NuxtLink>
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    try {

      const currentLocale = app.i18n.locale;
      const article = await $content(`${currentLocale}/articles`, params.slug)
        .fetch()
      
      const [prev, next] = await $content(`${currentLocale}/articles`)
      .only(['title', 'description', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

      /*const moreStories = await $content()
        .only(['title', 'description'])
        .where({ title: { $ne: article.title } })
        .sortBy('createdAt', 'desc')
        .limit(3)
        .fetch()
      return { article, moreStories }*/
      return {article, prev, next}
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page not found',
      })
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>


