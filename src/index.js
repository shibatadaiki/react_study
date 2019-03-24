import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//アプリをオフラインで動作させて読み込みを速くしたい場合は、変更できます。
//下のregister（）に登録解除します。これにはいくつかの落とし穴があります。
//サービスワーカーの詳細：https://bit.ly/CRA-PWA
serviceWorker.unregister();
