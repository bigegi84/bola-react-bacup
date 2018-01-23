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
    ApiHelper.pengurusManusia();
  }
  render() {
    return (
      <article className="post">
        <p>Manusia.</p>
        <Link
          className='button'
          to={'/pengurus/manusia/buat'}
        >Buat Manusia</Link>
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