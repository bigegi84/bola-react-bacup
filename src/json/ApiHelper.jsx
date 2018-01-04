import axios from "axios";
import {Url} from "../config";
import mobxStore from "../mobx/mobxStore";
import hashHistory from "../imperfect/component/AppHistory";
function withToken() {
  return {
    params: {
      token: localStorage.getItem('token')
    },
  }
}
class ApiHelper{
  static tamuMasuk(callback){
    axios({
      url: Url+'tamu/masuk',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      data: JSON.stringify(mobxStore.tamuMasuk)
    })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          localStorage.setItem('nilai', mobxStore.tamuMasuk.nilai);
          localStorage.setItem('sandi', mobxStore.tamuMasuk.sandi);
          localStorage.setItem('token', r.data.token);
          callback()
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static tamuArtikelSatu(kolom,nilai){
    axios({
      url: Url+'tamu/artikel/satu',
      method: 'GET',
      params:{
        kolom:kolom,
        nilai:nilai
      }
    })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          mobxStore.tamuArtikelSatu=r.data
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  // penulis
  static penulisArtikel(){
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
  static penulisArtikelSayaSatu(kolom,nilai,callback){
    axios(
      {
        url: Url+'penulis/artikel/satu',
        method: 'GET',
        params: {
          kolom:kolom,
          nilai:nilai,
          token:localStorage.getItem('token')
        },
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          mobxStore.penulisArtikelSayaSatu=r.data;
          callback()
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static penulisArtikelUbah(kolom,nilai,callback){
    axios(
      {
        url: Url+'penulis/artikel/satu/ubah',
        method: 'POST',
        params: {
          kolom:kolom,
          nilai:nilai,
          token:localStorage.getItem('token')
        },
        data: JSON.stringify(mobxStore.penulisArtikelSayaUbah)
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          callback()
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static penulisArtikelHapus(nilai){
    axios(
      {
        url: Url+'penulis/artikel/hapus/'+nilai,
        method: 'GET',
        params: {
          token: localStorage.getItem('token')
        },
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          this.penulisArtikel()
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
  static pengurusManusiaBuat(){
    axios(
      {
        url: Url+'pengurus/manusia',
        method: 'POST',
        params: {
          token: localStorage.getItem('token')
        },
        data: JSON.stringify(mobxStore.pengurusManusiaBuat)
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
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
  static getTamuMenuArtikelPaginasi(slug){
    axios(
      {
        url: Url+'tamu/menu/artikel/paginasi',
        method: 'GET',
        params:{
          slug:slug,
          halaman:10
        }
      })
      .then((response)=>{
        const r=response.data;
        mobxStore.tamuMenuArtikelPaginasi=r;
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
  static getCopyright(){
    axios(
      {
        url:Url+'tamu/variabel/'+'Copyright',
        method: 'GET',
      })
      .then((response) => {
        const r=response.data;
        mobxStore.copyright=r.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
export default ApiHelper