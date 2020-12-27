const redis = require("redis");
const { redisbase } = require("../config");

const redisConfig = {
  host: redisbase.HOST,
  port: redisbase.PORT,
  db: 4,
};

const createRedisClient = (channel, callback) => {
  let client = redis.createClient(redisConfig);

  client.on("message", async (channel, message) => {
    console.log(
      "Received subscribe message, channel [%s] message [%s]",
      channel,
      message
    );
    await callback(channel, message);
  });
  // 监听redis 的connect
  client.on("reconnecting", (err) => {
    console.log("Redis reconnecting:" + err);
  });

  // 监听redis 的错误
  client.on("error", (err) => {
    console.log("Redis Error:" + err);
  });

  // 监听redis 订阅事件
  client.on("subscribe", (channel, count) => {
    console.log(
      "client subscribed to " + channel + "," + count + " total subscriptions"
    );
  });

  return client;
};

module.exports = createRedisClient;
