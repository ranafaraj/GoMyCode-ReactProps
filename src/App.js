
import './App.css';
import { Profile } from './components/profile/Profile'
import img from './ranz.jpg'

function App() {
  const handleName = name => {
     alert(name)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Profile name='Ranz' bio={`19 yo, half alien half cat`} profission='guitarest' handleName={handleName}>{img}</Profile>
      </header>
    </div>
  );
}

export default App;
