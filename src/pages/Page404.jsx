import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
// components
import { MotionContainer, varBounceIn } from '../components/animate';
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <RootStyle title="Oxil | Página não encontrada">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Desculpe. Página não encontrada!
              </Typography>
            </motion.div>
            <Typography sx={{ color: 'text.secondary' }}>
              Desculpe, nós não conseguimos achar a pagina que você está procurando. Talvez você
              tenha errado o endereço? Tenha certeza que este é o endereço correto.
            </Typography>

            <motion.div variants={varBounceIn}>
              <Box
                component="img"
                src="/static/illustrations/illustration_404.svg"
                sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
              />
            </motion.div>

            <Button
              to="/"
              size="large"
              variant="contained"
              component={RouterLink}
              sx={{
                backgroundColor: 'orange',
                boxShadow: 'none',
                borderRadius: 40,
                '&:hover': { backgroundColor: 'orange', opacity: 0.9 }
              }}
            >
              Voltar
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
