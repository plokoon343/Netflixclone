import React, { Profiler, useEffect } from 'react';
import './App.css'; 
import Login from './screens/Login';
import Homescreen from './screens/Homescreen';
import ProfileScreen from './screens/ProfileScreen';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignupScreen from './screens/SignupScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { login } from './features/userSlice';

function App() {
  // const user = {name: 'Alex'};
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => 
  { 
   const unsubscribe = auth.onAuthStateChanged(
      userAuth => {
        if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else{
        dispatch(logout());
      } }
    )
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
    <Router>
    {!user ?(
      <Login/>
    ) :(
      <Routes>
          {/* <Route path = "/About" element={<About/>}/> */}
          {/* <Route path = "/users" element={<users/>}/> */}
          {/* <Route path = "/test" element={<h1>Hello There</h1>}/> */}
          <Route  exact path='/profile' element= {<ProfileScreen />}/>
          <Route  exact path = "/" element={<Homescreen />}/>
          <Route  exact path = "/?" element={<SignupScreen />}/>
          <Route  exact path = "/Login" element={<Login />}/>
        </Routes>

    )}
        
      
    </Router>


    </div>
  );
}

export default App;
