import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { logout, selectedUser } from "../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../hooks/input/redux/hooks";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectedUser);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <a
        onClick={logoutHandler}
        style={{
          backgroundColor: "yellow",
          cursor: "pointer",
          height: "40px",
          width: "60px",
          padding: "8px",
        }}
      >
        Logout
      </a>
      <h2>{user?.email}</h2>
    </div>
  );
};

export default HomePage;
