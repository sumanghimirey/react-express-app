const path = require("path");

module.exports = {
    mode:"development",
    entry:path.resolve(__dirname,'src','app'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    resolve: {
        extensions:['.js','.jsx']
    },
    devServer:{
        historyApiFallback:true //if we dont want to use react route
    },
    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader'
        }]
    }
}