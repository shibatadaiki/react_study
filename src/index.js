// 'react' 'react-dom'はreactライブラリ（ライブラリをインストールしている）
import React from 'react';
import ReactDOM from 'react-dom';

// './index.css'は、同じsrcディレクトリ内にあるindex.cssファイルをインストールしている
import './index.css';

// './App'は、同じsrcディレクトリ内にあるApp.jsファイルのclass Appのオブジェクトをインストールしている
// App.jsファイルにあるインストールされたclass Appのオブジェクトが、このファイル（index.jsファイル）の「App」という
// 定数（だっけ？）に代入されている。
import App from './App';

// ./serviceWorker.jsのファイルでexport（出力）されている全ての内容（「*」）を読み込み、
// それを「serviceWorker」という名前から使用できるようにしている
// この場合では、「function unregister()」と「function register(config)」メソッドが
// 「serviceWorker」から使用できるようになっている。
import * as serviceWorker from './serviceWorker';

// この<App />の「App」が、App.jsファイルのclass Appのオブジェクトであり、
// それが ReactDOM.render されることで、 class App の render() で return されているDOM要素の値が
// <App />に代入される。
// さらに、第二引数のdocument.getElementById('root')で、index.htmlのid=rootの子要素にrenderされたDOM要素が挿入される

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<p>Test!!!!!!!!!!</p>, document.getElementById('root'));

//アプリをオフラインで動作させて読み込みを速くしたい場合は、変更できます。
//下のregister（）に登録解除します。これにはいくつかの落とし穴があります。
//サービスワーカーの詳細：https://bit.ly/CRA-PWA

// 「function unregister()」と「function register(config)」メソッドが
// 「serviceWorker」から使用できるようになっている。
serviceWorker.unregister();
