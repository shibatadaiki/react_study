// 'react' 'react-dom'はreactライブラリ（ライブラリをインストールしている）
// App.jsの { Component } のようにコンポーネント化しないのは、拡張クラスなどを作っていないから
import React from 'react';

const person = () => {
  return <p>I am person { Math.floor(Math.random() * 100) } old!</p>
}

export default person;
