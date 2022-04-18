export const getRoundScoreCellForPlayer = ({
  roundIndex,
  playerIndex,
}: {
  roundIndex: number;
  playerIndex: number;
}) => {
  return cy
    .get('[data-name=ScoreTableRoundScoresRow]')
    .eq(roundIndex)
    .get('[data-name=ScoreTableRoundScoreCell]')
    .eq(playerIndex);
};
