<script setup lang="ts">
defineProps<{
    name: string
    iconSize: string
    isFooter: boolean
    socialMediaNav: ({ icon?: string; link?: string })[]
    footerNavigation?: ({ link?: string; text?: string })[]
}>()
</script>

<template>
    <nav class="pt-4">
        <div class="main-navigation container">
            <div class="row">
                <div class="col-12 text-center text-sm-start mb-4 mb-sm-0"
                     :class="{'col-sm-6': !isFooter, 'col-sm-6 col-md-4 order-1': isFooter}">
                    <span class="navbar-brand mb-0 h1 text-white fw-bold" v-if="name">{{ name }}</span>
                </div>
                <div
                    class="col-md-4 d-flex imprint-privacy-nav justify-content-center justify-content-sm-start justify-content-md-center align-items-center order-3 order-md-2 mt-3 mt-md-0"
                    v-if="isFooter">
                    <span v-for="(item, index) in footerNavigation" v-if="footerNavigation">
                        <a :href="item.link" target="_blank">{{ item.text }}</a>
                        <span v-if="index !== footerNavigation.length - 1" class="px-2">&</span>
                    </span>
                </div>
                <div class="col-12 d-flex justify-content-center justify-content-sm-end"
                     :class="{'col-sm-6': !isFooter, 'col-sm-6 col-md-4 order-2 order-md-3': isFooter}">
                    <div class="social-media-nav px-3 d-flex align-items-center" v-for="item in socialMediaNav">
                        <a v-if="item.link" :href="item.link" target="_blank" :aria-label="item.icon">
                            <font-awesome-icon v-if="item.icon"
                                               :icon="'fa-brands fa-' + item.icon" :size="iconSize"
                                               inverse/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.main-navigation {
    .navbar-brand {
        font-size: 32px;
    }

    .social-media-nav:last-child {
        padding-right: unset !important;
    }
}
</style>
