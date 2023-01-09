<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
import Masthead from "@/components/Masthead.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import Footer from "@/components/Footer.vue";
import MainNavigation from "@/components/MainNavigation.vue";

/* Navigation */
const mainnav: ({ name?: string, isFooter?: boolean }) = {
    name: "pt1602",
    isFooter: false
};
const socialMediaNav: ({ icon?: string; link?: string })[] = [
    {icon: 'instagram', link: 'https://google.com/'},
    {icon: 'github', link: 'https://google.com/'},
    {icon: 'reddit', link: 'https://google.com/'},
    {icon: 'linkedin', link: 'https://google.com/'}
];

/* Masthead */
const masthead: { primaryoutlinebuttontext: string; primaryoutlinebuttonlink: string; name: string; description: string; subheadline: string } = {
    name: "Philipp Tuchardt",
    subheadline: "Nice to meet&nbsp;you!",
    description: "A web-developer based in the middle of germany. Who is also widely interested in other tech stuff like linux systems, 3d printing and photography.",
    primaryoutlinebuttontext: "Contact me",
    primaryoutlinebuttonlink: "https://pt1602.de/"
};

/* Skills */
const skillUnit: string = "experience"
const skills: ({ name?: string; experience?: number })[] = [
    {name: 'Shopware', experience: 3},
    {name: 'Twig', experience: 3},
    {name: 'SCSS', experience: 4},
    {name: 'Javascript', experience: 4},
    {name: 'Vue', experience: 2},
    {name: 'Typescript', experience: 1}
];

/* Projects */
const projectsheadline: string = "Projects";
const projectcontact: { primaryoutlinebuttontext: string; primaryoutlinebuttonlink: string; } = {
    primaryoutlinebuttontext: "Contact me",
    primaryoutlinebuttonlink: "https://pt1602.de/"
};
const projects: ({ name: string; image: string; skills: string[]; buttons: ({ link: string; text: string })[] })[] = [
    {
        name: 'Shopware',
        skills: ["HTML", "CSS", "JS"],
        buttons: [
            {link: "#", text: 'View Project'},
            {link: "#", text: 'View Code'}
        ],
        image: './src/assets/img/projects/thumbnail-project-1-small.webp'
    },
    {
        name: 'Twig',
        skills: ["HTML", "CSS"],
        buttons: [
            {link: "#", text: 'View Project'},
            {link: "#", text: 'View Code'}
        ],
        image: './src/assets/img/projects/thumbnail-project-1-small.webp'
    },
    {
        name: 'SCSS',
        skills: ["HTML", "CSS"],
        buttons: [
            {link: "#", text: 'View Project'},
            {link: "#", text: 'View Code'}
        ],
        image: './src/assets/img/projects/thumbnail-project-1-small.webp'
    },
    {
        name: 'Javascript',
        skills: ["HTML", "CSS"],
        buttons: [
            {link: "#", text: 'View Project'},
            {link: "#", text: 'View Code'}
        ],
        image: './src/assets/img/projects/thumbnail-project-1-small.webp'
    },
    {
        name: 'Vue',
        skills: ["HTML", "CSS"],
        buttons: [
            {link: "#", text: 'View Project'},
            {link: "#", text: 'View Code'}
        ],
        image: './src/assets/img/projects/thumbnail-project-1-small.webp'
    },
    {
        name: 'Vue',
        skills: ["HTML", "CSS"],
        buttons: [
            {link: "#", text: 'View Project'},
            {link: "#", text: 'View Code'}
        ],
        image: './src/assets/img/projects/thumbnail-project-1-small.webp'
    },
];

/* Footer */
const footer: { headline: string; text: string; sendbutton: string; isFooter: boolean; navigation: ({ link: string; text: string })[] } = {
    headline: "Contact",
    text: "I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.",
    sendbutton: "Send Message",
    isFooter: true,
    navigation: [
        {link: "https://info.pt1602.de/", text: 'Impressum'},
        {link: "https://info.pt1602.de/", text: 'Datenschutz'}
    ],
};
</script>

<template>
    <header>
        <MainNavigation :name="mainnav.name"
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
    <footer class="position-relative">
        <Footer :headline="footer.headline"
                :text="footer.text"
                :sendbutton="footer.sendbutton"
                :socialMediaNav="socialMediaNav"
                :name="mainnav.name"
                :isFooter="footer.isFooter"
                :footerNavigation="footer.navigation"/>
    </footer>
    <!--  <header>
        <img alt="Vue logo" class="logo" src="@/assets/img/logo.svg" width="125" height="125" />

        <div class="wrapper">
          <HelloWorld msg="You did it!" />

            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
          </nav>
        </div>
      </header>

      <RouterView />-->
</template>
