import axios from "axios";
import {Url} from "../config";
import mobxStore from "../mobx/mobxStore";
function withToken() {
  return {
    params: {
      token: localStorage.getItem('token')
    },
  }
}
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
  static tamuMenu(){
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
  //pengurus
  static pengurusMenuHapus(id){
    axios(
      {
        url: Url+'pengurus/menu/'+id+'/delete',
        method: 'GET',
        params:{
          'token':localStorage.getItem('token'),
        }
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          this.tamuMenu()
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static pengurusVariabel(){
    axios(
      {
        url: Url+'pengurus/variabel',
        method: 'GET',
        params: {
          token: localStorage.getItem('token')
        },
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          mobxStore.pengurusVariabel=r.data
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static pengurusManusia(){
    axios(
      {
        url: Url+'pengurus/manusia',
        method: 'GET',
        params: {
          token: localStorage.getItem('token')
        },
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          mobxStore.pengurusManusia=r.data
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static pengurusBuatVariabel(){
    axios(
      {
        url: Url+'pengurus/variabel',
        method: 'POST',
        params: {
          token: localStorage.getItem('token')
        },
        data: JSON.stringify(mobxStore.pengurusVariabelBuat)
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          // this.pengurusVariabel()
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static pengurusVariabelHapus(id){
    axios(
      {
        url: Url+'pengurus/variabel/'+id+'/hapus',
        method: 'GET',
        params:{
          'token':localStorage.getItem('token'),
        }
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          this.pengurusVariabel()
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
        mobxStore.judul=r.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
export default ApiHelper