<template>
    <el-input v-model="store.current.name"></el-input>
    <el-input v-model="store.current.price"></el-input>
    <el-input v-model="store.current.area"></el-input>
    <el-button @click="update" type="primary">更新</el-button>
</template>
<script lang="ts" setup>
import {ref} from "vue"
import {ElNotification} from 'element-plus'
import {useStore} from '@/stores/AlbumStore'
const store=useStore()
function update(){
    store.updateAlbum()
    .then(()=>{
        store.ui.drawerVisible=false
        ElNotification({title:"更新成功了",type:'success'})
    })
}
</script>