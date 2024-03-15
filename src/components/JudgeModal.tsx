import React, { useEffect, useState } from "react";
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
  TextField,
  Autocomplete,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch } from "../hooks";
import { useNavigate } from "react-router-dom";
import { Competition, User } from "simpl-api";
import { restApi } from "../feathers";

interface JudgeModalProps {
  open: boolean;
  handleClose: () => void;
  judges: (string | {})[];
  competition: Competition;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  maxHeight: "90vh",
  overflow: "auto",
};

const JudgeModal: React.FC<JudgeModalProps> = ({
  open,
  handleClose,
  judges,
  competition,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [opN, setOpN] = useState<boolean>(false);
  const [allJudges, setAllJudges] = useState<User[]>([]);
  const [newJudge, setNewJudge] = useState<{
    label: string;
    value: string | {};
  } | null>(null);

  // const [_judges, set_judges] = useState<User[]>(judges);

  const handller = () => {
    const id = String(competition._id);
    restApi
      .service("competitions")
      .patch(id, { referees: [...competition.referees, newJudge?.value] }).then(()=>setOpN(false))
  };

  useEffect(() => {
    restApi
      .service("users")
      .find({ query: { role: "judge" } })
      .then((r) => setAllJudges(r.data));
  }, []);
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
            {judges.map((judge) => (
              <JudgeModalItem id={judge.toString()} key={judge.toString()} />
            ))}
          </List>
          <Button
            sx={{ mt: 2 }}
            variant="outlined"
            onClick={() => setOpN(true)}
          >
            добавить судью
          </Button>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button variant="contained" color="success" onClick={handleClose}>
              сохранить
            </Button>
            <Button variant="outlined" color="error" onClick={handleClose}>
              отмена
            </Button>
          </Box>
        </Box>
      </Modal>
      {opN && (
        <Modal
          open={opN}
          onClose={() => setOpN(!opN)}
          aria-labelledby="judge-modal-title"
        >
          <Box sx={style}>
            <Typography id="judge-modal-title" variant="h6" component="h2">
              Судья
            </Typography>
            <Autocomplete
              fullWidth
              disablePortal
              id="combo-box-fio"
              value={newJudge}
              options={allJudges
                .filter((j) => competition.referees.find((r) => (r = j._id)))
                .map((j) => ({
                  label: j.fullName,
                  value: j._id,
                }))}
              onChange={(_event, newInputValue) => {
                setNewJudge(newInputValue);
              }}
              sx={{ marginBottom: 2 }}
              renderInput={(params) => (
                <TextField {...params} fullWidth label="ФИО" />
              )}
            />
            <TextField fullWidth label="Регион" sx={{ marginBottom: 2 }} />
            <FormControl fullWidth>
              <InputLabel>Категория</InputLabel>
              <Select label="Категория" sx={{ marginBottom: 2 }}>
                <MenuItem value="Uncertified">БК</MenuItem>
                <MenuItem value="RC1">1К</MenuItem>
                <MenuItem value="RC2">2К</MenuItem>
                <MenuItem value="RC3">3К</MenuItem>
                <MenuItem value="VK">ВК</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Должность</InputLabel>
              <Select fullWidth label="Должность" sx={{ marginBottom: 2 }}>
                <MenuItem value="0">главный судья</MenuItem>
                <MenuItem value="1">заместитель главного судьи</MenuItem>
                <MenuItem value="2">главный секретарь</MenuItem>
                <MenuItem value="3">старший судья в секторе метания</MenuItem>
                <MenuItem value="4">судья в секторе метания</MenuItem>
                <MenuItem value="5">судья-секундометрист</MenuItem>
                <MenuItem value="6">секретарь</MenuItem>
              </Select>
            </FormControl>

            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button variant="contained" color="success" onClick={handller}>
                сохранить
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setOpN(false)}
              >
                отмена
              </Button>
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

const JudgeModalItem = ({ id }: { id: string }) => {
  const [judge, setJudge] = useState<User>();

  useEffect(() => {
    restApi
      .service("users")
      .get(id)
      .then((r) => setJudge(r));
  }, [id]);

  return (
    <ListItem divider>
      <ListItemText primary={judge?.fullName} secondary={judge?.region} />
      <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
        <InputLabel id={`select-label-${judge?._id}`}>Категория</InputLabel>
        <Select
          disabled
          labelId={`select-label-${judge?._id}`}
          id={`select-${judge?._id}`}
          value={judge?.refereeCategory}
          onChange={(e) => {}}
          label="Категория"
        >
          <MenuItem value="Uncertified">БК</MenuItem>
          <MenuItem value="RC1">1К</MenuItem>
          <MenuItem value="RC2">2К</MenuItem>
          <MenuItem value="RC3">3К</MenuItem>
          <MenuItem value="VK">ВК</MenuItem>
          {/* Другие категории */}
        </Select>
      </FormControl>
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={() => {}}>
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default JudgeModal;
