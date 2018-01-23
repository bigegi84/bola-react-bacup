import React,{Component} from "react"
import {Observer} from 'mobx-react'
import ArticleList from '../../../list/ArticleList'
import Button from "../../../view/Button";
import mobxStore from "../../../../../mobx/mobxStore";
import ApiHelper from "../../../../../helper/ApiHelper";
import TampilanHelper from "../../../../../helper/TampilanHelper";
import AppHistory from '../../../AppHistory'
class Index extends Component {
  componentWillMount(){
    this.loadData(this.props.match.params.hal)
  }
  componentWillReceiveProps(nextProps){
    if(
      this.props.match.params.hal===nextProps.match.params.hal
    ){

    }else{
      this.loadData(nextProps.match.params.hal);
    }
  }
  loadData(hal){
    ApiHelper.penulisArtikelSayaSemuaPaginasi(3,hal)
  }
  render() {
    return (
      <Observer>
        {()=>{
          const url='/penulis/artikel/semua/';
          const hal=this.props.match.params.hal;
          const halTerakhir=mobxStore.penulisArtikelSayaSemuaPaginasi.last_page;
          const tampilanLanjut=TampilanHelper.ambilTampilanLanjut(url,hal,halTerakhir);
          const tampilanSebelumnya=TampilanHelper.ambilTampilanSebelumnya(url,hal);
          return(
            <div>
              <article className="post">
                <section>
                  <h3>Arikel yang telah di buat: {mobxStore.penulisArtikelSayaSemuaPaginasi.total}</h3>
                  <Button
                    title="Buat Artikel"
                    handler={()=>{
                      AppHistory.push('/penulis/artikel/buat')
                    }}
                  />
                </section>
              </article>
              <ArticleList
                pk={'id'}
                klikUbah={(nilai)=>{
                  AppHistory.push('/penulis/artikel/saya/ubah/'+nilai)
                }}
                klikHapus={(nilai)=>{
                  ApiHelper.penulisArtikelHapus(nilai,()=>{
                    this.loadData()
                  })
                }}
                action={true}
                data={mobxStore.penulisArtikelSayaSemuaPaginasi.data}
              />
              <ul className="actions pagination">
                <li>
                  {tampilanSebelumnya}
                </li>
                <li>
                  {tampilanLanjut}
                </li>
              </ul>
            </div>
          )
        }}
      </Observer>
    )
  }
}
export default Index