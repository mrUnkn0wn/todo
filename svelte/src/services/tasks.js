import { restUrl } from '../config';

const headers = { 'Content-type': 'application/json;charset=UTF-8'};

export default class TasksService {
  static async getTasks () {
    const response = await fetch(`${restUrl}/task`);

    return  response.json();
  }

  static async addTask (description) {
    const response = await fetch(`${restUrl}/task`, {
      headers,
      method: 'post',
      body: JSON.stringify({ description })
    });

    return response.json();
  }

  static async updateTask (task) {
    const response = await fetch(`${restUrl}/task`, {
      headers,
      method: 'put',
      body: JSON.stringify(task)
    });

    return response.json();
  }

  static async deleteTask (id) {
    await fetch(`${restUrl}/task/${id}`, {
      method: 'delete'
    });

    return id;
  }
}