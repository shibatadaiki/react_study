// Reactコンポーネントの基本的な機能をコンポーネント「Component」を生成している
// わざわざ { aaa } のようにコンポーネント化するのは、それをファイル内で何らかの形で使用したいから
// この場合は、class App extends Component のような形でしようするためにコンポーネント化している
import React, { Component } from 'react';

// ./logo.svgファイルの画像データを読み込んでコンポーネント「logo」を生成している
// コンポーネント -> 定数、class、「一部分」的な
import logo from './logo.svg';
// './App.css'は、同じsrcディレクトリ内にあるApp.cssファイルをインストールしている
import './App.css';

// './Person/Person' === './Person/Person.js（省略可）'
import Person from './Person/Person';

// Reactコンポーネントの基本的な機能を継承している？
// extendsでクラス継承する。 Component（親） -> App（子）
class App extends Component {
  render() {
    // jsxを使わない場合は下記のようにReact.createElementでDOM要素を生成する
    // 第一引数：生成するDOM要素。第二引数：そのDOM要素につけるプロパティ（下記の場合はclass='App'）
    // 第三引数以降：第一引数で生成されたDOM要素の中に入る子要素群
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', { className: 'App' }, 'h1h1h1h1h1h1h1h1h1h1'), 'my name is daiki shibata')

    return (
      // これらのDOM要素をreturnして呼び出し元に返してrender()でHTMLをレンダーする
      <div className="App">
        <header className="App-header">
          {/* {logo}で、./logo.svgのデータ内容を出力する（たぶん） */}
          <img src={logo} className="App-logo" alt="logo" />

          <h1>Hello React!!!!!!!!!!!</h1>
          <p>This is really working</p>
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
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
        </header>
      </div>
    );
  }
}

// 「export default App」で、Appクラス（のオブジェクト）を、このファイルを読み込んだ際の返り値として返す
export default App;
