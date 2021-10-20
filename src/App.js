import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Doctors from './Pages/Doctors/Doctors';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import Register from './Pages/Login/Register';
import AuthProvider from './Context/AuthProvider';
import IndividualService from './Pages/Services/IndividualService/IndividualService';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/404/NotFound';
import Success from './Pages/Success/Success';

function App() {
  return (
    <AuthProvider>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/home#aboutus'>
            <Home></Home>
          </Route>
          <Route path='/doctor'>
            <Doctors></Doctors>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/success'>
            <Success></Success>
          </PrivateRoute>
          <PrivateRoute path='/serviceinfo/:serviceid'>
            <IndividualService></IndividualService>
          </PrivateRoute>
          <PrivateRoute path='/appointment'>
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path="*">
             <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
