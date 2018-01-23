import React,{Component} from "react"
import axios from 'axios'
import {Url} from '../../../../../config'
import TableList from "../../../list/TableList";
import {Link} from "react-router-dom";
import ApiHelper from "../../../../../helper/ApiHelper";
import {Observer} from "mobx-react";
import mobxStore from "../../../../../mobx/mobxStore";
class Index extends Component {
  constructor(props) {
    super(props);
    this.klikHapus=this.klikHapus.bind(this);
  }
  componentWillMount(){
    this.loadData();
  }
  loadData(){
    ApiHelper.tamuMenu();
  }
  klikHapus(id){
    axios(
      {
        url: Url+'pengurus/menu/'+id+'/delete',
        method: 'GET',
        params:{
          'token':localStorage.getItem('token'),
        }
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
          <Observer>
            {()=>{
              return(
                <TableList
                  pk={'id'}
                  klikHapus={(id)=>{
                    ApiHelper.pengurusMenuHapus(id)
                  }}
                  data={mobxStore.menu}
                />
              )
            }}
          </Observer>
        </article>
      </article>
    )
  }
}
export default Index