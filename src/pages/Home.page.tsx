import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { logout, selectedUser } from "../features/auth/authSlice";
import Header from "../features/products/components/Header";
import { useAppDispatch, useAppSelector } from "../hooks/input/redux/hooks";

const HomePage = () => {
  // const dispatch = useAppDispatch();
  // const { user } = useAppSelector(selectedUser);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  // const logoutHandler = () => {
  //   dispatch(logout());
  //   navigate("/signin");
  // };

  return (
    <div>
      <Header />
    </div>
  );
};

export default HomePage;
