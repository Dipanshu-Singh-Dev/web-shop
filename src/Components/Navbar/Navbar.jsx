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
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./Navbar.module.css";
import logo from "../../door.png";

const Navbar = ({ items }) => {
  return (
    <>
      <AppBar className={styles.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={styles.title} color="inherit">
            <img
              onClick={() => window.location.assign("/")}
              src={logo}
              alt="Discount Dugeon"
              height="25px"
              className={styles.image}
            />
            Discount Dungeon
          </Typography>
          <div>
            <IconButton
              href="/cart"
              aria-label="Show Cart Items"
              color="inherit"
            >
              <Badge badgeContent={items} color="primary">
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
