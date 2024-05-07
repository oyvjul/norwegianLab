import { Grid } from "@mui/material";

const NewsSection = () => {
  return (
    <Grid
      container
      columnSpacing={3}
      sx={{
        width: "90%",
        m: "auto",
      }}
    >
      <Grid item xs={12} sm={6}>
        <h2>Sub overskrift</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </Grid>
      <Grid item xs={12} sm={6}>
        <h2>Sub overskrift2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Grid>
    </Grid>
  );
};

export default NewsSection;
