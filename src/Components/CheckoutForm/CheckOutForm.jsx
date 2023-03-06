/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@mui/material";
import AddressForm from "./AddressForm/AddressForm";
import Confirmation from "./Confirmation/Confirmation";
import PaymentForm from "./PaymentForm/PaymentForm";
import styles from "./CheckoutForm.module.css";
import { commerce } from "../../lib/commerce";
const CheckOutForm = ({ cart }) => {
  // console.log(cart);
  const [currStep, setCurrStep] = useState(0);
  const [checkoutToken, setCheckOutToken] = useState(null);
  const steps = ["Shipping Address", "Payment details"];
  const stepForms = [
    <AddressForm token={checkoutToken} />,
    <PaymentForm />,
    <Confirmation />,
  ];
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        setCheckOutToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    if (cart) generateToken();
  }, []);
  return (
    <>
      <Paper className={styles.paper}>
        <Typography variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={currStep} className={styles.stepper}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {stepForms[currStep]}
      </Paper>
    </>
  );
};

export default CheckOutForm;
