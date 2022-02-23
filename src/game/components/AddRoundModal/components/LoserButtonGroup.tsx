import { FormLabel, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useT } from '../../../../locales/hooks/useT';
import { Player } from '../../../../settings/models/Player';

export const LoserButtonGroup = ({
  players,
  loserIds,
  onLoserIdsChange,
  disabled,
}: {
  players: Player[];
  loserIds: string[];
  onLoserIdsChange: (loserIds: string[]) => void;
  disabled: boolean;
}) => {
  const t = useT();
  return (
    <Stack>
      <FormLabel>{t.losers}</FormLabel>
      <ToggleButtonGroup
        color="primary"
        value={loserIds}
        onChange={(_, newLoser: string) => onLoserIdsChange([newLoser])}
        exclusive
        fullWidth
        disabled={disabled}
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
