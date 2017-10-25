const webpack = require("webpack");
const path = require("path");
const library = "[name]_lib";
const paths = require('./paths');

const vendors = [
  "react",
  "react-dom",
  "lodash",
  "moment",
  "immutable",
  "rc-animate",
  "rc-notification",
  "rc-select",
  "rc-time-picker",
  "rc-tooltip",
  "rc-tween-one",
  "qrcode.react",
  "notification_op",
  "react-autobind",
  "react-redux",
  "react-router",
  "react-router-redux",
  "redux",
  "redux-immutable",
  "redux-thunk",
  "shortid",
  "rc-pagination",
  "mj-rc-calendar",
  "classnames",
  "antd",
  "sortablejs"
];

module.exports = {
  entry: vendors,
  output: {
    filename: "[name].[chunkhash].js",
    library,
    path: path.resolve(paths.dllPath)
  },
  resolve: { fallback: path.join(__dirname, "node_modules") },
  plugins: [
    new webpack.DllPlugin({
      name: library,
      path: path.join(paths.dllPath, "[name]-manifest.json"),
      context:__dirname
    })
  ]
};
