import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { CustomerAccessPage } from './containers/CustomerAccessPage';
import { HomePage } from './containers/HomePage';



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = '/' exact component={HomePage} />
          <Route path = '/customer/access/:action' exact component={CustomerAccessPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
