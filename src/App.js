import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import AdminLogin from "./Components/AdminLogin";
import UserLogin from "./Components/UserLogin";
import Admin from "./Components/Admin";
import Document from "./Components/Document";
import Client from "./Components/Client";
import User from "./Components/User";
import UserHistory from "./Components/UserHistory";
import UserSendEmail from "./Components/UserSendEmail";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" caseSensitive={false} element={<AdminLogin/>} />
          <Route path="/adminlogin" caseSensitive={false} element={<AdminLogin/>} />
          <Route path="/userlogin" caseSensitive={false} element={<UserLogin/>} />
          <Route path="/admin" caseSensitive={false} element={<Admin/>} />
          <Route path="/document" caseSensitive={false} element={<Document/>} />
          <Route path="/client" caseSensitive={false} element={<Client/>} />
          <Route path="/user" caseSensitive={false} element={<User/>} />
          <Route path="/userhistory" caseSensitive={false} element={<UserHistory/>} />
          <Route path="/usersendemail" caseSensitive={false} element={<UserSendEmail/>} />
        </Routes>
    </Router>
  );
}

export default App;
