import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Card, Link, Typography, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { fCurrency } from '../../../utils/formatNumber';

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

const ShopButton = styled(Button)({
  backgroundColor: '#f00',
  color: '#fff',

  '&:hover': {
    backgroundColor: '#fff',
    color: '#f00',
    border: '1px solid #f00'
  }
});

ShopProductCard.propTypes = {
  product: PropTypes.object
};

export default function ShopProductCard({ product }) {
  const { name, cover, price } = product;

  return (
    <Card
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
          <ShopButton>Comprar</ShopButton>
        </Stack>
      </Stack>
    </Card>
  );
}
