package org.dmarkov.todo.services;

import java.util.List;
import org.dmarkov.todo.entities.Task;

public class TaskService extends BaseService {
        
    public List<Task> getTasks(Integer userId) {
        return dbService.getTaskMapper().getTasks(userId);
    }
    
    public Task addTask(Integer userId, Task task) {
        return dbService.getTaskMapper().addTask(userId, task);
    }
    
    public void deleteTask(Integer taskId) {
        dbService.getTaskMapper().deleteTask(taskId);
    }
    
    public Task updateTask(Integer userId, Task task) {
        dbService.getTaskMapper().updateTask(userId, task);
        
        return task;
    }
}
