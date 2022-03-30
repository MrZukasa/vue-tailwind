<template>
    <div class="backdrop" @click.self="closeModal">
        <!-- aggiungo l'evento che richiama la chiusura della modale al click -->
        <!-- il metodo .self fa si che l'evento si scateni solo al click del backdrop e non di altri elementi -->
        <div class="modal" :class="{sale:theme==='sale'}">
            <!-- faccio un oggetto che controlla se il valore di theme è "sale" in caso da applicare lo stile "sale" -->
            <!-- l'oggetto è definito come un array chiave:valore dove la chiave è "sale" e il valore è un boolean di risposta dal controllo -->
            <p class="title">{{header}}</p>
            <!-- qui è dove appare la props dopo averla popolata nel componente principale -->
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header','text','theme'],                               //cosi è come si definiscono le props
    methods: {
        closeModal(){
            this.$emit('close')                                    //emit emette l'evento chiamato close, l'evento si innesca quando si clicca sul backdrop
        }
    }
}
</script>

<style>                                                            /*per usare questo stile solo nel componente Modal.vue dobbiamo dichiararlo come scoped*/
.modal{
    @apply w-96 p-5 mt-44 mx-auto bg-white rounded-lg
}

.backdrop{        
    @apply top-0 fixed bg-zinc-600/50 w-full h-full
}

.modal .title {                                                    /*questo è lo stile che può venire sovrascritto se non mettiamo lo scope o il .modal*/
    @apply border-b-2 block pb-2.5 text-4xl text-emerald-500
}

.modal.sale {
    @apply bg-green-900 text-white
}
</style>