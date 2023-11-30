import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import MainWrap from './MainWrap';

// Определение типов для состояния формы
interface RegistrationFormState {
  team: string;
  athlete: string;
  disciplines: {
    '3m': boolean;
    '4m': boolean;
    '5m': boolean;
    // Добавьте остальные дисциплины по аналогии
  };
  birthDate: string;
  rank: string;
  coach: string;
}

const initialFormState: RegistrationFormState = {
  team: '',
  athlete: '',
  disciplines: {
    '3m': false,
    '4m': false,
    '5m': false,
    // Инициализируйте остальные дисциплины false
  },
  birthDate: '',
  rank: '',
  coach: '',
};

const RegistrationForm: React.FC = () => {
  const [formState, setFormState] = useState<RegistrationFormState>(initialFormState);

  // Обработчики изменения полей формы
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormState({
      ...formState,
      disciplines: { ...formState.disciplines, [name]: checked }
    });
  };

  // Обработчик отправки формы
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formState);
    // Здесь может быть код для отправки данных формы, например, запрос на API
  };

  return (
    <MainWrap>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Typography variant="h5">Регистрация</Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="team"
          label="Команда (регион)"
          name="team"
          value={formState.team}
          onChange={handleInputChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="athlete"
          label="Спортсмен"
          name="athlete"
          value={formState.athlete}
          onChange={handleInputChange}
        />
        {/* Поля для дисциплин */}
        <FormControlLabel
          control={
            <Checkbox
              checked={formState.disciplines['3m']}
              onChange={handleCheckboxChange}
              name="3m"
            />
          }
          label="3 м"
        />
        {/* Добавьте другие дисциплины по аналогии */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="birthDate"
          label="Дата рождения"
          name="birthDate"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={formState.birthDate}
          onChange={handleInputChange}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="rank-label">Разряд</InputLabel>
          <Select
            labelId="rank-label"
            id="rank"
            name="rank"
            value={formState.rank}
            label="Разряд"
          //   onChange={handleInputChange}
          >
            <MenuItem value={'6/dan'}>6/дан</MenuItem>
            {/* Добавьте другие разряды */}
          </Select>
        </FormControl>
        <TextField
          margin="normal"
          required
          fullWidth
          id="coach"
          label="ФИО тренера"
          name="coach"
          value={formState.coach}
          onChange={handleInputChange}
        />
        {/* Кнопки действий */}
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          отправить заявку
        </Button>
        <Button variant="outlined" sx={{ mt: 3, mb: 2 }}>
          добавить спортсмена
        </Button>
      </Box>
    </MainWrap>
  );
};

export default RegistrationForm;
