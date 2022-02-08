import React from 'react';
import { AssetRow } from '../components/AssetRow/AssetRow';
import { tempState } from '../tempState/tempState';


export const OwnedByMeTab: React.FC = () => {
  return (
      <>
      {tempState.assetAccounts.map(({owner, issuer, quantity,ticker,}, i) =>    <AssetRow key={ticker+i} owner={owner} issuer={issuer} ticker={ticker} quantity={quantity} isIssuer />
)}
        <AssetRow isFungible isAirdroppable isShareable owner={'me'} issuer={'Bernhard'} ticker={'BTOKEN'} quantity={800} isIssuer />
        <AssetRow owner={'me'} issuer ={'Alex'} ticker={'ATOKEN'} quantity={100000} />
      </>
  )
}