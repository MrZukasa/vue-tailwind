<template>
    <div class="backdrop">
        <div class="modal">
            <p>modal content</p>
        </div>
    </div>
</template>


<style>
.modal{
    @apply w-96 p-5 mt-44 mx-auto bg-white rounded-lg
}

.backdrop{        
    @apply top-0 fixed bg-zinc-600/50 w-full h-full
}
</style>