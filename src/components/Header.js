import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
  handleChange = e => {
    this.props.handleChange({ value: e.target.value });
  };
  handlekeyDown = e => {
    if (e.keyCode === 13) {
      // console.log(e.keyCode);
      let newList = this.props.list;
      let newValue = this.props.value;
      newList.push(this.props.value);
      newValue = "";
      // console.log(list);
      this.props.handlekeyDown({
        value: newValue,
        list: newList
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <input
          placeholder="what needs to been done?"
          onChange={this.handleChange}
          onKeyDown={this.handlekeyDown}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    value: state.count.value,
    list: state.count.list
  };
};
const mapDispatchToProps = dispatch => {
  // console.log(dispatch);
  return {
    handleChange: dispatch.count.handleChange,
    handlekeyDown: dispatch.count.handlekeyDown
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
