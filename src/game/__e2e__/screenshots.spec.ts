import { screenshotTests } from '../../__e2e__/helpers/screenshotTests';
import { addRound } from '../components/AddRoundModal/__e2e__/helpers/addRound';

const add1Round = () => {
  cy.get('[data-name=AddRoundModalTrigger]');
  addRound({ winnerIndex: 0, loserIndex: 1 });
};

screenshotTests(
  [
    ['Chart Page with no rounds', '/game/chart'],
    ['Chart Page with 1 round', '/game/chart', add1Round],
    ['Table Page with no rounds', '/game/table'],
    ['Table Page with 1 round', '/game/table', add1Round],
    ['Settings Page', '/game/settings'],
  ],
  { namePrefix: 'Game' },
);
