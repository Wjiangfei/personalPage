<script setup>
import changeNumber from '../mealsCom/change-number.vue';
import { useMealStore } from '../../store/Meals';

const props=defineProps(["item"]);
const meals=useMealStore();
</script>

<template>
    <div class="meal">
        <!-- 图像 -->
        <div class="pic">
             <img :src="props.item.img">
        </div>
        <!-- 标题 -->
        <div class="title">{{ props.item.title }}</div>
        <!-- 价格和数量 -->
        <div class="des">
            <changeNumber class="change" :id="props.item.id"></changeNumber>
            <div class="price">{{ props.item.price * meals.mount[props.item.id-1]}}</div>
        </div>
        
    </div>
    
</template>

<style scoped>
.meal{
    height:90rem;
    width:330rem;
    overflow: hidden;
}
.pic{
    float: left;
    width:90rem;
    height:90rem;
    margin:auto 0;
}
img{
    width:90rem;
    height:90rem;
}
.title{
    position:relative;
    font-size:15rem;
    margin-top:15rem;
    padding-left:95rem;
    font-weight: bold;

}
.des{
   position:relative;
   top:15rem;
   display: flex;
   justify-content: space-between;
}
.price{
    height:20rem;
    width:50rem;
    font-weight:bold;
    font-size:15rem;
}
.price::before{
    content:"￥";
    font-size: 15rem;
}



</style>
