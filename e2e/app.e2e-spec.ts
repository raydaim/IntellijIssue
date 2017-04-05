import { IntellijIssuePage } from './app.po';

describe('intellij-issue App', () => {
  let page: IntellijIssuePage;

  beforeEach(() => {
    page = new IntellijIssuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
