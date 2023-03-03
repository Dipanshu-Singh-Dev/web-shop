import React from "react";
import styles from "./CartPage.module.css";
import { ProgressBar } from "react-loader-spinner";
import { Container, Typography, Button, Grid } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
const CartPage = ({ cart: { subtotal, line_items: lineItems } }) => {
  const isEmpty = !lineItems?.length;
  const EmptyCart = (
    <Typography variant="subtitle1">Nothing to see here.</Typography>
  );

  const FilledCart = (
    <>
      <Grid container spacing={3}>
        {lineItems?.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <div>{item.name}</div>
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
      {lineItems ? (
        <div className={styles.root}>
          <Typography gutterBottom className={styles.title} variant="h3">
            Your Shopping Cart
          </Typography>
          {isEmpty ? EmptyCart : FilledCart}
        </div>
      ) : (
        <CircularProgress className={styles.loading} />
      )}
    </Container>
  );
};

export default CartPage;
