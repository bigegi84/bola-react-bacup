import React from 'react'
import GambarKecil from "./GambarKecil";
import Kosong from "./Kosong";
const Croppie=require('croppie');
class CroppieView extends React.Component{
  constructor(props){
    super(props);
    this.state={
      croppie:{},
      gambar:''
    };
  }
  componentDidMount(){
    const el=this.refs.croppie;
    const vanilla=new Croppie(el, {
      viewport: {
        width:this.props.width,
        height:this.props.height
      },
      boundary: {
        width:'auto',
        height:400
      },
    });
    vanilla.customClass='6u$';
    vanilla.bind({
      url:this.props.base64,
      orientation: 4
    });
    this.setState({croppie:vanilla})
  }
  componentWillReceiveProps(nextProps){
    const el=this.refs.croppie;
    el.innerHTML="";
    const vanilla=new Croppie(el, {
      viewport: {
        width:nextProps.width,
        height:nextProps.height
      },
      boundary: {
        width:'auto',
        height:400
      },
    });
    vanilla.customClass='6u$';
    vanilla.bind({
      url:nextProps.base64,
      orientation: 4
    });
    this.setState({croppie:vanilla})
  }
  render(){
    return(
      <div>
        <div
          ref='croppie'
        />
        <button
          onClick={()=>{
            this.state.croppie.result('base64').then((base64)=>{
              this.setState({gambar:base64});
              this.props.handler(base64)
            });
          }}
        >
          Potong
        </button>
        <h3>hasil</h3>
        {this.state.gambar?(
          <GambarKecil
            src={this.state.gambar}
          />
        ):(
          <Kosong/>
        )}
      </div>
    )
  }
}
export default CroppieView