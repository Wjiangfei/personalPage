<script setup>
import { useMealStore } from '../../store/Meals';
import { reactive } from 'vue';

const props=defineProps(["id"]);
const mealStore=useMealStore();
// const mou=reactive( mealStore.mount ); 

</script>



<template>
    <div class="change">
        <button @click="mealStore.increse(props.id-1)" class="add">
            <i class="ri-add-line"></i>
        </button>
        <div class="num" v-show="mealStore.mount[props.id-1]">
            {{ mealStore.mount[props.id-1] }}
        </div>
        <button @click="mealStore.decre(props.id-1)" class="del" v-show="mealStore.mount[props.id-1]">
            <i class="ri-subtract-line"></i>
        </button>
    </div>
 
</template>

<style scoped>
.change{
    height:20rem;
    width:70rem;
}
.add,.del{
    float: right;
    height:20rem;
    width:20rem;
    font-weight: bolder;
    border-radius:50%;
    position: relative;
}
.add{
    background-color: rgb(243, 188, 1);
    border:none;
}
.del{
    background-color: white;
    border:1rem black solid;
}
.num{
    float: right;
    font-size: 10rem;
    height:20rem;
    margin:0 8rem;
    line-height: 20rem;
}

</style>