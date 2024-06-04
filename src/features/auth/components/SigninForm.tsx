import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Typography,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import { FC, FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/input/redux/hooks";
import useInput from "../../../hooks/input/useInput";
import { validateEmail } from "../../../shared/utils/validation/email";
import { validatePasswordLength } from "../../../shared/utils/validation/length";
import { login, reset } from "../authSlice";
import { LoginUser } from "../models/LoginUser.interface";

const SigninForm: FC = () => {
  const {
    text: email,
    shouldDisplayError: emailHasError,
    textChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    clearHandler: emailClearHandler,
  } = useInput(validateEmail);

  const {
    text: password,
    shouldDisplayError: passwordHasError,
    textChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    clearHandler: passwordClearHandler,
  } = useInput(validatePasswordLength);

  const clearForm: any = () => {
    passwordClearHandler();
    emailClearHandler();
  };

  const dispatch = useAppDispatch();
  const { isLoading, isAuthenticated, isSuccess } = useAppSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
      clearForm();
    }
  }, [isSuccess, dispatch]);

  useEffect(() => {
    if (!isAuthenticated) return;
    navigate("/");
  }, [isAuthenticated]);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordHasError || emailHasError) return;
    if (email.length === 0 || password.length === 0) return;
    const existingUser: LoginUser = { email, password };

    dispatch(login(existingUser));

    clearForm();
  };

  if (isLoading) return <CircularProgress sx={{ marginTop: "64px" }} />;
  return (
    <>
      <Box
        sx={{
          border: 1,
          padding: 2,
          borderColor: "#cccccc",
          width: "350px",
          marginTop: 2,
        }}
      >
        <form onSubmit={onSubmitHandler}>
          <Grid container direction={"column"} justifyContent={"flex-start"}>
            <Typography variant={"h4"} component={"h1"}>
              Sign In
            </Typography>

            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
              htmlFor="email"
            >
              {" "}
              Email{" "}
            </InputLabel>
            <TextField
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              error={emailHasError}
              helperText={emailHasError ? "Please enter a valid email" : ""}
              type="email"
              name="email"
              id="email"
              variant="outlined"
              size="small"
            />

            <InputLabel
              sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
              htmlFor="password"
            >
              {" "}
              Password{" "}
            </InputLabel>
            <TextField
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              error={passwordHasError}
              helperText={
                passwordHasError
                  ? "Password needs to be at least 6 charcters"
                  : " "
              }
              type="password"
              name="password"
              id="password"
              variant="outlined"
              size="small"
              placeholder="password"
            />

            <Button
              disabled={
                !validatePasswordLength(password) || !validateEmail(email)
              }
              variant="contained"
              style={{
                marginTop: "16px",
                height: "31px",
                color: "black",
                borderColor: "#a88734 #9c7e31 #846a29",
                textTransform: "none",
              }}
              type="submit"
            >
              Login
            </Button>
          </Grid>
        </form>

        <div style={{ marginTop: "30px" }}>
          <small>
            <span>By continuing, you agree to Amazon's</span>
          </small>
        </div>
        <div>
          <small>
            <a href="#" style={{ textDecoration: "none" }}>
              {" "}
              Conditions of use
            </a>{" "}
            and{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Privacy policy
            </a>
          </small>
          <div style={{ marginTop: "16px", marginBottom: "16px" }}>
            <Divider />
          </div>
          <div>
            <small>
              Don't have an account?
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#0000ee" }}
              >
                {" "}
                Register
              </Link>
            </small>
          </div>
        </div>
      </Box>
    </>
  );
};

export default SigninForm;
