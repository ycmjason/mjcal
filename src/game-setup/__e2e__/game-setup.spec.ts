import { addRound } from '../../game/components/AddRoundModal/__e2e__/helpers/addRound';
import { getRoundScoreCellForPlayer } from '../../game/containers/__e2e__/helpers/getRoundScoreCellForPlayer';

it('should go through all steps and eat first wu', () => {
  cy.visit('/open-table/scoring-settings', { failOnStatusCode: false });

  cy.get('[data-name=GameSetupNext]').click();
  cy.get('[data-name=GameSetupNext]').click();
  cy.get('[data-name=AddRoundButton]').click();

  addRound({ winnerIndex: 1, loserIndex: 1 });

  cy.get('[data-name=GamePageBottomNavTableButton]').click();

  getRoundScoreCellForPlayer({ roundIndex: 0, playerIndex: 0 }).should('have.text', '0');
  getRoundScoreCellForPlayer({ roundIndex: 0, playerIndex: 1 }).should('have.text', '8');
  getRoundScoreCellForPlayer({ roundIndex: 0, playerIndex: 2 }).should('have.text', '-8');
  getRoundScoreCellForPlayer({ roundIndex: 0, playerIndex: 3 }).should('have.text', '0');
});

it('should match screenshots', async () => {
  cy.visit('/open-table', { failOnStatusCode: false });

  cy.percySnapshot('Game setup - Scoring settings');

  cy.get('[data-name=GameSetupNext]').click();
  cy.percySnapshot('Game setup - Players');

  cy.get('[data-name=GameSetupNext]').click();
  cy.percySnapshot('Game setup - First wu');
});
