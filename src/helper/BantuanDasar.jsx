class BantuanDasar{
  static cekMasuk(){
    return localStorage.getItem("token")!=='';
  }
  static keluar(){
    localStorage.setItem('token','');
  }
  static dasarKeberhasilan(pesan){
    window.alertify.success(pesan)
  }
  static dasarKegagalan(kesalahan){
    BantuanDasar.beritahuKegagalanKeCatatan(kesalahan);
    BantuanDasar.beritahuKegagalanKePengguna(kesalahan)
  }
  static beritahuKegagalanKeCatatan(kesalahan){
    console.error(kesalahan)
  }
  static beritahuKegagalanKePengguna(kesalahan){
    window.alertify.error(kesalahan)
  }
}
export default BantuanDasar