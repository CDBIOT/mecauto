import logo from './assets/logo.svg';
import './App.css';
import GlobalStyle from './styles/global.ts';
import CheckModulo from './components/CheckModulo/CheckModulo';
import { Button } from './components/CheckModulo/styles';
import Orcamento from './components/Orcamento/orcamento';
import Header from './components/Header/header';
import Simulador from './components/Simulador/simulador';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />

        <GlobalStyle />
        <Header />
        <CheckModulo />
        <Orcamento />
        <Simulador />
      </header>
    </div>
  );
}

export default App;
