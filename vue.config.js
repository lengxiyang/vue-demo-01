module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-demo-01/dist/'
        : '/'
}