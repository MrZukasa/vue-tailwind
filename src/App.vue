<template>
  <span class="title">{{ title }}</span>                              <!-- per usare il componente con dello stile devo creare una classe con tailwind-->
  <input class="inputText focus:outline-none focus:bg-white focus:border-purple-500" type="text" ref="name">
  <button @click="handleClick" class="btn ml-2 hover:bg-purple-400 focus:shadow-outline focus:outline-none">click me</button>
  <div v-if="showModal">
    <Modal :header="header" :text="text" :theme="color" @close="toggleModal"></Modal>                          <!-- qui è dove uso le props -->
    <!-- con il v-bind posso usare queste proprietà popolandole nella sezione data(), altrimenti sarebbero stringhe normali -->
  </div>
  <br>
  <button @click="toggleModal" class="btn mt-2 hover:bg-purple-400 focus:shadow-outline focus:outline-none">Show Modal</button>  
</template> 

<script>
import Modal from './components/Modal.vue'                             //importo il componente che ho fatto

export default {
  name: 'App',
  components: { Modal },                                               //qui si registrano i componenti
  data() {
    return {
      title: "This is the title of the component",                     //questo è il primo componente che uso
      header: "Modal Title",                                           //databind
      text: "Modal Content",
      showModal: false,
      color: "sale"
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name.value)                              //questo è il metodo che uso nel bottone per far partire l'evento
    },
    toggleModal(){
      this.showModal = !this.showModal
      this.color = this.$refs.name.value                              //se scrivo "sale" cambia il tema di colori della modal 
    },      
  }
}
</script>

<style>
.title {
  @apply border-b-2 block pb-2.5 text-4xl  
}

.inputText {
  @apply appearance-none border-2 border-gray-200 rounded py-2 px-4 mt-2 text-gray-700 leading-tight
}

.btn {
  @apply shadow bg-purple-500 text-white font-bold py-2 px-4 rounded
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
</style>
