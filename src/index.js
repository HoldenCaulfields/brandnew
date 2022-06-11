
import {createRoot} from 'react-dom/client';
import App from './App';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab='home' />);


// import App from './App';
// import './index.css';

// ReactDOM.render(<App/>, document.getElementById('root')); --> so fxxking old :))