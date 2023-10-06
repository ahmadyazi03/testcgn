import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from "vuex";
import '../index.css'
const store = createStore({
    state: {
        pageTransition: {
            name: "router-view",
            mode: "in-out"
        }
    },
});
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
