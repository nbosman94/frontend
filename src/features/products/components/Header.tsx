import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/input/redux/hooks";
import { logout, selectedUser } from "../../auth/authSlice";
import { AppBar, Badge, Button, Box, Toolbar } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectedUser);
  const { cart } = useAppSelector((state) => state.product);
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalQty);
  }, [cart]);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#232F3E", color: "white", padding: "4px" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img
            style={{
              width: "113px",
              height: "70px",
              paddingTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
            src="/amaon-logo.png"
            alt="amazon logo"
          />
          <div style={{ display: "flex" }}>
            <div>
              <div>Hello, {user?.name}</div>
              <Button
                onClick={logoutHandler}
                sx={{ padding: 0, marginRight: "16px" }}
                color="inherit"
              >
                Logout
              </Button>
            </div>
            <Button onClick={() => navigate("/cart")}>
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartOutlined fontSize="large" />
              </Badge>
              <span>cart</span>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
