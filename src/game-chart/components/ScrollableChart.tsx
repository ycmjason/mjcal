import { Box } from '@mui/material';
import { Chart } from './Chart';

const WIDTH_PER_ROUND = 25;

export const ScrollableChart = ({
  data,
}: {
  data: { playerName: string; scores: (number | null)[] }[];
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
      }}
    >
      <Box
        sx={{
          minWidth: `${WIDTH_PER_ROUND * (data[0]?.scores.length ?? 1)}px`,
          minHeight: '600px',
          height: 'calc(80vh - 200px)',
          display: 'flex',
          alignItem: 'center',
        }}
      >
        <Chart data={data} />
      </Box>
    </Box>
  );
};
