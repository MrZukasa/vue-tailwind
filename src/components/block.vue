<template>
    <button class="blocco" v-if="showblock" @click="stopTimer">STOP!!</button>  
</template>

<script>
export default {
    props: ['delay'],                                              //la prosp che voglio ricevere qui è questa
    data(){
        return {
            showblock: false,
            timer: null,
            reactionTimer: 0
        }
    },
    mounted(){                                                     //hook che richiama un metodo dopo essere stato montato        
        setTimeout(() =>{
            this.showblock=true
            this.startTimer()
        },this.delay);
    },
    updated(){                                                    //hook che richiama un metodo dopo essere stato aggiornato
        console.log("componente aggiornato")
    },
    unmounted(){                                                  //hook che richiama un metodo dopo essere stato smontato
        console.log("componente smontato")
    },
    methods: {
        startTimer(){
            this.timer=setInterval(()=>{
                this.reactionTimer +=10
            },10)
        },
        stopTimer(){
            clearInterval(this.timer)
            this.$emit('fine',this.reactionTimer)
        }
    }
}
</script>