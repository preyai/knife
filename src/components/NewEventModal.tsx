import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';

interface NewEventModalProps {
  open: boolean;
  handleClose: () => void;
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

const NewEventModal: React.FC<NewEventModalProps> = ({ open, handleClose }) => {
  const [sportType, _setSportType] = useState<string>('');

  // const handleSportTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setSportType(event.target.value as string);
  // };

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
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="sport-type-label">Вид спорта</InputLabel>
          <Select
            labelId="sport-type-label"
            id="sport-type"
            value={sportType}
            label="Вид спорта"
            // onChange={handleSportTypeChange}
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
        />
        <TextField
          fullWidth
          label="по"
          type="date"
          InputLabelProps={{ shrink: true }}
          margin="normal"
        />
        <TextField
          required
          fullWidth
          label="Место проведения"
          margin="normal"
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" color="success" onClick={handleClose}>Создать</Button>
          <Button variant="outlined" color="error" onClick={handleClose}>Отмена</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewEventModal;
