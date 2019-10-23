<template>
    <div class="welcome">
        <h3>Welcome to the Mental Math Challenge</h3>
        <h3>:: The Rules ::</h3>
        <div class="narrow">You Have 60 sec to answer as many Math Challenges as You Can.<br>
        No Cheating !</div>
        <button class="appBtn" @click="$emit('start-game')">LET'S GO</button>
    </div>
</template>

<script>
export default {
    
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