<script setup>
import { useMealStore } from '../../store/Meals';

const meal=useMealStore();


</script>



<template>
    <div class="search">
        <input class="inpsear" type="text" v-model="meal.keyword" name="search" placeholder="请输入关键字">
        <i class="ri-search-line logo" ></i>
    </div>
</template>

<style scoped>
.search{
    width:390rem;
    /* background-color: aqua; */
    height: 50rem;
    position:absolute;
    top:0;
    left:0;
    display: flex;
    /* justify-content: center; */
    border-bottom:rgb(241, 241, 241) 0.5rem solid;
}
.inpsear{
    width:350rem;
    height:35rem;
    border-radius: 15rem;
    border: none;
    background-color: rgb(242, 242, 242);
    margin:auto;
    padding-left:35rem;
    color:gray;
}
.logo{
    position:absolute;
    top:16rem;
    left:30rem;
    font-size: 18rem;
    color:gray;
}
</style>