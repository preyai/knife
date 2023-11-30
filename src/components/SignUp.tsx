
import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel
} from '@mui/material';
import { Link } from 'react-router-dom';
import AuthWrap from './AuthWrap';

const SignUp = () => {
  // Управление состоянием формы можно добавить сюда

  return (
    <AuthWrap>
      <Container component="main" maxWidth="sm" sx={{height:'100%'}}>
        <Box sx={{
          background: '#fff',
          padding: 2,
          borderRadius: 2, display: 'flex', flexDirection: 'column', alignItems: 'center',
          overflow: 'auto',
          height: '100%'
        }}>
          <Typography component="h1" variant="h5">
            Зарегистрировать нового пользователя
          </Typography>
          <Box component="form" noValidate sx={{ mt: 2 }}>
            {/* Радиокнопки для выбора роли */}
            <FormControl component="fieldset">
              <FormLabel component="legend">Роль</FormLabel>
              <RadioGroup row aria-label="role" name="role">
                <FormControlLabel value="organizer" control={<Radio />} label="Организатор" />
                <FormControlLabel value="judge" control={<Radio />} label="Судья" />
                <FormControlLabel value="athlete" control={<Radio />} label="Спортсмен" />
              </RadioGroup>
            </FormControl>

            {/* Текстовые поля для данных пользователя */}
            <TextField required fullWidth label="ФИО спортсмена" margin="normal" />
            <TextField
              required
              fullWidth
              label="Дата рождения"
              margin="normal"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl component="fieldset" margin="normal">
              <FormLabel component="legend">Пол</FormLabel>
              <RadioGroup row aria-label="gender" name="gender">
                <FormControlLabel value="male" control={<Radio />} label="Мужчина" />
                <FormControlLabel value="female" control={<Radio />} label="Женщина" />
              </RadioGroup>
            </FormControl>
            <TextField required fullWidth label="Страна" margin="normal" />
            <TextField required fullWidth label="Регион" margin="normal" />
            <TextField required fullWidth label="Город" margin="normal" />

            {/* Выпадающий список для квалификации */}
            <FormControl fullWidth margin="normal">
              <InputLabel id="qualification-label">Квалификация</InputLabel>
              <Select
                labelId="qualification-label"
                id="qualification"
                label="Квалификация"
              >
                <MenuItem value={'b/c'}>Б/К</MenuItem>
                {/* Добавьте другие значения здесь */}
              </Select>
            </FormControl>

            <TextField required fullWidth label="Email" margin="normal" type="email" />
            <TextField required fullWidth label="Придумайте пароль" margin="normal" type="password" />
            <TextField required fullWidth label="Повторите пароль" margin="normal" type="password" />

            {/* Кнопка для получения кода */}
            <Button variant="outlined" sx={{ mt: 2, mb: 2 }}>
              Получить код
            </Button>

            <TextField required fullWidth label="Введите код" margin="normal" />

            {/* Кнопка для регистрации */}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Зарегистрироваться
            </Button>
            <Typography>
              Есть аккаунт? <Link to={'/signin'}>войти</Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </AuthWrap>
  );
}

export default SignUp;
