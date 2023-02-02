import { Alert, Button, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { nonEmpty } from "../../utils/validate";
import { db } from "../../config/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

const divisions = ["A", "B", "C", "D", "E"];

export default function Form({ data={}, disabled = false }) {
  const [fname, setFname] = useState(data.fname || "");
  const [mname, setMname] = useState(data.mname || "");
  const [lname, setLname] = useState(data.lname || "");
  const [_class, setClass] = useState(data._class || "");
  const [_div, setDiv] = useState(data._div || "");
  const [roll, setRoll] = useState(data.roll || "");
  const [address1, setAddress1] = useState(data.address1 || "");
  const [address2, setAddress2] = useState(data.address2 || "");
  const [landmark, setLandmark] = useState(data.landmark || "");
  const [city, setCity] = useState(data.city || "");
  const [pincode, setPincode] = useState(data.pincode || "");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  let classes = [];
  for (let i = 0; i < 10; i++) {
    classes[i] = i + 1;
  }
  const handleSubmit = async () => {
    if (nonEmpty(fname)) {
      if (nonEmpty(mname)) {
        if (nonEmpty(lname)) {
          if (nonEmpty(_class)) {
            if (nonEmpty(_div)) {
              if (nonEmpty(roll)) {
                if (nonEmpty(address1)) {
                  if (nonEmpty(address2)) {
                    if (nonEmpty(landmark)) {
                      if (nonEmpty(city)) {
                        if (nonEmpty(pincode)) {
                          if (Object.keys(data).length > 0) {
                            // update
                            const _data = {
                              fname,
                              lname,
                              mname,
                              _class,
                              _div,
                              roll,
                              address1,
                              address2,
                              landmark,
                              city,
                              pincode,
                            };
                            await updateDoc(doc(db, `students/${data.id}`), _data)
                            setSuccess(true);
                          } else {
                            // save new
                            const _data = {
                              fname,
                              lname,
                              mname,
                              _class,
                              _div,
                              roll,
                              address1,
                              address2,
                              landmark,
                              city,
                              pincode,
                            };
                            const docRef = await addDoc(
                              collection(db, "students"),
                              _data
                            );
                            setSuccess(true);
                          }
                          
                        } else {
                          setError("Pincode");
                        }
                      } else {
                        setError("City");
                      }
                    } else {
                      setError("Landmark");
                    }
                  } else {
                    setError("Address line 2");
                  }
                } else {
                  setError("Address line 1");
                }
              } else {
                setError("Roll no.");
              }
            } else {
              setError("Division");
            }
          } else {
            setError("Class");
          }
        } else {
          setError("Lastname");
        }
      } else {
        setError("Middle Name");
      }
    } else {
      setError("First name");
    }
  };

  return (
    <div>
      {error ? (
        <Alert severity="error" color="error">
          {error} should not be empty
        </Alert>
      ) : null}

      {success ? (
        <Alert severity="success" color="info">
          Data uploaded successfully
        </Alert>
      ) : null}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "1rem",
        }}
      >
        <TextField
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          disabled={disabled}
          sx={{ width: "100%", marginLeft: "1.5rem" }}
        />
        <TextField
          value={mname}
          onChange={(e) => setMname(e.target.value)}
          id="outlined-basic"
          label="Middle Name"
          variant="outlined"
          disabled={disabled}
          sx={{ width: "100%", marginLeft: "1.5rem" }}
        />
        <TextField
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          id="outlined-basic"
          disabled={disabled}
          label="Last Name"
          variant="outlined"
          sx={{ width: "100%", marginLeft: "1.5rem" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "1rem",
        }}
      >
        <Select
          id="outlined-basic"
          value={_class}
          disabled={disabled}
          onChange={(e) => setClass(e.target.value)}
          label="First Name"
          variant="outlined"
          sx={{ width: "100%", marginLeft: "1.5rem" }}
        >
          {classes.map((class_) => {
            return (
              <MenuItem key={class_} value={class_}>
                {class_}
              </MenuItem>
            );
          })}
        </Select>
        <Select
          value={_div}
          onChange={(e) => setDiv(e.target.value)}
          id="outlined-basic"
          disabled={disabled}
          label="First Name"
          variant="outlined"
          sx={{ width: "100%", marginLeft: "1.5rem" }}
        >
          {divisions.map((division) => {
            return (
              <MenuItem key={division} value={division}>
                {division}
              </MenuItem>
            );
          })}
        </Select>
        <TextField
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          id="outlined-basic"
          disabled={disabled}
          label="Roll No."
          variant="outlined"
          sx={{ width: "100%", marginLeft: "1.5rem" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "1rem",
        }}
      >
        <TextField
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          id="outlined-basic"
          label="Address Line 1"
          variant="outlined"
          disabled={disabled}
          sx={{ width: "100%", marginLeft: "1.5rem" }}
        />
        <TextField
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          id="outlined-basic"
          label="Address Line 2"
          variant="outlined"
          disabled={disabled}
          sx={{ width: "100%", marginLeft: "1.5rem" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          margin: "1rem",
        }}
      >
        <TextField
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
          id="outlined-basic"
          label="Landmark"
          variant="outlined"
          disabled={disabled}
          sx={{ width: "100%", marginLeft: "1.5rem" }}
        />
        <TextField
          value={city}
          onChange={(e) => setCity(e.target.value)}
          id="outlined-basic"
          label="City"
          variant="outlined"
          disabled={disabled}
          sx={{ width: "100%", marginLeft: "1.5rem" }}
        />
        <TextField
          value={pincode}
          disabled={disabled}
          onChange={(e) => setPincode(e.target.value)}
          id="outlined-basic"
          label="Pincode"
          variant="outlined"
          sx={{ width: "100%", marginLeft: "1.5rem" }}
        />
      </div>
      {!disabled ? (
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      ) : null}
    </div>
  );
}
