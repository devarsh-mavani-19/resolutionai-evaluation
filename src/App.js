import logo from "./logo.svg";
import "./App.css";
import AddStudent from "./pages/AddStudent";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import ManageStudents from "./pages/ManageStudents";
import LogoutIcon from "@mui/icons-material/Logout";
import TuneIcon from "@mui/icons-material/Tune";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Login from "./pages/Login";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import View from "./pages/View";
import EditStudent from "./pages/EditStudent";
import Logout from "./pages/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/edit/:id"
          element={
            <ProtectedRoute menuIdx={1}>
              <EditStudent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/view/:id"
          element={
            <ProtectedRoute menuIdx={1}>
              <View />
            </ProtectedRoute>
          }
        />
        <Route
          path="/manage"
          element={
            <ProtectedRoute menuIdx={1}>
              <ManageStudents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute menuIdx={0}>
              <AddStudent />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
