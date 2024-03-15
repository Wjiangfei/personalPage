<script setup>
import Meal from '../mealsCom/Meal.vue';
import {useMealStore} from '../../store/Meals';


const meals=useMealStore();


</script>

<template>
    <div class="meals">

        <Meal v-for="meal in meals.findTaget"  :item="meal" :ifdesc="true">
        </Meal>


        <template v-if="meals.findTaget.length==0">
            <div class="noresult" >商品不存在！</div>
        </template>

    </div>
    

    
    
</template>

<style scoped>
.noresult{
    /* background-color: aqua; */
    height: 30rem;
    width:200rem;
    font-size: 12rem;
    padding:10rem 40rem;
    color:gray;
}
.meals{
    height:100vh;
    padding: 50rem 0 60rem 0;
    width:100vw;
    overflow:auto;
}

</style>