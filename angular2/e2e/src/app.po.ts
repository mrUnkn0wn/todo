import { browser, by, element, Key } from 'protractor';
import { Task } from './app.task';

export class Page {
  navigateTo (route ='/') {
    return browser.get(route);
  }

  tasksListDisplayed () {
    return element(by.css('.tasks')).isDisplayed();
  }

  getTasksCount () {
    return element.all(by.css('.task-item')).then((items) => {
      return items.length;
    });
  }

  getLastTask () {
    return new Task(element.all(by.css('.task-item')).last());
  }

  async addNewTask (description) {
    const initCount = await this.getTasksCount();

    element(by.name('newTask')).sendKeys(description);
    element(by.name('newTask')).sendKeys(Key.ENTER);

    return this.waitForTasksCountChanged(initCount);
  }

  async removeLastTask () {
    const initCount = await this.getTasksCount();

    (new Task(element.all(by.css('.task-item')).last())).remove();

    return this.waitForTasksCountChanged(initCount);
  }

  getCurrentRoute () {
    return browser.getCurrentUrl().then((url) => {
      return url.replace(browser.baseUrl, '');
    })
  }

  login (username, password) {
    element(by.name('username')).sendKeys(username);
    element(by.name('password')).sendKeys(password);

    return element(by.tagName('button')).click();
  }

  resetCookies () {
    browser.manage().deleteAllCookies();
  }

  waitForTasksCountChanged (initCount) {
    return browser.wait(async () => {
      const count = await this.getTasksCount();
      return count !== initCount;
    }, 5000, 'Timed out waiting for tasks count changed');
  }

  waitForRoute (route, timeout = 5000) {
    return browser.wait(() => {
      return this.getCurrentRoute().then((currentRoute) => {
        return route === currentRoute;
      });
    }, timeout, 'Timed out waiting for route');
  }
}
