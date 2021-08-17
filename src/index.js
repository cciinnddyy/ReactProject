//引入react 核心庫
import React from 'react';
//引入 react DOM
import ReactDOM from 'react-dom';
// 引入 APP component
import App from './App';
import {BrowserRouter} from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);

//Note
//<HashRouter> => createHashHistory (路徑中 有 ＃) Anchor value = hashvalue => # 後面的值 都不會發送給服務器的
/*
history:
  action: "PUSH"
  block: ƒ block(prompt)
  createHref: ƒ createHref(location)
  go: ƒ go(n)
  goBack: ƒ goBack()
  goForward: ƒ goForward()
  length: 48
  listen: ƒ listen(listener)
  location: {pathname: "/about", search: "", hash: "", state: undefined, key: "yfuyd7"} => Redundant, value can be retrieved from location
  push: ƒ push(path, state)
  replace: ƒ replace(path, state)
  [[Prototype]]: Object
location:
  hash: ""
  key: "yfuyd7"
  pathname: "/about"
  search: ""
  state: undefined
  [[Prototype]]: Object
match:
isExact: true
params: {}
path: "/about"
url: "/about"
[[Prototype]]: */


