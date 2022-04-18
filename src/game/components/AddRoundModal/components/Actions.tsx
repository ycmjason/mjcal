import { Button, DialogActions } from '@mui/material';
import { useT } from '../../../../locales/hooks/useT';

export const Actions = ({
  canBack,
  canNext,
  nextText,
  onClose = () => {},
  onBack = () => {},
  onNext = () => {},
}: {
  canBack: boolean;
  canNext: boolean;
  nextText: string;
  onClose?: () => void;
  onBack?: () => void;
  onNext?: () => void;
}) => {
  const t = useT();

  return (
    <DialogActions>
      <Button onClick={onClose} sx={{ mr: 'auto' }} color="secondary">
        {t.cancel}
      </Button>

      <Button onClick={onBack} disabled={!canBack}>
        {t.back}
      </Button>

      <Button onClick={onNext} disabled={!canNext} data-name="AddRoundModalNext">
        {nextText}
      </Button>
    </DialogActions>
  );
};
