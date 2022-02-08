import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { Link } from "react-router-dom";

import ListItemText from '@mui/material/ListItemText';
import { Divider, ListItemButton, Typography } from '@mui/material';

const drawerWidth: number = 200;

interface MenuItem {
  label: string,
  path: string
}
const menuItems: MenuItem[] = [
  { label: 'My Active Accounts', path: '/' },
  { label: 'Pending Activities', path: '/pending' }]

export const SideMenu: React.FC<unknown> = () => {
  const [selected, setSelected] = React.useState<number>(0);

  const onClick = (index: number) => {
    setSelected(index)
  }
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton onClick={() => onClick(index)} selected={selected === index} key={index} component={Link} to={item.path}>
              <ListItemText>
                {item.label}
              </ListItemText>
            </ListItemButton>

          ))}

        </List>
      </Box>
      <Box marginTop={'auto'} marginBottom={4}>
        <Divider />
        <Box padding={1}>
        <Typography>
          Documentation
        </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
