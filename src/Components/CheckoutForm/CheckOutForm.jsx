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

const CheckOutForm = () => {
  const [currStep, setCurrStep] = useState(1);
  const steps = ["Shipping Address", "Payment details"];
  const stepForms = [<AddressForm />, <PaymentForm />, <Confirmation />];
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
