import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    
    
    state: {
        timerLength: 60,
        totalQuestions: 0,
        correctAnswers: 0,
        lastSubmission: '',
        newQuestion: false
    },
    mutations: {
        SET_TIMER: (state, sec) => {
            state.timerLength = sec;
        }
    },
    getters: {
        getWinPercentage: state => {
            return Math.ceil(((state.correctAnswers / state.totalQuestions * 100)));
        }
    },
    actions: {
        startTimer({context}) { 
            return new Promise ((resolve, reject) => {
                let timer = setInterval(() => { 
                    this.state.timerLength = this.state.timerLength - 1;
                    if (this.state.timerLength == 0) {
                        clearInterval(timer);
                        resolve();
                    } 
                }, 1000);
            })
        }
    }
});


