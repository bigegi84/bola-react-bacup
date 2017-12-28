import React from "react";
import Topic from './topic';

const Navigation = (props) => (
  <div>
      <nav className="navbar navbar-toggleable-md bg-default fixed-top" color-on-scroll="500">
        <div className="container">
          <div className="navbar-translate">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-bar bar1"/>
              <span className="navbar-toggler-bar bar2"/>
              <span className="navbar-toggler-bar bar3"/>
            </button>
            <a
              className="navbar-brand"
              href="http://demos.creative-tim.com/now-ui-kit/index.html"
              rel="tooltip"
              title=""
              data-placement="bottom"
              data-original-title="Designed by Invision. Coded by Creative Tim">
              <i className="now-ui-icons travel_istanbul"/>
              Bola.com
            </a>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navigation" data-nav-image="./assets/img/blurred-image-1.jpg">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link">
                  <i className="now-ui-icons arrows-1_cloud-download-93"/>
                  <p>Download</p>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./documentation/tutorial-components.html" target="_blank">
                  <i className="now-ui-icons files_paper"/>
                  <p>Components</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link" rel="tooltip"
                  title=""
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  data-original-title="Follow us on Twitter"
                >
                  <i className="fa fa-twitter"/>
                  <p className="hidden-lg-up">Twitter</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  rel="tooltip"
                  title=""
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  data-original-title="Like us on Facebook"
                >
                  <i className="fa fa-facebook-square"/>
                  <p className="hidden-lg-up">Facebook</p>
                </a>
              </li>
              <li className="nav-item">

                <a
                  className="nav-link"
                  rel="tooltip"
                  title=""
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  data-original-title="Follow us on Instagram"
                >
                  <i className="fa fa-instagram"/>
                  <p className="hidden-lg-up">Instagram</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div
      className="section"
    >
      <Topic/>
      {props.children}
    </div>
  </div>
);

export default Navigation;