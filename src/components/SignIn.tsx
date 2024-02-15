
import { Button, TextField, Box, Typography, Container, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import AuthWrap from './AuthWrap';
import { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { authenticate } from '../reducers/authReducer';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const { user, error } = useAppSelector(store => store.auth)

    useEffect(() => {
        if (user !== null)
            navigate("/competitions")
    }, [user])

    const handler = (event: FormEvent) => {
        event.preventDefault();

        dispatch(authenticate({ email, password }))
    }

    return (
        <AuthWrap>
            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        background: '#fff',
                        padding: 2,
                        borderRadius: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Войти в личный кабинет
                    </Typography>
                    <Box onSubmit={handler} component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={e => setEmail(e.target.value)}
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
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        {error !== null &&
                            <Alert severity="error">{error}</Alert>
                        }
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Войти
                        </Button>
                        <Typography>
                            Нет аккаунта? <Link to={'/signup'}>зарегистрироваться</Link>
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </AuthWrap>
    );
}

export default SignIn;
