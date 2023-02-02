import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { authAction } from "../store/auth";
import { studentActions } from "../store/students";

export default function Logout() {
    let dispatch = useDispatch()
    dispatch(authAction.logout())
    return <Navigate to={'/login'} />
}