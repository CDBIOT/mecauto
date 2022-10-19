import logo from './assets/logo.svg';
import './App.css';
import GlobalStyle from './styles/global.ts';
import CheckModulo from './components/CheckModulo/CheckModulo';
import { Button } from './components/CheckModulo/styles';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />

        <GlobalStyle />
        <CheckModulo />
        
        
      
      </header>
    </div>
  );
}

export default App;
