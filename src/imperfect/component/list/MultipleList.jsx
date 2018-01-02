import React from 'react'
import Multiple from "../view/Multiple";
class Index extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:props.data,
    };
  }
  deleteItem(index){
    let data=this.state.data;
    data.splice(index,1);
    this.setState({
      data:data
    });
    this.props.change(data);
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.data!==nextProps.data){
      this.setState({
        data:nextProps.data
      });
    }
  }
  render(){
    const list=this.state.data.map((item, index) => {
      return (
        <Multiple
          data={item}
          key={index}
          index={index}
          delete={this.deleteItem.bind(this)}
        />
      )
    });
    return(
      <ul
        name={this.props.name}
      >
        {list}
      </ul>
    )
  }
}
export default Index