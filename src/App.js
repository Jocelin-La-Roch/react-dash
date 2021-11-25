import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './Views/pages/HomePage';
import LoginPage from "./Views/pages/LoginPage";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
            <PrivateRoute exact path="/home" component={HomePage}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
