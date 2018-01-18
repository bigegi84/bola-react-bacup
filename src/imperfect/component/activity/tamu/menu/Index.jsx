import React,{Component} from "react"
import ArticleList from '../../../list/ArticleList'
import ApiHelper from "../../../../../json/ApiHelper";
import mobxStore from "../../../../../mobx/mobxStore";
import {Observer} from "mobx-react/custom.module";
import {Link} from "react-router-dom";
class Index extends Component {
  componentWillMount(){
    ApiHelper.getTamuMenuArtikelPaginasi(this.props.match.params.slug,this.props.match.params.page);
  }
  componentWillReceiveProps(nextProps){
    ApiHelper.getTamuMenuArtikelPaginasi(nextProps.match.params.slug,nextProps.match.params.page);
  }
  render() {
    const page=parseInt(this.props.match.params.page);
    return (
      <Observer>
        {()=>{
          const lanjut_hal=page+1;
          let lanjut=true;
          if(page>=mobxStore.tamuMenuArtikelPaginasi.last_page){
            lanjut=false
          }
          let lanjutView=(
            <a className="disabled button big next">
              Next Page
            </a>
          );
          if(lanjut){
            lanjutView=(
              <Link
                className="button big next"
                to={"/tamu/menu/"+this.props.match.params.slug+"/"+lanjut_hal}
                replace
              >
                Next Page
              </Link>
            )
          }
          const sebelum_hal=page-1;
          let sebelum=true;
          if(page===1){
            sebelum=false
          }
          let sebelumView=(
            <a className="disabled button big previous">
              Previous Page
            </a>
          );
          if(sebelum){
            sebelumView=(
              <Link
                className="button big previous"
                to={"/tamu/menu/"+this.props.match.params.slug+"/"+sebelum_hal}
                replace
              >
                Previous Page
              </Link>
            )
          }
          return(
            <div>
              <ArticleList data={mobxStore.tamuMenuArtikelPaginasi.data}/>
              <ul className="actions pagination">
                <li>
                  {sebelumView}
                </li>
                <li>
                  {lanjutView}
                </li>
              </ul>
            </div>
          )
        }}
      </Observer>
    )
  }
}
export default Index