import React,{Component} from "react"
import Style from "./style"
import {Url} from '../../global'
import ArticleList from '../../../components/ArticleList'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r:[],
      value: "",
      password:""
    };
    this.handleClick=this.handleClick.bind(this);
  }
  componentWillMount(){
    fetch(Url+'article', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }})
      .then((response) => response.json())
      .then((r) => {
      r=r.data;
      this.setState({r});
      // alert(r)
      })
      .catch((error) => {
        console.error(error);
      });
  }
  handleClick(){
    this.props.history.push('/author/article/create')
  }
  render() {
    const listArticle = this.state.r.map((obj) =>
      <ArticleList d={obj} />
    );

    return (
      <div className="section section-contact-us text-center"
           style={Style.image}>
        <div className="container">
          <div className="col-lg-12">
            <div className="card">
              <div className="col-lg-12">
                <button
                  className="btn btn-default btn-round"
                  onClick={this.handleClick}
                >
                  Create Article
                </button>
              </div>

              Dashboard
              {listArticle}
            </div>
          </div>
        </div>
      </div>
  );
  }
};