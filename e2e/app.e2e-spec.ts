import { Angular4StartPage } from './app.po';

describe('angular4-start App', () => {
  let page: Angular4StartPage;

  beforeEach(() => {
    page = new Angular4StartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
