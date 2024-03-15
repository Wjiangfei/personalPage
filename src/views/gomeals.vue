<script setup lang="ts">
import { useMealStore } from '../store/Meals';
const usemeal=useMealStore();

</script>

<template>
    <div class="home">
        <search style="z-index:0;"></search>
        <Meals style="z-index:0;"></Meals>
        <added v-show="usemeal.ifcheck"></added>
        <pay v-show="usemeal.ifpay" style="z-index:2;"></pay>
        <cartBag></cartBag>
        
        
    </div>
</template>

<style lang="scss" scoped>
.home{
    width:390rem;
    margin:0 auto;
    /* border:1rem rgb(197, 197, 197) solid; */
    position:relative;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    font-size:15px;
}
</style>