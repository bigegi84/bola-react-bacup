import React,{Component} from "react"
import axios from 'axios'
import {Url} from '../../../../../config'
import TableList from "../../../list/TableList";
import {Link} from "react-router-dom";
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
    this.loadData=this.loadData.bind(this);
    this.klikHapus=this.klikHapus.bind(this);
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
          });
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  klikHapus(id){
    axios(
      {
        url: Url+'pengurus/menu/'+id,
        method: 'DELETE',
        params:{
          'token':localStorage.getItem('token'),
        },
        headers: {
          'Accept': 'application/json',
        },
      })
      .then((response)=>{
        let r=response.data;
        if(r.success){
          this.loadData();
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  render() {
    return (
      <article className="post">
        <p>Menu.</p>
        <Link
          className='button'
          to={'/pengurus/menu/buat'}
        >Buat Menu</Link>
        <article className="post">
          <TableList
            pk={'id'}
            klikHapus={this.klikHapus}
            data={this.state.menu}
          />
        </article>
      </article>
    )
  }
};