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
//<HashRouter> => createHashHistory (路徑中 有 ＃) Anchor value = hashvalue => # 後面的值 都不會發送給服務器的

