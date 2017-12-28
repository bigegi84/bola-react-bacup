import React,{Component} from "react"
import {Link} from "react-router-dom"
// import Style from "./style"
import {Url} from '../global'
import ArticleList from "../../components/ArticleList";
import Article from '../../imperfect/component/single/Article'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r:[],
      value: "",
      password:""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(){
    fetch(Url+'login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: this.state.value,
        password: this.state.password
      })
    }).then((response) => response.json())
      .then((r) => {
        this.props.history.push('/author/dashboard');
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div>
        <Article/>
        <Article/>
        <Article/>
        <Article/>
      </div>
    )
  }
};