import './App.css';
import { Route, Switch } from 'react-router-dom';

import UsersPage from './pages/Users/Users';
import ClientsPage from './pages/Clients/Clients';
import LogsPage from './pages/Logs/Logs';
import Header from './components/organisms/Header/Header';
import NewClient from './pages/Clients/New';
import NewUser from './pages/Users/New';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <div className="container">
          <Route path="/" component={UsersPage} exact/>
          <Route path="/users/new" component={NewUser} />
          <Route path="/clients" component={ClientsPage} />
          <Route path="/clients/new" component={NewClient} />
          <Route path="/logs" component={LogsPage} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
