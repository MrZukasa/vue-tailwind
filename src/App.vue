<template>
  <span class="title">{{ title }}</span>
  <input class="inputText focus:outline-none focus:bg-white focus:border-purple-500" type="text" ref="name">
  <button @click="handleClick" class="btn hover:bg-purple-400 focus:shadow-outline focus:outline-none">click me</button>
  <Modal></Modal>
</template> 

<script>
import Modal from './components/Modal.vue'                           // import the component that we just made

export default {
  name: 'App',
  components: { Modal },                                               // also register the component here
  data() {
    return {
      title: "This is the title of the component"
    }
  },
  methods: {
    handleClick(){
      console.log(this.$refs.name.value);      
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
  @apply shadow bg-purple-500 text-white font-bold py-2 px-4 rounded ml-2
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
