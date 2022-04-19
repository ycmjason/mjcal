export const screenshotTests = (
  tests: [name: string, url: string, beforeSnap?: () => void][],
  { namePrefix }: { namePrefix?: string } = {},
) =>
  tests.forEach(([name, url, beforeSnap = () => {}]) => {
    const screenshotName = namePrefix ? `${namePrefix} - ${name}` : name;
    it(`should match screenshots for "${screenshotName}"`, async () => {
      cy.visit(url, { failOnStatusCode: false });
      beforeSnap();
      cy.percySnapshot(screenshotName);
    });
  });
