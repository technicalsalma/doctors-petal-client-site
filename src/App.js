import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Home/Footer";
import Navber from "./Pages/Share/Navber/Navber";
import Appointment from "./Pages/Appointment/Appointment";
import Dashboard from './Pages/Dashboard/Dashboard'
import LogIn from "./Pages/LogIn/LogIn";
import SingUp from "./Pages/Home/SignUp";
import RequireAuth from "./Pages/LogIn/RequireAuth";
 import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyAppointments from "./Pages/Dashboard/MyAppointments";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/LogIn/RequireAdmin";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment></Appointment>
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users></Users>
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SingUp />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
