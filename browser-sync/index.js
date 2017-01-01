var bs = require("browser-sync").create();

var historyApiFallback = require('connect-history-api-fallback');

bs.init({
    server: "build",
    files: ["**/*.*"],
    middleware: [historyApiFallback()],
    port: 1337,
    notify: false
});