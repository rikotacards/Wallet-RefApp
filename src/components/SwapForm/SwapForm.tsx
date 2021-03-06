import React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Card, FormControl, Typography, Link } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';


interface SwapFormProps {
  ticker: string
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left'
  },
  helpMessage: {
    margin: theme.spacing(1, 0, 1, 0), 
    background: theme.palette.grey[200]
  },
  recipient: {
    marginBottom: theme.spacing(1)
  },
  recipientTextField: {
    marginBottom: 0,
    marginTop: theme.spacing(1)
  },
  swapAssetContainer: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0.5),
  },
  textFieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  directionContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(1),
    alignItems: 'center'
  },
  inboundArrow: {
    color: 'green'
  },
  outboundArrow: {
    color: 'red'
  }
}))



export const SwapForm: React.FC<SwapFormProps> = ({ ticker }) => {

  const classes = useStyles();
  return (
    <>
      <Box display='flex'>
        <Typography color='text.secondary' variant='body2' marginRight={1} gutterBottom>
          Swapping
        </Typography>
        <Typography color='primary' variant='body2' gutterBottom>
          {ticker}
        </Typography>
      </Box>

      <FormControl className={classes.root}>
        <Box className={classes.recipient}>
          <TextField
            autoFocus
            id="recipient"
            label="Recipient"
            type="text"
            fullWidth
            variant="outlined"
            size='small'
            className={classes.recipientTextField}
          />
          <Typography color='text.secondary' variant='caption'>
            Specify who you want to swap with
        </Typography>
        </Box>
        <Card className={classes.swapAssetContainer} variant='outlined'>
          <Box display='flex' flexDirection='column' justifyContent='center'>
            <Box className={classes.directionContainer}>
              <Typography sx={{marginRight: 1}} color='text.secondary' variant='caption'>
                Swapping Out
              </Typography>
              <EastIcon className={classes.outboundArrow} />
            </Box>
            <Box  display='flex' flexDirection='row'>
            <Box className={classes.textFieldContainer} mr={0.5}>
              <TextField
                margin="dense"
                id="ticker"
                label={ticker}
                type="text"
                disabled
                variant="outlined"
                size='small'
              />
              <Typography color='text.secondary' variant='caption'>
                Your selected asset
            </Typography>
            </Box>
            <Box className={classes.textFieldContainer}>
              <TextField
                margin="dense"
                id="quantity"
                label="quantity"
                type="text"
                variant="outlined"
                size='small'
              />
              <Typography color='text.secondary' variant='caption'>
                Specify your amount
            </Typography>
            </Box>
            </Box>
          </Box>
        </Card>
        <Card className={classes.swapAssetContainer} variant='outlined'>
          <Box display='flex' flexDirection='column' justifyContent='center'>
            <Box className={classes.directionContainer}>
            <WestIcon className={classes.inboundArrow}/>
              <Typography sx={{marginLeft: 1}} color='text.secondary' variant='caption'>
                Swapping In
              </Typography>
            </Box>
            <Box  display='flex' flexDirection='row'>
            <Box className={classes.textFieldContainer} mr={0.5}>
              <TextField
                margin="dense"
                id="ticker"
                label="ticker"
                type="text"
                variant="outlined"
                size='small'
              />
              <Typography color='text.secondary' variant='caption'>
                Your selected asset
            </Typography>
            </Box>
            <Box className={classes.textFieldContainer}>
              <TextField
                margin="dense"
                id="quantity"
                label="quantity"
                type="text"
                variant="outlined"
                size='small'
              />
              <Typography color='text.secondary' variant='caption'>
                Specify your amount
            </Typography>
            </Box>
            </Box>
          </Box>
        </Card>
        
        <Card elevation={0} variant='outlined' className={classes.helpMessage}>
          <Typography color='text.primary' variant='body2' p={1}>
            You will be proposing to swap your assets for the users assets. Once the recipient accepts, the assets will atomocailly swap ownership. See how to create atomic swaps using Daml <Link href={'#'}>here</Link>
        </Typography>
        </Card>
        <LoadingButton
          endIcon={<SwapHorizIcon/>}
          loading={false}
          fullWidth
          loadingPosition="end"
          variant="outlined"
          sx={{
            marginBottom: 0.5
          }}
        >
          Request Swap
      </LoadingButton>
      </FormControl>
    </>
  );
}
