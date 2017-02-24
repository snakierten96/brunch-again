import { BrunchAgainPage } from './app.po';

describe('brunch-again App', () => {
  let page: BrunchAgainPage;

  beforeEach(() => {
    page = new BrunchAgainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
