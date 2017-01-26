package org.dmarkov.todo.services;

import java.util.Date;
import java.util.UUID;
import javax.naming.AuthenticationException;
import org.dmarkov.todo.entities.Session;

public class AuthService extends BaseService {
    public String login(String username, String password) throws AuthenticationException {
        Integer userId = dbService.getAuthMapper().login(username, password);

        if(userId != null && userId > 0) {
            Session session = new Session();
            String sessionId = UUID.randomUUID().toString();
            session.setUserId(userId);
            session.setSessionId(sessionId);
            session.setCreationTime(new Date());
            
            dbService.getAuthMapper().createSession(session);
            
            return sessionId;
        } else {
            //throw exception auth
            throw new AuthenticationException();
        }
    }
    
    public String auth(String sessionId) throws AuthenticationException{
        if(sessionId != null) {
            String newSessionId = UUID.randomUUID().toString();
            Session session = dbService.getAuthMapper().getSession(sessionId);
            if(session != null) {                
                session.setCreationTime(new Date());
                session.setSessionId(newSessionId);
                dbService.getAuthMapper().createSession(session);
                dbService.getAuthMapper().deleteSession(sessionId);
                
                return newSessionId;
            } else {
                throw new AuthenticationException();
            }
        } else {
            throw new AuthenticationException();
        }
    }
    
    public void logout(String sessionId) {
        if (sessionId != null) {
            dbService.getAuthMapper().deleteSession(sessionId);
        }
    }
    
    public Integer getSessionUserId(String sessionId) throws AuthenticationException{
        if(sessionId != null) {
            return dbService.getAuthMapper().getSessionUserId(sessionId);
        } else {
            throw new AuthenticationException();
        }
    } 
}
