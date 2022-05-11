import './App.css';
import { Route, Switch } from 'react-router-dom';

import UsersPage from './pages/Users/Users';
import ClientsPage from './pages/Clients/Clients';
import LogsPage from './pages/Logs/Logs';
import Header from './components/organisms/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" component={UsersPage} exact/>
        <Route path="/clients" component={ClientsPage} />
        <Route path="/logs" component={LogsPage} />
      </Switch>
    </div>
  );
}

export default App;
