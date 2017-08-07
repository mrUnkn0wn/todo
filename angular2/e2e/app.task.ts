import { browser, by, element, Key } from 'protractor';

export class Task {
  element

  constructor (element) {
    this.element = element;
  }

  remove () {
    return this.element.element(by.css('.action.item-delete')).click();
  }

  async changeStatus () {
    const initStatus = await this.isActive();
    console.log(initStatus);

    this.element.element(by.css('.action.item-change-status')).click();

    return browser.wait(() => {
      return this.isActive().then((status) => {
        return status !== initStatus;
      });
    }, 5000, 'Timed out waiting for changing task status');
  }

  editTask () {
    return this.element.element(by.css('.action.item-edit')).click();
  }

  async changeDescription (description) {
    const initDescription = await this.getDescription();

    this.editTask();
    await this.element.element(by.name('description')).clear();
    await this.element.element(by.name('description')).sendKeys(description);
    await this.element.element(by.name('description')).sendKeys(Key.ENTER);

    return browser.wait(() => {
      return this.getDescription().then((description) => {
        return initDescription !== description;
      });
    }, 5000, 'Timed out waiting for changing task description');
  }

  isActive () {
    return this.element.getAttribute('class').then((classes) => {
      console.log(classes);
      return classes.includes('active');
    });
  }

  getDescription () {
      return this.element.element(by.css('.item-description')).getText();
  }
}
