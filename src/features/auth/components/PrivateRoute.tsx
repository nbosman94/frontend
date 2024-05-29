import React, { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/input/redux/hooks";
import { verifyJwt } from "../authSlice";

const PrivateRoute = ({ page }: { page: JSX.Element }) => {
  const dispatch = useAppDispatch();

  const { isAuthenticated, isSuccess, jwt } = useAppSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!jwt || !jwt?.token) return;

    dispatch(verifyJwt(jwt.token));
  }, [jwt, isSuccess]);

  return <div></div>;
};

export default PrivateRoute;
