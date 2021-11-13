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
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import AllReviews from './pages/Reviews/AllReviews/AllReviews';

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
          <Route  path='/allreview'>
            <AllReviews></AllReviews>
          </Route>
          <PrivateRoute  path='/placeorder/:productId'>
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <PrivateRoute  path='/dashboard'>
            <Dashboard></Dashboard>
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
