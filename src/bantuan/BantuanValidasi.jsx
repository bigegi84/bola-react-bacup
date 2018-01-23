const alertify=require('alertify.js');
class BantuanValidasi{
  static artikel(artikel,callback){
    if(artikel.judul===''){
      alertify.error('Judul harus di isi.');
      return;
    }
    if(artikel.konten===''){
      alertify.error('Konten harus di isi.');
      return;
    }
    if(artikel.deskripsi===''){
      alertify.error('Deskripsi harus di isi.');
      return;
    }
    // if(artikel.gambar===''){
    //   alertify.error('Gambar harus di isi.');
    //   return;
    // }
    callback()
  }
}
export default BantuanValidasi