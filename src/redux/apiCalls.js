import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./slices/userReducer";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/api/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const register = async (dispatch, newUser) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/api/auth/register", newUser);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        dispatch(registerFailure());
    }
};