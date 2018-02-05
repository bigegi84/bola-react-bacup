import React from 'react'
import AlphaBarisKolom from "../tampilan/AlphaBarisKolom";
import AlphaBaris from "../tampilan/AlphaBaris";
import AlphaKolom from "../tampilan/AlphaKolom";
import FileBase64 from "react-file-base64";
import AlphaPotongGambar from "../tampilan/AlphaPotongGambar";
import AlphaGambarPas from "../tampilan/AlphaGambarPas";
import AlphaBr from "../tampilan/AlphaBr";
class AlphaFormulirGambar extends React.Component{
  state={
    gambar:'',
    croppie:''
  };
  render(){
    const perubahan=this.props.perubahan;
    const anak=this.props.children;
    return(
      <AlphaBarisKolom
        lebar="12"
      >
        <AlphaBaris>
          <AlphaKolom
            lebar="12"
          >
            {this.state.croppie?(
              <AlphaGambarPas
                sumber={anak}
              />
            ):(
              <h5>Kosonh</h5>
            )}
            <h5>Pilih Gambar</h5>
            <FileBase64
              multiple={false}
              onDone={(file)=>{
                this.setState({croppie:file.base64})
              }}
            />
            <AlphaBr/>
            <AlphaBr/>
            {this.state.croppie ? (
              <AlphaBarisKolom
                lebar="12"
              >
                <AlphaPotongGambar
                  tinggiKotak={400}
                  width={600}
                  height={257.14}
                  base64={this.state.croppie}
                  handler={(base64)=>{
                    this.state.gambar=base64;
                    perubahan(base64)
                  }}
                />
              </AlphaBarisKolom>
            ):(
              <div/>
            )}
          </AlphaKolom>
        </AlphaBaris>
      </AlphaBarisKolom>
    )
  }
}
export default AlphaFormulirGambar