import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Login/Register/Register';
import PlaceOrder from './pages/Shop/PlaceOrder/PlaceOrder';
import Shop from './pages/Shop/Shop/Shop';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
          <PrivateRoute  path='/placeorder'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
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
      </AuthProvider>
    </div>
  );
}

export default App;
