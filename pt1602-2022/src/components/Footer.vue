<script setup lang="ts">
import Navigation from "@/components/MainNavigation.vue";
import IconRings from "@/components/icons/IconRings.vue";

defineProps<{
    headline: string
    text: string
    sendbutton: string
    name: string
    isFooter: boolean
    socialMediaNav: ({ icon?: string; link?: string })[]
    footerNavigation: ({ link?: string; text?: string })[]
}>()
</script>

<template>
    <IconRings/>
    <div class="footer-main container text-center text-lg-start">
        <div class="row">
            <div class="col-lg-7">
                <div class="footer-main-headline h1" v-if="headline">{{ headline }}</div>
                <p class="footer-main-text" v-if="text">{{ text }}</p>
            </div>
            <div class="col-lg-5">
                <form class="footer-main-form position-relative" action="https://formsubmit.co/website@pt1602.de" method="POST">
                    <input class="form-control pt-0 px-4 pb-3" placeholder="Name" type="text" name="name" required>
                    <input class="form-control pt-0 px-4 pb-3" placeholder="E-Mail" type="email" name="email" required>
                    <textarea class="form-control pt-0 px-4 pb-3" placeholder="Message" type="text" name="name"
                              required></textarea>
                    <input type="hidden" name="_next" value="#">
                    <input type="hidden" name="_subject" value="Neue Kontaktanfrage">
                    <div class="d-flex justify-content-end" v-if="sendbutton">
                        <button class="btn btn-outline-primary" type="submit">{{ sendbutton }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="footer-nav container border-top"></div>
    <Navigation :socialMediaNav="socialMediaNav" :name="name" icon-size="xl" :is-footer="isFooter" :footerNavigation="footerNavigation"/>
</template>
