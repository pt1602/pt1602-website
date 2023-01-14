<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import MainNavigation from "@/layout/MainNavigation.vue";
import Projects from "@/layout/Projects.vue";
import Masthead from "@/layout/Masthead.vue";
import Footer from "@/layout/Footer.vue";
import Skills from "@/components/Skills.vue";

/* Navigation */
const mainnav: ({ name: string, isFooter?: boolean }) = {
    name: "pt1602",
    isFooter: false
};
const socialMediaNav: ({ icon?: string; link?: string })[] = [
    {icon: 'instagram', link: 'https://instagram.com/ptgrafie'},
    {icon: 'github', link: 'https://github.com/pt1602/'},
    {icon: 'xing', link: 'https://www.xing.com/profile/Philipp_Tuchardt/'},
    {icon: 'linkedin', link: 'https://www.linkedin.com/in/philipp-tuchardt-5a68b3246/'}
];

/* Masthead */
const masthead: { primaryoutlinebuttontext: string; primaryoutlinebuttonlink: string; name: string; description: string; subheadline: string } = {
    name: "Philipp Tuchardt",
    subheadline: "Nice to meet&nbsp;you!",
    description: "Ich bin Webentwickler aus Mitteldeutschland, mit breitgefächertem technischem Interesse. Unter anderem beschäftige ich mich in meiner Freizeit mit Linux-Systemen, 3D-Druck und Fotografie.",
    primaryoutlinebuttontext: "Kontakt",
    primaryoutlinebuttonlink: "#contact"
};

/* Skills */
const skillUnit: string = "Erfahrung"
const skills: ({ name?: string; experience?: number })[] = [
    {name: 'Shopware', experience: 3},
    {name: 'Twig', experience: 3},
    {name: 'SCSS', experience: 4},
    {name: 'Javascript', experience: 4},
    {name: 'Vue', experience: 2},
    {name: 'Typescript', experience: 1}
];

/* Projects */
const projectsheadline: string = "Projekte";
const projectcontact: { primaryoutlinebuttontext: string; primaryoutlinebuttonlink: string; } = {
    primaryoutlinebuttontext: "Kontakt",
    primaryoutlinebuttonlink: "#contact"
};
const projects: ({ name: string; image: string; skills: string[]; buttons: ({ link: string; text: string, target: boolean })[] })[] = [
    {
        name: 'Gerade schön',
        skills: ["Wordpress", "PHP", "CSS"],
        buttons: [
            {link: "https://www.gerade-schoen.de", text: 'Zum Projekt', target: true}
        ],
        image: './src/assets/img/projects/gerade-schoen.jpg'
    },
    {
        name: 'Noon - DJ and Producer',
        skills: ["Bootstrap", "HTML", "SCSS"],
        buttons: [
            {link: "https://noon-official.com/", text: 'Zum Projekt', target: true}
        ],
        image: './src/assets/img/projects/noon-official.jpg'
    },
    {
        name: 'Tuzuz',
        skills: ["Wordpress", "WPBakery", "PHP"],
        buttons: [
            {link: "https://tuzuz.de/", text: 'Zum Projekt', target: true}
        ],
        image: './src/assets/img/projects/tuzuz.jpg'
    },
    {
        name: 'Zahnheilkunde Lienemann',
        skills: ["Wordpress", "PHP", "CSS"],
        buttons: [
            {link: "https://zahnheilkunde-lienemann.de/", text: 'Zum Projekt', target: true}
        ],
        image: './src/assets/img/projects/zahnheilkunde-lienemann.jpg'
    },
    {
        name: 'Tuzuz Shop',
        skills: ["Shopware", "Twig", "SCSS"],
        buttons: [
            {link: "https://shop.tuzuz.de/", text: 'Zum Projekt', target: true}
        ],
        image: './src/assets/img/projects/tuzuz-shop.jpg'
    },
    {
        name: 'Diese Website',
        skills: ["Vue", "Bootstrap", "SCSS"],
        buttons: [
            {link: "#", text: 'Zum Projekt', target: true},
            {link: "#", text: 'Zum Code', target: true}
        ],
        image: './src/assets/img/projects/thumbnail-project-1-small.webp'
    },
];

/* Footer */
const footer: { headline: string; text: string; sendbutton: string; isFooter: boolean; navigation: ({ link: string; text: string })[] } = {
    headline: "Kontakt",
    text: "Liebend gern würde ich mehr über dich und dein Projekt erfahren und wie ich dich unterstützen kann. Füll doch das Formular aus und ich komme so schnell wie möglich auf dich zurück.",
    sendbutton: "Senden",
    isFooter: true,
    navigation: [
        {link: "https://info.pt1602.de/?site=imprint", text: 'Impressum'},
        {link: "https://info.pt1602.de/?site=privacy", text: 'Datenschutz'}
    ],
};
</script>

<template>
    <header>
        <MainNavigation
            :name="mainnav.name"
            :socialMediaNav="socialMediaNav"
            iconSize="xl"
            :isFooter="false"/>
    </header>
    <main>
        <Masthead
            :name="masthead.name"
            :subheadline="masthead.subheadline"
            :description="masthead.description"
            :primaryoutlinebuttontext="masthead.primaryoutlinebuttontext"
            :primaryoutlinebuttonlink="masthead.primaryoutlinebuttonlink"/>

        <Skills :skills="skills"
                :skillunit="skillUnit"/>

        <Projects :projectsheadline="projectsheadline"
                  :primaryoutlinebuttontext="projectcontact.primaryoutlinebuttontext"
                  :primaryoutlinebuttonlink="projectcontact.primaryoutlinebuttonlink"
                  :projects="projects"/>
    </main>
    <footer class="position-relative" id="contact">
        <Footer :headline="footer.headline"
                :text="footer.text"
                :sendbutton="footer.sendbutton"
                :socialMediaNav="socialMediaNav"
                :name="mainnav.name"
                :isFooter="footer.isFooter"
                :footerNavigation="footer.navigation"/>
    </footer>
</template>


