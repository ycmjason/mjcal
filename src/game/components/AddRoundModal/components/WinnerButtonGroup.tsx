import { FormLabel, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Player } from '../../../../settings/models/Player';

export const WinnerButtonGroup = ({
  players,
  winnerId,
  onWinnerIdChange,
}: {
  players: Player[];
  winnerId: string | undefined;
  onWinnerIdChange: (p: string) => void;
}) => {
  return (
    <Stack>
      <FormLabel>Winner</FormLabel>
      <ToggleButtonGroup
        color="primary"
        value={winnerId}
        exclusive
        onChange={(_, v) => {
          if (!players.map(({ id }) => id).includes(v)) return;
          onWinnerIdChange(v);
        }}
        fullWidth
      >
        {players.map(({ id, name }) => (
          <ToggleButton value={id} key={id}>
            {name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
};
