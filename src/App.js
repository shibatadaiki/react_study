// Reactコンポーネントの基本的な機能を「Component」に代入している？
import React, { Component } from 'react';

// ./logo.svgファイルの画像データを読み込んで定数？「logo」に代入している
import logo from './logo.svg';
// './App.css'は、同じsrcディレクトリ内にあるApp.cssファイルをインストールしている
import './App.css';

// Reactコンポーネントの基本的な機能を継承している？
// extendsでクラス継承する
class App extends Component {
  render() {
    // jsxを使わない場合は下記のようにReact.createElementでDOM要素を生成する
    // 第一引数：生成するDOM要素。第二引数：そのDOM要素につけるプロパティ（下記の場合はclass='App'）
    // 第三引数以降：第一引数で生成されたDOM要素の中に入る子要素群
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', { className: 'App' }, 'h1h1h1h1h1h1h1h1h1h1'), 'my name is daiki shibata')

    return (
      // これらのDOM要素をreturnして呼び出し元に返す
      // {logo}で、./logo.svgのデータ内容を出力する
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <p>Hello React!!!!!!!!!!!</p>
          {/* jsxのコメントアウトはこのようにする */}
          {/* jsxはHTMLのように見えるが、実際はHTMLのように書けるJavaScript */}
          {/* DOMになる際にJSによって変換される。シンタックスシュガー */}
          {/*
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          */}
        </header>
      </div>
    );
  }
}

// 「export default App」で、Appクラスの値を、このファイルを読み込んだ際の返り値として返す
export default App;
