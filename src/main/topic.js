import React,{Component} from "react"
// import Style from "./style"
import {Url} from './global'

const TopicList = (props) => (
  <li className="nav-item">
    <a
      className="nav-link"
    >
      {props.d.object.name}
    </a>
  </li>
);

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      r:{}
    };
  }
  componentWillMount(){
    fetch(
      Url+'topic',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }})
      .then((response) => response.json())
      .then((r) => {
        r=r.data.topic;
        this.setState({r,loading:false});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    if (!this.state.loading) {
      const list = this.state.r.map((obj) =>
        <TopicList d={obj} />
      );
      return (
        <div
          className="card"
        >
          <ul className="nav">
            {list}
          </ul>
        </div>
      );
    }
    return (
      <div>
      </div>
    )
  }
};

