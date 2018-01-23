import React,{Component} from "react"
import TextLabel from "../../../form/TextLabel";
import Button from "../../../view/Button";
import mobxStore from "../../../../../mobx/mobxStore";
import ApiHelper from "../../../../../helper/ApiHelper";
import AppHistory from '../../../AppHistory'
export default class VariabelForm extends Component {
  render() {
    return (
        <article className="post">
          <TextLabel
            title="Nama"
            name="nama"
            change={(e)=>{
              mobxStore.pengurusVariabelBuat.nama=e.target.value
            }}
          />
          <TextLabel
            title="Nilai"
            name="nilai"
            change={(e)=>{
              mobxStore.pengurusVariabelBuat.nilai=e.target.value;
            }}
          />
          <Button
            title="Buat"
            handler={(e)=>{
              ApiHelper.pengurusBuatVariabel();
              AppHistory.push('/pengurus/variabel')
            }}
          />
        </article>
    )
  }
};