import React from 'react';
import ReactDOM from 'react-dom';
// React是由React元素
// 1.首字母小写，凡是首字母小写的都会被认为是React元素
// Warning: The tag <didv> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
//     in didv (at src/index.js:6)
// 说明 不是正常的属性是不行的
ReactDOM.render(<div>
hello
</div>,document.querySelector('#root'));

