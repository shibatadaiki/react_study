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
    // return React.createElement('div', null, 'h1', 'my name is daiki shibata')

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
