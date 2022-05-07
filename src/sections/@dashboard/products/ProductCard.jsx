import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Box, Card, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCart } from '../../../hooks/useCart';
import { fCurrency } from '../../../utils/formatNumber';

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const ShopButton = styled(Button)({
  backgroundColor: 'orange',
  color: '#fff',

  '&:hover': {
    backgroundColor: '#fff',
    color: 'orange',
    border: '1px solid orange'
  }
});

ShopProductCard.propTypes = {
  product: PropTypes.object
};

export default function ShopProductCard({ product }) {
  const navigate = useNavigate();

  const { addProduct } = useCart();

  const [selectedProduct, setSelectedProduct] = useState({});

  const { name, cover, price } = product;

  const handleSelectProductCard = (productObj) => {
    setSelectedProduct(productObj);
    localStorage.setItem('product', JSON.stringify(productObj));
    navigate('/produto');
  };

  return (
    <Card
      onClick={() => handleSelectProductCard(product)}
      sx={{
        '&:hover': {
          position: 'relative',
          top: '-4px',
          cursor: 'pointer',
          boxShadow: '1px 2px 14px 10px #c4c4c4'
        }
      }}
    >
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <ProductImgStyle alt={name} src={cover} />
      </Box>
      <Stack spacing={2} sx={{ p: 3 }}>
        <Typography variant="subtitle2" noWrap>
          {name}
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">{fCurrency(price)}</Typography>
          <ShopButton
            onClick={() => {
              addProduct(product?.id);
            }}
          >
            Comprar
          </ShopButton>
        </Stack>
      </Stack>
    </Card>
  );
}
