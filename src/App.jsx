import Weather from './components/Weather.jsx';
import CLOUD from './assets/icons/cloud-solid.svg';
import './style/normalize.css';
import './style/style.css';
import { AggregatProvider } from './utils/index.jsx';

function App() {
  return (
    <AggregatProvider>
      <Weather localisation="Strasbourg" icon={CLOUD} alt="cloud" />
    </AggregatProvider>
  );
}

export default App;
