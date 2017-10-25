"use strict";

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

process.on("unhandledRejection", err => {
  throw err;
});
require('../config/env');
const webpack = require("webpack");
const config = require("../config/webpack.dll");

webpack({ config }, (err, stats) => {
  if (err || stats.hasErrors()) {
    console.log("webpack dll build error", err);
  }
});
