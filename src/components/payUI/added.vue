<script setup>
import {useMealStore} from '../../store/Meals';

import {ref} from 'vue';

const meals=useMealStore();
const ifdia=ref(false);


const deter=()=>{
    meals.toEmpty();
    ifdia.value=false;
}


</script>

<template>
<div>
    <div class="page" @click.self="meals.checkToggle">
        <!-- 已选项目页 -->
        <div class="part" >

            <!-- 页面抬头 -->
            <div class="title">
                <div class="can">餐品详情</div>
                <div class="delAll" @click="ifdia=true">
                    <i class="ri-delete-bin-5-fill"></i>
                    <div>清空购物车</div>
                </div>
            </div>

            <!-- 已选内容 -->
            
            <div class="cont">
                <template v-if="meals.getSum==0">
                    <div class="noresult" >还未添加商品到购物车哦！</div>
                </template>
                <Meal v-for="meal in meals.getChosed" :item="meal" :ifdesc="false">
                    <!-- <message2 :item="meal"></message2> -->
                </Meal>
            </div>
        </div>
    </div>
    <!-- 确认删除对话框 -->
    <dialogue v-show="ifdia" 
    @cancel="ifdia=false" 
    @deter="deter"
    :quest="'确认删除所有商品？'">

    </dialogue>
</div>  
</template>

<style scoped>

.page{
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgb(138, 134, 134,50%);
    z-index:1;
}
.part{
    height:750rem;
    width:100%;
    position:absolute;
    bottom: 0;
    background-color: white;
    border-radius:20rem 20rem 0 0;
}
.title{
    height:45rem;
    position: relative;
}
.can{
    position:absolute;
    bottom:5rem;
    left:20rem;
    font-size: 17rem;
    font-weight: bolder;

}
.delAll{
    position:absolute;
    width:90rem;
    bottom: 5rem;
    right:20rem;
    font-size:14rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:rgb(151, 151, 151);

}
.noresult{
    /* background-color: aqua; */
    height: 60rem;
    width:300rem;
    font-size: 15rem;
    padding:30rem 20rem;
    color:gray;
}
.cont{
    height:700rem;
    overflow: auto;
    padding-bottom: 80rem;
}
</style>