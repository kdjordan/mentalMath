<template>
     <div class="alert alert-success text-center">
        <h1>Aaaaaannnnnd You're Done</h1>
        <hr>
        <button class="btn btn-primary" @click="startGame">Go Another Round</button>
    </div>
</template>

<script>
export default {
    methods: {
        startGame() {
            this.$emit('start-game');
        }
    }
}
</script>

<style>

</style>