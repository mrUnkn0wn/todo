import { Page } from './app.po';

describe('TODO App', () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
    page.resetCookies();
  });

  it('should open login page if user not authenticated', () => {
    page.navigateTo();

    expect(page.getCurrentRoute()).toEqual('/auth/login');
  });

  it('should login to the app', async () => {
    page.navigateTo('/auth/login');

    page.login('user', '123');
    await page.waitForRoute('/tasks');

    expect(page.tasksListDisplayed()).toBe(true);
  });

  it('could add new task', async () => {
    const description = 'description';

    page.navigateTo();

    page.login('user', '123');
    await page.waitForRoute('/tasks');

    const tasksCount = await page.getTasksCount();
    await page.addNewTask(description);

    expect(page.getTasksCount()).toBe(tasksCount + 1);
  });

  it('could remove task', async () => {
    page.navigateTo();

    page.login('user', '123');
    await page.waitForRoute('/tasks');

    const tasksCount = await page.getTasksCount();
    await page.removeLastTask();

    expect(page.getTasksCount()).toBe(tasksCount - 1);
  });

  it('could change task state', async () => {
    const description = 'description';

    page.navigateTo();

    page.login('user', '123');
    await page.waitForRoute('/tasks');

    await page.addNewTask(description);

    let task = await page.getLastTask();
    await task.changeStatus();

    expect(task.isActive()).toBe(false);

    await page.removeLastTask();
  });

  it('could change task description', async () => {
    const description = 'description';
    const newDescription = 'new description';

    page.navigateTo();

    page.login('user', '123');
    await page.waitForRoute('/tasks');

    await page.addNewTask(description);

    let task = await page.getLastTask();
    await task.changeDescription(newDescription);

    expect(task.getDescription()).toBe(newDescription);

    await page.removeLastTask();
  });
});
