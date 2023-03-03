import { Grid } from "@mui/material";
import React from "react";
import Product from "./Product/Product";
import styles from "./Products.module.css";

const products = [
  {
    id: 1,
    name: "shoes",
    description: "Running shoes",
    price: "₹500",
    img: "https://awesomescreenshot.s3.amazonaws.com/image/4132656/37645997-515784effc4e474db82934e964241b82.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20230303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230303T112545Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=df1db1edb3b77500ee63fe97f242994d993b8ff1e5ed127935e3ced9430dc901",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple Macbook",
    price: "₹1,00,000",
    img: "https://awesomescreenshot.s3.amazonaws.com/image/4132656/37646052-26b61eff9a595fa8a353ff4aae88f8d9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJSCJQ2NM3XLFPVKA%2F20230303%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230303T112521Z&X-Amz-Expires=28800&X-Amz-SignedHeaders=host&X-Amz-Signature=f421202676ad7588088f27913aa122df153c34b66a41dd7633b6b9e2b8693351",
  },
];
const Products = () => {
  return (
    <main className={styles.Container}>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((elem) => (
          <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
            <Product elem={elem} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
