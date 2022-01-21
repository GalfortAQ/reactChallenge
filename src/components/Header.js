import logo from '../assets/logo.png';

function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>¡Bienvenido al Challenge de React!</h2>
      </header>
  );
}

export default Header;
