import { Box, Button, Icon, Stack, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { useModal } from '../../common/hooks/useModal';
import { AddRoundModal } from '../../game/components/AddRoundModal/AddRoundModal';
import { GameContext } from '../../game/contexts/GameContext';
import { useT } from '../../locales/hooks/useT';
import { HilariouslyBigAddRoundModalTrigger } from '../components/HilariouslyBigAddRoundModalTrigger';

export const FirstWuStep = ({ onNext, onBack }: { onNext: () => void; onBack: () => void }) => {
  const t = useT();
  const { rounds } = useContext(GameContext);
  useEffect(() => {
    if (rounds.length > 0) {
      onNext();
    }
  }, [rounds, onNext]);

  const [isAddRoundModalOpened, openAddRoundModal, closeAddRoundModal] = useModal();

  return (
    <>
      <Stack sx={{ gap: 3, alignItems: 'center' }}>
        <Box alignSelf="flex-start">
          <Button onClick={onBack}>{t.back}</Button>
        </Box>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            display: 'flex',
            gap: 3,
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Icon fontSize="inherit">done</Icon>
          {t.openTablePage.firstWuStep.heading}
        </Typography>
        <Typography variant="h4" component="h2">
          {t.openTablePage.firstWuStep.subheading}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            height: '500px',
            maxHeight: '80vw',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <HilariouslyBigAddRoundModalTrigger
            onOpenModal={openAddRoundModal}
            data-name="AddRoundButton"
          />
        </Box>
      </Stack>
      <AddRoundModal isOpened={isAddRoundModalOpened} onClose={closeAddRoundModal} />
    </>
  );
};
