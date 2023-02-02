import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import TuneIcon from "@mui/icons-material/Tune";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

export const ProtectedRoute = ({ children, menuIdx }) => {
  let selector = useSelector((state) => state.auth);
  const { isAuth } = selector;
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="container">
      <Menu
        menuItems={[
          {
            icon: <PersonAddAlt1Icon />,
            title: "Add student",
            slug: '/'
          },
          {
            icon: <TuneIcon />,
            title: "Manage student",
            slug: '/manage'
          },
          {
            icon: <LogoutIcon />,
            title: "Logout",
            slug: '/logout'
          },
        ]}
        currentItem={menuIdx}
      />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Header />
        {children}
      </div>
    </div>
  );
};
