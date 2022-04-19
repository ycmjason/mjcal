import { screenshotTests } from '../../__e2e__/helpers/screenshotTests';

screenshotTests(
  [
    ['Scoring settings step', '/open-table/scoring-settings'],
    ['Players step', '/open-table/players'],
    ['First wu step', '/open-table/first-wu'],
  ],
  { namePrefix: 'Game setup' },
);
