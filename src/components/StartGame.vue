<template>
<div>
    <div class="welcome" v-if="start">
        <h3>Welcome to the Mental Math Challenge</h3>
        
        <div class="narrow medFont">
            <h3>:: The Rules ::</h3><br>
            <p>
            You Have 60 sec to answer as many Math Challenges as You Can.<br><br>
                <span class="animatePulse">No Cheating !</span>
            </p>
        </div>
        <button class="appBtn" @click="startCountdown">LET'S GO</button>
    </div>
    <div class="welcome" v-else>
        <h3>Here We Go</h3>
        
        <div class="narrow medFont">
            <h1>{{ timer }}</h1>
           
        </div>
        
    </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            start: true,
            timer: 5
        }
    },
    methods: {
        startCountdown() {
            this.start = false;
            setInterval(() => {
                this.timer = this.timer -1 
                if(this.timer == 0) {
                    this.$emit('start-game')
                }
            }, 1000);
        }

    }
}
</script>

<style scoped>
    .welcome {
        border: 1px solid #5CF257;
        border-radius: 10px;
        padding: 30px;
        margin-top: 25%;
        text-align: center
    }
    .narrow {
        width: 80%;
        margin: 0 auto;
    }

    h3 {
        margin-bottom: 20px;
    }
    .appBtn{
        margin-top: 20px;
        background: transparent;
        padding: 10px;
        border-radius: 5px;
        
    }
    .appBtn:hover {
        width: 120px;
    }
    .appBtn:focus {
        outline: none;
    }
    
</style>