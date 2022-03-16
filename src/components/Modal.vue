<template>
    <div class="backdrop" @click="closeModal">                     <!--adding the event that close the modal on click -->
        <div class="modal" :class="{sale:theme==='sale'}">
            <!-- making a big object where check if the theme value is = "sale" then apply sale style -->
            <!-- the object is defined as a key:value array where the key is "sale" and the value is the boolean tha come out from the check -->
            <p class="title">{{header}}</p>                        <!-- this is where our props appear after we popupate it in the main component -->
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['header','text','theme'],                               //this is how we difine the props
    methods: {
        closeModal(){
            this.$emit('close')                                    //emit the custom event named close, we trigger this emission when we have the click on the backdrop
        }
    }
}
</script>

<style>                                                            /*in order to use this style only in Modal.vue components we need to declare this as scoped*/
.modal{
    @apply w-96 p-5 mt-44 mx-auto bg-white rounded-lg
}

.backdrop{        
    @apply top-0 fixed bg-zinc-600/50 w-full h-full
}

.modal .title {                                                    /*this is the style that can be overwrite if we miss the scope or the .modal*/
    @apply border-b-2 block pb-2.5 text-4xl text-emerald-500
}

.modal.sale {
    @apply bg-green-900 text-white
}
</style>