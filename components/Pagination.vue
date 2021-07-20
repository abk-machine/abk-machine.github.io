<template>
  <div class="pagination">
    <div v-if="currentPage === 1" class="prev-page disabled">
      {{ $t('prev-btn') }}
    </div>
    <nuxt-link
      v-else
      :to="{ params: { page: prevPage } }"
      class="prev-page"
    >
       {{ $t('prev-btn') }}
    </nuxt-link>

    <div v-if="currentPage === totalPages" class="next-page disabled">
      {{ $t('next-btn') }}
    </div>

    <nuxt-link
      v-else
      :to="{  params: { page: nextPage } }"
      class="next-page"
    >
       {{ $t('next-btn') }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    },
    currentPage() {
      return parseInt(this.$route.params.page) || 1;
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    },
  },
};
</script>
<i18n>
{
  "en": {
    "next-btn": "Next",
    "prev-btn": "Previous"
  },
  "es": {
    "next-btn": "Próximo",
    "prev-btn": "Previo"
  }
}
</i18n>