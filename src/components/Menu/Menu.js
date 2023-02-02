import { Avatar, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu({ menuItems, currentItem }) {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        cursor: "pointer",
      }}
      className="menu"
    >
      <Typography variant="h4" style={{ margin: "0.5rem" }}>
        Devarsh Mavani
      </Typography>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {menuItems.map((item, index) => {
          let styles = {};
          console.log(item.slug)

          if (index == currentItem) styles["background"] = orange[500];
          return (
            <Link
              to={`${item.slug}`}
              className={`menu_item${
                index == currentItem ? "_active" : ""
              } menu_item`}
              style={styles}
            >
              {item.icon}
              <Typography variant="body1" sx={{ marginLeft: "1rem" }}>
                {item.title}
              </Typography>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
