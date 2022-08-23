//stores/AlbumStore.ts:CRUD
import type { Album } from '@/model'
import { defineStore } from 'pinia'
import axios from 'axios'
const url="http://127.0.0.1:3000/albums/"
// url="http://johnyu.cn:3000/albums/"
export const useStore = defineStore({
    id:"albums",
    state(){
        return {albums:new Array<Album>(),current:<Album>{},
                spotlight:<Album>{},
                ui:{dialogVisible:false,drawerVisible:false}}
    },
    actions:{
       async findAll(){
          let albs=  await axios({url:url,method:"GET"})
          .then(resp=>resp.data);
            this.albums=albs;
          return albs;
        },
        async loadAlbum(id:number|string):Promise<Album>{
            let alb=await axios({url:url+id,method:"GET"})
            .then(resp=>resp.data)
            this.spotlight=alb
            return alb;
        },
        async addAlbum(album:Album){
           let newAlbum= await axios({url,method:"POST",data:album})
            .then(resp=>resp.data)
            this.albums.push(newAlbum)
        },
        async updateAlbum(){
            let updatedAlbum=await axios({url:url+this.current.id,method:"PUT",data:this.current})
            .then(resp=>resp.data)
            let index=this.albums.findIndex(item=>item.id==this.current.id)
            this.albums.splice(index,1,updatedAlbum)
        },
        async deleteAlbum(id:number|string){
           await axios({url:url+id,method:"DELETE"}).then(resp=>resp.data)
           let index=this.albums.findIndex(item=>item.id==id)
           this.albums.splice(index,1)
        }
    }
})
