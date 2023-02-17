
import './App.css';
import Header from "./header";
import Home from "./Home";
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

        <Route path="/login">
                <Login />
          </Route>


          <Route path="/Checkout">
                <Header />
                <Checkout />
          </Route>

          <Route path="/" >
                <Header/>
                <Home/>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
