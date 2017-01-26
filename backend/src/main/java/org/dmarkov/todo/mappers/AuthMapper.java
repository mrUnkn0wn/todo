package org.dmarkov.todo.mappers;

import org.dmarkov.todo.entities.Session;

public interface AuthMapper {
    public Session getSession(String sessionId);
    public void deleteSession(String sessionId);
    public void createSession(Session session);
    public Integer login(String username, String password);
    public Integer getSessionUserId(String sessionId);
}
