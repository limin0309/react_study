import React,{Component} from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// 安装bootstrap引用css文件
// 单向数据流，数据只能从父组件传给子组件
// 复合组件
class Panel extends Component{
    render(){
        return(
            <div className="panel panel-default">
                <PanelHead head={this.props.head}/>
                <PanelBody body={this.props.body}/>
                <PanelFooter footer={this.props.footer}/>
            </div>
        )
    }
}
class PanelHead extends Component{
    render(){
return <div className="panel-heading"></div>
    }
}
class PanelBody extends Component{
    render(){
return <div className="panel-body"></div>
    }
}
class PanelFooter extends Component{
    render(){
return <div className="panel-footer"></div>
    }
}
render(<Panel head='1' body='2' footer='3'/>,window.app)
