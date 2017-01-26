package org.dmarkov.todo.api;

import java.util.List;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.HeaderParam;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.dmarkov.todo.entities.Task;
import org.dmarkov.todo.services.TaskService;

@Path("/task")
public class TaskResource {
    
    final private TaskService taskService;
    
    public TaskResource() {
        taskService = new TaskService();
    }    
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Task> getTasks(@HeaderParam("user-id") Integer userId) {
        return taskService.getTasks(userId);
    }
    
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Task addTask(Task task, @HeaderParam("user-id") Integer userId) {
        return taskService.addTask(userId, task);
    }
    
    @DELETE
    @Path("/{taskId}")
    public void deleteTask(@PathParam("taskId")Integer taskId,  @HeaderParam("user-id") Integer userId) {
        taskService.deleteTask(taskId);
    }
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Task updateTask(Task task, @HeaderParam("user-id") Integer userId) {
        return taskService.updateTask(userId, task);
    }
}
