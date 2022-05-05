import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { Container, Stack, TextField, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { ProductCartWidget } from '../sections/@dashboard/products';
//
import ProductInfo from '../sections/@dashboard/products/ProductInfo';

// ----------------------------------------------------------------------

export default function SpecificProduct() {
  const product = JSON.parse(localStorage.getItem('product'));

  return (
    <Page title="Imersão | Produtos">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Home / Produtos
        </Typography>

        <ProductInfo product={product} />
        <ProductCartWidget />
      </Container>
    </Page>
  );
}
