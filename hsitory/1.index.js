import React from 'react';
import ReactDom from 'react-dom';
// render的含义就是把一个React元素渲染到Dom容器内部
//jsx javascript+html(xml的一种)的混合写法
ReactDom.render(
    <h1>hello</h1>,
    document.querySelector('#root')
);
// react元素是通过JS对象来描述DOM结构的一种数据结构
// {
//     tagName:'h1',
//     attr:null,
//     children:['hello']
// }
// React.render(
//     React.createElement('h1',null,['helol'])
// )
