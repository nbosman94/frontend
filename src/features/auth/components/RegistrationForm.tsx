import {
  Box,
  Grid,
  TextField,
  InputLabel,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { FC, FormEvent } from "react";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/input/useInput";
import { validateEmail } from "../../../shared/utils/validation/email";
import {
  validateNameLength,
  validatePasswordLength,
} from "../../../shared/utils/validation/length";

const RegistrationForm: FC = () => {
  const {
    text: name,
    shouldDisplayError: nameHasError,
    textChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    clearHandler: nameClearHandler,
  } = useInput(validateNameLength);

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

  const {
    text: confirmPassword,
    shouldDisplayError: confirmPasswordHasError,
    textChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    clearHandler: confirmPasswordClearHandlerconfirm,
  } = useInput(validatePasswordLength);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
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
            Create Account
          </Typography>
          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
            htmlFor="name"
          >
            {" "}
            Your Name{" "}
          </InputLabel>
          <TextField
            value={name}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            error={nameHasError}
            helperText={nameHasError ? "Enter your name" : ""}
            type="text"
            name="name"
            id="name"
            variant="outlined"
            size="small"
          />

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
            type="text"
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
            placeholder="Minimum 6 characters required"
          />

          <InputLabel
            sx={{ fontWeight: 500, marginTop: 1, color: "#000000" }}
            htmlFor="confirmPassword"
          >
            {" "}
            Confirm Password{" "}
          </InputLabel>
          <TextField
            value={confirmPassword}
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            error={confirmPassword.length > 0 && password !== confirmPassword} // refactor
            helperText={
              confirmPassword.length > 0 && password !== confirmPassword
                ? "Passwords do not match"
                : ""
            } // refactor
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            variant="outlined"
            size="small"
            placeholder="Minimum 6 characters required"
          />
          <Button
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
            Register
          </Button>
        </Grid>
      </form>

      <div style={{ marginTop: "30px" }}>
        <small>
          <span>By creating an account, you agree to Amazon's</span>
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
        <Divider sx={{ marginTop: "36px", marginBottom: "36px" }} />
        <div>
          <small>
            Already have an account?
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "#0000ee" }}
            >
              {" "}
              Sign In
            </Link>
          </small>
        </div>

        <div>
          <small>
            Buying for work?
            <a href="#" style={{ textDecoration: "none" }}>
              {" "}
              Create a free business account
            </a>{" "}
          </small>
        </div>
      </div>
    </Box>
  );
};

export default RegistrationForm;
