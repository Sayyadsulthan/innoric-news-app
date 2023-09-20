// import logo from './logo.svg';
import { useAuth } from "../hooks";
import Favourite from "../pages/Favourite";
import Health from "../pages/Health";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Politics from "../pages/Politics";
import SignUp from "../pages/SignUp";
import Sports from "../pages/Sports";
import Technology from "../pages/Technology";
import "../styles/App.css";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";

const ProtectedRoutes = ({ childrens, ...rest }) => {
  const auth = useAuth();
  // if the user authenticated go to that desired routes

  if (auth.user) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

function App() {
  const auth = useAuth();

  // if (auth.loading) {
  //   return <h1 >Loading....</h1>;
  // }

  return (
    <div className="App">
      {auth.loading ? (
        <h1>Loading....</h1>
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/" Component={Home} />
              <Route path="/sports" Component={Sports} />
              <Route path="/politics" Component={Politics} />
              <Route path="/health" Component={Health} />
              <Route path="/technology" Component={Technology} />
              <Route path="/favourite" Component={Favourite} />
              <Route path="*" Component={Home} />
            </Route>

            <Route path="/signup" Component={SignUp} />
            <Route path="/login" Component={Login} />
            {/* <Route path="/sports" element={<ProtectedRoutes />}>
            <Route  path="/sports" Component={Home} />
          </Route> */}
            <Route path="*" Component={Home} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
