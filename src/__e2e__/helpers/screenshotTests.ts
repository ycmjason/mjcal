export const screenshotTests = (
  tests: [name: string, url: string, beforeSnap?: () => void][],
  { namePrefix }: { namePrefix?: string } = {},
) => {
  for (const [name, url, beforeSnap = () => {}] of tests) {
    const screenshotName = namePrefix ? `${namePrefix} - ${name}` : name;
    it(`should match screenshots for "${screenshotName}"`, () => {
      cy.visit(url, { failOnStatusCode: false });
      beforeSnap();
      cy.percySnapshot(screenshotName);
    });
  }
};
