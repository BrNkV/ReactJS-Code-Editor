import React from 'react';
import './App.css';
import { EditorProvider } from './context/context';
import Codebar from './components/CodeBar/CodeBar';

function App() {
  return (
    <EditorProvider>
      <Codebar/>
    </EditorProvider>
  );
}

export default App;
