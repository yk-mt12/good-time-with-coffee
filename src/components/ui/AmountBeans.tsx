import { memo, VFC } from "react";

import { ItemCard } from './ItemCard'

type Props = {
  amount: number;
}

export const AmountBeans:VFC<Props> = memo((props) => {
  const { amount } = props;
  const beans = amount / 16;

  return (
    <ItemCard beans={beans} />
  )
})
