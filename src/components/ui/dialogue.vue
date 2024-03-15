<script setup>

const props=defineProps(["quest"]);

</script>


<template>
    <div class="mask">
        <div class="dial">
            <div class="checkTitle">
                {{props.quest}}
            </div>
            
            <div class="cancel" @click="$emit('cancel')">取消</div>
            <div class="determine" @click="$emit('deter')">确定</div>
        </div>
    </div>
</template>

<style scoped>
.mask{
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(63, 63, 63, 0.7);
    z-index:9;

}
.dial{
    height:150rem;
    width:350rem;
    background-color: rgb(250, 250, 250);
    position:absolute;
    top:300rem;
    left:20rem;
    border-radius: 20rem;
    padding:15rem;
}
.checkTitle{
    font-size: 17rem;
    text-align:center;
    margin:15rem auto;
}
.determine, .cancel{
    width:150rem;
    height:40rem;
    font-size: 18rem;
    float:left;
    text-align: center;
    border:1rem gray solid;
    margin:5rem;
    line-height:38rem;
    border-radius: 30rem;
    /* font-weight:bold; */

}
.determine{
    background-color:  rgb(250,187,2);
    border:none;
    font-weight:bold;
}
</style>