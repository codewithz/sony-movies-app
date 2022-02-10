import logo from './logo.svg';
import './App.css';
import MoviesHome from './components/MoviesHome';
import isOffsetContainer from './../node_modules/popper.js/src/utils/isOffsetContainer';

function App() {
  return (
    <main className="container">
      <MoviesHome />
    </main>
  );
}

export default App;
