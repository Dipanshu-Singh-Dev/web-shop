import React from "react";
import { Grid, Select, MenuItem } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
const CustomSelectField = ({
  name,
  label,
  items = ["Please select a country"],
}) => {
  console.log(items);
  const { control } = useFormContext();
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Controller
          control={control}
          name={name}
          render={({ field }) => (
            <Select
              fullWidth
              labelId={label}
              id={name}
              value={0}
              label={label}
              onChange=""
            >
              <MenuItem>{0}</MenuItem>
            </Select>
          )}
        ></Controller>
      </Grid>
    </>
  );
};

export default CustomSelectField;
