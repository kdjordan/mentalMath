<template>
    <div class="container">
       <app-header v-if="gameLive"></app-header>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            
                    <component :is="mode" ref="qcomp" @answered="answered($event)" @confirmed="mode = 'app-question'" @start-game="startGame"></component>
                    <app-timer v-if="gameLive" @out-time="haltGame"></app-timer>
            </div>
        </div>
    </div>
</template>

<script>
    import Question from './components/Question.vue';
    import Answer from './components/Answer.vue';
    import AppDone from './components/AppDone.vue';
    import AppTimer from './components/Timer.vue';
    import StartGame from './components/StartGame.vue';
    import Header from './components/Header.vue';
    import { mapState } from 'vuex'



    export default {
        data() {
            return {
                mode: 'app-question',
                gameLive: true
            }
        },
        computed: {
            ...mapState([
                'totalQuestions',
                'correctAnswers'
            ])
        },
        methods: {
          answered(isCorrect) {
              this.$store.state.totalQuestions++;
              
              let child = this.$refs;
              if (isCorrect) {
                  this.$store.state.lastSubmission = 'correct +1';
                  this.$store.state.correctAnswers++;
              } else {
                  this.$store.state.lastSubmission = 'incorrect +0';
                  this.$store.state.newQuestion = true;
              }
              child.qcomp.generateQuestion();

          },
          haltGame() {
              this.mode = 'app-app-done';
          },
          startGame() {
              this.mode = 'app-question';
              this.gameLive = true;
              this.$store.state.totalQuestions = 0;
              this.$store.state.correctAnswers = 0;
              this.$store.state.timerLength = 5;
          }
        },
        components: {
            appQuestion: Question,
            appAnswer: Answer,
            appAppDone: AppDone,
            appTimer: AppTimer,
            appStartGame: StartGame,
            appHeader: Header
        }
    }
</script>

<style>
    body {
    font-family: 'Inconsolata', monospace;
    background: #022601;
    color: #5CF257;
    padding: 30px;
    }
    .appBtn{
        background: transparent;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #5CF257;
        
    }
    .appBtn:focus {
        outline: none;
    }
    .medFont{
        font-size: 1.5em;
    }
</style>
