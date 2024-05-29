import axios from "axios";
import { DisplayUser } from "../models/DisplayUser.interface";
import { LoginUser } from "../models/LoginUser.interface";
import { NewUser } from "../models/NewUser";
import {Jwt} from '../models/Jwt'
import { DecodedJwt } from "../models/DecodedJwt.interface";
import { jwtDecode } from "jwt-decode";


const register = async (newUser: NewUser): Promise<DisplayUser | null > => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/register`, newUser);
    return response.data;
}

const login = async (user: LoginUser): Promise<{jwt: Jwt, user: DisplayUser | null }> => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/login`, user);
    if(response.data){
        // setting local storage to store Jwt
        localStorage.setItem('jwt', JSON.stringify(response.data));
        //decoding jwt to obtain user
        const decodedJwt : DecodedJwt = jwtDecode(response.data.token)
        //setting local storage with that user info obtained from the token
        localStorage.setItem('user', JSON.stringify(decodedJwt.user));
        return {jwt: response.data, user: decodedJwt.user}
    }
    return {jwt: response.data, user: null};
}

const logout = (): void => {
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
}

const verifyJwt = async (jwt: string): Promise<boolean> => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_API}/auth/verify-jwt`, {jwt});
    if(response.data){
       const jwtExpirationMs = response.data.exp * 1000;
       return jwtExpirationMs > Date.now();
    }
    return false
}

const authService = {
    register,
    login,
    logout,
    verifyJwt,
}

export default authService;