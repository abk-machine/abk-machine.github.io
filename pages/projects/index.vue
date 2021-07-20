<template>
  <div class="content">
    <section class="contact py-lg-4 py-md-3 py-sm-3 py-3">
      <div class="container py-lg-5 py-md-4 py-sm-4 py-3">
        <div class="title text-center mb-lg-5 mb-md-4 mb-sm-4 mb-3">
          <h3>Projects</h3>
        </div>
        <div class="product-list">
          <ul class="products">
            <li
              v-for="project of projects"
              :key="project.title"
              class="product-card"
            >
              <nuxt-link :to="localePath('/projects/' + project.path.split('/')[3])" class="article-title article-link">  
                {{ project.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, app }) {
    try {
      const currentLocale = app.i18n.locale;
      const projects = await $content(`${currentLocale}/projects`).fetch();

      return {
        currentLocale,
        projects,
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
  methods:{
    localeLongForm(locale){
      switch(locale){
        case 'en':
          return 'English';
        case 'es':
          return 'Espanol';
      }
    }
  }
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
<style scoped>
h2 {
  text-align:center;
}
.product-list{
    text-align:center;
}
.products{
    margin: 0;
    padding: 0;
    list-style: none;
}
.product-card{
  display:block;
  text-align:center;
  padding: 29px 20px 33px;
  border-bottom: 1px solid #ededed;
}
</style>
