import React from "react";
import { createContext, useContext, useState, useReducer } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WellcomePage from "./container/wellcome";
import SignupPage from "./container/signup";
import SignupConfirmPage from "./container/signup-confirm";
import SigninPage from "./container/signin";
import BalancePage from "./container/balance";


function App() {
  return (
    //<AuthContext.Provider value={authContextData }>
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            //<AuthRoute>
            <WellcomePage />
            // </AuthRoute>

          }
        />
        <Route
          path="/signup"
          element={
            //<AuthRoute>
            <SignupPage />
            //</AuthRoute>
          }
        />
        <Route
          path="/signup/signup-confirm"
          element={
            //  <PrivateRoute>
            <SignupConfirmPage />
            // </PrivateRoute>
          }
        />
        <Route
          path="/signin"
          element={
            // <AuthRoute>
            <SigninPage />
            //</AuthRoute>

          }
        />
        {/* <Route
            path="/recovery"
            element={
              <AuthRoute>
                <RecoveryPage />
              </AuthRoute>
            }
          /> */}
        {/* <Route
            path="/recovery-confirm"
            element={
              <AuthRoute>
                <RecoveryConfirmPage />
              </AuthRoute>
            }
          /> */}
        <Route
          path="/signup-confirm/balance"
          element={
            //<PrivateRoute>
            <BalancePage />
            // </PrivateRoute>
          }
        />
        {/* <Route
            path="/notifications"
            element={
              <PrivateRoute>
                <NotificationsPage />
              </PrivateRoute>
            }
          /> */}
        {/* <Route
            path="/settings"
            element={
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            }
          /> */}
        {/* <Route
            path="/recive"
            element={
              <PrivateRoute>
                <RecivePage />
              </PrivateRoute>
            }
          /> */}
        {/* <Route
            path="/send"
            element={
              <PrivateRoute>
                <SendPage />
              </PrivateRoute>
            }
          /> */}
        {/* <Route
            path="/transaction/:transactionId"
            element={
              <PrivateRoute>
                <TransactionPage />
              </PrivateRoute>
            
          /> */}
        {/* <Route path="*" Component={Error} /> */}
      </Routes>
    </BrowserRouter>
    //</AuthContext.Provider>
  );
}


export default App;
