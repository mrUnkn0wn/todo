package org.dmarkov.todo;

import javax.naming.AuthenticationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.ext.ExceptionMapper;

public class AppExceptionMapper implements ExceptionMapper<Exception>{
    @Override
    public Response toResponse(Exception ex) {
        if(ex instanceof AuthenticationException) {
            return Response.status(Status.UNAUTHORIZED).build();
        } else {
            return Response.status(Status.SERVICE_UNAVAILABLE).build();
        }
        
    }    
}
