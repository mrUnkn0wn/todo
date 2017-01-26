package org.dmarkov.todo.api;

import javax.naming.AuthenticationException;
import javax.ws.rs.CookieParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.NewCookie;
import javax.ws.rs.core.Response;
import org.dmarkov.todo.services.AuthService;

@Path("/auth")
public class AuthResource {
    
    private AuthService authService;
    
    public AuthResource() {
        authService = new AuthService();
    }
    
    @GET
    public Response auth(@CookieParam("sessionId") String sessionId) throws AuthenticationException {
        String newSessionId = authService.auth(sessionId);
        
        return Response.ok().cookie(getCookie(newSessionId)).build(); 
        //return Response.ok().header("Set-Cookie","sessionId=" + newSessionId + "; httponly; path=/").build(); 
    } 
    
    @GET
    @Path("/login")
    public Response login(
        @QueryParam("username") String username,
        @QueryParam("password") String password) throws AuthenticationException {
        
        String sessionId = authService.login(username, password);
        
        return Response.ok().cookie(getCookie(sessionId)).build(); 
        //return Response.ok().header("Set-Cookie","sessionId=" + sessionId + "; httponly; path=/").build(); 
    }
    
    @GET
    @Path("/logout")
    public void logout(@CookieParam("sessionId") String sessionId) {
        authService.logout(sessionId);
    }
    
    private NewCookie getCookie(String sessionId) {
        return new NewCookie("sessionId", sessionId, "/", null, null, 1000000000, false, true);
    }
}
