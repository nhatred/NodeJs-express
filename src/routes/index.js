const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);

    // những cái chuyển đến trang gốc luôn luôn để ở dưới cùng
    app.use('/', siteRouter);
}
module.exports = route;
