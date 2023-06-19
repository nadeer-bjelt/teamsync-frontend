import { Grid, Typography } from '@mui/material';

import AdminDepartmentsCards from 'components/cards/departments/AdminDepartmentsCards';

const AdminDepartments = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Department</Typography>
      </Grid>
      <AdminDepartmentsCards />
    </Grid>
  );
};

export default AdminDepartments;
