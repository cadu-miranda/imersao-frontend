import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, IconButton } from '@mui/material';
import { useCart } from '../hooks/useCart';

CartControl.propTypes = {
  product: PropTypes.object
};

export default function CartControl({ product, setCounter, counter }) {
  const { cart } = useCart();

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
        disabled={counter === 0}
        onClick={() => setCounter(counter - 1)}
        bgColor="orange"
        textColor="#fff"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        -
      </IconButton>
      <Typography color="#f00" fontWeight="bolder" fontSize={20}>
        {counter}
      </Typography>
      <IconButton
        onClick={() => setCounter(counter + 1)}
        bgColor="orange"
        textColor="#fff"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        +
      </IconButton>
    </Box>
  );
}
