<template>
    <div>
        <div class="mb-2">
            <button class="appBtn" @click="goTimer">START</button>
            <div class="go-right">Time Remaining : {{ timerLength }}</div>
            <div style="content:'', display: table, clear:both"></div>
        </div>
        <p class="medFont">Questions Asked: {{ totalQuestions }}</p>
        <p class="medFont">Correct Answers: {{ correctAnswers }}<span class="pull-right">{{ lastSubmission }}</span></p>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
    
    data() {
        return { 
            // count: this.timerLength,
            // answer: 'correct + 1'
        }
    }, 
    methods: {
        ...mapActions([
            'startTimer'
        ]),
        goTimer() {
            this.startTimer().then(() => {
                this.$emit('out-time')
            }).catch(() => {
                console.log('error');
            });
        }
    },
    computed: {
        ...mapState([
            'timerLength',
            'totalQuestions',
            'correctAnswers',
            'lastSubmission'
        ])
    }

}

 
</script>

<style scoped>
    .go-right {
        float: right;
        font-size: 2.4em;
        vertical-align: bottom;
    }

    .mb-2{
        margin-bottom: 30px;
    }

    .appBtn {
        margin-top:10px;
    }
</style>
 