import React,{Component} from 'react';
/**
 * 1.给input绑定值改变事件，当值发改变的时候调用对应的监听函数
 * 2.获取到input框中的值，然后调用百度的接口
 * **/
export default class Suggest extends Component{
    constructor(){
        super();
        this.state={
            words:['a','b']
        };
    }
    handleChange=(event)=>{
        console.log(event);
        // let wd=event.target.value;
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input type="text" className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {
                                        this.state.words.map((word,index)=>(
                                            // 小括号和花括号区别：
                                            // 不用写return了直接拿到
                                                <li key={index} className="">{word}</li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
