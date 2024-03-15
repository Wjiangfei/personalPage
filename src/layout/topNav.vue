<script setup lang="ts">
import SvgIcon from '~virtual/svg-component';
</script>

<template>
    <div class="header">
        <div class="con">
            <div class="logo">
                <img src="../assets/img/logo.png" width="80" height="80" />
            </div>
            <RouterLink to="/pages">Pages</RouterLink>
            <RouterLink to="/blogs">Blogs</RouterLink>
        </div>
        <div class="tit">
            <h1>王江妃的个人网站</h1>
        </div>

        <div class="righttop">
            <router-link to="/home">
                <!-- <SvgIcon name="icon-home-line" style="font-size: 30px;width:50px;height:50px;"></SvgIcon> -->
                <svg xmlns="http://www.w3.org/2000/svg" style="width:50px;height:50px;" viewBox="0 0 24 24" fill="currentColor"><path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z"></path></svg>
            </router-link>
        </div>

        <!-- <h1>小鱼的网</h1> -->
    </div>
</template>

<style lang="scss" scoped>
.header {
    height:var(--top-nav-height);
    background-color: var(--top-nav-color);
    width: 100vw;
    color: var(--font-color-dark);
    overflow: hidden;
    position: fixed;
    top:0;
    left:0;
}

.con {
    width: var(--nav-left);
    height:100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    text-align: center;
    float:left;
    padding-left: var(--logo-distance);
    a {
        flex: auto;
        font-size: 20px;
        font-weight: bold;
        margin: 0 4px 4px 4px;
        padding: 4px;
        background-color: rgb(216, 216, 216);
        // border: rgb(216, 216, 216) 1px solid;
        margin-left: 5px;
        border-radius: 30%;
    }
}
.router-link-active {
    color: white;
}
.logo {

    flex: auto;
    font-size: 20px;
    width: 80px;
    height: 80px;
    align-items: baseline;
}
.tit {
    float: left;
    width: calc(100% - var(--nav-left) * 2);
    text-align: center;
    height:100%;
    overflow: hidden;
}
.righttop {
    float:right;
    width:  var(--nav-left);
    padding-left: var(--logo-distance);
    height: 100%;
    font-size: 40px;
    align-items: center;
    text-align: center;
    display: flex;
    a {
        margin:auto;
    }
}
</style>
