import { Button, Stack, Typography } from '@mui/material';
import { PlayerListContainer } from '../../game-settings/containers/PlayerListContainer';
import { useT } from '../../locales/hooks/useT';

export const PlayersStep = ({ onBack, onNext }: { onBack: () => void; onNext: () => void }) => {
  const t = useT();
  return (
    <Stack gap={3}>
      <Typography variant="h3" component="h1">
        {t.openTablePage.players.heading}
      </Typography>
      <PlayerListContainer />
      <Stack sx={{ alignSelf: 'flex-end', flexDirection: 'row', gap: 2 }}>
        <Button variant="text" size="large" onClick={onBack}>
          {t.back}
        </Button>
        <Button variant="contained" size="large" onClick={onNext} data-name="GameSetupNext">
          {t.next}
        </Button>
      </Stack>
    </Stack>
  );
};
