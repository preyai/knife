
import React, { useState } from 'react';
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
  InputLabel,
  SelectChangeEvent
} from '@mui/material';
import { Link } from 'react-router-dom';
import AuthWrap from './AuthWrap';

interface FormData {
  role: string;
  fullName: string;
  birthDate: string;
  gender: string;
  country: string;
  region: string;
  city: string;
  qualification: string;
  email: string;
  password: string;
  confirmPassword: string;
  verificationCode: string;
}

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    role: '',
    fullName: '',
    birthDate: '',
    gender: '',
    country: '',
    region: '',
    city: '',
    qualification: '',
    email: '',
    password: '',
    confirmPassword: '',
    verificationCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData({ ...formData, qualification: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Добавьте код для обработки отправки формы
  };

  return (
    <AuthWrap>
      <Container component="main" maxWidth="sm" sx={{ height: '100%' }}>
        <Box
          sx={{
            background: '#fff',
            padding: 2,
            borderRadius: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'auto',
            height: '100%'
          }}
        >
          <Typography component="h1" variant="h5">
            Зарегистрировать нового пользователя
          </Typography>
          <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
            {/* Радиокнопки для выбора роли */}
            <FormControl component="fieldset">
              <FormLabel component="legend">Роль</FormLabel>
              <RadioGroup
                row
                aria-label="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <FormControlLabel value="organizer" control={<Radio />} label="Организатор" />
                <FormControlLabel value="judge" control={<Radio />} label="Судья" />
                <FormControlLabel value="athlete" control={<Radio />} label="Спортсмен" />
              </RadioGroup>
            </FormControl>
            {/* Текстовые поля для данных пользователя */}
            {formData.role === "organizer" ?
              <TextField
                required
                fullWidth
                label="Организатор"
                margin="normal"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              :
              <>
                <TextField
                  required
                  fullWidth
                  label="ФИО"
                  margin="normal"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  label="Дата рождения"
                  margin="normal"
                  type="date"
                  InputLabelProps={{
                    shrink: true
                  }}
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Пол</FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="male" control={<Radio />} label="Мужчина" />
                    <FormControlLabel value="female" control={<Radio />} label="Женщина" />
                  </RadioGroup>
                </FormControl>
                <TextField
                  required
                  fullWidth
                  label="Страна"
                  margin="normal"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  label="Регион"
                  margin="normal"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                />
                <TextField
                  required
                  fullWidth
                  label="Город"
                  margin="normal"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </>
            }


            {/* Выпадающий список для квалификации */}
            {formData.role === "athlete" &&
              <FormControl fullWidth margin="normal">
                <InputLabel id="qualification-label">разряд/звание</InputLabel>
                <Select
                  labelId="qualification-label"
                  id="qualification"
                  label="разряд/звание"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleSelectChange}
                >
                  <MenuItem value={'3 юн'}>3 юношеский разряд ( 3 юн.)</MenuItem>
                  <MenuItem value={'2 юн'}>2 юношеский разряд (2 юн.)</MenuItem>
                  <MenuItem value={'1 юн'}>1 юношеский разряд (1 юн.)</MenuItem>
                  <MenuItem value={'3'}>3 спортивный разряд (3)</MenuItem>
                  <MenuItem value={'2'}>2 спортивный разряд (2)</MenuItem>
                  <MenuItem value={'1'}>1 спортивный разряд (1)</MenuItem>
                  <MenuItem value={'КМС'}>Кандидат в мастера спорта (КМС)</MenuItem>
                  <MenuItem value={'МС'}>Мастер спорта России (МС)</MenuItem>
                  <MenuItem value={'МСМК'}>Мастер спорта России  международного класса ( МСМК)</MenuItem>
                  <MenuItem value={'ЗМС'}>Заслуженный мастер спорта России (ЗМС)</MenuItem>
                  {/* Добавьте другие значения здесь */}
                </Select>
              </FormControl>
            }
            {formData.role === "judge" &&
              <FormControl fullWidth margin="normal">
                <InputLabel id="qualification-label">судейская категория</InputLabel>
                <Select
                  labelId="qualification-label"
                  id="qualification"
                  label="судейская категория"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleSelectChange}
                >
                  <MenuItem value={'b/c'}>Б/К</MenuItem>
                  {/* Добавьте другие значения здесь */}
                </Select>
              </FormControl>
            }
            <TextField
              required
              fullWidth
              label="Email"
              margin="normal"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              label="Придумайте пароль"
              margin="normal"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              required
              fullWidth
              label="Повторите пароль"
              margin="normal"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {/* Кнопка для получения кода */}
            <Button variant="outlined" sx={{ mt: 2, mb: 2 }}>
              Получить код
            </Button>
            <TextField
              required
              fullWidth
              label="Введите код"
              margin="normal"
              name="verificationCode"
              value={formData.verificationCode}
              onChange={handleChange}
            />
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
};

export default SignUp;