export interface ITask {
  id: number,
  description: string,
  active: boolean,
  editMode: boolean
}

export interface ITaskList {
  items: Array<ITask>
}
