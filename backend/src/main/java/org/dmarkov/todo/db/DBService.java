package org.dmarkov.todo.db;

import java.io.IOException;
import java.io.Reader;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import org.apache.ibatis.io.Resources;
import org.dmarkov.todo.mappers.AuthMapper;
import org.dmarkov.todo.mappers.TaskMapper;

public class DBService {
    
    private TaskMapper taskMapper;
    private AuthMapper authMapper;

    private SqlSession session;
    
    
    public DBService(){
        String resource = "org/dmarkov/todo/mybatis-configuration.xml";
        Reader reader = null;
        SqlSessionFactory sqlMapper = null;
        
        try {
                reader = Resources.getResourceAsReader(resource);
                sqlMapper = new SqlSessionFactoryBuilder().build(reader);
        } catch (IOException e) {
                e.printStackTrace();
        }
        
        session = sqlMapper.openSession(true);
    }
    
    public TaskMapper getTaskMapper() {
        if (taskMapper == null) {
            taskMapper = session.getMapper(TaskMapper.class);
        }
       
        return taskMapper;
    }
    
    public AuthMapper getAuthMapper() {
        if (authMapper == null) {
            authMapper = session.getMapper(AuthMapper.class);
        }
       
        return authMapper;
    }    
    
    protected void finalize() throws Throwable {
        super.finalize();
        session.close();
    }
}
