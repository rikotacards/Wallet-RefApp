import TextField from '@mui/material/TextField';
import { Button, Card, CircularProgress, FormControl, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { tempState } from '../../tempState/tempState';
import { LoadingButton } from '@mui/lab';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(1, 0, 1, 0)
  }
}))

interface IssueToSelfFormProps {
  ticker: string;
  handleClose: () => void;
}




export const IssueToSelfForm: React.FC<IssueToSelfFormProps> = ({ ticker, handleClose }) => {
  const classes = useStyles()
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const [quantity, setQuantity] = React.useState<number>(0);

  const onMint = () => {

    const asset = tempState.assetAccounts.find((x) => x.ticker === ticker)
    if (asset) {
      asset.quantity = quantity
      setLoading(true);
    }
    setTimeout(() => {
      handleClose()
      setLoading(false)
    }, 2000)

  }
  const onChange = (e: React.BaseSyntheticEvent) => {
    setQuantity(e.target.value);
  }

  return (
    <>
      <FormControl fullWidth>
        <TextField
          autoFocus
          margin="dense"
          id="symbol"
          label={`${ticker}`}
          type="text"
          fullWidth
          variant="outlined"
          disabled
          size='small'
        />
        <TextField
          margin="none"
          id="quantity"
          label="Quantity"
          type="number"
          fullWidth
          variant="outlined"
          size='small'
          onChange={(e) => { onChange(e) }}
        />
        <Typography variant='caption' color='text.secondary'>
          Specify the quanity you would like to mint to wallet.
        </Typography>
      </FormControl>
      <Card className={classes.root} elevation={0} variant='outlined'>
        <Typography color='text.secondary' variant='body2' p={1}>
          The assets will be created directly in your wallet with the attributes you defined when creating the asset account.

        </Typography>
      </Card>

      <LoadingButton
        loading={isLoading}
        fullWidth
        loadingPosition="end"
        variant="outlined"
        onClick={onMint}
        sx={{
          marginBottom: 0.5
        }}
      >
        Mint
      </LoadingButton>
      

    </>
  );
}
