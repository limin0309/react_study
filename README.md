课件地址：201703_react
1.react安装
create-react-app是你开始构建一个全新单页应用的最好方式
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start
2.React初体验    jsx
  1.此处写的属性名都要转成驼峰命名法
  2.有些属性是JS关键字，要换种写法class--className  for-htmlFor

提交代码：
git add -A
git commit -m "init"
git push -u origin master

jsx --> babel编译+React.js构造-->  javascript对象结构 --> ReactDom.render --> Dom元素 --> 插入页面


对children和className特殊处理    // children中包含了一个文本节点，还有一个对象节点
代码：
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
3. 当出现警告需要配一个唯一性key时，可以用index配一个唯一的索引
Each child in an array or iterator should have a unique "key" prop.

ReactDOM.render(<div>
    {names.map(function(item,index){
        return <div key={index}>{item}</div>
    })}

4.react
// React是由React元素
// 1.首字母小写，凡是首字母小写的都会被认为是React元素
// Warning: The tag <didv> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
//     in didv (at src/index.js:6)
// 说明 不是正常的属性是不行的  <div cls="asdaw"></div> 此时cls就会报警告

4.react原理 对react渲染后的解构进行讲解
/**
 * 1.React是一个用户界面的库
 * 2.React元素 JSX元素 其实就是一个用js来描述界面的对象
 * <div><span>hello</span>/div>
 **/
 ReactDOM.render(<div><span>hello</span></div>,document.querySelector('#root'));
转成
 React.createElement('div',null,[React.createElement('span',null,['hello'])],document.querySelector('#root'))
结构为：
{
    type:'div',
        props:{
        children:[
            type:'span',
        children:[
            'hello'
    ]
        ]
}
}


---------------------

 *组件的二种定义方式，以及他们之间的区别
 * 1.组件定义的第一种方式是函数，参数是属性对象
 * let Message =(props)=>{
    console.log(props);   // {msg: "hello", id: "5"}
    return <h1>{props.msg}</h1>
}
 render(<Message msg="hello" id="5"/>,window.app);
 * {msg: "hello", id: "5"}
 *
 * 2.组件的首字母必须是大写的
 * 3.组件定义完后可以像React元素一样使用
 *
 * 组件的渲染过程
 * 1.封装props对象
 * 2.调用组件函数，得到返回的React元素   子组件里可以加属性和样式
 * 3.ReactDOM把react元素转成真实的DOM元素并且插入到目标容器内部  传入style样式，props.style就可以拿到相应的样式
// 注意 此处的Message需要解构
let Message =(props)=>{
    return <h1 style={props.style}>{props.msg}</h1>
}
render(<Message msg="hello" id="5" style={{color:'red'}} hobby={['a,b']}/>,window.app);


5.
// 计时器
import React,{Component} from 'react';
import {render} from 'react-dom';
//  计时器 每一秒变一次
// 函数方式声明的组件是静态的，是不能动的

// 不能让手动去波动
// let Clock=()=>{
//     return <h1>{new Date().toLocaleString()}</h1>
// }
// setInterval(function(){
//     render(<Clock/>,window.app)
// },1000)

// 通过类来声明组件  类需要继承自Component
class Clock extends Component{
    constructor(){
        super();
        // 自定义组件状态对象
        // 状态可以用来存放组件内部一些变化的值。状态只能由内部初始化，内部改变
        this.state={time:new Date().toLocaleString()}
    }
    // 生命周期函数 组件挂载完成
    componentDidMount(){
        // 每隔一秒会重新修改状态，当调用setState之后，状态会更新，还会再次调用render方法进行重新渲染
        window.setInterval(()=>{
            this.setState({time:new Date().toLocaleString()})
        },1000)
    }
    // render 方法指的是该组件将要如何渲染，一定要返回一个react元素，而且
    // 只能返回一个React元素
render(){
return <h1>{this.state.time}</h1>
}
}
render(<Clock/>,window.app)


// 两种方式： 1.函数式  2.组建类 （推荐组件类）



--------------------------------------
6.
