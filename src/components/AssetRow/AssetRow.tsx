import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { PopUp } from '../PopUp/PopUp';

interface AssetRowProps {
  ticker?: string;
  quantity?: number;
}

export const AssetRow: React.FC<AssetRowProps> = ({ticker,quantity}) => {
  const theme = useTheme()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <>
    <Card sx={{ minWidth: 275,marginBottom: theme.spacing(1), display: 'flex', alignContent: 'center' }}>
      <CardContent sx={{display: 'flex'}}>
        <Typography sx={{ fontSize: 14, marginRight: theme.spacing(1) }} color="text.secondary" >
          {quantity}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
          {ticker}
        </Typography>
      </CardContent>
      <CardActions sx={{marginLeft: 'auto'}}>
        <Button variant='outlined' size="small" onClick={handleOpen}>Send</Button>
        <Button variant='outlined' size="small">Swap</Button>
        <Button variant='outlined' size="small">Invite</Button>
        <Button variant='outlined' size="small">Details</Button>
      </CardActions>
    </Card>
    <PopUp isOpen={isOpen} handleClose={handleClose}/>
    </>
  );
}
