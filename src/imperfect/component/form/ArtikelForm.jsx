import * as React from "react";
import TextAreaLabel from "./TextAreaLabel";
import DropDownLabel from "./DropDownLabel";
import TextLabel from "./TextLabel";
import FileBase64 from "react-file-base64";
import CroppieView from "../view/CroppieView";
import GambarKecil from "../view/GambarKecil";

export default class ArtikelForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      croppie:""
    }
  }
  render(){
    const judulNilai=this.props.judulNilai;
    const kontenNilai=this.props.kontenNilai;
    const deskripsiNilai=this.props.deskripsiNilai;
    const gambarNilai=this.props.gambarNilai;
    const menuData=this.props.menuData;
    const change=this.props.change;
    return(
      <div>
        <TextLabel
          value={judulNilai}
          title="Judul"
          name="judul"
          panjang="300"
          change={change}
        />
        <TextAreaLabel
          value={kontenNilai}
          title="Konten"
          name="konten"
          panjang=""
          change={change}
        />
        <TextAreaLabel
          value={deskripsiNilai}
          title="Deskripsi"
          name="deskripsi"
          panjang="300"
          change={change}
        />
        <DropDownLabel
          title="Menu"
          name="id_menu"
          data={menuData}
          change={change}
        />
        <GambarKecil
          src={gambarNilai}
        />
        <FileBase64
          multiple={false}
          onDone={(file)=>{
            this.setState({croppie:file.base64})
          }}
        />
        {this.state.croppie?(
          <CroppieView
            width={600}
            height={257.14}
            base64={this.state.croppie}
            handler={(base64)=>{
            }}
          />
        ):(<div/>)}
        {/*<MultipleLabel*/}
        {/*title="Tag"*/}
        {/*name="id_menu"*/}
        {/*data={this.state.menu}*/}
        {/*change={this.tagChange}*/}
        {/*/>*/}
      </div>
    )
  }
}