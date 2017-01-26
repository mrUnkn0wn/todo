package org.dmarkov.todo.filters;

import javax.naming.AuthenticationException;
import javax.ws.rs.Path;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerRequestFilter;
import javax.ws.rs.container.ResourceInfo;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.Provider;
import org.dmarkov.todo.services.AuthService;

@Provider
public class AuthFilter implements ContainerRequestFilter {

    @Context
    javax.inject.Provider<ResourceInfo> resource;

    @Override
    public void filter(ContainerRequestContext requestContext) {
        Path pathAnnotation = resource.get().getResourceClass().getAnnotation(Path.class);
        String pathValue = pathAnnotation.value();
        
        if(pathValue.equals("/auth")) {
            return;
        }
        
        AuthService authService = new AuthService();
        String sessionId = requestContext.getCookies().get("sessionId").getValue();
        
        if(sessionId != null) {
            try {
                Integer userId = authService.getSessionUserId(sessionId);
                requestContext.getHeaders().add("user-id", userId.toString());
            } catch(AuthenticationException exception) {
                requestContext.abortWith(Response.status(Status.UNAUTHORIZED).build());
            }            
        }
    }
}
