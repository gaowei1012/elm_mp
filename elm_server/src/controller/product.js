const ProductModal = require('../database/mysql');
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");


/**
 * 获取商品列表
 * @param {*} ctx 
 * @param {*} next 
 */
exports.addProductList = async (ctx, next) => {
    const { product_title, price, score, product_picture_url, monthly_sales, delivery_distance, delivery_fee, price_detail } = ctx.request.body;
    const create_at = moment().format();
    const product_id = uuidv4();
    if (product_title === "" || price === "" || score === "" || product_picture_url === "" || monthly_sales === "" || delivery_distance === "" || delivery_fee === "" || price_detail === "") {
        ctx.body = {
            code: -1,
            message: "缺少必传参数",
        };
    } else {
        await ProductModal.insterProduct([product_id, product_title, price, score, product_picture_url, monthly_sales, delivery_distance, delivery_fee, price_detail, create_at])
            .then(ersult => {
                ctx.body = {
                    statusCode: 200,
                    message: "添加商品成功",
                    data: {
                      success: true,
                    },
                };
            })
            .catch(err => {
                ctx.body = {
                    code: 500,
                    message: `添加商品失败, ${err}`,
                };
            })
    }
    await next()
}

/**
 * 获取商品列表
 */
exports.getProductList = async (ctx, next) => {
    await ProductModal.findProductList()
        .then(result => {
            ctx.body = {
                statusCode: 200,
                message: "获取商品成功",
                data: {
                  success: true,
                  data: result
                },
            };
        })
        .catch(err => {
            ctx.body = {
                code: 500,
                message: `获取商品失败, ${err}`,
            };
        })

    await next()
}
