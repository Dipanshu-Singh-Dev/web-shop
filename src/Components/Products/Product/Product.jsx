import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton, CardMedia } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styles from "./styles.module.css";

const Product = ({ elem, onAddToCart }) => {
  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles.media}
        image={elem.imageUrl}
        title={elem.name}
      />
      <CardContent>
        <div className={styles.cardContent}>
          <Typography variant="h5" gutterBottom>
            {elem.name}
          </Typography>
          <Typography variant="h6">{elem.formattedPrice}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {elem.description.substring(3, elem.description.length - 4)}
        </Typography>
        <CardActions disableSpacing className={styles.cardActions}>
          <IconButton
            onClick={() => {
              onAddToCart(elem.id);
            }}
            aria-label="Add to Cart"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Product;
