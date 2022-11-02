import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Login from "./components/Login/Login";
import React, { Suspense } from "react";
const Login = React.lazy(() => import("./components/Login/Login"));
const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>please wait...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<div>please wait...</div>}>
              <Dashboard />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
