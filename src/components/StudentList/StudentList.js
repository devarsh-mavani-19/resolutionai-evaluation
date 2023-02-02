import {
  Avatar,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { studentActions } from "../../store/students";
import { Link, redirect } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function StudentList() {
  const [students, setStudents] = useState({});
  let dispatch = useDispatch();

  const deleteRow = async (row, index) => {
    let x = window.confirm("Are you sure you want to delete it?");
    if (x) {
      await deleteDoc(doc(db, `students/${row.id}`));
      let newStudents = { ...students };
      delete newStudents[row.id];
      setStudents(newStudents);
      console.log(newStudents)
      dispatch(studentActions.load({ students: newStudents }));
    }
  };

  useEffect(() => {
    //fetch records
    const fetchDocs = async () => {
      const querySnapshot = await getDocs(collection(db, "students"));
      let temp = {};
      querySnapshot.forEach((doc) => {
        let data = { id: doc.id, ...doc.data() };
        temp[doc.id] = { ...data };
      });
      setStudents(temp);
      dispatch(studentActions.load({ students: temp }));
    };
    fetchDocs();
  }, []);

  return (
    <TableContainer component={Paper} sx={{ margin: "1rem" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell component={"b"}>Name</StyledTableCell>
            <StyledTableCell>Class</StyledTableCell>
            <StyledTableCell>Roll No.</StyledTableCell>
            <StyledTableCell>View/Edit/Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(students).map((key, index) => {
            let row = students[key];
            return (
              <StyledTableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.fname}
                </StyledTableCell>
                <StyledTableCell>{row._class}</StyledTableCell>
                <StyledTableCell>{row.roll}</StyledTableCell>
                <StyledTableCell>
                  <Link to={`/view/${key}`}>
                    <RemoveRedEyeIcon
                      sx={{ margin: "0.3rem", cursor: "pointer" }}
                    />
                  </Link>
                  <Link to={`/edit/${key}`}>
                    <BorderColorIcon
                      sx={{ margin: "0.3rem", cursor: "pointer" }}
                    />
                  </Link>
                  <DeleteIcon
                    onClick={() => deleteRow(row, index)}
                    sx={{ margin: "0.3rem", cursor: "pointer" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
