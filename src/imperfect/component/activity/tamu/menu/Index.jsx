import { connect } from 'react-redux'
import React,{Component} from "react"
import axios from 'axios'
import {Url} from '../../../../../config'
import ArticleList from '../../../list/ArticleList'
import TextLabel from '../../../form/TextLabel'
import Button from "../../../view/Button";
import MenuJson from "../../../../json/MenuJson";
import ArtikelJson from "../../../../json/ArticleJson";
import {filterDinamis, setDinamis} from "../../../../../redux/actions/index";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      komen:{},
      interval:{}
    };
    this.loadData=this.loadData.bind(this);
  }
  componentWillMount(){
    this.loadData(this.props.match.params.slug);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.slug!==nextProps.match.params.slug) {
      this.loadData(nextProps.match.params.slug);
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state !== nextState;
  // }
  loadData(slug){
    let r;
    axios(
      {
        url: Url+'tamu/menu/'+slug+'/artikel',
        method: 'GET',
      })
      .then((response)=>{
        r=response.data;
        if(r.success){
          // this.props.dispatch(setDinamis("coba",r.data.artikel))
          this.setState({data:r.data.artikel});
          // this.forceUpdate()
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch((error)=>{
        console.log(error);
      });
  }
  render() {
    let a=(<div/>);
    if(this.props.data!==undefined){
      a=(<ArticleList data={this.props.data}/>)
    }
    return (
      <div>
        <ArticleList data={this.state.data}/>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  let props={
    data:{}
  };
  props.data=filterDinamis("coba",state.Dinamis)
  return props
};
// export default connect(
//   mapStateToProps
// )(Index);
export default Index;