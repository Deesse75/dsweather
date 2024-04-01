import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://api.openweathermap.org",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
