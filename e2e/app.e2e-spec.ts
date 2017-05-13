import { Qu4trots.Github.IoPage } from './app.po';

describe('qu4trots.github.io App', () => {
  let page: Qu4trots.Github.IoPage;

  beforeEach(() => {
    page = new Qu4trots.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('qu4tro works!');
  });
});
