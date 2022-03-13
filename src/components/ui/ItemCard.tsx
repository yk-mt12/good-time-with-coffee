import * as React from 'react';

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