import {
  Box,
  Button,
  Icon,
  IconButton,
  InputAdornment,
  Paper,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from '@mui/material';
import produce from 'immer';
import { useT } from '../../locales/hooks/useT';
import { createPlayer, Player } from '../models/Player';

export const PlayerList = ({
  players,
  onSetPlayers,
  sx,
}: {
  players: Player[];
  onSetPlayers: (ps: Player[]) => void;
  sx?: SxProps;
}) => {
  const t = useT();
  return (
    <Paper
      sx={{ flexGrow: 1, display: 'flex', gap: 1, flexDirection: 'column', padding: 2, ...sx }}
    >
      <Box sx={{ marginBottom: 1 }}>
        <Button
          variant="outlined"
          startIcon={<Icon>person_add</Icon>}
          onClick={() =>
            onSetPlayers(
              produce(players, draft => {
                draft.push(createPlayer({ name: `${t.player} ${players.length + 1}` }));
              }),
            )
          }
        >
          {t.addPlayer}
        </Button>
      </Box>
      <TableContainer>
        <Table sx={{ minWidth: 320 }}>
          <TableBody>
            {players.map((player, i) => (
              <TableRow key={player.id}>
                <TableCell padding="checkbox">
                  <IconButton
                    onClick={() => onSetPlayers(players.filter(({ id }) => id !== player.id))}
                    disabled={players.length <= 4}
                  >
                    <Icon>delete</Icon>
                  </IconButton>
                </TableCell>
                <TableCell>
                  <TextField
                    label={`${t.player} ${i + 1}`}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon sx={{ marginRight: 1 }}>person</Icon>
                        </InputAdornment>
                      ),
                    }}
                    value={player.name}
                    onChange={event =>
                      onSetPlayers(
                        produce(players, playersDraft => {
                          const playerDraft = playersDraft.find(({ id }) => id === player.id);
                          if (!playerDraft) return;
                          playerDraft.name = event.target.value;
                        }),
                      )
                    }
                    fullWidth
                    data-name="PlayerListPlayerNameInput"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
