import * as React from "react";
import TextAreaLabel from "./TextAreaLabel";
import DropDownLabel from "./DropDownLabel";
import TextLabel from "./TextLabel";

export default class ArtikelForm extends React.Component{
  render(){
    const judulNilai=this.props.judulNilai;
    const kontenNilai=this.props.kontenNilai;
    const deskripsiNilai=this.props.deskripsiNilai;
    const menuData=this.props.menuData;
    const change=this.props.change;
    return(
      <div>
        <TextLabel
          value={judulNilai}
          title="Judul"
          name="judul"
          change={change}
        />
        <TextAreaLabel
          value={kontenNilai}
          title="Konten"
          name="konten"
          change={change}
        />
        <TextAreaLabel
          value={deskripsiNilai}
          title="Deskripsi"
          name="deskripsi"
          change={change}
        />
        <DropDownLabel
          title="Menu"
          name="id_menu"
          data={menuData}
          change={change}
        />
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