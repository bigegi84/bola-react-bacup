import React from 'react'
import AlphaGambarPas from "./AlphaGambarPas";
import AlphaBarisKolom from "./AlphaBarisKolom";
import AlphaTombolSpesial from "./AlphaTombolSpesial";
import AlphaGaris from "./AlphaGaris";
const Croppie=require('croppie');
class AlphaPotongGambar extends React.Component{
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
        height:this.props.tinggiKotak
      },
    });
    vanilla.customClass='image fit';
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
        height:this.props.tinggiKotak
      },
    });
    vanilla.customClass='image fit';
    vanilla.bind({
      url:nextProps.base64,
      orientation: 4
    });
    this.setState({croppie:vanilla})
  }
  render(){
    return(
      <AlphaBarisKolom
        lebar="12"
      >
        <div
          ref='croppie'
        />
        <AlphaTombolSpesial
          diKlik={()=>{
            this.state.croppie.result('base64').then((base64)=>{
              console.log('',base64)
              this.setState({gambar:base64});
              this.props.handler(base64)
            });
          }}
        >
          Potong
        </AlphaTombolSpesial>
        {/*<AlphaGaris/>*/}
        {/*<h5>hasil</h5>*/}
        {/*{this.state.gambar?(*/}
          {/*<AlphaGambarPas*/}
            {/*sumber={this.state.gambar}*/}
          {/*/>*/}
        {/*):(*/}
          {/*<div/>*/}
        {/*)}*/}
      </AlphaBarisKolom>
    )
  }
}
export default AlphaPotongGambar