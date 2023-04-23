import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './carry/home/home';
import SignUpUser from './carry/signUp/signUpUser';
import SignUpDriver from './carry/signUp/signUpDriver';
import SignUpMerchant from './carry/signUp/signUpMerchant';
import SignIn from './carry/signIn/signIn';
import User from './carry/user';
import AdminPanel from './adminPanel/adminPanel';
import LoginAdmin from './adminPanel/loginAdmin/loginAdmin';
import SignUpAdmin from './adminPanel/loginAdmin copy/signUpAdmin';
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sign-up-user' element={<SignUpUser/>} />
        <Route path='/sign-up-driver' element={<SignUpDriver/>} />
        <Route path='/sign-up-merchant' element={<SignUpMerchant/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/user' element={<User/>} />
        <Route path='/admin' element={<AdminPanel/>} />
        <Route path='/admin-sign-in' element={<LoginAdmin/>} />
        <Route path='/admin-sign-up' element={<SignUpAdmin/>} />
      </Routes>
    </div>
  );
}

export default App;
