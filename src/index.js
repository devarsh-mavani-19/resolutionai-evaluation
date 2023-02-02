import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material";
import { orange } from "@mui/material/colors";
import { Provider } from "react-redux";
import store from "./store";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import AddStudent from "./pages/AddStudent";
import ManageStudents from "./pages/ManageStudents";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: orange,
  },
});

const router = createBrowserRouter(
  
  [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/add",
    element: <AddStudent />,
  },
  {
    path: "/manage",
    element: <ManageStudents />,
  },
  {
    path: "/",
    element: <AddStudent />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <RouterProvider> */}
        <App />
        {/* </RouterProvider> */}
        {/* <RouterProvider router={router} /> */}
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
