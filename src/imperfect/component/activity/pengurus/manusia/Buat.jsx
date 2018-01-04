import React,{Component} from "react"
import ManusiaForm from "./ManusiaForm";
export default class Buat extends Component {
  render() {
    return (
      <article className="post">
        <p>Buat Manusia.</p>
        <ManusiaForm/>
      </article>
    )
  }
};