const alertify=require('alertify.js');
class BantuanDasar{
  static dasarKeberhasilan(pesan){
    alertify.success(pesan)
  }
  static dasarKegagalan(kesalahan){
    BantuanDasar.beritahuKegagalanKeCatatan(kesalahan);
    BantuanDasar.beritahuKegagalanKePengguna(kesalahan)
  }
  static beritahuKegagalanKeCatatan(kesalahan){
    console.error(kesalahan)
  }
  static beritahuKegagalanKePengguna(kesalahan){
    alertify.error(kesalahan)
  }
}
export default BantuanDasar