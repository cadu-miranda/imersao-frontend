import { useState } from 'react';
import { Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCart } from '../../../hooks/useCart';
import Iconify from '../../../components/Iconify';
import ShoppingCart from '../../../components/ShoppingCart/ShoppingCart';

const RootStyle = styled('div')(({ theme }) => ({
  zIndex: 999,
  right: 0,
  maxWidth: 50,
  display: 'flex',
  cursor: 'pointer',
  position: 'fixed',
  alignItems: 'center',
  top: theme.spacing(12),
  height: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(1.25),
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: Number(theme.shape.borderRadius) * 2,
  borderBottomLeftRadius: Number(theme.shape.borderRadius) * 2,
  transition: theme.transitions.create('opacity')
}));

export default function CartWidget() {
  const { cart } = useCart();

  const [isOpenCheckout, setIsOpenCheckout] = useState(false);

  const total = Object.values(cart).reduce((t, index) => t + index, 0);

  return (
    <RootStyle>
      <Badge
        onClick={() => setIsOpenCheckout(!isOpenCheckout)}
        showZero
        badgeContent={total}
        color="error"
        max={99}
      >
        <Iconify icon="eva:shopping-cart-fill" width={24} height={24} />
      </Badge>
      {isOpenCheckout ? <ShoppingCart setIsOpenCheckout={setIsOpenCheckout} /> : false}
    </RootStyle>
  );
}
