import { Grid } from "@mui/material";
import React from "react";
import Product from "./Product/Product";
import styles from "./Products.module.css";

const Products = ({ products }) => {
  return (
    <main className={styles.Container}>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((elem) => {
          let {
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
          };
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product elem={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
