<template>

  <div class="darkmode_icon" @click="toggledarkmode">
    <svg xmlns="http://www.w3.org/2000/svg" ref="moon" class="h-7 w-7" :fill="filled" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  </div>

  <span class="title">{{ title }}</span>

  <teleport to=".modals" v-if="showModal">
    <Modal :theme="color" @close="toggleModal">                 
      <p class="title">Titolo della Modale</p>
      <p>Testo della Modale</p>
      <template v-slot:links>
        <a href="#">Link 1</a>      
        <a href="#">Link 2</a>
      </template>
    </Modal>
  </teleport>

  <div v-if="showModal2">
    <Modal :theme="color" @close="toggleModal2">                 
      <p class="title">Titolo della seconda Modale</p>
      <p class="mt-3">Testo della seconda Modale</p>      
    </Modal>
  </div>

  <p class="mt-3 text-xl ">Welcome!</p>
  
  <button @click="toggleModal" class="btn mt-2 hover:bg-purple-400 focus:shadow-outline focus:outline-none">Show Modal</button>  
  <button @click="toggleModal2" class="btn mt-2 hover:bg-purple-400 focus:shadow-outline focus:outline-none ml-8">Show Modal 2</button>  

</template> 

<script>
import Modal from './components/Modal.vue'                             

export default {
  name: 'App',
  components: { Modal },                                               
  data() {
    return {
      title: "Titolo del Componente",
      showModal: false,
      showModal2: false,
      color: "light",
      filled: "none"
    }
  },
  methods: {
    toggleModal(){
      this.showModal = !this.showModal      
    },
    toggleModal2(){
      this.showModal2 = !this.showModal2      
    },
    toggledarkmode(){
      if (this.color == "dark"){
        this.color = "light"
        this.filled="none"
      }else{
        this.color = "dark"
        this.filled="currentColor"
      }      
    }
  }
}
</script>

<style>
.darkmode_icon{
  @apply flex justify-end cursor-pointer mr-6
}
.title {
  @apply border-b-2 block pb-2.5 text-4xl  
}

.inputText {
  @apply appearance-none border-2 border-gray-200 rounded py-2 px-4 mt-2 text-gray-700 leading-tight
}

.btn {
  @apply shadow bg-purple-500 text-white font-bold py-2 px-4 rounded
}

#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
</style>
