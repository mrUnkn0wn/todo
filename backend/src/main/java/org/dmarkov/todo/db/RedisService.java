package org.dmarkov.todo.db;

import java.util.HashSet;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;
import redis.clients.jedis.JedisCluster;
import redis.clients.jedis.HostAndPort;
import redis.clients.jedis.JedisSentinelPool;

public class RedisService {

    JedisSentinelPool pool;
    JedisCluster cluster;
    String namespace = null;

    public RedisService(String namespace) {
        HashSet<String> slaves = new HashSet<>();
        slaves.add("redis_slave_1:6379");
        slaves.add("redis_slave_2:6379");

        pool = new JedisSentinelPool("redis_master", slaves);

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
