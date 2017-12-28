import React,{Component} from "react"
import Style from "./style"
import {Url} from '../../global'

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      password:""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(){
    fetch(Url+'login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: this.state.value,
        password: this.state.password
      })
    }).then((response) => response.json())
      .then((r) => {
      this.props.history.push('/author/dashboard');
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="section section-contact-us text-center"
           style={Style.image}>
        <div className="container">
          <div className="col-lg-6">
            <div className="card card-signup">
              <div className="form">
                <div className="header">
                  <h2 className="title">Login</h2>
                  <p className="description">Your project is very important to us.</p>
                </div>
                <div className="content">
                  <div className="input-group form-group-no-border input-lg">
                            <span className="input-group-addon">
                                <i className="now-ui-icons users_circle-08"/>
                            </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="value"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-group form-group-no-border input-lg">
                            <span className="input-group-addon">
                                <i className="now-ui-icons ui-1_email-85"/>
                            </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                <div className="footer">
                  <a
                    className="btn btn-default btn-round"
                    onClick={this.handleSubmit}
                  >Log in</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
  }
};