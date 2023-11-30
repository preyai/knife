
import { Button, TextField, Box, Typography, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import AuthWrap from './AuthWrap';

const SignIn = () => {
    return (
        <AuthWrap>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        background:'#fff',
                        padding:2,
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Войти в личный кабинет
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Войти
                        </Button>
                        <Typography>
                            Нет аккаунта? <Link to={'/signup'}>зарегестрироваться</Link>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </AuthWrap>
    );
}

export default SignIn;
