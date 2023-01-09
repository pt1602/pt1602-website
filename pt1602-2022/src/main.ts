import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* Font-Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faGithub, faReddit, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faInstagram, faGithub, faReddit, faLinkedin)

import VueTypewriterEffect from "vue-typewriter-effect";

import Tilt from "vanilla-tilt-vue"

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import './assets/scss/main.scss'

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).component("vue-typewriter-effect", VueTypewriterEffect).component("Tilt", Tilt).mount('#app')
