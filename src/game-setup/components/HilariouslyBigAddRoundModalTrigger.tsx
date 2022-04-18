import { Fab, Icon, SpeedDialIcon, useMediaQuery, useTheme } from '@mui/material';
import { useT } from '../../locales/hooks/useT';

export const HilariouslyBigAddRoundModalTrigger = ({
  onOpenModal,
  ...attrs
}: {
  onOpenModal?: () => void;
}) => {
  const theme = useTheme();
  const t = useT();
  const scale = useMediaQuery(theme.breakpoints.down('md')).valueOf() ? 1.8 : 3;

  return (
    <Fab
      color="primary"
      variant="extended"
      sx={{
        gap: 1,
        transform: `scale(${scale})`,
        boxShadow: `0px 0px 50px 10px ${theme.palette.grey[600]}`,
        '&::after': { content: `"${t.addRound}"` },
      }}
      onClick={onOpenModal}
      size="large"
      {...attrs}
    >
      <SpeedDialIcon icon={<Icon>ramen_dining</Icon>} />
    </Fab>
  );
};
