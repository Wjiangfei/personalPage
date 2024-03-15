<!-- 
    商品详情页，包含品名、价格、描述、数量更改按钮
 -->

<script setup>
import ChangeNumber from './change-number.vue';
const props=defineProps(["item","ifdesc"]);
console.log(props,"message");

</script>

<template>
    <div class="mess">
        <h1>{{ props.item.title }}</h1>
        <p v-show="ifdesc" class="des">{{ props.item.desc }}</p>
        <!-- 价格和数量 -->
        <div class="pricetag">
            <div class="price">{{ props.item.price }}</div>
            <ChangeNumber :id="props.item.id"></ChangeNumber>
         </div>
        
    </div>
</template>

<style scoped>

.price{
     height:20rem;
     width:50rem;
     font-weight:bold;
     font-size:18rem;
}
 
.price::before{
   content:"￥";
    font-size: 13rem;
}

.mess{
    float: left;
    width:226rem;
    height:130rem;
    margin:10rem 5rem 0 0;
    padding:0 5rem 15rem 0;
}
h1{
    font-size:17rem;
    margin:3rem 0;
}
.des{
    color:gray;
    font-size:12rem;
}
.pricetag{
    position:relative;
    top:25rem;
    display: flex;
    justify-content: space-between;
 }

</style>