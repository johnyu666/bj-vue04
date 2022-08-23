<template>
  <el-dialog v-model="store.ui.dialogVisible">
    <album-adder></album-adder>
  </el-dialog>
  <el-row>
    <el-col :span="6">
      <router-view></router-view>
    </el-col>
    <el-col :span="18">
      <album-manager></album-manager>
    </el-col>
  </el-row>
  
  <el-drawer v-model="store.ui.drawerVisible">
    <album-updator></album-updator>
  </el-drawer>
  
</template>
<script lang="ts" setup>
import {ref} from "vue"
import {useStore} from '@/stores/AlbumStore'

import {AlbumManager,AlbumAdder,AlbumUpdator} from '@/components'


const store=useStore()
</script>