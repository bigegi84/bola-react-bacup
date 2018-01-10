import React,{Component} from "react"
import axios from 'axios'
import {Url} from '../../../config'
import ArticleList from '../list/ArticleList'
import TextLabel from '../form/TextLabel'
import Button from "../view/Button";
import ApiHelper from "../../../json/ApiHelper";
import {Observer} from "mobx-react/custom.module";
import mobxStore from "../../../mobx/mobxStore";
import FileBase64 from "react-file-base64";
// import {alertify} from 'alertifyjs'
const alertify=require('alertify.js');
export default class Profil extends Component {
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
                    <img
                      src={data.gambar.url}
                    />
                  </span>
                </div>
                <h3>Ubah Gambar</h3>
                <div className="post">
                  {mobxStore.penulisManusiaSayaUbah.gambar ? (
                    <div className="12u$">
                      <span className="image fit">
                        <img
                          className="post"
                          src={mobxStore.penulisManusiaSayaUbah.gambar}
                        />
                      </span>
                    </div>
                  ):(
                    <div/>
                  )}
                  <FileBase64
                    multiple={false}
                    onDone={(file)=>{
                      mobxStore.penulisManusiaSayaUbah.gambar=file.base64;
                    }}
                  />
                  <button
                    onClick={()=>{
                      if(mobxStore.penulisManusiaSayaUbah.gambar!==''){
                        ApiHelper.penulisManusiaSayaUbah((pesan)=>{
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