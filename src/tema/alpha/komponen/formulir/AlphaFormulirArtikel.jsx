import React,{Component} from "react"
import AlphaBarisKolom from "../tampilan/AlphaBarisKolom";
import AlphaFormulirEditor from "./AlphaFormulirEditor";
import AlphaFormulirLabel from "./AlphaFormulirLabel";
import AlphaFormulirAreateks from "./AlphaFormulirAreateks";
import AlphaFormulirTeks from "./AlphaFormulirTeks";
import AlphaFormulirGambar from "./AlphaFormulirGambar";
import AlphaFormulirOpsi from "./AlphaFormulirOpsi";
class AlphaFormulirArtikel extends Component {
  render() {
    const nilaiJudul=this.props.nilaiJudul;
    const nilaiDeskripsi=this.props.nilaiDeskripsi;
    const nilaiKonten=this.props.nilaiKonten;
    const nilaiMenu=this.props.nilaiMenu;
    const nilaiGambar=this.props.nilaiGambar;
    const perubahanJudul=this.props.perubahanJudul;
    const perubahanDeskripsi=this.props.perubahanDeskripsi;
    const perubahanKonten=this.props.perubahanKonten;
    const perubahanMenu=this.props.perubahanMenu;
    const perubahanGambar=this.props.perubahanGambar;
    return (
      <AlphaBarisKolom
        lebar="12"
      >
        <AlphaFormulirLabel
          label="Judul"
        >
          <AlphaFormulirTeks
            tipe="text"
            perubahan={perubahanJudul}
          >
            {nilaiJudul}
          </AlphaFormulirTeks>
        </AlphaFormulirLabel>
        <AlphaFormulirLabel
          label="Deskripsi"
        >
          <AlphaFormulirAreateks
            perubahan={perubahanDeskripsi}
          >
            {nilaiDeskripsi}
          </AlphaFormulirAreateks>
        </AlphaFormulirLabel>
        <AlphaFormulirLabel
          label="Konten"
        >
          <AlphaFormulirEditor
            perubahan={perubahanKonten}
          >
            {nilaiKonten}
          </AlphaFormulirEditor>
        </AlphaFormulirLabel>
        <AlphaFormulirLabel
          label="Menu"
        >
          <AlphaFormulirOpsi
            perubahan={perubahanMenu}
          >
            {nilaiMenu}
          </AlphaFormulirOpsi>
        </AlphaFormulirLabel>
        <AlphaFormulirLabel
          label="Gambar"
        >
          <AlphaFormulirGambar
            perubahan={perubahanGambar}
          >
            {nilaiGambar}
          </AlphaFormulirGambar>
        </AlphaFormulirLabel>
      </AlphaBarisKolom>
    )
  }
}
export default AlphaFormulirArtikel