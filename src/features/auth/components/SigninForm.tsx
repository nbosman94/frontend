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

const SigninForm: FC = () => {
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked");
  };
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
              type="password"
              name="password"
              id="password"
              variant="outlined"
              size="small"
              placeholder="password"
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
