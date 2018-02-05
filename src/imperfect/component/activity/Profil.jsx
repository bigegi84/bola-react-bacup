import React,{Component} from "react"
import TextLabel from '../form/TextLabel'
import Button from "../view/Button";
import ApiHelper from "../../../helper/ApiHelper";
import {Observer} from "mobx-react/custom.module";
import mobxStore from "../../../mobx/mobxStore";
import FileBase64 from "react-file-base64";
import CroppieView from "../view/CroppieView";
const alertify=require('alertify.js');
export default class Profil extends Component {
  constructor(props){
    super(props);
    this.state={
      croppie:""
    }
  }
  componentWillMount(){
    ApiHelper.penulisManusiaSaya(()=>{
      mobxStore.penulisManusiaSayaUbah.nama=mobxStore.penulisManusiaSaya.nama;
      mobxStore.penulisManusiaSayaUbah.email=mobxStore.penulisManusiaSaya.email;
      mobxStore.penulisManusiaSayaUbah.pengguna=mobxStore.penulisManusiaSaya.pengguna;
    })
  }
  render() {
    return (
      <article className="post">
        <Observer>
          {()=>{
            const data=mobxStore.penulisManusiaSaya;
            return(
              <div className="post">
                <div className="12u$ post">
                  <span className="image fit">
                    {data.gambar?(
                      <img
                        src={data.gambar.url}
                        alt=""
                      />
                    ):(<div/>)}
                  </span>
                </div>
                <h3>Ubah Gambar</h3>
                <div className="post">
                  <FileBase64
                    multiple={false}
                    onDone={(file)=>{
                      this.setState({croppie:file.base64})
                    }}
                  />
                  {this.state.croppie ? (
                    <CroppieView
                      width={300}
                      height={300}
                      base64={this.state.croppie}
                      handler={(base64)=>{
                        mobxStore.penulisManusiaSayaTambal.kolom='gambar';
                        mobxStore.penulisManusiaSayaTambal.nilai=base64
                      }}
                    />
                  ):(
                    <div/>
                  )}
                  <button
                    onClick={()=>{
                      if(mobxStore.penulisManusiaSayaTambal.nilai!==''){
                        ApiHelper.penulisManusiaSayaTambal((pesan)=>{
                          mobxStore.croppie='';
                          ApiHelper.penulisManusiaSaya(()=>{});
                          alertify.success(pesan);
                        })
                      }else{
                        alertify.error('Gambar Kosong');
                      }
                    }}
                  >Ubah</button>
                </div>
                <h3>Nama</h3>
                <p>{data.nama}</p>
                <h3>Email</h3>
                <p>{data.email}</p>
                <h3>Nama</h3>
                <p>{data.pengguna}</p>
              </div>
            )
          }}
        </Observer>
        <Observer>
          {()=>{
            const input=mobxStore.penulisManusiaSayaUbah;
            return(
              <div className="post">
                <TextLabel
                  value={input.nama}
                  title="Nama"
                  name="nama"
                  change={(e)=>{
                    const target=e.target;
                    const value=target.value;
                    const name=target.name;
                    mobxStore.penulisManusiaSayaUbah[name]=value;
                  }}
                />
                <TextLabel
                  value={input.email}
                  title="Email"
                  name="email"
                  change={(e)=>{
                    const target=e.target;
                    const value=target.value;
                    const name=target.name;
                    mobxStore.penulisManusiaSayaUbah[name]=value;
                  }}
                />
                <TextLabel
                  value={input.pengguna}
                  title="Pengguna"
                  name="pengguna"
                  change={(e)=>{
                    const target=e.target;
                    const value=target.value;
                    const name=target.name;
                    mobxStore.penulisManusiaSayaUbah[name]=value;
                  }}
                />
                <Button
                  title="kirim"
                  handler={this.kirimClick}/>
              </div>
            )
          }}
        </Observer>
      </article>
    )
  }
};