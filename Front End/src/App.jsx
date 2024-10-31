import { useState } from "react";
import "./App.css";
import { Route, BrowserRouter, Routes, useLocation } from "react-router-dom";
import StickyNavbar from "./Components/Layout/Navbar";
import Home from "./Pages/Home/Home.jsx";
import Catalog from "./Pages/Catalog/Catalog.jsx";
import SignUp from "./Pages/SiginUp/SignUp.jsx";
import Details from "./Pages/PhysiotherapyDetails/Details.jsx";
import Sign from "./Pages/SignUp.jsx";
import ProfileUser from "./Pages/profileUser/profileUser.jsx";
import Footer from "./Components/Layout/Footer.jsx";
import UserType from "./Pages/AccountType.jsx";
import Login from "./Pages/Login/Login.jsx";
import RequestPage from "./Pages/Submit application/PractitionerProfile.jsx";
import TherapistProfile from "./Pages/TherapistProfile/TherapistProfile.jsx";
import TherapistDashboard from "./Pages/TherapistProfile/TherapistDashboard/Dashboard.jsx";
import Checkout from "./Pages/checkout/checkout.jsx";
import AboutUs from "./Pages/About us/AboutUs.jsx";
import ContactUs from "./Pages/contact us/contactUs.jsx";
const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavAndFoot = [
    "/sign",
    "/signup",
    "/UserType",
    "/login",
    "/RequestPage",
    "/ProfileUser",
    "/checkout",
    "/TherapistDashboard",
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
            <Route path="/Catalog" element={<Catalog />} />
            <Route path="/UserType" element={<UserType />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/Sign" element={<Sign />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/ProfileUser" element={<ProfileUser />} />
            <Route path="/RequestPage" element={<RequestPage />} />
            <Route path="/TherapistProfile" element={<TherapistProfile />} />
            <Route
              path="/TherapistDashboard"
              element={<TherapistDashboard />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
