import React, { useState } from 'react';
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
  InputLabel,
  TextField
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Competition, Judge } from '../types'; // предполагается, что у вас есть определение типа Judge
import { useAppDispatch } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { Label } from '@mui/icons-material';

interface JudgeModalProps {
  open: boolean;
  handleClose: () => void;
  judges: Judge[];
  competition: Competition;
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
  competition
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [opN, setOpN] = useState<boolean>(false);
  const [_judges, set_judges] = useState<Judge[]>(judges);

  const handller = () => {
    const j = [..._judges]
    j.push({
      id: "123",
      name: "test",
      region: "test",
      category: "2K"
    })
    set_judges(j)
  }
  return (
    <>
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
            {_judges.map((judge, index) => (
              <ListItem key={index} divider>
                <ListItemText
                  primary={judge.name}
                  secondary={judge.region}
                />
                <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                  <InputLabel id={`select-label-${index}`}>Категория</InputLabel>
                  <Select
                    disabled
                    labelId={`select-label-${index}`}
                    id={`select-${index}`}
                    value={judge.category}
                    onChange={(e) => {
                      // const _comp = Object.assign({}, competition);
                      // const _jud = _comp.judges.find(i => i.id === judge.id)
                      // if (_jud) {
                      //   _jud.category = e.target.value
                      //   console.log(_jud);
                      //   dispatch(updateCompetition(_comp));
                      // }
                    }}
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
                  <IconButton edge="end" onClick={() => { }}>
                    <EditIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Button sx={{ mt: 2 }} variant="outlined" onClick={() => setOpN(true)}>
            добавить судью
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" color="success" onClick={handleClose}>сохранить</Button>
            <Button variant="outlined" color="error" onClick={handleClose}>отмена</Button>
          </Box>
        </Box>
      </Modal>
      {opN &&
        <Modal
          open={opN}
          onClose={() => setOpN(!opN)}
          aria-labelledby="judge-modal-title"
        >
          <Box sx={style}>
            <Typography id="judge-modal-title" variant="h6" component="h2">
              Судья
            </Typography>
            <TextField
              fullWidth
              label="Фио"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Регион"
              sx={{ marginBottom: 2 }}
            />
            <FormControl fullWidth>
              <InputLabel>Категория</InputLabel>
              <Select

                label="Категория"
                sx={{ marginBottom: 2 }}
              >
                <MenuItem value="BK">БК</MenuItem>
                <MenuItem value="1K">1К</MenuItem>
                <MenuItem value="2K">2К</MenuItem>
                <MenuItem value="3K">3К</MenuItem>
                <MenuItem value="VK">ВК</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Должность</InputLabel>
              <Select
                fullWidth
                label="Должность"
                sx={{ marginBottom: 2 }}
              >
                <MenuItem value="0">главный судья</MenuItem>
                <MenuItem value="1">заместитель главного судьи</MenuItem>
                <MenuItem value="2">главный секретарь</MenuItem>
                <MenuItem value="3">старший судья в секторе метания</MenuItem>
                <MenuItem value="4">судья в секторе метания</MenuItem>
                <MenuItem value="5">судья-секундометрист</MenuItem>
                <MenuItem value="6">секретарь</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button variant="contained" color="success" onClick={handller}>сохранить</Button>
              <Button variant="outlined" color="error" onClick={() => setOpN(false)}>отмена</Button>
            </Box>
          </Box>
        </Modal>
      }
    </>
  );
};

export default JudgeModal;
