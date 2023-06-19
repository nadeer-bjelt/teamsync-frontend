import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDepartments } from 'store/department/actions';
import { Grid, Typography, Stack } from '@mui/material';
import MainCard from 'components/MainCard';

function AdminDepartmentsCards() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state?.department);
  console.log(userInfo);

  useEffect(() => {
    dispatch(getAllDepartments());
    console.log();
  }, []);

  return (
    <>
      {userInfo?.results?.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
          <MainCard contentSX={{ p: 2.25 }}>
            <Stack spacing={0.5}>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography variant="h4" color="inherit">
                    {data.name}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="h6">{data.name}</Typography>
            </Stack>
          </MainCard>
        </Grid>
      ))}
    </>
  );
}

export default AdminDepartmentsCards;
