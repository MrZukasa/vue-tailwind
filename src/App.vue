<template>
  <span class="title">{{ title }}</span>                              <!-- in order to use the component with some style i need to create a class with tailwind-->
  <input class="inputText focus:outline-none focus:bg-white focus:border-purple-500" type="text" ref="name">
  <button @click="handleClick" class="btn ml-2 hover:bg-purple-400 focus:shadow-outline focus:outline-none">click me</button>  
  <div v-if="showModal">
    <Modal :header="header" :text="text" theme="sale"></Modal>                          <!-- this is where we use our props -->
    <!-- by v-bind this props we can populate that in the data section, otherwise we need to use those as a string -->
  </div>
  <br>
  <button @click="toggleModal" class="btn mt-2 hover:bg-purple-400 focus:shadow-outline focus:outline-none">Show Modal</button>  
</template> 

<script>
import Modal from './components/Modal.vue'                             //import the component that we just made

export default {
  name: 'App',
  components: { Modal },                                               //also register the components here
  data() {
    return {
      title: "This is the title of the component",                     //this is the first component that we want to use
      header: "Modal Title",                                           //databind
      text: "Modal Content",
      showModal: false
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name.value)                              //this is the method that we want to use in our button in order to trigger the event      
    },
    toggleModal(){
      this.showModal = !this.showModal
    }
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
