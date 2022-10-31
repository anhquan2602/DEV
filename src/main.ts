import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaseButton from './components/base/BaseButton.vue';

const app = createApp(App);

// Khai báo global component
app.component("BaseButton", BaseButton);

app.mount('#app')
