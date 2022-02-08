import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AppBar, Button } from '@mui/material';
import { InviteNewAssetOwnerForm } from '../InviteNewAssetOwnerForm/InviteNewAssetOwnerForm';
import { InviteNewAssetOwnerRecipients } from '../InviteNewAssetOwnerRecipients/InviteNewAssetOwnerRecipients';

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

export interface InviteNewAssetOwnerPopupContentProps {
  handleClose: () => void
}

export const InviteNewAssetOwnerPopupContent: React.FC<InviteNewAssetOwnerPopupContentProps> = ({handleClose}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <AppBar position="static">
          <Tabs value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab label="Invite New Asset Owner" {...a11yProps(0)} />
            <Tab label="Recipients" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </Box>
        <TabPanel value={value} index={0}>
        <InviteNewAssetOwnerForm/>
        <Button
        variant='outlined'
        fullWidth
        size='small'
        onClick={handleClose}
        >
          Cancel
        </Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <InviteNewAssetOwnerRecipients/>
      </TabPanel>
    </Box>
  );
}
