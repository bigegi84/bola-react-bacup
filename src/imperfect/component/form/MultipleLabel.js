import React from 'react'
import Rx from 'rxjs'
import {Typeahead} from 'react-bootstrap-typeahead'
import MultipleList from "../list/MultipleList";
class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:props.data,
      input:{
        add:""
      },
      subject:new Rx.Subject().debounceTime(1000)
    };
    this.inputChange=this.inputChange.bind(this);
    this.addItem=this.addItem.bind(this);
    this.clickAdd=this.clickAdd.bind(this);
  }
  componentDidMount(){
    this.state.subject.subscribe({
      next: (v) => {
        console.log('observerB: ' + v)
      }
    });
  }
  inputChange(event) {
    this.state.subject.next("changed");
    const target = event.target;
    let value =target.value;
    const name = target.name;
    let input=this.state.input;
    input[name]=value;
    this.setState({
      input
    });
  }
  addItem(str){
    const obj={
      nama:str
    };
    let data=this.state.data;
    data.push(obj);
    this.setState({
      data:data,
      input:{
        add:""
      }
    });
    this.props.change(data);
  }
  clickAdd(){
    this.addItem(this.state.input.add)
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.data!==nextProps.data){
      this.setState({
        data:nextProps.data
      });
    }
  }
  render(){
    return(
      <div>
        <h5>{this.props.title}</h5>
        <MultipleList
          name={this.props.name}
          change={this.props.change}
          data={this.state.data}
        />
        <input
          value={this.state.input.add}
          name="add"
          onChange={(e)=>this.inputChange(e)}
          type="text"
        />
        <button
          onClick={this.clickAdd}
        >
          Add
        </button>
        <br/>
      </div>
    )
  }
}
export default Index