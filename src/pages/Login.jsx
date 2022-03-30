import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { LoginForm } from '../sections/authentication/login';
import AuthSocial from '../sections/authentication/AuthSocial';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 500,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(12, 4, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <RootStyle title="Oxil | Login">
      <AuthLayout>
        Não possui uma conta? &nbsp;
        <Link
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          to="/cadastro"
          color="#7edc54"
        >
          Cadastre-se
        </Link>
      </AuthLayout>

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Oxil Login
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Entre com seus detalhes abaixo.
            </Typography>
          </Stack>
          <AuthSocial />

          <LoginForm />

          <Typography
            variant="body2"
            align="center"
            sx={{
              mt: 3,
              display: { sm: 'none' }
            }}
          >
            Não possui uma conta?&nbsp;
            <Link
              variant="subtitle2"
              component={RouterLink}
              to="cadastro"
              underline="hover"
              color="#7edc54"
            >
              Cadastre-se
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
      <SectionStyle sx={{ display: { xs: 'none', md: 'flex' } }}>
        <img src="/static/illustrations/illustration_login.png" alt="login" />
      </SectionStyle>
    </RootStyle>
  );
}
