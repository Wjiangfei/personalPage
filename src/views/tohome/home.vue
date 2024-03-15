<script setup lang="ts">

</script>

<template>
    <div class="home">
        <a class="project" href="/snake.html" target="_blank">
            <img src="../../assets/img/snake.png" height="200" width="200">
            <div class="titl">贪吃蛇</div>
        </a>
        <a class="project" href="/number-remember.html" target="_blank">
            <img src="../../assets/img/number.png" height="200" width="200">
            <div class="titl">数字记忆小游戏</div>
        </a>
        <router-link to="/meals">
            <img src="../../assets/img/meals.png" height="400" width="200">
            <div class="titl">手机点单页面</div>
        </router-link>
        <RouterView></RouterView>

    </div>
</template>

<style lang="scss" scoped>
router-view{
    width:200px;
    height:300px;
}
.home{
    padding:80px 80px;
    display: flex;
    justify-content: center;
}

img{
    border-radius: 20px;
}
.project{
    float: left;
    margin:20px;
    // border:rgb(43, 133, 85) 5px solid;
    // border-radius: 20px;
    overflow: hidden;
    // padding: 5px;
}

.titl{
    font-weight: bold;
    color:white;
    font-size:30px;
    line-height: 40px;
    text-align: center;

}
</style>
