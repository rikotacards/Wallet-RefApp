import {  Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';
import { AssetRow } from '../components/AssetRow/AssetRow';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { PendingRow } from '../components/PendingRow/PendingRow';


export const ActiveAssetsTab: React.FC = () => {
  return (
      <>
        <AssetRow quantity={100} ticker={'MAXCOIN'}/>
        <AssetRow quantity={10000} ticker={'ALEXCOIN'}/>
        <AssetRow quantity={5} ticker={'BCOIN'}/>
        <PendingRow quantity={100000} ticker={'PENDING'}/>
      </>
  )
}