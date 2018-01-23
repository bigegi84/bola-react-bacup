import React from 'react'
import {Link} from "react-router-dom";
class PenulisNav extends React.Component{
  render(){
    console.log("djskaldjkas");
    return(
      <section
        id="menu">
        <section>
          <form
            className="search"
            method="get"
            action="#"
          >
            <input type="text" name="query" placeholder="Search" />
          </form>
        </section>
        <section>
          <ul className="links">
            <li>
              <Link
                to={`/penulis`}>
                <h3>Penulis</h3>
                <p>halaman penulis.</p>
              </Link>
            </li>
          </ul>
        </section>
      </section>
    )
  }
}
export default PenulisNav