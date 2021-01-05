const Koa = require('koa')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const cors = require('koa2-cors');
const {host, port, database} = require('./config')

const app = new Koa()

const sessionMysqlConfig = {
    user: database.USERNAME,
    password: database.PASSWORD,
    database: database.DATABASE,
    host: database.HOST,
}
app.use(cors({
    origin: function(ctx) { //设置允许来自指定域名请求
        if (ctx.url === '/') {
            return '*'; // 允许来自所有域名请求
        }
        return 'http://localhost:1230';
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
}))
app.use(
    session({
        key: 'USER_SID',
        store: new MysqlStore(sessionMysqlConfig),
    })
)

app.use(koaBody())
app.use(logger())

app.use(require('./router/user').routes())
app.use(require('./router/address').routes())

app.listen(port, () => {
    console.log(`http://${host}:${port}`)
})
