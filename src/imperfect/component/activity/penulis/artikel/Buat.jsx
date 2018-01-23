import React,{Component} from "react"
import TextLabel from '../../../form/TextLabel'
import TextAreaLabel from '../../../form/TextAreaLabel'
import Button from "../../../view/Button";
import DropDownLabel from "../../../form/DropDownLabel";
import FileBase64 from "react-file-base64";
import mobxStore from "../../../../../mobx/mobxStore";
import {Observer} from "mobx-react/custom.module";
import ApiHelper from "../../../../../helper/ApiHelper";
import 'croppie/croppie.css'
import CroppieView from "../../../view/CroppieView";
import hashHistory from "../../../AppHistory";
import TagForm from "../../../form/TagForm";
const alertify=require('alertify.js');
const Croppie=require('croppie');
export default class Index extends Component {
  constructor(props){
    super(props)
    this.state={
      croppie:{}
    }
    this.croppie=this.croppie.bind(this)

  }
  componentWillMount(){
    // this.getMenu();
  }
  tagChange(data) {
    console.log("tag change",this.state.tag);
    this.setState({
      tag:data
    });
  }
  croppie(file){
    const el =this.refs.croppie;
    const vanilla=new Croppie(el, {
      viewport: {
        width:600,
        height:257.14
      },
      boundary: {
        width:'auto',
        height:600
      },
    });
    vanilla.customClass='6u$';
    vanilla.bind({
      url:file,
      orientation: 4
    });
    this.setState({croppie:vanilla})
  }
  validasi(callback){
    if(mobxStore.penulisArtikelBuat.judul===''){
      alertify.error('Judul harus di isi.');
      return;
    }
    if(mobxStore.penulisArtikelBuat.konten===''){
      alertify.error('Konten harus di isi.');
      return;
    }
    if(mobxStore.penulisArtikelBuat.deskripsi===''){
      alertify.error('Deskripsi harus di isi.');
      return;
    }
    if(mobxStore.penulisArtikelBuat.gambar===''){
      alertify.error('Gambar harus di isi.');
      return;
    }
    callback()
  }
  render() {
    return (
      <div>
        <article className="post">
          <p>Buat artikel baru.</p>
          <TextLabel
            title="Judul"
            name="judul"
            change={(e)=>{
              mobxStore.penulisArtikelBuat.judul=e.target.value
            }}
          />
          <TextAreaLabel
            title="Konten"
            name="konten"
            change={(e)=>{
              mobxStore.penulisArtikelBuat.konten=e.target.value
            }}
          />
          <TextAreaLabel
            title="Deskripsi"
            name="deskripsi"
            change={(e)=>{
              mobxStore.penulisArtikelBuat.deskripsi=e.target.value
            }}
          />
          <Observer>
            {()=>{
              if(mobxStore.menu.length!==0){
                mobxStore.penulisArtikelBuat.id_menu=mobxStore.menu[0].id;
              }
              return(
                <DropDownLabel
                  title="Menu"
                  name="id_menu"
                  data={mobxStore.menu}
                  change={(e)=>{
                    mobxStore.penulisArtikelBuat.id_menu=parseInt(e.target.value)
                  }}
                />
              )
            }}
          </Observer>
          <FileBase64
            multiple={false}
            onDone={(file)=>{
              mobxStore.croppie=file.base64;
            }}
          />
          <Observer>
            {()=>{
              if(mobxStore.croppie===''){
                return(
                  <div/>
                )
              }
              return(
                <CroppieView
                  width={600}
                  height={257.14}
                  base64={mobxStore.croppie}
                  handler={(base64)=>{
                    mobxStore.penulisArtikelBuat.gambar=base64
                  }}
                />
              )
            }}
          </Observer>
          <TagForm/>
          <Button
            title="Buat Artikel"
            handler={()=>{
              this.validasi(()=>{
                ApiHelper.penulisArtikelBuat(()=>{
                  alertify.success('Buat Berhasil');
                  hashHistory.push('/penulis/artikel/semua/1');
                })
              });
            }}
          />
        </article>
      </div>
    )
  }
};