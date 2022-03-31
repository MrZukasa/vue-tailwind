<template>
    <div class="backdrop" @click.self="closeModal">        
        <div class="modal" :class="{dark:theme==='dark'}">
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['theme'],                                              
    methods: {
        closeModal(){
            this.$emit('close')                                    
        }
    }
}
</script>

<style>                                                            
.modal{
    @apply w-96 p-5 mt-44 mx-auto bg-white rounded-lg
}
.backdrop{
    @apply top-0 fixed bg-zinc-600/50 w-full h-full
}
.modal .title {
    @apply border-b-2 block pb-2.5 text-4xl text-emerald-500
}
.modal.dark {
    @apply bg-green-900 text-white
}
.modal .actions {
    @apply text-center mt-7 mb-3
}
.modal .actions a {
    @apply bg-green-200 p-2 border-2 border-solid border-green-600 rounded-md m-5 text-green-700 no-underline
}
.modal.dark .actions{
    @apply bg-green-900
}
.modal.dark .actions a {
    @apply bg-green-900 text-white border-yellow-500
}
</style>