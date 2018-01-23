import React,{Component} from "react"
import TableList from "../../../list/TableList";
import {Link} from "react-router-dom";
import ApiHelper from "../../../../../helper/ApiHelper";
import {Observer} from "mobx-react";
import mobxStore from "../../../../../mobx/mobxStore";
class Index extends Component {
  componentWillMount(){
    this.loadData();
  }
  loadData(){
    ApiHelper.pengurusVariabel();
  }
  render() {
    return (
      <article className="post">
        <p>Variabel.</p>
        <Link
          className='button'
          to={'/pengurus/variabel/buat'}
        >Buat Variabel</Link>
        <article className="post">
          <Observer>
            {()=>{
              return(
                <TableList
                  pk={'nama'}
                  klikHapus={(pk)=>{
                    ApiHelper.pengurusVariabelHapus(pk)
                  }}
                  data={mobxStore.pengurusVariabel}
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