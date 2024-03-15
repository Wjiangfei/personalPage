<script setup lang="ts"></script>

<template>
    <div class="lay">
        <TopNav></TopNav>
        <div class="main">
            <router-view></router-view>
            <Foote></Foote>
        </div>

        
    </div>
</template>

<style scoped>

.main {
    height: 100vh;
    padding-top: var(--top-nav-height);
    color: var(--font-color-light);
    overflow: hidden;
}
foote{
    position:absolute;
    bottom:0;
}

</style>
