import { createApp } from 'vue'
import App from './App.vue'

/* Font-Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram, faGithub, faXing, faLinkedin } from '@fortawesome/free-brands-svg-icons'
library.add(faInstagram, faGithub, faXing, faLinkedin)

import VueTypewriterEffect from "vue-typewriter-effect"
// @ts-ignore
import Tilt from 'vanilla-tilt-vue'

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import './assets/scss/main.scss'
import './assets/typescript/follow'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon).component("vue-typewriter-effect", VueTypewriterEffect).component("Tilt", Tilt).mount('#app')
