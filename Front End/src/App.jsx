import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import StickyNavbar from "./Components/Layout/Navbar";
import Home from "./Pages/Home/Home.jsx";
import Physiotherapy from "./Pages/CatalogPhysiotherapy.jsx";
import SignUp from "./Pages/SiginUp/SignUp.jsx";
import Details from "./Pages/PhysiotherapyDetails/Details.jsx";
import Sign from "./Pages/SignUp.jsx";
import ProfileUser from "./Pages/profileUser.jsx";
import Footer from "./Components/Layout/Footer.jsx";
import UserType from "./Pages/AccountType.jsx";
import Login from "./Pages/Login/Login.jsx";
import RequestPage from "./Pages/Submit application/PractitionerProfile.jsx";
import TherapistProfile from "./Pages/TherapistProfile/TherapistProfile.jsx";
import TherapistDashboard from "./Pages/TherapistProfile/TherapistDashboard/Dashboard.jsx";
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavAndFoot = [
    "/sign",
    "/signup",
    "/UserType",
    "/login",
    "/TherapistDashboard",
    "/RequestPage"
  ].includes(location.pathname);

  return (
    <div>
      {!hideNavAndFoot && <StickyNavbar />}
      {children}
      {!hideNavAndFoot && <Footer />}
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="Test" element={<Test />} /> */}
            <Route path="/Physiotherapy" element={<Physiotherapy />} />
            <Route path="/UserType" element={<UserType />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Sign" element={<Sign />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/ProfileUser" element={<ProfileUser />} />
            <Route path="/RequestPage" element={<RequestPage />} />
            <Route path="/TherapistProfile" element={<TherapistProfile />} />
            <Route path="/TherapistDashboard" element={<TherapistDashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
