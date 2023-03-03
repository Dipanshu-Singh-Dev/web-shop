import { Grid } from "@mui/material";
import React from "react";
import Product from "./Product/Product";
import styles from "./Products.module.css";
import CircularProgress from "@mui/material/CircularProgress";
const Products = ({ products, onAddToCart }) => {
  console.log(products);
  let res =
    products.length !== 0 ? (
      <main className={styles.Container}>
        <Grid container justifyContent="center" spacing={4}>
          {products.map((elem) => {
            let {
              id,
              checkout_url: { checkout: checkoutUrl },
              description,
              image: { url: imageUrl },
              price: { formatted_with_symbol: formattedPrice },
              name,
            } = elem;
            let product = {
              checkoutUrl,
              description,
              imageUrl,
              formattedPrice,
              name,
              id,
            };
            return (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product elem={product} onAddToCart={onAddToCart} />
              </Grid>
            );
          })}
        </Grid>
      </main>
    ) : (
      <CircularProgress className={styles.loading} />
    );
  return res;
};

export default Products;
