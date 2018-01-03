import axios from "axios";
import {Url} from "../config";
import mobxStore from "../mobx/mobxStore";

class ApiHelper{
  static getPenulisArtikel(){
    axios(
      {
        url: Url+'penulis/artikel',
        method: 'GET',
        params: {
          token: localStorage.getItem('token')
        },
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          mobxStore.penulisArtikel=r.data;
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static getMenu(){
    axios(
      {
        url: Url+'tamu/menu',
        method: 'GET'
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          mobxStore.menu=r.data
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static getTamuMenuArtikel(slug){
    axios(
      {
        url: Url+'tamu/menu/'+slug+'/artikel',
        method: 'GET',
      })
      .then((response)=>{
        const r=response.data;
        if(r.success){
          mobxStore.tamuMenuArtikel=r.data.artikel;
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static getJudul(){
    axios(
      {
        url:Url+'tamu/variabel/'+'Judul%20Web',
        method: 'GET',
      })
      .then((response) => {
        const r=response.data;
        mobxStore.judul=r;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
export default ApiHelper