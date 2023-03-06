import { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import CustomTextField from "../CustomTextField";
import { useForm, FormProvider } from "react-hook-form";
import CustomSelectField from "../CustomSelectField";
import { commerce } from "../../../lib/commerce";

const AddressForm = ({ token }) => {
  const methods = useForm();
  const [shipping, setShipping] = useState({
    countries: [],
    currCountry: "",
    subdivisions: [],
    currSubdivision: "",
    options: [],
    currOption: "",
  });
  useEffect(() => {
    const fetchShippingCountries = async () => {
      const { countries } = await commerce.services.localeListShippingCountries(
        token
      );
      console.log(countries);
      setShipping({ ...shipping, countries: countries });
    };
    if (token) fetchShippingCountries();
  }, [token]);
  return (
    <div>
      <Typography variant="h6" align="center" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={() => console.log("hello")}>
          <Grid container spacing={4}>
            <CustomTextField required name="firstName" label="First Name" />
            <CustomTextField required name="lastName" label="Last Name" />
            <CustomTextField required name="address" label="Address" />
            <CustomTextField required name="email" label="Email" />
            <CustomTextField required name="city" label="City" />
            <CustomTextField required name="zip" label="Postal Code" />
            <CustomSelectField
              name="country"
              label="Country"
              items={shipping.countries}
            />
            <CustomSelectField
              name="subdivision"
              label="Subdivision"
              items=""
            />
            <CustomSelectField
              name="shippingOptions"
              label="Shipping Options"
              items=""
            />
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddressForm;
