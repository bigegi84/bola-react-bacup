import React,{Component} from "react";

class ArticleList extends Component{
  render(){
    return this.props.d.map((obj) =>
      <Article d={obj}/>);
  };
}

const Article = (props) => (
  <div className="row text-left">
    <div
      className="col-lg-4"
    >
      <img
        className="col-lg-12"
        src={props.d.object.image}
      />
    </div>
    <div
      className="col-lg-8"
    >
      <h6>
        <a
          href={"/home/article/"+props.d.object.slug}
        >
          {props.d.object.title}</a></h6>

      <p>{props.d.object.description}</p>
    </div>
  </div>
);

export default ArticleList;