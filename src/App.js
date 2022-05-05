import logo from './logo.svg';
import './App.css';
import SpotifyAuthButton from './components/SpotifyAuthButton/SpotifyAuthButton';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SpotifyAuthButton/>
        <Filters/>
      </header>
    </div>
  );
}

export default App;
