<template>
    <div>
        <div class="mb-2">
            <div class="go-right">Time Remaining : {{ timerLength }}</div>
            <div style="content:'', display: table, clear:both"></div>
        </div>
        <p class="medFont">Questions Asked: {{ totalQuestions }}</p>
        <p class="medFont">Correct Answers: {{ correctAnswers }}<span class="pull-right">{{ lastSubmission }}</span></p>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
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
 