import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
const CustomTextField = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField {...field} label={label} fullWidth required={required} />
        )}
      ></Controller>
    </Grid>
  );
};

export default CustomTextField;
