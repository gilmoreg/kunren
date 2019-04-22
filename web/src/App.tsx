import * as React from 'react';
import Challenge from './components/Challenge';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">訓練（くんれん）</h1>
        </header>
        <Challenge />
      </div>
    );
  }
}

export default App;
