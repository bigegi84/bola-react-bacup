import React from "react";
import Header from "./Header"
import {Link} from "react-router-dom";
import {Url} from "../../config";
import PenulisNav from "./nav/PenulisNav";
import {connect} from "react-redux";
import {getLocalStorage} from "../../redux/actions/index";
import Button from "./view/Button";
import LoginNav from "./nav/LoginNav";
import SingletonDefaultExportInstance from "../../singleton/SingletonDefaultExportInstance";
import Singleton from "../../singleton/Singleton";
class ImperfectNav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pengurusNav:localStorage.getItem("token")!=="",
      masukNav:localStorage.getItem("token")==="",
      deskripsi:{
      }
    };
    this.loadData=this.loadData.bind(this);
    this.getDeskripsi=this.getDeskripsi.bind(this);
    this.update=this.update.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(this.props!==nextProps){
      this.setState({
        pengurusNav:localStorage.getItem("token")!=="",
        masukNav:localStorage.getItem("token")==="",
      })
    }
  }
  handleClick = () => {
    localStorage.setItem("token","");
    this.setState({
      pengurusNav:localStorage.getItem("token")!=="",
      masukNav:localStorage.getItem("token")==="",
    });
    window.location.href = "#/tamu/masuk";
  };
  update() {
  }
  componentDidMount(){
    this.loadData()
  }
  loadData(){
    this.getDeskripsi()
  }
  getDeskripsi(){
    fetch(Url+'tamu/variabel/'+'Deskripsi%20Web',
      {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((r) => {
        r=r.data;
        this.setState({deskripsi:r});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render(){
    return(
      <div id="wrapper">
        <Header/>
        <div id="main">
          {this.props.children}
        </div>
        <section id="sidebar">
          <section id="intro">
            <header>
              <LoginNav
                handler={this.handleClick}
                isLogin={localStorage.getItem("token")!==""}
              />
              <h2
              onClick={this.handleClick}
              >Hello Everyone</h2>
              <p>{this.state.deskripsi.nilai}</p>
            </header>
          </section>
          {/*<section>*/}
          {/*<div className="mini-posts">*/}

          {/*<article className="mini-post">*/}
          {/*<header>*/}
          {/*<h3><a href="#">Vitae sed condimentum</a></h3>*/}
          {/*<time className="published" datetime="2015-10-20">October 20, 2015</time>*/}
          {/*<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>*/}
          {/*</header>*/}
          {/*<a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>*/}
          {/*</article>*/}

          {/*<article className="mini-post">*/}
          {/*<header>*/}
          {/*<h3><a href="#">Rutrum neque accumsan</a></h3>*/}
          {/*<time className="published" datetime="2015-10-19">October 19, 2015</time>*/}
          {/*<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>*/}
          {/*</header>*/}
          {/*<a href="#" className="image"><img src="images/pic05.jpg" alt="" /></a>*/}
          {/*</article>*/}


          {/*<article className="mini-post">*/}
          {/*<header>*/}
          {/*<h3><a href="#">Odio congue mattis</a></h3>*/}
          {/*<time className="published" datetime="2015-10-18">October 18, 2015</time>*/}
          {/*<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>*/}
          {/*</header>*/}
          {/*<a href="#" className="image"><img src="images/pic06.jpg" alt="" /></a>*/}
          {/*</article>*/}


          {/*<article className="mini-post">*/}
          {/*<header>*/}
          {/*<h3><a href="#">Enim nisl veroeros</a></h3>*/}
          {/*<time className="published" datetime="2015-10-17">October 17, 2015</time>*/}
          {/*<a href="#" className="author"><img src="images/avatar.jpg" alt="" /></a>*/}
          {/*</header>*/}
          {/*<a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>*/}
          {/*</article>*/}

          {/*</div>*/}
          {/*</section>*/}
          {/*<section>*/}
          {/*<ul className="posts">*/}
          {/*<li>*/}
          {/*<article>*/}
          {/*<header>*/}
          {/*<h3><a href="#">Lorem ipsum fermentum ut nisl vitae</a></h3>*/}
          {/*<time className="published" datetime="2015-10-20">October 20, 2015</time>*/}
          {/*</header>*/}
          {/*<a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>*/}
          {/*</article>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*<article>*/}
          {/*<header>*/}
          {/*<h3><a href="#">Convallis maximus nisl mattis nunc id lorem</a></h3>*/}
          {/*<time className="published" datetime="2015-10-15">October 15, 2015</time>*/}
          {/*</header>*/}
          {/*<a href="#" className="image"><img src="images/pic09.jpg" alt="" /></a>*/}
          {/*</article>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*<article>*/}
          {/*<header>*/}
          {/*<h3><a href="#">Euismod amet placerat vivamus porttitor</a></h3>*/}
          {/*<time className="published" datetime="2015-10-10">October 10, 2015</time>*/}
          {/*</header>*/}
          {/*<a href="#" className="image"><img src="images/pic10.jpg" alt="" /></a>*/}
          {/*</article>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*<article>*/}
          {/*<header>*/}
          {/*<h3><a href="#">Magna enim accumsan tortor cursus ultricies</a></h3>*/}
          {/*<time className="published" datetime="2015-10-08">October 8, 2015</time>*/}
          {/*</header>*/}
          {/*<a href="#" className="image"><img src="images/pic11.jpg" alt="" /></a>*/}
          {/*</article>*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*<article>*/}
          {/*<header>*/}
          {/*<h3><a href="#">Congue ullam corper lorem ipsum dolor</a></h3>*/}
          {/*<time className="published" datetime="2015-10-06">October 7, 2015</time>*/}
          {/*</header>*/}
          {/*<a href="#" className="image"><img src="images/pic12.jpg" alt="" /></a>*/}
          {/*</article>*/}
          {/*</li>*/}
          {/*</ul>*/}
          {/*</section>*/}
          {/*<section className="blurb">*/}
          {/*<h2>About</h2>*/}
          {/*<p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at phasellus sed ultricies.</p>*/}
          {/*<ul className="actions">*/}
          {/*<li><a href="#" className="button">Learn More</a></li>*/}
          {/*</ul>*/}
          {/*</section>*/}
          <section id="footer">
            <ul className="icons">
              <li><a href="#" className="fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="fa-rss"><span className="label">RSS</span></a></li>
              <li><a href="#" className="fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <p className="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>. Images: <a href="http://unsplash.com">Unsplash</a>.</p>
          </section>

        </section>
      </div>
    )
  }
}
const mapStateToProps=(state,ownProps)=>({
  token: getLocalStorage("token")
});
// export default connect(
//   mapStateToProps
// )(ImperfectNav);
export default ImperfectNav;