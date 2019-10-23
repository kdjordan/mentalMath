<template>
    <div class="container">
       <app-header v-if="gameLive"></app-header>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            
                    <component :is="mode" ref="qcomp" @answered="answered($event)" @confirmed="mode = 'app-question'" @start-game="startGame"></component>
                    <app-timer v-if="gameLive"></app-timer>
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
    import { mapState, mapActions } from 'vuex'



    export default {
        data() {
            return {
                mode: 'app-start-game',
                gameLive: false
            }
        },
        computed: {
            ...mapState([
                'totalQuestions',
                'correctAnswers'
            ])
        },
        methods: {
            ...mapActions([
                'startTimer'
            ]),
            goTimer() {
                this.startTimer().then(() => {
                    this.mode = 'app-app-done'
                    this.gameLive = false;
                }).catch(() => {
                    console.log('error');
                });
            },
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
                setTimeout(() => {
                    this.$store.state.lastSubmission = '';
                }, 1000)

          },
          haltGame() {
              this.mode = 'app-app-done';
              this.gameLive = false;
          },
          startGame() {
              this.$store.state.timerLength = 60;
              this.goTimer();
              console.log('here');
              this.mode = 'app-question';
              this.gameLive = true;
              this.$store.state.totalQuestions = 0;
              this.$store.state.correctAnswers = 0;
              
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
        text-transform: uppercase;
        
    }
    .appBtn:focus {
        outline: none;
    }
    .medFont{
        font-size: 1.5em;
    }
    .animatePulse {
        animation: pulse 2s infinite;
    }

    @keyframes pulse{
        from {
            opacity: 1;
        }
        to {
            opacity: 0
        }
    }
</style>
