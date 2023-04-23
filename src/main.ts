import {createApp} from 'vue'
import App from './App.vue'

/* Font-Awesome */
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faInstagram, faGithub, faXing, faLinkedin} from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram, faGithub, faXing, faLinkedin)

import VueTypewriterEffect from "vue-typewriter-effect"
// @ts-ignore
import Tilt from 'vanilla-tilt-vue'

import CookieConsent from 'vue-cookieconsent'
import '../node_modules/vue-cookieconsent/vendor/cookieconsent.css'

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import './assets/scss/main.scss'
import './assets/typescript/follow'

const consentOptions = {
    auto_language: 'browser',
    autoclear_cookies: false,
    page_scripts: true,
    cookie_name: 'pt_cookie',
    cookie_expiration: 30,
    force_consent: true,

    gui_options: {
        consent_modal: {
            layout: 'box',
            position: 'bottom left',
            transition: 'slide',
            swap_buttons: false
        },
        settings_modal: {
            layout: 'box',
            transition: 'slide'
        }
    },

    languages: {
        'de': {
            consent_modal: {
                title: 'Auch ich nutze Cookies!',
                description: 'Diese Website verwendet essenzielle Cookies, um ihren ordnungsgemäßen Betrieb zu gewährleisten und Tracking-Cookies, um die Nutzerinteraktion auszuwerten. Letztere werden nur nach Zustimmung gesetzt. <button type="button" data-cc="c-settings" class="cc-link">Mehr Infos</button>',
                primary_btn: {
                    text: 'Alle akzeptieren',
                    role: 'accept_all'
                },
                secondary_btn: {
                    text: 'Alle ablehnen',
                    role: 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie Einstellungen',
                save_settings_btn: 'Einstellungen speichern',
                accept_all_btn: 'Alle akzeptieren',
                reject_all_btn: 'Alle ablehnen',
                close_btn_label: 'Schließen',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Ablauf'},
                    {col4: 'Beschreibung'}
                ],
                blocks: [
                    {
                        title: 'Verwendete Cookis 📢',
                        description: 'Ich verwende Cookies, um die grundlegenden Funktionen der Website zu gewährleisten und um Ihr Online-Erlebnis zu verbessern. Du kannst bei jeder Kategorie wählen, ob aktiv sein soll. Für weitere Einzelheiten zu Cookies und anderen sensiblen Daten ließ bitte die vollständige <a href="https://info.pt1602.de/?site=privacy" target="_blank" class="cc-link">Datenschutzerklärung</a>.'
                    },
                    {
                        title: 'Technisch notwendige Cookies',
                        description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren meiner Website unerlässlich. Ohne diese Cookies würde die Website nicht richtig funktionieren.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true
                        },
                        cookie_table: [
                            {
                                col1: '_lcp*',
                                col2: 'www.lima-city.de',
                                col3: '1 year',
                                col4: 'Der von mir gewählte Hoster (www.lima-city.de) setzt im Rahmen der Bot-Sperre Cookies (Name "lcp", "lcp2", "_lcp3"). Diese Cookies sind nicht personenbezogen und haben daher keinen Bedeutung im Rahmen der DSGVO.',
                                is_regex: true
                            },

                            {
                                col1: 'pt_cookie',
                                col2: 'pt1602.de',
                                col3: '30 days',
                                col4: 'Cookie um die gewählten Einstellungen des Cookie-Layers zu speichern.',
                                is_regex: false
                            }
                        ]
                    },
                    {
                        title: 'Google Analytics',
                        description: 'Google Analytics (GA) ist ein Trackingtool des US-amerikanischen Unternehmens Google LLC, das der Datenverkehrsanalyse von Webseiten (Webanalyse) dient.',
                        cookie_table: [
                            {
                                col1: '_ga*',
                                col2: 'www.google.com',
                                col3: '30 days',
                                col4: 'Google Analytics setzt diverse mit Cookies, welche mit "_ga" starten.',
                                is_regex: true
                            }
                        ],
                        toggle: {
                            value: 'analytics',
                            enabled: true,
                            readonly: false
                        }
                    },
                    {
                        title: 'Kontaktformular',
                        description: 'Für die Funktionalität des Kontaktformulars nutze ich <a href="https://formsubmit.co/" target="_blank">formsubmit.co</a>. Für weitere Informationen rund um die Datenverarbeitung gibt es hier ein <a href="https://formsubmit.co/privacy.pdf" target="_blank">PDF</a>.',
                        toggle: {
                            value: 'contact-form',
                            enabled: true,
                            readonly: false
                        }
                    },
                    {
                        title: 'Weitere Informationen',
                        description: 'Solltest du zusätzliche Informationen benötigen oder Fragen haben <a class="cc-link" target="_blank" href="mailto:cookies@pt1602.de">kontaktiere mich</a>.',
                    }
                ]
            }
        }
    },
}

const app = createApp(App)

app.use(CookieConsent, consentOptions)

app.component('font-awesome-icon', FontAwesomeIcon).component("vue-typewriter-effect", VueTypewriterEffect).component("Tilt", Tilt).mount('#app')
