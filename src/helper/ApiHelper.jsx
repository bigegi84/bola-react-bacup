import axios from "axios";
import {Url} from "../config";
import mobxStore from "../mobx/mobxStore";
import BantuanDasar from "./BantuanDasar";
class ApiHelper{
  static tamuMasuk(callback){
    axios({
      url: Url+'tamu/masuk',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      data:JSON.stringify(mobxStore.tamuMasuk)
    })
      .then((response)=>{
        let r=response.data;
        if(r.sukses){
          localStorage.setItem('nilai', mobxStore.tamuMasuk.nilai);
          localStorage.setItem('sandi', mobxStore.tamuMasuk.sandi);
          localStorage.setItem('token', r.data.token);
          BantuanDasar.dasarKeberhasilan(r.pesan);
          callback()
        }else{
          BantuanDasar.dasarKeberhasilan(r.pesan);
        }
      })
      .catch((error)=>{
        BantuanDasar.dasarKegagalan(error);
      });
  }
  static getTamuArtikelSemuaPaginasi(page,per_hal=10){
    axios(
      {
        url: Url+'tamu/artikel/paginasi',
        method: 'GET',
        params:{
          page:page,
          per_hal:per_hal
        }
      })
      .then((response)=>{
        const r=response.data;
        mobxStore.tamuArtikelPaginasi=r;
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static tamuArtikelSatu(kolom,nilai,pertama=true){
    axios({
      url: Url+'tamu/artikel/satu',
      method: 'GET',
      params:{
        kolom:kolom,
        nilai:nilai,
        pertama:pertama
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
  static tamuArtikelSatuSuka(kolom,nilai,sukses){
    axios({
      url: Url+'tamu/artikel/satu/suka',
      method: 'GET',
      params:{
        kolom:kolom,
        nilai:nilai
      }
    })
      .then((response)=>{
        let r=response.data;
        if(r.sukses){
          BantuanDasar.dasarKeberhasilan(r.pesan);
          sukses()
        }else{
          BantuanDasar.dasarKegagalan(JSON.stringify(r.pesan))
        }
      })
      .catch((error)=>{
      BantuanDasar.dasarKegagalan(error)
      });
  }
  // penulis
  static penulisManusiaSaya(callback){
    axios(
      {
        url: Url+'penulis/manusia/saya',
        method: 'GET',
        params: {
          token: localStorage.getItem('token')
        },
      })
      .then((response)=>{
        let r=response.data;
        if(r.sukses){
          mobxStore.penulisManusiaSaya=r.data;
          callback()
        }else{
          BantuanDasar.dasarKegagalan(r.pesan);
        }
      })
      .catch((error)=>{
        BantuanDasar.dasarKegagalan(error);
      });
  }
  static penulisManusiaSayaTambal(callback){
    axios({
      url: Url+'penulis/manusia/saya/tambal',
      method: 'POST',
      params: {
        token: localStorage.getItem('token')
      },
      data:JSON.stringify(mobxStore.penulisManusiaSayaTambal)
    })
      .then((response)=>{
        let r=response.data;
        if(r.sukses){
          BantuanDasar.dasarKeberhasilan(r.pesan);
          callback(r.pesan)
        }else{
          BantuanDasar.dasarKegagalan(JSON.stringify(r))
        }
    })
      .catch((kesalahan)=>{
      BantuanDasar.dasarKegagalan(kesalahan)
    });
  }
  static penulisManusiaSayaUbah(callback){
    axios(
      {
        url: Url+'penulis/manusia/saya',
        method: 'POST',
        params: {
          token: localStorage.getItem('token')
        },
        data:JSON.stringify(mobxStore.penulisManusiaSayaUbah)
      })
      .then((response)=>{
        let r=response.data;
        if(r.sukses){
          this.penulisManusiaSaya()
          callback(r.pesan)
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
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
  static penulisArtikelSayaSemuaPaginasi(per_hal=10,hal){
    axios(
      {
        url: Url+'penulis/artikel/saya/paginasi',
        method: 'GET',
        params: {
          token: localStorage.getItem('token'),
          page:hal,
          per_hal:per_hal
        },
      })
      .then((response)=>{
        mobxStore.penulisArtikelSayaSemuaPaginasi=response.data;
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static penulisArtikelBuat(callback){
    axios({
      url: Url+'penulis/artikel',
      method: 'POST',
      params:{
        token:localStorage.getItem('token')
      },
      headers: {
        'Accept': 'application/json',
      },
      data: JSON.stringify(mobxStore.penulisArtikelBuat)
    })
      .then((response)=>{
        let r=response.data;
        console.log(r);
        if(r.success){
          mobxStore.penulisArtikelBuat.judul='';
          mobxStore.penulisArtikelBuat.konten='';
          mobxStore.penulisArtikelBuat.deskripsi='';
          mobxStore.penulisArtikelBuat.id_menu=0;
          mobxStore.penulisArtikelBuat.gambar='';
          BantuanDasar.dasarKeberhasilan(r.message);
          callback();
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch(function (error) {
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
          BantuanDasar.dasarKeberhasilan(r.message);
          callback()
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  static penulisArtikelHapus(nilai,callback){
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
        if(r.sukses){
          BantuanDasar.dasarKeberhasilan(r.pesan);
          callback()
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
  static getTamuMenuArtikelPaginasi(slug,page,per_hal=10){
    axios(
      {
        url: Url+'tamu/menu/artikel/paginasi',
        method: 'GET',
        params:{
          page:page,
          slug:slug,
          per_hal:per_hal
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
        url:Url+'tamu/variabel/Judul%20Web',
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
        url:Url+'tamu/variabel/Copyright',
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