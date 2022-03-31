<template>
  <p class="title">Supa Reaction Timer</p>
  <button class="btn mt-2" :disabled="StaGiocando" @click="start">Go</button>
  <br>
  <block v-if="StaGiocando" :delay="delay" @fine="fineGioco" /> 
  <results v-if="mostraPunteggio" :punteggio="punteggio"/>  
</template> 

<script>
import block from './components/block.vue'
import results from './components/results.vue'

export default {
  name: 'App',
  components: { block, results },
  data(){
    return {
      StaGiocando: false,
      delay: null,
      punteggio: 0,
      mostraPunteggio: false
    }
  },
  methods: {
    start(){
      this.delay = 2000 + Math.random() * 5000            //numero random tra (0 e 5000) + 2000 di base
      this.StaGiocando=true      
      this.mostraPunteggio=false
    },
    fineGioco(valore){
      this.punteggio=valore
      this.StaGiocando=false
      this.mostraPunteggio=true
    }
  }
}
</script>
