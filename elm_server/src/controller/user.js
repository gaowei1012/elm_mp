const UserModal = require("../database/mysql");
const { genPassword } = require("../utils/crypto");
const { secret } = require("../utils/secret");
const redis = require("../utils/redis");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const moment = require("moment");

/**
 * 用户注册
 * @param {*} ctx
 * @param {*} next
 */
exports.register = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const create_at = moment().format();
  let user_id = uuidv4();
  if (username === "" || password === "") {
    ctx.body = {
      code: -1,
      message: "缺少必传参数",
    };
  } else {
    const result = await UserModal.findOnesUser(username);
    if (result.length !== 0) {
      ctx.body = {
        code: -2,
        message: "用户名重复",
      };
    } else {
      await UserModal.insterUserData([
        user_id,
        username,
        genPassword(password),
        create_at,
      ])
        .then((result) => {
          ctx.body = {
            statusCode: 200,
            message: "注册成功",
            data: {
              success: true,
            },
          };
        })
        .catch((err) => {
          ctx.body = {
            code: 500,
            message: `注册失败, ${err}`,
          };
        });
    }

    await next();
  }
};

/**
 * 用户登录
 * @param {*} ctx
 * @param {*} next
 */
exports.login = async (ctx, next) => {
  const { username, password } = ctx.request.body;
  let payload = {
    username: username,
    time: new Date().getTime(),
    timeout: 1000 * 60 * 60 * 2,
  };
  let token = jwt.sign(payload, secret);
  if (username === "" || password === "") {
    ctx.body = {
      statusCode: -1,
      message: "缺少必传参数",
    };
  } else {
    await UserModal.findUser(username, genPassword(password))
      .then((result) => {
        redis.set("token", token);
        ctx.body = {
          statusCode: 200,
          message: "登录成功",
          data: [
            {
              success: true,
              username: result[0].username,
              user_id: result[0].user_id,
              create_at: result[0].create_at,
              token: token,
              avatar_url:
                "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F23%2F20180423195404_8NtRs.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611652470&t=48587c3cb69c97a3e992367ab13bc5d5",
            },
          ],
        };
      })
      .catch((err) => {
        ctx.body = {
          statusCode: 500,
          message: `登录失败失败: ${err}`,
        };
      });

    await next();
  }
};

/**
 * 退出登录
 * @param ctx
 * @param next
 */
exports.signOut = async (ctx, next) => {
  let token = ctx.request.header.token;
  if (!token) {
    ctx.body = {
      statusCode: -1,
      message: "参数错误",
    };
    return;
  }
  ctx.body = {
    statusCode: 200,
    message: "退出成功",
    data: {
      success: true,
    },
  };
  await next();
};
