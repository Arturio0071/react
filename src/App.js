import React, { useState } from 'react';
import './App.css';
import Message from './Message';

function App() {

  const [textView, setInputText] = useState('');
  return (
    <div className="App">
      <input type="text" placeholder="Введи ваш текст" value={textView} onChange={(e) => setInputText(e.target.value)} />
      <Message textToShow={textView} />
    </div >
  );
}

export default App;
