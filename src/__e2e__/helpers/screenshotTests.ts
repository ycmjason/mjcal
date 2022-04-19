export const screenshotTests = (
  tests: [name: string, url: string][],
  { namePrefix }: { namePrefix?: string } = {},
) =>
  tests.forEach(([name, url]) => {
    const screenshotName = namePrefix ? `${namePrefix} - ${name}` : name;
    it(`should match screenshots for "${screenshotName}"`, () => {
      cy.visit(url, { failOnStatusCode: false });
      cy.percySnapshot(screenshotName);
    });
  });
