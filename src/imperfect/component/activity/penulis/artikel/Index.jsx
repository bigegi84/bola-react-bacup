import React,{Component} from "react"
import axios from 'axios'
import {Observer,observer} from 'mobx-react'
import {Url} from '../../../../../config'
import ArticleList from '../../../list/ArticleList'
import Button from "../../../view/Button";
import mobxStore from "../../../../../mobx/mobxStore";
import ApiHelper from "../../../../../json/ApiHelper";
import hashHistory from "../../../AppHistory";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      komen:{},
      interval:{}
    };
    this.komenChange = this.komenChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.kirimClick=this.kirimClick.bind(this);
  }
  componentWillMount(){
    this.loadData();
  }
  loadData(){
    ApiHelper.penulisArtikel()
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
          <section>
            <h3>Arikel yang telah di buat: {this.props.store.penulisArtikel.length}</h3>
            <Button
              title="Buat Artikel"
              handler={()=>{
                window.location.href='#/penulis/artikel/buat'
              }}
            />
          </section>
        </article>
        <ArticleList
          pk={'id'}
          klikUbah={(nilai)=>{
            hashHistory.push('/penulis/artikel/saya/ubah/'+nilai)
          }}
          klikHapus={(nilai)=>{
            ApiHelper.penulisArtikelHapus(nilai)
          }}
          action={true}
          data={this.props.store.penulisArtikel}
        />
      </div>
    )
  }
}
const View=observer(Index);
class withMobx extends Component{
  render(){
    return(
      <View
        store={mobxStore}
      />
    )
  }
}
export default withMobx