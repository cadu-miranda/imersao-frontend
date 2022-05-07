import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, IconButton } from '@mui/material';
import { useCart } from '../hooks/useCart';

CartControl.propTypes = {
  product: PropTypes.object
};

export default function CartControl({ product }) {
  const { cart, addProduct, removeProduct, decrementProduct } = useCart();

  console.log('cart', cart[product?.id]);

  const total = Object.values(cart).reduce((t, index) => t + index, 0);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '214px',
        height: '70px',
        border: '1px solid #d8d8d8',
        borderRadius: '12px'
      }}
    >
      <IconButton
        onClick={() =>
          cart[product?.id] - 1 === 0 ? removeProduct(product?.id) : decrementProduct(product?.id)
        }
        bgColor="orange"
        textColor="#fff"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        -
      </IconButton>
      <Typography color="#f00" fontWeight="bolder" fontSize={20}>
        {cart[product?.id] === undefined ? 0 : cart[product?.id]}
      </Typography>
      <IconButton
        onClick={() => addProduct(product?.id)}
        bgColor="orange"
        textColor="#fff"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        +
      </IconButton>
    </Box>
  );
}
