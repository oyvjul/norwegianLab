import { Box, Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import { Person } from "../../utils/types";
import { personValidationSchema } from "./utils/personValidationSchema";

const PersonForm = () => {
  const {
    values,
    handleBlur,
    handleSubmit,
    handleChange,
    touched,
    errors,
    validateForm,
    isValid,
  } = useFormik<Person>({
    initialValues: {
      fullName: "",
      email: "",
      street: "",
      city: "",
      postalCode: "",
      country: "",
    },
    validationSchema: personValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    validateForm();
  }, [validateForm]);

  return (
    <Box width={500} ml={4}>
      <h2>Skjema</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={7} sm={10}>
            <TextField
              label="Fullt navn"
              name="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.fullName && Boolean(errors.fullName)}
              helperText={touched.fullName && errors.fullName}
              fullWidth
            />
          </Grid>
          <Grid item xs={7} sm={10}>
            <TextField
              label="E-postadresse"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              fullWidth
            />
          </Grid>
          <Grid item xs={7} sm={10}>
            <TextField
              label="Gate"
              name="street"
              value={values.street}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.street && Boolean(errors.street)}
              helperText={touched.street && errors.street}
              fullWidth
            />
          </Grid>
          <Grid item xs={7} sm={6}>
            <TextField
              label="By"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.city && Boolean(errors.city)}
              helperText={touched.city && errors.city}
              fullWidth
            />
          </Grid>
          <Grid item xs={7} sm={4}>
            <TextField
              label="Postnummer"
              name="postalCode"
              value={values.postalCode}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.postalCode && Boolean(errors.postalCode)}
              helperText={touched.postalCode && errors.postalCode}
              fullWidth
            />
          </Grid>
          <Grid item xs={7} sm={10}>
            <TextField
              label="Land"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.country && Boolean(errors.country)}
              helperText={touched.country && errors.country}
              fullWidth
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!isValid}
        >
          Send
        </Button>
      </form>
    </Box>
  );
};

export default PersonForm;
