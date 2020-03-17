package org.dmarkov.todo.db;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

public class RedisService {

    JedisPool pool;
    String namespace = null;

    public RedisService(String namespace) {
        pool = new JedisPool(new JedisPoolConfig(), "redis_master");

        this.namespace = namespace;
    }

    private String generateKey(String name) {
        String result = name;

        if (this.namespace != null) {
            result = namespace + ':' + name;
        }

        return result;
    }

    public void set(String key, String value, int secondsToLive) {
        try (Jedis jedis = pool.getResource()) {
            jedis.setex(this.generateKey(key), secondsToLive, value);
        } catch (Exception e) {
            throw e;
        }
    }

    public String get(String key) {
        String result = null;

        try (Jedis jedis = pool.getResource()) {
            result = jedis.get(this.generateKey(key));
        }

        return result;
    }

    public void delete(String key) {
        try (Jedis jedis = pool.getResource()) {
            jedis.del(this.generateKey(key));
        }
    }

    protected void finalize() throws Throwable {
        super.finalize();
        pool.close();
    }
}
