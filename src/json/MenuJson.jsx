import ArtikelJson from "./ArticleJson";
export default class MenuJson{
  constructor(){
    this.id=0;
    this.nama="";
    this.slug="";
    this.artikel=[new ArtikelJson()]
  }
};
