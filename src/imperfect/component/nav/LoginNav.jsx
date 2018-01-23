import React from 'react'
import {Link} from "react-router-dom";
import PenulisNav from "./PenulisNav";
import Button from "../view/Button";
import DaftarVertikal from "../list/DaftarVertikal";
import Panel from "../view/Panel";
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
        <MiniPost
          id="menu"
        >
          <Panel>
            <p>Pengaturan</p>
            <DaftarVertikal>
              <li>
                <Link
                  className="button"
                  to={`/penulis/profil`}
                  replace
                >
                  Profil
                </Link>
              </li>
              <li>
                <Button
                  title="Keluar"
                  handler={this.props.handler}
                />
              </li>
            </DaftarVertikal>
          </Panel>
          <Panel>
            <p>Penulis</p>
            <DaftarVertikal>
              <li>
                <Link
                  className="button"
                  to={`/penulis/artikel/semua/1`}
                  replace
                >
                  Artikel
                </Link>
              </li>
            </DaftarVertikal>
          </Panel>
          <Panel>
            <p>Pengurus</p>
            <DaftarVertikal>
              <li>
                <Link
                  className="button"
                  to={`/pengurus/menu`}
                  replace
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  className="button"
                  to={`/pengurus/variabel`}
                  replace
                >
                  Variabel
                </Link>
              </li>
              <li>
                <Link
                  className="button"
                  to={`/pengurus/manusia`}
                  replace
                >
                  Manusia
                </Link>
              </li>
            </DaftarVertikal>
          </Panel>
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