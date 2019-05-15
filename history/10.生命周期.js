import React, { Component } from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
/*
 * 1.组件的完整生命周期
 * 2.一些代码的编写的顺序
 * */

class Counter extends Component {
  constructor() {
    super();
    this.state = { num: 0 };
  }
  // 组件将要被挂载
  componentWillmount() {
    console.log("1.组件将要被挂载");
  }
  componentDidMount() {
    console.log("3.组件挂载完成");
  }

  handleClick = () => {
    // setState方法是异步的，所以不能在赋值时候立即获取最新的state值
    // 可以在回调函数中获取
    this.setState(
      {
        num: this.state.num + 1
      },
      () => {
        console.log(this.state.num);
      }
    );
  };
  // newProps 新的属性对象
  // newState 新的状态对象
  shouldComponentUpdate(newProps, newState) {
    console.log("4.组件是否要进行更新");
    // 只有在5的倍数时渲染render组件
    if (newState.num % 5 == 0) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUpdate() {
    console.log("5.组件将要更新");
  }

  componentDidUpdate() {
    console.log("6.组件更新完成");
  }

  render() {
    console.log("2.render组件挂载过程");
    return (
      // 需要换行写div的时候需要加上小括号
      <div style={{ border: "1px solid red", padding: 5 }}>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>+</button>
        <SubCounter num={this.state.num} />
      </div>
    );
  }
}

// 子组件
class SubCounter extends Component {
  // 组件将要接受到新的属性对象
  componentWillReceiveProps() {
    console.log("SubCounter组件将要接受到新的属性对象");
  }
  shouldComponentUpdate(newProps, newState) {
    console.log("newProps", newProps);
    // 因为在父组件shouldComponentUpdate中设置了只有5的倍数时才会是true，所以在这里只有
    // 是3和5的倍数时，才会启用true
    if (newProps.num % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return (
      <div style={{ border: "1px solid blue" }}>
        <p>{this.props.num}</p>
      </div>
    );
  }
}
render(<Counter />, window.app);
