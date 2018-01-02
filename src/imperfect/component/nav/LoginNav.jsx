import React from 'react'
import {Link} from "react-router-dom";
import PenulisNav from "./PenulisNav";
import Button from "../view/Button";
function MiniPost(props) {
  return (
    <section>
      <div className="mini-posts">
        <article className="mini-post">
          <header>
            <h3>
              {props.children}
            </h3>
          </header>
        </article>
      </div>
    </section>
  );
}
class LoginNav extends React.Component{
  render(){
    if (this.props.isLogin) {
      return (
        <MiniPost>
          <p>Navigasi</p>
          <Button
            title="Keluar"
            handler={this.props.handler}
          />
          <br/>
          <p>Penulis</p>
          <Link
            className="button"
            to={`/penulis/`}
            replace
          >
            Penulis
          </Link>
          <br/>
          <br/>
          <br/>
          <p>Pengurus</p>
          <Link
            className="button"
            to={`/pengurus/menu`}
            replace
          >
            Menu
          </Link>
        </MiniPost>
      );
    }
    return (
      <MiniPost>
      <Link
        className="button"
        to={`/tamu/masuk`}>
        Log In
      </Link>
      </MiniPost>
    );
  }
}
export default LoginNav