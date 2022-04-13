import { useCallback, useContext } from 'react';
import { PlayersContext } from '../../../../settings/contexts/PlayersContext';
import { AddRoundModalContext } from '../AddRoundModal';
import { CurrentPlayersSelect } from '../components/CurrentPlayersSelect';

export const CurrentPlayersSelectStepContent = () => {
  const { draftRound, updateDraftRound } = useContext(AddRoundModalContext);
  const { players: allPlayers } = useContext(PlayersContext);

  return (
    <CurrentPlayersSelect
      allPlayers={allPlayers}
      selectedPlayerIds={draftRound.playerIds}
      onSelectedPlayerIdsChange={useCallback(
        playerIds => updateDraftRound({ playerIds }),
        [updateDraftRound],
      )}
    />
  );
};