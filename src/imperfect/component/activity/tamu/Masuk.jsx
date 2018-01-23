import React,{Component} from "react"
import TextLabel from '../../form/TextLabel'
import Button from "../../view/Button";
import mobxStore from "../../../../mobx/mobxStore";
import ApiHelper from "../../../../helper/ApiHelper";
import hashHistory from "../../AppHistory";
import {Observer} from "mobx-react/custom.module";
export default class Masuk extends Component {
  componentWillMount(){
    mobxStore.tamuMasuk.nilai=localStorage.getItem("nilai");
    mobxStore.tamuMasuk.sandi=localStorage.getItem("sandi")
  }
  render() {
    return (
      <article className="post">
        <Observer>
          {()=>{
            return(
              <div>
                <TextLabel
                  value={mobxStore.tamuMasuk.nilai}
                  title="Email"
                  name="nilai"
                  change={(e)=>{
                    mobxStore.tamuMasuk.nilai=e.target.value
                  }}
                />
                <TextLabel
                  value={mobxStore.tamuMasuk.sandi}
                  title="Sandi"
                  name="sandi"
                  change={(e)=>{
                    mobxStore.tamuMasuk.sandi=e.target.value
                  }}
                />
              </div>
            )
          }}
        </Observer>
        <Button
          title="Log In"
          handler={()=>{
            ApiHelper.tamuMasuk(()=>{
              hashHistory.push('/penulis/artikel/semua/1');
            })
          }}/>
      </article>
    )
  }
};