import React,{Component} from "react"
import Style from "./style"
import {Url} from '../../../global'
import FileBase64 from 'react-file-base64';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      d: {},
      password:"",
      files:[]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getFiles(files){
    let d=this.state.d;
    d.image=files.base64;
    this.setState({ files: files,d })
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let d=this.state.d;
    d[name]=value;
    console.log(this.state.d);
    this.setState({d});
  }
  handleSubmit(){
    fetch(Url+'article', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.d)
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
          <div className="col-lg-12">
            <div className="card">
              <div className="form">
                <div className="header">
                  <h2 className="title">Login</h2>
                  <p className="description">Your project is very important to us.</p>
                </div>
                <div className="content">
                  <h4>Publish date</h4>
                  <div className="input-group form-group-no-border input-lg">
                    <input
                      type="text"
                      className="form-control date-picker"
                      placeholder="Publish date"
                      name="publish_datetime"
                      onChange={this.handleInputChange}
                      readOnly
                    />
                  </div>
                  <h4>Title</h4>
                  <div className="input-group form-group-no-border input-lg">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="title"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <h4>Subtitle</h4>
                  <div className="input-group form-group-no-border input-lg">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="subtitle"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <h4>Description</h4>
                  <div className="input-group form-group-no-border input-lg">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="description"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <h4>Image</h4>
                  <div className="input-group form-group-no-border input-lg">
                    <FileBase64
                      className="form-control"
                      multiple={ false }
                      onDone={ this.getFiles.bind(this) } />
                    <img
                      src={this.state.files.base64}
                    />
                  </div>
                  <h4>Content</h4>
                  <div className="input-group form-group-no-border input-lg">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      name="content"
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