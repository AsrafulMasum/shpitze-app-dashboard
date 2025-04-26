import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Otp from "./Pages/Auth/Otp";
import Login from "./Pages/Auth/Login";
import UpdatePassword from "./Pages/Auth/UpdatePassword";
import NotFound from "./404";
import PrivateRoute from "./routes/PrivateRoute";

import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ChangePassword from "./Pages/Dashboard/ChangePassword";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ProviderDetailsList from "../src/Pages/Dashboard/ProviderDetailsList";
import AdminProfile from "./Pages/Dashboard/AdminProfile";
import About from "./Pages/Dashboard/Settings/About";
import PrivacyPolicy from "./Pages/Dashboard/Settings/PrivacyPolicy";
import Terms from "./Pages/Dashboard/Settings/Terms";
import FAQ from "./Pages/Dashboard/Settings/FAQ";
import BookList from "./Pages/Dashboard/BookList";
import SICguidelines from "./Pages/Dashboard/Settings/SICguidelines";
import Feedback from "./Pages/Dashboard/Feedback";
import UploadDonation from "./Pages/Dashboard/UploadDonation";
import EmployeeDetailsList from "./Pages/Dashboard/EmployeeDetailsList";
import Category from "./Pages/Dashboard/Category";
import Services from "./Pages/Dashboard/Services";

function App() {
  return (
    <>
      <div className="maincontainer">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/" element={<DashboardHome />} />
              <Route
                path="/service-provider-list"
                element={<ProviderDetailsList />}
              />
              <Route path="/employee-list" element={<EmployeeDetailsList />} />

              <Route path="/service-list" element={<Services />} />
              <Route path="/books-list" element={<BookList />} />

              <Route path="/add-category" element={<Category />} />
              <Route path="/setting" element={<FAQ />} />
              <Route path="/sic" element={<SICguidelines />} />
              <Route path="/make-admin" element={<MakeAdmin />} />
              <Route path="/admin-profile" element={<AdminProfile />} />
              <Route path="/upload-donation" element={<UploadDonation />} />

              <Route
                path="/setting-change-password"
                element={<ChangePassword />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
              {/* <Route path="/settings-profile" element={<Profile />} />  */}

              <Route path="/feedback" element={<Feedback />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/update-password" element={<UpdatePassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
