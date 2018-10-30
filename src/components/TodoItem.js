import React from "react";
import { connect } from "react-redux";
class TodoItem extends React.Component {
  handleMouseover = () => {};
  handleDeleteItem = index => {
    let newList = this.props.list;
    newList.splice(index, 1);
    this.props.handleDeleteItem({ list: newList });
  };
  render() {
    console.log(this.props.list);
    return (
      <ul>
        {this.props.list.map((item, index) => {
          return (
            <li
              onMouseOver={this.handleMouseover}
              key={index}
              style={{ listStyle: "none" }}
            >
              <input type="checkbox" />
              <label>{item}</label>
              <button onClick={this.handleDeleteItem.bind(this, index)}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  // console.log(state.count.list);
  return {
    list: state.count.list
  };
};
const mapDispatchToProps = dispatch => {
  // console.log(dispatch);
  return {
    handleChange: dispatch.count.handleChange,
    handlekeyDown: dispatch.count.handlekeyDown,
    handleDeleteItem: dispatch.count.handleDeleteItem
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
