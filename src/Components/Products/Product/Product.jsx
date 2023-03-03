import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton, CardMedia } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styles from "./styles.module.css";
const Product = ({ elem }) => {
  return (
    <Card className="styles.root">
      <CardMedia className={styles.media} image={elem.img} title={elem.name} />
      <CardContent>
        <div className={styles.cardContent} gutterBottom>
          <Typography variant="h5" gutterBottom>
            {elem.name}
          </Typography>
          <Typography variant="h5">{elem.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {elem.description}
        </Typography>
        <CardActions disableSpacing className={styles.cardActions}>
          <IconButton aria-label="Add to Cart">
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Product;
