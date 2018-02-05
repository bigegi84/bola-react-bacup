import React,{Component} from "react"
import AlphaFormulirLabelTeks from "../../formulir/AlphaFormulirLabelTeks";
import mobxStore from "../../../../../mobx/mobxStore";
import AlphaKotak from "../../tampilan/AlphaKotak";
import AlphaUtama from "../../tampilan/AlphaUtama";
import {Observer} from "mobx-react/custom.module"
import AlphaTombolSpesial from "../../tampilan/AlphaTombolSpesial";
import ApiHelper from "../../../../../helper/ApiHelper";
import AppHistory from "../../../../../imperfect/component/AppHistory";
class AlphaTanuMasuk extends Component {
  componentWillMount(){
    mobxStore.tamuMasuk.nilai=localStorage.getItem("nilai");
    mobxStore.tamuMasuk.sandi=localStorage.getItem("sandi")
  }
  render() {
    return (
      <Observer>
        {()=>{
          return(
            <AlphaUtama>
              <AlphaKotak>
                <AlphaFormulirLabelTeks
                  label='Nilai'
                  tipe="text"
                  nilai={mobxStore.tamuMasuk.nilai}
                  perubahan={(nilai)=>{
                    mobxStore.tamuMasuk.nilai=nilai
                  }}
                />
                <AlphaFormulirLabelTeks
                  label='Sandi'
                  tipe="password"
                  nilai={mobxStore.tamuMasuk.sandi}
                  perubahan={(nilai)=>{
                    mobxStore.tamuMasuk.sandi=nilai
                  }}
                />
                <AlphaTombolSpesial
                  diKlik={()=>{
                    ApiHelper.tamuMasuk(()=>{
                      AppHistory.push('/tamu/artikel/semua/1')
                    });
                  }}
                >
                  Masuk
                </AlphaTombolSpesial>
              </AlphaKotak>
            </AlphaUtama>
          )
        }}
      </Observer>
    )
  }
}
export default AlphaTanuMasuk