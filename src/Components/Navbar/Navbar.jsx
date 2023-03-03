import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import styles from "./Navbar.module.css";
import logo from "../../door.png";
const Navbar = () => {
  return (
    <>
      <AppBar className={styles.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={styles.title} color="inherit">
            <img
              src={logo}
              alt="Discount Dugeon"
              height="25px"
              className={styles.image}
            />
            Discount Dungeon
          </Typography>
          <div className={styles.grow} />
          <div>
            <IconButton aria-label="Show Cart Items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
