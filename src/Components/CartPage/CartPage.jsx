import React from "react";
import styles from "./CartPage.module.css";
import { ProgressBar } from "react-loader-spinner";
import CartItem from "./CartItem/CartItem";
import { Container, Card, Typography, Button, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
const CartPage = ({ cart, handleUpdateCart, onEmptyCart }) => {
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
      <Grid
        className={styles.grid}
        container
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
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
            variant="outlined"
            color="primary"
            onClick={() => onEmptyCart()}
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
      <div className={styles.root}>{isEmpty ? EmptyCart : FilledCart}</div>
    </Container>
  );
};

export default CartPage;
