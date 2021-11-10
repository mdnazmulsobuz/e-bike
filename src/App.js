import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import PlaceOrder from './pages/Shop/PlaceOrder/PlaceOrder';
import Shop from './pages/Shop/Shop/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <Route  path='/shop'>
            <Shop></Shop>
          </Route>
          <Route  path='/placeorder'>
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route  path='/login'>
            <Login></Login>
          </Route>
          <Route  path='/register'>
            <Register></Register>
          </Route>
          <Route  path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
