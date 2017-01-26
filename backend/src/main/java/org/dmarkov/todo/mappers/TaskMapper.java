package org.dmarkov.todo.mappers;

import java.util.List;
import org.dmarkov.todo.entities.Task;

public interface TaskMapper {
    public List<Task> getTasks(Integer userId);
    public void deleteTask(Integer taskId);
    public void updateTask(Integer userId, Task task);
    public Task addTask(Integer userId, Task task);
}
