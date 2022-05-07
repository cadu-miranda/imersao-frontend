import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  TextField,
  styled
} from '@mui/material';
import CartControl from '../../../components/CartControl';
import { formatCEP } from '../../../utils/formatCep';

ProductInfo.propTypes = {
  product: PropTypes.object
};

export default function ProductInfo({ product }) {
  const [tamanho, setTamanho] = useState('');
  const [cep, setCep] = useState('');

  const handleChange = (event) => {
    setTamanho(event.target.value);
  };

  const CustomButton = styled(Button)(({ theme, bgColor, textColor }) => ({
    backgroundColor: bgColor,
    color: textColor,
    width: '112px',
    height: '53px',
    border: `1px solid ${textColor}`,
    borderRadius: '7px',

    '&:hover': {
      backgroundColor: textColor,
      color: bgColor,
      opacity: 1,
      border: `1px solid ${bgColor}`
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: 12.5
    }
  }));

  return (
    <Box
      key={product.id}
      sx={(theme) => ({
        display: 'flex',
        gap: 4,
        [theme.breakpoints.down('sm')]: { display: 'flex', flexDirection: 'column' }
      })}
    >
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
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography sx={{ fontSize: 26, fontWeight: 'bolder', color: '#000' }}>
            {product?.name}
          </Typography>
          <Typography sx={{ fontSize: 32, fontWeight: 'bolder', color: '#f00' }}>
            R${product?.price}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '110px',
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
            display: 'flex',
            flexDirection: 'column',
            minHeight: '150px',
            minWidth: '40px',
            justifyContent: 'center'
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{ '&.Mui-focused': { color: '#000' } }}>
              Tamanho
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tamanho}
              label="Tamanho"
              onChange={handleChange}
              sx={(theme) => ({
                width: '40%',
                borderRadius: 0,

                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#000',
                  borderRadius: 0
                },

                [theme.breakpoints.down('sm')]: {
                  width: '100%'
                }
              })}
            >
              <MenuItem value="pp">PP</MenuItem>
              <MenuItem value="p">P</MenuItem>
              <MenuItem value="m">M</MenuItem>
              <MenuItem value="g">G</MenuItem>
              <MenuItem value="gg">GG</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={(theme) => ({
            display: 'flex',
            gap: 2
          })}
        >
          <CustomButton bgColor="#fff" textColor="#000">
            Branco
          </CustomButton>
          <CustomButton bgColor="#000" textColor="#fff">
            Preto
          </CustomButton>
          <CustomButton bgColor="#00f" textColor="#fff">
            Azul
          </CustomButton>
          <CustomButton bgColor="#f00" textColor="#fff">
            Vermelho
          </CustomButton>
        </Box>
        <Box
          mt={51 / 8}
          sx={(theme) => ({
            display: 'flex',
            gap: 13.65 / 8
          })}
        >
          <TextField
            onChange={(e) => setCep(e.target.value)}
            value={formatCEP(cep)}
            id="outlined-basic"
            label="CALCULE SEU FRETE"
            variant="outlined"
            sx={{
              width: '400px',

              '& label': {
                width: '100%',
                textAlign: 'center'
              },

              '&.Mui-focused': {
                transformOrigin: 'center'
              },

              '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#000'
              },
              '.MuiInputLabel-root': {
                color: '#000 !important'
              }
            }}
          />
          <CustomButton bgColor="#000" textColor="#fff">
            CALCULAR
          </CustomButton>
        </Box>
        <Box
          mt={51 / 8}
          sx={(theme) => ({
            display: 'flex',
            gap: 13.65 / 8
          })}
        >
          <CartControl product={product} />
          <CustomButton
            bgColor="orange"
            textColor="#fff"
            sx={{ width: '253px', height: '70px', textTransform: 'full-size-kana' }}
          >
            Adicionar ao carrinho
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
}
