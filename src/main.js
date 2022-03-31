import { createApp } from 'vue'              //we dont need to call vue.createApp in this document becuase we just import it as a standalone function here
import App from './App.vue'                  //we import this vue component as parameter to our function
import './assets/tailwind.css'               //here is where we import the tailwind framework
import './assets/global.css'

createApp(App).mount('#app')                 //mount mean inject the component into html file at this specific tag
