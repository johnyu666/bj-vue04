<template>
    <el-button @click="() => store.ui.dialogVisible = true" type="primary">添加一个新的专辑+</el-button>
    <el-button @click="nav">回到首页</el-button>
    <el-table :data="store.albums">
        <el-table-column lable="专辑名称">
            <template #default="scope">
                <el-tag type="success">
                    <router-link :to="{name:'albums',params:{id:scope.row.id}}">{{scope.row.name}}</router-link>
                </el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="price" lable="价格"></el-table-column>
        <el-table-column prop="area" lable="地区"></el-table-column>
        <el-table-column label="删除">
            <template #default="scope">
                <el-popconfirm  @confirm="del(scope.row.id)" title="Are you sure to delete this?">
                    <template #reference>
                        <el-button  type="danger">删除</el-button>
                    </template>
                </el-popconfirm>     
            </template>
        </el-table-column>
        <el-table-column label="更新">
            <template #default="scope">
                <el-button @click="select(scope.row)" type="warning">更新</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue"
import { useStore } from '@/stores/AlbumStore'
import type { Album } from "@/model";
import {useRouter} from 'vue-router'
import _ from 'lodash'

const store = useStore()
const router=useRouter()
onMounted(() => {
    store.findAll()
})

function select(album: Album) {
    store.current = _.cloneDeep(album)
    store.ui.drawerVisible = true
}
function del(id: number | string) {
    store.deleteAlbum(id)
}
function nav(){
    router.push({name:'home'})
}
</script>