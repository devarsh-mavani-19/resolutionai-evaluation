import { Typography } from "@mui/material";
import StudentList from "../components/StudentList/StudentList";

export default function ManageStudents() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h6">Manage Student</Typography>
      <StudentList />
    </div>
  );
}
