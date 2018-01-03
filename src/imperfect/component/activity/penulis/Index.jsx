import React,{Component} from "react"
import axios from 'axios'
import {create} from 'apisauce'
import {Url} from '../../../../config'
import ArticleList from '../../list/ArticleList'
import TextLabel from '../../form/TextLabel'
import Button from "../../view/Button";
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      komen:{},
      interval:{}
    };
    this.klikBuatArtikel=this.klikBuatArtikel.bind(this);
    this.komenChange = this.komenChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.kirimClick=this.kirimClick.bind(this);
    this.loadData=this.loadData.bind(this);
  }
  componentWillMount(){
    this.loadData();
  }
  loadData(){
    axios(
      {
        url: Url+'penulis/artikel',
        method: 'GET',
        params: {
          token: localStorage.getItem('token')
        },
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          this.setState({data:r.data});
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  komenChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name);
    console.log(this.state.komen);
    let komen = this.state.komen;
    komen[name]=value;
    this.setState({
      komen
    });
  }
  handleSubmit(){
    fetch(Url+'login', {
      method: 'POST',
      body: JSON.stringify({
        value: this.state.value,
        password: this.state.password
      })
    }).then((response) => response.json())
      .then((r) => {
        this.props.history.push('/author/dashboard');
      })
      .catch((error) => {
        console.error(error);
      });
  }
  klikBuatArtikel(){
    this.props.history.push('/penulis/artikel/buat');
  }
  kirimClick(e){
    const self=this;
    e.preventDefault();
    console.log('ini komen');
    console.log(this.state.komen);
    axios({
      url: Url+'tamu/komen',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        data: JSON.stringify(self.state.komen)
      })
      .then(function (response) {
        let r=response.data;
        console.log(r);
        if(r.success){
          self.loadData();
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
          <p>Arikel yang telah di buat: {this.state.data.length}</p>
          <Button
            title="Buat Artikel"
            handler={this.klikBuatArtikel}
          />
        </article>
        <ArticleList data={this.state.data}/>
      </div>
    )
  }
};