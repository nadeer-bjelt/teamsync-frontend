import React from 'react';
import AdminProjectCards from 'components/cards/projects/AdminProjectCards';
import { Grid, Typography } from '../../../../node_modules/@mui/material/index';
// import Typography from 'themes/overrides/Typography';

function index() {
  return (
    <Grid display="flex" container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography>projects</Typography>
      </Grid>
      <AdminProjectCards></AdminProjectCards>
    </Grid>
  );
}

export default index;
