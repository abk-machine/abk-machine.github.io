<template>
    <div class="headder-nav-icon pagescrollfix">
        <div class="container-fluid">
            <div class="nav-headder-top">
                <!--//navigation section -->
                <nav class="navbar navbar-expand-lg navbar-light pagescrollfix">
                    <div class="hedder-up">
                        <a class="navbar-brand" href="index.html"><img src="images/logo.png"></a>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <nuxt-link :to="localePath('/')" class="nav-link">  
                                    Home
                                </nuxt-link>
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
                    </div>
                </nav>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
</template>

<style>

</style>
