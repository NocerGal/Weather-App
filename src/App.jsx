import Weather from './components/Weather.jsx';
import CLOUD from './assets/icons/cloud-solid.svg';
import './style/normalize.css';
import './style/style.css';

function App() {
  return <Weather localisation="Strasbourg" icon={CLOUD} alt="cloud" />;
}

export default App;
