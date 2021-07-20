<template>
  <div class="content">
    <section class="top-section">
      <h2>{{ $t('title') }}</h2>
      <p>{{ $t('subtitle') }}</p>
    </section>
    <ArticleList :articles="paginatedArticles" :total="allArticles.length" />
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList';
export default {
  async asyncData({ $content, app, params }) {
    try {
      const currentPage = parseInt(params.page);

      const perPage = 3;

      const currentLocale = app.i18n.locale;
      const allArticles = await $content(`${currentLocale}/articles`).fetch();

      const totalArticles = allArticles.length;

      // use Math.ceil to round up to the nearest whole number
      const lastPage = Math.ceil(totalArticles / perPage);

      // use the % (modulus) operator to get a whole remainder
      const lastPageCount = totalArticles % perPage;

      const skipNumber = () => {
        if (currentPage === 1) {
          return 0;
        }
        if (currentPage === lastPage) {
          return totalArticles - lastPageCount;
        }
        return (currentPage - 1) * perPage;
      };

      const paginatedArticles = await $content(`${currentLocale}/articles`)
        .only(['title', 'category', 'author', 'avatar', 'slug', 'updatedAt'])
        .sortBy('updatedAt', 'desc')
        .limit(perPage)
        .skip(skipNumber())
        .fetch();

      if (currentPage === 0 || !paginatedArticles.length) {
        return error({ statusCode: 404, message: 'No articles found!' });
      }

      return {
        currentLocale,
        allArticles,
        paginatedArticles,
      };
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 5,
    },
  },
}
</script>
<i18n>
{
  "en": {
    "title": "ABK Machinery Articles",
    "subtitle": "News, stories, case studies and opinion pieces from our staff and industry experts"
  },
  "es": {
    "title": "ABK Machinery Articulos",
    "subtitle": "Noticias, historias, estudios de casos y artículos de opinión de nuestro personal y expertos de la industria"
  }
}
</i18n>
