<script setup>
import Message from '../mealsCom/message.vue';
const props=defineProps(["item","ifdesc"]);
// const props=defineProps(["item"]);
</script>

<template>
    <!-- <div style="font-size:30px">{{ props.item.title }}</div> -->
    <div class="meal">
        <div class="pic">
             <img :src="props.item.img">
        </div>
        <message :ifdesc="props.ifdesc" :item=props.item></message>
         
    </div>
    
</template>

<style scoped>
.meal{
    height:150rem;
    margin:0 7rem;
    /* background-color: antiquewhite; */
    overflow: hidden;
    /* border-bottom:rgb(233, 230, 230) 0.5rem solid; */
    border-bottom:rgb(241, 241, 241) 0.5rem solid;
}
.pic{
    float: left;
    width:140rem;
    height:140rem;
    margin:auto 0;
}
img{
    width:140rem;
    height:140rem;
}

</style>
