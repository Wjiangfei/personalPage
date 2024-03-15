<!-- 
    区别于meals中的message组件，此处修改为适应购物袋样式的组件
 -->

<script setup>
import ChangeNumber from '../mealsCom/change-number.vue';
const props=defineProps(["item"]);

</script>

<template>
    <div class="mess">
        <h1>{{ props.item.title }}</h1>
        <!-- <p class="des">{{ props.item.desc }}</p> -->
        <div class="des">
           <div class="price">{{ props.item.price }}</div>
           <ChangeNumber :id="props.item.id"></ChangeNumber>
        </div>
        
        
    </div>
</template>

<style scoped>
.des{
   position:relative;
   top:25rem;
   display: flex;
   justify-content: space-between;
}
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
    margin-top:25rem;
}

</style>