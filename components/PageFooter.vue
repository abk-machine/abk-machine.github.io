<template>
    <footer class="buttom-footer py-lg-4 py-md-3 py-sm-3 py-3">
        <section>
            <div class="container py-lg-5 py-md-5 py-sm-4 py-4">
                <div class="">
                    <div class="row footer-agile-grids ">
                        <div class="col-lg-4 col-md-4 col-sm-12 wthree-left-right">
                            <h4 class="pb-lg-3 pb-3">{{ $t('followUs') }}</h4>
                            <div class="footer-icons">
                                <ul>
                                    <li class="mb-2">
                                        <a href="https://www.facebook.com/WUXI-ABK-114028117000362"><span class="fab fa-facebook-f"></span></a>
                                        <h6 class="ml-3 text-left">Facebook</h6>
                                    </li>
                                    <li class="mb-2">
                                        <a href="https://twitter.com/Devin__Xu"><span class="fab fa-twitter"></span></a>
                                        <h6 class="ml-3 text-left">Twitter</h6>
                                    </li>
                                    <li class="mb-2">
                                        <a href="https://www.linkedin.com/company/wuxi-abk-machinery-co.ltd/"><span class="fab fa-linkedin"></span></a>
                                        <h6 class="ml-3 text-left">Linkedin</h6>
                                    </li>
                                    <li class="mb-2">
                                        <a href="https://www.youtube.com/channel/UCUjS_ALy1QfZAOx-sn1OTqA/videos"><span class="fab fab fa-youtube"></span></a>
                                        <h6 class="ml-3 text-right">Youtube</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12 wthree-left-right">
                            <h4 class="pb-lg-3 pb-3">Links</h4>
                            <nav class="border-line">
                                <ul class="nav flex-column">
                                    <li class="nav-item active">
                                        <nuxt-link :to="localePath('/')" class="nav-link">  Home </nuxt-link>
                                    </li>
                                    <li class="nav-item">
                                        <nuxt-link :to="localePath('/products')" class="nav-link">  
                                            Products
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item">
                                        <nuxt-link :to="localePath('/projects')" class="nav-link">  
                                            Projects
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item">
                                        <nuxt-link :to="localePath('/articles/page/1')" class="nav-link">  
                                            Articles
                                        </nuxt-link>
                                    </li>
                                    <li class="nav-item">
                                        <nuxt-link :to="localePath('/contact')" class="nav-link">  
                                            Contact
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="wthree-left-right col-lg-4 col-md-4 col-sm-12">
                            <h4 class="pb-lg-3 pb-3">{{ $t('get-in-touch') }}</h4>
                            <div class="wls-hours-list">
                                <ul>
                                    <li class="d-flex">Tel:<span class="time ml-auto"> Tel: +86 510 83559158</span></li>
                                    <li class="d-flex">Mobile: <span class="time ml-auto">+86 15852538958</span></li>
                                    <li class="d-flex">Email:<span class="time ml-auto">info@weldc.com</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="copy-agile-right text-center">
            <p>© 2021 Wuxi ABK Machinery. All Rights Reserved</p>
        </div>
    </footer>
</template>

<style>

</style>
<i18n>
{
  "en": {
    "followUs": "Follow Us:",
    "get-in-touch": "Get In Touch"
  },
  "es": {
    "followUs": "Síganos En:",
    "get-in-touch": "Ponerse En Contacto"
  }
}
</i18n>