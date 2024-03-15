<script setup>
import { useMealStore } from '../../store/Meals';
import paymeal from './paymeal.vue';

const meals=useMealStore();

</script>

<template>
    <div class="pay">
        <!-- 返回键 -->
        <div class="close" @click="meals.cancelpay"><i class="ri-close-line"></i></div>
        <!-- 小票 -->
        <div class="receipt">
            <!-- 虚线撕开缺口 -->
            <div class="circle1"></div>
            <div class="circle2"></div>
            <!-- 标题 -->
            <div class="title">餐品详情</div>
            <!-- 内容 -->
            <div class="content">
                <paymeal v-for="meal in meals.getChosed" :item=meal></paymeal>
            </div>
            <!-- 合计 -->
            <div class="res">
                <div>合计</div>
                <div class="price">{{ meals.priceSum }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pay{
    height:100%;
    width:100%;
    background-color: rgb(240, 240, 240);
    /* background-color: radial-gradient(circle at 0 ) */
    position:absolute;
    top:0;
    left:0;
    overflow: auto;
}
.close{
    width:390rem;
    height:40rem;
    font-size:25rem;
    font-weight: bold;
    margin:0 0 10rem 5rem;
    padding-top:10rem;
    padding-left:10rem;
    position:fixed;
    background-color: rgb(240, 240, 240,50%);
    z-index:10;
}
.receipt{
    width:380rem;
    background-color: white;
    margin:45rem auto 80rem auto;
    border-radius: 25rem;
    position:relative;
    overflow: hidden;
}
.circle1,.circle2{
    height:20rem;
    width:20rem;
    background-color: rgb(240, 240, 240);
    border-radius: 50%;
}
.circle1{
    position:absolute;
    bottom:70rem;
    left:-10rem;
}
.circle2{
    position:absolute;
    bottom:70rem;
    right:-10rem;
}
.title{
    height:60rem;
    width:330rem;
    margin:20rem auto 0 auto;
    padding-top:20rem;
    font-size:18rem;
    font-weight: bold;
    line-height: 30rem;
}
.content{
    margin:0 auto;
    width:330rem;
    border-bottom: 0.5px dashed rgb(230, 230, 230);
    border-top: 0.5px solid rgb(230, 230, 230);
}
.res{
    height:80rem;
    padding:30rem 40rem;
    font-size:12rem;
    display:flex;
    justify-content: end;
    align-items: baseline;
}
.price{
    font-size: 15rem;
    font-weight: bold;
}
.price::before{
    content:"￥";
    font-size: 15rem;
    font-weight: bold;
}
</style>