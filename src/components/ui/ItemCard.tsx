import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

type Props = {
  beans: number;
}

export const ItemCard: React.VFC<Props> = React.memo((props)=> {
  const { beans } = props;
  return (
    <div style={{fontSize: "18px"}}>
      <p>Beans: <span style={{color: "primary"}}>{beans}</span></p>
    </div>

  );
}
)