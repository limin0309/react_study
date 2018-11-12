import React,{Component} from 'react';
import {render} from 'react-dom';
// 非受控组件 非受控元素 ，值不受状态控制
// 使用this.ref.xx  此处就可以直接用this.xx
class Sum extends Component{
    handleChange=(event)=>{
        let a=parseInt(this.a.value||0);
       let b=parseInt(this.b.value||0);
      this.result.value=a+b;
    }
    render(){
        return(
            // ref等于一个函数，表示当函数被挂载到页面中之后，会立即调用
            // 此函数，并传入渲染后的DOM元素
            <div onChange={this.handleChange}>
                <input type="text" ref={ref=>this.a=ref} />+
                <input type="text" ref={ref=>this.b=ref}/>=
                <input type="text" ref={ref=>this.result=ref}/>
            </div>
        )
    }
}
render(<Sum/>,window.app)
