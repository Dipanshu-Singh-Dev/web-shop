import React from "react";
import styles from "./CartPage.module.css";
import { ProgressBar } from "react-loader-spinner";
import CartItem from "./CartItem/CartItem";
import { Container, Typography, Button, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
const CartPage = ({ cart, handleUpdateCart }) => {
  if (!cart) {
    return <CircularProgress className={styles.loading} />;
  }
  const { subtotal, line_items: lineItems } = cart;
  const isEmpty = !lineItems.length;
  const EmptyCart = (
    <Typography variant="subtitle1">Nothing to see here.</Typography>
  );

  const FilledCart = (
    <>
      <Grid container spacing={3}>
        {lineItems?.map((item) => (
          <Grid item sm={12} md={6} lg={4} key={item.id}>
            <CartItem item={item} handleUpdateCart={handleUpdateCart} />
          </Grid>
        ))}
      </Grid>
      <div className={styles.footer}>
        <Typography variant="h4">
          Subtotal : {subtotal?.formatted_with_symbol}
        </Typography>
        <div className={styles.buttonsContainer}>
          <Button
            className={styles.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
          >
            Empty Cart
          </Button>
          <Button
            className={styles.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
  return (
    <Container>
      <div className={styles.root}>
        <Typography gutterBottom className={styles.title} variant="h3">
          Your Shopping Cart
        </Typography>
        {isEmpty ? EmptyCart : FilledCart}
      </div>
    </Container>
  );
};

export default CartPage;
