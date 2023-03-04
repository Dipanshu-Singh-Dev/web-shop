import React from "react";
import styles from "./CartItem.module.css";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const CartItem = ({ item, handleUpdateCart }) => {
  return (
    <div className={styles.Container}>
      <Card>
        <CardMedia component="img" height="200" image={item.image.url} />
        <CardContent>
          <Typography variant="h5">{item.name}</Typography>
        </CardContent>
        <CardActions className={styles.actions}>
          <IconButton
            onClick={() => handleUpdateCart(item.id, item.quantity - 1)}
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="h5">{item.quantity}</Typography>
          <IconButton
            onClick={() => handleUpdateCart(item.id, item.quantity + 1)}
          >
            <AddIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default CartItem;
