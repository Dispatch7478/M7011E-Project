import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: 'https://keycloak.ltu-m7011e-4.se',
  realm: 'master',
  clientId: 't-hub-frontend',
})

const initOptions = {
  onLoad: 'check-sso',
  checkLoginIframe: false,
}

// ✅ Only use PKCE when the page is served from a secure context
if (window.isSecureContext) {
  initOptions.pkceMethod = 'S256'
} else {
  console.warn('Not a secure context (no HTTPS / localhost). Disabling PKCE.')
}

keycloak
  .init(initOptions)
  .then(authenticated => {
    console.log('Keycloak authenticated:', authenticated)
  })
  .catch(err => {
    console.error('Keycloak initialization failed:', err)
  })
  .finally(() => {
    const app = createApp(App)
    app.use(router)
    app.config.globalProperties.$keycloak = keycloak
    app.mount('#app')
  })