import { Alert, Button, Card, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, redirect } from "react-router-dom";
import { authAction } from "../store/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  let dispatch = useDispatch();

  const submit = () => {
    if (email == "admin@xyz.com" && password == "admin123") {
      // Success
      dispatch(authAction.login({ email, password }));
      navigate("/");
    } else {
      // Show Error
      setError("Something went wrong");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        variant="outlined"
        sx={{ width: "fit-content", margin: "1rem", padding: "1rem" }}
      >
        <Typography variant="h3" sx={{ margin: "1rem" }}>
          Login
        </Typography>
        {error != "" ? (
          <Alert severity="error" color="error" sx={{ margin: "1rem" }}>
            {error}
          </Alert>
        ) : null}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ margin: "1rem" }}>
            Email
          </Typography>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ margin: "1rem" }}>
            Password
          </Typography>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button variant="contained" sx={{ margin: "1rem" }} onClick={submit}>
          Login
        </Button>
      </Card>
    </div>
  );
}
