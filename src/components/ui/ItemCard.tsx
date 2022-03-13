import * as React from 'react';

type Props = {
  beans: number;
}

export const ItemCard: React.VFC<Props> = React.memo((props)=> {
  const { beans } = props;
  return (
    <div style={{fontSize: "18px"}}>
      <p>coffee ratio = 1:16</p>
      <p>Beans: <span style={{color: "primary"}}>{beans}</span></p>
    </div>

  );
}
)