import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import '../src/assets/main.css'
import Card from 'primevue/card';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Divider from 'primevue/divider';
import InputNumber from 'primevue/inputnumber';
import RadioButton from 'primevue/radiobutton';

import '@/resources/themes/saga-blue/theme.css'       //theme
import '@/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

const app = createApp(App)

app.use(PrimeVue)

app.component('Card', Card)
app.component('Button', Button)
app.component('Dialog', Dialog)
app.component('Divider', Divider)
app.component('InputNumber', InputNumber)
app.component('RadioButton', RadioButton)

app.use(router)

app.mount('#app')
