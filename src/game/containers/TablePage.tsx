import {
  Box,
  Container,
  Icon,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Theme,
} from '@mui/material';
import { sum, transpose, zip } from 'ramda';
import { useContext, useMemo } from 'react';
import { useModal } from '../../common/hooks/useModal';
import { PlayersContext } from '../../game-settings/contexts/PlayersContext';
import { ScoringSettingsContext } from '../../game-settings/contexts/ScoringSettingsContext';
import { useT } from '../../locales/hooks/useT';
import { AddRoundModal } from '../components/AddRoundModal/AddRoundModal';
import { AddRoundModalTrigger } from '../components/AddRoundModal/components/AddRoundModalTrigger';
import { GameContext } from '../contexts/GameContext';
import { getScoresForRound } from '../helpers/getScoresForRound';

export const TablePage = () => {
  const t = useT();
  const { players } = useContext(PlayersContext);
  const { rounds, removeRound } = useContext(GameContext);
  const { settings: scoringSettings } = useContext(ScoringSettingsContext);

  const [roundIdToScoresMap, playerIdToTotalScoreMap] = useMemo(() => {
    const scoress = rounds.map(round =>
      getScoresForRound(round, { allPlayers: players, scoringSettings }),
    );
    return [
      new Map(
        zip(
          rounds.map(({ id }) => id),
          scoress,
        ),
      ),
      new Map(
        zip(
          players.map(({ id }) => id),
          transpose(scoress).map(scores => sum(scores.map(n => n ?? 0))),
        ),
      ),
    ] as const;
  }, [rounds, players, scoringSettings]);

  const [isAddRoundModalOpened, openAddRoundModal, closeAddRoundModal] = useModal();

  return (
    <Container maxWidth="xl">
      <Stack gap={2} alignItems={'flex-start'}>
        <Box>
          <AddRoundModalTrigger onOpenModal={openAddRoundModal} />
          <AddRoundModal isOpened={isAddRoundModalOpened} onClose={closeAddRoundModal} />
        </Box>

        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: '65vh' }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow sx={{ whiteSpace: 'nowrap' }}>
                  <TableCell padding="checkbox"></TableCell>
                  <TableCell padding="none">#</TableCell>
                  {players.map(player => (
                    <TableCell key={player.id}>{player.name}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rounds.length <= 0 ? (
                  <TableRow>
                    <TableCell colSpan={2 + players.length} align="center">
                      {t.noData}
                    </TableCell>
                  </TableRow>
                ) : (
                  <>
                    {rounds.map(({ id }, i) => (
                      <TableRow key={`round${i}`} data-name="ScoreTableRoundScoresRow">
                        <TableCell size="small">
                          <IconButton
                            onClick={() => {
                              if (window.confirm(t.removeRoundMessage)) {
                                removeRound(id);
                              }
                            }}
                          >
                            <Icon fontSize="inherit">delete</Icon>
                          </IconButton>
                        </TableCell>
                        <TableCell padding="none">#{i + 1}</TableCell>
                        {roundIdToScoresMap.get(id)!.map((score, i) => (
                          <TableCell
                            key={i}
                            sx={{ color: getScoreColor(score) }}
                            data-name="ScoreTableRoundScoreCell"
                          >
                            {score ?? '-'}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))}
                    <TableRow
                      sx={({ palette }) => ({
                        bgcolor: '#122b36',
                        color: palette.info.contrastText,
                      })}
                      ref={el => el?.scrollIntoView()}
                    >
                      <TableCell></TableCell>
                      <TableCell padding="none">Sum</TableCell>
                      {players
                        .map(({ id }) => playerIdToTotalScoreMap.get(id)!)
                        .map((total, i) => (
                          <TableCell key={i} sx={{ color: getScoreColor(total) }}>
                            {total}
                          </TableCell>
                        ))}
                    </TableRow>
                  </>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Stack>
    </Container>
  );
};

const getScoreColor = (score: number | null): (({ palette }: Theme) => string) | undefined => {
  if (score === 0 || score === null) return undefined;
  return ({ palette }) => palette[score > 0 ? 'success' : 'error'].main;
};
