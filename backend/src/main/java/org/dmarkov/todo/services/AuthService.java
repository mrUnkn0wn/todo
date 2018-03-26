package org.dmarkov.todo.services;

import java.util.UUID;
import javax.naming.AuthenticationException;
import org.dmarkov.todo.db.RedisService;

public class AuthService extends BaseService {
    private final int TTL = 600;
    private final RedisService redisService = new RedisService("auth");
    
    
    public String login(String username, String password) throws AuthenticationException {
        Integer userId = dbService.getAuthMapper().login(username, password);
        System.out.println("================================================");
        if(userId != null && userId > 0) {
            String sessionId = UUID.randomUUID().toString();
            
            try {
                this.redisService.set(sessionId, userId.toString(), TTL);
            } catch (Exception e) {
                throw new AuthenticationException();
            }
            
            return sessionId;
        } else {
            //throw exception auth
            throw new AuthenticationException();
        }
    }
    
    public String auth(String sessionId) throws AuthenticationException{
        if(sessionId != null) {
            String newSessionId = UUID.randomUUID().toString();
            String userId = this.redisService.get(sessionId);
            if(userId != null) {                
                this.redisService.set(newSessionId, userId, TTL);
                
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
            this.redisService.delete(sessionId);
        }
    }
    
    public String getSessionUserId(String sessionId) throws AuthenticationException {
        String userId = this.redisService.get(sessionId); 
        
        if(userId != null) {
            return userId;
        } else {
            throw new AuthenticationException();
        }
    } 
}
