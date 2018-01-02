import React,{Component} from "react"
import axios from 'axios'
import {Url} from '../../../../../config'
import TableList from "../../../list/TableList";
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
  render() {
    return (
      <article className="post">
        <p>Menu.</p>
        <button>buat Menu</button>
        <article className="post">
          <TableList
            data={this.state.menu}
          />
        </article>
      </article>
    )
  }
};