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
          You have no active accounts or assets. You can either click "CREATE ASSET ACCOUNT" above, or ask someone in the DA Chat to invite you as a new asset owner.
        </Typography>
      </CardContent>
    </Card>
  );
}
