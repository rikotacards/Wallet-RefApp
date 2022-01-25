import { Box, CssBaseline } from '@mui/material';
import React from 'react';
import { SideMenu } from './components/SideMenu/SideMenu';
import { TopAppBar } from './components/TopAppBar/TopAppBar';
import { ActiveAssetsPage } from './pages/ActiveAssetsPage';
import { HomePage } from './pages/HomePage';

export const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <TopAppBar />
      <SideMenu />
      <ActiveAssetsPage />
    </Box>
  );
}

