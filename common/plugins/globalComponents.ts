import PrimeMenu from 'primevue/menu'
import PrimeCard from 'primevue/card'
import PrimeSteps from 'primevue/steps'
import PrimeButton from 'primevue/button'
import PrimeSidebar from 'primevue/sidebar'
import PrimeDivider from 'primevue/divider'
import PrimeDropdown from 'primevue/dropdown'
import PrimePassword from 'primevue/password'
import PrimeInputText from 'primevue/inputtext'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('PrimeCard', PrimeCard)
    nuxtApp.vueApp.component('PrimeMenu', PrimeMenu)
    nuxtApp.vueApp.component('PrimeSteps', PrimeSteps)
    nuxtApp.vueApp.component('PrimeButton', PrimeButton)
    nuxtApp.vueApp.component('PrimeSidebar', PrimeSidebar)
    nuxtApp.vueApp.component('PrimeDivider', PrimeDivider)
    nuxtApp.vueApp.component('PrimePassword', PrimePassword)
    nuxtApp.vueApp.component('PrimeDropdown', PrimeDropdown)
    nuxtApp.vueApp.component('PrimeInputText', PrimeInputText)
})
