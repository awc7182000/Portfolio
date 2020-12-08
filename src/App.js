import Front from './views/Front'
import './App.css';
import {Router} from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Front path="/"/>
      </Router>
    </div>
  );
}

export default App;
