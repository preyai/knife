import React from 'react';
import {
  Box,
  Modal,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Judge } from '../types'; // предполагается, что у вас есть определение типа Judge

interface JudgeModalProps {
  open: boolean;
  handleClose: () => void;
  judges: Judge[];
  handleEdit: (judge: Judge) => void; // функция редактирования судьи
  handleAdd: () => void; // функция добавления нового судьи
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '90vh',
  overflow: 'auto',
};

const JudgeModal: React.FC<JudgeModalProps> = ({
  open,
  handleClose,
  judges,
  handleEdit,
  handleAdd,
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="judge-modal-title"
    >
      <Box sx={style}>
        <Typography id="judge-modal-title" variant="h6" component="h2">
          Судейская коллегия
        </Typography>
        <List>
          {judges.map((judge, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={judge.name}
                secondary={judge.region}
              />
              <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                <InputLabel id={`select-label-${index}`}>Категория</InputLabel>
                <Select
                  labelId={`select-label-${index}`}
                  id={`select-${index}`}
                  value={judge.category}
                  onChange={(e) => handleEdit({ ...judge, category: e.target.value as string })}
                  label="Категория"
                >
                  <MenuItem value="BK">БК</MenuItem>
                  <MenuItem value="1K">1К</MenuItem>
                  <MenuItem value="2K">2К</MenuItem>
                  <MenuItem value="3K">3К</MenuItem>
                  {/* Другие категории */}
                </Select>
              </FormControl>
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => handleEdit(judge)}>
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Button sx={{ mt: 2 }} variant="outlined" onClick={handleAdd}>
          добавить судью
        </Button>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Button variant="contained" color="success" onClick={handleClose}>сохранить</Button>
          <Button variant="outlined" color="error" onClick={handleClose}>отмена</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default JudgeModal;
