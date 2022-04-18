export const addRound = ({
  winnerIndex,
  loserIndex,
}: {
  winnerIndex: number;
  loserIndex: number;
}) => {
  cy.get('[data-name=AddRoundModalNext]').click();
  cy.get('[data-name=WinnerOptionButton]').eq(winnerIndex).click();
  cy.get('[data-name=AddRoundModalNext]').click();
  cy.get('[data-name=LoserOptionButton]').eq(loserIndex).click();
  cy.get('[data-name=AddRoundModalNext]').click();
};
