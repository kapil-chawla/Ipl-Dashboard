import './App.scss';
import { TeamPage } from './pages/TeamPage';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MatchPage } from './pages/MatchPage';
import { AllTeamsPage } from './pages/AllTeamsPage';
import { NoMatch } from './pages/NoMatch';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/teams/:teamName/matches/:year" exact>
            <MatchPage />
          </Route>
          <Route path="/teams/:teamName" exact>
            <TeamPage />
          </Route>
          <Route path="/teams" exact>
            <AllTeamsPage />
          </Route>
          <Route path="/" exact>
            <Redirect to={ `/teams`} />
          </Route>
          <Route path="/notfound" exact component={NoMatch} />
          <Redirect to="/notfound" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
