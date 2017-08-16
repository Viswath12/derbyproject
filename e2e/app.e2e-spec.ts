import { DerbyprojectPage } from './app.po';

describe('derbyproject App', () => {
  let page: DerbyprojectPage;

  beforeEach(() => {
    page = new DerbyprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
