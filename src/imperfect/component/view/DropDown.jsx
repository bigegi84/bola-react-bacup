import React from 'react'
class Index extends React.Component{
  render(){
    const data=this.props.data;
    return(
      <option
        value={data.id}
      >
        {data.nama}
      </option>
    )
  }
}
export default Index