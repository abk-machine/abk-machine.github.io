<template>
  <article>
    <SocialHead
      :title="product.title"
      :description="product.description"
      :image="product.image"
    />
    <section class="top-section">
      <h1>{{ product.title }}</h1>
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
     
      <nuxt-content :document="product" />
      <div class="share-article-bottom">
        <p class="title">Share this</p>
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
  </article>
</template>

<script>
export default {
  async asyncData({ $content, app, params, error }) {
    try {

      const currentLocale = app.i18n.locale;
      
      const [product] = await $content(`${currentLocale}/products/${params.slug}`, {deep: true})
        .fetch()
      
      /*const [prev, next] = await $content(`${currentLocale}/products`)
      .only(['title', 'description', 'image', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()*/
      console.log(product)
      return {product}
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


