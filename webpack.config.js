module.exports = {
    entry: "./js/app.js",
    output: { filename: "./js/out.js" },
    watch: true,
    mode: 'production',
    resolve: {
        extensions: ['.js'],
    }
};