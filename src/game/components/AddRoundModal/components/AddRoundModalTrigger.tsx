import { Fab, Icon, SpeedDialIcon, useTheme } from '@mui/material';
import { useBreakpoints } from '../../../../common/hooks/useBreakpoints';
import { useT } from '../../../../locales/hooks/useT';

export const AddRoundModalTrigger = ({ onOpenModal }: { onOpenModal?: () => void }) => {
  const theme = useTheme();
  const t = useT();
  const isFloating = useBreakpoints().isMobile;

  return (
    <Fab
      color="primary"
      {...(isFloating
        ? {
            variant: 'circular',
            sx: {
              position: 'fixed',
              bottom: theme.spacing(10),
              right: theme.spacing(3),
              zIndex: 10,
            },
          }
        : {
            variant: 'extended',
            sx: { gap: 1, '&::after': { content: `"${t.addRound}"` } },
          })}
      onClick={onOpenModal}
      data-name="AddRoundModalTrigger"
    >
      <SpeedDialIcon icon={<Icon>ramen_dining</Icon>} />
    </Fab>
  );
};
