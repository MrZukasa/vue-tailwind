<template>
    <p class="punteggio">React. Time: {{punteggio}} ms</p>
    <p class="voto">{{rank}}</p>
</template>

<script>
export default {
    props: ['punteggio'],
    data() {
        return {
            rank: null
        }
    },
    mounted(){
        if(this.punteggio < 250) {
            this.rank='Wow!!'
        } else if(this.punteggio < 400){
            this.rank = 'Che riflessi!'
        } else {
            this.rank = 'Lumaca'
        }
    }
}
</script>