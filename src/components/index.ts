//components/index.ts
import {defineAsyncComponent} from 'vue'
export const AlbumAdder=
defineAsyncComponent(()=>import("./AlbumAdder.vue"))
export const AlbumUpdator=
defineAsyncComponent(()=>import("./AlbumUpdator.vue"))
export const AlbumManager=
defineAsyncComponent(()=>import("./AlbumManager.vue"))