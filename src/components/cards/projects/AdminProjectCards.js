import React, { useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from 'store/project/actions';
import { Grid, Stack } from '../../../../node_modules/@mui/material/index';
import MainCard from 'components/MainCard';
// import { Grid } from '../../../../node_modules/@mui/material/index';

function AdminProjectCards() {
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state?.projects);
  console.log('project list', project);
  useEffect(() => {
    dispatch(getProjects());
  }, []);
  return (
    <>
      {project?.results?.map((result, index) => (
        <Grid item xs={12} sm={6} lg={2} key={index}>
          <MainCard contentSX={{ p: 2.25 }}>
            <Stack spacing={0.5}>
              <Grid container alignItems="center">
                <Grid item>
                  <Typography variant="h4">{result.title}</Typography>
                </Grid>
              </Grid>
              <Typography>{result.status}</Typography>
            </Stack>
          </MainCard>
        </Grid>
      ))}
    </>
  );
}

export default AdminProjectCards;
