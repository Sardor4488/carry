import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./carry/home/home";
import SignUpUser from "./carry/signUp/signUpUser";
import SignUpDriver from "./carry/signUp/signUpDriver";
import SignUpMerchant from "./carry/signUp/signUpMerchant";
import SignIn from "./carry/signIn/signIn";
import User from "./carry/user";
import LoginAdmin from "./adminPanel/loginAdmin/loginAdmin";
import SignUpAdmin from "./adminPanel/loginAdmin copy/signUpAdmin";
import { data } from "./adminPanel/routes/data";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up-user" element={<SignUpUser />} />
        <Route path="/sign-up-driver" element={<SignUpDriver />} />
        <Route path="/sign-up-merchant" element={<SignUpMerchant />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        {/* <Route path="/admin" element={<AdminPanelWrapper />} /> */}
        <Route path="/admin-sign-in" element={<LoginAdmin />} />
        <Route path="/admin-sign-up" element={<SignUpAdmin />} />
        {data.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children.map((child) => (
              <Route
                key={child.path}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </div>
  );
}

export default App;
