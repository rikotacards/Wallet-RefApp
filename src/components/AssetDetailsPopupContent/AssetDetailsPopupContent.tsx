import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AppBar, Button } from '@mui/material';
import { AssetDetails } from '../AssetDetails/AssetDetails';
import ClearIcon from '@mui/icons-material/Clear';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export interface AssetDetailsPopupContentProps {
  handleClose: () => void;
  ticker: string;
  issuer: string;
  owner: string;
  quantity: number;
  isShareable: boolean;
  isFungible: boolean;
  isAirdroppable: boolean;
}

export const AssetDetailsPopupContent: React.FC<AssetDetailsPopupContentProps> = ({ ticker, handleClose, owner, issuer, quantity, isShareable, isFungible, isAirdroppable }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '450px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <AppBar position="static">
          <Tabs value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab label="Details" {...a11yProps(0)} />
            {issuer === 'me' && <Tab label="More" {...a11yProps(1)} />}
          </Tabs>
        </AppBar>
      </Box>
      <TabPanel value={value} index={0}>
        <AssetDetails
          issuer={issuer}
          owner={owner}
          quantity={quantity}
          isFungible={isFungible}
          isAirdroppable={isAirdroppable}
          isShareable={isShareable}
          ticker={ticker}

        />
        <Button
          variant='outlined'
          fullWidth
          size='small'
          onClick={handleClose}
        >
          Close
          </Button>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Button variant='outlined'>
          <ClearIcon />Delete Asset Account
          </Button>
      </TabPanel>
    </Box>
  );
}
