import React,{Component} from "react"
import TextLabel from "../../../form/TextLabel";
import Button from "../../../view/Button";
import mobxStore from "../../../../../mobx/mobxStore";
import ApiHelper from "../../../../../helper/ApiHelper";
import AppHistory from "../../../AppHistory";
export default class VariabelForm extends Component {
  render() {
    return (
        <article className="post">
          <TextLabel
            title="Nama"
            name="nama"
            change={(e)=>{
              mobxStore.pengurusManusiaBuat.nama=e.target.value
            }}
          />
          <TextLabel
            title="Email"
            name="email"
            change={(e)=>{
              mobxStore.pengurusManusiaBuat.email=e.target.value;
            }}
          />
          <TextLabel
            title="Pengguna"
            name="email"
            change={(e)=>{
              mobxStore.pengurusManusiaBuat.pengguna=e.target.value;
            }}
          />
          <TextLabel
            title="Sandi"
            name="email"
            change={(e)=>{
              mobxStore.pengurusManusiaBuat.sandi=e.target.value;
            }}
          />
          <Button
            title="Buat"
            handler={(e)=>{
              ApiHelper.pengurusManusiaBuat();
              AppHistory.push('/pengurus/manusia')
            }}
          />
        </article>
    )
  }
};