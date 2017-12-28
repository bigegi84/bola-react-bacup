import React,{Component} from "react"
import axios from 'axios'
import {Url} from '../../../../config'
// import ArticleList from '../list/ArticleList'
import TextLabel from '../../form/TextLabel'
import Button from "../../view/Button";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      input:{
        nilai:localStorage.getItem("nilai"),
        sandi:localStorage.getItem("sandi"),
      },
      interval:{}
    };
    this.inputChange = this.inputChange.bind(this);
    this.kirimClick=this.kirimClick.bind(this);
    this.loadData=this.loadData.bind(this);
  }
  componentWillMount(){
  }
  componentWillUnmount() {
  }
  loadData(){
  }
  inputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(this.state.input);
    let komen=this.state.input;
    komen[name]=value;
    this.setState({
      komen
    });
  }
  kirimClick(){
    const self=this;
    axios({
      url: Url+'tamu/masuk',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      data: JSON.stringify(self.state.input)
    })
      .then(function (response) {
        let r=response.data;
        console.log(r);
        if(r.success){
          localStorage.setItem('nilai', self.state.input.nilai);
          localStorage.setItem('sandi', self.state.input.sandi);
          localStorage.setItem('token', r.data.token);
          self.props.history.push('/penulis');
        }else{
          alert(JSON.stringify(r))
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <article className="post">
          <TextLabel
            value={this.state.input.nilai}
            title="Email"
            name="nilai"
            change={this.inputChange}
          />
          <TextLabel
            value={this.state.input.sandi}
            title="Sandi"
            name="sandi"
            change={this.inputChange}
          />
          <Button
            title="Log In"
            handler={this.kirimClick}/>
        </article>
      </div>
    )
  }
};