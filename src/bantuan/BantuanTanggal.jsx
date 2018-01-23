class BantuanTanggal{
  static waktuYangLalu(waktu){
    const sekarang = new Date();
    const tahunSekarang=sekarang.getFullYear();
    const bulanSekarang=sekarang.getMonth()+1;
    const hariSekarang=sekarang.getDate();
    const jamSekarang=sekarang.getHours()+1;
    const menitSekarang=sekarang.getMinutes()+1;
    const detikSekarang=sekarang.getSeconds()+1;
    const potong = waktu.split(/[-\s:]+/);
    const tahun=parseInt(potong[0]);
    const bulan=parseInt(potong[1]);
    const hari=parseInt(potong[2]);
    const jam=parseInt(potong[3]);
    const menit=parseInt(potong[4]);
    const detik=parseInt(potong[5]);
    if(tahun<tahunSekarang){
      return tahunSekarang-tahun+' tahun yang lalu'
    }else{
      if(bulan<bulanSekarang){
        return bulanSekarang-bulan+' bulan yang lalu'
      }else{
        if(hari<hariSekarang){
          return hariSekarang-hari+' hari yang lalu'
        }else{
          if(jam<jamSekarang){
            return jamSekarang-jam+' jam yang lalu'
          }else{
            if(menit<menitSekarang){
              return menitSekarang-menit+' menit yang lalu'
            }else{
              if(detik<detikSekarang){
                return detikSekarang-detik+' detik yang lalu'
              }else{
                return 'baru sekarang'
              }
            }
          }
        }
      }
    }
  }
}
export default BantuanTanggal