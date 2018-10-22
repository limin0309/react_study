import React from 'react';
import ReactDom from 'react-dom';
// 声明了一个React元素
let ele=<h1>hello</h1>
console.log(ele);
// 1、标签类型 属性对象 子元素
// 1.此处写的属性名都要转成驼峰命名法
// 2.有些属性是JS关键字，要换种写法class--className  for-htmlFor
let _ele2=React.createElement('div',{id:1,className:"red"},['hello']);
console.log(_ele2);
// 最终的React元素是这样的
let eleObj={
    type:'div',props:{
        className:'red',
        id:1,
        children:['hello']
    }
};
function render(eleObj,container){
  // let {type,props}=eleObj;
  // let ele=document.createElement(type);
  // for(let attr in props){
  //     if(attr=='children'){
  //
  //     }else{
  //         ele.setAttribute(attr,props[attr])
  //     }
  //     ele.setAttribute(attr,props[attr])
  // }
}
// jsx语法
let ele2=<div><span>hello11</span></div>
render(eleObj,document.querySelector('#root'));
