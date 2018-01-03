import ManusiaJson from "./ManusiaJson";
export default class ArtikelJson{
  constructor(){
    this.id=0;
    this.id_manusia="";
    this.id_menu="";
    this.judul="";
    this.konten="";
    this.deskripsi="";
    this.waktu="";
    this.dilihat="";
    this.manusia=new ManusiaJson()
  }
}
