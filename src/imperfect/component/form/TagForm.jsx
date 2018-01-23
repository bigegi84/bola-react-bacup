import React,{Component} from "react"
import Select from 'react-select';
import 'react-select/dist/react-select.css';
const FLAVOURS = [
  { label: 'Chocolate', value: 'chocolate' },
  { label: 'Vanilla', value: 'vanilla' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Caramel', value: 'caramel' },
  { label: 'Cookies and Cream', value: 'cookiescream' },
  { label: 'Peppermint', value: 'peppermint' },
];

const WHY_WOULD_YOU = [
  { label: 'Chocolate (are you crazy?)', value: 'chocolate', disabled: true },
].concat(FLAVOURS.slice(1));
class TagForm extends React.Component {
  state={
    removeSelected: true,
    disabled: false,
    crazy: false,
    stayOpen: false,
    value: [],
    rtl: false,
  };
  handleSelectChange (value) {
    console.log('You\'ve selected:', value);
    this.setState({ value });
  }
  toggleCheckbox (e) {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  }
  toggleRtl (e) {
    let rtl = e.target.checked;
    this.setState({ rtl });
  }
  render() {
    const { crazy, disabled, stayOpen, value } = this.state;
    const options = crazy ? WHY_WOULD_YOU : FLAVOURS;
    return (
      <Select
        closeOnSelect={!stayOpen}
        disabled={disabled}
        multi
        onChange={this.handleSelectChange.bind(this)}
        options={options}
        placeholder="Select your favourite(s)"
        removeSelected={this.state.removeSelected}
        rtl={this.state.rtl}
        simpleValue
        value={value}
      />
    );
  }
}
export default TagForm