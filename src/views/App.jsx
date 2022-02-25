import {BrowserRouter as Router} from 'react-router-dom';
import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
          <Menu/>
          <Content/>
      </Router>
    </div>
  );
}

export default App;
