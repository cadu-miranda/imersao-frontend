import { Breadcrumbs, Container, Typography, Box, Link } from '@mui/material';
import Page from '../components/Page';
import { ProductCartWidget } from '../sections/@dashboard/products';
import ProductInfo from '../sections/@dashboard/products/ProductInfo';

// ----------------------------------------------------------------------

export default function SpecificProduct() {
  const product = JSON.parse(localStorage.getItem('product'));

  return (
    <Page title="Imersão | Produtos">
      <Container>
        <Box mb={90 / 8}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/produtos">
              Produtos
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Categoria
            </Link>
            <Typography color="text.primary">{product?.name}</Typography>
          </Breadcrumbs>
        </Box>

        <ProductInfo product={product} />
        <ProductCartWidget />
      </Container>
    </Page>
  );
}
