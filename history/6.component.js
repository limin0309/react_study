import React from 'react';
import ReactDOM,{render} from 'react-dom';
/**
 *组件的二种定义方式，以及他们之间的区别
 * 1.组件定义的第一种方式是函数，参数是属性对象
 * let Message =(props)=>{
    console.log(props);   // {msg: "hello", id: "5"}
    return <h1>{props.msg}</h1>
}
 render(<Message msg="hello" id="5"/>,window.app);
 * {msg: "hello", id: "5"}
 *
 * 
 * 
 * 
 * 2.组件的首字母必须是大写的
 * 3.组件定义完后可以像React元素一样使用
 *
 * 组件的渲染过程
 * 1.封装props对象
 * 2.调用组件函数，得到返回的React元素   子组件里可以加属性和样式
 * 3.ReactDOM把react元素转成真实的DOM元素并且插入到目标容器内部  传入style样式，props.style就可以拿到相应的样式
 **/

// 注意 此处的Message需要解构

// let str='msg="hello" id="5"'
// let queryString=require('queryString');
// let obj =queryString.parse(str,'','=');
// console.log(obj);// {msg:'hello',id:'5'}



let Message =(props)=>{
    return <h1 style={props.style}>{props.msg}</h1>
}
render(<Message msg="hello" id="5" style={{color:'red'}} hobby={['a,b']}/>,window.app);
