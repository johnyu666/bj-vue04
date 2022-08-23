<!-- //views/Spotlight.vue -->
<template>
    <h2>专辑:{{$route.params.id}}--{{store.spotlight.name}}</h2>
    <img :src="store.spotlight.img" alt="">
</template>
<script lang="ts" setup>
import {ref,watch} from "vue"
import {useRoute} from 'vue-router'
import {useStore} from '@/stores/AlbumStore'
const store=useStore()
const route=useRoute()
watch(()=>route.params.id,(id)=>{
    store.loadAlbum(id)
},{immediate:true})
</script>
<style scoped>
    img{
        width: 300px;
        border-radius: 150px;
    }
</style>
