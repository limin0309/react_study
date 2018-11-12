import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
class Person extends Component{
    constructor(){
        super();
        // 为组件增加一个初始的状态 默认值为true
        this.state={
            happy:'true',
            val:''
        }
    }
    // 默认属性对象 当没有传值的时候就用默认的属性对象
    static defaultProps={
        name:'无名'
        }
// 如果定义组件的时候希望传入组件的属性有类型和是否必填的限制
    static propTypes={
        name:PropTypes.string,
        age:PropTypes.number.isRequired
    }
    hanleClick=()=>{
    this.setState({
        happy:!this.state.happy
    })
    }

    handleChange=(event)=>{
        let val=event.target.value;
        this.setState({val})
    }

    render(){
        let heart=this.state.happy?'开心':'难过'
        return (
            <div>
                <p>姓名:{this.props.name}</p>
                <p>心情:{heart}</p>
                <button onClick={this.hanleClick}>变心</button>
                <input type="text" value={this.state.val} onChange={this.handleChange}/>
            </div>
        )
    }
}
render(<Person name="gjyl"/>,window.app)
