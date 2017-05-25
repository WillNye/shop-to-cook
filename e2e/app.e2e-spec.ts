import { ShopToCookPage } from './app.po';

describe('shop-to-cook App', () => {
  let page: ShopToCookPage;

  beforeEach(() => {
    page = new ShopToCookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cook works!');
  });
});
