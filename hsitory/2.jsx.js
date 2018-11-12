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
        children:['hello',{
            type:'span',props:{className:'blue',children:['word']}
        }]
        // children中包含了一个文本节点，还有一个对象节点
    }
};
function render(eleObj,container){
    // 解构出标签的类型和属性对象
  let {type,props}=eleObj; // 解构赋值
    // 创建一个DOM元素
  let ele=document.createElement(type);
  // 循环属性对象
  for(let attr in props){
      if(attr=='children'){
          props[attr].forEach(function(item){
              if(typeof item=='string'){
                  let textNode=document.createTextNode(item); // 创建一个文本节点
                  ele.appendChild(textNode); // 添加到字符串中
              }else{ // 是一个react元素，将ele转成真实的DOM节点，插入到div子属性中
                  render(item,ele);
              }
          })
      }
      else if(attr=='className'){
          {
              ele.setAttribute('class',props[attr])  // 元素 属性对象  对应的值
          }
      }
      else{
              ele.setAttribute(attr,props[attr])  // 元素 属性对象  对应的值
      }
  }
  container.appendChild(ele);
}
// jsx语法
let ele2=<div><span>hello11</span></div>
render(eleObj,document.querySelector('#root'));
