import React, { useState } from 'react';
import {
  Modal, Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent
} from '@mui/material';
import { Competition } from 'simpl-api';
import { useAppDispatch } from '../hooks';
import { createCompetition, updateCompetition } from '../reducers/competitionsReducer';

interface NewEventModalProps {
  open: boolean;
  handleClose: () => void;
  curent?: Competition;
}

interface NewEventModalState {
  name: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const NewEventModal: React.FC<NewEventModalProps> = ({ open, handleClose, curent }) => {
  const [name, setName] = useState<string>(curent?.name || '');
  const [sportType, setSportType] = useState<string>('knife-throwing');
  const [dateStart, setDateStart] = useState<string>(curent?.dateStart || '');
  const [dateEnd, setDateEnd] = useState<string>(curent?.dateEnd || '');
  const [location, setLocation] = useState<string>(curent?.location || '');
  const dispatch = useAppDispatch();

  const handleSportTypeChange = (event: SelectChangeEvent<string>) => {
    setSportType(event.target.value as string);
  };

  const onSave = () => {
    if (curent)
      dispatch(updateCompetition({
        id: curent._id,
        name,
        dateStart,
        dateEnd,
        location
      }))
    else
      dispatch(createCompetition({
        name,
        dateStart,
        dateEnd,
        location
      }))
    setName('');
    setSportType('knife-throwing');
    setDateStart('');
    setDateEnd('');
    setLocation('');
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="new-event-modal-title"
    >
      <Box sx={style}>
        <Typography id="new-event-modal-title" variant="h6" component="h2">
          Новое мероприятие
        </Typography>
        <TextField
          required
          fullWidth
          label="Название"
          margin="normal"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        {/* Остальные поля... */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="sport-type-label">Вид спорта</InputLabel>
          <Select
            labelId="sport-type-label"
            id="sport-type"
            value={sportType}
            label="Вид спорта"
            onChange={handleSportTypeChange}
          >
            <MenuItem value="knife-throwing">Спортивное метание ножа</MenuItem>
            {/* Другие виды спорта можно добавить здесь */}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Даты проведения с"
          type="date"
          InputLabelProps={{ shrink: true }}
          margin="normal"
          value={dateStart}
          onChange={e => setDateStart(e.target.value)}
        />
        <TextField
          fullWidth
          label="по"
          type="date"
          InputLabelProps={{ shrink: true }}
          margin="normal"
          value={dateEnd}
          onChange={e => setDateEnd(e.target.value)}
        />
        <TextField
          required
          fullWidth
          label="Место проведения"
          margin="normal"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" color="success" onClick={onSave}>{curent? 'Сохранить':'Создать'}</Button>
          <Button variant="outlined" color="error" onClick={handleClose}>Отмена</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewEventModal;
