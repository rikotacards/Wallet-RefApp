import React from 'react';
import { AssetRow } from '../components/AssetRow/AssetRow';
import { ContractsContext } from '../providers/ContractsProvider';
import { Prompt } from '../components/Prompts/Prompt';
import { Typography } from '@mui/material';


export const OwnedByMeTab: React.FC = () => {
  const contractContext = React.useContext(ContractsContext)
  const state = contractContext.state
  return (
      <>
      <Prompt>
        <Typography color='text.primary' variant='body2'>
          Assets that you own will be shown here. If there is an asset that you would like to own, you will need to contact an existing owner and have them share the asset account with you. 
        </Typography>
      </Prompt>
      {Object.values(state.assetAccounts).map(({owner, issuer, quantity,ticker,}, i) =>    <AssetRow key={ticker+i} owner={owner} issuer={issuer} ticker={ticker} quantity={quantity} isIssuer />
)}
        <AssetRow isFungible isAirdroppable isShareable owner={'me'} issuer={'Digital Asset'} ticker={'DAMLCOIN'} quantity={800} isIssuer />
        <AssetRow owner={'me'} issuer ={'Alex'} ticker={'ATOKEN'} quantity={100000} />
        <AssetRow owner={'me'} issuer ={'THEWEEKEND'} ticker={'TICKET'} quantity={1} />

      </>
  )
}