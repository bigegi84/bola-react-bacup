import React,{Component} from "react"
import TableList from "../../../list/TableList";
import {Link} from "react-router-dom";
import ApiHelper from "../../../../../json/ApiHelper";
import {Observer} from "mobx-react";
import mobxStore from "../../../../../mobx/mobxStore";
class Index extends Component {
  componentWillMount(){
    this.loadData();
  }
  loadData(){
    ApiHelper.pengurusManusia();
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
                  data={mobxStore.pengurusManusia}
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