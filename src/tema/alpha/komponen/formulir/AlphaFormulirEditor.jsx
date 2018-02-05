import React,{Component} from "react"
import AlphaBarisKolom from "../tampilan/AlphaBarisKolom";
import {Editor} from "@tinymce/tinymce-react/lib/cjs/components/Editor";
class AlphaFormulirEditor extends Component {
  render() {
    const perubahan=this.props.perubahan;
    return (
      <AlphaBarisKolom
        lebar="12"
      >
        <Editor
          apiKey='p0hn4fwwb59cxgcmc8hpbyi32zfeby9h8r70azpmg8uroith'
          initialValue={this.props.children}
          init={{
            mode : "textareas",
            menubar: false,
            // statusbar: false,
            toolbar: false,
            force_p_newlines : false,
            force_br_newlines : true,
            convert_newlines_to_brs : false,
            remove_linebreaks : true,
            forced_root_block : '',
          }}
          onChange={(e)=>{
            perubahan(e.target.getContent())
          }}
        />
      </AlphaBarisKolom>
    )
  }
}
export default AlphaFormulirEditor