<template>
    <div class="about">
        This is {{$route.params.id}}
        <p>
            <router-link to="/home1">首页1</router-link> | 
            <router-link to="/home2">首页2</router-link>
            <router-view></router-view>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>