import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { createContext, useEffect, useMemo, useState } from 'react';
import { Player } from '../../../settings/models/Player';
import { createNotTiedRound, RoundWithoutId } from '../../models/Round';
import { AddRoundModalTrigger } from './components/AddRoundModalTrigger';
import { CurrentPlayersSelectStep } from './steps/CurrentPlayerSelectStep';
import { LosersStep } from './steps/LosersStep';
import { WinnerStep } from './steps/WinnerStep';

const STEP_COUNT = 3;

export const AddRoundModalContext = createContext({
  players: [] as Player[],
  selectedPlayers: [] as Player[],
  selectedPlayerIds: [] as string[],
  setSelectedPlayerIds: (_ids: string[]) => {},
  farn: 3,
  setFarn: (_farn: number) => {},
  winnerId: undefined as undefined | string,
  setWinnerId: (_ids: undefined | string) => {},
  loserIds: [] as string[],
  setLoserIds: (_ids: string[]) => {},
  isBao: false,
  setIsBao: (_bao: boolean) => {},
  isSelfTouch: false,
  setIsSelfTouch: (_st: boolean) => {},
  setCanNext: (_canNext: boolean) => {},
});

export const AddRoundModal = ({
  players,
  onAddRound,
}: {
  players: Player[];
  onAddRound: (r: RoundWithoutId) => void;
}) => {
  const playerIdToPlayerMap = useMemo(() => new Map(players.map(player => [player.id, player])), [players]);

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [canNext, setCanNext] = useState(false);

  const [selectedPlayerIds, setSelectedPlayerIds] = useState<string[]>(players.slice(0, 4).map(({ id }) => id));
  const [farn, setFarn] = useState(3);
  const [winnerId, setWinnerId] = useState<string>();
  const [loserIds, setLoserIds] = useState<string[]>([]);
  const [isBao, setIsBao] = useState(false);
  const [isSelfTouch, setIsSelfTouch] = useState(false);

  useEffect(() => {
    if (!open) return;
    setStep(0);
    setFarn(3);
    setWinnerId(undefined);
    setLoserIds([]);
    setIsBao(false);
    setIsSelfTouch(false);
    setCanNext(false);
  }, [open]);

  const selectedPlayers = useMemo(
    () => selectedPlayerIds.map(id => playerIdToPlayerMap.get(id)!),
    [selectedPlayerIds, playerIdToPlayerMap],
  );

  return (
    <>
      <AddRoundModalTrigger onClick={() => setOpen(true)} />
      <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
        <DialogTitle>Add Guk</DialogTitle>
        <DialogContent>
          <AddRoundModalContext.Provider
            value={{
              players,
              selectedPlayers,
              selectedPlayerIds,
              setSelectedPlayerIds,
              farn,
              setFarn,
              winnerId,
              setWinnerId,
              loserIds,
              setLoserIds,
              isBao,
              setIsBao,
              isSelfTouch,
              setIsSelfTouch,
              setCanNext,
            }}
          >
            {[() => <CurrentPlayersSelectStep />, () => <WinnerStep />, () => <LosersStep />][step]()}
          </AddRoundModalContext.Provider>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} sx={{ mr: 'auto' }} color="secondary">
            Cancel
          </Button>

          <Button disabled={step <= 0} onClick={() => setStep(step - 1)}>
            Back
          </Button>

          {(({ onClick, text }: { onClick: () => void; text: string }) => (
            <Button onClick={onClick} disabled={!canNext}>
              {text}
            </Button>
          ))(
            step < STEP_COUNT - 1
              ? {
                  text: 'Next',
                  onClick: () => setStep(step + 1),
                }
              : {
                  text: 'Done',
                  onClick: () => {
                    setOpen(false);
                    if (!winnerId) throw new Error('no winnerId found');

                    onAddRound(
                      createNotTiedRound({
                        playerIds: selectedPlayerIds,
                        winnerId,
                        loserIds,
                        farn,
                        isBao,
                        isSelfTouch,
                      }),
                    );
                  },
                },
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};
