import { Typography } from "@mui/material";
import Form from "../components/Form/Form";

export default function AddStudent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h6'>Add Student</Typography>
        <Form />
    </div>
  );
}
