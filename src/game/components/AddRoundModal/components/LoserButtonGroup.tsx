import { FormLabel, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Player } from '../../../../game-settings/models/Player';
import { useT } from '../../../../locales/hooks/useT';

export const LoserButtonGroup = ({
  players,
  loserIds,
  onLoserIdsChange,
  disabled,
}: {
  players: readonly Player[];
  loserIds: readonly string[];
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
        orientation="vertical"
        disabled={disabled}
      >
        {players.map(({ id, name }) => (
          <ToggleButton value={id} key={id} data-name="LoserOptionButton">
            {name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
  );
};
