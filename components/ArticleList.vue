<template>
  <div class="article-list">
    <ul class="articles">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="article-card"
      >
        <p class="article-category">{{ article.category }}</p>
        <nuxt-link :to="localePath('/articles/' + article.path.split('/')[3])" class="article-title article-link">  
          {{ article.title }}
        </nuxt-link>
        <div class="article-meta">
          <img class="article-avatar" :src="article.author.image" />
          <span class="article-author">{{ article.author.name }}</span>
          <span class="article-date">{{ formatDate(article.updatedAt) }}</span>
        </div>
      </li>
    </ul>
    <Pagination v-if="total > 3" :total="total" />
  </div>
</template>

<script>
import Pagination from './Pagination';
export default {
  name: 'ArticleList',
  components: {
    Pagination,
  },
  props: {
    articles: {
      type: Array,
      default: Array,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
};
</script>