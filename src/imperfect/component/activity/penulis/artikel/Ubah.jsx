import React,{Component} from "react"
import axios from 'axios'
import {Url} from '../../../../../config'
import ArticleList from '../../../list/ArticleList'
import TextLabel from '../../../form/TextLabel'
import TextAreaLabel from '../../../form/TextAreaLabel'
import Button from "../../../view/Button";
import DropDownLabel from "../../../form/DropDownLabel";
import MultipleLabel from "../../../form/MultipleLabel";
import ArtikelForm from "../../../form/ArtikelForm";
import ApiHelper from "../../../../../json/ApiHelper";
import {Observer} from "mobx-react/custom.module";
import mobxStore from "../../../../../mobx/mobxStore";
import hashHistory from "../../../AppHistory";
export default class Index extends Component {
  componentWillMount(){
    ApiHelper.penulisArtikelSayaSatu('slug',this.props.match.params.slug,()=>{
      mobxStore.penulisArtikelSayaUbah.judul=mobxStore.penulisArtikelSayaSatu.judul;
      mobxStore.penulisArtikelSayaUbah.konten=mobxStore.penulisArtikelSayaSatu.konten;
      mobxStore.penulisArtikelSayaUbah.deskripsi=mobxStore.penulisArtikelSayaSatu.deskripsi;
      mobxStore.penulisArtikelSayaUbah.id_menu=parseInt(mobxStore.penulisArtikelSayaSatu.id_menu)
    })
  }
  inputChange(event) {
    const target=event.target;
    let value=target.type === 'checkbox' ? target.checked : target.value;
    const name=target.name;
    switch (name) {
      case "id_menu":
        value=parseInt(value);
        break;
    }
    mobxStore.penulisArtikelSayaUbah[name]=value;
    console.log(mobxStore.penulisArtikelSayaUbah)
  }
  tagChange(data) {
    console.log("tag change",this.state.tag);
    this.setState({
      tag:data
    });
  }
  kirimClick(){
    ApiHelper
    const self=this;
    axios({
      url: Url+'penulis/artikel',
      method: 'POST',
      params:{
        token:localStorage.getItem('token')
      },
      headers: {
        'Accept': 'application/json',
      },
      data: JSON.stringify(self.state.input)
    })
      .then(function (response) {
        let r=response.data;
        console.log(r);
        if(r.success){
          self.props.history.push('/penulis');
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <article className="post">
          <p>Buat artikel baru.</p>
          <Observer>
            {()=>{
              return(
                <ArtikelForm
                  judulNilai={mobxStore.penulisArtikelSayaUbah.judul}
                  kontenNilai={mobxStore.penulisArtikelSayaUbah.konten}
                  deskripsiNilai={mobxStore.penulisArtikelSayaUbah.deskripsi}
                  menuData={mobxStore.menu}
                  change={(e)=>{
                    this.inputChange(e)
                  }}
                />
              )
            }}
          </Observer>
          <Button
            title="Ubah Artikel"
            handler={()=>{
              ApiHelper.penulisArtikelUbah(
                'slug',
                this.props.match.params.slug,
                ()=>{
                  hashHistory.push('/penulis')
                }
                )
            }}
          />
        </article>
      </div>
    )
  }
};