import React,{Component} from "react"
import axios from 'axios'
import {Url} from '../../../../../config'
import ArticleList from '../../../list/ArticleList'
import TextLabel from '../../../form/TextLabel'
import TextAreaLabel from '../../../form/TextAreaLabel'
import Button from "../../../view/Button";
import DropDownLabel from "../../../form/DropDownLabel";
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      menu:[],
      input:{},
      interval:{}
    };
    this.inputChange=this.inputChange.bind(this);
    this.kirimClick=this.kirimClick.bind(this);
    this.loadData=this.loadData.bind(this);
    this.getMenu=this.getMenu.bind(this);
  }
  componentWillMount(){
    this.loadData();
  }
  loadData(){
    this.getMenu()
  }
  getMenu(){
    axios(
      {
        url: Url+'tamu/menu',
        method: 'GET'
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          this.setState({
            menu:r.data,
            input:{
              id_menu:r.data[0].id
            }
          });
          console.log(this.state.input)
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  inputChange(event) {
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
    console.log(this.state.input);
  }
  kirimClick(){
    const self=this;
    axios({
      url: Url+'penulis/artikel',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'token':localStorage.getItem('token'),
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
          <TextLabel
            title="Judul"
            name="judul"
            change={this.inputChange}
          />
          <TextAreaLabel
            title="Konten"
            name="konten"
            change={this.inputChange}
          />
          <TextAreaLabel
            title="Deskripsi"
            name="deskripsi"
            change={this.inputChange}
          />
          <DropDownLabel
            title="Menu"
            name="id_menu"
            data={this.state.menu}
            change={this.inputChange}
          />
          <Button
            title="Buat Artikel"
            handler={this.kirimClick}
          />
        </article>
      </div>
    )
  }
};