<!-- 
    购物车组件
    包含购物袋和去结算
-->


<script setup>
import { useMealStore} from '../../store/Meals';

const meals=useMealStore();
</script>


<template>
    <div class="cart">
        <div class="bag" v-show="!meals.ifpay">
            <img @click="meals.checkToggle" class="bagpng" src="../../assets/bag.png" alt="bag">
            <div class="count" v-show="meals.getSum">{{ meals.getSum }}</div>
        </div>
        <!-- 当结算页面时，购物袋不显示，替换为合计字样 -->
        <div class="paynum" v-show="meals.ifpay">合计</div>
        
        <div v-if="meals.priceSum>0" class="sumOfPrice">{{ meals.priceSum }}</div>
        <div v-else="meals.priceSum==0" class="noprice">未选购商品</div>

        <div @click="meals.topay" :class="{ toPay:meals.priceSum > 0, nopay:meals.priceSum==0 }">{{ meals.ifpay?"去支付":"去结算" }}</div>
        
        
    </div>
</template>

<style scoped>
.paynum{
    font-size:15rem;
    color:rgb(226, 226, 226);
    position:absolute;
    bottom:10rem;
    left:30rem;
}
.cart{
    position:fixed;
    bottom:15rem;
    left:0;
    right:0;
    margin:0 auto;
    height:50rem;
    width:350rem;
    background-color: rgb(58,58,58);
    border-radius: 30rem;
    z-index:3;
}

.sumOfPrice::before{
    content:"￥";
    font-size: 15rem;
}
.sumOfPrice{
    
    height: 20rem;
    width:20rem;
    /* background-color: aqua; */
    color: white;
    font-size: 20rem;
    font-weight: bolder;
}
.noprice,.sumOfPrice{
    position: absolute;    
    left:60rem;
    top:12rem;
}
.noprice{
    font-size:20rem;
    color:rgb(161, 161, 161);
    font-weight: bold;
    

}
.bagpng{
    max-width: 100%;
    
}
.bag{
    width:45rem;
    position: absolute;
    left:0rem;
    top:-5rem;
}
.count{
    position:absolute;
    width:22rem;
    height:22rem;
    background-color: rgb(205,13,11);
    right:-10rem;
    top:0rem;
    border-radius: 11rem;

    color:white;
    font-size: 12rem;
    display: flex;
    justify-content: center;
    align-items:center;
}
.toPay,.nopay{
    position:absolute;
    height:50rem;
    width:110rem;
    right:-1rem;
    top:0;
    border-radius: 30rem;
    font-size: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}
.toPay{
    background-color: rgb(250,187,2);
    color:black;
}
.nopay{
    background-color: rgb(107,107,107);
    color:rgb(161, 161, 161);

}

</style>