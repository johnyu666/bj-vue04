//stores/__tests__/AlbumStore.spec.ts

import {describe,it,expect,beforeAll} from 'vitest'
import {setActivePinia,createPinia} from 'pinia'
import {useStore} from '@/stores/AlbumStore'
describe("测试AlbumStore",()=>{
    let store;
    beforeAll(()=>{
        setActivePinia(createPinia())
        store=useStore();
    });
    it("查询所有的albums",async ()=>{
       let albums= await store.findAll();
       expect(albums.length).gt(0)
    });
})