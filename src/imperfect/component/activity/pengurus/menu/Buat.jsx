import React,{Component} from "react"
import axios from 'axios'
import {Url} from '../../../../../config'
import TextLabel from "../../../form/TextLabel";
import Button from "../../../view/Button";
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      menu:[],
      tag:[],
      input:{},
      interval:{}
    };
    this.inputBerubah=this.inputBerubah.bind(this);
    this.klikKirim=this.klikKirim.bind(this);
  }
  inputBerubah(event) {
    const target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    switch (name) {
      case "id_menu":
        value=parseInt(value);
        break;
    }
    let input=this.state.input;
    input[name]=value;
    this.setState({
      input
    });
  }
  klikKirim(){
    axios({
      url: Url+'pengurus/menu',
      method: 'POST',
      params:{
        'token':localStorage.getItem('token'),
      },
      headers: {
        'Accept': 'application/json',
      },
      data: JSON.stringify(this.state.input)
    })
      .then((response)=>{
        let r=response.data;
        console.log(r);
        if(r.success){
          this.props.history.push('/pengurus/menu');
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
      <article className="post">
        <p>Buat Menu.</p>
        <article className="post">
          <TextLabel
            title="Nama"
            name="nama"
            change={this.inputBerubah}
          />
          <Button
            title="Buat Menu"
            handler={this.klikKirim}
          />
        </article>
      </article>
    )
  }
};