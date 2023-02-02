import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import Form from "../components/Form/Form";

export default function View() {
    let state = useSelector(state => state.student)
    let params = useParams()
    const id = params.id
    let current = state.students[id]
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h6'>View Student</Typography>
        <Form disabled data={current} />
    </div>
  );
}
