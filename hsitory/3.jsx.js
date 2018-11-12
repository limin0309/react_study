import React from 'react';
import ReactDOM from 'react-dom';
let names=['血滴子','','Aes'];
// {} 里放的是JS表达式，表达式是由变量的运行符组合而成
// 1+1 a+b fn(1) 必须返回一个值


// index.js:1452 Warning: Each child in an array or iterator should have a unique "key" prop.
//
// Check the top-level render call using <div>. See https://fb.me/react-warning-keys for more information.
//     in div (at src/index.js:8)
// 需要配一个唯一的key属性 索引
ReactDOM.render(<div>
    {names.map(function(item,index){
        return item.length>0?<span style={{backgroundColor:'red'}} key={index}>{item}</span>:null
        // 还需要注意数据的数据不能是空，否则在elements中也会渲染出空的span
    })}
</div>,document.querySelector('#root'));
