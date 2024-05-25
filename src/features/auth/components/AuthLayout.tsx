import { Grid } from "@mui/material";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      sx={{ P: 2 }}
      container
      direction={"column"}
      justifyContent="flex-start"
      alignItems={"center"}
    >
      <img src="amaon-logo.png" alt={"amazon-logo"} height="70px" />
      <main>{children}</main>
    </Grid>
  );
};

export default AuthLayout;
