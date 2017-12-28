import React,{Component} from "react"
// import Style from "./style"
import {Url} from '../../global'
import ArticleList from '../../../components/ArticleList'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      r:{},
      value: "",
      password:""
    };
    this.handleClick=this.handleClick.bind(this);
  }
  componentWillMount(){
    fetch(
      Url+'article/'+
      this.props.match.params.slug,
      {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }})
      .then((response) => response.json())
      .then((r) => {
        r=r.data.article;
        this.setState({r,loading:false});
        console.log("ahah");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  handleClick(){
    this.props.history.push('/author/article/create')
  }
  render() {
    if (!this.state.loading) {
      return (
          <div className="container">
            <div
              className="row"
            >
              <div className="col-lg-8">
                <div className="card">
                  <div
                    className="col-lg-12"
                  >
                    <h3>{this.state.r.object.title}</h3>
                    <h6>{this.state.r.person.object.name}</h6>
                    <h6>{this.state.r.object.publish_date}</h6>
                    <img
                      className="rounded col-lg-12"
                      src={this.state.r.object.image}
                    />
                    <p
                      className="text-justify"
                    >{this.state.r.object.content}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  {JSON.stringify(this.state.r)}
                </div>
              </div>
            </div>
          </div>
      );
    }
    return (
      <div>
      </div>
    )
  }
};