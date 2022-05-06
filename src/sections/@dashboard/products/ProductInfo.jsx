import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  Box,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button
} from '@mui/material';

ProductInfo.propTypes = {
  product: PropTypes.object
};

export default function ProductInfo({ product, ...other }) {
  const [tamanho, setTamanho] = useState('');

  const handleChange = (event) => {
    setTamanho(event.target.value);
  };

  return (
    <Grid container spacing={3} {...other} sx={{ border: '1px solid orange' }}>
      <Grid key={product.id} item sx={{ display: 'flex', gap: 4 }}>
        <Box
          component="img"
          src={product?.cover}
          sx={{
            minWidth: '300px',
            height: '300px',
            transition: '250ms',

            '&:hover': { transform: 'scale(1.15)', cursor: 'pointer' }
          }}
        />
        <Grid item>
          <Box sx={{ border: '1px solid red', display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: 26, fontWeight: 'bolder', color: '#000' }}>
              {product?.name}
            </Typography>
            <Typography sx={{ fontSize: 32, fontWeight: 'bolder', color: '#f00' }}>
              R${product?.price}
            </Typography>
          </Box>
          <Box
            sx={{
              border: '1px solid red',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '150px',
              minWidth: '40px',
              justifyContent: 'center'
            }}
          >
            <Typography sx={{ fontSize: 14, color: '#000' }}>
              A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim
              utilizado na produção gráfica para preencher os espaços de texto em publicações para
              testar e ajustar aspectos visuais antes de utilizar conteúdo real.
            </Typography>
          </Box>
          <Box
            sx={{
              border: '1px solid red',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '150px',
              minWidth: '40px',
              justifyContent: 'center'
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Tamanho</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tamanho}
                label="Tamanho"
                onChange={handleChange}
                sx={{
                  width: '40%'
                }}
              >
                <MenuItem value="pp">PP</MenuItem>
                <MenuItem value="p">P</MenuItem>
                <MenuItem value="m">M</MenuItem>
                <MenuItem value="g">G</MenuItem>
                <MenuItem value="gg">GG</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Button>Branco</Button>
            <Button>Preto</Button>
            <Button>Azul</Button>
            <Button>Vermelho</Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
