package org.dmarkov.todo;

import javax.ws.rs.ApplicationPath;
import org.dmarkov.todo.filters.AuthFilter;
import org.dmarkov.todo.filters.CORSResponseFilter;
import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("/api")
public class Application extends ResourceConfig {
 
    public Application() {
        // Register resources and providers using package-scanning.
        packages("org.dmarkov.todo.api");
 
        //register(CORSResponseFilter.class);
        //register(AppExceptionMapper.class);
        register(AuthFilter.class);
    }
}
