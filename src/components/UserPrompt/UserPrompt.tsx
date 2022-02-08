import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: `${theme.palette.grey[100]}`, 
    display: 'flex', 
    alignItems: 'center',
    marginTop: theme.spacing(1)
  }
}))

export const UserPrompt: React.FC = () => {
  const classes = useStyles();
  return (
    <Card sx={{ minWidth: 275 }} className={classes.root}>
      <CardContent>
        <Typography variant='body2'  color="text.primary">
          You have not issued any assets. In order to issue assets, you must first create the asset account (the account will hold the assets). Click the below "Create Asset Account" to get started.
        </Typography>
      </CardContent>
    </Card>
  );
}
