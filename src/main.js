import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import OptionsComponent from './components/OptionsComponent.vue'
import MainButton from './components/MainButton.vue'

const app = createApp(App)

app.component('CompositionComponent', CompositionComponent)
app.component('OptionsComponent', OptionsComponent)
app.component('MainButton', MainButton)

app.mount('#app')
