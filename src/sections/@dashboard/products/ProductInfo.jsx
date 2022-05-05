import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './ProductCard';

// ----------------------------------------------------------------------

ProductInfo.propTypes = {
  product: PropTypes.object
};

export default function ProductInfo({ product, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      <Grid key={product.id} item xs={12} sm={6} md={3}>
        <ShopProductCard product={product} />
      </Grid>
    </Grid>
  );
}
