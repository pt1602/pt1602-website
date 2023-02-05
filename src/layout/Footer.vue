<script setup lang="ts">
import Navigation from "@/layout/MainNavigation.vue";
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
                <p class="footer-main-text" v-if="text" v-html="text"></p>
            </div>
            <div class="col-lg-5 footer-form-col">
                <form class="footer-main-form position-relative" action="https://formsubmit.co/website@pt1602.de"
                      method="POST">
                    <input class="form-control pt-0 px-4 pb-3" placeholder="Name" type="text" name="name" required>
                    <input class="form-control pt-0 px-4 pb-3" placeholder="E-Mail" type="email" name="email" required>
                    <textarea class="form-control pt-0 px-4 pb-3" placeholder="Nachricht" type="text" name="message"
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
    <Navigation :socialMediaNav="socialMediaNav" :name="name" icon-size="xl" :is-footer="isFooter"
                :footerNavigation="footerNavigation"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: 'Load contact form only when cookies are accepted',
    mounted() {
        const footerFormCol: HTMLElement | null = document.querySelector('.footer-form-col');
        const footerMainForm: HTMLElement | null = document.querySelector('.footer-main-form');

        if (footerFormCol && footerMainForm) {
            // @ts-ignore
            this.$cc.on('accept', () => {
                // @ts-ignore
                if (!this.$cc.getUserPreferences().accepted_categories.includes('contact-form')) {
                    footerMainForm.remove();
                    const paragraph: HTMLElement = document.createElement("p");
                    const noCookiesText: Text = document.createTextNode("Leider hast du der Verwendung des Kontaktformulars nicht zugestimmt. Aber schreib mir doch eine Mail an website@pt1602.de");
                    paragraph.appendChild(noCookiesText);
                    footerFormCol.appendChild(paragraph);
                }
            })
        }
    }
})
</script>
