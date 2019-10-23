<template>
<div>
     <div class="alert alert-success text-center">
        <h1 id="typed">Aaaaaannnnnd You're Done</h1>
        <h3>&lt; Your Results &gt;</h3>
            <p class="medFont">
            Length of Challenge :: 60s <br>  
            Questions Attempted :: {{ this.$store.state.totalQuestions }} <br>
            Correct Questions :: {{ this.$store.state.correctAnswers }} <br>
            Success Rate :: {{ getWinPercentage }}%
            </p>
        <br><br>
        <button class="appBtn" @click="startGame">Try Again</button>
    </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'


export default {        
   computed: {
       ...mapGetters([
           'getWinPercentage'
       ])
   },
    methods: {
        startGame() {
            this.$emit('start-game');
        }
    }
}
</script>

<style scoped>
    .alert-success {
        background: #022601;
        border: 1px solid #5CF257;
        color: #5CF257;
        margin-top: 25%;
    }
</style>