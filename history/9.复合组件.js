import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// 安装bootstrap引用css文件
// 单向数据流，数据只能从父组件传给子组件
// 复合组件
class Panel extends Component{
    constructor(){
        super();
        this.state={
            color:'black'
        };
    }
    render(){
        return(
            <div className="panel panel-default">
                <button onClick={()=>this.setState({color:'red'})}>红</button>
                <button onClick={()=>this.setState({color:'green'})}>绿</button>
                <PanelHead head={this.props.head} color={this.state.color}/>
                <PanelBody body={this.props.body} color={this.state.color}/>
                <PanelFooter footer={this.props.footer} color={this.state.color}/>
            </div>
        )
    }
}
class PanelHead extends Component{
    render(){
return <div style={{color:this.props.color}} className="panel-heading">{this.props.head}</div>
    }
}
class PanelBody extends Component{
    render(){
return <div style={{color:this.props.color}} className="panel-body">{this.props.body}</div>
    }
}
class PanelFooter extends Component{
    render(){
return <div style={{color:this.props.color}} className="panel-footer">{this.props.footer}</div>
    }
}
render(<Panel head='头' body='体' footer='尾'/>,window.app)
