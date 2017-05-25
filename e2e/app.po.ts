import { browser, by, element } from 'protractor';

export class ShopToCookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cook-root h1')).getText();
  }
}
