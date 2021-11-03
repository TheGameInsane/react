import { Switch, Route, Redirect } from 'react-router-dom'
import { DashboardPage, LandingPage, MenuPage } from './pages';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Switch>
      <Route path='/' exact={true} component={LandingPage} />
      <Route path='/menu' exact={true} component={MenuPage} />
      <Route path="/dashboard/:id" exact={true} component={DashboardPage} />
      <Redirect to='/' />
    </Switch>
  );
}

export default App;
