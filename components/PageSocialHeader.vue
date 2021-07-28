<template>
    <div class="one-headder">
        <div class="container-fluid">
            <div class="row left-indus-icons RWDpagescrollfix">
                <div class="col-lg-5 col-md-5 pr-0 icons">
                    <ul>
                        <li>
                            <h4> {{ $t('followUs') }}</h4>
                        </li>
                        <li><a href="https://www.facebook.com/WUXI-ABK-114028117000362" title="Our Facebook Page"><span class="fab fa-facebook-f"></span></a></li>
                        <li><a href="https://twitter.com/Devin__Xu" title="Our Twitter Page"><span class="fab fa-twitter"></span></a></li>
                        <li><a href="https://www.linkedin.com/company/wuxi-abk-machinery-co.ltd/"  title="Our Linkedin Page"><span class="fab fa-linkedin"></span></a></li>
                        <li><a href="https://www.youtube.com/channel/UCUjS_ALy1QfZAOx-sn1OTqA/videos" title="Our Youtube Channel"><span class="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </div>
            <div id="lang-selector">
                <input type="checkbox" id="lang-select-toggle"  />
                <label for="lang-select-toggle" id="lang-select-label" class="fas fa-language" title="Change Language"></label>
                <ul id="lang-select-menu">
                <li><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></li>
                <li><nuxt-link :to="switchLocalePath('es')">Espanol</nuxt-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        localeLongForm(){
            switch(this.$i18n.locale){
                case 'en':
                return 'English';
                case 'es':
                return 'Espanol';
            }
        }
    }
}
</script>
<style>

</style>
<i18n>
{
  "en": {
    "followUs": "Follow Us:"
  },
  "es": {
    "followUs": "Síganos En:"
  }
}
</i18n>