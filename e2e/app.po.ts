import { browser, element, by } from 'protractor';

export class Qu4trots.Github.IoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('qu4tro-root h1')).getText();
  }
}
