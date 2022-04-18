import { Button, Container, Icon, Stack, Typography } from '@mui/material';
import { add, scan, transpose, zip } from 'ramda';
import { useEffect, useState } from 'react';
import { Footer } from '../../common/components/Footer';
import { interval } from '../../common/helpers/interval';
import { pickOneRandomly, pickRandom, randomInteger } from '../../common/helpers/random';
import { useDynamicImport } from '../../common/hooks/useDynamicImport';
import { ScrollableChart } from '../../game-chart/components/ScrollableChart';
import { useT } from '../../locales/hooks/useT';
import { useNavigate } from '../../router/hooks/useNavigate';

const createRandomChartData = (names: string[]): { playerName: string; scores: number[] }[] => {
  const players = pickRandom(names, randomInteger(4, 6));
  const rounds: number[][] = Array.from({ length: randomInteger(40, 120) }, () => {
    const roundPlayers = pickRandom(players, 4);
    const winner = pickOneRandomly(roundPlayers);
    const loser = pickOneRandomly(roundPlayers.filter(n => winner !== n));
    const score = pickOneRandomly([4, 8, 16, 24, 32, 48, 64]);
    return players.map(playerName => {
      if (winner === playerName) return score;
      if (loser === playerName) return -score / 2;
      if (roundPlayers.includes(playerName)) return -score / 4;
      return 0;
    });
  });
  return zip(players, transpose(rounds)).map(([playerName, scores]) => ({
    playerName,
    scores: scan(add, 0, scores),
  }));
};

const useRandomChartData = () => {
  const names = useDynamicImport(() => import('../data/names.json').then(m => m.default), []);
  const [chartData, setChartData] = useState<{ playerName: string; scores: number[] }[]>([]);

  useEffect(
    () =>
      interval(() => setChartData(createRandomChartData(names)), {
        wait: 5000,
        immediate: true,
      }),
    [names],
  );

  return chartData;
};

export const LandingPage = () => {
  const t = useT();
  const navigate = useNavigate();

  return (
    <>
      <Container maxWidth="xl" sx={{ pt: 5 }}>
        <Stack alignItems="center">
          <Typography variant="h3" component="h1">
            {t.landingPage.heading}
          </Typography>
          <Typography variant="h5" component="h2" textAlign="center" sx={{ mb: 3 }}>
            {t.landingPage.subheading}
          </Typography>
          <ScrollableChart data={useRandomChartData()} />
          <Button
            variant="contained"
            size="large"
            sx={{ mt: 5 }}
            onClick={() => navigate({ path: '/open-table' })}
            data-name="LandingPageOpenTableButton"
          >
            {t.openTable}
            <Icon sx={{ ml: 1 }}>table_bar</Icon>
          </Button>
        </Stack>
      </Container>
      <Footer />
    </>
  );
};
