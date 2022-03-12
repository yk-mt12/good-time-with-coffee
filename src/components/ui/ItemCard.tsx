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
    <Card  sx={{  maxWidth: 345, pt: 1, m: "0 auto" }} >
      <CardContent>
        <Typography sx={{ fontSize: 25 }} component='div'>
          Beans: {beans}
        </Typography>
      </CardContent>
    </Card>
  );
}
)