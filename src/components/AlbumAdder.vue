<template>
    <el-input v-model="album.name"></el-input>
    <el-input v-model="album.price"></el-input>
    <el-input v-model="album.area"></el-input>
    <el-button @click="add" type="primary">添加</el-button>
</template>
<script lang="ts" setup>
import {ref} from "vue"
import {useStore} from '@/stores/AlbumStore'
import {ElNotification} from 'element-plus'

const album=ref({name:'john',price:23,area:"内地"})

const store=useStore()
function add(){
    store.addAlbum(album.value)
    .then(()=>{
        store.ui.dialogVisible=false
        ElNotification({title:"添加成功了",type:'success'})
        })
    
}
</script>