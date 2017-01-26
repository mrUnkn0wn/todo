package org.dmarkov.todo.services;

import org.dmarkov.todo.db.DBService;


public abstract class BaseService {
    
    protected DBService dbService;
    
    public BaseService() {
        dbService = new DBService();
    }
}
