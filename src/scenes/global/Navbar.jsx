import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  SearchOutlined,
  MenuOutlined,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box className="navbar">
      <Box className="logo-icon">
        <Box
          onClick={() => navigate("/")}
          className="logo"
          color={shades.secondary[500]}
        >
          ECOMMERCE
        </Box>
        <Box className="navbar-icon">
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>

          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>

          <IconButton sx={{ color: "black" }}>
            <ShoppingBagOutlined />
          </IconButton>

          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
