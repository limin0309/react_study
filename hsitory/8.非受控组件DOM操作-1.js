import React,{Component} from 'react';
import {render} from 'react-dom';
// 非受控组件 非受控元素 ，值不受状态控制
class Sum extends Component{
    handleChange=(event)=>{
        let a=parseInt(this.refs.a.value||0);
       let b=parseInt(this.refs.b.value||0);
      this.refs.result.value=a+b;
    }
    render(){

        return(

            <div onChange={this.handleChange}>
                <input type="text" ref="a" />+
                <input type="text" ref="b"/>=
                <input type="text" ref="result"/>
            </div>
        )
    }
}
render(<Sum/>,window.app)
